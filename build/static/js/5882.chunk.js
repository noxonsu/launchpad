"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[5882],{55882:(e,t,n)=>{n.r(t),n.d(t,{PayController:()=>de,W3mPayLoadingView:()=>Ee,W3mPayQuoteView:()=>He,W3mPayView:()=>he,arbitrumUSDC:()=>ct,arbitrumUSDT:()=>mt,baseETH:()=>it,baseSepoliaETH:()=>st,baseUSDC:()=>at,ethereumUSDC:()=>rt,ethereumUSDT:()=>dt,getExchanges:()=>Xe,getIsPaymentInProgress:()=>et,getPayError:()=>Ze,getPayResult:()=>Je,openPay:()=>Ye,optimismUSDC:()=>ot,optimismUSDT:()=>pt,pay:()=>Ve,polygonUSDC:()=>lt,polygonUSDT:()=>ht,solanaSOL:()=>yt,solanaUSDC:()=>ut,solanaUSDT:()=>gt});var i=n(66386),a=n(43756),s=n(54417),r=n(53993),o=n(83520),c=n(66107),l=n(8632),u=n(47443),d=n(82994),p=n(90891),m=n(52105),h=(n(74385),n(78330),n(75692),n(44641),n(87975),n(58507),n(65723),n(90285),n(30124),n(59802),n(43549),n(71186),n(24227)),g=n(31085),y=n(46460),w=n(42972),f=n(31390),v=n(26367),b=n(82880),x=n(37082),k=n(87051);const S="INVALID_PAYMENT_CONFIG",I="INVALID_RECIPIENT",A="INVALID_ASSET",C="INVALID_AMOUNT",P="UNKNOWN_ERROR",E="UNABLE_TO_INITIATE_PAYMENT",$="INVALID_CHAIN_NAMESPACE",N="GENERIC_PAYMENT_ERROR",T="UNABLE_TO_GET_EXCHANGES",R="ASSET_NOT_SUPPORTED",q="UNABLE_TO_GET_PAY_URL",U="UNABLE_TO_GET_BUY_STATUS",O="UNABLE_TO_GET_QUOTE",D="UNABLE_TO_GET_QUOTE_STATUS",j="INVALID_RECIPIENT_ADDRESS_FOR_ASSET",B={[S]:"Invalid payment configuration",[I]:"Invalid recipient address",[A]:"Invalid asset specified",[C]:"Invalid payment amount",[j]:"Invalid recipient address for the asset selected",[P]:"Unknown payment error occurred",[E]:"Unable to initiate payment",[$]:"Invalid chain namespace",[N]:"Unable to process payment",[T]:"Unable to get exchanges",[R]:"Asset not supported by the selected exchange",[q]:"Unable to get payment URL",[U]:"Unable to get buy status",["UNABLE_TO_GET_TOKEN_BALANCES"]:"Unable to get token balances",[O]:"Unable to get quote. Please choose a different token",[D]:"Unable to get quote status"};class F extends Error{get message(){return B[this.code]}constructor(e,t){super(B[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,F)}}var L=n(78528),_=n(93060),z=n(95174);const W="reown_test";var M=n(90511),Q=n(62510);function K(e){if(!e)return null;const t=e.steps[0];return t&&t.type===ce?t:null}function H(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)return[];const n=e.steps.filter((e=>e.type===le)),i=n.filter(((e,n)=>n+1>t));return n.length>0&&n.length<3?i:[]}const G=new L.V({baseUrl:b.j.getApiUrl(),clientId:null});class Y extends Error{}function V(){const{projectId:e,sdkType:t,sdkVersion:n}=_.h.state;return{projectId:e,st:t||"appkit",sv:n||"html-wagmi-4.2.2"}}async function X(e,t){const n=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${_.h.getSnapshot().projectId}`,{sdkType:i,sdkVersion:a,projectId:s}=_.h.getSnapshot(),r={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:i,sv:a,projectId:s}},o=await fetch(n,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}),c=await o.json();if(c.error)throw new Y(c.error.message);return c}async function J(e){return(await X("reown_getExchanges",e)).result}async function Z(e){return(await X("reown_getExchangePayUrl",e)).result}async function ee(e){const t=k.g.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),n=k.g.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&n?async function(e){var t,n,i;let{sourceToken:a,toToken:s,amount:r,recipient:o}=e;const c=d.l.parseUnits(r,a.metadata.decimals),l=d.l.parseUnits(r,s.metadata.decimals);return Promise.resolve({type:oe,origin:{amount:null!==(t=null===c||void 0===c?void 0:c.toString())&&void 0!==t?t:"0",currency:a},destination:{amount:null!==(n=null===l||void 0===l?void 0:l.toString())&&void 0!==n?n:"0",currency:s},fees:[{id:"service",label:"Service Fee",amount:"0",currency:s}],steps:[{requestId:oe,type:"deposit",deposit:{amount:null!==(i=null===c||void 0===c?void 0:c.toString())&&void 0!==i?i:"0",currency:a.asset,receiver:o}}],timeInSeconds:6})}(e):async function(e){const t=f.C.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:n,chainNamespace:i}=w.u.parseCaipNetworkId(e.sourceToken.network),{chainId:a,chainNamespace:s}=w.u.parseCaipNetworkId(e.toToken.network),r="native"===e.sourceToken.asset?(0,z.rG)(i):e.sourceToken.asset,o="native"===e.toToken.asset?(0,z.rG)(s):e.toToken.asset;return await G.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:n.toString(),originCurrency:r,destinationChainId:a.toString(),destinationCurrency:o,recipient:e.recipient,amount:t},params:V()})}(e)}const te=["eip155","solana"],ne={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},ie={56:"714",204:"714"};function ae(e,t){const{chainNamespace:n,chainId:i}=w.u.parseCaipNetworkId(e),a=ne[n];if(!a)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let s=a.native.assetNamespace,r=a.native.assetReference;"native"!==t?(s=a.defaultTokenNamespace,r=t):"eip155"===n&&ie[i]&&(r=ie[i]);return`${`${n}:${i}`}/${s}:${r}`}function se(e){const t=f.C.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}const re="unknown",oe="direct-transfer",ce="deposit",le="transaction",ue=(0,h.sj)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[y.b.CHAIN.EVM]:[],[y.b.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),de={state:ue,subscribe:e=>(0,h.Ld)(ue,(()=>e(ue))),subscribeKey:(e,t)=>(0,g.VW)(ue,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),function(){const{chainNamespace:e}=w.u.parseCaipNetworkId(de.state.paymentAsset.network);if(!b.j.isAddress(de.state.recipient,e))throw new F(j,`Provide valid recipient address for namespace "${e}"`)}(),await this.prepareTokenLogo(),ue.isConfigured=!0,v.X.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:ue.exchanges,configuration:{network:ue.paymentAsset.network,asset:ue.paymentAsset.asset,recipient:ue.recipient,amount:ue.amount}}}),await u.I.open({view:"Pay"})},resetState(){ue.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},ue.recipient="0x0",ue.amount=0,ue.isConfigured=!1,ue.error=null,ue.isPaymentInProgress=!1,ue.isLoading=!1,ue.currentPayment=void 0,ue.selectedExchange=void 0,ue.exchangeUrlForQuote=void 0,ue.requestId=void 0},resetQuoteState(){ue.quote=void 0,ue.quoteStatus="waiting",ue.quoteError=null,ue.isFetchingQuote=!1,ue.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new F(S);try{var t,n;ue.choice=null!==(t=e.choice)&&void 0!==t?t:"pay",ue.paymentAsset=e.paymentAsset,ue.recipient=e.recipient,ue.amount=e.amount,ue.openInNewTab=null===(n=e.openInNewTab)||void 0===n||n,ue.redirectUrl=e.redirectUrl,ue.payWithExchange=e.payWithExchange,ue.error=null}catch(i){throw new F(S,i.message)}},setSelectedPaymentAsset(e){ue.selectedPaymentAsset=e},setSelectedExchange(e){ue.selectedExchange=e},setRequestId(e){ue.requestId=e},setPaymentInProgress(e){ue.isPaymentInProgress=e},getPaymentAsset:()=>ue.paymentAsset,getExchanges:()=>ue.exchanges,async fetchExchanges(){try{ue.isLoading=!0;const e=await J({page:0});ue.exchanges=e.exchanges.slice(0,2)}catch(e){throw p.K.showError(B.UNABLE_TO_GET_EXCHANGES),new F(T)}finally{ue.isLoading=!1}},async getAvailableExchanges(e){try{var t,n;const i=null!==e&&void 0!==e&&e.asset&&null!==e&&void 0!==e&&e.network?ae(e.network,e.asset):void 0;return await J({page:null!==(t=null===e||void 0===e?void 0:e.page)&&void 0!==t?t:0,asset:i,amount:null===e||void 0===e||null===(n=e.amount)||void 0===n?void 0:n.toString()})}catch(i){throw new F(T)}},async getPayUrl(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{const i=Number(t.amount),a=await Z({exchangeId:e,asset:ae(t.network,t.asset),amount:i.toString(),recipient:`${t.network}:${t.recipient}`});return v.X.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:e},headless:n}}),n&&(this.initiatePayment(),v.X.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:ue.paymentId||re,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:e}}})),a}catch(i){if(i instanceof Error&&i.message.includes("is not supported"))throw new F(R);throw new Error(i.message)}},async generateExchangeUrlForQuote(e){let{exchangeId:t,paymentAsset:n,amount:i,recipient:a}=e;const s=await Z({exchangeId:t,asset:ae(n.network,n.asset),amount:i.toString(),recipient:a});ue.exchangeSessionId=s.sessionId,ue.exchangeUrlForQuote=s.url},async openPayUrl(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{var i;const a=await this.getPayUrl(e.exchangeId,t,n);if(!a)throw new F(q);const s=null===(i=e.openInNewTab)||void 0===i||i?"_blank":"_self";return b.j.openHref(a.url,s),a}catch(a){throw ue.error=a instanceof F?a.message:B.GENERIC_PAYMENT_ERROR,new F(q)}},async onTransfer(e){let{chainNamespace:t,fromAddress:n,toAddress:i,amount:a,paymentAsset:s}=e;if(ue.currentPayment={type:"wallet",status:"IN_PROGRESS"},!ue.isPaymentInProgress)try{this.initiatePayment();const e=o.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===s.network));if(!e)throw new Error("Target network not found");const r=o.R.state.activeCaipNetwork;switch(k.g.isLowerCaseMatch(null===r||void 0===r?void 0:r.caipNetworkId,e.caipNetworkId)||await o.R.switchActiveNetwork(e),t){case y.b.CHAIN.EVM:"native"===s.asset&&(ue.currentPayment.result=await async function(e,t,n){var i,a;if(t!==y.b.CHAIN.EVM)throw new F($);if(!n.fromAddress)throw new F(S,"fromAddress is required for native EVM payments.");const s="string"===typeof n.amount?parseFloat(n.amount):n.amount;if(isNaN(s))throw new F(S);const r=null!==(i=null===(a=e.metadata)||void 0===a?void 0:a.decimals)&&void 0!==i?i:18,o=d.l.parseUnits(s.toString(),r);if("bigint"!==typeof o)throw new F(N);const c=await d.l.sendTransaction({chainNamespace:t,to:n.recipient,address:n.fromAddress,value:o,data:"0x"});return null!==c&&void 0!==c?c:void 0}(s,t,{recipient:i,amount:a,fromAddress:n})),s.asset.startsWith("0x")&&(ue.currentPayment.result=await async function(e,t){if(!t.fromAddress)throw new F(S,"fromAddress is required for ERC20 EVM payments.");const n=e.asset,i=t.recipient,a=Number(e.metadata.decimals),s=d.l.parseUnits(t.amount.toString(),a);if(void 0===s)throw new F(N);const r=await d.l.writeContract({fromAddress:t.fromAddress,tokenAddress:n,args:[i,s],method:"transfer",abi:M.g.getERC20Abi(n),chainNamespace:y.b.CHAIN.EVM});return null!==r&&void 0!==r?r:void 0}(s,{recipient:i,amount:a,fromAddress:n})),ue.currentPayment.status="SUCCESS";break;case y.b.CHAIN.SOLANA:ue.currentPayment.result=await async function(e,t){if(e!==y.b.CHAIN.SOLANA)throw new F($);if(!t.fromAddress)throw new F(S,"fromAddress is required for Solana payments.");const n="string"===typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(n)||n<=0)throw new F(S,"Invalid payment amount.");try{if(!Q.O.getProvider(e))throw new F(N,"No Solana provider available.");const i=await d.l.sendTransaction({chainNamespace:y.b.CHAIN.SOLANA,to:t.recipient,value:n,tokenMint:t.tokenMint});if(!i)throw new F(N,"Transaction failed.");return i}catch(i){if(i instanceof F)throw i;throw new F(N,`Solana payment failed: ${i}`)}}(t,{recipient:i,amount:a,fromAddress:n,tokenMint:"native"===s.asset?void 0:s.asset}),ue.currentPayment.status="SUCCESS";break;default:throw new F($)}}catch(r){throw ue.error=r instanceof F?r.message:B.GENERIC_PAYMENT_ERROR,ue.currentPayment.status="FAILED",p.K.showError(ue.error),r}finally{ue.isPaymentInProgress=!1}},async onSendTransaction(e){try{const{namespace:t,transactionStep:n}=e;de.initiatePayment();const i=o.R.getAllRequestedCaipNetworks().find((e=>{var t;return e.caipNetworkId===(null===(t=ue.paymentAsset)||void 0===t?void 0:t.network)}));if(!i)throw new Error("Target network not found");const a=o.R.state.activeCaipNetwork;if(k.g.isLowerCaseMatch(null===a||void 0===a?void 0:a.caipNetworkId,i.caipNetworkId)||await o.R.switchActiveNetwork(i),t===y.b.CHAIN.EVM){const{from:e,to:i,data:a,value:s}=n.transaction;await d.l.sendTransaction({address:e,to:i,data:a,value:BigInt(s),chainNamespace:t})}else if(t===y.b.CHAIN.SOLANA){const{instructions:e}=n.transaction;await d.l.writeSolanaTransaction({instructions:e})}}catch(t){throw ue.error=t instanceof F?t.message:B.GENERIC_PAYMENT_ERROR,p.K.showError(ue.error),t}finally{ue.isPaymentInProgress=!1}},getExchangeById:e=>ue.exchanges.find((t=>t.id===e)),validatePayConfig(e){const{paymentAsset:t,recipient:n,amount:i}=e;if(!t)throw new F(S);if(!n)throw new F(I);if(!t.asset)throw new F(A);if(void 0===i||null===i||i<=0)throw new F(C)},async handlePayWithExchange(e){try{ue.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:n}=ue.paymentAsset,i={network:t,asset:n,amount:ue.amount,recipient:ue.recipient},a=await this.getPayUrl(e,i);if(!a)throw new F(E);return ue.currentPayment.sessionId=a.sessionId,ue.currentPayment.status="IN_PROGRESS",ue.currentPayment.exchangeId=e,this.initiatePayment(),{url:a.url,openInNewTab:ue.openInNewTab}}catch(t){return ue.error=t instanceof F?t.message:B.GENERIC_PAYMENT_ERROR,ue.isPaymentInProgress=!1,p.K.showError(ue.error),null}},async getBuyStatus(e,t){try{const a=await async function(e){return(await X("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});var n,i;if("SUCCESS"===a.status||"FAILED"===a.status)v.X.sendEvent({type:"track",event:"SUCCESS"===a.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===a.status?b.j.parseError(ue.error):void 0,source:"pay",paymentId:ue.paymentId||re,configuration:{network:ue.paymentAsset.network,asset:ue.paymentAsset.asset,recipient:ue.recipient,amount:ue.amount},currentPayment:{type:"exchange",exchangeId:null===(n=ue.currentPayment)||void 0===n?void 0:n.exchangeId,sessionId:null===(i=ue.currentPayment)||void 0===i?void 0:i.sessionId,result:a.txHash}}});return a}catch(a){throw new F(U)}},async fetchTokensFromEOA(e){let{caipAddress:t,caipNetwork:n,namespace:i}=e;if(!t)return[];const{address:a}=w.u.parseCaipAddress(t);let s=n;i===y.b.CHAIN.EVM&&(s=void 0);return await x.Q.getMyTokensWithBalance({address:a,caipNetwork:s})},async fetchTokensFromExchange(){if(!ue.selectedExchange)return[];const e=await async function(e){return await G.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:V()})}(ue.selectedExchange.id),t=Object.values(e.assets).flat();return await Promise.all(t.map((async e=>{var t;const n={chainId:(i=e).network,address:`${i.network}:${i.asset}`,symbol:i.metadata.symbol,name:i.metadata.name,iconUrl:i.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:i.metadata.decimals.toString()}};var i;const{chainNamespace:a}=w.u.parseCaipNetworkId(n.chainId);let s=n.address;if(b.j.isCaipAddress(s)){const{address:e}=w.u.parseCaipAddress(s);s=e}const r=await c.f.getImageByToken(null!==(t=s)&&void 0!==t?t:"",a).catch((()=>{}));return n.iconUrl=null!==r&&void 0!==r?r:"",n})))},async fetchTokens(e){let{caipAddress:t,caipNetwork:n,namespace:i}=e;try{ue.isFetchingTokenBalances=!0;const e=Boolean(ue.selectedExchange)?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:t,caipNetwork:n,namespace:i}),a=await e;ue.tokenBalances={...ue.tokenBalances,[i]:a}}catch(a){const e=a instanceof Error?a.message:"Unable to get token balances";p.K.showError(e)}finally{ue.isFetchingTokenBalances=!1}},async fetchQuote(e){let{amount:t,address:n,sourceToken:i,toToken:a,recipient:s}=e;try{de.resetQuoteState(),ue.isFetchingQuote=!0;const e=await ee({amount:t,address:ue.selectedExchange?void 0:n,sourceToken:i,toToken:a,recipient:s});if(ue.selectedExchange){const t=K(e);if(t){var r;const e=`${i.network}:${t.deposit.receiver}`,n=f.C.formatNumber(t.deposit.amount,{decimals:null!==(r=i.metadata.decimals)&&void 0!==r?r:0,round:8});await de.generateExchangeUrlForQuote({exchangeId:ue.selectedExchange.id,paymentAsset:i,amount:n.toString(),recipient:e})}}ue.quote=e}catch(o){let e=B.UNABLE_TO_GET_QUOTE;if(o instanceof Error&&o.cause&&o.cause instanceof Response)try{const t=await o.cause.json();t.error&&"string"===typeof t.error&&(e=t.error)}catch{}throw ue.quoteError=e,p.K.showError(e),new F(O)}finally{ue.isFetchingQuote=!1}},async fetchQuoteStatus(e){let{requestId:t}=e;try{if(t===oe){const e=ue.selectedExchange,t=ue.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case"IN_PROGRESS":case"UNKNOWN":default:ue.quoteStatus="waiting";break;case"SUCCESS":ue.quoteStatus="success",ue.isPaymentInProgress=!1;break;case"FAILED":ue.quoteStatus="failure",ue.isPaymentInProgress=!1}return}return void(ue.quoteStatus="success")}const{status:e}=await async function(e){return await G.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...V()}})}({requestId:t});ue.quoteStatus=e}catch{throw ue.quoteStatus="failure",new F(D)}},initiatePayment(){ue.isPaymentInProgress=!0,ue.paymentId=crypto.randomUUID()},initializeAnalytics(){ue.analyticsSet||(ue.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",(e=>{var t;if(null!==(t=ue.currentPayment)&&void 0!==t&&t.status&&"UNKNOWN"!==ue.currentPayment.status){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[ue.currentPayment.status];v.X.sendEvent({type:"track",event:e,properties:{message:"FAILED"===ue.currentPayment.status?b.j.parseError(ue.error):void 0,source:"pay",paymentId:ue.paymentId||re,configuration:{network:ue.paymentAsset.network,asset:ue.paymentAsset.asset,recipient:ue.recipient,amount:ue.amount},currentPayment:{type:ue.currentPayment.type,exchangeId:ue.currentPayment.exchangeId,sessionId:ue.currentPayment.sessionId,result:ue.currentPayment.result}}})}})))},async prepareTokenLogo(){if(!ue.paymentAsset.metadata.logoURI)try{const{chainNamespace:e}=w.u.parseCaipNetworkId(ue.paymentAsset.network),t=await c.f.getImageByToken(ue.paymentAsset.asset,e);ue.paymentAsset.metadata.logoURI=t}catch{}}},pe=m.iv`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  .payment-methods-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-top-right-radius: ${e=>{let{borderRadius:t}=e;return t[8]}};
    border-top-left-radius: ${e=>{let{borderRadius:t}=e;return t[8]}};
  }
`;var me=function(e,t,n,i){var a,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};let he=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.amount=de.state.amount,this.namespace=void 0,this.paymentAsset=de.state.paymentAsset,this.activeConnectorIds=r.A.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=de.state.exchanges,this.isLoading=de.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(de.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(r.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(de.subscribeKey("exchanges",(e=>this.exchanges=e))),this.unsubscribe.push(de.subscribeKey("isLoading",(e=>this.isLoading=e))),de.fetchExchanges(),de.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return i.dy`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return i.dy`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){var e;const t=o.R.state.activeChain;this.namespace=t,this.caipAddress=null===(e=o.R.getAccountData(t))||void 0===e?void 0:e.caipAddress,this.unsubscribe.push(o.R.subscribeChainProp("accountState",(e=>{this.caipAddress=null===e||void 0===e?void 0:e.caipAddress}),t))}paymentDetailsTemplate(){const e=o.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return i.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${se(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${(null===e||void 0===e?void 0:e.name)||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,s.o)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,s.o)(c.f.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return function(e){const{chainNamespace:t}=w.u.parseCaipNetworkId(e);return te.includes(t)}(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():i.dy``}connectedWalletTemplate(){const{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return i.dy`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${(0,s.o)(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return i.dy`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return i.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const e=this.exchanges.filter((e=>function(e){const t=o.R.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.network));return!!t&&Boolean(t.testnet)}(this.paymentAsset)?e.id===W:e.id!==W));return 0===e.length?i.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map((e=>i.dy`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${(0,s.o)(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `))}templateSeparator(){return i.dy`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?l.P.push("PayQuote"):(await r.A.connect(),await u.I.open({view:"PayQuote"}))}onExchangePayment(e){de.setSelectedExchange(e),l.P.push("PayQuote")}async onDisconnect(){try{await d.l.disconnect(),await u.I.open({view:"Pay"})}catch{console.error("Failed to disconnect"),p.K.showError("Failed to disconnect")}}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const n=this.activeConnectorIds[t];if(!n)return{name:void 0,image:void 0};const i=r.A.getConnector({id:n,namespace:t});if(!i)return{name:void 0,image:void 0};const a=c.f.getConnectorImage(i);return{name:i.name,image:a}}};he.styles=pe,me([(0,a.SB)()],he.prototype,"amount",void 0),me([(0,a.SB)()],he.prototype,"namespace",void 0),me([(0,a.SB)()],he.prototype,"paymentAsset",void 0),me([(0,a.SB)()],he.prototype,"activeConnectorIds",void 0),me([(0,a.SB)()],he.prototype,"caipAddress",void 0),me([(0,a.SB)()],he.prototype,"exchanges",void 0),me([(0,a.SB)()],he.prototype,"isLoading",void 0),he=me([(0,m.Mo)("w3m-pay-view")],he);var ge=n(57346),ye=n(10109),we=n(50745),fe=n(32603);const ve=ye.iv`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var be=function(e,t,n,i){var a,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};const xe={"accent-primary":ye.gR.tokens.core.backgroundAccentPrimary};let ke=class extends i.oi{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){const e=xe[this.variant];this.style.cssText=`\n      --pulse-size: ${this.size};\n      --pulse-duration: ${this.duration}s;\n      --pulse-color: ${e};\n      --pulse-opacity: ${this.opacity};\n    `;const t=Array.from({length:this.rings},((e,t)=>this.renderRing(t,this.rings)));return i.dy`
      <div class="pulse-container">
        <div class="pulse-rings">${t}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){const n=`animation-delay: ${e/t*this.duration}s;`;return i.dy`<div class="pulse-ring" style=${n}></div>`}};ke.styles=[we.ET,ve],be([(0,a.Cb)({type:Number})],ke.prototype,"rings",void 0),be([(0,a.Cb)({type:Number})],ke.prototype,"duration",void 0),be([(0,a.Cb)({type:Number})],ke.prototype,"opacity",void 0),be([(0,a.Cb)()],ke.prototype,"size",void 0),be([(0,a.Cb)()],ke.prototype,"variant",void 0),ke=be([(0,fe.M)("wui-pulse")],ke);const Se=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],Ie=["success","submitted","failure","timeout","refund"],Ae=m.iv`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border: 3px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  .token-badge-container.success {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border: 3px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  .token-image.error {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  .token-image.loading {
    background: ${e=>{let{colors:t}=e;return t.accent010}};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-top-right-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
    border-top-left-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
  }

  .payment-step-badge {
    padding: ${e=>{let{spacing:t}=e;return t[1]}} ${e=>{let{spacing:t}=e;return t[2]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  .payment-step-badge.loading {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  .payment-step-badge.error {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundError}};
  }

  .payment-step-badge.success {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  .step-icon-box.success {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};
  }
`;var Ce=function(e,t,n,i){var a,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};const Pe={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]};let Ee=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=de.state.paymentAsset,this.quoteStatus=de.state.quoteStatus,this.quote=de.state.quote,this.amount=de.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=r.A.state.activeConnectorIds,this.selectedExchange=de.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(de.subscribeKey("quoteStatus",(e=>this.quoteStatus=e)),de.subscribeKey("quote",(e=>this.quote=e)),r.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e)),de.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach((e=>e()))}render(){return i.dy`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){var e;const t=se(this.amount||"0"),n=null!==(e=this.paymentAsset.metadata.symbol)&&void 0!==e?e:"Unknown",a=o.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network)),r="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?i.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:r?i.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:i.dy`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${(0,s.o)(c.f.getNetworkImage(a))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${t} ${n}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return i.dy`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const e=this.getStepsWithStatus();return i.dy`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map((e=>this.renderStep(e)))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){var e,t;const n="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,a="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(n)return i.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(a)return i.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;const s=null!==(e=null===(t=this.quote)||void 0===t?void 0:t.timeInSeconds)&&void 0!==e?e:0;return i.dy`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${s} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){var e,t,n,a,r;const l=o.R.getAllRequestedCaipNetworks().find((e=>{var t;const n=null===(t=this.quote)||void 0===t?void 0:t.origin.currency.network;if(!n)return!1;const{chainId:i}=w.u.parseCaipNetworkId(n);return k.g.isLowerCaseMatch(e.id.toString(),i.toString())})),u=se(f.C.formatNumber((null===(e=this.quote)||void 0===e?void 0:e.origin.amount)||"0",{decimals:null!==(t=null===(n=this.quote)||void 0===n?void 0:n.origin.currency.metadata.decimals)&&void 0!==t?t:0}).toString()),d=null!==(a=null===(r=this.quote)||void 0===r?void 0:r.origin.currency.metadata.symbol)&&void 0!==a?a:"Unknown";return i.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${u}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${d}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,s.o)(c.f.getNetworkImage(l))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${null===l||void 0===l?void 0:l.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return i.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange?"Exchange":"Wallet"}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){var e;const{image:t}=this.getWalletProperties({namespace:this.namespace}),{address:n}=this.caipAddress?w.u.parseCaipAddress(this.caipAddress):{},a=null===(e=this.selectedExchange)||void 0===e?void 0:e.name;return this.selectedExchange?i.dy`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${a}</wui-text>
          <wui-image src=${(0,s.o)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:i.dy`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${m.Hg.getTruncateString({string:this.profileName||n||a||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,s.o)(t)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?Se.map((e=>({...e,status:"failed"}))):Se.map((e=>{var t;const n=(null!==(t=Pe[e.id])&&void 0!==t?t:[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:n}}))}renderStep(e){let{title:t,icon:n,status:a}=e;const s={"step-icon-box":!0,success:"completed"===a};return i.dy`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${n} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,ge.$)(s)}>
            ${this.renderStatusIndicator(a)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${t}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return"completed"===e?i.dy`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===e?i.dy`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===e?i.dy`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval((()=>{this.fetchQuoteStatus()}),3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){const e=de.state.requestId;if(!e||Ie.includes(this.quoteStatus))this.stopPolling();else try{await de.fetchQuoteStatus({requestId:e}),Ie.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){var e,t,n;const i=o.R.state.activeChain;this.namespace=i,this.caipAddress=null===(e=o.R.getAccountData(i))||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===(n=o.R.getAccountData(i))||void 0===n?void 0:n.profileName)&&void 0!==t?t:null,this.unsubscribe.push(o.R.subscribeChainProp("accountState",(e=>{var t;this.caipAddress=null===e||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===e||void 0===e?void 0:e.profileName)&&void 0!==t?t:null}),i))}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const n=this.activeConnectorIds[t];if(!n)return{name:void 0,image:void 0};const i=r.A.getConnector({id:n,namespace:t});if(!i)return{name:void 0,image:void 0};const a=c.f.getConnectorImage(i);return{name:i.name,image:a}}};Ee.styles=Ae,Ce([(0,a.SB)()],Ee.prototype,"paymentAsset",void 0),Ce([(0,a.SB)()],Ee.prototype,"quoteStatus",void 0),Ce([(0,a.SB)()],Ee.prototype,"quote",void 0),Ce([(0,a.SB)()],Ee.prototype,"amount",void 0),Ce([(0,a.SB)()],Ee.prototype,"namespace",void 0),Ce([(0,a.SB)()],Ee.prototype,"caipAddress",void 0),Ce([(0,a.SB)()],Ee.prototype,"profileName",void 0),Ce([(0,a.SB)()],Ee.prototype,"activeConnectorIds",void 0),Ce([(0,a.SB)()],Ee.prototype,"selectedExchange",void 0),Ee=Ce([(0,m.Mo)("w3m-pay-loading-view")],Ee);n(42987),n(77749);const $e=i.iv`
  :host {
    display: block;
  }
`;var Ne=function(e,t,n,i){var a,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};let Te=class extends i.oi{render(){return i.dy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};Te.styles=[$e],Te=Ne([(0,m.Mo)("w3m-pay-fees-skeleton")],Te);const Re=m.iv`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }
`;var qe=function(e,t,n,i){var a,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};let Ue=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.quote=de.state.quote,this.unsubscribe.push(de.subscribeKey("quote",(e=>this.quote=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e,t,n,a;const s=f.C.formatNumber((null===(e=this.quote)||void 0===e?void 0:e.origin.amount)||"0",{decimals:null!==(t=null===(n=this.quote)||void 0===n?void 0:n.origin.currency.metadata.decimals)&&void 0!==t?t:0,round:6}).toString();return i.dy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${s} ${(null===(a=this.quote)||void 0===a?void 0:a.origin.currency.metadata.symbol)||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map((e=>this.renderFee(e))):null}
      </wui-flex>
    `}renderFee(e){var t;const n="network"===e.id,a=f.C.formatNumber(e.amount||"0",{decimals:null!==(t=e.currency.metadata.decimals)&&void 0!==t?t:0,round:6}).toString();if(n){const t=o.R.getAllRequestedCaipNetworks().find((t=>k.g.isLowerCaseMatch(t.caipNetworkId,e.currency.network)));return i.dy`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${a} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,s.o)(c.f.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${(null===t||void 0===t?void 0:t.name)||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return i.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${a} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};Ue.styles=[Re],qe([(0,a.SB)()],Ue.prototype,"quote",void 0),Ue=qe([(0,m.Mo)("w3m-pay-fees")],Ue);const Oe=m.iv`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${e=>{let{spacing:t}=e;return t[2]}};
    min-height: 168px;
  }

  wui-icon {
    width: ${e=>{let{spacing:t}=e;return t[8]}};
    height: ${e=>{let{spacing:t}=e;return t[8]}};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var De=function(e,t,n,i){var a,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};let je=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.selectedExchange=de.state.selectedExchange,this.unsubscribe.push(de.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=Boolean(this.selectedExchange);return i.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:i.dy`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};je.styles=[Oe],De([(0,a.Cb)({type:Array})],je.prototype,"selectedExchange",void 0),je=De([(0,m.Mo)("w3m-pay-options-empty")],je);const Be=m.iv`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }
`;var Fe=function(e,t,n,i){var a,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};let Le=class extends i.oi{render(){return i.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return i.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};Le.styles=[Be],Le=Fe([(0,m.Mo)("w3m-pay-options-skeleton")],Le);const _e=m.iv`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    }
  }
