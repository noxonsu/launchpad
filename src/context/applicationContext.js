import React, { createContext, useEffect, useState } from "react";
import { useWeb3React } from "../hooks/useWeb3ReactShim";
import { SUPPORTED_CHAIN_IDS } from "../connectors";
import { useTokenContract, useLockerFactoryContract, useIDOFactoryContract } from "../hooks/useContract";
import { networks } from "../constants/networksInfo";
import useDomainData from "../hooks/useDomainData";

export const Application = createContext({});

export const ApplicationContextProvider = ({ children }) => {
  const { account, chainId, library, error } = useWeb3React();


  

  const [isAvailableNetwork, setIsAvailableNetwork] = useState(true);

  const {
    domain,
    isAdmin,
    domainSettings,
    domainSettings: {
      defaultChain,
    },
    isDomainDataFetching,
    isDomainDataFetched,
    triggerDomainData,
    
  } = useDomainData();

  const usedChainId = chainId || defaultChain
  
  const chainName = networks[usedChainId]?.name;
  const baseCurrencySymbol = networks[usedChainId]?.baseCurrency?.symbol;
  const networkExplorer = networks[usedChainId]?.explorer;
  
  const [FeeTokenAddress, setFeeTokenAddress] = useState(domainSettings?.contracts?.[usedChainId]?.FeeTokenAddress|| '');
  const [IDOFactoryAddress, setIDOFactoryAddress] = useState(domainSettings?.contracts?.[usedChainId]?.IDOFactoryAddress|| '');
  const [TokenLockerFactoryAddress, setTokenLockerFactoryAddress] = useState(domainSettings?.contracts?.[usedChainId]?.TokenLockerFactoryAddress || '');

  const [isAppConfigured, setIsAppConfigured] = useState(Boolean(
    domainSettings?.contracts?.[usedChainId]?.FeeTokenAddress
    && domainSettings?.contracts?.[usedChainId]?.IDOFactoryAddress
    && domainSettings?.contracts?.[usedChainId]?.TokenLockerFactoryAddress
    && domainSettings?.networks?.[usedChainId]?.webSocketRPC
    && domainSettings?.admin
    && domainSettings?.ipfsInfuraDedicatedGateway
    && domainSettings?.ipfsInfuraProjectId
    && domainSettings?.ipfsInfuraProjectSecret
  ));

  const _checkNetworkIsConfigured = (chainId) => {
    return domainSettings?.contracts?.[chainId]?.FeeTokenAddress
      && domainSettings?.contracts?.[chainId]?.IDOFactoryAddress
      && domainSettings?.contracts?.[chainId]?.TokenLockerFactoryAddress
      && domainSettings?.networks?.[chainId]?.webSocketRPC
  }

  const [configuredNetworks, setConfiguredNetworks] = useState(domainSettings?.contracts && domainSettings?.networks
    ? Object.keys(domainSettings.contracts).filter((chainId) => { return _checkNetworkIsConfigured(chainId) })
    : []
  )

  useEffect(() => {
    setFeeTokenAddress(domainSettings?.contracts?.[usedChainId]?.FeeTokenAddress|| '');
    setIDOFactoryAddress(domainSettings?.contracts?.[usedChainId]?.IDOFactoryAddress|| '');
    setTokenLockerFactoryAddress(domainSettings?.contracts?.[usedChainId]?.TokenLockerFactoryAddress || '');

    setIsAppConfigured(Boolean(
      domainSettings?.contracts?.[usedChainId]?.FeeTokenAddress
      && domainSettings?.contracts?.[usedChainId]?.IDOFactoryAddress
      && domainSettings?.contracts?.[usedChainId]?.TokenLockerFactoryAddress
      && domainSettings?.networks?.[usedChainId]?.webSocketRPC
      && domainSettings?.admin
      && domainSettings?.ipfsInfuraDedicatedGateway
      && domainSettings?.ipfsInfuraProjectId
      && domainSettings?.ipfsInfuraProjectSecret
    ))

    setConfiguredNetworks(domainSettings?.contracts && domainSettings?.networks
    ? Object.keys(domainSettings.contracts).filter((chainId) => { return _checkNetworkIsConfigured(chainId) })
    : [])
  }, [domainSettings, usedChainId])

  useEffect(() => {
    if (usedChainId) {
      // const lowerAcc = account?.toLowerCase()
      // const appAdmin = wordpressData?.wpAdmin
      //   ? wordpressData?.wpAdmin?.toLowerCase() === lowerAcc
      //   : admin && admin !== ZERO_ADDRESS
      //   ? admin.toLowerCase() === lowerAcc
      //   : true

      // const accessToStorageNetwork = appAdmin && chainId === STORAGE_NETWORK_ID

      // const networkIsFine =
      //   !wordpressData?.wpNetworkIds?.length
      //   || accessToStorageNetwork
      //   || wordpressData.wpNetworkIds.includes(chainId);

      setIsAvailableNetwork(
        Boolean(SUPPORTED_CHAIN_IDS.includes(Number(usedChainId))
        // && networkIsFine
      ))
    }
  }, [
    usedChainId,
    // domainDataTrigger,
    // wordpressData,
    // admin,
    account,
    error,
  ]);

  const [shouldUpdateAccountData, setShouldUpdateAccountData] = useState(false);
  const triggerUpdateAccountData = () => setShouldUpdateAccountData(!shouldUpdateAccountData);

  const [feeTokenSymbol, setFeeTokenSymbol] = useState('');
  const [feeTokenDecimals, setFeeTokenDecimals] = useState(0)
  const [feeTokenBalance, setFeeTokenBalance] = useState(0);
  const [feeTokenApproveToFactory, setFeeTokenApproveToFactory] = useState(0);
  const [isFeeTokenDataFetching, setIsFeeTokenDataFetching] = useState(false);

  const [nativeCoinBalance, setNativeCoinBalance] = useState(0);
  const [isNativeCoinBalanceFetching, setIsNativeCoinBalanceFetching] = useState(false);

  useEffect(() => {
    const fetchNativeCoinBalance = async () => {
      setIsNativeCoinBalanceFetching(true);

      try {
        const accountBalance = await library.getBalance(account);
        setNativeCoinBalance(Number(accountBalance));
      } catch (error) {
        console.log('fetchNativeCoinBalance Error: ', error);
      } finally {
        setIsNativeCoinBalanceFetching(false);
      }
    }

    if (account && library && usedChainId) {
      fetchNativeCoinBalance()
    } else {
      setNativeCoinBalance(0);
    }
  }, [account, library, usedChainId, shouldUpdateAccountData])

  const FeeTokenContract = useTokenContract(FeeTokenAddress, true);

  useEffect(() => {
    const fetchFeeTokenData = async () => {
      setIsFeeTokenDataFetching(true);

      try {
        const symbol = await FeeTokenContract.symbol();
        const balance = await FeeTokenContract.balanceOf(account);
        const decimals = await FeeTokenContract.decimals()
        const approveToFactory = await FeeTokenContract.allowance(account, IDOFactoryAddress);
        setFeeTokenSymbol(symbol);
        setFeeTokenBalance(Number(balance));
        setFeeTokenDecimals(Number(decimals))
        setFeeTokenApproveToFactory(Number(approveToFactory));
      } catch (error) {
        console.log('fetchTokenFeeData error: ', error);
      } finally {
        setIsFeeTokenDataFetching(false);
      }
    }

    if (account && FeeTokenContract && IDOFactoryAddress) {
      fetchFeeTokenData();
    } else {
      setFeeTokenSymbol('');
      setFeeTokenBalance(0);
      setFeeTokenDecimals(0)
      setFeeTokenApproveToFactory(0);
    }
  }, [account, FeeTokenContract, IDOFactoryAddress, shouldUpdateAccountData]);

  const TokenLockerFactoryContract = useLockerFactoryContract(TokenLockerFactoryAddress, true);
  const IDOFactoryContract = useIDOFactoryContract(IDOFactoryAddress, true);

  const [ IDOFactoryLoaded, setIDOFactoryLoaded ] = useState(false)
  const [ IDOFactoryOwner, setIDOFactoryOwner ] = useState(false)
  const [ IDOFactoryOnlyOwnerCreate, setIDOFactoryOnlyOwnerCreate ] = useState(false)
  

  useEffect(async () => {
    if (IDOFactoryContract) {
      const factoryOwner = await IDOFactoryContract.owner()
      let onlyOwnerCreate = false
      try {
        // v2.0
        onlyOwnerCreate = await IDOFactoryContract.onlyOwnerCreate()
      } catch (e) {}

      setIDOFactoryOwner(factoryOwner)
      setIDOFactoryOnlyOwnerCreate(onlyOwnerCreate)
      setIDOFactoryLoaded(true)
    }
  }, [ IDOFactoryContract ])
  
  const [ TokenFactoryLoaded, setTokenFactoryLoaded ] = useState(false)
  const [ TokenFactoryOwner, setTokenFactoryOwner ] = useState(false)
  const [ TokenFactoryOnlyOwnerCreate, setTokenFactoryOnlyOwnerCreate ] = useState(false)
  
  useEffect(async () => {
    if (TokenLockerFactoryContract) {
      const factoryOwner = await TokenLockerFactoryContract.owner()
      let onlyOwnerCreate = false
      try {
        // v2.0
        onlyOwnerCreate = await TokenLockerFactoryContract.onlyOwnerCreate()
      } catch (e) {}
      
      setTokenFactoryOwner(factoryOwner)
      setTokenFactoryOnlyOwnerCreate(onlyOwnerCreate)
      setTokenFactoryLoaded(true)
    }
  }, [ TokenLockerFactoryContract ])
  const value = {
    isAppConfigured,

    domain,
    isAdmin,
    domainSettings,
    isDomainDataFetching,
    isDomainDataFetched,

    configuredNetworks,

    triggerDomainData,

    isAvailableNetwork,
    chainName,
    networkExplorer,
    baseCurrencySymbol,

    triggerUpdateAccountData,
    ETHamount: nativeCoinBalance,
    isNativeCoinBalanceFetching,

    FeeTokenamount: feeTokenBalance,
    FeeTokenSymbol: feeTokenSymbol,
    FeeTokenDecimals: feeTokenDecimals,
    FeeTokenApproveToFactory: feeTokenApproveToFactory,
    isFeeTokenDataFetching,

    FeeTokenContract,
    FeeTokenAddress,

    IDOFactoryContract,
    IDOFactoryAddress,
    
    IDOFactoryLoaded,
    IDOFactoryOwner,
    IDOFactoryOnlyOwnerCreate,

    TokenFactoryLoaded,
    TokenFactoryOwner,
    TokenFactoryOnlyOwnerCreate,

    TokenLockerFactoryAddress,
    TokenLockerFactoryContract,
  };

  return (
    <Application.Provider value={value}>{children}</Application.Provider>
  );
};

export const useApplicationContext = () => React.useContext(Application);
