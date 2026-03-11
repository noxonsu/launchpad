import BigNumber from "bignumber.js";
import React, { useEffect, useState } from "react";
import { useWeb3React } from '../../../../hooks/useWeb3ReactShim';
import { FaImage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../../../../context/store";
import * as s from "../../../../styles/global";
import { chainRouter } from "../../../../constants/networksInfo";
import SocialMediaModal from "../../../Modal/socialmediaModal";
import { useApplicationContext } from "../../../../context/applicationContext";
import { usePoolContext } from "../../../../context/poolContext"
import { useTokenContract } from "../../../../hooks/useContract";
import ReadMore from "../../readMore";
import {
  isAddress,
  tokenAmountFromWei,
  tokenAmountToWei
} from "../../../../utils/utils";
import { useIPFS } from "../../../../hooks/useIPFS";
import { ETHER } from "../../../../constants";

export default function Preview() {
  const { account, chainId, library } = useWeb3React();
  const { updatePoolInfo } = usePoolContext()
  const {
    baseCurrencySymbol,
    IDOFactoryContract,
    IDOFactoryAddress,
    TokenLockerFactoryAddress,
    FeeTokenContract,
    FeeTokenSymbol,
    FeeTokenDecimals,
    FeeTokenApproveToFactory,
    triggerUpdateAccountData,
    isFeeTokenDataFetching,
  } = useApplicationContext();
  const navigate = useNavigate();

  const {
    // erc20-erc20-e
    useERC20ForBuy: [useERC20ForBuy],
    erc20ForBuyAddress: [erc20ForBuyAddress],
    erc20ForBuyInfo: [erc20ForBuyInfo],
    // ----
    tokenInformation: [tokenInfo],
    address: [tokenAddress],
    icon: [icon, setIcon],
    tokenRate: [tokenRate],
    hardCap: [hardCap],
    softCap: [softCap],
    minETH: [minETH],
    maxETH: [maxETH],
    listingRate: [listingRate],
    liquidityPercentage: [liquidityPercentage],
    isAddLiquidityEnabled: [isAddLiquidityEnabled],
    start: [start],
    end: [end],
    unlock: [unlock],

    description: [description],
    website: [website],
    discord: [discord],
    telegram: [telegram],
    twitter: [twitter],
    allowSoftWithdraw: [allowSoftWithdraw],
  } = useStoreContext();

  const ipfs = useIPFS();

  const tokenContract = useTokenContract(tokenAddress);
  const [IDOFactoryFee, sesIDOFactoryFee] = useState("0");
  const [tokenApprove, setTokenApprove] = useState("");
  const [isTokenApprovalFetching, setIsTokenApprovalFetching] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isNavigateToNewIDO, setIsNavigateToNewIDO ] = useState(false)
  
  const tokenRateBN = BigNumber(tokenRate);
  const hardCapBN = BigNumber(hardCap);
  const listingRateBN = BigNumber(isAddLiquidityEnabled ? listingRate : 0);
  const lp = BigNumber(isAddLiquidityEnabled ? liquidityPercentage : 0);

  const payDecimals = (useERC20ForBuy) ? erc20ForBuyInfo.tokenDecimals : 18 // ToDo - from config in Native not 18 decimals
  const oneTokenWeiPrice = BigNumber(payDecimals ? 10 ** payDecimals : 1).div(tokenRateBN).integerValue(BigNumber.ROUND_CEIL)
  
  const oneTokenInWei = ETHER.div(tokenRateBN).integerValue(BigNumber.ROUND_CEIL);
  
  const oneListingTokeninWei = ETHER.div(listingRateBN).integerValue(BigNumber.ROUND_CEIL);

  const requiredToken = ETHER.times(hardCapBN).div(oneTokenInWei)
    .plus(ETHER.times(hardCapBN).div(oneListingTokeninWei).times(lp).dividedBy(100))
    .times(tokenInfo.tokenDenominator);

  const [ userBalance, setUserBalance ] = useState(0)
  const [ userBalanceFetched, setUserBalanceFetched ] = useState(false)
  const [ userBalanceFetching, setUserBalanceFetching ] = useState(false)
  
  useEffect(async () => {
    try {
      setUserBalanceFetching(true)
      if (isAddress(tokenAddress) && tokenContract && account) {
        const balance = await tokenContract.balanceOf(account)
        setUserBalance(balance)
        setUserBalanceFetched(true)
        setUserBalanceFetching(false)
      }
    } catch (err) {
      console.log('>> Fail fetch balance', err)
    }
  }, [account, library, tokenContract, tokenAddress])

  useEffect(() => {
    const checkTokenApproval = async () => {
      setIsTokenApprovalFetching(true);
      try {
        let tokenApproval = await tokenContract.allowance(account, IDOFactoryAddress);
        setTokenApprove(tokenApproval);
      } catch (error) {
        console.log('checkTokenApproval error: ', error);
      } finally {
        setIsTokenApprovalFetching(false);
      }
    }
    if (isAddress(tokenAddress) && tokenContract) {
      checkTokenApproval();
    } else {
      setTokenApprove("");
    }
  }, [account, library, IDOFactoryAddress, tokenContract, tokenAddress]);

  useEffect(() => {
    const fetchIDOFactoryFee = async () => {
      const IDOFactoryFee = await IDOFactoryContract?.feeAmount() || "0";
      sesIDOFactoryFee(IDOFactoryFee.toString());
    }

    fetchIDOFactoryFee();
  }, [IDOFactoryContract]);

  const pinJSONToIPFS = async (JSONBody) => {
    try {
      const JSONBodyString = JSON.stringify(JSONBody);
      const response = await ipfs.add(JSONBodyString);
      return {
        success: true,
        ipfsHash:
          response.path,
      };

    } catch (error) {

      console.log(error);
      return {
        success: false,
        message: error.message,
      };

    }
  };

  const createIDONative = async (tokenURI) => {
    const rewardToken = tokenAddress;

    const finInfo = [
      `0x${oneTokenInWei.toString(16)}`,
      `0x${ETHER.times(softCap).toString(16)}`,
      `0x${ETHER.times(hardCap).toString(16)}`,
      `0x${ETHER.times(minETH).toString(16)}`,
      `0x${ETHER.times(maxETH).toString(16)}`,
      listingRateBN.gt(0) ? `0x${oneListingTokeninWei.toString(16)}` : 0,
      parseInt(isAddLiquidityEnabled ? liquidityPercentage : 0),
    ];
    const timestamps = [
      `0x${BigNumber(start.getTime()).div(1000).decimalPlaces(0, 1).toString(16)}`,
      `0x${BigNumber(end.getTime()).div(1000).decimalPlaces(0, 1).toString(16)}`,
      `0x${BigNumber(unlock.getTime()).div(1000).decimalPlaces(0, 1).toString(16)}`,
    ];
    const dexInfo = [
      chainRouter[chainId][0].ROUTER,
      chainRouter[chainId][0].FACTORY,
      chainRouter[chainId][0].WETH,
    ];

    return await IDOFactoryContract
      .createIDO(
        rewardToken,
        finInfo,
        timestamps,
        dexInfo,
        TokenLockerFactoryAddress,
        tokenURI,
        {
          from: account,
        },
      );
  }
  
  const createIDOERC20 = async (tokenURI) => {
    const rewardToken = tokenAddress;
    const finInfo = [
      `0x${tokenRateBN.toString(16)}`,          // uint256 tokenPrice; // rate 1pay => count recieve
      tokenAmountToWei(softCap, payDecimals), // uint256 softCap;
      tokenAmountToWei(hardCap, payDecimals), // uint256 hardCap;
      tokenAmountToWei(minETH, payDecimals),  // uint256 minPayment;
      tokenAmountToWei(maxETH, payDecimals),  // uint256 maxPayment;
      listingRateBN.gt(0) ? `0x${oneListingTokeninWei.toString(16)}` : 0, // uint256 listingPrice; // one token in WEI
      parseInt(isAddLiquidityEnabled ? liquidityPercentage : 0),  // uint256 lpInterestRate;
    ];

    const timestamps = [
      `0x${BigNumber(start.getTime()).div(1000).decimalPlaces(0, 1).toString(16)}`,
      `0x${BigNumber(end.getTime()).div(1000).decimalPlaces(0, 1).toString(16)}`,
      `0x${BigNumber(unlock.getTime()).div(1000).decimalPlaces(0, 1).toString(16)}`,
    ];

    return await IDOFactoryContract
      .createIDOERC20(
        `0x${requiredToken.toString(16)}`,
        rewardToken,
        erc20ForBuyAddress,
        finInfo,
        timestamps,
        tokenURI,
        allowSoftWithdraw,
        {
          from: account,
        },
      );
    
  }
  
  const createIDO = async () => {
    setLoading(true);

    try {
      const iconAdded = await ipfs.add(icon);

      const metadata = {
        imageHash: iconAdded.path,
        description,
        links: {
          website,
          discord,
          telegram,
          twitter,
        }
      };

      const ipfsResonse = await pinJSONToIPFS(metadata);

      if (!ipfsResonse.success) {
        return {
          success: false,
          status: "😢 Something went wrong while uploading your tokenURI.",
        };
      }
      const tokenURI = ipfsResonse.ipfsHash;

      const tx = await ((useERC20ForBuy) ? createIDOERC20(tokenURI) : createIDONative(tokenURI))
      
      const receipt = await tx.wait();

      console.log('createIDO receipt', receipt);

      triggerUpdateAccountData();
      const IDOCreatedIndex = receipt?.events?.findIndex?.((i) => i?.event === "IDOCreated");
      if (IDOCreatedIndex || IDOCreatedIndex === 0){
        const newIdoAdderess = receipt.events[IDOCreatedIndex].args.idoPool
        setIsNavigateToNewIDO(true)
        updatePoolInfo(newIdoAdderess).then((idoInfo) => {
          navigate(`../launchpad/${newIdoAdderess}`)
        })
      }
    } catch (error) {
      console.log("createIDO Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const approveToken = async (amount, tokenContract) => {
    if (!tokenContract) {
      return;
    }
    setLoading(true);

    try {
      const currentAllowance = await tokenContract.allowance(account, IDOFactoryAddress);
      if (BigNumber(currentAllowance?.toString?.()).gt(0)) {
        try {
          const resetTx = await tokenContract.approve(IDOFactoryAddress, 0, { from: account });
          await resetTx.wait();
        } catch (resetErr) {
          console.log('approve zero-reset skipped (token may not support it):', resetErr);
        }
      }
      const tx = await tokenContract.approve(IDOFactoryAddress, amount, {
        from: account,
      });

      await tx.wait();

      setTokenApprove(amount);
      triggerUpdateAccountData();
    } catch (error) {
      console.log("approveToken Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const payCurrency = (useERC20ForBuy && erc20ForBuyInfo && erc20ForBuyInfo.tokenSymbol) ? erc20ForBuyInfo.tokenSymbol : baseCurrencySymbol
  
  const infuelBalance = !(BigNumber(requiredToken?.toString?.()).lt(BigNumber(userBalance?.toString())))

  return (
    <s.Container flex={1}>
      <s.TextTitle fullWidth>Token information</s.TextTitle>
      <s.Container ai="center">
        <div
          style={{
            display: "flex",
            width: 140,
            height: 140,
            borderRadius: 20,
            margin: 20,
            backgroundColor: "var(--upper-card)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <s.iconUpload
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              e.preventDefault();
              const file = e.target.files[0];
              setIcon(file);
            }}
          ></s.iconUpload>
          {icon !== "" ? (
            <img
              style={{ width: 100, height: 100, borderRadius: 20 }}
              src={URL.createObjectURL(icon)}
            />
          ) : (
            <FaImage style={{ width: 100, height: 100, padding: 20 }} />
          )}
        </div>
      </s.Container>
      <SocialMediaModal
        website={website}
        discord={discord}
        telegram={telegram}
        twitter={twitter}
      />
      <s.SpacerSmall />
      <s.TextID>Description</s.TextID>
      <ReadMore max={2000}>{description}</ReadMore>

      <s.TextID>{`Token address`}</s.TextID>
      <s.TextDescriptionEllipsis>{tokenInfo.tokenAddress}</s.TextDescriptionEllipsis>
      <s.TextID>{`Token name`}</s.TextID>
      <s.TextDescription>{tokenInfo.tokenName}</s.TextDescription>
      <s.TextID>{`Total supply`}</s.TextID>
      <s.TextDescription>
        {BigNumber(tokenInfo.totalSupply)
          .dividedBy(tokenInfo.tokenDenominator)
          .toFormat(0) +
          " " +
          tokenInfo.tokenSymbol}
      </s.TextDescription>
      <s.TextTitle fullWidth>{`IDO information`}</s.TextTitle>
      <s.TextID>{`Token rate`}</s.TextID>
      <s.TextDescription>
        {`1 ${payCurrency} -> ${ETHER.div(oneTokenInWei)} ${tokenInfo.tokenSymbol}`}
      </s.TextDescription>
      <s.Container fd={"row"} jc="space-between">
        <s.Container flex={1} style={{ marginLeft: 10, marginRight: 10 }}>
          <s.TextID>{`Soft Cap`}</s.TextID>
          <s.TextDescription>{`${BigNumber(softCap).toFormat(2)} ${payCurrency}`}</s.TextDescription>
          <s.SpacerSmall />
          <s.TextID>{`Hard Cap`}</s.TextID>
          <s.TextDescription>{`${hardCapBN.toFormat(2)} ${payCurrency}`}</s.TextDescription>
          <s.SpacerSmall />
        </s.Container>
        <s.Container flex={1} style={{ marginLeft: 10, marginRight: 10 }}>
          <s.TextID>{`Minimum Buy`}</s.TextID>
          <s.TextDescription>
            {`${BigNumber(minETH).toFormat(2)} ${payCurrency}`}
          </s.TextDescription>
          <s.SpacerSmall />
          <s.TextID>{`Maximum Buy`}</s.TextID>
          <s.TextDescription>
            {`${BigNumber(maxETH).toFormat(2)} ${payCurrency}`}
          </s.TextDescription>
          {
            isAddLiquidityEnabled && <>
              <s.SpacerSmall />
              <s.TextID>Liquidity %</s.TextID>
              <s.TextDescription>
                {BigNumber(liquidityPercentage).toFixed(0) + " %"}
              </s.TextDescription>
            </>
          }
        </s.Container>
      </s.Container>
      {
        isAddLiquidityEnabled && <>
          <s.TextID>Listing rate</s.TextID>
          <s.TextDescription>
            {"1 $" +
              baseCurrencySymbol +
              " -> " +
              ETHER.div(oneListingTokeninWei) +
              " $" +
              tokenInfo.tokenSymbol}
          </s.TextDescription>
          (TokenRate * HardCap) + ((HardCap * LP%) * ListingRate)
        </>
      }
      <s.TextDescription fullWidth style={{ color: "var(--primary)" }}>
        {"Required " +
          requiredToken
            .dividedBy(tokenInfo.tokenDenominator)
            .toFormat() +
          " $" +
          tokenInfo.tokenSymbol}
      </s.TextDescription>
      {!isNavigateToNewIDO && (
        <s.Container ai="center">
          {BigNumber(FeeTokenApproveToFactory?.toString?.()).lt(BigNumber(IDOFactoryFee?.toString?.())) ? (
            <s.button
              style={{ marginTop: 20 }}
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                approveToken(IDOFactoryFee, FeeTokenContract);
              }}
            >
              {loading ? ". . ." : `APPROVE ${FeeTokenSymbol}`}
            </s.button>
          ) : BigNumber(tokenApprove?.toString?.()).lt(BigNumber(requiredToken?.toString?.())) ? (
            <s.button
              style={{ marginTop: 20 }}
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                approveToken(BigNumber(requiredToken).toFixed(0), tokenContract);
              }}
            >
              {loading ? ". . ." : `APPROVE ${tokenInfo.tokenSymbol}`}
            </s.button>
          ) : (
            <>
              {infuelBalance && (
                <s.TextIDWarning>{`There are not enough ${tokenInfo.tokenSymbol} tokens at your account`}</s.TextIDWarning>
              )}
              <s.button
                style={{ marginTop: 20 }}
                disabled={loading || userBalanceFetching || infuelBalance}
                onClick={(e) => {
                  e.preventDefault();
                  createIDO();
                }}
              >
                {loading ? ". . ." : "Create IDO Pool"}
              </s.button>
            </>
          )}
        </s.Container>
      )}
      {isNavigateToNewIDO && (
        <s.Container ai="center">
          <s.Text small info>
            {`The IDO pool has been created. You will now be redirected to his page...`}
          </s.Text>
        </s.Container>
      )}

      {IDOFactoryFee && IDOFactoryFee !== "0" && (
        <>
          {`Create IDO fee: `}
          {tokenAmountFromWei(IDOFactoryFee, FeeTokenDecimals)}
          {` `}
          {FeeTokenSymbol}
        </>
      )}
    </s.Container>
  );
}
