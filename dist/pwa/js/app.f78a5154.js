(()=>{var e={5852:(e,t,a)=>{"use strict";a(40702),a(18964);var n=a(61957),r=a(71947),o=a(60499),l=a(59835);function s(e,t,a,n,r,o){const s=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(s)}const i=(0,l.aZ)({name:"App"});var c=a(11639);const u=(0,c.Z)(i,[["render",s]]),d=u;var p=a(23340),f=a(7363);const m=(0,p.h)((()=>{const e=(0,f.WB)();return e}));var v=a(18910);const g=[{path:"/",component:()=>Promise.all([a.e(736),a.e(969)]).then(a.bind(a,25969)),children:[{path:"",redirect:"/auth"},{path:"/auth",component:()=>Promise.all([a.e(736),a.e(532)]).then(a.bind(a,23532)),children:[{path:"/wallet/index",name:"wallet_index",component:()=>Promise.all([a.e(736),a.e(165)]).then(a.bind(a,55165))},{path:"/wallet/asset/:asset_key",name:"wallet_asset",component:()=>Promise.all([a.e(736),a.e(708)]).then(a.bind(a,60708))},{path:"/wallet/receive",name:"wallet_receive",component:()=>Promise.all([a.e(736),a.e(319)]).then(a.bind(a,14319))},{path:"/wallet/select",name:"wallet_select",component:()=>a.e(34).then(a.bind(a,84034))},{path:"/wallet/unconfirmed",name:"wallet_unconfirmed",component:()=>a.e(201).then(a.bind(a,31201))},{path:"/wallet/assets_for_buy",name:"wallet_assets_for_buy",component:()=>Promise.all([a.e(736),a.e(970)]).then(a.bind(a,75970))},{path:"/wallet/buy",name:"wallet_buy",component:()=>Promise.all([a.e(736),a.e(391)]).then(a.bind(a,35391))},{path:"/wallet/own_assets",name:"wallet_own_assets",component:()=>a.e(495).then(a.bind(a,89495))},{path:"/wallet/exchange",name:"wallet_exchange",component:()=>Promise.all([a.e(736),a.e(429)]).then(a.bind(a,89429))},{path:"/wallet/create_person",name:"create_person",component:()=>Promise.all([a.e(736),a.e(783)]).then(a.bind(a,6783))},{path:"/wallet/verify_person",name:"verify_person",component:()=>Promise.all([a.e(736),a.e(359)]).then(a.bind(a,72359))},{path:"/wallet/withdraw",name:"withdraw",component:()=>Promise.all([a.e(736),a.e(852)]).then(a.bind(a,57852))},{path:"/wallet/games/:asset_key",name:"games",component:()=>a.e(560).then(a.bind(a,46560))},{path:"/wallet/chickenbro_cbt",name:"chickenbro_cbt",component:()=>Promise.all([a.e(736),a.e(460)]).then(a.bind(a,29460))},{path:"/wallet/chickenbro_ru",name:"chickenbro_ru",component:()=>Promise.all([a.e(736),a.e(832)]).then(a.bind(a,96832))}]}]},{path:"/:catchAll(.*)*",component:()=>a.e(862).then(a.bind(a,91862))}],h=g,w=(0,p.BC)((function(){const e=v.PO,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("/")});return t}));async function b(e,t){const a=e(d);a.use(r.Z,t);const n="function"===typeof m?await m({}):m;a.use(n);const l=(0,o.Xl)("function"===typeof w?await w({store:n}):w);return n.use((({store:e})=>{e.router=l})),{app:a,store:n,router:l}}var y=a(5943),_=a(6827);const k={config:{ripple:{early:!0,color:"primary"}},lang:y.Z,plugins:{Notify:_.Z}};var x=a(70368),S=a(17779);(0,x.z)("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){S.log("New content is downloading.")},updated(){},offline(){},error(){}});var P=a(17779);let q="function"===typeof d.preFetch?d.preFetch:void 0!==d.__c&&"function"===typeof d.__c.preFetch&&d.__c.preFetch;function C(e,t){const a=e?e.matched?e:t.resolve(e).route:t.currentRoute.value;return a?Array.prototype.concat.apply([],a.matched.map((e=>Object.keys(e.components).map((t=>{const a=e.components[t];return{path:e.path,c:a}}))))):[]}function W({router:e,store:t,publicPath:a}){e.beforeResolve(((n,r,o)=>{const l=window.location.href.replace(window.location.origin,""),s=C(n,e),i=C(r,e);let c=!1;const u=s.filter(((e,t)=>c||(c=!i[t]||i[t].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>void 0!==e.c&&("function"===typeof e.c.preFetch||void 0!==e.c.__c&&"function"===typeof e.c.__c.preFetch))).map((e=>void 0!==e.c.__c?e.c.__c.preFetch:e.c.preFetch));if(!1!==q&&(u.unshift(q),q=!1),0===u.length)return o();let d=!1;const p=e=>{d=!0,o(e)},f=()=>{!1===d&&o()};u.reduce(((e,o)=>e.then((()=>!1===d&&o({store:t,currentRoute:n,previousRoute:r,redirect:p,urlPath:l,publicPath:a})))),Promise.resolve()).then(f).catch((e=>{P.error(e),f()}))}))}var H=a(17779);/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&a.e(736).then(a.t.bind(a,84848,23));const I="/";async function U({app:e,router:t,store:a},n){let r=!1;const o=e=>{try{return t.resolve(e).href}catch(a){}return Object(e)===e?null:e},l=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===r&&c<n.length;c++)try{await n[c]({app:e,router:t,store:a,ssrContext:null,redirect:l,urlPath:s,publicPath:I})}catch(i){return i&&i.url?void l(i.url):void H.error("[Quasar] boot error:",i)}!0!==r&&(e.use(t),W({router:t,store:a}),e.mount("#q-app"))}b(n.ri,k).then((e=>Promise.all([Promise.resolve().then(a.bind(a,67343)),Promise.resolve().then(a.bind(a,78027)),Promise.resolve().then(a.bind(a,98030))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));U(e,a)}))))},91569:(e,t,a)=>{"use strict";a.d(t,{h:()=>l});var n=a(23340),r=a(39981),o=a.n(r);const l=o().create({baseURL:"https://xn--k1affs.xn--p1ai"});(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=o(),e.config.globalProperties.$api=l}))},98030:(e,t,a)=>{"use strict";a.r(t),a.d(t,{era:()=>s});const{EraChain:n}=a(99407),r="https://scan.rupay.pro/api",o=9066,l={sdkMode:"SIDE",rpcPort:9077},s=new n.API(r,o,l)},78027:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(23340),r=a(43463);const o=(0,r.s)(),l={page:a(8793).Z,"page-header":a(12645).Z,"page-body":a(3407).Z,btn:a(9024).Z,"unconfirmed-tx-icon":a(3342).Z,"pin-code":a(72321).Z},s=(0,n.xr)((({app:e})=>{for(const t in l)e.component(t,l[t]),e.config.globalProperties.$globalStore=o}))},67343:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var n=a(23340),r=a(46190),o=a(23459),l=a(43463),s=a(7363),i=(a(99407),a(98030),a(87270),a(17779));(0,o.Q)(),a(40425);const c=(0,s.Q_)("ws",(()=>{let e=null;async function t(t){return e=new WebSocket("ws://localhost:8000/ws/user/online"),e.onopen=()=>{i.log("ws connected",t),e.send(JSON.stringify({wallet:t})),e.onmessage=e=>{i.log("message",JSON.parse(e.data));JSON.parse(e.data)}},Promise.resolve("Success")}return{connectWS:t}})),u=(0,r.c)(),d=(0,o.Q)(),p=(0,l.s)(),f=(c(),(0,n.xr)((async({app:e,store:t,router:a})=>{const n=localStorage.getItem("addresses"),r=localStorage.getItem("hash");d.seed||await a.push("/auth"),r||(await u.wipeInfo(),await a.push("/auth")),p.getVersion(),n&&(await u.setAddresses(),await d.getAssets(),d.startCheckUnconfirmTx()),initComplete(),e.config.globalProperties.$global=p,e.config.globalProperties.$filters={convertAmount(e){return e.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2})}}})))},76028:(e,t,a)=>{"use strict";a.d(t,{AU:()=>i,GT:()=>g,lU:()=>c,mZ:()=>l,rK:()=>f,sg:()=>m,un:()=>v,ye:()=>s});a(99407),a(98030);var n=a(39981),r=a.n(n),o=a(17779);const l=async e=>await r().get(`https://scan.rupay.pro/api/addressassets/${e}`),s=async()=>{const e=await r().get("https://scan.rupay.pro/apiexchange/spot/list");return e.data},i=async(e,t)=>{const a=await r().get(`https://scan.rupay.pro/apiexchange/ordersbook/${e}/${t}?limit=500`);return a.data},c=async e=>{const t=await r().get(`https://scan.rupay.pro/apiexchange/order/${e}`);return t.data},u=async(e,t,a)=>await r().get(`https://scan.rupay.pro/api/tx/find?address=${e}&desc=true&limit=${t}&offset=${a}`);async function d(e,t=0){if(0===t){const t=await r().get(`https://scan.rupay.pro/apiexchange/allordersbyaddress/${e}`);return t.data}{const a=await r().get(`https://scan.rupay.pro/apiexchange/allordersbyaddress/${e}/${t}`);return a.data}}function p(e){return 50===e.length&&e[49].id}const f=async e=>{let t=await d(e),a=p(t);if(a)do{let n=await d(e,a);t=t.concat(n),a=p(t)}while(a);return t},m=async(e,t,a,n)=>{let r=[],l=[];const s=await u(e,a,n),i=s.data.filter((e=>e.assetKey===t));for(let c in i)o.log(c),i[c].fullDate=new Date(i[c].timestamp).toLocaleString(),i[c].timestamp=new Date(i[c].timestamp).toLocaleDateString();return l=[],r=l.concat(i),r},v=async e=>await r().get(`https://scan.rupay.pro/apiasset/${e}`),g=async e=>await r().get(`https://scan.rupay.pro/api/tx/unconfirmed?address=${e}`)},87270:(e,t,a)=>{"use strict";a.d(t,{Q:()=>l,d:()=>o});var n=a(65054),r=a(6827);function o(e,t){r.Z.create({message:t,timeout:1e3,html:!0,color:e,position:"bottom"})}async function l(e,t,a){await(0,n.Z)(e),o(t,a)}},46190:(e,t,a)=>{"use strict";a.d(t,{c:()=>d});a(40702);var n=a(7363),r=a(60499),o=a(23459),l=a(76028),s=a(99407),i=a(98030),c=a(91569),u=a(17779);const d=(0,n.Q_)("account",(()=>{const e=(0,o.Q)();let t=(0,r.iH)([]),a=(0,r.iH)([]),n=(0,r.iH)(0),d=(0,r.iH)(null),p=(0,r.iH)([]);function f(){var e,a;return null!==(e=t.value[null!==(a=n.value)&&void 0!==a?a:0].publicKey)&&void 0!==e?e:null}function m(e){n.value=e,localStorage.setItem("currentAddressIdx",e)}function v(){localStorage.removeItem("addresses")}function g(){localStorage.removeItem("addresses"),t.value=[],a.value=[],n.value=0,d.value=null,p.value=[]}async function h(e){const t=await i.era.getPersonByAddress(e);return t.error?d.value=null:d.value=t,Promise.resolve("Success")}async function w(){const a=await e.getKeyPair(t.value.length),n=await s.EraChain.Base58.encode(a.publicKey),r=await s.EraChain.Crypt.addressByPublicKey(a.publicKey);return t.value.push({address:r,publicKey:n,name:null}),localStorage.setItem("addresses",JSON.stringify(t.value)),await h(r),Promise.resolve("Success")}async function b(){var e,r;const o=await(0,l.mZ)(null!==(e=t.value[null!==(r=n.value)&&void 0!==r?r:0].address)&&void 0!==e?e:null);a.value=o.data;const s=Object.keys(a.value),i=await c.h.get("/api/settings/assets"),d=i.data;for(let t of s){let e=await(0,l.un)(t);e.data.error?u.log("getAsset error. Asset key:",t):"Digital asset"===e.data.type_name?0===p.value.filter((t=>t.key===e.data.key)).length&&(d.filter((e=>e.key===parseInt(t))).length>0?(e.data.course=d.find((e=>e.key===parseInt(t))).course,e.data.course_api=d.find((e=>e.key===parseInt(t))).course_api,p.value.push(e.data)):u.log("add course error. Asset key:",t)):u.log("skip nft")}return Promise.resolve("Success")}async function y(){return t.value=[],t.value.length||(await w(),m(0)),Promise.resolve("Success")}async function _(){const e=localStorage.getItem("addresses");return t.value=JSON.parse(e),await h(t.value[0].address),await b(),Promise.resolve("Success")}return{addresses:t,balances:a,currentAddressIdx:n,verifyPersonData:d,currentPublicKey:f,assets:p,firstAddress:y,getBalances:b,setAddresses:_,clearInfo:v,wipeInfo:g}}))},96928:(e,t,a)=>{"use strict";a.d(t,{t:()=>i});var n=a(7363),r=a(60499),o=a(23459),l=a(46190),s=a(18910);const i=(0,n.Q_)("auth",(()=>{const e=(0,o.Q)(),t=(0,l.c)(),a=(0,s.tv)();let n=(0,r.iH)(null),i=(0,r.iH)(!1);async function c(a,r){e.setSeed(a),i.value=!0,n.value=r;const o=localStorage.getItem("hash");return o||localStorage.setItem("hash",r),await e.getAssets(),await t.firstAddress(),await t.getBalances(),e.startCheckUnconfirmTx(),Promise.resolve("Success")}async function u(){return localStorage.removeItem("hash"),localStorage.removeItem("seed"),t.clearInfo(),e.stopCheckUnconfirmTx(),await a.push("/"),await a.go(),Promise.resolve("Success")}return{hash:n,seedStatus:i,login:c,logout:u}}))},23459:(e,t,a)=>{"use strict";a.d(t,{Q:()=>u});a(40702),a(46727);var n=a(7363),r=a(99407),o=a(60499),l=a(76028),s=a(87270),i=a(46190),c=a(91569);a(39981);const u=(0,n.Q_)("era_store",(()=>{const e=(0,o.iH)([{from:1643,to:2,comission:.05},{from:2,to:1,comission:0},{from:1,to:2,comission:.15}]),t=[{have:2,want:1,price:0,reversePrice:0,seqNo:"46649-1"},{have:1,want:2,price:0,reversePrice:0,seqNo:"46648-1"}],a=(0,o.iH)([]);let n=(0,o.iH)([]),u=(0,o.iH)([]);(0,o.iH)([]);const d=(0,i.c)();let p=(0,o.iH)(!1),f=(0,o.iH)(null),m=(0,o.iH)(null),v=(0,o.iH)(null),g=(0,o.iH)(null),h=(0,o.iH)(0),w=(0,o.iH)([]),b=(0,o.iH)([]);async function y(e){f.value=e}async function _(e){m.value=e}function k(){clearInterval(g.value)}async function x(){const e=await c.h.get("/api/settings/assets");a.value=e.data}async function S(){const e=await c.h.get("/api/settings/get_courses"),t=Object.keys(e.data);for(let n of a)t.includes(String(n.key))&&(n.course=e.data[n.key])}async function P(){for(let e in t){const a=await(0,l.lU)(t[e].seqNo);t[e].price=a.priceReverse,t[e].reversePrice=a.price}}function q(){g.value=setInterval((async function(){const e=await(0,l.GT)(d.addresses[d.currentAddressIdx].address);w.value=e.data,w.value.length>0&&(p.value=!0);for(let t of w.value)b.value.includes(t.timestamp)||(b.value.push(t.timestamp),(0,s.d)("positive","Транзакция обрабатывается"));p.value&&0===w.value.length&&(p.value=!1,b.value=[],await d.getBalances(),(0,s.d)("positive","Транзакции обработаны"))}),15e3)}async function C(){n.value=await(0,l.ye)()}async function W(e=h.value){const t=await r.EraChain.Crypt.generateAccountSeed(f.value,e);return r.EraChain.Crypt.getKeyPairFromSeed(t)}async function H(e=h.value){const t=await r.EraChain.Crypt.generateAccountSeed(m.value,e);return r.EraChain.Crypt.getKeyPairFromSeed(t)}return{getKeyPair:W,setSeed:y,startCheckUnconfirmTx:q,getAssetsCourse:S,setTradePairs:C,getMarketExchangeOrders:P,stopCheckUnconfirmTx:k,getAssets:x,getKeyPairForAddBalance:H,setSessionID:_,seed:f,session_id:m,address:v,addressIdx:h,unconfirmedTx:w,assets:a,exchange:e,trade_pairs:n,marketExchange:t,trade_pairs_v24:u}}))},43463:(e,t,a)=>{"use strict";a.d(t,{s:()=>o});var n=a(7363),r=a(60499);a(91569);const o=(0,n.Q_)("global",(()=>{let e=(0,r.iH)(!1),t=(0,r.iH)(!1),a=(0,r.iH)(!1),n=(0,r.iH)(!1),o=(0,r.iH)(!1),l=(0,r.iH)(!1),s=(0,r.iH)(!1),i=(0,r.iH)(!1),c=(0,r.iH)(!1),u=(0,r.iH)(null);function d(){e.value=!e.value}function p(){c.value=!c.value}function f(){t.value=!t.value}function m(e){i.value=e}function v(){o.value=!o.value}function g(){a.value=!a.value}function h(){n.value=!n.value}async function w(){navigator.serviceWorker.getRegistrations().then((function(e){u.value=setInterval((function(){e[0].update()}),15e3)}))}return{is_loading:e,transactionInfoModalVisible:t,sendAssetModalVisible:a,isPageHidden:l,needUpdate:s,tradeModalVisible:n,pinCodeModalVisible:o,isPinOk:i,isBlur:c,toggleLoadingState:d,toggleTransactionInfoModalVisible:f,toggleSendAssetModalVisible:g,toggleTradeModalVisible:h,togglePinCodeModalVisible:v,setPinOk:m,getVersion:w,toggleIsBlur:p}}))},72321:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});a(18964),a(12809);var n=a(59835),r=a(86970),o=a(60499),l=a(87270),s=a(17779);const i={key:0,class:"text-center text-weight-medium"},c={key:1,class:"text-center text-weight-medium"},u={class:"text-center q-gutter-md q-mb-lg"},d={class:"number-grid"},p={class:"number"},f={__name:"PinCode",props:{showDigits:Boolean},emits:["pincode_ready"],setup(e,{emit:t}){const a=e;let f=(0,o.iH)([11,11,11,11]),m=(0,o.iH)([11,11,11,11]),v=(0,o.iH)(0),g=(0,o.iH)("init");const h=(0,o.iH)([1,2,3,4,5,6,7,8,9,0]);function w(){0!==v.value&&("init"===g.value?f.value[v.value-1]=11:m.value[v.value-1]=11,v.value-=1)}function b(e){if(s.log(),v.value<=3&&("init"===g.value?f.value[v.value]=e:m.value[v.value]=e,v.value+=1),4===v.value)if(a.showDigits)if("init"===g.value)g.value="repeat",v.value=0;else{const e=f.value.join(),a=m.value.join();s.log(e),s.log(a),s.log(e===a),e===a?t("pincode_ready",f.value.join().replaceAll(",","")):(g.value="init",v.value=0,f.value=[11,11,11,11],m.value=[11,11,11,11],(0,l.d)("negative","Пинкоды не совпадают"))}else t("pincode_ready",f.value.join().replaceAll(",",""))}return(t,a)=>{const l=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.iD)(n.HY,null,[e.showDigits?((0,n.wg)(),(0,n.iD)("p",i,(0,r.zw)("init"===(0,o.SU)(g)?"Придумайте пинкод":"Повторите пинкод"),1)):((0,n.wg)(),(0,n.iD)("p",c,"Введите пинкод")),(0,n._)("div",u,[e.showDigits?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)("init"===(0,o.SU)(g)?(0,o.SU)(f):(0,o.SU)(m),((e,t)=>((0,n.wg)(),(0,n.j4)(l,{size:"15px",round:"",outline:"",flat:"",disable:"",key:"init"===(0,o.SU)(g)?t:t+30,label:11===e?"⚬":e},null,8,["label"])))),128)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)((0,o.SU)(f),(e=>((0,n.wg)(),(0,n.j4)(l,{size:"15px",flat:"",round:"",outline:"",disable:"",key:e,label:11===e?"⚬":"✳"},null,8,["label"])))),128))]),(0,n._)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.value,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"number",key:e},[(0,n.Wm)(l,{onClick:t=>b(e),size:"18px",round:"",unelevated:"",color:"grey-3","text-color":"dark",label:e},null,8,["onClick","label"])])))),128)),(0,n._)("div",p,[(0,n.Wm)(l,{onClick:w,size:"18px",round:"",unelevated:"",color:"grey-9",flat:"",icon:"las la-backspace"})])])],64)}}};var m=a(24455),v=a(69984),g=a.n(v);const h=f,w=h;g()(f,"components",{QBtn:m.Z})},9024:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(59835);function r(e,t,a,r,o,l){const s=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)(s,{rounded:"",unelevated:"","no-caps":"",color:"primary",loading:a.is_loading,class:"q-py-md full-width",outline:a.outline,label:a.label},null,8,["loading","outline","label"])}const o={name:"Button",props:{label:{type:String,required:!0},is_loading:{type:Boolean,required:!1,default:!1},outline:{type:Boolean,required:!1,default:!0}}};var l=a(11639),s=a(24455),i=a(69984),c=a.n(i);const u=(0,l.Z)(o,[["render",r]]),d=u;c()(o,"components",{QBtn:s.Z})},3342:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var n=a(59835),r=a(60499),o=a(86970),l=a(23459);const s={__name:"UnconfirmedTxIcon",setup(e){const t=(0,l.Q)(),a=(0,n.Fl)((()=>t.unconfirmedTx));return(e,t)=>{const l=(0,n.up)("q-icon"),s=(0,n.up)("q-badge");return(0,r.SU)(a).length>0?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"unconfirmed-icon",onClick:t[0]||(t[0]=t=>e.$router.push({name:"wallet_unconfirmed"}))},[(0,n.Wm)(l,{name:"las la-sync",color:"white",size:"26px",class:"rotate"}),(0,n.Wm)(s,{color:"white",rounded:"","text-color":"dark"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)((0,r.SU)(a).length),1)])),_:1})])):(0,n.kq)("",!0)}}};var i=a(22857),c=a(20990),u=a(69984),d=a.n(u);const p=s,f=p;d()(s,"components",{QIcon:i.Z,QBadge:c.Z})},3407:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(59835),r=a(61957);const o={class:"page-body full-height"};function l(e,t,a,l,s,i){const c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.WI)(e.$slots,"default"),(0,n.Wm)(c,null,{default:(0,n.w5)((({Component:e})=>[(0,n.Wm)(r.uT,{appear:"","enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)((0,n.LL)(e)))])),_:2},1024)])),_:1})])}const s={name:"PageBody",props:["background"],setup(){}};var i=a(11639);const c=(0,i.Z)(s,[["render",l]]),u=c},12645:(e,t,a)=>{"use strict";a.d(t,{Z:()=>B});var n=a(59835),r=a(86970),o=a(60499),l=a(39981),s=a.n(l),i=a(87270),c=a(43463),u=a(46190),d=a(96928),p=a(18910);const f=["src"],m=(0,n._)("p",{class:"text-negative text-bold q-mb-sm"},"Ваш счет является анонимным. Для разблокировки всего функционала создайте персону и верифицируйте счет",-1),v=(0,n._)("a",{class:"q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-blue-7 text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase q-btn--active",tabindex:"0",href:"https://t.me/verify_RUpaybot",target:"_blank"},[(0,n._)("span",{class:"q-focus-helper",tabindex:"-1"}),(0,n._)("span",{class:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[(0,n._)("i",{class:"q-icon on-left lab la-telegram","aria-hidden":"true",role:"img"}),(0,n._)("span",{class:"block"},"Бот для верификации")])],-1),g={class:"text-caption q-mb-none ellipsis"},h=(0,n.Uk)("Адрес кошелька"),w=(0,n.Uk)("Верифицировать пользователя"),b=(0,n.Uk)("Выход"),y=(0,n.Uk)("Подтвердить кошелек для регистрации в игре ChickenBro"),_={__name:"Header",setup(e){const t="https://astraz.ru",a=((0,c.s)(),(0,u.c)()),l=(0,p.tv)(),_=(0,d.t)(),k=(0,o.iH)(!1),x=(0,o.iH)(!1),S="0.01",P="https://scan.rupay.pro";async function q(){await(0,i.Q)(C.value,"positive","Адрес кошелька скопирован")}const C=(0,n.Fl)((()=>a.addresses[0].address)),W=(0,n.Fl)((()=>a.verifyPersonData));async function H(){const e=await s().post(t+"/api/user/check_address",{wallet:C.value,confim:!0});e.data.success?(x.value=!1,(0,i.d)("positive","Кошелек подтвержден, можете продолжить регистрацию")):(0,i.d)("negative","Ошибка подтверждения кошелька")}async function I(){await _.logout(),await l.push("/")}return(0,n.wF)((async()=>{const e=await s().post(t+"/api/user/check_address",{wallet:C.value,get:!0});x.value=!e.data.is_confirm})),(e,t)=>{const a=(0,n.up)("q-btn"),s=(0,n.up)("q-toolbar-title"),i=(0,n.up)("unconfirmed-tx-icon"),c=(0,n.up)("q-icon"),u=(0,n.up)("q-badge"),d=(0,n.up)("q-toolbar"),p=(0,n.up)("q-header"),_=(0,n.up)("q-item-section"),U=(0,n.up)("q-item"),Z=(0,n.up)("q-avatar"),j=(0,n.up)("q-item-label"),A=(0,n.up)("q-separator"),O=(0,n.up)("q-list"),Q=(0,n.up)("q-banner"),D=(0,n.up)("q-drawer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(p,{class:(0,r.C_)(["text-white items-center flex justify-between",{"bg-tr":"/wallet/index"===e.$route.path}])},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{class:"q-pl-none"},{default:(0,n.w5)((()=>["/wallet/index"!==e.$route.path?((0,n.wg)(),(0,n.j4)(a,{key:0,label:"Назад","no-caps":"",unelevated:"","text-color":"white",onClick:t[0]||(t[0]=t=>e.$router.back()),icon:"las la-angle-left"})):(0,n.kq)("",!0),(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"title")])),_:3}),(0,n.Wm)(i),(0,n.Wm)(a,{flat:"",round:"",dense:"",icon:"las la-bars",onClick:t[1]||(t[1]=e=>k.value=!k.value),class:"q-ml-md"},{default:(0,n.w5)((()=>[x.value?((0,n.wg)(),(0,n.j4)(u,{key:0,rounded:"",floating:"",color:"negative"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{size:"10px",name:"priority_high"})])),_:1})):(0,n.kq)("",!0)])),_:1})])),_:3})])),_:3},8,["class"]),(0,n.Wm)(D,{modelValue:k.value,"onUpdate:modelValue":t[5]||(t[5]=e=>k.value=e),"show-if-above":"",bordered:"",side:"right",class:"q-py-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(O,{separator:"",class:"text-dark"},{default:(0,n.w5)((()=>[(0,n.Wm)(U,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_),(0,n.Wm)(_,{side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{round:"","text-color":"primary",icon:"las la-times-circle",unelevated:"",onClick:t[2]||(t[2]=e=>k.value=!k.value)})])),_:1})])),_:1}),(0,o.SU)(W)?((0,n.wg)(),(0,n.j4)(U,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Z,null,{default:(0,n.w5)((()=>[(0,n._)("img",{src:(0,o.SU)(P)+(0,o.SU)(W).maker_image},null,8,f)])),_:1})])),_:1}),(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(j,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)((0,o.SU)(W).maker_name),1)])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0),(0,o.SU)(W)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(U,{key:1,class:"block"},{default:(0,n.w5)((()=>[m,(0,n.Wm)(a,{label:"Создать персону",color:"blue-7",onClick:t[3]||(t[3]=e=>(0,o.SU)(l).push({name:"create_person"})),icon:"las la-user-plus","no-caps":"",unelevated:""})])),_:1})),(0,o.SU)(W)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(U,{key:2,class:"block"},{default:(0,n.w5)((()=>[v])),_:1})),(0,n.Wm)(U,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(j,{overline:""},{default:(0,n.w5)((()=>[(0,n._)("p",g,(0,r.zw)((0,o.SU)(C)),1)])),_:1}),(0,n.Wm)(j,{caption:""},{default:(0,n.w5)((()=>[h])),_:1})])),_:1}),(0,n.Wm)(_,{side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{color:"blue-7",onClick:q,round:"",dense:"",unelevated:"",icon:"las la-clipboard"})])),_:1})])),_:1}),(0,o.SU)(W)?((0,n.wg)(),(0,n.j4)(U,{key:3,clickable:"",onClick:t[4]||(t[4]=e=>(0,o.SU)(l).push({name:"verify_person"}))},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{size:"20px",name:"las la-id-card"})])),_:1}),(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[w])),_:1})])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(U,{clickable:"",onClick:I,class:"text-negative"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{size:"20px",name:"las la-sign-out-alt"})])),_:1}),(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[b])),_:1})])),_:1}),(0,n.Wm)(A),x.value?((0,n.wg)(),(0,n.j4)(U,{key:4,clickable:"",onClick:H,class:"text-positive"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{size:"20px",name:"las la-gamepad"})])),_:1}),(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[y])),_:1})])),_:1})):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(Q,{class:"bg-blue-7 absolute-bottom"},{default:(0,n.w5)((()=>[(0,n.Uk)("RUPAY Wallet - Версия "+(0,r.zw)((0,o.SU)(S)),1)])),_:1})])),_:1},8,["modelValue"])],64)}}};var k=a(16602),x=a(51663),S=a(24455),P=a(81973),q=a(20990),C=a(22857),W=a(10906),H=a(13246),I=a(490),U=a(76749),Z=a(61357),j=a(33115),A=a(50926),O=a(47128),Q=a(69984),D=a.n(Q);const T=_,B=T;D()(_,"components",{QHeader:k.Z,QToolbar:x.Z,QBtn:S.Z,QToolbarTitle:P.Z,QBadge:q.Z,QIcon:C.Z,QDrawer:W.Z,QList:H.Z,QItem:I.Z,QItemSection:U.Z,QAvatar:Z.Z,QItemLabel:j.Z,QSeparator:A.Z,QBanner:O.Z})},8793:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(59835),r=a(86970),o=a(60499),l=a(43463);const s={__name:"Page",setup(e){const t=(0,l.s)();return(e,a)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,r.C_)(["page absolute-top fit bg-white",{hidden:(0,o.SU)(t).isPageHidden}])},[(0,n.WI)(e.$slots,"default")],2))}};var i=a(11639);const c=(0,i.Z)(s,[["__scopeId","data-v-9164f80a"]]),u=c},80950:()=>{},46601:()=>{},89214:()=>{},8623:()=>{},42480:()=>{},7748:()=>{},85568:()=>{},56619:()=>{},77108:()=>{},52361:()=>{},94616:()=>{},55024:()=>{}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,(()=>{var e=[];a.O=(t,n,r,o)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,r,o]=e[u],s=!0,i=0;i<n.length;i++)(!1&o||l>=o)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(s=!1,o<l&&(l=o));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var o=Object.create(null);a.r(o);var l={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>l[e]=()=>n[e]));return l["default"]=()=>n,a.d(o,l),o}})(),(()=>{a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{34:"4d4cb828",165:"5a191f3c",201:"7644e272",319:"335704d2",359:"9cc0c155",391:"992da6b8",429:"17642c9f",460:"11db6957",495:"7726da0d",532:"fb8987da",560:"8083a8c7",708:"64fb8bba",783:"0f94ff49",832:"63a9a3af",852:"2feec84e",862:"62ed9180",969:"c6b0d69b",970:"01d3827b"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"1601cf6d",165:"7e9cd45b",319:"2aaf6d0e",359:"fb63fb52",391:"2aaf6d0e",429:"cf954619",532:"266e8c68",708:"da36b6cc",736:"4c1ba8fe",783:"fb63fb52",852:"2aaf6d0e",969:"4048f7f4"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="rolf-wallet:";a.l=(n,r,o,l)=>{if(e[n])e[n].push(r);else{var s,i;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[r];var p=(t,a)=>{s.onerror=s.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(a))),t)return t(a)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),i&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{a.p="/"})(),(()=>{var e=(e,t,a,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=o=>{if(r.onerror=r.onload=null,"load"===o.type)a();else{var l=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=l,i.request=s,r.parentNode.removeChild(r),n(i)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=a[n],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var l=document.getElementsByTagName("style");for(n=0;n<l.length;n++){r=l[n],o=r.getAttribute("data-href");if(o===e||o===t)return r}},n=n=>new Promise(((r,o)=>{var l=a.miniCssF(n),s=a.p+l;if(t(l,s))return r();e(n,s,r,o)})),r={143:0};a.f.miniCss=(e,t)=>{var a={165:1,319:1,359:1,391:1,429:1,532:1,708:1,783:1,852:1,969:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=n(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((a,n)=>r=e[t]=[a,n]));n.push(r[2]=o);var l=a.p+a.u(t),s=new Error,i=n=>{if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",s.name="ChunkLoadError",s.type=o,s.request=l,r[1](s)}};a.l(l,i,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[l,s,i]=n,c=0;if(l.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var u=i(a)}for(t&&t(n);c<l.length;c++)o=l[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=a.O(void 0,[736],(()=>a(5852)));n=a.O(n)})();