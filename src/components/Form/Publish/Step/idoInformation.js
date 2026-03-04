import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useWeb3React } from '../../../../hooks/useWeb3ReactShim';

import { MenuItem, TextField, Checkbox } from "@mui/material";
import BigNumber from "bignumber.js";
import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../../../context/store";
import * as s from "../../../../styles/global";
import { timeout } from "../../../../utils/utils";
import { NumberField } from "../../../FormField";
import { useApplicationContext } from '../../../../context/applicationContext';
import { Badge } from "react-bootstrap";
import { utils } from "../../../../utils";

export default function IDOInfo() {
  const context = useStoreContext();
  const { library } = useWeb3React();

  const {
    baseCurrencySymbol,
  } = useApplicationContext();

  const [ erc20BuyInfoFetching, setErc20BuyInfoFetching ] = useState(false)
  
  const {
    isAddLiquidityEnabled: [isAddLiquidityEnabled, setIsAddLiquidityEnabled],
    // erc20-erc20 pool
    useERC20ForBuy: [useERC20ForBuy, setUseERC20ForBuy],
    erc20ForBuyAddress: [erc20ForBuyAddress, setErc20ForBuyAddress],
    tokenInformation: [tokenInformation],
    address: [tokenAddress],
    erc20ForBuyInfo: [erc20ForBuyInfo, setErc20ForBuyInfo],
    allowRefund: [ allowRefund, setAllowRefund ],
    allowSoftWithdraw: [ allowSoftWithdraw, setAllowSoftWithdraw ],
  } = context;
  const [erc20ForBuyError, setErc20ForBuyError] = useState(false)
  
  useEffect(() => {
    const fetchTokenInfo = async () => {
      if (erc20ForBuyAddress && library?.web3 && erc20ForBuyAddress.toLowerCase() !== tokenAddress.toLowerCase()) {
        if (!utils.isAddress(erc20ForBuyAddress)) {
          setErc20ForBuyInfo(null)
          setErc20ForBuyError(true)
          return
        }
        setErc20BuyInfoFetching(true)
        setErc20ForBuyError(false)
        try {
          const erc20ForBuyInfo = await utils.getTokenData(erc20ForBuyAddress, library.web3)
          setErc20ForBuyInfo(erc20ForBuyInfo)
        } catch (error) {
          console.log(error)
          setErc20ForBuyInfo(null)
          setErc20ForBuyError(true)
        } finally {
          setErc20BuyInfoFetching(false)
        }
      } else {
        setErc20ForBuyInfo(null)
      }
    }
    fetchTokenInfo()
  }, [erc20ForBuyAddress, library])

  const payCurrency = (useERC20ForBuy && erc20ForBuyInfo && erc20ForBuyInfo?.tokenSymbol) ? erc20ForBuyInfo.tokenSymbol : baseCurrencySymbol

  return (
    <s.Container flex={1}>
      <s.TextTitle fullWidth>IDO Information</s.TextTitle>
      <s.SpacerSmall />
      <s.Container ai="center" fd="row" jc="left">
        <s.TextID>{`Use ERC20 for pay ${context.tokenInformation?.[0]?.tokenSymbol}`}</s.TextID>
        <Checkbox
          value={useERC20ForBuy}
          checked={useERC20ForBuy}
          onChange={() => setUseERC20ForBuy(!useERC20ForBuy)}
        />
      </s.Container>
      {useERC20ForBuy && (
        <>
          <s.SpacerSmall />
          <TextField
            onChange={(e) => {
              e.preventDefault();
              setErc20ForBuyAddress(e.target.value);
            }}
            value={erc20ForBuyAddress || ``}
            label={`ERC20 Token for pay ${tokenInformation?.tokenSymbol} address`}
            fullWidth
          />
          <s.TextIDWarning>{context.idoError["erc20ForBuy"]}</s.TextIDWarning>
          <s.SpacerSmall />
          {erc20ForBuyAddress.toLowerCase() == tokenAddress.toLowerCase() ? (
            <s.TextIDWarning>{`Pay token cannot be equal as IDO pool token`}</s.TextIDWarning>
          ) : (
            <>
              {erc20BuyInfoFetching ? (
                <s.Container>
                  <Badge bg="secondary">Token Address Checking...</Badge>
                </s.Container>
              ) : (
                <>
                  {erc20ForBuyError && (<s.TextIDWarning>{`Contract is not valid`}</s.TextIDWarning>)}
                  {erc20ForBuyInfo !== null && (
                    <s.Container fd="row" style={{ flexWrap: "wrap" }}>
                      <Badge bg="success">{`Symbol: ${erc20ForBuyInfo.tokenSymbol}`}</Badge>
                      <s.SpacerXSmall />
                      <Badge bg="success">{`Name: ${erc20ForBuyInfo.tokenName}`}</Badge>
                      <s.SpacerXSmall />
                      <Badge bg="success">{`Decimal: ${erc20ForBuyInfo.tokenDecimals}`}</Badge>
                    </s.Container>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
      <s.SpacerSmall />
      {(!useERC20ForBuy || (useERC20ForBuy && erc20ForBuyInfo !== null)) && (
        <>
          <s.TextID>{`If I pay 1 ${payCurrency} how much ${tokenInformation?.tokenSymbol} I will get?`}</s.TextID>
          <NumberField
            value={BigNumber(context.tokenRate[0]).toFixed()}
            label={`Token rate`}
            adornment={context.tokenInformation?.[0]?.tokenSymbol}
            onChange={async (e) => {
              e.preventDefault();
              let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
              if (!isNaN(val)) {
                await timeout(100).then(context.tokenRate[1](val));
              } else {
                await context.tokenRate[1](val);
              }
            }}
          />
          <s.TextIDWarning>{context.idoError["tokenRate"]}</s.TextIDWarning>
          <s.SpacerSmall />
          <s.Container fd={"row"} jc="space-between">
            <s.Container flex={1} style={{ marginLeft: 10, marginRight: 10 }}>
              <NumberField
                value={context.softCap[0]}
                label={"Soft Cap"}
                adornment={payCurrency}
                onChange={(e) => {
                  e.preventDefault();
                  let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
                  if (!isNaN(val)) {
                    context.softCap[1](e.target.value);
                  } else {
                    context.softCap[1]("");
                  }
                }}
              />
              <s.TextIDWarning>{context.idoError["softCap"]}</s.TextIDWarning>
              <s.SpacerSmall />
              <NumberField
                value={context.hardCap[0]}
                label={"Hard Cap"}
                adornment={payCurrency}
                onChange={(e) => {
                  e.preventDefault();
                  let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
                  if (!isNaN(val)) {
                    context.hardCap[1](e.target.value);
                  } else {
                    context.hardCap[1]("");
                  }
                }}
              />
              <s.TextIDWarning>{context.idoError["hardCap"]}</s.TextIDWarning>
              <s.SpacerSmall />
              {!useERC20ForBuy && (
                <s.Container ai="center" fd="row" jc="center">
                  <s.TextDescription>Enable auto liquidity on the DEX?</s.TextDescription>
                  <Checkbox
                    value={isAddLiquidityEnabled}
                    onChange={() => setIsAddLiquidityEnabled(!isAddLiquidityEnabled)}
                  />
                </s.Container>
              )}
            </s.Container>
            <s.Container flex={1} style={{ marginLeft: 10, marginRight: 10 }}>
              <NumberField
                value={context.minETH[0]}
                label={"Minimum Buy"}
                adornment={payCurrency}
                onChange={(e) => {
                  e.preventDefault();
                  let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
                  if (!isNaN(val)) {
                    context.minETH[1](e.target.value);
                  } else {
                    context.minETH[1]("");
                  }
                }}
              />
              <s.TextIDWarning>{context.idoError["minETH"]}</s.TextIDWarning>
              <s.SpacerSmall />
              <NumberField
                value={context.maxETH[0]}
                label={"Maximum Buy"}
                adornment={payCurrency}
                onChange={(e) => {
                  e.preventDefault();
                  let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
                  if (!isNaN(val)) {
                    context.maxETH[1](e.target.value);
                  } else {
                    context.maxETH[1]("");
                  }
                }}
              />
              <s.TextIDWarning>{context.idoError["maxETH"]}</s.TextIDWarning>
              <s.SpacerSmall />
              {
                isAddLiquidityEnabled && !useERC20ForBuy && <>
                  <NumberField
                    value={BigNumber(context.liquidityPercentage[0]).toFixed()}
                    label={"Liquidity % (51% - 100%)"}
                    onChange={(e) => {
                      e.preventDefault();
                      let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
                      if (!isNaN(val)) {
                        context.liquidityPercentage[1](val);
                      } else {
                        context.liquidityPercentage[1]("");
                      }
                    }}
                  />
                  <s.TextIDWarning>
                    {context.idoError["liquidityPercentage"]}
                  </s.TextIDWarning>
                </>
              }
            </s.Container>
          </s.Container>
          <s.SpacerSmall />
          {
            isAddLiquidityEnabled && !useERC20ForBuy && <>
              <s.TextID>
                If I pay 1 {baseCurrencySymbol} how much token I will get
                after presale?
              </s.TextID>
              <NumberField
                value={BigNumber(context.listingRate[0]).toFixed()}
                label={"Listing Rate"}
                adornment={context.tokenInformation?.[0]?.tokenSymbol}
                onChange={(e) => {
                  e.preventDefault();
                  let val = BigNumber(e.target.value).absoluteValue().toFixed(18);
                  if (!isNaN(val)) {
                    context.listingRate[1](val);
                  } else {
                    context.listingRate[1]("");
                  }
                }}
              />
              <s.TextIDWarning>{context.idoError["listingRate"]}</s.TextIDWarning>
              <s.SpacerMedium />
            </>
          }
          <s.Container fd={"row"} jc="space-between">
            <s.Container flex={1} style={{ marginLeft: 10, marginRight: 10 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField fullWidth {...props} />}
                  label="Start date"
                  displayEmpty
                  value={context.start[0]}
                  onChange={(e) => {
                    context.start[1](e);
                  }}
                />
              </LocalizationProvider>
            </s.Container>
            <s.Container flex={1} style={{ marginLeft: 10, marginRight: 10 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField fullWidth {...props} />}
                  label="End date"
                  displayEmpty
                  value={context.end[0]}
                  onChange={(e) => {
                    context.end[1](e);
                  }}
                />
              </LocalizationProvider>
            </s.Container>
          </s.Container>
          <s.TextIDWarning>{context.idoError["start-end"]}</s.TextIDWarning>
          <s.SpacerMedium />
          {!useERC20ForBuy && (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField fullWidth {...props} />}
                label="Unlock date"
                displayEmpty
                value={context.unlock[0]}
                onChange={(e) => {
                  context.unlock[1](e);
                }}
              />
            </LocalizationProvider>
          )}
          <s.TextIDWarning>{context.idoError["unlock"]}</s.TextIDWarning>
          {useERC20ForBuy && (
            <>
              <s.SpacerMedium />
              <s.Container>
                <s.TextID>
                  <Checkbox
                    value={allowSoftWithdraw}
                    checked={allowSoftWithdraw}
                    onChange={() => setAllowSoftWithdraw(!allowSoftWithdraw)}
                  />
                  {`Allow withdraw tokens, if soft cap not reached. If enabled, refund will be disabled, users can claim buyed tokens at end of IDO time`}
                </s.TextID>
              </s.Container>
            </>
          )}
        </>
      )}
    </s.Container>
  );
}
