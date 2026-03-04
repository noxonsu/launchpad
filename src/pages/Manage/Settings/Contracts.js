import { useState, useEffect } from 'react'
import { useWeb3React } from '../../../hooks/useWeb3ReactShim'
import { useApplicationContext } from '../../../context/applicationContext'
import { SUPPORTED_NETWORKS, SUPPORTED_CHAIN_IDS } from '../../../connectors'
import { networks } from '../../../constants/networksInfo'
import styled from 'styled-components'
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Accordion as AccordionMUI,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import { NumberField } from "../../../components/FormField"
import * as s from "../../../styles/global"
import Loader from '../../../components/Loader'

import {
  fetchIDOFactoryInfo,
  fetchLockerFactoryInfo,
  callIDOFactoryContract,
  callTokenLockerFactoryContract,
} from '../../../utils/contract'

import {
  isAddress,
  switchInjectedNetwork,
  isZeroAddress,
  tokenAmountFromWei,
  tokenAmountToWei,
} from '../../../utils/utils'

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  ${({ disabled }) => (disabled ? `
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.6;
    ` : ''
  )};
`


const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  border: 1px solid #3a3d47;
  width: 100%;
`;

const Tab = styled.button`
  flex: 1;
  cursor: pointer;
  padding: 0.4rem 0.7rem;
  font-size: 1em;
  border: none;
  background-color: ${({ active }) => (active ? "#424149" : 'transparent')};
  color: #fff;

  :first-child {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  :last-child {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`;


