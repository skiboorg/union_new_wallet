"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[429],{89429:(e,a,l)=>{l.r(a),l.d(a,{default:()=>La});l(46727),l(40702),l(18964);var t=l(59835),n=l(60499),u=l(86970),o=l(61957),s=l(76028),i=l(23459),r=l(98030),d=l(91569),c=l(46190),m=l(43463),p=l(6827),v=(l(39981),l(18910)),w=l(66195),g=l.n(w),_=l(82341),f=l.n(_),y=l(95563),U=l.n(y),x=l(17779);const h={class:"flex items-center"},b=["src"],k={class:"no-margin text-weight-medium"},S=(0,t._)("p",{class:"q-mb-none q-px-sm text-weight-medium"},"/",-1),W=["src"],q={class:"no-margin text-weight-medium"},z=(0,t._)("div",{class:"",style:{height:"60px"}},null,-1),H={class:"row q-col-gutter-sm"},V={class:"col-4"},Q={key:0,class:"no-margin text-bold text-h6"},Z={key:1,class:"no-margin text-bold text-h6 text-positive"},F={class:"col-8"},C={class:"row q-col-gutter-xs text-caption"},j={class:"col-5"},P=(0,t._)("span",{class:"text-grey-7"},"Макс за 24ч",-1),A=(0,t._)("br",null,null,-1),K=(0,t._)("br",null,null,-1),D=(0,t._)("span",{class:"text-grey-7"},"Мин за 24ч",-1),O=(0,t._)("br",null,null,-1),T={class:"col-6"},Y={class:"text-grey-7 ellipsis q-mb-none"},$=(0,t._)("br",null,null,-1),I={class:"text-grey-7 ellipsis q-mb-none"},B=(0,t._)("br",null,null,-1),L={class:"flex items-center no-wrap q-mb-md"},N=(0,t._)("br",null,null,-1),M=(0,t._)("br",null,null,-1),E={class:"text-caption q-mb-sm"},R=(0,t._)("p",{class:"text-caption q-mb-sm"},"Цена за единицу",-1),G=(0,t._)("p",{class:"text-caption q-mb-sm"},"Итого",-1),J={key:0,class:"full-width"},X={class:""},ee={class:"row q-col-gutter-sm"},ae={class:"col-6"},le={class:"orders-grid"},te=(0,t._)("div",{class:"flex items-center justify-between"},[(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Цена"),(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Объем")],-1),ne={class:"no-margin price-red-color text-10 text-weight-medium"},ue={class:"no-margin vol-color text-10 text-weight-medium"},oe={class:"col-6"},se={class:"orders-grid"},ie=(0,t._)("div",{class:"flex items-center justify-between"},[(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Цена"),(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Объем")],-1),re={class:"no-margin price-green-color text-10 text-weight-medium"},de={class:"no-margin vol-color text-10 text-weight-medium"},ce={class:"col-6"},me={class:"flex items-center justify-between"},pe=(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Всего",-1),ve={class:"no-margin text-10 vol-color text-weight-medium"},we={class:"col-6"},ge={class:"flex items-center justify-between"},_e=(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Всего",-1),fe={class:"no-margin text-10 vol-color text-weight-medium"},ye=(0,t.Uk)(" Подтверждение транзакции создании ордера "),Ue=(0,t.Uk)("Имею"),xe=(0,t.Uk)("Хочу"),he=(0,t.Uk)("Комиссия");f().setOptions({rangeSelector:{dropdownLabel:["Масштаб"],buttons:[{type:"month",count:1,text:"1м",title:"1 мес"},{type:"month",count:3,text:"3м",title:"3 мес"},{type:"month",count:6,text:"6м",title:"6 мес"},{type:"ytd",text:"С начала года",title:"С начала года"},{type:"year",count:1,text:"1г",title:"1 год"},{type:"all",text:"Все",title:"Показать всё"}]},lang:{shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],weekdays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]}}),U()(f());const be={name:"StockChart",components:{VueHighcharts:g()}},ke=Object.assign(be,{props:{tradePair:Object},setup(e){const a=e,l=(0,m.s)(),o=(0,i.Q)(),w=(0,c.c)(),_=((0,v.tv)(),(0,t.Fl)((()=>o.assets)),(0,t.Fl)((()=>w.balances)));let f=(0,n.iH)([]),y=(0,n.iH)({}),U=(0,n.iH)({}),be=(0,n.iH)("buy"),ke=(0,n.iH)(null),Se=(0,n.iH)(null),We=(0,n.iH)(null),qe=(0,n.iH)(!1),ze=(0,n.iH)(!1),He=(0,n.iH)({}),Ve=(0,n.iH)(0),Qe=(0,n.iH)(0),Ze=(0,n.iH)(0),Fe=(0,n.iH)({}),Ce=(0,n.iH)([]),je=(0,n.iH)({rangeSelector:{selected:1},locale:"ru",title:{text:""},series:[{name:"",data:[]}]});const Pe={11:"Недостаточно средств на балансе",66:"Минимальная стоимость ордера 280руб"};function Ae(){x.log(ke.value),ke.value||(We.value=null,Se.value=null),Se.value&&(We.value=ke.value*Se.value)}function Ke(){Ze.value=0,Qe.value=0,be.value="buy",ke.value=null,Se.value=null,We.value=null,je.value.series[0].data=[],Ce.value=[]}function De(){x.log(y.value),x.log(U.value),x.log(Ve.value),Ve.value>0&&"sell"===be.value&&(x.log(y.value.course/U.value.course),Se.value>y.value.course/U.value.course?x.log("more"):Se.value=y.value.course/U.value.course),ke.value&&(We.value=ke.value*Se.value)}function Oe(){x.log(We.value),Se.value&&(ke.value=We.value/Se.value)}async function Te(){const e=await o.getKeyPair(),a="buy"===be.value?U.value.key:y.value.key,l="buy"===be.value?We.value:ke.value,t="buy"===be.value?y.value.key:U.value.key,n="buy"===be.value?ke.value:We.value;x.log("have",a),x.log("want",t),x.log("haveAmount",l),x.log("wantAmount",n),await r.era.tranRawOrder(e,"name",a,l,t,n,!0).then((e=>{He.value=e,x.log(He.value),qe.value=!0}))}async function Ye(){ze.value=!ze.value;const e=await r.era.broadcast64(He.value.raw);x.log(e),e.error?p.Z.create({color:"negative",message:Pe[e.error]}):p.Z.create({color:"info",message:"Транзакция отправлена в сеть"}),qe.value=!1,ze.value=!ze.value}function $e(e){ke.value=e.pairAmount,Se.value=e.pairPrice,We.value=e.pairAmount*e.pairPrice,be.value="sell"}function Ie(e){ke.value=e.pairAmount,Se.value=e.pairPrice,We.value=e.pairAmount*e.pairPrice,be.value="buy"}async function Be(){y.value=o.assets.find((e=>e.key===a.tradePair["0"])),U.value=o.assets.find((e=>e.key===a.tradePair["1"])),f.value=await(0,s.AU)(a.tradePair["0"],a.tradePair["1"]),Ve.value=y.value.min_trade_price;for(let a of f.value.have)Qe.value+=parseFloat(a.leftHave);for(let a of f.value.want)Ze.value+=parseFloat(a.leftWant);const e=await d.h.get(`/api/settings/volume?q_key=${U.value.key}&b_key=${y.value.key}`);Fe.value=e.data;const l=await d.h.get(`https://scan.rupay.pro/apiexchange/trades/${y.value.key}/${U.value.key}`);for(let a of l.data.reverse())Ce.value.push([a.timestamp,a.price]);je.value.series[0].data=Ce.value,je.value.series[0].name=`${y.value.name}/${U.value.name}`,x.log(Ce.value)}return(0,t.YP)(be,(e=>{ke.value=null,Se.value=null,We.value=null})),(e,a)=>{const o=(0,t.up)("q-btn"),s=(0,t.up)("q-avatar"),i=(0,t.up)("q-header"),r=(0,t.up)("q-separator"),d=(0,t.up)("q-input"),c=(0,t.up)("q-linear-progress"),m=(0,t.up)("q-card-section"),p=(0,t.up)("q-card"),v=(0,t.up)("q-dialog"),w=(0,t.up)("q-item-section"),x=(0,t.up)("q-item"),Ve=(0,t.up)("q-list"),Ce=(0,t.up)("q-card-actions"),Pe=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(v,{modelValue:(0,n.SU)(l).tradeModalVisible,"onUpdate:modelValue":a[6]||(a[6]=e=>(0,n.SU)(l).tradeModalVisible=e),persistent:"",maximized:"","transition-show":"slide-left","transition-hide":"slide-right",onBeforeShow:Be,onBeforeHide:Ke},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"bg-white"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{style:{"padding-right":"16px"},reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(o,{label:"Назад","no-caps":"",icon:"las la-angle-left",unelevated:""},null,512),[[Pe]]),(0,t._)("div",h,[(0,t.Wm)(s,{size:"30px",class:"q-mr-sm"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,n.SU)(y).icon,alt:""},null,8,b)])),_:1}),(0,t._)("p",k,(0,u.zw)((0,n.SU)(y).name),1),S,(0,t.Wm)(s,{size:"30px",class:"q-mr-sm"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,n.SU)(U).icon,alt:""},null,8,W)])),_:1}),(0,t._)("p",q,(0,u.zw)((0,n.SU)(U).name),1)])])),_:1}),z,(0,t.Wm)(m,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t._)("div",H,[(0,t._)("div",V,["OLF"!==(0,n.SU)(y).name?((0,t.wg)(),(0,t.iD)("p",Q,(0,u.zw)(parseFloat((0,n.SU)(Fe).last_price).toFixed(4)),1)):((0,t.wg)(),(0,t.iD)("p",Z,(0,u.zw)((0,n.SU)(y).course),1))]),(0,t._)("div",F,[(0,t._)("div",C,[(0,t._)("div",j,[P,A,(0,t.Uk)(" "+(0,u.zw)(parseFloat((0,n.SU)(Fe).highest_price_24h).toFixed(2)),1),K,D,O,(0,t.Uk)(" "+(0,u.zw)(parseFloat((0,n.SU)(Fe).lowest_price_24h).toFixed(2)),1)]),(0,t._)("div",T,[(0,t._)("p",Y,"Объем за 24ч ("+(0,u.zw)((0,n.SU)(y).name)+")",1),(0,t.Uk)(" ~"+(0,u.zw)(parseFloat((0,n.SU)(Fe).base_volume_24).toFixed(2)),1),$,(0,t._)("p",I,"Объем за 24ч ("+(0,u.zw)((0,n.SU)(U).name)+")",1),(0,t.Uk)(" ~"+(0,u.zw)(parseFloat((0,n.SU)(Fe).quote_volume_24).toFixed(2)),1),B])])])]),(0,t.Wm)(r,{spaced:"md"}),(0,t._)("div",L,[(0,t.Wm)(o,{unelevated:"","no-caps":"",class:"bye-btn full-width q-py-sm",color:"buy"===(0,n.SU)(be)?"positive":"grey-5",onClick:a[0]||(a[0]=e=>(0,n.dq)(be)?be.value="buy":be="buy")},{default:(0,t.w5)((()=>[(0,t.Uk)(" Купить "+(0,u.zw)((0,n.SU)(y).name)+" за",1),N,(0,t.Uk)(" "+(0,u.zw)((0,n.SU)(U).name),1)])),_:1},8,["color"]),(0,t.Wm)(o,{color:"sell"===(0,n.SU)(be)?"negative":"grey-5",unelevated:"",class:"sell-btn full-width q-py-sm","no-caps":"",onClick:a[1]||(a[1]=e=>(0,n.dq)(be)?be.value="sell":be="sell")},{default:(0,t.w5)((()=>[(0,t.Uk)(" Продать "+(0,u.zw)((0,n.SU)(y).name)+" за",1),M,(0,t.Uk)(" "+(0,u.zw)((0,n.SU)(U).name),1)])),_:1},8,["color"])]),(0,t._)("p",E,(0,u.zw)("buy"===(0,n.SU)(be)?"Кол-во к покупке":"Кол-во к продаже"),1),(0,t.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(ke),"onUpdate:modelValue":a[3]||(a[3]=e=>(0,n.dq)(ke)?ke.value=e:ke=e),onKeyup:Ae,type:"number"},{append:(0,t.w5)((()=>["sell"===(0,n.SU)(be)?((0,t.wg)(),(0,t.j4)(o,{key:0,onClick:a[2]||(a[2]=e=>(0,n.dq)(ke)?ke.value=(0,n.SU)(_)[(0,n.SU)(y).key][0][1]:ke=(0,n.SU)(_)[(0,n.SU)(y).key][0][1]),size:"10px",flat:"",rounded:"",label:"Продать все"})):(0,t.kq)("",!0)])),_:1},8,["modelValue"]),R,(0,t.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(Se),"onUpdate:modelValue":a[4]||(a[4]=e=>(0,n.dq)(Se)?Se.value=e:Se=e),onBlur:De,type:"number"},null,8,["modelValue"]),G,(0,t.Wm)(d,{class:"q-mb-md",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(We),"onUpdate:modelValue":a[5]||(a[5]=e=>(0,n.dq)(We)?We.value=e:We=e),onKeyup:Oe,type:"number"},null,8,["modelValue"]),(0,t.Wm)(o,{rounded:"",loading:(0,n.SU)(ze),label:"buy"===(0,n.SU)(be)?"Купить":"Продать",color:"buy"===(0,n.SU)(be)?"positive":"negative",class:"full-width q-mb-md",unelevated:"",size:"18px","no-caps":"",disable:!(0,n.SU)(ke)||!(0,n.SU)(Se)||!(0,n.SU)(We),onClick:Te},null,8,["loading","label","color","disable"]),(0,n.SU)(je).series[0].data.length>0?((0,t.wg)(),(0,t.iD)("div",J,[(0,t.Wm)((0,n.SU)(g()),{type:"stockChart",options:(0,n.SU)(je),redrawOnUpdate:!0,oneToOneUpdate:!1,animateOnUpdate:!0},null,8,["options"])])):(0,t.kq)("",!0),(0,t._)("div",X,[(0,t._)("div",ee,[(0,t._)("div",ae,[(0,t._)("div",le,[te,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(f).have,((e,a)=>((0,t.wg)(),(0,t.j4)(c,{reverse:"",onClick:a=>Ie(e),class:"flex items-center justify-between relative-position sell-pr",color:"red-2",value:e.leftHave/e.amountHave,size:"16px"},{default:(0,t.w5)((()=>[(0,t._)("p",ne,(0,u.zw)(e.pairPrice),1),(0,t._)("p",ue,(0,u.zw)(e.leftHave),1)])),_:2},1032,["onClick","value"])))),256))])]),(0,t._)("div",oe,[(0,t._)("div",se,[ie,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(f).want,((e,a)=>((0,t.wg)(),(0,t.j4)(c,{onClick:a=>$e(e),class:"flex items-center justify-between relative-position bg-white buy-pr",color:"light-green-11",value:e.leftWant/e.amountWant,size:"16px"},{default:(0,t.w5)((()=>[(0,t._)("p",re,(0,u.zw)(e.pairPrice),1),(0,t._)("p",de,(0,u.zw)(e.leftWant),1)])),_:2},1032,["onClick","value"])))),256))])]),(0,t._)("div",ce,[(0,t.Wm)(r),(0,t._)("div",me,[pe,(0,t._)("p",ve,(0,u.zw)((0,n.SU)(Qe)),1)])]),(0,t._)("div",we,[(0,t.Wm)(r),(0,t._)("div",ge,[_e,(0,t._)("p",fe,(0,u.zw)((0,n.SU)(Ze)),1)])])])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(v,{modelValue:(0,n.SU)(qe),"onUpdate:modelValue":a[7]||(a[7]=e=>(0,n.dq)(qe)?qe.value=e:qe=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[ye])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Ve,{separator:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(x,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[Ue])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)("buy"===(0,n.SU)(be)?(0,n.SU)(We):(0,n.SU)(ke))+" "+(0,u.zw)("buy"===(0,n.SU)(be)?(0,n.SU)(U).name:(0,n.SU)(y).name),1)])),_:1})])),_:1}),(0,t.Wm)(x,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[xe])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)("buy"===(0,n.SU)(be)?(0,n.SU)(ke):(0,n.SU)(We))+" "+(0,u.zw)("buy"===(0,n.SU)(be)?(0,n.SU)(y).name:(0,n.SU)(U).name),1)])),_:1})])),_:1}),(0,t.Wm)(x,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[he])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)((0,n.SU)(He).fee),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(Ce,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(o,{rounded:"","no-caps":"",unelevated:"",color:"grey-6",loading:(0,n.SU)(ze),label:"Отмена"},null,8,["loading"]),[[Pe]]),(0,t.Wm)(o,{rounded:"","no-caps":"",unelevated:"",loading:(0,n.SU)(ze),onClick:Ye,label:"buy"===(0,n.SU)(be)?"Купить":"Продать",color:"buy"===(0,n.SU)(be)?"positive":"negative"},null,8,["loading","label","color"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}});var Se=l(32074),We=l(44458),qe=l(16602),ze=l(24455),He=l(61357),Ve=l(63190),Qe=l(50926),Ze=l(13119),Fe=l(8289),Ce=l(13246),je=l(490),Pe=l(76749),Ae=l(11821),Ke=l(62146),De=l(69984),Oe=l.n(De);const Te=ke,Ye=Te;Oe()(ke,"components",{QDialog:Se.Z,QCard:We.Z,QHeader:qe.Z,QBtn:ze.Z,QAvatar:He.Z,QCardSection:Ve.Z,QSeparator:Qe.Z,QInput:Ze.Z,QLinearProgress:Fe.Z,QList:Ce.Z,QItem:je.Z,QItemSection:Pe.Z,QCardActions:Ae.Z}),Oe()(ke,"directives",{ClosePopup:Ke.Z});var $e=l(17779);const Ie=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),Be={class:"flex items-center justify-start"},Le=["src"],Ne=["src"],Me={class:"q-pa-md"},Ee={key:0},Re=(0,t._)("span",{class:"text-weight-medium text-grey-9"},"за 24ч",-1),Ge=(0,t.Uk)(" : "),Je=(0,t._)("br",null,null,-1),Xe=(0,t._)("span",{class:"text-weight-medium text-grey-9"},"за 7д",-1),ea=(0,t.Uk)(" : "),aa=(0,t._)("br",null,null,-1),la=(0,t._)("span",{class:"text-weight-medium text-grey-9"},"за 1м",-1),ta=(0,t.Uk)(" : "),na={class:"no-margin text-caption text-weight-bold"},ua={class:"no-margin text-caption"},oa={class:"no-margin text-caption"},sa={class:"no-margin text-caption"},ia={class:"no-margin text-caption"},ra={class:"no-margin text-caption"},da=(0,t.Uk)("Блок "),ca=["href"],ma={class:"no-margin text-caption text-weight-bold"},pa={class:"no-margin text-caption"},va={class:"no-margin text-caption"},wa={class:"no-margin text-caption"},ga={class:"no-margin text-caption"},_a={class:"no-margin text-caption"},fa=(0,t.Uk)("Блок "),ya=["href"],Ua={class:"no-margin text-caption text-weight-bold"},xa={class:"no-margin text-caption"},ha={class:"no-margin text-caption"},ba={class:"no-margin text-caption"},ka={class:"no-margin text-caption"},Sa={class:"no-margin text-caption"},Wa=(0,t.Uk)("Блок "),qa=["href"],za={class:"text-h6"},Ha={class:"caption q-mb-sm"},Va={class:"caption q-mb-sm"},Qa={key:0,class:"no-margin text-negative text-center"},Za=(0,t.Uk)(" Подтверждение транзакции отмены ордера "),Fa=(0,t.Uk)("Комиссия"),Ca={components:{TradeModal:Ye}},ja=Object.assign(Ca,{__name:"Exchange",setup(e){const a=(0,i.Q)(),l=(0,c.c)(),p=(0,m.s)(),v=(0,n.iH)(null),w=(0,n.iH)(!1),g=(0,n.iH)(!1),_=(0,n.iH)(null),f=(0,n.iH)(null),y=(0,n.iH)("market"),U=(0,n.iH)("active"),x=(0,n.iH)(null),h=(0,n.iH)({}),b=(0,n.iH)([]),k=(0,n.iH)([]),S=(0,n.iH)([]),W=(0,n.iH)([]),q=(0,n.iH)({});let z=(0,n.iH)({}),H=(0,n.iH)(!1),V=(0,n.iH)([]);async function Q(e){g.value=!g.value;const l=await a.getKeyPair(),t=await r.era.tranBySeq(e);$e.log(t);const n=await r.era.tranRawCancelOrder(l,"name",t.signature,!0);z.value=n,$e.log(z.value),H.value=!0,g.value=!g.value}async function Z(){g.value=!g.value,$e.log(z.value.raw);const e=await r.era.broadcast64(z.value.raw);$e.log(e),H.value=!1,g.value=!g.value}function F(){let e=K.value[v.value];x.value=_.value*e.price}function C(){let e=K.value[v.value];_.value=x.value*e.reversePrice}function j(){_.value=null,x.value=null,z.value={}}async function P(){g.value=!g.value;const e=await a.getKeyPair();let l=K.value[v.value];const t=l.have,n=_.value,u=l.want,o=x.value;$e.log("have",t),$e.log("want",u),$e.log("haveAmount",n),$e.log("wantAmount",o),await r.era.tranRawOrder(e,"name",t,n,u,o,!0).then((e=>{z.value=e,$e.log(z.value)})),g.value=!g.value}(0,t.YP)(f,(e=>{if(e){let a={};$e.log(D.value);let l=Object.keys(D.value).filter((a=>a.toUpperCase().includes(e.toUpperCase())));$e.log(l);for(let e of l)$e.log(D.value[e]),a[e]=D.value[e];q.value=a,$e.log(a)}else q.value={}})),(0,t.YP)(_,(e=>{e>T.value[K.value[v.value].have][0][1]&&(_.value=T.value[K.value[v.value].have][0][1],x.value=0,C())}));const A=(0,t.Fl)((()=>a.assets)),K=(0,t.Fl)((()=>a.marketExchange)),D=(0,t.Fl)((()=>a.trade_pairs)),O=(0,t.Fl)((()=>l.addresses[l.currentAddressIdx].address)),T=((0,t.Fl)((()=>l.assets)),(0,t.Fl)((()=>l.balances))),Y=(0,t.Fl)((()=>Object.keys(T.value)));return(0,t.wF)((async()=>{p.toggleLoadingState();const e=await d.h.get("/api/settings/volumes");$e.log(e.data),V.value=e.data,await a.getMarketExchangeOrders(),await a.setTradePairs(),b.value=await(0,s.rK)(O.value);let l=[];for(let a of b.value)A.value.find((e=>e.key===a.haveAssetKey))&&A.value.find((e=>e.key===a.wantAssetKey))&&l.push(a);k.value=l.filter((e=>1===e.status||2===e.status)),S.value=l.filter((e=>3===e.status)),W.value=l.filter((e=>4===e.status)),p.toggleLoadingState()})),(e,a)=>{const l=(0,t.up)("page-header"),s=(0,t.up)("q-tab"),i=(0,t.up)("q-tabs"),r=(0,t.up)("q-separator"),d=(0,t.up)("q-avatar"),c=(0,t.up)("q-icon"),m=(0,t.up)("q-item-section"),b=(0,t.up)("q-item-label"),O=(0,t.up)("q-item"),$=(0,t.up)("q-list"),I=(0,t.up)("q-scroll-area"),B=(0,t.up)("q-tab-panel"),L=(0,t.up)("q-input"),N=(0,t.up)("q-badge"),M=(0,t.up)("q-btn"),E=(0,t.up)("q-tab-panels"),R=(0,t.up)("q-card-section"),G=(0,t.up)("q-card-actions"),J=(0,t.up)("q-card"),X=(0,t.up)("q-dialog"),ee=(0,t.up)("page-body"),ae=(0,t.up)("page"),le=(0,t.Q2)("touch-swipe"),te=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(ae,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ee,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l),Ie,(0,t.wy)(((0,t.wg)(),(0,t.j4)(i,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value=e),class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{"no-caps":"",class:"bg-white",name:"market",label:"Биржа"}),(0,t.Wm)(s,{"no-caps":"",class:"bg-white",name:"own_orders",label:"Мои оффера"})])),_:1},8,["modelValue"])),[[le]]),(0,t.Wm)(r),(0,t.Wm)(E,{modelValue:y.value,"onUpdate:modelValue":a[4]||(a[4]=e=>y.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{name:"exchange",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{style:{height:"85vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)($,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(K),((e,a)=>(0,t.wy)(((0,t.wg)(),(0,t.j4)(O,{clickable:"",onClick:e=>(v.value=a,w.value=!0),key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("div",Be,[(0,t.Wm)(d,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:`/asset_icons/${(0,n.SU)(A).find((a=>a.key===e.have)).icon}`},null,8,Le)])),_:2},1024),(0,t.Wm)(c,{name:"las la-long-arrow-alt-right",size:"30px"}),(0,t.Wm)(d,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:`/asset_icons/${(0,n.SU)(A).find((a=>a.key===e.want)).icon}`},null,8,Ne)])),_:2},1024)])])),_:2},1024),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)((0,n.SU)(A).find((a=>a.key===e.have)).name)+"/"+(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.want)).name),1)])),_:2},1024),(0,t.Wm)(b,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" 1 / "+(0,u.zw)(e.price),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[o.F8,(0,n.SU)(Y).includes(String(e.have))]]))),128))])),_:1})])),_:1})])),_:1}),(0,t.Wm)(B,{name:"market",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t._)("div",Me,[(0,t.Wm)(L,{dense:"",outlined:"",rounded:"",modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=e=>f.value=e),label:"Поиск"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(c,{name:"search"})])),_:1},8,["modelValue"])]),(0,t.Wm)(r),(0,t.Wm)(I,{style:{height:"75vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)($,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Object.keys(q.value).length>0?q.value:(0,n.SU)(D),((e,a)=>((0,t.wg)(),(0,t.j4)(O,{clickable:"",onClick:a=>(h.value=e,(0,n.SU)(p).toggleTradeModalVisible()),key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(a.replace("_"," / ")),1)])),_:2},1024),(0,t.Wm)(m,{class:"text-caption"},{default:(0,t.w5)((()=>[(0,n.SU)(V).filter((e=>e.pair===a)).length>0?((0,t.wg)(),(0,t.iD)("span",Ee,[Re,Ge,(0,t.Wm)(N,{rounded:"",color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat((0,n.SU)(V).find((e=>e.pair===a)).base_volume_24).toFixed(2))+" / "+(0,u.zw)(parseFloat((0,n.SU)(V).find((e=>e.pair===a)).quote_volume_24).toFixed(2)),1)])),_:2},1024),Je,Xe,ea,(0,t.Wm)(N,{rounded:"",color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat((0,n.SU)(V).find((e=>e.pair===a)).base_volume_1w).toFixed(2))+" / "+(0,u.zw)(parseFloat((0,n.SU)(V).find((e=>e.pair===a)).quote_volume_1w).toFixed(2)),1)])),_:2},1024),aa,la,ta,(0,t.Wm)(N,{rounded:"",color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat((0,n.SU)(V).find((e=>e.pair===a)).base_volume_1m).toFixed(2))+" / "+(0,u.zw)(parseFloat((0,n.SU)(V).find((e=>e.pair===a)).quote_volume_1m).toFixed(2)),1)])),_:2},1024)])):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),(0,t.Wm)(B,{name:"own_orders",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(i,{modelValue:U.value,"onUpdate:modelValue":a[2]||(a[2]=e=>U.value=e),dense:"",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{"no-caps":"",class:"bg-white text-info",name:"active",label:"Активные"}),(0,t.Wm)(s,{"no-caps":"",class:"bg-white text-positive",name:"done",label:"Исполненные"}),(0,t.Wm)(s,{"no-caps":"",class:"bg-white text-negative",name:"cancel",label:"Отмененные"})])),_:1},8,["modelValue"])),[[le]]),(0,t.Wm)(r),(0,t.Wm)(I,{style:{height:"83vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)(E,{modelValue:U.value,"onUpdate:modelValue":a[3]||(a[3]=e=>U.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{name:"active",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(k.value,((e,a)=>((0,t.wg)(),(0,t.j4)(O,{key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("p",na,(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.wantAssetKey)).name)+" / "+(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.haveAssetKey)).name),1),(0,t._)("p",ua,"Кол-во "+(0,u.zw)(e.amountHave),1),(0,t._)("p",oa,"Цена "+(0,u.zw)(e.price),1),(0,t._)("p",sa,"Итого "+(0,u.zw)(e.amountWant),1),(0,t._)("p",ia,"Осталось "+(0,u.zw)(e.leftWant),1),(0,t._)("p",ra,[da,(0,t._)("a",{target:"_blank",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${e.seqNo}&lang=ru`},(0,u.zw)(e.seqNo),9,ca)])])),_:2},1024),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{rounded:"",color:"negative",loading:g.value,onClick:a=>Q(e.seqNo),unelevated:"",outline:"","no-caps":"",size:"12px",label:"Отменить оффер"},null,8,["loading","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,t.Wm)(B,{name:"done",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(S.value,((e,a)=>((0,t.wg)(),(0,t.j4)(O,{key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("p",ma,(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.wantAssetKey)).name)+" / "+(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.haveAssetKey)).name),1),(0,t._)("p",pa,"Кол-во "+(0,u.zw)(e.amountHave),1),(0,t._)("p",va,"Цена "+(0,u.zw)(e.price),1),(0,t._)("p",wa,"Итого "+(0,u.zw)(e.amountWant),1),(0,t._)("p",ga,"Осталось "+(0,u.zw)(e.leftWant),1),(0,t._)("p",_a,[fa,(0,t._)("a",{target:"_blank",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${e.seqNo}&lang=ru`},(0,u.zw)(e.seqNo),9,ya)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,t.Wm)(B,{name:"cancel",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(W.value,((e,a)=>((0,t.wg)(),(0,t.j4)(O,{key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("p",Ua,(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.wantAssetKey)).name)+" / "+(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.haveAssetKey)).name),1),(0,t._)("p",xa,"Кол-во "+(0,u.zw)(e.amountHave),1),(0,t._)("p",ha,"Цена "+(0,u.zw)(e.price),1),(0,t._)("p",ba,"Итого "+(0,u.zw)(e.amountWant),1),(0,t._)("p",ka,"Осталось "+(0,u.zw)(e.leftWant),1),(0,t._)("p",Sa,[Wa,(0,t._)("a",{target:"_blank",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${e.seqNo}&lang=ru`},(0,u.zw)(e.seqNo),9,qa)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(X,{modelValue:w.value,"onUpdate:modelValue":a[7]||(a[7]=e=>w.value=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeShow:j},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[(0,t._)("div",za,[(0,t.Uk)("Обмен "+(0,u.zw)((0,n.SU)(A).find((e=>e.key===(0,n.SU)(K)[v.value].have)).name)+" ",1),(0,t.Wm)(c,{name:"las la-long-arrow-alt-right",size:"30px"}),(0,t.Uk)(" "+(0,u.zw)((0,n.SU)(A).find((e=>e.key===(0,n.SU)(K)[v.value].want)).name),1)])])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t._)("p",Ha,"Отдам "+(0,u.zw)((0,n.SU)(A).find((e=>e.key===(0,n.SU)(K)[v.value].have)).name)+" (баланс "+(0,u.zw)((0,n.SU)(T)[(0,n.SU)(K)[v.value].have][0][1])+") ",1),(0,t.Wm)(L,{class:"q-mb-md",dense:"",outlined:"",autofocus:"",modelValue:_.value,"onUpdate:modelValue":a[5]||(a[5]=e=>_.value=e),onKeyup:F,type:"number"},null,8,["modelValue"]),(0,t._)("p",Va,"Получу "+(0,u.zw)((0,n.SU)(A).find((e=>e.key===(0,n.SU)(K)[v.value].want)).name),1),(0,t.Wm)(L,{class:"q-mb-md",dense:"",outlined:"",modelValue:x.value,"onUpdate:modelValue":a[6]||(a[6]=e=>x.value=e),onKeyup:C,type:"number"},null,8,["modelValue"]),(0,n.SU)(z).raw?((0,t.wg)(),(0,t.iD)("p",Qa,"Комиссия : "+(0,u.zw)((0,n.SU)(z).fee),1)):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(G,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(M,{"no-caps":"",unelevated:"",color:"negative",loading:g.value,outline:"",label:"Отмена"},null,8,["loading"]),[[te]]),(0,n.SU)(z).raw?((0,t.wg)(),(0,t.j4)(M,{key:1,"no-caps":"",unelevated:"",color:"positive",loading:g.value,onClick:Z,label:"Обменять"},null,8,["loading"])):((0,t.wg)(),(0,t.j4)(M,{key:0,"no-caps":"",unelevated:"",color:"positive",disable:!_.value||!x.value,loading:g.value,onClick:P,label:"Запросить комиссию"},null,8,["disable","loading"]))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)((0,n.SU)(Ye),{"trade-pair":h.value},null,8,["trade-pair"]),(0,t.Wm)(X,{modelValue:(0,n.SU)(H),"onUpdate:modelValue":a[8]||(a[8]=e=>(0,n.dq)(H)?H.value=e:H=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[Za])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Wm)($,{separator:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[Fa])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)((0,n.SU)(z).fee),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(G,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(M,{"no-caps":"",unelevated:"",color:"grey-6",loading:g.value,label:"Отмена"},null,8,["loading"]),[[te]]),(0,t.Wm)(M,{"no-caps":"",unelevated:"",loading:g.value,onClick:Z,label:"Ок",color:"positive"},null,8,["loading"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}});var Pa=l(47817),Aa=l(70900),Ka=l(89800),Da=l(84106),Oa=l(66663),Ta=l(22857),Ya=l(33115),$a=l(20990),Ia=l(64871);const Ba=ja,La=Ba;Oe()(ja,"components",{QTabs:Pa.Z,QTab:Aa.Z,QSeparator:Qe.Z,QTabPanels:Ka.Z,QTabPanel:Da.Z,QScrollArea:Oa.Z,QList:Ce.Z,QItem:je.Z,QItemSection:Pe.Z,QAvatar:He.Z,QIcon:Ta.Z,QItemLabel:Ya.Z,QInput:Ze.Z,QBadge:$a.Z,QBtn:ze.Z,QDialog:Se.Z,QCard:We.Z,QCardSection:Ve.Z,QCardActions:Ae.Z}),Oe()(ja,"directives",{TouchSwipe:Ia.Z,ClosePopup:Ke.Z})}}]);