`;var ze=function(e,t,n,i){var a,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};let We=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){var e,t;this.unsubscribe.forEach((e=>e())),null===(e=this.resizeObserver)||void 0===e||e.disconnect();const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".pay-options-container");null===n||void 0===n||n.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".pay-options-container");var n;t&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),null===t||void 0===t||t.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleOptionsListScroll()})),null===(n=this.resizeObserver)||void 0===n||n.observe(t),this.handleOptionsListScroll())}render(){return i.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map((e=>this.payOptionTemplate(e)))}
      </wui-flex>
    `}payOptionTemplate(e){var t,n;const{network:a,metadata:r,asset:l,amount:u="0"}=e,d=o.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===a)),p=`${a}:${l}`===`${null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.network}:${null===(n=this.selectedPaymentAsset)||void 0===n?void 0:n.asset}`,m=f.C.bigNumber(u,{safe:!0}),h=m.gt(0);return i.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>{var t;return null===(t=this.onSelect)||void 0===t?void 0:t.call(this,e)}}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,s.o)(r.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,s.o)(c.f.getNetworkImage(d))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${r.symbol}</wui-text>
            ${h?i.dy`<wui-text variant="sm-regular" color="secondary">
                  ${m.round(6).toString()} ${r.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${p?i.dy`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".pay-options-container");if(!t)return;t.scrollHeight>300?(t.style.setProperty("--options-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,\n          black 50px,\n          black calc(100% - 50px),\n          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%\n        )"),t.style.setProperty("--options-scroll--top-opacity",m.kj.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--options-scroll--bottom-opacity",m.kj.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--options-mask-image","none"),t.style.setProperty("--options-scroll--top-opacity","0"),t.style.setProperty("--options-scroll--bottom-opacity","0"))}};We.styles=[_e],ze([(0,a.Cb)({type:Array})],We.prototype,"options",void 0),ze([(0,a.Cb)()],We.prototype,"selectedPaymentAsset",void 0),ze([(0,a.Cb)()],We.prototype,"onSelect",void 0),We=ze([(0,m.Mo)("w3m-pay-options")],We);const Me=m.iv`
  .payment-methods-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-top-right-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    border-top-left-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
  }

  .pay-options-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var Qe=function(e,t,n,i){var a,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};const Ke={eip155:{icon:"ethereum",label:"EVM"},solana:{icon:"solana",label:"Solana"},bip122:{icon:"bitcoin",label:"Bitcoin"},ton:{icon:"ton",label:"Ton"}};let He=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=de.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=de.state.amount,this.recipient=de.state.recipient,this.activeConnectorIds=r.A.state.activeConnectorIds,this.selectedPaymentAsset=de.state.selectedPaymentAsset,this.selectedExchange=de.state.selectedExchange,this.isFetchingQuote=de.state.isFetchingQuote,this.quoteError=de.state.quoteError,this.quote=de.state.quote,this.isFetchingTokenBalances=de.state.isFetchingTokenBalances,this.tokenBalances=de.state.tokenBalances,this.isPaymentInProgress=de.state.isPaymentInProgress,this.exchangeUrlForQuote=de.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(de.subscribeKey("paymentAsset",(e=>this.paymentAsset=e))),this.unsubscribe.push(de.subscribeKey("tokenBalances",(e=>this.onTokenBalancesChanged(e)))),this.unsubscribe.push(de.subscribeKey("isFetchingTokenBalances",(e=>this.isFetchingTokenBalances=e))),this.unsubscribe.push(r.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(de.subscribeKey("selectedPaymentAsset",(e=>this.selectedPaymentAsset=e))),this.unsubscribe.push(de.subscribeKey("isFetchingQuote",(e=>this.isFetchingQuote=e))),this.unsubscribe.push(de.subscribeKey("quoteError",(e=>this.quoteError=e))),this.unsubscribe.push(de.subscribeKey("quote",(e=>this.quote=e))),this.unsubscribe.push(de.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(de.subscribeKey("recipient",(e=>this.recipient=e))),this.unsubscribe.push(de.subscribeKey("isPaymentInProgress",(e=>this.isPaymentInProgress=e))),this.unsubscribe.push(de.subscribeKey("selectedExchange",(e=>this.selectedExchange=e))),this.unsubscribe.push(de.subscribeKey("exchangeUrlForQuote",(e=>this.exchangeUrlForQuote=e))),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach((e=>e()))}updated(e){super.updated(e);e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return i.dy`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){var e,t;if(this.selectedExchange){var n,a,r;const e=f.C.formatNumber(null===(n=this.quote)||void 0===n?void 0:n.origin.amount,{decimals:null!==(a=null===(r=this.quote)||void 0===r?void 0:r.origin.currency.metadata.decimals)&&void 0!==a?a:0}).toString();return i.dy`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?i.dy`<wui-text variant="lg-regular" color="primary">
                ${f.C.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:i.dy`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const o=null!==(e=b.j.getPlainAddress(this.caipAddress))&&void 0!==e?e:"",{name:c,image:l}=this.getWalletProperties({namespace:this.namespace}),{icon:u,label:d}=null!==(t=Ke[this.namespace])&&void 0!==t?t:{};return i.dy`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,s.o)(this.profileName)}
          address=${(0,s.o)(o)}
          imageSrc=${(0,s.o)(l)}
          alt=${(0,s.o)(c)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,s.o)(d)}
          address=${(0,s.o)(o)}
          icon=${(0,s.o)(u)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,s.o)(d)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){var e,t,n;const i=o.R.state.activeChain;this.namespace=i,this.caipAddress=null===(e=o.R.getAccountData(i))||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===(n=o.R.getAccountData(i))||void 0===n?void 0:n.profileName)&&void 0!==t?t:null,this.unsubscribe.push(o.R.subscribeChainProp("accountState",(e=>this.onAccountStateChanged(e)),i))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){const{chainId:t,chainNamespace:n}=w.u.parseCaipAddress(this.caipAddress),i=`${n}:${t}`;e=o.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===i))}await de.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:e}=this.caipAddress?w.u.parseCaipAddress(this.caipAddress):{};de.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const n=this.activeConnectorIds[t];if(!n)return{name:void 0,image:void 0};const i=r.A.getConnector({id:n,namespace:t});if(!i)return{name:void 0,image:void 0};const a=c.f.getConnectorImage(i);return{name:i.name,image:a}}paymentOptionsViewTemplate(){return i.dy`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return i.dy`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===e.length)return i.dy`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;const t={disabled:this.isFetchingQuote};return i.dy`<w3m-pay-options
      class=${(0,ge.$)(t)}
      .options=${e}
      .selectedPaymentAsset=${(0,s.o)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?i.dy`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:i.dy`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){var e,t,n,a,s;const r=this.isFetchingQuote||this.isFetchingTokenBalances,o=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||Boolean(this.quoteError),c=f.C.formatNumber(null!==(e=null===(t=this.quote)||void 0===t?void 0:t.origin.amount)&&void 0!==e?e:0,{decimals:null!==(n=null===(a=this.quote)||void 0===a?void 0:a.origin.currency.metadata.decimals)&&void 0!==n?n:0}).toString();return this.selectedExchange?r||o?i.dy`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:i.dy`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:i.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${r||o?i.dy`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:i.dy`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${se(c)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${(null===(s=this.quote)||void 0===s?void 0:s.origin.currency.metadata.symbol)||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:r,isDisabled:o})}
      </wui-flex>
    `}actionButtonTemplate(e){const t=H(this.quote),{isLoading:n,isDisabled:a}=e;let s="Pay";return t.length>1&&0===this.completedTransactionsCount&&(s="Approve"),i.dy`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${n||this.isPaymentInProgress}
        ?disabled=${a||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${s}
        ${n?null:i.dy`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){var e;if(!this.namespace)return[];return(null!==(e=this.tokenBalances[this.namespace])&&void 0!==e?e:[]).map((e=>{try{return function(e){const t=o.R.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.chainId));let n=e.address;if(!t)throw new Error(`Target network not found for balance chainId "${e.chainId}"`);if(k.g.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))n="native";else if(b.j.isCaipAddress(n)){const{address:e}=w.u.parseCaipAddress(n);n=e}else if(!n)throw new Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:n,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}(e)}catch(t){return null}})).filter((e=>Boolean(e))).filter((e=>{const{chainId:t}=w.u.parseCaipNetworkId(e.network),{chainId:n}=w.u.parseCaipNetworkId(this.paymentAsset.network);return!!k.g.isLowerCaseMatch(e.asset,this.paymentAsset.asset)||(!this.selectedExchange||!k.g.isLowerCaseMatch(t.toString(),n.toString()))}))}onTokenBalancesChanged(e){this.tokenBalances=e;const[t]=this.getPaymentAssetFromTokenBalances();t&&de.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await r.A.connect(),await u.I.open({view:"PayQuote"})}onAccountStateChanged(e){var t;const{address:n}=this.caipAddress?w.u.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=null===e||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===e||void 0===e?void 0:e.profileName)&&void 0!==t?t:null,n){const{address:e}=this.caipAddress?w.u.parseCaipAddress(this.caipAddress):{};e?k.g.isLowerCaseMatch(e,n)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):u.I.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||de.setSelectedPaymentAsset(e)}async onTransfer(){const e=K(this.quote);if(e){var t,n,i,a,s;if(!k.g.isLowerCaseMatch(null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.asset,e.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const r=null!==(n=null===(i=this.selectedPaymentAsset)||void 0===i?void 0:i.amount)&&void 0!==n?n:"0",o=f.C.formatNumber(e.deposit.amount,{decimals:null!==(a=null===(s=this.selectedPaymentAsset)||void 0===s?void 0:s.metadata.decimals)&&void 0!==a?a:0}).toString();if(!f.C.bigNumber(r).gte(o))return void p.K.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:t}=w.u.parseCaipAddress(this.caipAddress);await de.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:o,paymentAsset:this.selectedPaymentAsset}),de.setRequestId(e.requestId),l.P.push("PayLoading")}}}async onSendTransactions(){var e,t,n,i,a,s;const r=null!==(e=null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.amount)&&void 0!==e?e:"0",o=f.C.formatNumber(null!==(n=null===(i=this.quote)||void 0===i?void 0:i.origin.amount)&&void 0!==n?n:0,{decimals:null!==(a=null===(s=this.selectedPaymentAsset)||void 0===s?void 0:s.metadata.decimals)&&void 0!==a?a:0}).toString();if(!f.C.bigNumber(r).gte(o))return void p.K.showError("Insufficient funds");const c=H(this.quote),[u]=H(this.quote,this.completedTransactionsCount);if(u&&this.namespace){await de.onSendTransaction({namespace:this.namespace,transactionStep:u}),this.completedTransactionsCount+=1;this.completedTransactionsCount===c.length&&(de.setRequestId(u.requestId),l.P.push("PayLoading"))}}onPayWithExchange(){if(this.exchangeUrlForQuote){const e=b.j.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw new Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;const t=K(this.quote);t&&de.setRequestId(t.requestId),de.initiatePayment(),l.P.push("PayLoading")}}resetAssetsState(){de.setSelectedPaymentAsset(null)}resetQuoteState(){de.resetQuoteState()}};He.styles=Me,Qe([(0,a.SB)()],He.prototype,"profileName",void 0),Qe([(0,a.SB)()],He.prototype,"paymentAsset",void 0),Qe([(0,a.SB)()],He.prototype,"namespace",void 0),Qe([(0,a.SB)()],He.prototype,"caipAddress",void 0),Qe([(0,a.SB)()],He.prototype,"amount",void 0),Qe([(0,a.SB)()],He.prototype,"recipient",void 0),Qe([(0,a.SB)()],He.prototype,"activeConnectorIds",void 0),Qe([(0,a.SB)()],He.prototype,"selectedPaymentAsset",void 0),Qe([(0,a.SB)()],He.prototype,"selectedExchange",void 0),Qe([(0,a.SB)()],He.prototype,"isFetchingQuote",void 0),Qe([(0,a.SB)()],He.prototype,"quoteError",void 0),Qe([(0,a.SB)()],He.prototype,"quote",void 0),Qe([(0,a.SB)()],He.prototype,"isFetchingTokenBalances",void 0),Qe([(0,a.SB)()],He.prototype,"tokenBalances",void 0),Qe([(0,a.SB)()],He.prototype,"isPaymentInProgress",void 0),Qe([(0,a.SB)()],He.prototype,"exchangeUrlForQuote",void 0),Qe([(0,a.SB)()],He.prototype,"completedTransactionsCount",void 0),He=Qe([(0,m.Mo)("w3m-pay-quote-view")],He);const Ge=3e5;async function Ye(e){return de.handleOpenPay(e)}async function Ve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ge;if(t<=0)throw new F(S,"Timeout must be greater than 0");try{await Ye(e)}catch(n){if(n instanceof F)throw n;throw new F(E,n.message)}return new Promise(((e,n)=>{let i=!1;const a=setTimeout((()=>{i||(i=!0,r(),n(new F(N,"Payment timeout")))}),t);function s(){if(i)return;const t=de.state.currentPayment,n=de.state.error,s=de.state.isPaymentInProgress;return"SUCCESS"===(null===t||void 0===t?void 0:t.status)?(i=!0,r(),clearTimeout(a),void e({success:!0,result:t.result})):"FAILED"===(null===t||void 0===t?void 0:t.status)?(i=!0,r(),clearTimeout(a),void e({success:!1,error:n||"Payment failed"})):void(!n||s||t||(i=!0,r(),clearTimeout(a),e({success:!1,error:n})))}const r=nt([tt("currentPayment",s),tt("error",s),tt("isPaymentInProgress",s)]);s()}))}function Xe(){return de.getExchanges()}function Je(){var e;return null===(e=de.state.currentPayment)||void 0===e?void 0:e.result}function Ze(){return de.state.error}function et(){return de.state.isPaymentInProgress}function tt(e,t){return de.subscribeKey(e,t)}function nt(e){return()=>{e.forEach((e=>{try{e()}catch{}}))}}const it={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},at={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},st={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},rt={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ot={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ct={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},lt={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ut={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},dt={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},pt={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},mt={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ht={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},gt={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},yt={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}},44641:(e,t,n)=>{var i=n(66386),a=n(43756),s=n(54417),r=(n(83426),n(50745)),o=n(32603);const c=n(10109).iv`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.theme.iconInverse}};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  button[data-type='success'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.core.iconSuccess}};
  }

  button[data-type='error'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.core.iconError}};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundError}};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent020}};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var l=function(e,t,n,i){var a,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};let u=class extends i.oi{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return i.dy`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,s.o)(this.iconSize)}></wui-icon>
    </button>`}};u.styles=[r.ET,r.ZM,c],l([(0,a.Cb)()],u.prototype,"icon",void 0),l([(0,a.Cb)()],u.prototype,"variant",void 0),l([(0,a.Cb)()],u.prototype,"type",void 0),l([(0,a.Cb)()],u.prototype,"size",void 0),l([(0,a.Cb)()],u.prototype,"iconSize",void 0),l([(0,a.Cb)({type:Boolean})],u.prototype,"fullWidth",void 0),l([(0,a.Cb)({type:Boolean})],u.prototype,"disabled",void 0),u=l([(0,o.M)("wui-icon-button")],u)},58507:(e,t,n)=>{n(72738)}}]);
//# sourceMappingURL=5882.chunk.js.map