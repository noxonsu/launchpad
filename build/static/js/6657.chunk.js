"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[6657],{16657:(e,t,i)=>{i.r(t),i.d(t,{AppKitModal:()=>Di,W3mListWallet:()=>qi,W3mModal:()=>Wi,W3mModalBase:()=>Bi,W3mRouterContainer:()=>Hi,W3mUsageExceededView:()=>ji});var o=i(66386),n=i(43756),r=i(54417),a=i(53560),s=i(15337),c=i(64300),l=i(86392),d=i(18395),u=i(90125),p=i(42772),h=i(97675);const m={isUnsupportedChainView:()=>"UnsupportedChain"===u.P.state.view||"SwitchNetwork"===u.P.state.view&&u.P.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void s.I.shake();await h.w.isSIWXCloseDisabled()?s.I.shake():("DataCapture"!==u.P.state.view&&"DataCaptureOtpConfirm"!==u.P.state.view||p.l.disconnect(),s.I.close())}};var w=i(33885),g=i(71895),y=i(24227),v=i(31085),f=i(57921),b=i(95772),k=i(8795),x=i(26322),S=i(73242),C=i(71203),T=i(7711),P=i(16641);const A={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,i){const o=A.getGasPriceInEther(t,i);return f.C.bigNumber(e).times(o).toNumber()},getPriceImpact(e){let{sourceTokenAmount:t,sourceTokenPriceInUSD:i,toTokenPriceInUSD:o,toTokenAmount:n}=e;const r=f.C.bigNumber(t).times(i),a=f.C.bigNumber(n).times(o);return r.minus(a).div(r).times(100).toNumber()},getMaxSlippage(e,t){const i=f.C.bigNumber(e).div(100);return f.C.multiply(t,i).toNumber()},getProviderFee(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.0085;return f.C.bigNumber(e).times(t).toString()},isInsufficientNetworkTokenForGas(e,t){const i=t||"0";return!!f.C.bigNumber(e).eq(0)||f.C.bigNumber(f.C.bigNumber(i)).gt(e)},isInsufficientSourceTokenForSwap(e,t,i){var o,n;const r=null===i||void 0===i||null===(o=i.find((e=>e.address===t)))||void 0===o||null===(n=o.quantity)||void 0===n?void 0:n.numeric;return f.C.bigNumber(r||"0").lt(e)}};var $=i(59609),I=i(92112),E=i(74441),R=i(98541);const N=15e4;class O extends Error{constructor(e,t){super(e),this.name="TransactionError",this.displayMessage=t}}const B={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:C.bq.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},W=(0,y.sj)({...B}),D={state:W,subscribe:e=>(0,y.Ld)(W,(()=>e(W))),subscribeKey:(e,t)=>(0,v.VW)(W,e,t),getParams(){var e,t,i,o,n,r,a,s,d,u;const p=c.R.state.activeChain,h=null!==(e=null===(t=c.R.getAccountData(p))||void 0===t?void 0:t.caipAddress)&&void 0!==e?e:c.R.state.activeCaipAddress,m=T.j.getPlainAddress(h),w=(0,S.EO)(),g=l.A.getConnectorId(c.R.state.activeChain);if(!m)throw new Error("No address found to swap the tokens from.");const y=!(null!==(i=W.toToken)&&void 0!==i&&i.address)||!(null!==(o=W.toToken)&&void 0!==o&&o.decimals),v=!(null!==(n=W.sourceToken)&&void 0!==n&&n.address)||!(null!==(r=W.sourceToken)&&void 0!==r&&r.decimals)||!f.C.bigNumber(W.sourceTokenAmount).gt(0),k=!W.sourceTokenAmount;return{networkAddress:w,fromAddress:m,fromCaipAddress:h,sourceTokenAddress:null===(a=W.sourceToken)||void 0===a?void 0:a.address,toTokenAddress:null===(s=W.toToken)||void 0===s?void 0:s.address,toTokenAmount:W.toTokenAmount,toTokenDecimals:null===(d=W.toToken)||void 0===d?void 0:d.decimals,sourceTokenAmount:W.sourceTokenAmount,sourceTokenDecimals:null===(u=W.sourceToken)||void 0===u?void 0:u.decimals,invalidToToken:y,invalidSourceToken:v,invalidSourceTokenAmount:k,availableToSwap:h&&!y&&!v&&!k,isAuthConnector:g===b.b.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e)return W.sourceToken=e,W.sourceTokenAmount="",void(W.sourceTokenPriceInUSD=0);W.sourceToken=e,await U.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){W.sourceTokenAmount=e},async setToToken(e){if(!e)return W.toToken=e,W.toTokenAmount="",void(W.toTokenPriceInUSD=0);W.toToken=e,await U.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){W.toTokenAmount=e?f.C.toFixed(e,6):""},async setTokenPrice(e,t){let i=W.tokensPriceMap[e]||0;i||(W.loadingPrices=!0,i=await U.getAddressPrice(e)),"sourceToken"===t?W.sourceTokenPriceInUSD=i:"toToken"===t&&(W.toTokenPriceInUSD=i),W.loadingPrices&&(W.loadingPrices=!1),U.getParams().availableToSwap&&!W.switchingTokens&&U.swapTokens()},async switchTokens(){if(!W.initializing&&W.initialized&&!W.switchingTokens){W.switchingTokens=!0;try{const e=W.toToken?{...W.toToken}:void 0,t=W.sourceToken?{...W.sourceToken}:void 0,i=e&&""===W.toTokenAmount?"1":W.toTokenAmount;U.setSourceTokenAmount(i),U.setToTokenAmount(""),await U.setSourceToken(e),await U.setToToken(t),W.switchingTokens=!1,U.swapTokens()}catch(e){throw W.switchingTokens=!1,e}}},resetState(){W.myTokensWithBalance=B.myTokensWithBalance,W.tokensPriceMap=B.tokensPriceMap,W.initialized=B.initialized,W.initializing=B.initializing,W.switchingTokens=B.switchingTokens,W.sourceToken=B.sourceToken,W.sourceTokenAmount=B.sourceTokenAmount,W.sourceTokenPriceInUSD=B.sourceTokenPriceInUSD,W.toToken=B.toToken,W.toTokenAmount=B.toTokenAmount,W.toTokenPriceInUSD=B.toTokenPriceInUSD,W.networkPrice=B.networkPrice,W.networkTokenSymbol=B.networkTokenSymbol,W.networkBalanceInUSD=B.networkBalanceInUSD,W.inputError=B.inputError},resetValues(){var e;const{networkAddress:t}=U.getParams(),i=null===(e=W.tokens)||void 0===e?void 0:e.find((e=>e.address===t));U.setSourceToken(i),U.setToToken(void 0)},getApprovalLoadingState:()=>W.loadingApprovalTransaction,clearError(){W.transactionError=void 0},async initializeState(){if(!W.initializing){if(W.initializing=!0,!W.initialized)try{await U.fetchTokens(),W.initialized=!0}catch(e){W.initialized=!1,g.K.showError("Failed to initialize swap"),u.P.goBack()}W.initializing=!1}},async fetchTokens(){var e;const{networkAddress:t}=U.getParams();await U.getNetworkTokenPrice(),await U.getMyTokensWithBalance();const i=null===(e=W.myTokensWithBalance)||void 0===e?void 0:e.find((e=>e.address===t));i&&(W.networkTokenSymbol=i.symbol,U.setSourceToken(i),U.setSourceTokenAmount("0"))},async getTokenList(){var e;const t=null===(e=c.R.state.activeCaipNetwork)||void 0===e?void 0:e.caipNetworkId;if(W.caipNetworkId!==t||!W.tokens)try{var i;W.tokensLoading=!0;const e=await P.n.getTokenList(t);W.tokens=e,W.caipNetworkId=t,W.popularTokens=e.sort(((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0));const o=(t&&(null===(i=C.bq.SUGGESTED_TOKENS_BY_CHAIN)||void 0===i?void 0:i[t])||[]).map((t=>e.find((e=>e.symbol===t)))).filter((e=>Boolean(e))),n=(C.bq.SWAP_SUGGESTED_TOKENS||[]).map((t=>e.find((e=>e.symbol===t)))).filter((e=>Boolean(e))).filter((e=>!o.some((t=>t.address===e.address))));W.suggestedTokens=[...o,...n]}catch(o){W.tokens=[],W.popularTokens=[],W.suggestedTokens=[]}finally{W.tokensLoading=!1}},async getAddressPrice(e){var t,i;const o=W.tokensPriceMap[e];if(o)return o;const n=await E.L.fetchTokenPrice({addresses:[e]}),r=(null===n||void 0===n?void 0:n.fungibles)||[],a=[...W.tokens||[],...W.myTokensWithBalance||[]],s=null===a||void 0===a||null===(t=a.find((t=>t.address===e)))||void 0===t?void 0:t.symbol,c=(null===(i=r.find((e=>e.symbol.toLowerCase()===(null===s||void 0===s?void 0:s.toLowerCase()))))||void 0===i?void 0:i.price)||0,l=parseFloat(c.toString());return W.tokensPriceMap[e]=l,l},async getNetworkTokenPrice(){var e;const{networkAddress:t}=U.getParams(),i=null===(e=(await E.L.fetchTokenPrice({addresses:[t]}).catch((()=>(g.K.showError("Failed to fetch network token price"),{fungibles:[]})))).fungibles)||void 0===e?void 0:e[0],o=(null===i||void 0===i?void 0:i.price.toString())||"0";W.tokensPriceMap[t]=parseFloat(o),W.networkTokenSymbol=(null===i||void 0===i?void 0:i.symbol)||"",W.networkPrice=o},async getMyTokensWithBalance(e){var t;const i=await x.Q.getMyTokensWithBalance({forceUpdate:e,caipNetwork:c.R.state.activeCaipNetwork,address:null===(t=c.R.getAccountData())||void 0===t?void 0:t.address}),o=P.n.mapBalancesToSwapTokens(i);o&&(await U.getInitialGasPrice(),U.setBalances(o))},setBalances(e){const{networkAddress:t}=U.getParams(),i=c.R.state.activeCaipNetwork;if(!i)return;const o=e.find((e=>e.address===t));e.forEach((e=>{W.tokensPriceMap[e.address]=e.price||0})),W.myTokensWithBalance=e.filter((e=>e.address.startsWith(i.caipNetworkId))),W.networkBalanceInUSD=o?f.C.multiply(o.quantity.numeric,o.price).toString():"0"},async getInitialGasPrice(){var e,t,i,o;const n=await P.n.fetchGasPrice();if(!n)return{gasPrice:null,gasPriceInUSD:null};switch(null===(e=c.R.state)||void 0===e||null===(t=e.activeCaipNetwork)||void 0===t?void 0:t.chainNamespace){case b.b.CHAIN.SOLANA:return W.gasFee=null!==(i=n.standard)&&void 0!==i?i:"0",W.gasPriceInUSD=f.C.multiply(n.standard,W.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(W.gasFee),gasPriceInUSD:Number(W.gasPriceInUSD)};case b.b.CHAIN.EVM:default:const e=null!==(o=n.standard)&&void 0!==o?o:"0",t=BigInt(e),r=BigInt(N),a=A.getGasPriceInUSD(W.networkPrice,r,t);return W.gasFee=e,W.gasPriceInUSD=a,{gasPrice:t,gasPriceInUSD:a}}},async swapTokens(){var e;const t=null===(e=c.R.getAccountData())||void 0===e?void 0:e.address,i=W.sourceToken,o=W.toToken,n=f.C.bigNumber(W.sourceTokenAmount).gt(0);if(n||U.setToTokenAmount(""),!o||!i||W.loadingPrices||!n||!t)return;W.loadingQuote=!0;const r=f.C.bigNumber(W.sourceTokenAmount).times(10**i.decimals).round(0).toFixed(0);try{var a,s;const e=await E.L.fetchSwapQuote({userAddress:t,from:i.address,to:o.address,gasPrice:W.gasFee,amount:r.toString()});W.loadingQuote=!1;const n=null===e||void 0===e||null===(a=e.quotes)||void 0===a||null===(s=a[0])||void 0===s?void 0:s.toAmount;if(!n)return void I.B.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");const c=f.C.bigNumber(n).div(10**o.decimals).toString();U.setToTokenAmount(c);U.hasInsufficientToken(W.sourceTokenAmount,i.address)?W.inputError="Insufficient balance":(W.inputError=void 0,U.setTransactionDetails())}catch(l){const e=await P.n.handleSwapError(l);W.loadingQuote=!1,W.inputError=e||"Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=U.getParams(),i=W.sourceToken,o=W.toToken;if(e&&t&&i&&o&&!W.loadingQuote)try{W.loadingBuildTransaction=!0;let t;return t=await P.n.fetchSwapAllowance({userAddress:e,tokenAddress:i.address,sourceTokenAmount:W.sourceTokenAmount,sourceTokenDecimals:i.decimals})?await U.createSwapTransaction():await U.createAllowanceTransaction(),W.loadingBuildTransaction=!1,W.fetchError=!1,t}catch(n){return u.P.goBack(),g.K.showError("Failed to check allowance"),W.loadingBuildTransaction=!1,W.approvalTransaction=void 0,W.swapTransaction=void 0,void(W.fetchError=!0)}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:i}=U.getParams();if(e&&i){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const o=await E.L.generateApproveCalldata({from:t,to:i,userAddress:e}),n=T.j.getPlainAddress(o.tx.from);if(!n)throw new Error("SwapController:createAllowanceTransaction - address is required");const r={data:o.tx.data,to:n,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:W.toTokenAmount};return W.swapTransaction=void 0,W.approvalTransaction={data:r.data,to:r.to,gasPrice:r.gasPrice,value:r.value,toAmount:r.toAmount},{data:r.data,to:r.to,gasPrice:r.gasPrice,value:r.value,toAmount:r.toAmount}}catch(o){return u.P.goBack(),g.K.showError("Failed to create approval transaction"),W.approvalTransaction=void 0,W.swapTransaction=void 0,void(W.fetchError=!0)}}},async createSwapTransaction(){var e;const{networkAddress:t,fromCaipAddress:i,sourceTokenAmount:o}=U.getParams(),n=W.sourceToken,r=W.toToken;if(!i||!o||!n||!r)return;const a=null===(e=p.l.parseUnits(o,n.decimals))||void 0===e?void 0:e.toString();try{const e=await E.L.generateSwapCalldata({userAddress:i,from:n.address,to:r.address,amount:a,disableEstimate:!0}),o=n.address===t,s=BigInt(e.tx.eip155.gas),c=BigInt(e.tx.eip155.gasPrice),l=T.j.getPlainAddress(e.tx.to);if(!l)throw new Error("SwapController:createSwapTransaction - address is required");const d={data:e.tx.data,to:l,gas:s,gasPrice:c,value:o?BigInt(null!==a&&void 0!==a?a:"0"):BigInt("0"),toAmount:W.toTokenAmount};return W.gasPriceInUSD=A.getGasPriceInUSD(W.networkPrice,s,c),W.approvalTransaction=void 0,W.swapTransaction=d,d}catch(s){return u.P.goBack(),g.K.showError("Failed to create transaction"),W.approvalTransaction=void 0,W.swapTransaction=void 0,void(W.fetchError=!0)}},onEmbeddedWalletApprovalSuccess(){g.K.showLoading("Approve limit increase in your wallet"),u.P.replace("SwapPreview")},async sendTransactionForApproval(e){const{fromAddress:t,isAuthConnector:i}=U.getParams();W.loadingApprovalTransaction=!0;i?u.P.pushTransactionStack({onSuccess:U.onEmbeddedWalletApprovalSuccess}):g.K.showLoading("Approve limit increase in your wallet");try{await p.l.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:b.b.CHAIN.EVM}),await U.swapTokens(),await U.getTransaction(),W.approvalTransaction=void 0,W.loadingApprovalTransaction=!1}catch(a){var o,n,r;const e=a;W.transactionError=null===e||void 0===e?void 0:e.displayMessage,W.loadingApprovalTransaction=!1,g.K.showError((null===e||void 0===e?void 0:e.displayMessage)||"Transaction error"),R.X.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:(null===e||void 0===e?void 0:e.displayMessage)||(null===e||void 0===e?void 0:e.message)||"Unknown",network:(null===(o=c.R.state.activeCaipNetwork)||void 0===o?void 0:o.caipNetworkId)||"",swapFromToken:(null===(n=U.state.sourceToken)||void 0===n?void 0:n.symbol)||"",swapToToken:(null===(r=U.state.toToken)||void 0===r?void 0:r.symbol)||"",swapFromAmount:U.state.sourceTokenAmount||"",swapToAmount:U.state.toTokenAmount||"",isSmartAccount:(0,S.r9)(b.b.CHAIN.EVM)===k.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){var t,i,o,n;if(!e)return;const{fromAddress:r,toTokenAmount:a,isAuthConnector:s}=U.getParams();W.loadingTransaction=!0;const l=`Swapping ${null===(t=W.sourceToken)||void 0===t?void 0:t.symbol} to ${f.C.formatNumberToLocalString(a,3)} ${null===(i=W.toToken)||void 0===i?void 0:i.symbol}`,d=`Swapped ${null===(o=W.sourceToken)||void 0===o?void 0:o.symbol} to ${f.C.formatNumberToLocalString(a,3)} ${null===(n=W.toToken)||void 0===n?void 0:n.symbol}`;s?u.P.pushTransactionStack({onSuccess(){u.P.replace("Account"),g.K.showLoading(l),D.resetState()}}):g.K.showLoading("Confirm transaction in your wallet");try{var h,m,w,y,v;const t=[null===(h=W.sourceToken)||void 0===h?void 0:h.address,null===(m=W.toToken)||void 0===m?void 0:m.address].join(","),i=await p.l.sendTransaction({address:r,to:e.to,data:e.data,value:e.value,chainNamespace:b.b.CHAIN.EVM});return W.loadingTransaction=!1,g.K.showSuccess(d),R.X.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:(null===(w=c.R.state.activeCaipNetwork)||void 0===w?void 0:w.caipNetworkId)||"",swapFromToken:(null===(y=U.state.sourceToken)||void 0===y?void 0:y.symbol)||"",swapToToken:(null===(v=U.state.toToken)||void 0===v?void 0:v.symbol)||"",swapFromAmount:U.state.sourceTokenAmount||"",swapToAmount:U.state.toTokenAmount||"",isSmartAccount:(0,S.r9)(b.b.CHAIN.EVM)===k.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),D.resetState(),s||u.P.replace("Account"),D.getMyTokensWithBalance(t),i}catch(P){var x,C,T;const e=P;return W.transactionError=null===e||void 0===e?void 0:e.displayMessage,W.loadingTransaction=!1,g.K.showError((null===e||void 0===e?void 0:e.displayMessage)||"Transaction error"),void R.X.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:(null===e||void 0===e?void 0:e.displayMessage)||(null===e||void 0===e?void 0:e.message)||"Unknown",network:(null===(x=c.R.state.activeCaipNetwork)||void 0===x?void 0:x.caipNetworkId)||"",swapFromToken:(null===(C=U.state.sourceToken)||void 0===C?void 0:C.symbol)||"",swapToToken:(null===(T=U.state.toToken)||void 0===T?void 0:T.symbol)||"",swapFromAmount:U.state.sourceTokenAmount||"",swapToAmount:U.state.toTokenAmount||"",isSmartAccount:(0,S.r9)(b.b.CHAIN.EVM)===k.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}},hasInsufficientToken:(e,t)=>A.isInsufficientSourceTokenForSwap(e,t,W.myTokensWithBalance),setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=U.getParams();e&&t&&(W.gasPriceInUSD=A.getGasPriceInUSD(W.networkPrice,BigInt(W.gasFee),BigInt(N)),W.priceImpact=A.getPriceImpact({sourceTokenAmount:W.sourceTokenAmount,sourceTokenPriceInUSD:W.sourceTokenPriceInUSD,toTokenPriceInUSD:W.toTokenPriceInUSD,toTokenAmount:W.toTokenAmount}),W.maxSlippage=A.getMaxSlippage(W.slippage,W.toTokenAmount),W.providerFee=A.getProviderFee(W.sourceTokenAmount))}},U=(0,$.P)(D);var z=i(50519),j=i(25923),L=i(10915),F=i(20089);const _=F.iv`
  :host {
    display: block;
    border-radius: clamp(0px, ${e=>{let{borderRadius:t}=e;return t[8]}}, 44px);
    box-shadow: 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    overflow: hidden;
  }
`;var q=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let M=class extends o.oi{render(){return o.dy`<slot></slot>`}};M.styles=[j.ET,_],M=q([(0,L.M)("wui-card")],M);i(71744),i(52823),i(95770),i(32040);const K=F.iv`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${e=>{let{spacing:t}=e;return t[2]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    box-sizing: border-box;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.core.borderSuccess}};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundWarning}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.core.borderWarning}};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundError}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.core.borderError}};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
    background-color: var(--local-icon-bg-value);
  }
