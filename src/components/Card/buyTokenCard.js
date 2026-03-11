import { useWeb3React } from '../../hooks/useWeb3ReactShim';
import BigNumber from "bignumber.js";
import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import { useApplicationContext } from "../../context/applicationContext";
import { usePoolContext } from "../../context/poolContext";
import {
  useIDOPoolContract,
  useIDOERC20PoolContract,
  useTokenContract
} from "../../hooks/useContract";

import * as s from "../../styles/global";
import { utils } from "../../utils";
import { NumberField } from "../FormField";
import ProgressBar from "../Modal/ProgressBar";
import PoolCountdown from "../Utils/poolCountdown";
import Loader from '../Loader';

const BuyTokenCard = (props) => {
  const { account, library } = useWeb3React();
  const [ethAmount, setEthAmount] = useState("0");
  const [tokensToBuy, setTokensToBuy] = useState(0);
  const [loading, setLoading] = useState(false);
  const { idoAddress } = props;
  const {
    triggerUpdateAccountData,
    baseCurrencySymbol
  } = useApplicationContext();
  const {
    updatePoolInfo
  } = usePoolContext()
  
  const [ idoInfo, setIdoInfo ] = useState(usePoolContext().allPools[idoAddress])

  const {
    idoType,
    payToken,
    tokenDecimals,
    tokenAddress,
  } = idoInfo

  const [ isNeedApprove, setIsNeedApprove ] = useState(false)
  const [ isNeedApproveFetching, setIsNeedApproveFetching ] = useState(false)
  const [ isApproving, setIsApproving ] = useState(false)


  const payCurrency = (idoType === `ERC20`) ? payToken.symbol : baseCurrencySymbol

  const payTokenContract = useTokenContract((idoType === `ERC20`) ? payToken.address : tokenAddress)
  
  const checkAllowance = async () => {
    setIsNeedApproveFetching(true)
    console.log('>>> checkAllowance')
    const allowance = await utils.getTokenAllowance({
      tokenAddress: payToken.address,
      web3: library.web3,
      owner: account,
      spender: idoAddress
    })
    console.log('>>> allowance', allowance)
    setIsNeedApproveFetching(false)
    setIsNeedApprove(new BigNumber(ethAmount).isGreaterThan(allowance))
  }
  useEffect(async () => {
    if (idoType === `ERC20`) {
      await checkAllowance()
    }
  }, [ ethAmount ])

  const approveBuyToken = async () => {
    setIsApproving(true)
    try {
      const currentAllowance = await utils.getTokenAllowance({
        tokenAddress: payToken.address,
        web3: library.web3,
        owner: account,
        spender: idoAddress
      })
      if (new BigNumber(currentAllowance).gt(0)) {
        try {
          const resetTx = await payTokenContract.approve(idoAddress, `0x0`, { from: account })
          await resetTx.wait()
        } catch (resetErr) {
          console.log('approve zero-reset skipped (token may not support it):', resetErr)
        }
      }
      const tx = await payTokenContract.approve(
        idoAddress,
        `0x${BigNumber(ethAmount).toString(16)}`,
        {
          from: account,
        }
      )

      const receipt = await tx.wait()
      await checkAllowance()
      setIsApproving(false)
    } catch (e) {
      setIsApproving(false)
      console.log(e)
    }
  }
  
  const IDOPoolNativeContract = useIDOPoolContract(idoAddress)
  const IDOPoolERC20Contract = useIDOERC20PoolContract(idoAddress)
  
  const IDOPoolContract = (idoType == `ERC20`) ? IDOPoolERC20Contract : IDOPoolNativeContract

  if (!account) {
    return null;
  }
  if (!utils.isValidPool(idoInfo)) {
    return null;
  }
  if (!idoInfo) {
    return <s.TextDescription fullWidth>Loading</s.TextDescription>;
  }
  if (!idoInfo?.userData) {
    return <s.TextDescription fullWidth>Loading</s.TextDescription>;
  }



  const buyToken = async () => {
    if (idoType === `ERC20` && isNeedApprove) {
      await approveBuyToken()
    }
    setLoading(true); // TODO: add action loader to the appropriate button
    try {
      const makeTx = async () => {
        if (idoType == `ERC20`) {
          return await IDOPoolContract.pay(
            `0x${BigNumber(ethAmount).toString(16)}`,
            { from: account }
          )
        } else {
          return await IDOPoolContract.pay({
            from: account,
            value: `0x${BigNumber(ethAmount).toString(16)}`,
          })
        }
      }
      const tx = await makeTx()

      const receipt = await tx.wait();

      updatePoolInfo(idoAddress).then((newInfo) => {
        setIdoInfo(newInfo)
      })
      triggerUpdateAccountData();
      // TODO: add trigger for update IDOInfo after actions
      console.log("buyToken receipt", receipt);
    } catch (err) {
      console.log("buyToken Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const claimToken = async () => {
    setLoading(true); // TODO: add action loader to the appropriate button
    try {
      const tx = await IDOPoolContract.claim({
        from: account,
      });

      const receipt = await tx.wait();
  
      updatePoolInfo(idoAddress).then((newInfo) => {
        setIdoInfo(newInfo)
      })
      triggerUpdateAccountData();
      // TODO: add trigger for update IDOInfo after actions
      console.log("claimToken receipt", receipt);
    } catch (err) {
      console.log("claimToken Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const refund = async () => {
    setLoading(true); // TODO: add action loader to the appropriate button
    try {
      const tx = await IDOPoolContract.refund({
        from: account,
      });

      const receipt = await tx.wait();

      updatePoolInfo(idoAddress).then((newInfo) => {
        setIdoInfo(newInfo)
      })
      triggerUpdateAccountData();
      // TODO: add trigger for update IDOInfo after actions
      console.log("refund receipt", receipt);
    } catch (err) {
      console.log("refund Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const isStarted = parseInt(idoInfo.start) < (parseInt(Date.now() / 1000));
  const hasEnded = parseInt(idoInfo.end) < (parseInt(Date.now() / 1000));
  const reachSoftCap = BigNumber(idoInfo.totalInvestedETH).gte(BigNumber(idoInfo.softCap));

  const willhMaxAmountOverflow = BigNumber(ethAmount).gt(
    BigNumber(idoInfo.max).minus(BigNumber(idoInfo.userData.totalInvestedETH))
  );
  const reachMaxAmount = BigNumber(idoInfo.max).lte(
    BigNumber(idoInfo.userData.totalInvestedETH)
  );

  const lessThanMinAmount = BigNumber(ethAmount).lt(BigNumber(idoInfo.min));


  const formatWei = (weiValue, dp = 0) => {
    return BigNumber(
      BigNumber(
        (idoType === `ERC20`)
          ? utils.tokenAmountFromWei(weiValue, payToken.decimals)
          : library.web3.utils.fromWei(
            weiValue
          )
      ).toNumber()
    ).toFormat(dp)
  }

  const buyTokenAmountInput = (
    <NumberField
      value={tokensToBuy}
      label={"Tokens amount"}
      adornment={idoInfo.tokenSymbol}
      onChange={(e) => {
        e.preventDefault();
        let val = BigNumber(e.target.value).toFixed(0);
        if (!isNaN(val)) {
          setTokensToBuy(e.target.value);
          
          setEthAmount(
            (idoType === `ERC20`)
              ? utils.tokenAmountToWei(BigNumber(e.target.value).div(idoInfo.tokenRate), idoInfo.payToken.decimals)
              : BigNumber(idoInfo.tokenRate).times(e.target.value)
          );

        } else {
          setTokensToBuy(0);
          setEthAmount("0");
        }
      }}
    />
  )

  const buyTokenButton = (
    <s.button
      fullWidth
      disabled={
        hasEnded ||
        isNeedApproveFetching ||
        !isStarted ||
        tokensToBuy === 0 ||
        willhMaxAmountOverflow ||
        reachMaxAmount ||
        lessThanMinAmount
      }
      onClick={(e) => {
        e.preventDefault();
        buyToken();
      }}
    >
      {isNeedApproveFetching || loading ? (
        <Loader />
      ) : (
        <>
          {isApproving ? (
            <Loader />
          ) : (
            <>
              {isNeedApprove ? `APPROVE & BUY` : `BUY`}
            </>
          )}
        </>
      )}
    </s.button>
  )
  
  let claimDisabled = (
    !hasEnded ||
    (hasEnded && !reachSoftCap) ||
    BigNumber(idoInfo.userData.debt).lte(0)
  )
  if (idoInfo.allowRefund === false) {
    if (hasEnded && BigNumber(idoInfo.userData.debt).gt(0)) claimDisabled = false
  }
  return (
    <s.Card
      style={{
        minWidth: 350,
        flex: 1,
        margin: 10,
      }}
    >
      <s.TextTitle>BUY TOKEN</s.TextTitle>
      {hasEnded ? (
        <Badge bg="secondary">Ended</Badge>
      ) : isStarted ? (
        <Badge bg="success">Started</Badge>
      ) : (
        <Badge bg="secondary">Not started</Badge>
      )}
      <s.SpacerSmall />
      <PoolCountdown start={idoInfo.start} end={idoInfo.end} />
      <s.Container fd="row" jc="space-between" style={{ marginTop: 10 }}>
        <s.Card style={{ padding: 0 }}>
          <s.TextID>{"Minimum " + payCurrency}</s.TextID>
          <s.TextDescription>
            {formatWei(idoInfo.min)}
          </s.TextDescription>
        </s.Card>
        <s.Card style={{ padding: 0 }}>
          <s.TextID>Maximum {payCurrency}</s.TextID>
          <s.TextDescription>
            {formatWei(idoInfo.max)}
          </s.TextDescription>
        </s.Card>
      </s.Container>
      <s.Container fd="row" jc="space-between" ai="center">
        <s.Container flex={4}>
          <s.TextID>To claim</s.TextID>
          <s.TextDescription>
            {BigNumber(idoInfo.userData.debt)
              .dividedBy(10 ** idoInfo.tokenDecimals)
              .toString() +
              " $" +
              idoInfo.tokenSymbol}
          </s.TextDescription>
        </s.Container>
        <s.Container flex={1}>
          <s.button
            disabled={claimDisabled}
            onClick={(e) => {
              e.preventDefault();
              claimToken();
            }}
          >
            CLAIM
          </s.button>
        </s.Container>
      </s.Container>
      <s.Container fd="row" jc="space-between" ai="center">
        <s.Container flex={4}>
          <s.TextID>My invested {payCurrency}</s.TextID>
          <s.TextDescription>
            {formatWei(idoInfo.userData.totalInvestedETH)+ " " + payCurrency}
          </s.TextDescription>
        </s.Container>
        {idoInfo.allowRefund == -1 || idoInfo.allowRefund && (
          <s.Container flex={1}>
            <s.button
              disabled={
                !hasEnded ||
                BigNumber(idoInfo.totalInvestedETH).gte(
                  BigNumber(idoInfo.softCap)
                ) ||
                BigNumber(idoInfo.userData.totalInvestedETH).lte(0)
              }
              onClick={(e) => {
                e.preventDefault();
                refund();
              }}
            >
              REFUND
            </s.button>
          </s.Container>
        )}
      </s.Container>
      <s.TextID>Progress</s.TextID>
      <s.SpacerSmall />
      <ProgressBar now={parseInt(idoInfo.progress)} />
      <s.SpacerMedium />
      {!hasEnded && isStarted && (
        <>
          {idoType == `NATIVE` && (
            <s.Container fd="row" ai="center" jc="space-between">
              <s.Container flex={4} style={{ marginRight: 20 }}>
                {buyTokenAmountInput}
              </s.Container>
              <s.Container flex={1} ai="flex-end">
                {buyTokenButton}
              </s.Container>
            </s.Container>
          )}
          {idoType == `ERC20` && (
            <>
              <s.Container>
                {buyTokenAmountInput}
                <s.SpacerSmall />
                {buyTokenButton}
              </s.Container>
            </>
          )}
          <s.SpacerSmall />
          <s.Container fd="row" jc="space-between" ai="center"  style={{ wordBreak: "break-all" }} >
            <s.TextID>You will spend</s.TextID>
            {idoType == `ERC20` && (
              <>
                {ethAmount ? `${utils.tokenAmountFromWei(ethAmount, payToken.decimals)}` : 0}
                {` `}
                {payCurrency}
              </>
            )}
            {idoType == `NATIVE` && (
              <>
                { (ethAmount ? library.web3.utils.fromWei(ethAmount.toString(16)) : 0) +
                    " " +
                    payCurrency
                }
              </>
            )}
          </s.Container>
        </>
      )}
    </s.Card>
  );
};
export default BuyTokenCard;