export default function Contracts() {
  const { library, chainId, account, connector } = useWeb3React()
  const {
    domain,
    domainSettings: {
      contracts
    },
    domainSettings,
    triggerDomainData,
  } = useApplicationContext()

  const [isLoading, setIsLoading] = useState(false)
  
  const [ chainIdToManage, setChainIdToManage ] = useState(0)
  
  const [ hasChainContracts, setHasChainContracts ] = useState(false)

  const [tab, setTab] = useState('IDOFactory')

  const [ isLockerInfoFetching, setIsLockerInfoFetching ] = useState(false)
  const [ isLockerInfoError, setIsLockerInfoError ] = useState(false)
  const [ lockerInfo, setLockerInfo ] = useState(false)
  const [ lockerFeeAmount, setLockerFeeAmount ] = useState(``)
  const [ lockerOnlyOwnerCreate, setLockerOnlyOwnerCreate ] = useState('0')
  const [ lockerOnlyOwnerCreateSaving, setLockerOnlyOwnerCreateSaving ] = useState(false)
  const [ lockerFeeAmountSaving, setLockerFeeAmountSaving ] = useState(false)
  
  const fetchLockerInfo = () => {
    setIsLockerInfoFetching(true)
    setIsLockerInfoError(false)
    setLockerInfo(false)
    fetchLockerFactoryInfo(chainIdToManage, contracts[chainIdToManage].TokenLockerFactoryAddress).then((lockerInfo) => {
      setLockerInfo(lockerInfo)
      setLockerFeeAmount(tokenAmountFromWei(lockerInfo.feeAmount, networks[chainIdToManage].baseCurrency.decimals))
      setLockerOnlyOwnerCreate((lockerInfo.onlyOwnerCreate) ? '1' : '0')
      setIsLockerInfoFetching(false)
    }).catch((err) => {
      setIsLockerInfoError(true)
      setIsLockerInfoFetching(false)
    })
  }
  
  const saveLockerFeeAmount = () => {
    setIsLoading(true)
    setLockerFeeAmountSaving(true)
    callTokenLockerFactoryContract({
      library,
      address: contracts[chainIdToManage].TokenLockerFactoryAddress,
      account,
      method: `setFee`,
      params: [tokenAmountToWei(lockerFeeAmount, networks[chainIdToManage].baseCurrency.decimals)],
      onReceipt: () => {
        setLockerInfo({
          ...lockerInfo,
          feeAmount: tokenAmountToWei(lockerFeeAmount, networks[chainIdToManage].baseCurrency.decimals)
        })
      },
      onHash: (hash) => {
        console.log('saveContractsData hash: ', hash);
      },
    }).then(() => {
      setIsLoading(false)
      setLockerFeeAmountSaving(false)
    }).catch((err) => {
      console.log('Fail save locker fee ammount', err)
      setIsLoading(false)
      setLockerFeeAmountSaving(false)
    })
  }
  
  const [ isIdoInfoFetching, setIsIdoInfoFetching ] = useState(false)
  const [ isIdoInfoError, setIsIdoInfoError ] = useState(false)
  const [ idoInfo, setIdoInfo ] = useState(false)
  const [ IDOFeeWallet, setIDOFeeWallet ] = useState(``)
  const [ IDOFeeWalletSaving, setIDOFeeWalletSaving ] = useState(false)
  const [ IDOFeeAmount, setIDOFeeAmount ] = useState(``)
  const [ IDOFeeAmountSaving, setIDOFeeAmountSaving] = useState(false)
  const [ IDOOnlyOwnerCreate, setIDOOnlyOwnerCreate] = useState('0')
  const [ IDOOnlyOwnerCreateSaving, setIDOOnlyOwnerCreateSaving] = useState(false)

  const fetchIdoInfo = () => {
    setIsIdoInfoFetching(true)
    setIsIdoInfoError(false)
    setIdoInfo(false)
    fetchIDOFactoryInfo(chainIdToManage, contracts[chainIdToManage].IDOFactoryAddress).then((idoInfo) => {
      setIdoInfo(idoInfo)
      setIDOFeeWallet(idoInfo.feeWallet)
      setIDOFeeAmount(tokenAmountFromWei(idoInfo.feeAmount, idoInfo.feeTokenDecimals))
      setIDOOnlyOwnerCreate((idoInfo.onlyOwnerCreate) ? `1` : `0`)
      setIsIdoInfoFetching(false)
    }).catch((err) => {
      setIsIdoInfoFetching(false)
      setIsIdoInfoError(true)
    })
  }
  
  const saveWhoCanCreateLocker = async () => {
    setIsLoading(true)
    setLockerOnlyOwnerCreateSaving(true)
    callTokenLockerFactoryContract({
      library,
      address: contracts[chainIdToManage].TokenLockerFactoryAddress,
      account,
      method: `setOnlyOwnerCreate`,
      params: [(lockerOnlyOwnerCreate == '0') ? false : true],
      onReceipt: () => {
        setIdoInfo({
          ...idoInfo,
          onlyOwnerCreate: lockerOnlyOwnerCreate
        })
      },
      onHash: (hash) => {
        console.log('saveContractsData hash: ', hash);
      },
    }).then(() => {
      setIsLoading(false)
      setLockerOnlyOwnerCreateSaving(false)
    }).catch((err) => {
      console.log('Fail save onlyOwnerCreate', err)
      setIsLoading(false)
      setLockerOnlyOwnerCreateSaving(false)
    })
  }

  useEffect(() => {
    if (contracts[chainIdToManage] && contracts[chainIdToManage].IDOFactoryAddress && contracts[chainIdToManage].TokenLockerFactoryAddress) {
      setHasChainContracts(true)
      fetchIdoInfo()
      fetchLockerInfo()
    } else {
      setHasChainContracts(false)
    }
  }, [ chainIdToManage ])

  const saveWhoCanCreateIDO = async () => {
    setIsLoading(true)
    setIDOOnlyOwnerCreateSaving(true)
    callIDOFactoryContract({
      library,
      address: contracts[chainIdToManage].IDOFactoryAddress,
      account,
      method: `setOnlyOwnerCreate`,
      params: [(IDOOnlyOwnerCreate == '0') ? false : true],
      onReceipt: () => {
        setIdoInfo({
          ...idoInfo,
          onlyOwnerCreate: IDOOnlyOwnerCreate
        })
      },
      onHash: (hash) => {
        console.log('saveContractsData hash: ', hash);
      },
    }).then(() => {
      setIsLoading(false)
      setIDOOnlyOwnerCreateSaving(false)
    }).catch((err) => {
      console.log('Fail save onlyOwnerCreate', err)
      setIsLoading(false)
      setIDOOnlyOwnerCreateSaving(false)
    })
  }
  const saveFeeWallet = async () => {
    setIsLoading(true)
    setIDOFeeWalletSaving(true)
    callIDOFactoryContract({
      library,
      address: contracts[chainIdToManage].IDOFactoryAddress,
      account,
      method: `setFeeWallet`,
      params: [IDOFeeWallet],
      onReceipt: () => {
        setIdoInfo({
          ...idoInfo,
          feeWallet: IDOFeeWallet,
        })
      },
      onHash: (hash) => {
        console.log('saveContractsData hash: ', hash);
      },
    }).then(() => {
      setIsLoading(false)
      setIDOFeeWalletSaving(false)
    }).catch((err) => {
      console.log('Fail save fee address', err)
      setIsLoading(false)
      setIDOFeeWalletSaving(false)
    })
  }
  const saveFeeAmount = async () => {
    setIsLoading(true)
    setIDOFeeAmountSaving(true)
    callIDOFactoryContract({
      library,
      address: contracts[chainIdToManage].IDOFactoryAddress,
      account,
      method: `setFeeAmount`,
      params: [tokenAmountToWei(IDOFeeAmount, idoInfo.feeTokenDecimals)],
      onReceipt: () => {
        setIdoInfo({
          ...idoInfo,
          feeAmount: tokenAmountToWei(IDOFeeAmount, idoInfo.feeTokenDecimals),
        })
      },
      onHash: (hash) => {
        console.log('saveContractsData hash: ', hash);
      },
    }).then(() => {
      setIsLoading(false)
      setIDOFeeAmountSaving(false)
    }).catch((err) => {
      console.log('Fail save fee amount', err)
      setIsLoading(false)
      setIDOFeeAmountSaving(false)
    })
  }
  
  const switchToNetwork = async (switchToId) => {
    setIsLoading(false)
    try {
      await switchInjectedNetwork(switchToId)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <ContentWrapper disabled={isLoading}>
        <Typography variant="h8">{`Select blockchain for manage`}</Typography>

        <Select
          labelId="selectedNetworkLable"
          id="selectedNetwork"
          value={chainIdToManage}
          label="Network"
          onChange={(e) => {
            setChainIdToManage(e.target.value);
          }}
        >
          <MenuItem value={0}>{`Select blockchain`}</MenuItem>
          {SUPPORTED_CHAIN_IDS.map((chainId) => (
            <MenuItem key={chainId} value={chainId}>{SUPPORTED_NETWORKS[chainId].name}</MenuItem>
          ))}
        </Select>

        <s.SpacerSmall />
        {chainIdToManage !== 0 && !hasChainContracts && (
          <>
            <s.Text small warning>
              {`This blockchain not configured. Deploy contracts first`}
            </s.Text>
          </>
        )}
        {chainIdToManage !== 0 && hasChainContracts && (
          <>
            <Tabs>
              <Tab active={tab === `IDOFactory`} onClick={() => setTab(`IDOFactory`)}>{`IDOFactory`}</Tab>
              <Tab active={tab === `LockerFactory`} onClick={() => setTab(`LockerFactory`)}>{`LockerFactory`}</Tab>
            </Tabs>
            {/* IDOFactory */}
            {tab === 'IDOFactory' && (
              <>
                {isIdoInfoFetching ? (
                  <s.Text small info>
                    {`Fetching IDOFactory settings...`}
                    {` `}
                    <Loader />
                  </s.Text>
                ) : (
                  <>
                    {isIdoInfoError ? (
                      <s.Text small error>{`Fail fetch IDOFactory settings`}</s.Text>
                    ) : (
                      <>
                        {chainId !== chainIdToManage ? (
                          <>
                            <s.Text small warning>{`Switch network for manage contracts`}</s.Text>
                            <s.SpacerSmall />
                            <s.button
                              fullWidth
                              onClick={() => switchToNetwork(chainIdToManage)}
                            >
                              { isLoading ? <Loader /> : `Switch to ${SUPPORTED_NETWORKS[chainIdToManage].name}` }
                            </s.button>
                          </>
                        ) : (
                          <>
                            {idoInfo !== false && (
                              <>
                                {idoInfo.owner.toLowerCase() != account.toLowerCase() ? (
                                  <s.Text small error>{`You are not owner of IDOFactory contract`}</s.Text>
                                ) : (
                                  <>
                                    <s.SpacerSmall />
                                    <s.Text small info>
                                      {`If specified, a flat fee will be charged for creating new pools`}
                                    </s.Text>
                                    <TextField
                                      label="Wallet for recieve fee"
                                      value={IDOFeeWallet}
                                      onChange={(e) => {
                                        setIDOFeeWallet(e.target.value);
                                      }}
                                      error={Boolean(!isAddress(IDOFeeWallet))}
                                    />
                                    {/*{!isAddress(IDOFeeWallet) && (<s.Text small error>{`Fee wallet address not correct`}</s.Text>)}*/}
                                    <s.SpacerSmall />
                                    <s.button fullWidth
                                      onClick={() => { saveFeeWallet() }}
                                      disabled={isLoading || !isAddress(IDOFeeWallet) || isZeroAddress(IDOFeeWallet) || IDOFeeWallet.toLowerCase() == idoInfo.feeWallet.toLowerCase()}
                                    >
                                      { IDOFeeWalletSaving ? <Loader /> : `Save wallet for fee`}
                                    </s.button>
                                    <s.SpacerSmall />
                                    {(isZeroAddress(IDOFeeWallet) || isZeroAddress(idoInfo.feeWallet)) ? (
                                      <s.Text small info>{`For set fee amount, specify wallet for recieve fee`}</s.Text>
                                    ) : (
                                      <>
                                        <NumberField
                                          value={IDOFeeAmount}
                                          label={`Create IDO fee`}
                                          adornment={idoInfo.feeTokenSymbol}
                                          error={Boolean(IDOFeeAmount < 0)}
                                          onChange={async (e) => {
                                            setIDOFeeAmount(e.target.value)
                                          }}
                                        />
                                        <s.SpacerSmall />
                                        <s.button fullWidth
                                          onClick={() => { saveFeeAmount() }}
                                          disabled={isLoading || Boolean(IDOFeeAmount < 0) || tokenAmountToWei(IDOFeeAmount, idoInfo.feeTokenDecimals) == idoInfo.feeAmount}
                                        >
                                          { IDOFeeAmountSaving ? <Loader /> : `Save Fee amount`}
                                        </s.button>
                                      </>
                                    )}
                                    <s.SpacerSmall />
                                    <InputLabel>{`Who can create IDOPool?`}</InputLabel>
                                    <Select
                                      value={IDOOnlyOwnerCreate}
                                      label={`Select`}
                                      onChange={(e) => {
                                        setIDOOnlyOwnerCreate(e.target.value)
                                      }}
                                    >
                                      <MenuItem value={'0'}>{`All`}</MenuItem>
                                      <MenuItem value={'1'}>{`Only owner/admin`}</MenuItem>
                                    </Select>
                                    <s.SpacerSmall />
                                    <s.button fullWidth
                                      onClick={() => { saveWhoCanCreateIDO() }}
                                      disabled={isLoading}
                                    >
                                      { IDOOnlyOwnerCreateSaving ? <Loader /> : `Save create IDO rule`}
                                    </s.button>
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
            {/* LockerFactory */}
            {tab === `LockerFactory` && (
              <>
                {isLockerInfoFetching ? (
                  <s.Text small info>
                    {`Fetching TokenLockerFactory settings...`}
                    {` `}
                    <Loader />
                  </s.Text>
                ) : (
                  <>
                    {isLockerInfoError ? (
                      <s.Text small error>{`Fail fetch TokenLockerFactory settings`}</s.Text>
                    ) : (
                      <>
                        {chainId !== chainIdToManage ? (
                          <>
                            <s.Text small warning>{`Switch network for manage contracts`}</s.Text>
                            <s.SpacerSmall />
                            <s.button
                              fullWidth
                              onClick={() => switchToNetwork(chainIdToManage)}
                            >
                              { isLoading ? <Loader /> : `Switch to ${SUPPORTED_NETWORKS[chainIdToManage].name}` }
                            </s.button>
                          </>
                        ) : (
                          <>
                            {lockerInfo !== false && (
                              <>
                                {lockerInfo.owner.toLowerCase() != account.toLowerCase() ? (
                                  <s.Text small error>{`You are not owner of TokenLockerFactory contract`}</s.Text>
                                ) : (
                                  <>
                                    <s.SpacerSmall />
                                    <TextField
                                      label="Wallet for recieve fee (owner)"
                                      value={lockerInfo.owner}
                                    />
                                    <s.SpacerSmall />
                                    <NumberField
                                      value={lockerFeeAmount}
                                      label={`Lock tokens fee`}
                                      adornment={networks[chainIdToManage].baseCurrency.symbol}
                                      error={Boolean(lockerFeeAmount < 0)}
                                      onChange={async (e) => {
                                        setLockerFeeAmount(e.target.value)
                                      }}
                                    />
                                    <s.SpacerSmall />
                                    <s.button fullWidth
                                      onClick={() => { saveLockerFeeAmount() }}
                                      disabled={
                                        isLoading
                                        || lockerFeeAmountSaving 
                                        || lockerInfo.feeAmount == tokenAmountToWei(lockerFeeAmount, networks[chainIdToManage].baseCurrency.decimals)
                                      }
                                    >
                                      { lockerFeeAmountSaving ? <Loader /> : `Save Fee amount`}
                                    </s.button>
                                    <s.SpacerSmall />
                                    <InputLabel>{`Who can create TokenLock?`}</InputLabel>
                                    <Select
                                      value={lockerOnlyOwnerCreate}
                                      label={`Select`}
                                      onChange={(e) => {
                                        setLockerOnlyOwnerCreate(e.target.value)
                                      }}
                                    >
                                      <MenuItem value={'0'}>{`All`}</MenuItem>
                                      <MenuItem value={'1'}>{`Only owner/admin`}</MenuItem>
                                    </Select>
                                    <s.SpacerSmall />
                                    <s.button fullWidth
                                      onClick={() => { saveWhoCanCreateLocker() }}
                                      disabled={isLoading}
                                    >
                                      { lockerOnlyOwnerCreateSaving ? <Loader /> : `Save create TokenLock rule`}
                                    </s.button>
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </ContentWrapper>
    </>
  )
}