`;var H=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const V={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let Q=class extends o.oi{constructor(){super(...arguments),this.message="",this.type="info"}render(){return o.dy`
      <wui-flex
        data-type=${(0,r.o)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${V[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){I.B.close()}};Q.styles=[j.ET,K],H([(0,n.Cb)()],Q.prototype,"message",void 0),H([(0,n.Cb)()],Q.prototype,"type",void 0),Q=H([(0,L.M)("wui-alertbar")],Q);const G=z.iv`
  :host {
    display: block;
    position: absolute;
    top: ${e=>{let{spacing:t}=e;return t[3]}};
    left: ${e=>{let{spacing:t}=e;return t[4]}};
    right: ${e=>{let{spacing:t}=e;return t[4]}};
    opacity: 0;
    pointer-events: none;
  }
`;var Y=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const X={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let Z=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.open=I.B.state.open,this.onOpen(!0),this.unsubscribe.push(I.B.subscribeKey("open",(e=>{this.open=e,this.onOpen(!1)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=I.B.state,i=X[t];return o.dy`
      <wui-alertbar
        message=${e}
        backgroundColor=${null===i||void 0===i?void 0:i.backgroundColor}
        iconColor=${null===i||void 0===i?void 0:i.iconColor}
        icon=${null===i||void 0===i?void 0:i.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};Z.styles=G,Y([(0,n.SB)()],Z.prototype,"open",void 0),Z=Y([(0,z.Mo)("w3m-alertbar")],Z);var J=i(16986),ee=i(2615);const te=F.iv`
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
`;var ie=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let oe=class extends o.oi{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return o.dy`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,r.o)(this.iconSize)}></wui-icon>
    </button>`}};oe.styles=[j.ET,j.ZM,te],ie([(0,n.Cb)()],oe.prototype,"icon",void 0),ie([(0,n.Cb)()],oe.prototype,"variant",void 0),ie([(0,n.Cb)()],oe.prototype,"type",void 0),ie([(0,n.Cb)()],oe.prototype,"size",void 0),ie([(0,n.Cb)()],oe.prototype,"iconSize",void 0),ie([(0,n.Cb)({type:Boolean})],oe.prototype,"fullWidth",void 0),ie([(0,n.Cb)({type:Boolean})],oe.prototype,"disabled",void 0),oe=ie([(0,L.M)("wui-icon-button")],oe);i(16435);const ne=F.iv`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[32]}};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    opacity: 0.5;
  }
`;var re=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const ae={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},se={lg:"lg",md:"md",sm:"sm"};let ce=class extends o.oi{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return o.dy`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const e=ae[this.size];return this.text?o.dy`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return o.dy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const e=se[this.size];return o.dy` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};ce.styles=[j.ET,j.ZM,ne],re([(0,n.Cb)()],ce.prototype,"imageSrc",void 0),re([(0,n.Cb)()],ce.prototype,"text",void 0),re([(0,n.Cb)()],ce.prototype,"size",void 0),re([(0,n.Cb)()],ce.prototype,"type",void 0),re([(0,n.Cb)({type:Boolean})],ce.prototype,"disabled",void 0),ce=re([(0,L.M)("wui-select")],ce);i(66607),i(86138);const le={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:("undefined"!==typeof i(1426)?{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};i(34885),i(91093);const de=F.iv`
  button {
    background-color: transparent;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent020}};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var ue=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let pe=class extends o.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return o.dy`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};pe.styles=[j.ET,j.ZM,de],ue([(0,n.Cb)()],pe.prototype,"size",void 0),ue([(0,n.Cb)({type:Boolean})],pe.prototype,"disabled",void 0),ue([(0,n.Cb)()],pe.prototype,"icon",void 0),ue([(0,n.Cb)()],pe.prototype,"iconColor",void 0),ue([(0,n.Cb)()],pe.prototype,"variant",void 0),pe=ue([(0,L.M)("wui-icon-link")],pe);i(40580),i(18567);const he=o.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var me=i(62384);const we=o.YP`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,ge=F.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: 100%;
    outline: 1px solid ${e=>{let{tokens:t}=e;return t.core.glass010}};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var ye=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ve=class extends o.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:we,md:me.W,lg:he},this.selected=!1,this.round=!1}render(){const e={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--apkt-spacing-10);\n      --local-height: var(--apkt-spacing-10);\n      --local-icon-size: var(--apkt-spacing-4);\n    "):this.style.cssText=`\n\n      --local-path: var(--apkt-path-network-${this.size});\n      --local-width:  var(--apkt-width-network-${this.size});\n      --local-height:  var(--apkt-height-network-${this.size});\n      --local-icon-size:  var(--apkt-spacing-${e[this.size]});\n    `,o.dy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.dy`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};ve.styles=[j.ET,ge],ye([(0,n.Cb)()],ve.prototype,"size",void 0),ye([(0,n.Cb)()],ve.prototype,"name",void 0),ye([(0,n.Cb)({type:Object})],ve.prototype,"networkImagesBySize",void 0),ye([(0,n.Cb)()],ve.prototype,"imageSrc",void 0),ye([(0,n.Cb)({type:Boolean})],ve.prototype,"selected",void 0),ye([(0,n.Cb)({type:Boolean})],ve.prototype,"round",void 0),ve=ye([(0,L.M)("wui-network-image")],ve);const fe=F.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }
