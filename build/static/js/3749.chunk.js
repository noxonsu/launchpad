"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[3749],{53749:(e,t,o)=>{o.r(t),o.d(t,{AppKitModal:()=>he,W3mListWallet:()=>fe,W3mModal:()=>ue,W3mModalBase:()=>de,W3mRouterContainer:()=>xe,W3mUsageExceededView:()=>ge});var r=o(66386),i=o(43756),a=o(54417),n=o(93060),s=o(47443),l=o(83520),c=o(53993),d=o(421),u=o(8632),h=o(82994),p=o(40196);const m={isUnsupportedChainView:()=>"UnsupportedChain"===u.P.state.view||"SwitchNetwork"===u.P.state.view&&u.P.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void s.I.shake();await p.w.isSIWXCloseDisabled()?s.I.shake():("DataCapture"!==u.P.state.view&&"DataCaptureOtpConfirm"!==u.P.state.view||h.l.disconnect(),s.I.close())}};var g=o(86533),w=o(90891),b=o(25984),y=o(52105),f=o(50745),v=o(32603),k=o(10109);const x=k.iv`
  :host {
    display: block;
    border-radius: clamp(0px, ${e=>{let{borderRadius:t}=e;return t[8]}}, 44px);
    box-shadow: 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    overflow: hidden;
  }
`;var C=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let $=class extends r.oi{render(){return r.dy`<slot></slot>`}};$.styles=[f.ET,x],$=C([(0,v.M)("wui-card")],$);o(78330);var S=o(60825);o(83426),o(26576),o(19658);const P=k.iv`
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
`;var R=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const I={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let O=class extends r.oi{constructor(){super(...arguments),this.message="",this.type="info"}render(){return r.dy`
      <wui-flex
        data-type=${(0,a.o)(this.type)}
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
            <wui-icon color="inherit" size="md" name=${I[this.type]}></wui-icon>
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
    `}onClose(){S.B.close()}};O.styles=[f.ET,P],R([(0,i.Cb)()],O.prototype,"message",void 0),R([(0,i.Cb)()],O.prototype,"type",void 0),O=R([(0,v.M)("wui-alertbar")],O);const A=y.iv`
  :host {
    display: block;
    position: absolute;
    top: ${e=>{let{spacing:t}=e;return t[3]}};
    left: ${e=>{let{spacing:t}=e;return t[4]}};
    right: ${e=>{let{spacing:t}=e;return t[4]}};
    opacity: 0;
    pointer-events: none;
  }
`;var W=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const E={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let N=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.open=S.B.state.open,this.onOpen(!0),this.unsubscribe.push(S.B.subscribeKey("open",(e=>{this.open=e,this.onOpen(!1)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=S.B.state,o=E[t];return r.dy`
      <wui-alertbar
        message=${e}
        backgroundColor=${null===o||void 0===o?void 0:o.backgroundColor}
        iconColor=${null===o||void 0===o?void 0:o.iconColor}
        icon=${null===o||void 0===o?void 0:o.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};N.styles=A,W([(0,i.SB)()],N.prototype,"open",void 0),N=W([(0,y.Mo)("w3m-alertbar")],N);var z=o(66107),B=o(32751),T=o(26367);o(44641),o(72738);const D=k.iv`
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
`;var j=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const L={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},H={lg:"lg",md:"md",sm:"sm"};let V=class extends r.oi{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return r.dy`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const e=L[this.size];return this.text?r.dy`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return r.dy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const e=H[this.size];return r.dy` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};V.styles=[f.ET,f.ZM,D],j([(0,i.Cb)()],V.prototype,"imageSrc",void 0),j([(0,i.Cb)()],V.prototype,"text",void 0),j([(0,i.Cb)()],V.prototype,"size",void 0),j([(0,i.Cb)()],V.prototype,"type",void 0),j([(0,i.Cb)({type:Boolean})],V.prototype,"disabled",void 0),V=j([(0,v.M)("wui-select")],V);o(70320),o(43549);var F=o(74273),K=o(55882);const M=y.iv`
  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }

  .transfers-badge {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }
