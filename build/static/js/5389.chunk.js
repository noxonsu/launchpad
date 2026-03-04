(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[5389],{46726:(e,t,n)=>{const i=n(55533),r=n(36463),o=n(28557),a=n(23035);function s(e,t,n,o,a){const s=[].slice.call(arguments,1),l=s.length,c="function"===typeof s[l-1];if(!c&&!i())throw new Error("Callback required as last argument");if(!c){if(l<1)throw new Error("Too few arguments provided");return 1===l?(n=t,t=o=void 0):2!==l||t.getContext||(o=n,n=t,t=void 0),new Promise((function(i,a){try{const a=r.create(n,o);i(e(a,t,o))}catch(s){a(s)}}))}if(l<2)throw new Error("Too few arguments provided");2===l?(a=n,n=t,t=o=void 0):3===l&&(t.getContext&&"undefined"===typeof a?(a=o,o=void 0):(a=o,o=n,n=t,t=void 0));try{const i=r.create(n,o);a(null,e(i,t,o))}catch(d){a(d)}}t.create=r.create,t.toCanvas=s.bind(null,o.render),t.toDataURL=s.bind(null,o.renderToDataURL),t.toString=s.bind(null,(function(e,t,n){return a.render(e,n)}))},55533:e=>{e.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},53565:(e,t,n)=>{const i=n(22787).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];const t=Math.floor(e/7)+2,n=i(e),r=145===n?26:2*Math.ceil((n-13)/(2*t-2)),o=[n-7];for(let i=1;i<t-1;i++)o[i]=o[i-1]-r;return o.push(6),o.reverse()},t.getPositions=function(e){const n=[],i=t.getRowColCoords(e),r=i.length;for(let t=0;t<r;t++)for(let e=0;e<r;e++)0===t&&0===e||0===t&&e===r-1||t===r-1&&0===e||n.push([i[t],i[e]]);return n}},71753:(e,t,n)=>{const i=n(90463),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=i.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=45*r.indexOf(this.data[t]);n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},e.exports=o},40129:e=>{function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){const t=Math.floor(e/8);return 1===(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let n=0;n<t;n++)this.putBit(1===(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},8697:e=>{function t(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,n,i){const r=e*this.size+t;this.data[r]=n,i&&(this.reservedBit[r]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},22331:(e,t,n)=>{const i=n(10153),r=n(90463);function o(e){this.mode=r.BYTE,"string"===typeof e&&(e=i(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},e.exports=o},95170:(e,t,n)=>{const i=n(28456),r=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case i.L:return r[4*(e-1)+0];case i.M:return r[4*(e-1)+1];case i.Q:return r[4*(e-1)+2];case i.H:return r[4*(e-1)+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case i.L:return o[4*(e-1)+0];case i.M:return o[4*(e-1)+1];case i.Q:return o[4*(e-1)+2];case i.H:return o[4*(e-1)+3];default:return}}},28456:(e,t)=>{t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&"undefined"!==typeof e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!==typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(i){return n}}},99582:(e,t,n)=>{const i=n(22787).getSymbolSize;t.getPositions=function(e){const t=i(e);return[[0,0],[t-7,0],[0,t-7]]}},89541:(e,t,n)=>{const i=n(22787),r=i.getBCHDigit(1335);t.getEncodedBits=function(e,t){const n=e.bit<<3|t;let o=n<<10;for(;i.getBCHDigit(o)-r>=0;)o^=1335<<i.getBCHDigit(o)-r;return 21522^(n<<10|o)}},38591:(e,t)=>{const n=new Uint8Array(512),i=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)n[t]=e,i[e]=t,e<<=1,256&e&&(e^=285);for(let t=255;t<512;t++)n[t]=n[t-255]}(),t.log=function(e){if(e<1)throw new Error("log("+e+")");return i[e]},t.exp=function(e){return n[e]},t.mul=function(e,t){return 0===e||0===t?0:n[i[e]+i[t]]}},92220:(e,t,n)=>{const i=n(90463),r=n(22787);function o(e){this.mode=i.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),e.put(n,13)}},e.exports=o},6541:(e,t)=>{t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n=3,i=3,r=40,o=10;function a(e,n,i){switch(e){case t.Patterns.PATTERN000:return(n+i)%2===0;case t.Patterns.PATTERN001:return n%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(n+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return n*i%2+n*i%3===0;case t.Patterns.PATTERN110:return(n*i%2+n*i%3)%2===0;case t.Patterns.PATTERN111:return(n*i%3+(n+i)%2)%2===0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){const t=e.size;let i=0,r=0,o=0,a=null,s=null;for(let l=0;l<t;l++){r=o=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?r++:(r>=5&&(i+=n+(r-5)),a=t,r=1),t=e.get(c,l),t===s?o++:(o>=5&&(i+=n+(o-5)),s=t,o=1)}r>=5&&(i+=n+(r-5)),o>=5&&(i+=n+(o-5))}return i},t.getPenaltyN2=function(e){const t=e.size;let n=0;for(let i=0;i<t-1;i++)for(let r=0;r<t-1;r++){const t=e.get(i,r)+e.get(i,r+1)+e.get(i+1,r)+e.get(i+1,r+1);4!==t&&0!==t||n++}return n*i},t.getPenaltyN3=function(e){const t=e.size;let n=0,i=0,o=0;for(let r=0;r<t;r++){i=o=0;for(let a=0;a<t;a++)i=i<<1&2047|e.get(r,a),a>=10&&(1488===i||93===i)&&n++,o=o<<1&2047|e.get(a,r),a>=10&&(1488===o||93===o)&&n++}return n*r},t.getPenaltyN4=function(e){let t=0;const n=e.data.length;for(let i=0;i<n;i++)t+=e.data[i];return Math.abs(Math.ceil(100*t/n/5)-10)*o},t.applyMask=function(e,t){const n=t.size;for(let i=0;i<n;i++)for(let r=0;r<n;r++)t.isReserved(r,i)||t.xor(r,i,a(e,r,i))},t.getBestMask=function(e,n){const i=Object.keys(t.Patterns).length;let r=0,o=1/0;for(let a=0;a<i;a++){n(a),t.applyMask(a,e);const i=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),i<o&&(o=i,r=a)}return r}},90463:(e,t,n)=>{const i=n(97326),r=n(38342);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!i.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return r.testNumeric(e)?t.NUMERIC:r.testAlphanumeric(e)?t.ALPHANUMERIC:r.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!==typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(i){return n}}},70841:(e,t,n)=>{const i=n(90463);function r(e){this.mode=i.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,i;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),i=parseInt(n,10),e.put(i,10);const r=this.data.length-t;r>0&&(n=this.data.substr(t),i=parseInt(n,10),e.put(i,3*r+1))},e.exports=r},79442:(e,t,n)=>{const i=n(38591);t.mul=function(e,t){const n=new Uint8Array(e.length+t.length-1);for(let r=0;r<e.length;r++)for(let o=0;o<t.length;o++)n[r+o]^=i.mul(e[r],t[o]);return n},t.mod=function(e,t){let n=new Uint8Array(e);for(;n.length-t.length>=0;){const e=n[0];for(let o=0;o<t.length;o++)n[o]^=i.mul(t[o],e);let r=0;for(;r<n.length&&0===n[r];)r++;n=n.slice(r)}return n},t.generateECPolynomial=function(e){let n=new Uint8Array([1]);for(let r=0;r<e;r++)n=t.mul(n,new Uint8Array([1,i.exp(r)]));return n}},36463:(e,t,n)=>{const i=n(22787),r=n(28456),o=n(40129),a=n(8697),s=n(53565),l=n(99582),c=n(6541),d=n(95170),u=n(62962),h=n(3177),p=n(89541),g=n(90463),f=n(39729);function w(e,t,n){const i=e.size,r=p.getEncodedBits(t,n);let o,a;for(o=0;o<15;o++)a=1===(r>>o&1),o<6?e.set(o,8,a,!0):o<8?e.set(o+1,8,a,!0):e.set(i-15+o,8,a,!0),o<8?e.set(8,i-o-1,a,!0):o<9?e.set(8,15-o-1+1,a,!0):e.set(8,15-o-1,a,!0);e.set(i-8,8,1,!0)}function m(e,t,n){const r=new o;n.forEach((function(t){r.put(t.mode.bit,4),r.put(t.getLength(),g.getCharCountIndicator(t.mode,e)),t.write(r)}));const a=8*(i.getSymbolTotalCodewords(e)-d.getTotalCodewordsCount(e,t));for(r.getLengthInBits()+4<=a&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const s=(a-r.getLengthInBits())/8;for(let i=0;i<s;i++)r.put(i%2?17:236,8);return function(e,t,n){const r=i.getSymbolTotalCodewords(t),o=d.getTotalCodewordsCount(t,n),a=r-o,s=d.getBlocksCount(t,n),l=r%s,c=s-l,h=Math.floor(r/s),p=Math.floor(a/s),g=p+1,f=h-p,w=new u(f);let m=0;const b=new Array(s),y=new Array(s);let v=0;const x=new Uint8Array(e.buffer);for(let i=0;i<s;i++){const e=i<c?p:g;b[i]=x.slice(m,m+e),y[i]=w.encode(b[i]),m+=e,v=Math.max(v,e)}const $=new Uint8Array(r);let C,k,E=0;for(C=0;C<v;C++)for(k=0;k<s;k++)C<b[k].length&&($[E++]=b[k][C]);for(C=0;C<f;C++)for(k=0;k<s;k++)$[E++]=y[k][C];return $}(r,e,t)}function b(e,t,n,r){let o;if(Array.isArray(e))o=f.fromArray(e);else{if("string"!==typeof e)throw new Error("Invalid data");{let i=t;if(!i){const t=f.rawSplit(e);i=h.getBestVersionForData(t,n)}o=f.fromString(e,i||40)}}const d=h.getBestVersionForData(o,n);if(!d)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<d)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+d+".\n")}else t=d;const u=m(t,n,o),p=i.getSymbolSize(t),g=new a(p);return function(e,t){const n=e.size,i=l.getPositions(t);for(let r=0;r<i.length;r++){const t=i[r][0],o=i[r][1];for(let i=-1;i<=7;i++)if(!(t+i<=-1||n<=t+i))for(let r=-1;r<=7;r++)o+r<=-1||n<=o+r||(i>=0&&i<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===i||6===i)||i>=2&&i<=4&&r>=2&&r<=4?e.set(t+i,o+r,!0,!0):e.set(t+i,o+r,!1,!0))}}(g,t),function(e){const t=e.size;for(let n=8;n<t-8;n++){const t=n%2===0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}(g),function(e,t){const n=s.getPositions(t);for(let i=0;i<n.length;i++){const t=n[i][0],r=n[i][1];for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)-2===n||2===n||-2===i||2===i||0===n&&0===i?e.set(t+n,r+i,!0,!0):e.set(t+n,r+i,!1,!0)}}(g,t),w(g,n,0),t>=7&&function(e,t){const n=e.size,i=h.getEncodedBits(t);let r,o,a;for(let s=0;s<18;s++)r=Math.floor(s/3),o=s%3+n-8-3,a=1===(i>>s&1),e.set(r,o,a,!0),e.set(o,r,a,!0)}(g,t),function(e,t){const n=e.size;let i=-1,r=n-1,o=7,a=0;for(let s=n-1;s>0;s-=2)for(6===s&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(r,s-n)){let i=!1;a<t.length&&(i=1===(t[a]>>>o&1)),e.set(r,s-n,i),o--,-1===o&&(a++,o=7)}if(r+=i,r<0||n<=r){r-=i,i=-i;break}}}(g,u),isNaN(r)&&(r=c.getBestMask(g,w.bind(null,g,n))),c.applyMask(r,g),w(g,n,r),{modules:g,version:t,errorCorrectionLevel:n,maskPattern:r,segments:o}}t.create=function(e,t){if("undefined"===typeof e||""===e)throw new Error("No input text");let n,o,a=r.M;return"undefined"!==typeof t&&(a=r.from(t.errorCorrectionLevel,r.M),n=h.from(t.version),o=c.from(t.maskPattern),t.toSJISFunc&&i.setToSJISFunction(t.toSJISFunc)),b(e,n,a,o)}},62962:(e,t,n)=>{const i=n(79442);function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=i.mod(t,this.genPoly),r=this.degree-n.length;if(r>0){const e=new Uint8Array(this.degree);return e.set(n,r),e}return n},e.exports=r},38342:(e,t)=>{const n="[0-9]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";t.KANJI=new RegExp(i,"g"),t.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=new RegExp(r,"g"),t.NUMERIC=new RegExp(n,"g"),t.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const o=new RegExp("^"+i+"$"),a=new RegExp("^"+n+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},39729:(e,t,n)=>{const i=n(90463),r=n(70841),o=n(71753),a=n(22331),s=n(92220),l=n(38342),c=n(22787),d=n(90951);function u(e){return unescape(encodeURIComponent(e)).length}function h(e,t,n){const i=[];let r;for(;null!==(r=e.exec(n));)i.push({data:r[0],index:r.index,mode:t,length:r[0].length});return i}function p(e){const t=h(l.NUMERIC,i.NUMERIC,e),n=h(l.ALPHANUMERIC,i.ALPHANUMERIC,e);let r,o;c.isKanjiModeEnabled()?(r=h(l.BYTE,i.BYTE,e),o=h(l.KANJI,i.KANJI,e)):(r=h(l.BYTE_KANJI,i.BYTE,e),o=[]);return t.concat(n,r,o).sort((function(e,t){return e.index-t.index})).map((function(e){return{data:e.data,mode:e.mode,length:e.length}}))}function g(e,t){switch(t){case i.NUMERIC:return r.getBitsLength(e);case i.ALPHANUMERIC:return o.getBitsLength(e);case i.KANJI:return s.getBitsLength(e);case i.BYTE:return a.getBitsLength(e)}}function f(e,t){let n;const l=i.getBestModeForData(e);if(n=i.from(t,l),n!==i.BYTE&&n.bit<l.bit)throw new Error('"'+e+'" cannot be encoded with mode '+i.toString(n)+".\n Suggested mode is: "+i.toString(l));switch(n!==i.KANJI||c.isKanjiModeEnabled()||(n=i.BYTE),n){case i.NUMERIC:return new r(e);case i.ALPHANUMERIC:return new o(e);case i.KANJI:return new s(e);case i.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce((function(e,t){return"string"===typeof t?e.push(f(t,null)):t.data&&e.push(f(t.data,t.mode)),e}),[])},t.fromString=function(e,n){const r=function(e){const t=[];for(let n=0;n<e.length;n++){const r=e[n];switch(r.mode){case i.NUMERIC:t.push([r,{data:r.data,mode:i.ALPHANUMERIC,length:r.length},{data:r.data,mode:i.BYTE,length:r.length}]);break;case i.ALPHANUMERIC:t.push([r,{data:r.data,mode:i.BYTE,length:r.length}]);break;case i.KANJI:t.push([r,{data:r.data,mode:i.BYTE,length:u(r.data)}]);break;case i.BYTE:t.push([{data:r.data,mode:i.BYTE,length:u(r.data)}])}}return t}(p(e,c.isKanjiModeEnabled())),o=function(e,t){const n={},r={start:{}};let o=["start"];for(let a=0;a<e.length;a++){const s=e[a],l=[];for(let e=0;e<s.length;e++){const c=s[e],d=""+a+e;l.push(d),n[d]={node:c,lastCount:0},r[d]={};for(let e=0;e<o.length;e++){const a=o[e];n[a]&&n[a].node.mode===c.mode?(r[a][d]=g(n[a].lastCount+c.length,c.mode)-g(n[a].lastCount,c.mode),n[a].lastCount+=c.length):(n[a]&&(n[a].lastCount=c.length),r[a][d]=g(c.length,c.mode)+4+i.getCharCountIndicator(c.mode,t))}}o=l}for(let i=0;i<o.length;i++)r[o[i]].end=0;return{map:r,table:n}}(r,n),a=d.find_path(o.map,"start","end"),s=[];for(let t=1;t<a.length-1;t++)s.push(o.table[a[t]].node);return t.fromArray(function(e){return e.reduce((function(e,t){const n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)}),[])}(s))},t.rawSplit=function(e){return t.fromArray(p(e,c.isKanjiModeEnabled()))}},22787:(e,t)=>{let n;const i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return i[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!==typeof e)throw new Error('"toSJISFunc" is not a valid function.');n=e},t.isKanjiModeEnabled=function(){return"undefined"!==typeof n},t.toSJIS=function(e){return n(e)}},97326:(e,t)=>{t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},3177:(e,t,n)=>{const i=n(22787),r=n(95170),o=n(28456),a=n(90463),s=n(97326),l=i.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}function d(e,t){let n=0;return e.forEach((function(e){const i=c(e.mode,t);n+=i+e.getBitsLength()})),n}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,n){if(!s.isValid(e))throw new Error("Invalid QR Code version");"undefined"===typeof n&&(n=a.BYTE);const o=8*(i.getSymbolTotalCodewords(e)-r.getTotalCodewordsCount(e,t));if(n===a.MIXED)return o;const l=o-c(n,e);switch(n){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,n){let i;const r=o.from(n,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,n){for(let i=1;i<=40;i++)if(d(e,i)<=t.getCapacity(i,n,a.MIXED))return i}(e,r);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,n,i){for(let r=1;r<=40;r++)if(n<=t.getCapacity(r,i,e))return r}(i.mode,i.getLength(),r)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;i.getBCHDigit(t)-l>=0;)t^=7973<<i.getBCHDigit(t)-l;return e<<12|t}},28557:(e,t,n)=>{const i=n(50204);t.render=function(e,t,n){let r=n,o=t;"undefined"!==typeof r||t&&t.getContext||(r=t,t=void 0),t||(o=function(){try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}}()),r=i.getOptions(r);const a=i.getImageWidth(e.modules.size,r),s=o.getContext("2d"),l=s.createImageData(a,a);return i.qrToImageData(l.data,e,r),function(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=n,t.width=n,t.style.height=n+"px",t.style.width=n+"px"}(s,o,a),s.putImageData(l,0,0),o},t.renderToDataURL=function(e,n,i){let r=i;"undefined"!==typeof r||n&&n.getContext||(r=n,n=void 0),r||(r={});const o=t.render(e,n,r),a=r.type||"image/png",s=r.rendererOpts||{};return o.toDataURL(a,s.quality)}},23035:(e,t,n)=>{const i=n(50204);function r(e,t){const n=e.a/255,i=t+'="'+e.hex+'"';return n<1?i+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function o(e,t,n){let i=e+t;return"undefined"!==typeof n&&(i+=" "+n),i}t.render=function(e,t,n){const a=i.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,d=a.color.light.a?"<path "+r(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",u="<path "+r(a.color.dark,"stroke")+' d="'+function(e,t,n){let i="",r=0,a=!1,s=0;for(let l=0;l<e.length;l++){const c=Math.floor(l%t),d=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(i+=a?o("M",c+n,.5+d+n):o("m",r,0),r=0,a=!1),c+1<t&&e[l+1]||(i+=o("h",s),s=0)):r++}return i}(l,s,a.margin)+'"/>',h='viewBox="0 0 '+c+" "+c+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+h+' shape-rendering="crispEdges">'+d+u+"</svg>\n";return"function"===typeof n&&n(null,p),p}},50204:(e,t)=>{function n(e){if("number"===typeof e&&(e=e.toString()),"string"!==typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);3!==t.length&&4!==t.length||(t=Array.prototype.concat.apply([],t.map((function(e){return[e,e]})))),6===t.length&&t.push("F","F");const n=parseInt(t.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});const t="undefined"===typeof e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,r=e.scale||4;return{width:i,scale:i?4:r,margin:t,color:{dark:n(e.color.dark||"#000000ff"),light:n(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,n){const i=t.getScale(e,n);return Math.floor((e+2*n.margin)*i)},t.qrToImageData=function(e,n,i){const r=n.modules.size,o=n.modules.data,a=t.getScale(r,i),s=Math.floor((r+2*i.margin)*a),l=i.margin*a,c=[i.color.light,i.color.dark];for(let t=0;t<s;t++)for(let n=0;n<s;n++){let d=4*(t*s+n),u=i.color.light;if(t>=l&&n>=l&&t<s-l&&n<s-l){u=c[o[Math.floor((t-l)/a)*r+Math.floor((n-l)/a)]?1:0]}e[d++]=u.r,e[d++]=u.g,e[d++]=u.b,e[d]=u.a}}},85389:(e,t,n)=>{"use strict";n.r(t),n.d(t,{W3mAllWalletsView:()=>lt,W3mConnectingWcBasicView:()=>Pe,W3mDownloadsView:()=>dt});var i=n(66386),r=n(43756),o=n(7711),a=n(53560),s=n(18395),l=n(23814),c=n(50519),d=(n(71744),n(54417)),u=n(95772),h=n(86392),p=n(42772),g=n(98541),f=n(90125),w=(n(95512),function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a});let m=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=h.A.state.connectors,this.count=s.Q.state.count,this.filteredCount=s.Q.state.filteredWallets.length,this.isFetchingRecommendedWallets=s.Q.state.isFetchingRecommendedWallets,this.unsubscribe.push(h.A.subscribeKey("connectors",(e=>this.connectors=e)),s.Q.subscribeKey("count",(e=>this.count=e)),s.Q.subscribeKey("filteredWallets",(e=>this.filteredCount=e.length)),s.Q.subscribeKey("isFetchingRecommendedWallets",(e=>this.isFetchingRecommendedWallets=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"walletConnect"===e.id)),{allWallets:t}=a.h.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!o.j.isMobile())return null;const n=s.Q.state.featured.length,r=this.count+n,l=r<10?r:10*Math.floor(r/10),c=this.filteredCount>0?this.filteredCount:l;let h=`${c}`;this.filteredCount>0?h=`${this.filteredCount}`:c<r&&(h=`${c}+`);const g=p.l.hasAnyConnection(u.b.CONNECTOR_ID.WALLET_CONNECT);return i.dy`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${h}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,d.o)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${g}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){var e;g.X.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),f.P.push("AllWallets",{redirectView:null===(e=f.P.state.data)||void 0===e?void 0:e.redirectView})}};w([(0,r.Cb)()],m.prototype,"tabIdx",void 0),w([(0,r.SB)()],m.prototype,"connectors",void 0),w([(0,r.SB)()],m.prototype,"count",void 0),w([(0,r.SB)()],m.prototype,"filteredCount",void 0),w([(0,r.SB)()],m.prototype,"isFetchingRecommendedWallets",void 0),m=w([(0,c.Mo)("w3m-all-wallets-widget")],m);var b=n(2615),y=n(94091),v=n(16986),x=n(64300),$=n(10817);const C=c.iv`
  :host {
    margin-top: ${e=>{let{spacing:t}=e;return t[1]}};
  }
  wui-separator {
    margin: ${e=>{let{spacing:t}=e;return t[3]}} calc(${e=>{let{spacing:t}=e;return t[3]}} * -1)
      ${e=>{let{spacing:t}=e;return t[2]}} calc(${e=>{let{spacing:t}=e;return t[3]}} * -1);
    width: calc(100% + ${e=>{let{spacing:t}=e;return t[3]}} * 2);
  }
`;var k=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let E=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.explorerWallets=s.Q.state.explorerWallets,this.connections=p.l.state.connections,this.connectorImages=b.W.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(p.l.subscribeKey("connections",(e=>this.connections=e)),b.W.subscribeKey("connectorImages",(e=>this.connectorImages=e)),s.Q.subscribeKey("explorerFilteredWallets",(e=>{this.explorerWallets=null!==e&&void 0!==e&&e.length?e:s.Q.state.explorerWallets})),s.Q.subscribeKey("explorerWallets",(e=>{var t;null!==(t=this.explorerWallets)&&void 0!==t&&t.length||(this.explorerWallets=e)}))),o.j.isTelegram()&&o.j.isIos()&&(this.loadingTelegram=!p.l.state.wcUri,this.unsubscribe.push(p.l.subscribeKey("wcUri",(e=>this.loadingTelegram=!e))))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return i.dy`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return y.C.connectorList().map(((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t)))}getConnectorNamespaces(e){return"walletConnect"===e.subtype?[]:"multiChain"===e.subtype?(null===(t=e.connector.connectors)||void 0===t?void 0:t.map((e=>e.chain)))||[]:[e.connector.chain];var t}renderConnector(e,t){var n,r,o,a,s;const l=e.connector,c=v.f.getConnectorImage(l)||this.connectorImages[null!==(n=null===l||void 0===l?void 0:l.imageId)&&void 0!==n?n:""],h=(null!==(r=this.connections.get(l.chain))&&void 0!==r?r:[]).some((e=>$.g.isLowerCaseMatch(e.connectorId,l.id)));let g,f;"walletConnect"===e.subtype?(g="qr code",f="accent"):"injected"===e.subtype||"announced"===e.subtype?(g=h?"connected":"installed",f=h?"info":"success"):(g=void 0,f=void 0);const w=p.l.hasAnyConnection(u.b.CONNECTOR_ID.WALLET_CONNECT),m=("walletConnect"===e.subtype||"external"===e.subtype)&&w;return i.dy`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.o)(c)}
        .installed=${!0}
        name=${null!==(o=l.name)&&void 0!==o?o:"Unknown"}
        .tagVariant=${f}
        tagLabel=${(0,d.o)(g)}
        data-testid=${`wallet-selector-${l.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${(0,d.o)(this.tabIdx)}
        ?disabled=${m}
        rdnsId=${(0,d.o)((null===(a=l.explorerWallet)||void 0===a?void 0:a.rdns)||void 0)}
        walletRank=${(0,d.o)(null===(s=l.explorerWallet)||void 0===s?void 0:s.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){var t;const n=null===(t=f.P.state.data)||void 0===t?void 0:t.redirectView;return"walletConnect"===e.subtype?(h.A.setActiveConnector(e.connector),void(o.j.isMobile()?f.P.push("AllWallets"):f.P.push("ConnectingWalletConnect",{redirectView:n}))):"multiChain"===e.subtype?(h.A.setActiveConnector(e.connector),void f.P.push("ConnectingMultiChain",{redirectView:n})):"injected"===e.subtype?(h.A.setActiveConnector(e.connector),void f.P.push("ConnectingExternal",{connector:e.connector,redirectView:n,wallet:e.connector.explorerWallet})):"announced"===e.subtype?"walletConnect"===e.connector.id?void(o.j.isMobile()?f.P.push("AllWallets"):f.P.push("ConnectingWalletConnect",{redirectView:n})):void f.P.push("ConnectingExternal",{connector:e.connector,redirectView:n,wallet:e.connector.explorerWallet}):void f.P.push("ConnectingExternal",{connector:e.connector,redirectView:n})}renderWallet(e,t){var n;const r=e.wallet,o=v.f.getWalletImage(r),a=p.l.hasAnyConnection(u.b.CONNECTOR_ID.WALLET_CONNECT),s=this.loadingTelegram,l="recent"===e.subtype?"recent":void 0,c="recent"===e.subtype?"info":void 0;return i.dy`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.o)(o)}
        name=${null!==(n=r.name)&&void 0!==n?n:"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${r.id}`}
        tabIdx=${(0,d.o)(this.tabIdx)}
        ?loading=${s}
        ?disabled=${a}
        rdnsId=${(0,d.o)(r.rdns||void 0)}
        walletRank=${(0,d.o)(r.order)}
        tagLabel=${(0,d.o)(l)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){var t;const n=null===(t=f.P.state.data)||void 0===t?void 0:t.redirectView,i=x.R.state.activeChain;if("featured"===e.subtype)return void h.A.selectWalletConnector(e.wallet);if("recent"===e.subtype){if(this.loadingTelegram)return;return void h.A.selectWalletConnector(e.wallet)}if("custom"===e.subtype){if(this.loadingTelegram)return;return void f.P.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:n})}if(this.loadingTelegram)return;const r=i?h.A.getConnector({id:e.wallet.id,namespace:i}):void 0;r?f.P.push("ConnectingExternal",{connector:r,redirectView:n}):f.P.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:n})}};E.styles=C,k([(0,r.Cb)({type:Number})],E.prototype,"tabIdx",void 0),k([(0,r.SB)()],E.prototype,"explorerWallets",void 0),k([(0,r.SB)()],E.prototype,"connections",void 0),k([(0,r.SB)()],E.prototype,"connectorImages",void 0),k([(0,r.SB)()],E.prototype,"loadingTelegram",void 0),E=k([(0,c.Mo)("w3m-connector-list")],E);var R=n(94565),S=n(71895),P=n(15337),T=n(59609),I=n(59279),B=n(25923),A=n(10915),j=(n(52823),n(95770),n(20089));const L=j.iv`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${e=>{let{spacing:t}=e;return t[1]}} ${e=>{let{spacing:t}=e;return t[2]}};
    column-gap: ${e=>{let{spacing:t}=e;return t[1]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[20]}};
    background-color: transparent;
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundTertiary}};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    }
  }
`;var M=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const O={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},N={lg:"md",md:"sm",sm:"sm"};let W=class extends i.oi{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return i.dy`
      <button data-active=${this.active}>
        ${this.icon?i.dy`<wui-icon size=${N[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${O[this.size]}> ${this.label} </wui-text>
      </button>
    `}};W.styles=[B.ET,B.ZM,L],M([(0,r.Cb)()],W.prototype,"icon",void 0),M([(0,r.Cb)()],W.prototype,"size",void 0),M([(0,r.Cb)()],W.prototype,"label",void 0),M([(0,r.Cb)({type:Boolean})],W.prototype,"active",void 0),W=M([(0,A.M)("wui-tab-item")],W);const z=j.iv`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[32]}};
    padding: ${e=>{let{spacing:t}=e;return t["01"]}};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var D=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let U=class extends i.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map(((e,t)=>{var n;const r=t===this.activeTab;return i.dy`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${r}
          data-active=${r}
          data-testid="tab-${null===(n=e.label)||void 0===n?void 0:n.toLowerCase()}"
        ></wui-tab-item>
      `}))}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};U.styles=[B.ET,B.ZM,z],D([(0,r.Cb)({type:Array})],U.prototype,"tabs",void 0),D([(0,r.Cb)()],U.prototype,"onTabChange",void 0),D([(0,r.Cb)()],U.prototype,"size",void 0),D([(0,r.SB)()],U.prototype,"activeTab",void 0),U=D([(0,A.M)("wui-tabs")],U);var _=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let F=class extends i.oi{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return i.dy`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((e=>{let{platform:t}=e;return t})),e}onTabChange(e){const t=this.platformTabs[e];var n;t&&(null===(n=this.onSelectPlatfrom)||void 0===n||n.call(this,t))}};_([(0,r.Cb)({type:Array})],F.prototype,"platforms",void 0),_([(0,r.Cb)()],F.prototype,"onSelectPlatfrom",void 0),F=_([(0,c.Mo)("w3m-connecting-header")],F);var V=n(33885);n(34885),n(91093),n(27580),n(75572);const H=j.iv`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var q=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let K=class extends i.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,n=116+t,r=245+t,o=360+1.75*t;return i.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${n} ${r}"
          stroke-dashoffset=${o}
        />
      </svg>
    `}};K.styles=[B.ET,H],q([(0,r.Cb)({type:Number})],K.prototype,"radius",void 0),K=q([(0,A.M)("wui-loading-thumbnail")],K);n(86138),n(14975),n(32040),n(32836);const Q=j.iv`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    padding-left: ${e=>{let{spacing:t}=e;return t[3]}};
    padding-right: ${e=>{let{spacing:t}=e;return t[3]}};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${e=>{let{spacing:t}=e;return t[6]}};
  }

  wui-text {
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var Y=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let J=class extends i.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return i.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};J.styles=[B.ET,B.ZM,Q],Y([(0,r.Cb)({type:Boolean})],J.prototype,"disabled",void 0),Y([(0,r.Cb)()],J.prototype,"label",void 0),Y([(0,r.Cb)()],J.prototype,"buttonLabel",void 0),J=Y([(0,A.M)("wui-cta-button")],J);const X=c.iv`
  :host {
    display: block;
    padding: 0 ${e=>{let{spacing:t}=e;return t[5]}} ${e=>{let{spacing:t}=e;return t[5]}};
  }
`;var G=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Z=class extends i.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:n,chrome_store:r,homepage:a}=this.wallet,s=o.j.isMobile(),l=o.j.isIos(),d=o.j.isAndroid(),u=[t,n,a,r].filter(Boolean).length>1,h=c.Hg.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return u&&!s?i.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>f.P.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&a?i.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&l?i.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&d?i.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.app_store&&o.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.play_store&&o.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;null!==(e=this.wallet)&&void 0!==e&&e.homepage&&o.j.openHref(this.wallet.homepage,"_blank")}};Z.styles=[X],G([(0,r.Cb)({type:Object})],Z.prototype,"wallet",void 0),Z=G([(0,c.Mo)("w3m-mobile-download-links")],Z);const ee=c.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${e=>{let{spacing:t}=e;return t[1]}} * -1);
    bottom: calc(${e=>{let{spacing:t}=e;return t[1]}} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${e=>{let{durations:t}=e;return t.lg}};
    transition-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${e=>{let{spacing:t}=e;return t[4]}};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var te=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};class ne extends i.oi{constructor(){var e,t,n,i,r,a,s,l;(super(),this.wallet=null===(e=f.P.state.data)||void 0===e?void 0:e.wallet,this.connector=null===(t=f.P.state.data)||void 0===t?void 0:t.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=null!==(n=v.f.getConnectorImage(this.connector))&&void 0!==n?n:v.f.getWalletImage(this.wallet),this.name=null!==(i=null!==(r=null===(a=this.wallet)||void 0===a?void 0:a.name)&&void 0!==r?r:null===(s=this.connector)||void 0===s?void 0:s.name)&&void 0!==i?i:"Wallet",this.isRetrying=!1,this.uri=p.l.state.wcUri,this.error=p.l.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(p.l.subscribeKey("wcUri",(e=>{var t;(this.uri=e,this.isRetrying&&this.onRetry)&&(this.isRetrying=!1,null===(t=this.onConnect)||void 0===t||t.call(this))})),p.l.subscribeKey("wcError",(e=>this.error=e))),(o.j.isTelegram()||o.j.isSafari())&&o.j.isIos()&&p.l.state.wcUri)&&(null===(l=this.onConnect)||void 0===l||l.call(this))}firstUpdated(){var e;null===(e=this.onAutoConnect)||void 0===e||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),p.l.setWcError(!1),clearTimeout(this.timeout)}render(){var e;null===(e=this.onRender)||void 0===e||e.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n="";return this.label?n=this.label:(n=`Continue in ${this.name}`,this.error&&(n="Connection declined")),i.dy`
      <wui-flex
        data-error=${(0,d.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,d.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?i.dy`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?i.dy`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){var e;this.showRetry=!0;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-button");null===t||void 0===t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;(p.l.setWcError(!1),this.onRetry)?(this.isRetrying=!0,null===(e=this.onRetry)||void 0===e||e.call(this)):null===(t=this.onConnect)||void 0===t||t.call(this)}loaderTemplate(){const e=V.u.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return i.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(o.j.copyToClopboard(this.uri),S.K.showSuccess("Link copied"))}catch{S.K.showError("Failed to copy")}}}ne.styles=ee,te([(0,r.SB)()],ne.prototype,"isRetrying",void 0),te([(0,r.SB)()],ne.prototype,"uri",void 0),te([(0,r.SB)()],ne.prototype,"error",void 0),te([(0,r.SB)()],ne.prototype,"ready",void 0),te([(0,r.SB)()],ne.prototype,"showRetry",void 0),te([(0,r.SB)()],ne.prototype,"label",void 0),te([(0,r.SB)()],ne.prototype,"secondaryBtnLabel",void 0),te([(0,r.SB)()],ne.prototype,"secondaryLabel",void 0),te([(0,r.SB)()],ne.prototype,"isLoading",void 0),te([(0,r.Cb)({type:Boolean})],ne.prototype,"isMobile",void 0),te([(0,r.Cb)()],ne.prototype,"onRetry",void 0);var ie=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let re=class extends ne{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:this.wallet.order,view:f.P.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=h.A.state,t=e.find((e=>{var t,n,i;return"ANNOUNCED"===e.type&&(null===(t=e.info)||void 0===t?void 0:t.rdns)===(null===(n=this.wallet)||void 0===n?void 0:n.rdns)||"INJECTED"===e.type||e.name===(null===(i=this.wallet)||void 0===i?void 0:i.name)}));if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await p.l.connectExternal(t,t.chain),P.I.close()}catch(t){var e;if(t instanceof T.g&&t.originalName===R.jD.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST)g.X.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}});else g.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:null!==(e=null===t||void 0===t?void 0:t.message)&&void 0!==e?e:"Unknown"}});this.error=!0}}};re=ie([(0,c.Mo)("w3m-connecting-wc-browser")],re);var oe=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ae=class extends ne{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:this.wallet.order,view:f.P.state.view}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,null===(e=this.onConnect)||void 0===e||e.call(this))}onConnectProxy(){var e;if(null!==(e=this.wallet)&&void 0!==e&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:n,href:i}=o.j.formatNativeUrl(e,this.uri);p.l.setWcLinking({name:t,href:i}),p.l.setRecentWallet(this.wallet),o.j.openHref(n,"_blank")}catch{this.error=!0}}};ae=oe([(0,c.Mo)("w3m-connecting-wc-desktop")],ae);var se=n(86951),le=n(71203),ce=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let de=class extends ne{constructor(){var e;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=a.h.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{se.f.onConnectMobile(this.wallet)},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=le.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(p.l.subscribeKey("wcUri",(()=>{this.onHandleURI()}))),g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:this.wallet.order,view:f.P.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var e;(this.isLoading=!this.uri,!this.ready&&this.uri)&&(this.ready=!0,null===(e=this.onConnect)||void 0===e||e.call(this))}onTryAgain(){var e;p.l.setWcError(!1),null===(e=this.onConnect)||void 0===e||e.call(this)}};ce([(0,r.SB)()],de.prototype,"redirectDeeplink",void 0),ce([(0,r.SB)()],de.prototype,"redirectUniversalLink",void 0),ce([(0,r.SB)()],de.prototype,"target",void 0),ce([(0,r.SB)()],de.prototype,"preferUniversalLinks",void 0),ce([(0,r.SB)()],de.prototype,"isLoading",void 0),de=ce([(0,c.Mo)("w3m-connecting-wc-mobile")],de);n(16435);var ue=n(46726);function he(e,t,n){if(e===t)return!1;return(e-t<0?t-e:e-t)<=n+.1}const pe={generate(e){let{uri:t,size:n,logoSize:r,padding:o=8,dotColor:a="var(--apkt-colors-black)"}=e;const s=10,l=[],c=function(e,t){const n=Array.prototype.slice.call(ue.create(e,{errorCorrectionLevel:t}).modules.data,0),i=Math.sqrt(n.length);return n.reduce(((e,t,n)=>(n%i===0?e.push([t]):e[e.length-1].push(t))&&e),[])}(t,"Q"),d=(n-2*o)/c.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach((e=>{let{x:t,y:n}=e;const r=(c.length-7)*d*t+o,h=(c.length-7)*d*n+o,p=.45;for(let o=0;o<u.length;o+=1){const e=d*(7-2*o);l.push(i.YP`
            <rect
              fill=${2===o?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===o?e-s:e}
              rx= ${0===o?(e-s)*p:e*p}
              ry= ${0===o?(e-s)*p:e*p}
              stroke=${a}
              stroke-width=${0===o?s:0}
              height=${0===o?e-s:e}
              x= ${0===o?h+d*o+5:h+d*o}
              y= ${0===o?r+d*o+5:r+d*o}
            />
          `)}}));const h=Math.floor((r+25)/d),p=c.length/2-h/2,g=c.length/2+h/2-1,f=[];c.forEach(((e,t)=>{e.forEach(((e,n)=>{if(c[t][n]&&!(t<7&&n<7||t>c.length-8&&n<7||t<7&&n>c.length-8)&&!(t>p&&t<g&&n>p&&n<g)){const e=t*d+d/2+o,i=n*d+d/2+o;f.push([e,i])}}))}));const w={};return f.forEach((e=>{let[t,n]=e;var i;w[t]?null===(i=w[t])||void 0===i||i.push(n):w[t]=[n]})),Object.entries(w).map((e=>{let[t,n]=e;const i=n.filter((e=>n.every((t=>!he(e,t,d)))));return[Number(t),i]})).forEach((e=>{let[t,n]=e;n.forEach((e=>{l.push(i.YP`<circle cx=${t} cy=${e} fill=${a} r=${d/2.5} />`)}))})),Object.entries(w).filter((e=>{let[t,n]=e;return n.length>1})).map((e=>{let[t,n]=e;const i=n.filter((e=>n.some((t=>he(e,t,d)))));return[Number(t),i]})).map((e=>{let[t,n]=e;n.sort(((e,t)=>e<t?-1:1));const i=[];for(const r of n){const e=i.find((e=>e.some((e=>he(r,e,d)))));e?e.push(r):i.push([r])}return[t,i.map((e=>[e[0],e[e.length-1]]))]})).forEach((e=>{let[t,n]=e;n.forEach((e=>{let[n,r]=e;l.push(i.YP`
              <line
                x1=${t}
                x2=${t}
                y1=${n}
                y2=${r}
                stroke=${a}
                stroke-width=${d/1.25}
                stroke-linecap="round"
              />
            `)}))})),l}},ge=j.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${e=>{let{colors:t}=e;return t.white}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
  }

  :host {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    box-shadow: inset 0 0 0 4px ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var fe=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let we=class extends i.oi{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),i.dy`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return i.YP`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${pe.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){var e;return this.imageSrc?i.dy`<wui-image src=${this.imageSrc} alt=${null!==(e=this.alt)&&void 0!==e?e:"logo"}></wui-image>`:this.farcaster?i.dy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:i.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};we.styles=[B.ET,ge],fe([(0,r.Cb)()],we.prototype,"uri",void 0),fe([(0,r.Cb)({type:Number})],we.prototype,"size",void 0),fe([(0,r.Cb)()],we.prototype,"theme",void 0),fe([(0,r.Cb)()],we.prototype,"imageSrc",void 0),fe([(0,r.Cb)()],we.prototype,"alt",void 0),fe([(0,r.Cb)({type:Boolean})],we.prototype,"arenaClear",void 0),fe([(0,r.Cb)({type:Boolean})],we.prototype,"farcaster",void 0),we=fe([(0,A.M)("wui-qr-code")],we);n(9225),n(27735);const me=c.iv`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${e=>{let{durations:t}=e;return t.xl}};
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var be=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ye=class extends ne{constructor(){super(),this.basic=!1}firstUpdated(){var e,t,n,i;this.basic||g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:null!==(e=null===(t=this.wallet)||void 0===t?void 0:t.name)&&void 0!==e?e:"WalletConnect",platform:"qrcode",displayIndex:null===(n=this.wallet)||void 0===n?void 0:n.display_index,walletRank:null===(i=this.wallet)||void 0===i?void 0:i.order,view:f.P.state.view}})}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.unsubscribe)||void 0===e||e.forEach((e=>e()))}render(){return this.onRenderProxy(),i.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){var e;if(!this.uri||!this.ready)return null;const t=this.wallet?this.wallet.name:void 0;p.l.setWcLinking(void 0),p.l.setRecentWallet(this.wallet);const n=null!==(e=V.u.state.themeVariables["--apkt-qr-color"])&&void 0!==e?e:V.u.state.themeVariables["--w3m-qr-color"];return i.dy` <wui-qr-code
      theme=${V.u.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,d.o)(v.f.getWalletImage(this.wallet))}
      color=${(0,d.o)(n)}
      alt=${(0,d.o)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return i.dy`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};ye.styles=me,be([(0,r.Cb)({type:Boolean})],ye.prototype,"basic",void 0),ye=be([(0,c.Mo)("w3m-connecting-wc-qrcode")],ye);var ve=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let xe=class extends i.oi{constructor(){var e,t,n;if(super(),this.wallet=null===(e=f.P.state.data)||void 0===e?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:null===(t=this.wallet)||void 0===t?void 0:t.display_index,walletRank:null===(n=this.wallet)||void 0===n?void 0:n.order,view:f.P.state.view}})}render(){return i.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,d.o)(v.f.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};xe=ve([(0,c.Mo)("w3m-connecting-wc-unsupported")],xe);var $e=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ce=class extends ne{constructor(){var e,t;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=le.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(p.l.subscribeKey("wcUri",(()=>{this.updateLoadingState()}))),g.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:null===(t=this.wallet)||void 0===t?void 0:t.order,view:f.P.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if(null!==(e=this.wallet)&&void 0!==e&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:n,href:i}=o.j.formatUniversalUrl(e,this.uri);p.l.setWcLinking({name:t,href:i}),p.l.setRecentWallet(this.wallet),o.j.openHref(n,"_blank")}catch{this.error=!0}}};$e([(0,r.SB)()],Ce.prototype,"isLoading",void 0),Ce=$e([(0,c.Mo)("w3m-connecting-wc-web")],Ce);const ke=c.iv`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var Ee=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Re=class extends i.oi{constructor(){var e;super(),this.wallet=null===(e=f.P.state.data)||void 0===e?void 0:e.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(a.h.state.siwx),this.remoteFeatures=a.h.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(a.h.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a.h.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),i.dy`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var e;return null!==(e=this.remoteFeatures)&&void 0!==e&&e.reownBranding&&this.displayBranding?i.dy`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("browser"!==this.platform&&(!a.h.state.manualWCControl||e))try{var t;const{wcPairingExpiry:i,status:r}=p.l.state,{redirectView:s}=null!==(t=f.P.state.data)&&void 0!==t?t:{};if(e||a.h.state.enableEmbedded||o.j.isPairingExpired(i)||"connecting"===r){var n;const e=p.l.getConnections(x.R.state.activeChain),t=null===(n=this.remoteFeatures)||void 0===n?void 0:n.multiWallet,i=e.length>0;await p.l.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(i&&t?(f.P.replace("ProfileWallets"),S.K.showSuccess("New Wallet Added")):s?f.P.replace(s):P.I.close())}}catch(l){var i,r;if(l instanceof Error&&l.message.includes("An error occurred when attempting to switch chain")&&!a.h.state.enableNetworkSwitch)if(x.R.state.activeChain)return x.R.setActiveCaipNetwork(I.f.getUnsupportedNetwork(`${x.R.state.activeChain}:${null===(r=x.R.state.activeCaipNetwork)||void 0===r?void 0:r.id}`)),void x.R.showUnsupportedChainUI();var s;if(l instanceof T.g&&l.originalName===R.jD.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST)g.X.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:l.message}});else g.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:null!==(s=null===l||void 0===l?void 0:l.message)&&void 0!==s?s:"Unknown"}});p.l.setWcError(!0),S.K.showError(null!==(i=l.message)&&void 0!==i?i:"Connection error"),p.l.resetWcConnection(),f.P.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:n,injected:i,rdns:r}=this.wallet,s=null===i||void 0===i?void 0:i.map((e=>{let{injected_id:t}=e;return t})).filter(Boolean),l=[...r?[r]:null!==s&&void 0!==s?s:[]],c=!a.h.state.isUniversalProvider&&l.length,d=e,u=n,h=p.l.checkInstalled(l),g=c&&h,f=t&&!o.j.isMobile();g&&!x.R.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(o.j.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),f&&this.platforms.push("desktop"),g||!c||x.R.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return i.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return i.dy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return i.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return i.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return i.dy`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return i.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?i.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var t;const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Re.styles=ke,Ee([(0,r.SB)()],Re.prototype,"platform",void 0),Ee([(0,r.SB)()],Re.prototype,"platforms",void 0),Ee([(0,r.SB)()],Re.prototype,"isSiwxEnabled",void 0),Ee([(0,r.SB)()],Re.prototype,"remoteFeatures",void 0),Ee([(0,r.Cb)({type:Boolean})],Re.prototype,"displayBranding",void 0),Ee([(0,r.Cb)({type:Boolean})],Re.prototype,"basic",void 0),Re=Ee([(0,c.Mo)("w3m-connecting-wc-view")],Re);var Se=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Pe=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.isMobile=o.j.isMobile(),this.remoteFeatures=a.h.state.remoteFeatures,this.unsubscribe.push(a.h.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(this.isMobile){const{featured:e,recommended:t}=s.Q.state,{customWallets:n}=a.h.state,r=l.M.getRecentWallets(),o=e.length||t.length||(null===n||void 0===n?void 0:n.length)||r.length;return i.dy`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${o?i.dy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return i.dy`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var e;return null!==(e=this.remoteFeatures)&&void 0!==e&&e.reownBranding?i.dy` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Se([(0,r.SB)()],Pe.prototype,"isMobile",void 0),Se([(0,r.SB)()],Pe.prototype,"remoteFeatures",void 0),Pe=Se([(0,c.Mo)("w3m-connecting-wc-basic-view")],Pe);var Te=n(33862);const Ie=j.iv`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      width ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      height ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${e=>{let{colors:t}=e;return t.neutrals300}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      width ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      height ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${e=>{let{colors:t}=e;return t.white}};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.textTertiary}};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals400}};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${e=>{let{colors:t}=e;return t.accent080}};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals700}};
  }

  input:checked:disabled + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals700}};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals400}};
  }

  input:checked:disabled + span::before {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.textTertiary}};
  }