`;var be=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ke=class extends o.oi{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,o.dy`${this.template()}`}template(){return this.text?o.dy`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};ke.styles=[j.ET,fe],be([(0,n.Cb)()],ke.prototype,"text",void 0),be([(0,n.Cb)()],ke.prototype,"bgColor",void 0),ke=be([(0,L.M)("wui-separator")],ke);i(14975);var xe=i(84611),Se=i(10817);const Ce="INVALID_PAYMENT_CONFIG",Te="INVALID_RECIPIENT",Pe="INVALID_ASSET",Ae="INVALID_AMOUNT",$e="UNKNOWN_ERROR",Ie="UNABLE_TO_INITIATE_PAYMENT",Ee="INVALID_CHAIN_NAMESPACE",Re="GENERIC_PAYMENT_ERROR",Ne="UNABLE_TO_GET_EXCHANGES",Oe="ASSET_NOT_SUPPORTED",Be="UNABLE_TO_GET_PAY_URL",We="UNABLE_TO_GET_BUY_STATUS",De="UNABLE_TO_GET_QUOTE",Ue="UNABLE_TO_GET_QUOTE_STATUS",ze="INVALID_RECIPIENT_ADDRESS_FOR_ASSET",je={[Ce]:"Invalid payment configuration",[Te]:"Invalid recipient address",[Pe]:"Invalid asset specified",[Ae]:"Invalid payment amount",[ze]:"Invalid recipient address for the asset selected",[$e]:"Unknown payment error occurred",[Ie]:"Unable to initiate payment",[Ee]:"Invalid chain namespace",[Re]:"Unable to process payment",[Ne]:"Unable to get exchanges",[Oe]:"Asset not supported by the selected exchange",[Be]:"Unable to get payment URL",[We]:"Unable to get buy status",["UNABLE_TO_GET_TOKEN_BALANCES"]:"Unable to get token balances",[De]:"Unable to get quote. Please choose a different token",[Ue]:"Unable to get quote status"};class Le extends Error{get message(){return je[this.code]}constructor(e,t){super(je[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,Le)}}var Fe=i(4637);const _e="reown_test";var qe=i(87446),Me=i(44818);function Ke(e){if(!e)return null;const t=e.steps[0];return t&&t.type===at?t:null}function He(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)return[];const i=e.steps.filter((e=>e.type===st)),o=i.filter(((e,i)=>i+1>t));return i.length>0&&i.length<3?o:[]}const Ve=new Fe.V({baseUrl:T.j.getApiUrl(),clientId:null});class Qe extends Error{}function Ge(){const{projectId:e,sdkType:t,sdkVersion:i}=a.h.state;return{projectId:e,st:t||"appkit",sv:i||"html-wagmi-4.2.2"}}async function Ye(e,t){const i=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${a.h.getSnapshot().projectId}`,{sdkType:o,sdkVersion:n,projectId:r}=a.h.getSnapshot(),s={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:o,sv:n,projectId:r}},c=await fetch(i,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}),l=await c.json();if(l.error)throw new Qe(l.error.message);return l}async function Xe(e){return(await Ye("reown_getExchanges",e)).result}async function Ze(e){return(await Ye("reown_getExchangePayUrl",e)).result}async function Je(e){const t=Se.g.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),i=Se.g.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&i?async function(e){var t,i,o;let{sourceToken:n,toToken:r,amount:a,recipient:s}=e;const c=p.l.parseUnits(a,n.metadata.decimals),l=p.l.parseUnits(a,r.metadata.decimals);return Promise.resolve({type:rt,origin:{amount:null!==(t=null===c||void 0===c?void 0:c.toString())&&void 0!==t?t:"0",currency:n},destination:{amount:null!==(i=null===l||void 0===l?void 0:l.toString())&&void 0!==i?i:"0",currency:r},fees:[{id:"service",label:"Service Fee",amount:"0",currency:r}],steps:[{requestId:rt,type:"deposit",deposit:{amount:null!==(o=null===c||void 0===c?void 0:c.toString())&&void 0!==o?o:"0",currency:n.asset,receiver:s}}],timeInSeconds:6})}(e):async function(e){const t=f.C.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:i,chainNamespace:o}=xe.u.parseCaipNetworkId(e.sourceToken.network),{chainId:n,chainNamespace:r}=xe.u.parseCaipNetworkId(e.toToken.network),a="native"===e.sourceToken.asset?(0,S.rG)(o):e.sourceToken.asset,s="native"===e.toToken.asset?(0,S.rG)(r):e.toToken.asset;return await Ve.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:i.toString(),originCurrency:a,destinationChainId:n.toString(),destinationCurrency:s,recipient:e.recipient,amount:t},params:Ge()})}(e)}const et=["eip155","solana"],tt={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function it(e,t){const{chainNamespace:i,chainId:o}=xe.u.parseCaipNetworkId(e),n=tt[i];if(!n)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let r=n.native.assetNamespace,a=n.native.assetReference;"native"!==t&&(r=n.defaultTokenNamespace,a=t);return`${`${i}:${o}`}/${r}:${a}`}function ot(e){const t=f.C.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}const nt="unknown",rt="direct-transfer",at="deposit",st="transaction",ct=(0,y.sj)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[b.b.CHAIN.EVM]:[],[b.b.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),lt={state:ct,subscribe:e=>(0,y.Ld)(ct,(()=>e(ct))),subscribeKey:(e,t)=>(0,v.VW)(ct,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),function(){const{chainNamespace:e}=xe.u.parseCaipNetworkId(lt.state.paymentAsset.network);if(!T.j.isAddress(lt.state.recipient,e))throw new Le(ze,`Provide valid recipient address for namespace "${e}"`)}(),await this.prepareTokenLogo(),ct.isConfigured=!0,R.X.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:ct.exchanges,configuration:{network:ct.paymentAsset.network,asset:ct.paymentAsset.asset,recipient:ct.recipient,amount:ct.amount}}}),await s.I.open({view:"Pay"})},resetState(){ct.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},ct.recipient="0x0",ct.amount=0,ct.isConfigured=!1,ct.error=null,ct.isPaymentInProgress=!1,ct.isLoading=!1,ct.currentPayment=void 0,ct.selectedExchange=void 0,ct.exchangeUrlForQuote=void 0,ct.requestId=void 0},resetQuoteState(){ct.quote=void 0,ct.quoteStatus="waiting",ct.quoteError=null,ct.isFetchingQuote=!1,ct.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new Le(Ce);try{var t,i;ct.choice=null!==(t=e.choice)&&void 0!==t?t:"pay",ct.paymentAsset=e.paymentAsset,ct.recipient=e.recipient,ct.amount=e.amount,ct.openInNewTab=null===(i=e.openInNewTab)||void 0===i||i,ct.redirectUrl=e.redirectUrl,ct.payWithExchange=e.payWithExchange,ct.error=null}catch(o){throw new Le(Ce,o.message)}},setSelectedPaymentAsset(e){ct.selectedPaymentAsset=e},setSelectedExchange(e){ct.selectedExchange=e},setRequestId(e){ct.requestId=e},setPaymentInProgress(e){ct.isPaymentInProgress=e},getPaymentAsset:()=>ct.paymentAsset,getExchanges:()=>ct.exchanges,async fetchExchanges(){try{ct.isLoading=!0;const e=await Xe({page:0});ct.exchanges=e.exchanges.slice(0,2)}catch(e){throw g.K.showError(je.UNABLE_TO_GET_EXCHANGES),new Le(Ne)}finally{ct.isLoading=!1}},async getAvailableExchanges(e){try{var t,i;const o=null!==e&&void 0!==e&&e.asset&&null!==e&&void 0!==e&&e.network?it(e.network,e.asset):void 0;return await Xe({page:null!==(t=null===e||void 0===e?void 0:e.page)&&void 0!==t?t:0,asset:o,amount:null===e||void 0===e||null===(i=e.amount)||void 0===i?void 0:i.toString()})}catch(o){throw new Le(Ne)}},async getPayUrl(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{const o=Number(t.amount),n=await Ze({exchangeId:e,asset:it(t.network,t.asset),amount:o.toString(),recipient:`${t.network}:${t.recipient}`});return R.X.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:o},currentPayment:{type:"exchange",exchangeId:e},headless:i}}),i&&(this.initiatePayment(),R.X.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:ct.paymentId||nt,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:o},currentPayment:{type:"exchange",exchangeId:e}}})),n}catch(o){if(o instanceof Error&&o.message.includes("is not supported"))throw new Le(Oe);throw new Error(o.message)}},async generateExchangeUrlForQuote(e){let{exchangeId:t,paymentAsset:i,amount:o,recipient:n}=e;const r=await Ze({exchangeId:t,asset:it(i.network,i.asset),amount:o.toString(),recipient:n});ct.exchangeSessionId=r.sessionId,ct.exchangeUrlForQuote=r.url},async openPayUrl(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{var o;const n=await this.getPayUrl(e.exchangeId,t,i);if(!n)throw new Le(Be);const r=null===(o=e.openInNewTab)||void 0===o||o?"_blank":"_self";return T.j.openHref(n.url,r),n}catch(n){throw ct.error=n instanceof Le?n.message:je.GENERIC_PAYMENT_ERROR,new Le(Be)}},async onTransfer(e){let{chainNamespace:t,fromAddress:i,toAddress:o,amount:n,paymentAsset:r}=e;if(ct.currentPayment={type:"wallet",status:"IN_PROGRESS"},!ct.isPaymentInProgress)try{this.initiatePayment();const e=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===r.network));if(!e)throw new Error("Target network not found");const a=c.R.state.activeCaipNetwork;switch(Se.g.isLowerCaseMatch(null===a||void 0===a?void 0:a.caipNetworkId,e.caipNetworkId)||await c.R.switchActiveNetwork(e),t){case b.b.CHAIN.EVM:"native"===r.asset&&(ct.currentPayment.result=await async function(e,t,i){var o,n;if(t!==b.b.CHAIN.EVM)throw new Le(Ee);if(!i.fromAddress)throw new Le(Ce,"fromAddress is required for native EVM payments.");const r="string"===typeof i.amount?parseFloat(i.amount):i.amount;if(isNaN(r))throw new Le(Ce);const a=null!==(o=null===(n=e.metadata)||void 0===n?void 0:n.decimals)&&void 0!==o?o:18,s=p.l.parseUnits(r.toString(),a);if("bigint"!==typeof s)throw new Le(Re);const c=await p.l.sendTransaction({chainNamespace:t,to:i.recipient,address:i.fromAddress,value:s,data:"0x"});return null!==c&&void 0!==c?c:void 0}(r,t,{recipient:o,amount:n,fromAddress:i})),r.asset.startsWith("0x")&&(ct.currentPayment.result=await async function(e,t){if(!t.fromAddress)throw new Le(Ce,"fromAddress is required for ERC20 EVM payments.");const i=e.asset,o=t.recipient,n=Number(e.metadata.decimals),r=p.l.parseUnits(t.amount.toString(),n);if(void 0===r)throw new Le(Re);const a=await p.l.writeContract({fromAddress:t.fromAddress,tokenAddress:i,args:[o,r],method:"transfer",abi:qe.g.getERC20Abi(i),chainNamespace:b.b.CHAIN.EVM});return null!==a&&void 0!==a?a:void 0}(r,{recipient:o,amount:n,fromAddress:i})),ct.currentPayment.status="SUCCESS";break;case b.b.CHAIN.SOLANA:ct.currentPayment.result=await async function(e,t){if(e!==b.b.CHAIN.SOLANA)throw new Le(Ee);if(!t.fromAddress)throw new Le(Ce,"fromAddress is required for Solana payments.");const i="string"===typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(i)||i<=0)throw new Le(Ce,"Invalid payment amount.");try{if(!Me.O.getProvider(e))throw new Le(Re,"No Solana provider available.");const o=await p.l.sendTransaction({chainNamespace:b.b.CHAIN.SOLANA,to:t.recipient,value:i,tokenMint:t.tokenMint});if(!o)throw new Le(Re,"Transaction failed.");return o}catch(o){if(o instanceof Le)throw o;throw new Le(Re,`Solana payment failed: ${o}`)}}(t,{recipient:o,amount:n,fromAddress:i,tokenMint:"native"===r.asset?void 0:r.asset}),ct.currentPayment.status="SUCCESS";break;default:throw new Le(Ee)}}catch(a){throw ct.error=a instanceof Le?a.message:je.GENERIC_PAYMENT_ERROR,ct.currentPayment.status="FAILED",g.K.showError(ct.error),a}finally{ct.isPaymentInProgress=!1}},async onSendTransaction(e){try{const{namespace:t,transactionStep:i}=e;lt.initiatePayment();const o=c.R.getAllRequestedCaipNetworks().find((e=>{var t;return e.caipNetworkId===(null===(t=ct.paymentAsset)||void 0===t?void 0:t.network)}));if(!o)throw new Error("Target network not found");const n=c.R.state.activeCaipNetwork;if(Se.g.isLowerCaseMatch(null===n||void 0===n?void 0:n.caipNetworkId,o.caipNetworkId)||await c.R.switchActiveNetwork(o),t===b.b.CHAIN.EVM){const{from:e,to:o,data:n,value:r}=i.transaction;await p.l.sendTransaction({address:e,to:o,data:n,value:BigInt(r),chainNamespace:t})}else if(t===b.b.CHAIN.SOLANA){const{instructions:e}=i.transaction;await p.l.writeSolanaTransaction({instructions:e})}}catch(t){throw ct.error=t instanceof Le?t.message:je.GENERIC_PAYMENT_ERROR,g.K.showError(ct.error),t}finally{ct.isPaymentInProgress=!1}},getExchangeById:e=>ct.exchanges.find((t=>t.id===e)),validatePayConfig(e){const{paymentAsset:t,recipient:i,amount:o}=e;if(!t)throw new Le(Ce);if(!i)throw new Le(Te);if(!t.asset)throw new Le(Pe);if(void 0===o||null===o||o<=0)throw new Le(Ae)},async handlePayWithExchange(e){try{ct.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:i}=ct.paymentAsset,o={network:t,asset:i,amount:ct.amount,recipient:ct.recipient},n=await this.getPayUrl(e,o);if(!n)throw new Le(Ie);return ct.currentPayment.sessionId=n.sessionId,ct.currentPayment.status="IN_PROGRESS",ct.currentPayment.exchangeId=e,this.initiatePayment(),{url:n.url,openInNewTab:ct.openInNewTab}}catch(t){return ct.error=t instanceof Le?t.message:je.GENERIC_PAYMENT_ERROR,ct.isPaymentInProgress=!1,g.K.showError(ct.error),null}},async getBuyStatus(e,t){try{const n=await async function(e){return(await Ye("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});var i,o;if("SUCCESS"===n.status||"FAILED"===n.status)R.X.sendEvent({type:"track",event:"SUCCESS"===n.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===n.status?T.j.parseError(ct.error):void 0,source:"pay",paymentId:ct.paymentId||nt,configuration:{network:ct.paymentAsset.network,asset:ct.paymentAsset.asset,recipient:ct.recipient,amount:ct.amount},currentPayment:{type:"exchange",exchangeId:null===(i=ct.currentPayment)||void 0===i?void 0:i.exchangeId,sessionId:null===(o=ct.currentPayment)||void 0===o?void 0:o.sessionId,result:n.txHash}}});return n}catch(n){throw new Le(We)}},async fetchTokensFromEOA(e){let{caipAddress:t,caipNetwork:i,namespace:o}=e;if(!t)return[];const{address:n}=xe.u.parseCaipAddress(t);let r=i;o===b.b.CHAIN.EVM&&(r=void 0);return await x.Q.getMyTokensWithBalance({address:n,caipNetwork:r})},async fetchTokensFromExchange(){if(!ct.selectedExchange)return[];const e=await async function(e){return await Ve.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:Ge()})}(ct.selectedExchange.id),t=Object.values(e.assets).flat();return await Promise.all(t.map((async e=>{var t;const i={chainId:(o=e).network,address:`${o.network}:${o.asset}`,symbol:o.metadata.symbol,name:o.metadata.name,iconUrl:o.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:o.metadata.decimals.toString()}};var o;const{chainNamespace:n}=xe.u.parseCaipNetworkId(i.chainId);let r=i.address;if(T.j.isCaipAddress(r)){const{address:e}=xe.u.parseCaipAddress(r);r=e}const a=await J.f.getImageByToken(null!==(t=r)&&void 0!==t?t:"",n).catch((()=>{}));return i.iconUrl=null!==a&&void 0!==a?a:"",i})))},async fetchTokens(e){let{caipAddress:t,caipNetwork:i,namespace:o}=e;try{ct.isFetchingTokenBalances=!0;const e=Boolean(ct.selectedExchange)?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:t,caipNetwork:i,namespace:o}),n=await e;ct.tokenBalances={...ct.tokenBalances,[o]:n}}catch(n){const e=n instanceof Error?n.message:"Unable to get token balances";g.K.showError(e)}finally{ct.isFetchingTokenBalances=!1}},async fetchQuote(e){let{amount:t,address:i,sourceToken:o,toToken:n,recipient:r}=e;try{lt.resetQuoteState(),ct.isFetchingQuote=!0;const e=await Je({amount:t,address:ct.selectedExchange?void 0:i,sourceToken:o,toToken:n,recipient:r});if(ct.selectedExchange){const t=Ke(e);if(t){var a;const e=`${o.network}:${t.deposit.receiver}`,i=f.C.formatNumber(t.deposit.amount,{decimals:null!==(a=o.metadata.decimals)&&void 0!==a?a:0,round:8});await lt.generateExchangeUrlForQuote({exchangeId:ct.selectedExchange.id,paymentAsset:o,amount:i.toString(),recipient:e})}}ct.quote=e}catch(s){let e=je.UNABLE_TO_GET_QUOTE;if(s instanceof Error&&s.cause&&s.cause instanceof Response)try{const t=await s.cause.json();t.error&&"string"===typeof t.error&&(e=t.error)}catch{}throw ct.quoteError=e,g.K.showError(e),new Le(De)}finally{ct.isFetchingQuote=!1}},async fetchQuoteStatus(e){let{requestId:t}=e;try{if(t===rt){const e=ct.selectedExchange,t=ct.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case"IN_PROGRESS":case"UNKNOWN":default:ct.quoteStatus="waiting";break;case"SUCCESS":ct.quoteStatus="success",ct.isPaymentInProgress=!1;break;case"FAILED":ct.quoteStatus="failure",ct.isPaymentInProgress=!1}return}return void(ct.quoteStatus="success")}const{status:e}=await async function(e){return await Ve.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...Ge()}})}({requestId:t});ct.quoteStatus=e}catch{throw ct.quoteStatus="failure",new Le(Ue)}},initiatePayment(){ct.isPaymentInProgress=!0,ct.paymentId=crypto.randomUUID()},initializeAnalytics(){ct.analyticsSet||(ct.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",(e=>{var t;if(null!==(t=ct.currentPayment)&&void 0!==t&&t.status&&"UNKNOWN"!==ct.currentPayment.status){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[ct.currentPayment.status];R.X.sendEvent({type:"track",event:e,properties:{message:"FAILED"===ct.currentPayment.status?T.j.parseError(ct.error):void 0,source:"pay",paymentId:ct.paymentId||nt,configuration:{network:ct.paymentAsset.network,asset:ct.paymentAsset.asset,recipient:ct.recipient,amount:ct.amount},currentPayment:{type:ct.currentPayment.type,exchangeId:ct.currentPayment.exchangeId,sessionId:ct.currentPayment.sessionId,result:ct.currentPayment.result}}})}})))},async prepareTokenLogo(){if(!ct.paymentAsset.metadata.logoURI)try{const{chainNamespace:e}=xe.u.parseCaipNetworkId(ct.paymentAsset.network),t=await J.f.getImageByToken(ct.paymentAsset.asset,e);ct.paymentAsset.metadata.logoURI=t}catch{}}},dt=z.iv`
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
`;var ut=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let pt=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.amount=lt.state.amount,this.namespace=void 0,this.paymentAsset=lt.state.paymentAsset,this.activeConnectorIds=l.A.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=lt.state.exchanges,this.isLoading=lt.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(lt.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(l.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(lt.subscribeKey("exchanges",(e=>this.exchanges=e))),this.unsubscribe.push(lt.subscribeKey("isLoading",(e=>this.isLoading=e))),lt.fetchExchanges(),lt.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.dy`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return o.dy`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){var e;const t=c.R.state.activeChain;this.namespace=t,this.caipAddress=null===(e=c.R.getAccountData(t))||void 0===e?void 0:e.caipAddress,this.unsubscribe.push(c.R.subscribeChainProp("accountState",(e=>{this.caipAddress=null===e||void 0===e?void 0:e.caipAddress}),t))}paymentDetailsTemplate(){const e=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return o.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${ot(this.amount||"0")}
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
            src=${(0,r.o)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,r.o)(J.f.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return function(e){const{chainNamespace:t}=xe.u.parseCaipNetworkId(e);return et.includes(t)}(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():o.dy``}connectedWalletTemplate(){const{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return o.dy`
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
          imageSrc=${(0,r.o)(t)}
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
    `}disconnectedWalletTemplate(){return o.dy`<wui-list-item
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
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return o.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const e=this.exchanges.filter((e=>function(e){const t=c.R.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.network));return!!t&&Boolean(t.testnet)}(this.paymentAsset)?e.id===_e:e.id!==_e));return 0===e.length?o.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map((e=>o.dy`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${(0,r.o)(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `))}templateSeparator(){return o.dy`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?u.P.push("PayQuote"):(await l.A.connect(),await s.I.open({view:"PayQuote"}))}onExchangePayment(e){lt.setSelectedExchange(e),u.P.push("PayQuote")}async onDisconnect(){try{await p.l.disconnect(),await s.I.open({view:"Pay"})}catch{console.error("Failed to disconnect"),g.K.showError("Failed to disconnect")}}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const i=this.activeConnectorIds[t];if(!i)return{name:void 0,image:void 0};const o=l.A.getConnector({id:i,namespace:t});if(!o)return{name:void 0,image:void 0};const n=J.f.getConnectorImage(o);return{name:o.name,image:n}}};pt.styles=dt,ut([(0,n.SB)()],pt.prototype,"amount",void 0),ut([(0,n.SB)()],pt.prototype,"namespace",void 0),ut([(0,n.SB)()],pt.prototype,"paymentAsset",void 0),ut([(0,n.SB)()],pt.prototype,"activeConnectorIds",void 0),ut([(0,n.SB)()],pt.prototype,"caipAddress",void 0),ut([(0,n.SB)()],pt.prototype,"exchanges",void 0),ut([(0,n.SB)()],pt.prototype,"isLoading",void 0),pt=ut([(0,z.Mo)("w3m-pay-view")],pt);var ht=i(57346);const mt=F.iv`
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
`;var wt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const gt={"accent-primary":F.gR.tokens.core.backgroundAccentPrimary};let yt=class extends o.oi{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){const e=gt[this.variant];this.style.cssText=`\n      --pulse-size: ${this.size};\n      --pulse-duration: ${this.duration}s;\n      --pulse-color: ${e};\n      --pulse-opacity: ${this.opacity};\n    `;const t=Array.from({length:this.rings},((e,t)=>this.renderRing(t,this.rings)));return o.dy`
      <div class="pulse-container">
        <div class="pulse-rings">${t}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){const i=`animation-delay: ${e/t*this.duration}s;`;return o.dy`<div class="pulse-ring" style=${i}></div>`}};yt.styles=[j.ET,mt],wt([(0,n.Cb)({type:Number})],yt.prototype,"rings",void 0),wt([(0,n.Cb)({type:Number})],yt.prototype,"duration",void 0),wt([(0,n.Cb)({type:Number})],yt.prototype,"opacity",void 0),wt([(0,n.Cb)()],yt.prototype,"size",void 0),wt([(0,n.Cb)()],yt.prototype,"variant",void 0),yt=wt([(0,L.M)("wui-pulse")],yt);const vt=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],ft=["success","submitted","failure","timeout","refund"],bt=z.iv`
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
`;var kt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const xt={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]};let St=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=lt.state.paymentAsset,this.quoteStatus=lt.state.quoteStatus,this.quote=lt.state.quote,this.amount=lt.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=l.A.state.activeConnectorIds,this.selectedExchange=lt.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(lt.subscribeKey("quoteStatus",(e=>this.quoteStatus=e)),lt.subscribeKey("quote",(e=>this.quote=e)),l.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e)),lt.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach((e=>e()))}render(){return o.dy`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){var e;const t=ot(this.amount||"0"),i=null!==(e=this.paymentAsset.metadata.symbol)&&void 0!==e?e:"Unknown",n=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network)),a="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?o.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:a?o.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:o.dy`
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
                src=${(0,r.o)(J.f.getNetworkImage(n))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${t} ${i}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return o.dy`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const e=this.getStepsWithStatus();return o.dy`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map((e=>this.renderStep(e)))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){var e,t;const i="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,n="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(i)return o.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(n)return o.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;const r=null!==(e=null===(t=this.quote)||void 0===t?void 0:t.timeInSeconds)&&void 0!==e?e:0;return o.dy`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${r} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){var e,t,i,n,a;const s=c.R.getAllRequestedCaipNetworks().find((e=>{var t;const i=null===(t=this.quote)||void 0===t?void 0:t.origin.currency.network;if(!i)return!1;const{chainId:o}=xe.u.parseCaipNetworkId(i);return Se.g.isLowerCaseMatch(e.id.toString(),o.toString())})),l=ot(f.C.formatNumber((null===(e=this.quote)||void 0===e?void 0:e.origin.amount)||"0",{decimals:null!==(t=null===(i=this.quote)||void 0===i?void 0:i.origin.currency.metadata.decimals)&&void 0!==t?t:0}).toString()),d=null!==(n=null===(a=this.quote)||void 0===a?void 0:a.origin.currency.metadata.symbol)&&void 0!==n?n:"Unknown";return o.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${l}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${d}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,r.o)(J.f.getNetworkImage(s))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${null===s||void 0===s?void 0:s.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return o.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Wallet</wui-text>

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){var e;const{image:t}=this.getWalletProperties({namespace:this.namespace}),{address:i}=this.caipAddress?xe.u.parseCaipAddress(this.caipAddress):{},n=null===(e=this.selectedExchange)||void 0===e?void 0:e.name;return this.selectedExchange?o.dy`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${n}</wui-text>
          <wui-image src=${(0,r.o)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:o.dy`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${z.Hg.getTruncateString({string:this.profileName||i||n||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,r.o)(t)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?vt.map((e=>({...e,status:"failed"}))):vt.map((e=>{var t;const i=(null!==(t=xt[e.id])&&void 0!==t?t:[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:i}}))}renderStep(e){let{title:t,icon:i,status:n}=e;const r={"step-icon-box":!0,success:"completed"===n};return o.dy`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${i} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,ht.$)(r)}>
            ${this.renderStatusIndicator(n)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${t}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return"completed"===e?o.dy`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===e?o.dy`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===e?o.dy`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval((()=>{this.fetchQuoteStatus()}),3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){const e=lt.state.requestId;if(!e||ft.includes(this.quoteStatus))this.stopPolling();else try{await lt.fetchQuoteStatus({requestId:e}),ft.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){var e,t,i;const o=c.R.state.activeChain;this.namespace=o,this.caipAddress=null===(e=c.R.getAccountData(o))||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===(i=c.R.getAccountData(o))||void 0===i?void 0:i.profileName)&&void 0!==t?t:null,this.unsubscribe.push(c.R.subscribeChainProp("accountState",(e=>{var t;this.caipAddress=null===e||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===e||void 0===e?void 0:e.profileName)&&void 0!==t?t:null}),o))}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const i=this.activeConnectorIds[t];if(!i)return{name:void 0,image:void 0};const o=l.A.getConnector({id:i,namespace:t});if(!o)return{name:void 0,image:void 0};const n=J.f.getConnectorImage(o);return{name:o.name,image:n}}};St.styles=bt,kt([(0,n.SB)()],St.prototype,"paymentAsset",void 0),kt([(0,n.SB)()],St.prototype,"quoteStatus",void 0),kt([(0,n.SB)()],St.prototype,"quote",void 0),kt([(0,n.SB)()],St.prototype,"amount",void 0),kt([(0,n.SB)()],St.prototype,"namespace",void 0),kt([(0,n.SB)()],St.prototype,"caipAddress",void 0),kt([(0,n.SB)()],St.prototype,"profileName",void 0),kt([(0,n.SB)()],St.prototype,"activeConnectorIds",void 0),kt([(0,n.SB)()],St.prototype,"selectedExchange",void 0),St=kt([(0,z.Mo)("w3m-pay-loading-view")],St);var Ct=i(72506);const Tt=F.iv`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${e=>{let{spacing:t}=e;return t[2]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    column-gap: ${e=>{let{spacing:t}=e;return t[1]}};
    background-color: transparent;
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${e=>{let{spacing:t}=e;return t[6]}};
    height: ${e=>{let{spacing:t}=e;return t[6]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${e=>{let{tokens:t}=e;return t.core.textSuccess}};
    box-shadow: 0 0 0 2px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    }
  }
`;var Pt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let At=class extends o.oi{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return o.dy`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?o.dy`<wui-icon
          size=${(0,r.o)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:o.dy`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return o.dy`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${e}
        ${this.enableGreenCircle?o.dy`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return o.dy`
      <wui-text variant="lg-regular" color="primary">
        ${Ct.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return o.dy`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};At.styles=[j.ET,j.ZM,Tt],Pt([(0,n.Cb)()],At.prototype,"address",void 0),Pt([(0,n.Cb)()],At.prototype,"profileName",void 0),Pt([(0,n.Cb)()],At.prototype,"alt",void 0),Pt([(0,n.Cb)()],At.prototype,"imageSrc",void 0),Pt([(0,n.Cb)()],At.prototype,"icon",void 0),Pt([(0,n.Cb)()],At.prototype,"iconSize",void 0),Pt([(0,n.Cb)({type:Boolean})],At.prototype,"enableGreenCircle",void 0),Pt([(0,n.Cb)({type:Boolean})],At.prototype,"loading",void 0),Pt([(0,n.Cb)({type:Number})],At.prototype,"charsStart",void 0),Pt([(0,n.Cb)({type:Number})],At.prototype,"charsEnd",void 0),At=Pt([(0,L.M)("wui-wallet-switch")],At);i(9225);const $t=o.iv`
  :host {
    display: block;
  }
`;var It=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Et=class extends o.oi{render(){return o.dy`
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
    `}};Et.styles=[$t],Et=It([(0,z.Mo)("w3m-pay-fees-skeleton")],Et);const Rt=z.iv`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }
`;var Nt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ot=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.quote=lt.state.quote,this.unsubscribe.push(lt.subscribeKey("quote",(e=>this.quote=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e,t,i,n;const r=f.C.formatNumber((null===(e=this.quote)||void 0===e?void 0:e.origin.amount)||"0",{decimals:null!==(t=null===(i=this.quote)||void 0===i?void 0:i.origin.currency.metadata.decimals)&&void 0!==t?t:0,round:6}).toString();return o.dy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${r} ${(null===(n=this.quote)||void 0===n?void 0:n.origin.currency.metadata.symbol)||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map((e=>this.renderFee(e))):null}
      </wui-flex>
    `}renderFee(e){var t;const i="network"===e.id,n=f.C.formatNumber(e.amount||"0",{decimals:null!==(t=e.currency.metadata.decimals)&&void 0!==t?t:0,round:6}).toString();if(i){const t=c.R.getAllRequestedCaipNetworks().find((t=>Se.g.isLowerCaseMatch(t.caipNetworkId,e.currency.network)));return o.dy`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${n} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,r.o)(J.f.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${(null===t||void 0===t?void 0:t.name)||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return o.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${n} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};Ot.styles=[Rt],Nt([(0,n.SB)()],Ot.prototype,"quote",void 0),Ot=Nt([(0,z.Mo)("w3m-pay-fees")],Ot);const Bt=z.iv`
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
`;var Wt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Dt=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.selectedExchange=lt.state.selectedExchange,this.unsubscribe.push(lt.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=Boolean(this.selectedExchange);return o.dy`
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

        ${e?null:o.dy`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};Dt.styles=[Bt],Wt([(0,n.Cb)({type:Array})],Dt.prototype,"selectedExchange",void 0),Dt=Wt([(0,z.Mo)("w3m-pay-options-empty")],Dt);const Ut=z.iv`
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
`;var zt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let jt=class extends o.oi{render(){return o.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return o.dy`
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
    `}};jt.styles=[Ut],jt=zt([(0,z.Mo)("w3m-pay-options-skeleton")],jt);const Lt=z.iv`
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
`;var Ft=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let _t=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){var e,t;this.unsubscribe.forEach((e=>e())),null===(e=this.resizeObserver)||void 0===e||e.disconnect();const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".pay-options-container");null===i||void 0===i||i.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".pay-options-container");var i;t&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),null===t||void 0===t||t.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleOptionsListScroll()})),null===(i=this.resizeObserver)||void 0===i||i.observe(t),this.handleOptionsListScroll())}render(){return o.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map((e=>this.payOptionTemplate(e)))}
      </wui-flex>
    `}payOptionTemplate(e){var t,i;const{network:n,metadata:a,asset:s,amount:l="0"}=e,d=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===n)),u=`${n}:${s}`===`${null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.network}:${null===(i=this.selectedPaymentAsset)||void 0===i?void 0:i.asset}`,p=f.C.bigNumber(l,{safe:!0}),h=p.gt(0);return o.dy`
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
              src=${(0,r.o)(a.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,r.o)(J.f.getNetworkImage(d))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${a.symbol}</wui-text>
            ${h?o.dy`<wui-text variant="sm-regular" color="secondary">
                  ${p.round(6).toString()} ${a.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${u?o.dy`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".pay-options-container");if(!t)return;t.scrollHeight>300?(t.style.setProperty("--options-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,\n          black 50px,\n          black calc(100% - 50px),\n          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%\n        )"),t.style.setProperty("--options-scroll--top-opacity",z.kj.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--options-scroll--bottom-opacity",z.kj.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--options-mask-image","none"),t.style.setProperty("--options-scroll--top-opacity","0"),t.style.setProperty("--options-scroll--bottom-opacity","0"))}};_t.styles=[Lt],Ft([(0,n.Cb)({type:Array})],_t.prototype,"options",void 0),Ft([(0,n.Cb)()],_t.prototype,"selectedPaymentAsset",void 0),Ft([(0,n.Cb)()],_t.prototype,"onSelect",void 0),_t=Ft([(0,z.Mo)("w3m-pay-options")],_t);const qt=z.iv`
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
`;var Mt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Kt={eip155:{icon:"ethereum",label:"EVM"},solana:{icon:"solana",label:"Solana"},bip122:{icon:"bitcoin",label:"Bitcoin"},ton:{icon:"ton",label:"Ton"}};let Ht=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=lt.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=lt.state.amount,this.recipient=lt.state.recipient,this.activeConnectorIds=l.A.state.activeConnectorIds,this.selectedPaymentAsset=lt.state.selectedPaymentAsset,this.selectedExchange=lt.state.selectedExchange,this.isFetchingQuote=lt.state.isFetchingQuote,this.quoteError=lt.state.quoteError,this.quote=lt.state.quote,this.isFetchingTokenBalances=lt.state.isFetchingTokenBalances,this.tokenBalances=lt.state.tokenBalances,this.isPaymentInProgress=lt.state.isPaymentInProgress,this.exchangeUrlForQuote=lt.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(lt.subscribeKey("paymentAsset",(e=>this.paymentAsset=e))),this.unsubscribe.push(lt.subscribeKey("tokenBalances",(e=>this.onTokenBalancesChanged(e)))),this.unsubscribe.push(lt.subscribeKey("isFetchingTokenBalances",(e=>this.isFetchingTokenBalances=e))),this.unsubscribe.push(l.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(lt.subscribeKey("selectedPaymentAsset",(e=>this.selectedPaymentAsset=e))),this.unsubscribe.push(lt.subscribeKey("isFetchingQuote",(e=>this.isFetchingQuote=e))),this.unsubscribe.push(lt.subscribeKey("quoteError",(e=>this.quoteError=e))),this.unsubscribe.push(lt.subscribeKey("quote",(e=>this.quote=e))),this.unsubscribe.push(lt.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(lt.subscribeKey("recipient",(e=>this.recipient=e))),this.unsubscribe.push(lt.subscribeKey("isPaymentInProgress",(e=>this.isPaymentInProgress=e))),this.unsubscribe.push(lt.subscribeKey("selectedExchange",(e=>this.selectedExchange=e))),this.unsubscribe.push(lt.subscribeKey("exchangeUrlForQuote",(e=>this.exchangeUrlForQuote=e))),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach((e=>e()))}updated(e){super.updated(e);e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return o.dy`
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
    `}profileTemplate(){var e,t;if(this.selectedExchange){var i,n,a;const e=f.C.formatNumber(null===(i=this.quote)||void 0===i?void 0:i.origin.amount,{decimals:null!==(n=null===(a=this.quote)||void 0===a?void 0:a.origin.currency.metadata.decimals)&&void 0!==n?n:0}).toString();return o.dy`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?o.dy`<wui-text variant="lg-regular" color="primary">
                ${f.C.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:o.dy`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const s=null!==(e=T.j.getPlainAddress(this.caipAddress))&&void 0!==e?e:"",{name:c,image:l}=this.getWalletProperties({namespace:this.namespace}),{icon:d,label:u}=null!==(t=Kt[this.namespace])&&void 0!==t?t:{};return o.dy`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,r.o)(this.profileName)}
          address=${(0,r.o)(s)}
          imageSrc=${(0,r.o)(l)}
          alt=${(0,r.o)(c)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,r.o)(u)}
          address=${(0,r.o)(s)}
          icon=${(0,r.o)(d)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,r.o)(u)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){var e,t,i;const o=c.R.state.activeChain;this.namespace=o,this.caipAddress=null===(e=c.R.getAccountData(o))||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===(i=c.R.getAccountData(o))||void 0===i?void 0:i.profileName)&&void 0!==t?t:null,this.unsubscribe.push(c.R.subscribeChainProp("accountState",(e=>this.onAccountStateChanged(e)),o))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){const{chainId:t,chainNamespace:i}=xe.u.parseCaipAddress(this.caipAddress),o=`${i}:${t}`;e=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===o))}await lt.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:e}=this.caipAddress?xe.u.parseCaipAddress(this.caipAddress):{};lt.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const i=this.activeConnectorIds[t];if(!i)return{name:void 0,image:void 0};const o=l.A.getConnector({id:i,namespace:t});if(!o)return{name:void 0,image:void 0};const n=J.f.getConnectorImage(o);return{name:o.name,image:n}}paymentOptionsViewTemplate(){return o.dy`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return o.dy`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===e.length)return o.dy`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;const t={disabled:this.isFetchingQuote};return o.dy`<w3m-pay-options
      class=${(0,ht.$)(t)}
      .options=${e}
      .selectedPaymentAsset=${(0,r.o)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?o.dy`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:o.dy`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){var e,t,i,n,r;const a=this.isFetchingQuote||this.isFetchingTokenBalances,s=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||Boolean(this.quoteError),c=f.C.formatNumber(null!==(e=null===(t=this.quote)||void 0===t?void 0:t.origin.amount)&&void 0!==e?e:0,{decimals:null!==(i=null===(n=this.quote)||void 0===n?void 0:n.origin.currency.metadata.decimals)&&void 0!==i?i:0}).toString();return this.selectedExchange?a||s?o.dy`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:o.dy`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:o.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${a||s?o.dy`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:o.dy`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${ot(c)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${(null===(r=this.quote)||void 0===r?void 0:r.origin.currency.metadata.symbol)||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:a,isDisabled:s})}
      </wui-flex>
    `}actionButtonTemplate(e){const t=He(this.quote),{isLoading:i,isDisabled:n}=e;let r="Pay";return t.length>1&&0===this.completedTransactionsCount&&(r="Approve"),o.dy`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${i||this.isPaymentInProgress}
        ?disabled=${n||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${r}
        ${i?null:o.dy`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){var e;if(!this.namespace)return[];return(null!==(e=this.tokenBalances[this.namespace])&&void 0!==e?e:[]).map((e=>{try{return function(e){const t=c.R.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.chainId));let i=e.address;if(!t)throw new Error(`Target network not found for balance chainId "${e.chainId}"`);if(Se.g.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))i="native";else if(T.j.isCaipAddress(i)){const{address:e}=xe.u.parseCaipAddress(i);i=e}else if(!i)throw new Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:i,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}(e)}catch(t){return null}})).filter((e=>Boolean(e))).filter((e=>{const{chainId:t}=xe.u.parseCaipNetworkId(e.network),{chainId:i}=xe.u.parseCaipNetworkId(this.paymentAsset.network);return!!Se.g.isLowerCaseMatch(e.asset,this.paymentAsset.asset)||(!this.selectedExchange||!Se.g.isLowerCaseMatch(t.toString(),i.toString()))}))}onTokenBalancesChanged(e){this.tokenBalances=e;const[t]=this.getPaymentAssetFromTokenBalances();t&&lt.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await l.A.connect(),await s.I.open({view:"PayQuote"})}onAccountStateChanged(e){var t;const{address:i}=this.caipAddress?xe.u.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=null===e||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===e||void 0===e?void 0:e.profileName)&&void 0!==t?t:null,i){const{address:e}=this.caipAddress?xe.u.parseCaipAddress(this.caipAddress):{};e?Se.g.isLowerCaseMatch(e,i)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):s.I.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||lt.setSelectedPaymentAsset(e)}async onTransfer(){const e=Ke(this.quote);if(e){var t,i,o,n,r;if(!Se.g.isLowerCaseMatch(null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.asset,e.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const a=null!==(i=null===(o=this.selectedPaymentAsset)||void 0===o?void 0:o.amount)&&void 0!==i?i:"0",s=f.C.formatNumber(e.deposit.amount,{decimals:null!==(n=null===(r=this.selectedPaymentAsset)||void 0===r?void 0:r.metadata.decimals)&&void 0!==n?n:0}).toString();if(!f.C.bigNumber(a).gte(s))return void g.K.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:t}=xe.u.parseCaipAddress(this.caipAddress);await lt.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:s,paymentAsset:this.selectedPaymentAsset}),lt.setRequestId(e.requestId),u.P.push("PayLoading")}}}async onSendTransactions(){var e,t,i,o,n,r;const a=null!==(e=null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.amount)&&void 0!==e?e:"0",s=f.C.formatNumber(null!==(i=null===(o=this.quote)||void 0===o?void 0:o.origin.amount)&&void 0!==i?i:0,{decimals:null!==(n=null===(r=this.selectedPaymentAsset)||void 0===r?void 0:r.metadata.decimals)&&void 0!==n?n:0}).toString();if(!f.C.bigNumber(a).gte(s))return void g.K.showError("Insufficient funds");const c=He(this.quote),[l]=He(this.quote,this.completedTransactionsCount);if(l&&this.namespace){await lt.onSendTransaction({namespace:this.namespace,transactionStep:l}),this.completedTransactionsCount+=1;this.completedTransactionsCount===c.length&&(lt.setRequestId(l.requestId),u.P.push("PayLoading"))}}onPayWithExchange(){if(this.exchangeUrlForQuote){const e=T.j.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw new Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;const t=Ke(this.quote);t&&lt.setRequestId(t.requestId),lt.initiatePayment(),u.P.push("PayLoading")}}resetAssetsState(){lt.setSelectedPaymentAsset(null)}resetQuoteState(){lt.resetQuoteState()}};Ht.styles=qt,Mt([(0,n.SB)()],Ht.prototype,"profileName",void 0),Mt([(0,n.SB)()],Ht.prototype,"paymentAsset",void 0),Mt([(0,n.SB)()],Ht.prototype,"namespace",void 0),Mt([(0,n.SB)()],Ht.prototype,"caipAddress",void 0),Mt([(0,n.SB)()],Ht.prototype,"amount",void 0),Mt([(0,n.SB)()],Ht.prototype,"recipient",void 0),Mt([(0,n.SB)()],Ht.prototype,"activeConnectorIds",void 0),Mt([(0,n.SB)()],Ht.prototype,"selectedPaymentAsset",void 0),Mt([(0,n.SB)()],Ht.prototype,"selectedExchange",void 0),Mt([(0,n.SB)()],Ht.prototype,"isFetchingQuote",void 0),Mt([(0,n.SB)()],Ht.prototype,"quoteError",void 0),Mt([(0,n.SB)()],Ht.prototype,"quote",void 0),Mt([(0,n.SB)()],Ht.prototype,"isFetchingTokenBalances",void 0),Mt([(0,n.SB)()],Ht.prototype,"tokenBalances",void 0),Mt([(0,n.SB)()],Ht.prototype,"isPaymentInProgress",void 0),Mt([(0,n.SB)()],Ht.prototype,"exchangeUrlForQuote",void 0),Mt([(0,n.SB)()],Ht.prototype,"completedTransactionsCount",void 0),Ht=Mt([(0,z.Mo)("w3m-pay-quote-view")],Ht);const Vt=z.iv`
  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }

  .transfers-badge {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }
`;var Qt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Gt=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.paymentAsset=lt.state.paymentAsset,this.amount=lt.state.amount,this.unsubscribe.push(lt.subscribeKey("paymentAsset",(e=>{this.paymentAsset=e})),lt.subscribeKey("amount",(e=>{this.amount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return o.dy`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,r.o)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${null!==(e=null===t||void 0===t?void 0:t.name)&&void 0!==e?e:"Unknown"}
      </wui-text>
    </wui-flex>`}};Gt.styles=[Vt],Qt([(0,n.Cb)()],Gt.prototype,"paymentAsset",void 0),Qt([(0,n.Cb)()],Gt.prototype,"amount",void 0),Gt=Qt([(0,z.Mo)("w3m-pay-header")],Gt);const Yt=z.iv`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      slide-down-in 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      slide-up-in 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var Xt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Zt=["SmartSessionList"],Jt={PayWithExchange:z.gR.tokens.theme.foregroundPrimary};function ei(){var e,t,i,o,n,r,a,s;const d=null===(e=u.P.state.data)||void 0===e||null===(t=e.connector)||void 0===t?void 0:t.name,p=null===(i=u.P.state.data)||void 0===i||null===(o=i.wallet)||void 0===o?void 0:o.name,h=null===(n=u.P.state.data)||void 0===n||null===(r=n.network)||void 0===r?void 0:r.name,m=null!==p&&void 0!==p?p:d,w=l.A.getConnectors(),g=1===w.length&&"w3m-email"===(null===(a=w[0])||void 0===a?void 0:a.id),y=null===(s=c.R.getAccountData())||void 0===s?void 0:s.socialProvider;return{Connect:`Connect ${g?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:null!==m&&void 0!==m?m:"Connect Wallet",ConnectingWalletConnect:null!==m&&void 0!==m?m:"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:m?`Get ${m}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:null!==h&&void 0!==h?h:"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:y?y.charAt(0).toUpperCase()+y.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let ti=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.heading=ei()[u.P.state.view],this.network=c.R.state.activeCaipNetwork,this.networkImage=J.f.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.P.state.view,this.viewDirection="",this.unsubscribe.push(ee.W.subscribeNetworkImages((()=>{this.networkImage=J.f.getNetworkImage(this.network)})),u.P.subscribeKey("view",(e=>{setTimeout((()=>{this.view=e,this.heading=ei()[e]}),le.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()})),c.R.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=J.f.getNetworkImage(this.network)})))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=null!==(e=Jt[u.P.state.view])&&void 0!==e?e:z.gR.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",t),o.dy`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){R.X.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),u.P.push("WhatIsAWallet")}async onClose(){await m.safeClose()}rightHeaderTemplate(){var e,t;const i=null===a.h||void 0===a.h||null===(e=a.h.state)||void 0===e||null===(t=e.features)||void 0===t?void 0:t.smartSessions;return"Account"===u.P.state.view&&i?o.dy`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>u.P.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return o.dy`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return o.dy`<w3m-pay-header></w3m-pay-header>`;const e=Zt.includes(this.view);return o.dy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${e?o.dy`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=u.P.state,t="Connect"===e,i=a.h.state.enableEmbedded,n="ApproveTransaction"===e,s="ConnectingSiwe"===e,c="Account"===e,l=a.h.state.enableNetworkSwitch,d=n||s||t&&i;var p;return c&&l?o.dy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,r.o)(null===(p=this.network)||void 0===p?void 0:p.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,r.o)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?o.dy`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:o.dy`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(R.X.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.P.push("Networks"))}isAllowedNetworkSwitch(){const e=c.R.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=null===e||void 0===e?void 0:e.find((e=>{var t;let{id:i}=e;return i===(null===(t=this.network)||void 0===t?void 0:t.id)}));return t||!i}onViewChange(){const{history:e}=u.P.state;let t=le.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=le.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var e;const{history:t}=u.P.state,i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#dynamic");t.length>1&&!this.showBack&&i?(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){u.P.goBack()}};ti.styles=Yt,Xt([(0,n.SB)()],ti.prototype,"heading",void 0),Xt([(0,n.SB)()],ti.prototype,"network",void 0),Xt([(0,n.SB)()],ti.prototype,"networkImage",void 0),Xt([(0,n.SB)()],ti.prototype,"showBack",void 0),Xt([(0,n.SB)()],ti.prototype,"prevHistoryLength",void 0),Xt([(0,n.SB)()],ti.prototype,"view",void 0),Xt([(0,n.SB)()],ti.prototype,"viewDirection",void 0),ti=Xt([(0,z.Mo)("w3m-header")],ti);i(10349),i(27580);const ii=F.iv`
  :host {
    display: flex;
    align-items: center;
    gap: ${e=>{let{spacing:t}=e;return t[1]}};
    padding: ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[3]}}
      ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[2]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[20]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
    background-color: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}} !important;
  }