`;var U=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let X=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.paymentAsset=K.PayController.state.paymentAsset,this.amount=K.PayController.state.amount,this.unsubscribe.push(K.PayController.subscribeKey("paymentAsset",(e=>{this.paymentAsset=e})),K.PayController.subscribeKey("amount",(e=>{this.amount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=l.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return r.dy`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,a.o)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${null!==(e=null===t||void 0===t?void 0:t.name)&&void 0!==e?e:"Unknown"}
      </wui-text>
    </wui-flex>`}};X.styles=[M],U([(0,i.Cb)()],X.prototype,"paymentAsset",void 0),U([(0,i.Cb)()],X.prototype,"amount",void 0),X=U([(0,y.Mo)("w3m-pay-header")],X);const Y=y.iv`
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
`;var G=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const Q=["SmartSessionList"],q={PayWithExchange:y.gR.tokens.theme.foregroundPrimary};function _(){var e,t,o,r,i,a,n,s;const d=null===(e=u.P.state.data)||void 0===e||null===(t=e.connector)||void 0===t?void 0:t.name,h=null===(o=u.P.state.data)||void 0===o||null===(r=o.wallet)||void 0===r?void 0:r.name,p=null===(i=u.P.state.data)||void 0===i||null===(a=i.network)||void 0===a?void 0:a.name,m=null!==h&&void 0!==h?h:d,g=c.A.getConnectors(),w=1===g.length&&"w3m-email"===(null===(n=g[0])||void 0===n?void 0:n.id),b=null===(s=l.R.getAccountData())||void 0===s?void 0:s.socialProvider;return{Connect:`Connect ${w?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:null!==m&&void 0!==m?m:"Connect Wallet",ConnectingWalletConnect:null!==m&&void 0!==m?m:"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:m?`Get ${m}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:null!==p&&void 0!==p?p:"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:b?b.charAt(0).toUpperCase()+b.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let Z=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.heading=_()[u.P.state.view],this.network=l.R.state.activeCaipNetwork,this.networkImage=z.f.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.P.state.view,this.viewDirection="",this.unsubscribe.push(B.W.subscribeNetworkImages((()=>{this.networkImage=z.f.getNetworkImage(this.network)})),u.P.subscribeKey("view",(e=>{setTimeout((()=>{this.view=e,this.heading=_()[e]}),F.b.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()})),l.R.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=z.f.getNetworkImage(this.network)})))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=null!==(e=q[u.P.state.view])&&void 0!==e?e:y.gR.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",t),r.dy`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){T.X.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),u.P.push("WhatIsAWallet")}async onClose(){await m.safeClose()}rightHeaderTemplate(){var e,t;const o=null===n.h||void 0===n.h||null===(e=n.h.state)||void 0===e||null===(t=e.features)||void 0===t?void 0:t.smartSessions;return"Account"===u.P.state.view&&o?r.dy`<wui-flex>
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
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return r.dy`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return r.dy`<w3m-pay-header></w3m-pay-header>`;const e=Q.includes(this.view);return r.dy`
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
        ${e?r.dy`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=u.P.state,t="Connect"===e,o=n.h.state.enableEmbedded,i="ApproveTransaction"===e,s="ConnectingSiwe"===e,l="Account"===e,c=n.h.state.enableNetworkSwitch,d=i||s||t&&o;var h;return l&&c?r.dy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,a.o)(null===(h=this.network)||void 0===h?void 0:h.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,a.o)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?r.dy`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:r.dy`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(T.X.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.P.push("Networks"))}isAllowedNetworkSwitch(){const e=l.R.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,o=null===e||void 0===e?void 0:e.find((e=>{var t;let{id:o}=e;return o===(null===(t=this.network)||void 0===t?void 0:t.id)}));return t||!o}onViewChange(){const{history:e}=u.P.state;let t=F.b.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=F.b.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var e;const{history:t}=u.P.state,o=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#dynamic");t.length>1&&!this.showBack&&o?(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&o&&(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){u.P.goBack()}};Z.styles=Y,G([(0,i.SB)()],Z.prototype,"heading",void 0),G([(0,i.SB)()],Z.prototype,"network",void 0),G([(0,i.SB)()],Z.prototype,"networkImage",void 0),G([(0,i.SB)()],Z.prototype,"showBack",void 0),G([(0,i.SB)()],Z.prototype,"prevHistoryLength",void 0),G([(0,i.SB)()],Z.prototype,"view",void 0),G([(0,i.SB)()],Z.prototype,"viewDirection",void 0),Z=G([(0,y.Mo)("w3m-header")],Z);o(10216),o(99568);const J=k.iv`
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
`;var ee=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let te=class extends r.oi{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return r.dy`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?r.dy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:r.dy`<wui-icon-box
      size="md"
      color=${{success:"success",error:"error",warning:"warning",info:"default"}[this.variant]}
      icon=${{success:"checkmark",error:"warning",warning:"warningCircle",info:"info"}[this.variant]}
    ></wui-icon-box>`}};te.styles=[f.ET,J],ee([(0,i.Cb)()],te.prototype,"message",void 0),ee([(0,i.Cb)()],te.prototype,"variant",void 0),te=ee([(0,v.M)("wui-snackbar")],te);const oe=r.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var re=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let ie=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=w.K.state.open,this.unsubscribe.push(w.K.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=w.K.state;return r.dy` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),w.K.state.autoClose&&(this.timeout=setTimeout((()=>w.K.hide()),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ie.styles=oe,re([(0,i.SB)()],ie.prototype,"open",void 0),ie=re([(0,y.Mo)("w3m-snackbar")],ie);o(13534),o(16039);var ae=o(50716);o(51838),o(36697);const ne=y.iv`
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
`;var se=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const le="scroll-lock",ce={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class de extends r.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=n.h.state.enableEmbedded,this.open=s.I.state.open,this.caipAddress=l.R.state.activeCaipAddress,this.caipNetwork=l.R.state.activeCaipNetwork,this.shake=s.I.state.shake,this.filterByNamespace=c.A.state.filterByNamespace,this.padding=y.gR.spacing[1],this.mobileFullScreen=n.h.state.enableMobileFullScreen,this.initializeTheming(),d.Q.prefetchAnalyticsConfig(),this.unsubscribe.push(s.I.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),s.I.subscribeKey("shake",(e=>this.shake=e)),l.R.subscribeKey("activeCaipNetwork",(e=>this.onNewNetwork(e))),l.R.subscribeKey("activeCaipAddress",(e=>this.onNewAddress(e))),n.h.subscribeKey("enableEmbedded",(e=>this.enableEmbedded=e)),c.A.subscribeKey("filterByNamespace",(e=>{var t;this.filterByNamespace===e||null!==(t=l.R.getAccountData(e))&&void 0!==t&&t.caipAddress||(d.Q.fetchRecommendedWallets(),this.filterByNamespace=e)})),u.P.subscribeKey("view",(()=>{var e;this.dataset.border=ae.g.hasFooter()?"true":"false",this.padding=null!==(e=ce[u.P.state.view])&&void 0!==e?e:y.gR.spacing[1]})))}firstUpdated(){if(this.dataset.border=ae.g.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded)return s.I.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?r.dy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?r.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return r.dy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,a.o)(this.enableEmbedded)}"
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
    </wui-card>`}async onOverlayClick(e){if(e.target===e.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await m.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=g.u.state,o=y.Hg.getColorTheme(t);(0,y.n)(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),w.K.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=le,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${le}"]`);e&&e.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-card");null===t||void 0===t||t.focus(),window.addEventListener("keydown",(e=>{if("Escape"===e.key)this.handleClose();else if("Tab"===e.key){const{tagName:o}=e.target;!o||o.includes("W3M-")||o.includes("WUI-")||null===t||void 0===t||t.focus()}}),this.abortController)}onRemoveKeyboardListener(){var e;null===(e=this.abortController)||void 0===e||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=l.R.state.isSwitchingNamespace,o="ProfileWallets"===u.P.state.view;!e&&!t&&!o&&s.I.close(),await p.w.initializeIfEnabled(e),this.caipAddress=e,l.R.setIsSwitchingNamespace(!1)}onNewNetwork(e){var t,o;const r=this.caipNetwork,i=(null===r||void 0===r||null===(t=r.caipNetworkId)||void 0===t?void 0:t.toString())!==(null===e||void 0===e||null===(o=e.caipNetworkId)||void 0===o?void 0:o.toString()),a="UnsupportedChain"===u.P.state.view,n=s.I.state.open;let l=!1;this.enableEmbedded&&"SwitchNetwork"===u.P.state.view&&(l=!0),i&&b.nY.resetState(),n&&a&&(l=!0),l&&"SIWXSignMessage"!==u.P.state.view&&u.P.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(d.Q.prefetch(),d.Q.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}de.styles=ne,se([(0,i.Cb)({type:Boolean})],de.prototype,"enableEmbedded",void 0),se([(0,i.SB)()],de.prototype,"open",void 0),se([(0,i.SB)()],de.prototype,"caipAddress",void 0),se([(0,i.SB)()],de.prototype,"caipNetwork",void 0),se([(0,i.SB)()],de.prototype,"shake",void 0),se([(0,i.SB)()],de.prototype,"filterByNamespace",void 0),se([(0,i.SB)()],de.prototype,"padding",void 0),se([(0,i.SB)()],de.prototype,"mobileFullScreen",void 0);let ue=class extends de{};ue=se([(0,y.Mo)("w3m-modal")],ue);let he=class extends de{};he=se([(0,y.Mo)("appkit-modal")],he);o(74385),o(75692);const pe=y.iv`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    background-color: ${e=>{let{colors:t}=e;return t.semanticError010}};
  }
`;var me=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let ge=class extends r.oi{constructor(){super()}render(){return r.dy`
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
    `}onTryAgainClick(){u.P.goBack()}};ge.styles=pe,ge=me([(0,y.Mo)("w3m-usage-exceeded-view")],ge);var we=o(58050);o(71478);const be=y.iv`
  :host {
    width: 100%;
  }
`;var ye=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let fe=class extends r.oi{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1);e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver((e=>{e.forEach((e=>{!e.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()}))}),{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&T.X.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:u.P.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(we.j.state.adapters).length>1?this.namespaces:[]}render(){return r.dy`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,a.o)(this.imageSrc)}
        name=${this.name}
        size=${(0,a.o)(this.size)}
        tagLabel=${(0,a.o)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};fe.styles=be,ye([(0,i.Cb)({type:Array})],fe.prototype,"walletImages",void 0),ye([(0,i.Cb)()],fe.prototype,"imageSrc",void 0),ye([(0,i.Cb)()],fe.prototype,"name",void 0),ye([(0,i.Cb)()],fe.prototype,"size",void 0),ye([(0,i.Cb)()],fe.prototype,"tagLabel",void 0),ye([(0,i.Cb)()],fe.prototype,"tagVariant",void 0),ye([(0,i.Cb)()],fe.prototype,"walletIcon",void 0),ye([(0,i.Cb)()],fe.prototype,"tabIdx",void 0),ye([(0,i.Cb)({type:Boolean})],fe.prototype,"disabled",void 0),ye([(0,i.Cb)({type:Boolean})],fe.prototype,"showAllWallets",void 0),ye([(0,i.Cb)({type:Boolean})],fe.prototype,"loading",void 0),ye([(0,i.Cb)({type:String})],fe.prototype,"loadingSpinnerColor",void 0),ye([(0,i.Cb)()],fe.prototype,"rdnsId",void 0),ye([(0,i.Cb)()],fe.prototype,"displayIndex",void 0),ye([(0,i.Cb)()],fe.prototype,"walletRank",void 0),ye([(0,i.Cb)({type:Array})],fe.prototype,"namespaces",void 0),fe=ye([(0,y.Mo)("w3m-list-wallet")],fe);const ve=y.iv`
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
`;var ke=function(e,t,o,r){var i,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,o,n):i(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let xe=class extends r.oi{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=n.h.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){const e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){var e;this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver((e=>{for(const o of e)if(o.target===this.getWrapper()){let e=o.contentRect.height;const r=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){var t;e=((null===(t=window.visualViewport)||void 0===t?void 0:t.height)||window.innerHeight)-this.getHeaderHeight()-r,this.style.setProperty("--local-border-bottom-radius","0px")}else{e=e+r,this.style.setProperty("--local-border-bottom-radius",r?"var(--apkt-borderRadius-5)":"0px")}this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}})),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),null===(e=window.visualViewport)||void 0===e||e.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var e;const t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener("resize",this.onViewportResize),null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",this.onViewportResize)}render(){return r.dy`
      <div class="container" data-mobile-fullscreen="${(0,a.o)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,a.o)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){const t=e.split(",").filter(Boolean),o=this.historyState.split(",").filter(Boolean),r=o.length,i=t.length,a=t[t.length-1]||"",n=y.Hg.cssDurationToNumber(this.transitionDuration);let s="";i>r?s="next":i<r?s="prev":i===r&&t[i-1]!==o[r-1]&&(s="next"),this.viewDirection=`${s}-${a}`,setTimeout((()=>{var t;this.historyState=e,null===(t=this.setView)||void 0===t||t.call(this,a)}),n),setTimeout((()=>{this.viewDirection=""}),2*n)}getWrapper(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("div.page")}updateContainerHeight(){const e=this.getWrapper();if(!e)return;const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let o=0;if(this.mobileFullScreen){var r;o=((null===(r=window.visualViewport)||void 0===r?void 0:r.height)||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")}else o=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${o}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${o}px`}getHeaderHeight(){return 60}};xe.styles=[ve],ke([(0,i.Cb)({type:String})],xe.prototype,"transitionDuration",void 0),ke([(0,i.Cb)({type:String})],xe.prototype,"transitionFunction",void 0),ke([(0,i.Cb)({type:String})],xe.prototype,"history",void 0),ke([(0,i.Cb)({type:String})],xe.prototype,"view",void 0),ke([(0,i.Cb)({attribute:!1})],xe.prototype,"setView",void 0),ke([(0,i.SB)()],xe.prototype,"viewDirection",void 0),ke([(0,i.SB)()],xe.prototype,"historyState",void 0),ke([(0,i.SB)()],xe.prototype,"previousHeight",void 0),ke([(0,i.SB)()],xe.prototype,"mobileFullScreen",void 0),xe=ke([(0,y.Mo)("w3m-router-container")],xe)}}]);
//# sourceMappingURL=3749.chunk.js.map