`;var Be=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ae=class extends i.oi{constructor(){super(...arguments),this.inputElementRef=(0,Te.V)(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return i.dy`
      <label data-size=${this.size}>
        <input
          ${(0,Te.i)(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:null===(e=this.inputElementRef.value)||void 0===e?void 0:e.checked,bubbles:!0,composed:!0}))}};Ae.styles=[B.ET,B.ZM,Ie],Be([(0,r.Cb)({type:Boolean})],Ae.prototype,"checked",void 0),Be([(0,r.Cb)({type:Boolean})],Ae.prototype,"disabled",void 0),Be([(0,r.Cb)()],Ae.prototype,"size",void 0),Ae=Be([(0,A.M)("wui-toggle")],Ae);const je=j.iv`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    padding: ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[3]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    box-shadow: inset 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Le=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Me=class extends i.oi{constructor(){super(...arguments),this.checked=!1}render(){return i.dy`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};Me.styles=[B.ET,B.ZM,je],Le([(0,r.Cb)({type:Boolean})],Me.prototype,"checked",void 0),Me=Le([(0,A.M)("wui-certified-switch")],Me);const Oe=j.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${e=>{let{spacing:t}=e;return t[3]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    caret-color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    color: inherit;
    background: transparent;
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    caret-color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[3]}}
      ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[10]}};
    font-size: ${e=>{let{textSize:t}=e;return t.large}};
    line-height: ${e=>{let{typography:t}=e;return t["lg-regular"].lineHeight}};
    letter-spacing: ${e=>{let{typography:t}=e;return t["lg-regular"].letterSpacing}};
    font-weight: ${e=>{let{fontWeight:t}=e;return t.regular}};
    font-family: ${e=>{let{fontFamily:t}=e;return t.regular}};
  }

  input[data-size='lg'] {
    padding: ${e=>{let{spacing:t}=e;return t[4]}} ${e=>{let{spacing:t}=e;return t[3]}}
      ${e=>{let{spacing:t}=e;return t[4]}} ${e=>{let{spacing:t}=e;return t[10]}};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderSecondary}};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
  }

  input::placeholder {
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  input:focus:enabled {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderSecondary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    -webkit-box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
    -moz-box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
    box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${e=>{let{spacing:t}=e;return t[4]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${e=>{let{spacing:t}=e;return t[3]}};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
    color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${e=>{let{spacing:t}=e;return t[12]}};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var Ne=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let We=class extends i.oi{constructor(){super(...arguments),this.inputElementRef=(0,Te.V)(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return i.dy` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${(0,Te.i)(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,d.o)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?i.dy`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){var e;return this.onSubmit?i.dy`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${null===(e=this.onSubmit)||void 0===e?void 0:e.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?i.dy`<wui-icon name="spinner" size="md"></wui-icon>`:i.dy`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?i.dy`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?i.dy`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:null===(e=this.inputElementRef.value)||void 0===e?void 0:e.value,bubbles:!0,composed:!0}))}};We.styles=[B.ET,B.ZM,Oe],Ne([(0,r.Cb)()],We.prototype,"icon",void 0),Ne([(0,r.Cb)({type:Boolean})],We.prototype,"disabled",void 0),Ne([(0,r.Cb)({type:Boolean})],We.prototype,"loading",void 0),Ne([(0,r.Cb)()],We.prototype,"placeholder",void 0),Ne([(0,r.Cb)()],We.prototype,"type",void 0),Ne([(0,r.Cb)()],We.prototype,"value",void 0),Ne([(0,r.Cb)()],We.prototype,"errorText",void 0),Ne([(0,r.Cb)()],We.prototype,"warningText",void 0),Ne([(0,r.Cb)()],We.prototype,"onSubmit",void 0),Ne([(0,r.Cb)()],We.prototype,"size",void 0),Ne([(0,r.Cb)({attribute:!1})],We.prototype,"onKeyDown",void 0),We=Ne([(0,A.M)("wui-input-text")],We);const ze=j.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${e=>{let{spacing:t}=e;return t[3]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
    cursor: pointer;
    padding: ${e=>{let{spacing:t}=e;return t[2]}};
    background-color: transparent;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }
`;var De=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ue=class extends i.oi{constructor(){super(...arguments),this.inputComponentRef=(0,Te.V)(),this.inputValue=""}render(){return i.dy`
      <wui-input-text
        ${(0,Te.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?i.dy`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,t=null===e||void 0===e?void 0:e.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};Ue.styles=[B.ET,ze],De([(0,r.Cb)()],Ue.prototype,"inputValue",void 0),Ue=De([(0,A.M)("wui-search-bar")],Ue);var _e=n(27123),Fe=n(62384);n(55788);const Ve=j.iv`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var He=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let qe=class extends i.oi{constructor(){super(...arguments),this.type="wallet"}render(){return i.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?i.dy` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Fe.W}`:i.dy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};qe.styles=[B.ET,B.ZM,Ve],He([(0,r.Cb)()],qe.prototype,"type",void 0),qe=He([(0,A.M)("wui-card-select-loader")],qe);var Ke=n(72506);const Qe=i.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Ye=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Je=class extends i.oi{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Ke.H.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Ke.H.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Ke.H.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Ke.H.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Ke.H.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Ke.H.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Ke.H.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Ke.H.getSpacingStyles(this.margin,3)};\n    `,i.dy`<slot></slot>`}};Je.styles=[B.ET,Qe],Ye([(0,r.Cb)()],Je.prototype,"gridTemplateRows",void 0),Ye([(0,r.Cb)()],Je.prototype,"gridTemplateColumns",void 0),Ye([(0,r.Cb)()],Je.prototype,"justifyItems",void 0),Ye([(0,r.Cb)()],Je.prototype,"alignItems",void 0),Ye([(0,r.Cb)()],Je.prototype,"justifyContent",void 0),Ye([(0,r.Cb)()],Je.prototype,"alignContent",void 0),Ye([(0,r.Cb)()],Je.prototype,"columnGap",void 0),Ye([(0,r.Cb)()],Je.prototype,"rowGap",void 0),Ye([(0,r.Cb)()],Je.prototype,"gap",void 0),Ye([(0,r.Cb)()],Je.prototype,"padding",void 0),Ye([(0,r.Cb)()],Je.prototype,"margin",void 0),Je=Ye([(0,A.M)("wui-grid")],Je);const Xe=c.iv`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[0]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: clamp(0px, ${e=>{let{borderRadius:t}=e;return t[4]}}, 20px);
    transition:
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      border-radius ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${e=>{let{tokens:t}=e;return t.core.glass010}};
  }

  [data-selected='true'] {
    background-color: ${e=>{let{colors:t}=e;return t.accent020}};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${e=>{let{colors:t}=e;return t.accent010}};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${e=>{let{colors:t}=e;return t.accent010}};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Ge=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let Ze=class extends i.oi{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e,t;const n="certified"===(null===(e=this.wallet)||void 0===e?void 0:e.badge_type);return i.dy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,d.o)(n?"certified":void 0)}
            >${null===(t=this.wallet)||void 0===t?void 0:t.name}</wui-text
          >
          ${n?i.dy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,t,n;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():i.dy`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,d.o)(this.imageSrc)}
        name=${(0,d.o)(null===(e=this.wallet)||void 0===e?void 0:e.name)}
        .installed=${null!==(t=null===(n=this.wallet)||void 0===n?void 0:n.installed)&&void 0!==t&&t}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return i.dy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=v.f.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await v.f.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,g.X.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:f.P.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};Ze.styles=Xe,Ge([(0,r.SB)()],Ze.prototype,"visible",void 0),Ge([(0,r.SB)()],Ze.prototype,"imageSrc",void 0),Ge([(0,r.SB)()],Ze.prototype,"imageLoading",void 0),Ge([(0,r.SB)()],Ze.prototype,"isImpressed",void 0),Ge([(0,r.Cb)()],Ze.prototype,"explorerId",void 0),Ge([(0,r.Cb)()],Ze.prototype,"walletQuery",void 0),Ge([(0,r.Cb)()],Ze.prototype,"certified",void 0),Ge([(0,r.Cb)()],Ze.prototype,"displayIndex",void 0),Ge([(0,r.Cb)({type:Object})],Ze.prototype,"wallet",void 0),Ze=Ge([(0,c.Mo)("w3m-all-wallets-list-item")],Ze);const et=c.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${e=>{let{durations:t}=e;return t.xl}};
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-inout-power-2"]}};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${e=>{let{spacing:t}=e;return t[4]}};
    padding-bottom: ${e=>{let{spacing:t}=e;return t[4]}};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var tt=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};const nt="local-paginator";let it=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!s.Q.state.wallets.length,this.wallets=s.Q.state.wallets,this.mobileFullScreen=a.h.state.enableMobileFullScreen,this.unsubscribe.push(s.Q.subscribeKey("wallets",(e=>this.wallets=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach((e=>e())),null===(e=this.paginationObserver)||void 0===e||e.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),i.dy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;this.loading=!0;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-grid");t&&(await s.Q.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>i.dy`
        <wui-card-select-loader type="wallet" id=${(0,d.o)(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return _e.J.getWalletConnectWallets(this.wallets).map(((e,t)=>i.dy`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:n,count:i,mobileFilteredOutWalletsLength:r}=s.Q.state,o=window.innerWidth<352?3:4,a=e.length+t.length;let l=Math.ceil(a/o)*o-a+o;return l-=e.length?n.length%o:0,0===i&&n.length>0?null:0===i||[...n,...e,...t].length<i-(null!==r&&void 0!==r?r:0)?this.shimmerTemplate(l,nt):null}createPaginationObserver(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`#${nt}`);t&&(this.paginationObserver=new IntersectionObserver((e=>{let[t]=e;if(null!==t&&void 0!==t&&t.isIntersecting&&!this.loading){const{page:e,count:t,wallets:n}=s.Q.state;n.length<t&&s.Q.fetchWalletsByPage({page:e+1})}})),this.paginationObserver.observe(t))}onConnectWallet(e){h.A.selectWalletConnector(e)}};it.styles=et,tt([(0,r.SB)()],it.prototype,"loading",void 0),tt([(0,r.SB)()],it.prototype,"wallets",void 0),tt([(0,r.SB)()],it.prototype,"badge",void 0),tt([(0,r.SB)()],it.prototype,"mobileFullScreen",void 0),it=tt([(0,c.Mo)("w3m-all-wallets-list")],it);n(18567);const rt=i.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var ot=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let at=class extends i.oi{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=a.h.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?i.dy`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await s.Q.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=s.Q.state,t=_e.J.markWalletsAsInstalled(e),n=_e.J.filterWalletsByWcSupport(t);return n.length?i.dy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${n.map(((e,t)=>i.dy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:i.dy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){h.A.selectWalletConnector(e)}};at.styles=rt,ot([(0,r.SB)()],at.prototype,"loading",void 0),ot([(0,r.SB)()],at.prototype,"mobileFullScreen",void 0),ot([(0,r.Cb)()],at.prototype,"query",void 0),ot([(0,r.Cb)()],at.prototype,"badge",void 0),at=ot([(0,c.Mo)("w3m-all-wallets-search")],at);var st=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let lt=class extends i.oi{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=o.j.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return i.dy`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?i.dy`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:i.dy`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",S.K.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return o.j.isMobile()?i.dy`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){f.P.push("ConnectingWalletConnect")}};st([(0,r.SB)()],lt.prototype,"search",void 0),st([(0,r.SB)()],lt.prototype,"badge",void 0),lt=st([(0,c.Mo)("w3m-all-wallets-view")],lt);n(40580);var ct=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let dt=class extends i.oi{constructor(){var e;super(...arguments),this.wallet=null===(e=f.P.state.data)||void 0===e?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return i.dy`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.chrome_store?i.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.app_store?i.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.play_store?i.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.homepage?i.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(g.X.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),o.j.openHref(e.href,"_blank"))}onChromeStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){var e;null!==(e=this.wallet)&&void 0!==e&&e.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};dt=ct([(0,c.Mo)("w3m-downloads-view")],dt)}}]);
//# sourceMappingURL=5389.chunk.js.map