`;var oi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ni=class extends o.oi{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return o.dy`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?o.dy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:o.dy`<wui-icon-box
      size="md"
      color=${{success:"success",error:"error",warning:"warning",info:"default"}[this.variant]}
      icon=${{success:"checkmark",error:"warning",warning:"warningCircle",info:"info"}[this.variant]}
    ></wui-icon-box>`}};ni.styles=[j.ET,ii],oi([(0,n.Cb)()],ni.prototype,"message",void 0),oi([(0,n.Cb)()],ni.prototype,"variant",void 0),ni=oi([(0,L.M)("wui-snackbar")],ni);const ri=o.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ai=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let si=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=g.K.state.open,this.unsubscribe.push(g.K.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=g.K.state;return o.dy` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),g.K.state.autoClose&&(this.timeout=setTimeout((()=>g.K.hide()),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};si.styles=ri,ai([(0,n.SB)()],si.prototype,"open",void 0),si=ai([(0,z.Mo)("w3m-snackbar")],si);const ci=(0,y.sj)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),li={state:ci,subscribe:e=>(0,y.Ld)(ci,(()=>e(ci))),subscribeKey:(e,t)=>(0,v.VW)(ci,e,t),showTooltip(e){let{message:t,triggerRect:i,variant:o}=e;ci.open=!0,ci.message=t,ci.triggerRect=i,ci.variant=o},hide(){ci.open=!1,ci.message="",ci.triggerRect={width:0,height:0,top:0,left:0}}},di=(0,$.P)(li),ui=o.iv`
  :host {
    width: 100%;
    display: block;
  }
`;var pi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let hi=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.text="",this.open=di.state.open,this.unsubscribe.push(u.P.subscribeKey("view",(()=>{di.hide()})),s.I.subscribeKey("open",(e=>{e||di.hide()})),di.subscribeKey("open",(e=>{this.open=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),di.hide()}render(){return o.dy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return o.dy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),i={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const o=t.getBoundingClientRect();i.left=e.left-(window.innerWidth-o.width)/2,i.top=e.top-(window.innerHeight-o.height)/2}di.showTooltip({message:this.text,triggerRect:i,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||di.hide()}};hi.styles=[ui],pi([(0,n.Cb)()],hi.prototype,"text",void 0),pi([(0,n.SB)()],hi.prototype,"open",void 0),hi=pi([(0,z.Mo)("w3m-tooltip-trigger")],hi);const mi=z.iv`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${e=>{let{spacing:t}=e;return t[3]}} 10px ${e=>{let{spacing:t}=e;return t[3]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[3]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${e=>{let{spacing:t}=e;return t[5]}});
    transition: opacity ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${e=>{let{durations:t}=e;return t.xl}};
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var wi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let gi=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.open=di.state.open,this.message=di.state.message,this.triggerRect=di.state.triggerRect,this.variant=di.state.variant,this.unsubscribe.push(di.subscribe((e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,o.dy`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};gi.styles=[mi],wi([(0,n.SB)()],gi.prototype,"open",void 0),wi([(0,n.SB)()],gi.prototype,"message",void 0),wi([(0,n.SB)()],gi.prototype,"triggerRect",void 0),wi([(0,n.SB)()],gi.prototype,"variant",void 0),gi=wi([(0,z.Mo)("w3m-tooltip")],gi);const yi={getTabsByNamespace(e){var t;return Boolean(e)&&e===b.b.CHAIN.EVM?!1===(null===(t=a.h.state.remoteFeatures)||void 0===t?void 0:t.activity)?le.ACCOUNT_TABS.filter((e=>"Activity"!==e.label)):le.ACCOUNT_TABS:[]},isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){const e=u.P.state.view;if(le.VIEWS_WITH_LEGAL_FOOTER.includes(e)){var t;const{termsConditionsUrl:e,privacyPolicyUrl:i}=a.h.state,o=null===(t=a.h.state.features)||void 0===t?void 0:t.legalCheckbox;return!(!e&&!i||o)}return le.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}};i(27735);const vi=z.iv`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${e=>{let{spacing:t}=e;return t[3]}};
  }

  a {
    text-decoration: none;
    color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
    font-weight: 500;
  }
`;var fi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let bi=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=a.h.state.remoteFeatures,this.unsubscribe.push(a.h.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:i}=a.h.state,n=null===(e=a.h.state.features)||void 0===e?void 0:e.legalCheckbox;return!t&&!i||n?o.dy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:o.dy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.h.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=a.h.state;return e?o.dy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=a.h.state;return e?o.dy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(){var e;let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return null!==(e=this.remoteFeatures)&&void 0!==e&&e.reownBranding?t?o.dy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:o.dy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};bi.styles=[vi],fi([(0,n.SB)()],bi.prototype,"remoteFeatures",void 0),bi=fi([(0,z.Mo)("w3m-legal-footer")],bi);i(75572);const ki=o.iv``;var xi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Si=class extends o.oi{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.h.state;return e||t?o.dy`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return o.dy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){R.X.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,S.r9)(c.R.state.activeChain)===k.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),u.P.push("WhatIsABuy")}};Si.styles=[ki],Si=xi([(0,z.Mo)("w3m-onramp-providers-footer")],Si);const Ci=z.iv`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var Ti=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Pi=class extends o.oi{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=u.P.state.view}firstUpdated(){this.status=yi.hasFooter()?"show":"hide",this.unsubscribe.push(u.P.subscribeKey("view",(e=>{if(this.view=e,this.status=yi.hasFooter()?"show":"hide","hide"===this.status){document.documentElement.style.setProperty("--apkt-footer-height","0px")}}))),this.resizeObserver=new ResizeObserver((e=>{for(const t of e)if(t.target===this.getWrapper()){const e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}})),this.resizeObserver.observe(this.getWrapper())}render(){return o.dy`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return yi.hasFooter()?o.dy` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return o.dy`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return o.dy`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return o.dy` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){R.X.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),u.P.push("WhatIsANetwork")}getWrapper(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("div.container")}};Pi.styles=[Ci],Ti([(0,n.SB)()],Pi.prototype,"status",void 0),Ti([(0,n.SB)()],Pi.prototype,"view",void 0),Pi=Ti([(0,z.Mo)("w3m-footer")],Pi);const Ai=z.iv`
  :host {
    display: block;
    width: inherit;
  }
`;var $i=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ii=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.viewState=u.P.state.view,this.history=u.P.state.history.join(","),this.unsubscribe.push(u.P.subscribeKey("view",(()=>{this.history=u.P.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return o.dy`${this.templatePageContainer()}`}templatePageContainer(){return o.dy`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=u.P.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return o.dy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o.dy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o.dy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o.dy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return o.dy`<w3m-connect-view></w3m-connect-view>`;case"Create":return o.dy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return o.dy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return o.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o.dy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o.dy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o.dy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return o.dy`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return o.dy`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return o.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return o.dy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return o.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return o.dy`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return o.dy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o.dy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return o.dy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o.dy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return o.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o.dy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o.dy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o.dy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o.dy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o.dy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o.dy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return o.dy`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return o.dy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o.dy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o.dy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o.dy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o.dy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o.dy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o.dy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o.dy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o.dy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o.dy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o.dy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return o.dy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return o.dy`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return o.dy`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return o.dy`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return o.dy`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return o.dy`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return o.dy`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return o.dy`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`}}};Ii.styles=[Ai],$i([(0,n.SB)()],Ii.prototype,"viewState",void 0),$i([(0,n.SB)()],Ii.prototype,"history",void 0),Ii=$i([(0,z.Mo)("w3m-router")],Ii);const Ei=z.iv`
  :host {
    z-index: ${e=>{let{tokens:t}=e;return t.core.zIndex}};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.overlay}};
    backdrop-filter: blur(0px);
    transition:
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      backdrop-filter ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border-radius ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    transition-delay: ${e=>{let{durations:t}=e;return t.md}};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${e=>{let{tokens:t}=e;return t.theme.borderPrimaryDark}};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      card-background-border var(--apkt-duration-dynamic)
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      card-background-default var(--apkt-duration-dynamic)
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      w3m-shake ${e=>{let{durations:t}=e;return t.xl}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    }
    to {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
    to {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    }
  }
`;var Ri=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Ni="scroll-lock",Oi={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class Bi extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=a.h.state.enableEmbedded,this.open=s.I.state.open,this.caipAddress=c.R.state.activeCaipAddress,this.caipNetwork=c.R.state.activeCaipNetwork,this.shake=s.I.state.shake,this.filterByNamespace=l.A.state.filterByNamespace,this.padding=z.gR.spacing[1],this.mobileFullScreen=a.h.state.enableMobileFullScreen,this.initializeTheming(),d.Q.prefetchAnalyticsConfig(),this.unsubscribe.push(s.I.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),s.I.subscribeKey("shake",(e=>this.shake=e)),c.R.subscribeKey("activeCaipNetwork",(e=>this.onNewNetwork(e))),c.R.subscribeKey("activeCaipAddress",(e=>this.onNewAddress(e))),a.h.subscribeKey("enableEmbedded",(e=>this.enableEmbedded=e)),l.A.subscribeKey("filterByNamespace",(e=>{var t;this.filterByNamespace===e||null!==(t=c.R.getAccountData(e))&&void 0!==t&&t.caipAddress||(d.Q.fetchRecommendedWallets(),this.filterByNamespace=e)})),u.P.subscribeKey("view",(()=>{var e;this.dataset.border=yi.hasFooter()?"true":"false",this.padding=null!==(e=Oi[u.P.state.view])&&void 0!==e?e:z.gR.spacing[1]})))}firstUpdated(){if(this.dataset.border=yi.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded)return s.I.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?o.dy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return o.dy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,r.o)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){if(e.target===e.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await m.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=w.u.state,i=z.Hg.getColorTheme(t);(0,z.n)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),g.K.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Ni,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Ni}"]`);e&&e.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-card");null===t||void 0===t||t.focus(),window.addEventListener("keydown",(e=>{if("Escape"===e.key)this.handleClose();else if("Tab"===e.key){const{tagName:i}=e.target;!i||i.includes("W3M-")||i.includes("WUI-")||null===t||void 0===t||t.focus()}}),this.abortController)}onRemoveKeyboardListener(){var e;null===(e=this.abortController)||void 0===e||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=c.R.state.isSwitchingNamespace,i="ProfileWallets"===u.P.state.view;!e&&!t&&!i&&s.I.close(),await h.w.initializeIfEnabled(e),this.caipAddress=e,c.R.setIsSwitchingNamespace(!1)}onNewNetwork(e){var t,i;const o=this.caipNetwork,n=(null===o||void 0===o||null===(t=o.caipNetworkId)||void 0===t?void 0:t.toString())!==(null===e||void 0===e||null===(i=e.caipNetworkId)||void 0===i?void 0:i.toString()),r="UnsupportedChain"===u.P.state.view,a=s.I.state.open;let c=!1;this.enableEmbedded&&"SwitchNetwork"===u.P.state.view&&(c=!0),n&&U.resetState(),a&&r&&(c=!0),c&&"SIWXSignMessage"!==u.P.state.view&&u.P.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(d.Q.prefetch(),d.Q.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}Bi.styles=Ei,Ri([(0,n.Cb)({type:Boolean})],Bi.prototype,"enableEmbedded",void 0),Ri([(0,n.SB)()],Bi.prototype,"open",void 0),Ri([(0,n.SB)()],Bi.prototype,"caipAddress",void 0),Ri([(0,n.SB)()],Bi.prototype,"caipNetwork",void 0),Ri([(0,n.SB)()],Bi.prototype,"shake",void 0),Ri([(0,n.SB)()],Bi.prototype,"filterByNamespace",void 0),Ri([(0,n.SB)()],Bi.prototype,"padding",void 0),Ri([(0,n.SB)()],Bi.prototype,"mobileFullScreen",void 0);let Wi=class extends Bi{};Wi=Ri([(0,z.Mo)("w3m-modal")],Wi);let Di=class extends Bi{};Di=Ri([(0,z.Mo)("appkit-modal")],Di);const Ui=z.iv`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    background-color: ${e=>{let{colors:t}=e;return t.semanticError010}};
  }
`;var zi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ji=class extends o.oi{constructor(){super()}render(){return o.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){u.P.goBack()}};ji.styles=Ui,ji=zi([(0,z.Mo)("w3m-usage-exceeded-view")],ji);var Li=i(35894);i(95512);const Fi=z.iv`
  :host {
    width: 100%;
  }
`;var _i=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let qi=class extends o.oi{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1);e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver((e=>{e.forEach((e=>{!e.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()}))}),{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&R.X.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:u.P.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(Li.j.state.adapters).length>1?this.namespaces:[]}render(){return o.dy`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,r.o)(this.imageSrc)}
        name=${this.name}
        size=${(0,r.o)(this.size)}
        tagLabel=${(0,r.o)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};qi.styles=Fi,_i([(0,n.Cb)({type:Array})],qi.prototype,"walletImages",void 0),_i([(0,n.Cb)()],qi.prototype,"imageSrc",void 0),_i([(0,n.Cb)()],qi.prototype,"name",void 0),_i([(0,n.Cb)()],qi.prototype,"size",void 0),_i([(0,n.Cb)()],qi.prototype,"tagLabel",void 0),_i([(0,n.Cb)()],qi.prototype,"tagVariant",void 0),_i([(0,n.Cb)()],qi.prototype,"walletIcon",void 0),_i([(0,n.Cb)()],qi.prototype,"tabIdx",void 0),_i([(0,n.Cb)({type:Boolean})],qi.prototype,"disabled",void 0),_i([(0,n.Cb)({type:Boolean})],qi.prototype,"showAllWallets",void 0),_i([(0,n.Cb)({type:Boolean})],qi.prototype,"loading",void 0),_i([(0,n.Cb)({type:String})],qi.prototype,"loadingSpinnerColor",void 0),_i([(0,n.Cb)()],qi.prototype,"rdnsId",void 0),_i([(0,n.Cb)()],qi.prototype,"displayIndex",void 0),_i([(0,n.Cb)()],qi.prototype,"walletRank",void 0),_i([(0,n.Cb)({type:Array})],qi.prototype,"namespaces",void 0),qi=_i([(0,z.Mo)("w3m-list-wallet")],qi);const Mi=z.iv`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${e=>{let{durations:t}=e;return t.lg}};
    --local-transition: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${e=>{let{durations:t}=e;return t.lg}});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${e=>{let{durations:t}=e;return t.lg}});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var Ki=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Hi=class extends o.oi{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=a.h.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){const e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){var e;this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver((e=>{for(const i of e)if(i.target===this.getWrapper()){let e=i.contentRect.height;const o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){var t;e=((null===(t=window.visualViewport)||void 0===t?void 0:t.height)||window.innerHeight)-this.getHeaderHeight()-o,this.style.setProperty("--local-border-bottom-radius","0px")}else{e=e+o,this.style.setProperty("--local-border-bottom-radius",o?"var(--apkt-borderRadius-5)":"0px")}this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}})),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),null===(e=window.visualViewport)||void 0===e||e.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var e;const t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener("resize",this.onViewportResize),null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",this.onViewportResize)}render(){return o.dy`
      <div class="container" data-mobile-fullscreen="${(0,r.o)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,r.o)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){const t=e.split(",").filter(Boolean),i=this.historyState.split(",").filter(Boolean),o=i.length,n=t.length,r=t[t.length-1]||"",a=z.Hg.cssDurationToNumber(this.transitionDuration);let s="";n>o?s="next":n<o?s="prev":n===o&&t[n-1]!==i[o-1]&&(s="next"),this.viewDirection=`${s}-${r}`,setTimeout((()=>{var t;this.historyState=e,null===(t=this.setView)||void 0===t||t.call(this,r)}),a),setTimeout((()=>{this.viewDirection=""}),2*a)}getWrapper(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("div.page")}updateContainerHeight(){const e=this.getWrapper();if(!e)return;const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let i=0;if(this.mobileFullScreen){var o;i=((null===(o=window.visualViewport)||void 0===o?void 0:o.height)||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")}else i=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${i}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${i}px`}getHeaderHeight(){return 60}};Hi.styles=[Mi],Ki([(0,n.Cb)({type:String})],Hi.prototype,"transitionDuration",void 0),Ki([(0,n.Cb)({type:String})],Hi.prototype,"transitionFunction",void 0),Ki([(0,n.Cb)({type:String})],Hi.prototype,"history",void 0),Ki([(0,n.Cb)({type:String})],Hi.prototype,"view",void 0),Ki([(0,n.Cb)({attribute:!1})],Hi.prototype,"setView",void 0),Ki([(0,n.SB)()],Hi.prototype,"viewDirection",void 0),Ki([(0,n.SB)()],Hi.prototype,"historyState",void 0),Ki([(0,n.SB)()],Hi.prototype,"previousHeight",void 0),Ki([(0,n.SB)()],Hi.prototype,"mobileFullScreen",void 0),Hi=Ki([(0,z.Mo)("w3m-router-container")],Hi)}}]);
//# sourceMappingURL=6657.chunk.js.map