import { useWeb3React } from '../../hooks/useWeb3ReactShim';
import BigNumber from "bignumber.js";
import React, { useState } from "react";
import Countdown from "react-countdown";
import { useApplicationContext } from "../../context/applicationContext";
import { usePoolContext } from "../../context/poolContext";
import {
  useIDOPoolContract,
  useIDOERC20PoolContract
} from "../../hooks/useContract";

import * as s from "../../styles/global";
import { utils } from "../../utils";

const WithdrawETH = (props) => {
  const { account, library } = useWeb3React();
  const [loading, setLoading] = useState(false);
  const { idoAddress } = props;

  const {
    triggerUpdateAccountData,
    baseCurrencySymbol,
    TokenLockerFactoryContract,
  } = useApplicationContext();

  const {
    updatePoolInfo
  } = usePoolContext()
  
  const [ idoInfo, setIdoInfo ] = useState(usePoolContext().allPools[idoAddress])

  const {
    idoType,
    payToken,
  } = idoInfo
  
  const IDOPoolNativeContract = useIDOPoolContract(idoAddress)
  const IDOPoolERC20Contract = useIDOERC20PoolContract(idoAddress)
  
  const IDOPoolContract = (idoType == `ERC20`) ? IDOPoolERC20Contract : IDOPoolNativeContract
  
  const payCurrency = (idoType === `ERC20`) ? payToken.symbol : baseCurrencySymbol
  
  if (!account || !idoInfo || !library.web3) {
    return null;
  }

  if (!utils.isValidPool(idoInfo)) {
    return null;
  }

  if (idoInfo.owner.toLowerCase() !== account.toLowerCase()) {
    return null;
  }

  const withdrawETH = async () => {
    setLoading(true); // TODO: add action loader to the appropriate button
    try {
      const prepareTx = async () => {
        if (idoType === `ERC20`) {
          return await IDOPoolContract.withdraw({
            from: account
          })
        } else {
          const isNeedLocker = parseInt(idoInfo.claim) > parseInt(Date.now() / 1000);

          return await IDOPoolContract.withdrawETH({
            from: account,
            value: isNeedLocker ? await TokenLockerFactoryContract.fee() : 0,
          });
        }
      }

      const tx = await prepareTx()

      const receipt = await tx.wait();

      updatePoolInfo(idoAddress).then((newInfo) => {
        setIdoInfo(newInfo)
      })
      triggerUpdateAccountData();
      // TODO: add trigger for update IDOInfo after actions
      console.log("withdrawETH receipt", receipt);
    } catch (err) {
      console.log("withdrawETH Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const withdrawToken = async () => {
    setLoading(true); // TODO: add action loader to the appropriate button
    try {
      const tx = await IDOPoolContract.refundTokens({
        from: account,
      });

      const receipt = await tx.wait();

      updatePoolInfo(idoAddress).then((newInfo) => {
        setIdoInfo(newInfo)
      })
      triggerUpdateAccountData();
      // TODO: add trigger for update IDOInfo after actions
      console.log("withdrawToken receipt", receipt);
    } catch (err) {
      console.log("withdrawToken Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const withdrawUnsoldToken = async () => {
    setLoading(true); // TODO: add action loader to the appropriate button
    try {
      const tx = await IDOPoolContract.withdrawNotSoldTokens({
        from: account,
      });

      const receipt = await tx.wait();

      updatePoolInfo(idoAddress).then((newInfo) => {
        setIdoInfo(newInfo)
      })
      triggerUpdateAccountData();
      // TODO: add trigger for update IDOInfo after actions
      console.log("withdrawUnsoldToken receipt", receipt);
    } catch (err) {
      console.log("withdrawUnsoldToken Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const hasEnded = parseInt(idoInfo.end) < parseInt(Date.now() / 1000);
  const allowSoftWithdraw = (idoInfo.allowSoftWithdraw == true)

  let buttonDisabled = (
    !hasEnded ||
    BigNumber(idoInfo.totalInvestedETH).lt(BigNumber(idoInfo.softCap)) ||
    idoInfo.balance == 0
  )
  if (allowSoftWithdraw) {
    if (idoInfo.balance != 0) buttonDisabled = false
  }
  
  const renderAmount = (amount) => {
    return (
      <>
        {
          BigNumber(
            BigNumber(
              (idoType === `ERC20`)
                ? utils.tokenAmountFromWei(amount, payToken.decimals)
                : library.web3.utils.fromWei(amount)
            ).toFixed(10)
          ).toNumber() +
          " " +
          payCurrency
        }
      </>
    )
  }
  return (
    <s.Card
      style={{
        minWidth: 350,
        flex: 1,
        margin: 10,
      }}
    >
      <s.TextTitle>WITHDRAW</s.TextTitle>
      <s.TextID>(Pool owner only)</s.TextID>
      <s.SpacerSmall />
      {
        !hasEnded && !allowSoftWithdraw && (
          <s.Container fd="row" ai="center" jc="space-between">
            <s.Container flex={3}>
              <s.TextID>Can withdraw in</s.TextID>
            </s.Container>

            <Countdown date={idoInfo.end * 1000} />
          </s.Container>
        )
      }
      <s.SpacerMedium />
      <s.Container ai="center">
        <s.Container>
          <s.TextID>Total invested</s.TextID>
          <s.TextDescription>
            {renderAmount((allowSoftWithdraw) ? idoInfo.totalInvestedETH : idoInfo.balance)}
          </s.TextDescription>
        </s.Container>
        {allowSoftWithdraw && (
          <s.Container>
            <s.TextID>Allow for withdraw</s.TextID>
            <s.TextDescription>
              {renderAmount(idoInfo.balance)}
            </s.TextDescription>
          </s.Container>
        )}
        <s.button
          fullWidth
          disabled={buttonDisabled}
          onClick={(e) => {
            e.preventDefault();
            withdrawETH();
          }}
        >
          WITHDRAW
        </s.button>
      </s.Container>
      
      <s.Container>
        <s.TextID>Unsold token</s.TextID>
        <s.TextDescription>
          {
            BigNumber(
              BigNumber(idoInfo.unsold)
              .dividedBy(10 ** idoInfo.tokenDecimals)
              .toFixed(10)
            ).toNumber() +
            " " +
            idoInfo.tokenSymbol
          }
        </s.TextDescription>
      </s.Container>
      <s.Container>
        {BigNumber(idoInfo.totalInvestedETH).lt(BigNumber(idoInfo.softCap) && (idoInfo.allowSoftWithdraw != true) ) ? (
          <s.button
            fullWidth
            disabled={
              !hasEnded ||
              !BigNumber(idoInfo.totalInvestedETH).lt(BigNumber(idoInfo.softCap)) ||
              (!idoInfo.unsold || idoInfo.unsold == "0")
            }
            onClick={(e) => {
              e.preventDefault();
              withdrawToken();
            }}
          >
            WITHDRAW ALL TOKEN
          </s.button>
        ) : (
          <s.button
            fullWidth
            disabled={
              !hasEnded ||
              idoInfo.balance > 0 ||
              (!idoInfo.unsold || idoInfo.unsold == "0")
            }
            onClick={(e) => {
              e.preventDefault();
              withdrawUnsoldToken();
            }}
          >
            WITHDRAW UNSOLD TOKEN
          </s.button>
        )}
      </s.Container>
    </s.Card>
  );
};
export default WithdrawETH;
