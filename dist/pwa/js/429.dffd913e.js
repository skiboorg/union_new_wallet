"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[429],{89429:(e,l,a)=>{a.r(l),a.d(l,{default:()=>qe});a(46727),a(18964);var t=a(59835),u=a(60499),n=a(86970),o=a(61957),i=a(76028),s=a(23459),d=a(98030),r=a(46190),m=a(43463),c=a(6827),v=(a(39981),a(18910)),w=a(17779);const p={class:"flex items-center"},g=["src"],f={class:"no-margin text-weight-medium"},b=(0,t._)("div",{class:"",style:{height:"60px"}},null,-1),_={class:"flex items-center no-wrap q-mb-md"},U={class:"text-caption q-mb-sm"},W=(0,t._)("p",{class:"text-caption q-mb-sm"},"Цена за единицу",-1),y=(0,t._)("p",{class:"text-caption q-mb-sm"},"Итого",-1),k=(0,t._)("p",{class:"q-mb-sm text-positive text-weight-bold text-center"},"Ордера на покупку",-1),S=(0,t.Uk)("Цена"),h=(0,t.Uk)("Объем"),q={class:"absolute-full flex flex-center"},x=(0,t._)("p",{class:"q-mb-sm text-negative text-weight-bold text-center"},"Ордера на продажу",-1),Q={class:"absolute-full flex flex-center"},V=(0,t.Uk)(" Подтверждение транзакции создании ордера "),Z=(0,t.Uk)("Имею"),z=(0,t.Uk)("Хочу"),H=(0,t.Uk)("Комиссия"),C={__name:"Trade",props:{tradePair:Object},setup(e){const l=e,a=(0,m.s)(),o="https://scan.rupay.pro",r=((0,v.tv)(),(0,s.Q)());let C=(0,u.iH)([]),P=(0,u.iH)({}),j=(0,u.iH)({}),A=(0,u.iH)("buy"),K=(0,u.iH)(null),D=(0,u.iH)(null),I=(0,u.iH)(null),T=(0,u.iH)(!1),F=(0,u.iH)(!1),L=(0,u.iH)({});function B(){w.log(K.value),K.value||(I.value=null,D.value=null),D.value&&(I.value=K.value*D.value)}function O(){w.log(D.value),K.value&&(I.value=K.value*D.value)}function Y(){w.log(I.value),D.value&&(K.value=I.value/D.value)}async function $(){const e=await r.getKeyPair(),l="buy"===A.value?j.value.key:P.value.key,a="buy"===A.value?I.value:K.value,t="buy"===A.value?P.value.key:j.value.key,u="buy"===A.value?K.value:I.value;w.log("have",l),w.log("want",t),w.log("haveAmount",a),w.log("wantAmount",u),await d.era.tranRawOrder(e,"name",l,a,t,u,!0).then((e=>{L.value=e,w.log(L.value),T.value=!0}))}async function M(){F.value=!F.value;const e=await d.era.broadcast64(L.value.raw);w.log(e),e.message&&c.Z.create({color:"negative",message:"Недостаточно средств на балансе"}),T.value=!1,F.value=!F.value}function R(e){w.log(e),K.value=e.pairAmount,D.value=e.pairPrice,I.value=e.pairAmount*e.pairPrice}function E(e){w.log(e),K.value=e.pairAmount,D.value=e.pairPrice,I.value=e.pairAmount*e.pairPrice}async function N(){a.toggleLoadingState(),P.value=await(0,i.wv)(l.tradePair["0"]),j.value=await(0,i.wv)(l.tradePair["1"]),C.value=await(0,i.AU)(l.tradePair["0"],l.tradePair["1"]),a.toggleLoadingState()}return(e,l)=>{const i=(0,t.up)("q-btn"),s=(0,t.up)("q-avatar"),d=(0,t.up)("q-header"),r=(0,t.up)("q-input"),m=(0,t.up)("q-item-label"),c=(0,t.up)("q-item-section"),v=(0,t.up)("q-item"),w=(0,t.up)("q-badge"),G=(0,t.up)("q-linear-progress"),J=(0,t.up)("q-separator"),X=(0,t.up)("q-list"),ee=(0,t.up)("q-card-section"),le=(0,t.up)("q-card"),ae=(0,t.up)("q-dialog"),te=(0,t.up)("q-card-actions"),ue=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(ae,{modelValue:(0,u.SU)(a).tradeModalVisible,"onUpdate:modelValue":l[5]||(l[5]=e=>(0,u.SU)(a).tradeModalVisible=e),persistent:"",maximized:"","transition-show":"slide-left","transition-hide":"slide-right",onBeforeShow:N},{default:(0,t.w5)((()=>[(0,t.Wm)(le,{class:"bg-white"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{style:{"padding-right":"16px"},reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(i,{label:"Назад","no-caps":"",icon:"las la-angle-left",unelevated:""},null,512),[[ue]]),(0,t._)("div",p,[(0,t.Wm)(s,{size:"30px",class:"q-mr-sm"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,u.SU)(o)+(0,u.SU)(P).iconURL,alt:""},null,8,g)])),_:1}),(0,t._)("p",f,(0,n.zw)((0,u.SU)(P).name)+" / "+(0,n.zw)((0,u.SU)(j).name),1)])])),_:1}),b,(0,t.Wm)(ee,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t._)("div",_,[(0,t.Wm)(i,{label:`Купить ${(0,u.SU)(P).name} за ${(0,u.SU)(j).name}`,unelevated:"","no-caps":"",class:"no-border-radius",color:"buy"===(0,u.SU)(A)?"positive":"grey-5",onClick:l[0]||(l[0]=e=>(0,u.dq)(A)?A.value="buy":A="buy")},null,8,["label","color"]),(0,t.Wm)(i,{label:`Продать ${(0,u.SU)(P).name} за ${(0,u.SU)(j).name}`,color:"sell"===(0,u.SU)(A)?"negative":"grey-5",unelevated:"",class:"no-border-radius","no-caps":"",onClick:l[1]||(l[1]=e=>(0,u.dq)(A)?A.value="sell":A="sell")},null,8,["label","color"])]),(0,t._)("p",U,(0,n.zw)("buy"===(0,u.SU)(A)?"Кол-во к покупке":"Кол-во к продаже"),1),(0,t.Wm)(r,{class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,u.SU)(K),"onUpdate:modelValue":l[2]||(l[2]=e=>(0,u.dq)(K)?K.value=e:K=e),onKeyup:B,type:"number"},null,8,["modelValue"]),W,(0,t.Wm)(r,{class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,u.SU)(D),"onUpdate:modelValue":l[3]||(l[3]=e=>(0,u.dq)(D)?D.value=e:D=e),onKeyup:O,type:"number"},null,8,["modelValue"]),y,(0,t.Wm)(r,{class:"q-mb-md",dense:"",outlined:"",modelValue:(0,u.SU)(I),"onUpdate:modelValue":l[4]||(l[4]=e=>(0,u.dq)(I)?I.value=e:I=e),onKeyup:Y,type:"number"},null,8,["modelValue"]),(0,t.Wm)(i,{label:"buy"===(0,u.SU)(A)?"Купить":"Продать",color:"buy"===(0,u.SU)(A)?"positive":"negative",class:"full-width q-mb-md",unelevated:"","no-caps":"",disable:!(0,u.SU)(K)||!(0,u.SU)(D)||!(0,u.SU)(I),onClick:$},null,8,["label","color","disable"]),(0,t.Wm)(X,null,{default:(0,t.w5)((()=>[k,(0,t.Wm)(v,{dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[S])),_:1})])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[h])),_:1})])),_:1})])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,u.SU)(C).want,((e,l)=>((0,t.wg)(),(0,t.j4)(v,{clickable:"",onClick:l=>R(e)},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.pairPrice),1)])),_:2},1024),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(G,{reverse:"",color:"green-14",value:e.leftWant/e.amountWant,size:"25px"},{default:(0,t.w5)((()=>[(0,t._)("div",q,[(0,t.Wm)(w,{color:"white",class:"text-weight-medium","text-color":"dark",label:e.leftWant},null,8,["label"])])])),_:2},1032,["value"])])),_:2},1024)])),_:2},1032,["onClick"])))),256)),(0,t.Wm)(J,{spaced:"md"}),x,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,u.SU)(C).have,((e,l)=>((0,t.wg)(),(0,t.j4)(v,{clickable:"",onClick:l=>E(e)},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.pairPrice),1)])),_:2},1024),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(G,{reverse:"",color:"red-14",value:e.leftHave/e.amountHave,size:"25px"},{default:(0,t.w5)((()=>[(0,t._)("div",Q,[(0,t.Wm)(w,{color:"white",class:"text-weight-medium","text-color":"dark",label:e.leftHave},null,8,["label"])])])),_:2},1032,["value"])])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(ae,{modelValue:(0,u.SU)(T),"onUpdate:modelValue":l[6]||(l[6]=e=>(0,u.dq)(T)?T.value=e:T=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(le,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(ee,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[V])),_:1}),(0,t.Wm)(ee,null,{default:(0,t.w5)((()=>[(0,t.Wm)(X,{separator:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[Z])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)("buy"===(0,u.SU)(A)?(0,u.SU)(I):(0,u.SU)(K))+" "+(0,n.zw)("buy"===(0,u.SU)(A)?(0,u.SU)(j).name:(0,u.SU)(P).name),1)])),_:1})])),_:1}),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[z])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)("buy"===(0,u.SU)(A)?(0,u.SU)(K):(0,u.SU)(I))+" "+(0,n.zw)("buy"===(0,u.SU)(A)?(0,u.SU)(P).name:(0,u.SU)(j).name),1)])),_:1})])),_:1}),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[H])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)((0,u.SU)(L).fee),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(te,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(i,{"no-caps":"",unelevated:"",color:"grey-6",loading:(0,u.SU)(F),label:"Отмена"},null,8,["loading"]),[[ue]]),(0,t.Wm)(i,{"no-caps":"",unelevated:"",loading:(0,u.SU)(F),onClick:M,label:"buy"===(0,u.SU)(A)?"Купить":"Продать",color:"buy"===(0,u.SU)(A)?"positive":"negative"},null,8,["loading","label","color"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var P=a(53993),j=a(44458),A=a(16602),K=a(24455),D=a(61357),I=a(63190),T=a(80113),F=a(13246),L=a(490),B=a(76749),O=a(33115),Y=a(8289),$=a(20990),M=a(50926),R=a(11821),E=a(62146),N=a(69984),G=a.n(N);const J=C,X=J;G()(C,"components",{QDialog:P.Z,QCard:j.Z,QHeader:A.Z,QBtn:K.Z,QAvatar:D.Z,QCardSection:I.Z,QInput:T.Z,QList:F.Z,QItem:L.Z,QItemSection:B.Z,QItemLabel:O.Z,QLinearProgress:Y.Z,QBadge:$.Z,QSeparator:M.Z,QCardActions:R.Z}),G()(C,"directives",{ClosePopup:E.Z});var ee=a(17779);const le=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),ae={class:"flex items-center justify-start"},te=["src"],ue=["src"],ne={class:"no-margin text-caption text-weight-bold"},oe={class:"no-margin text-caption"},ie={class:"no-margin text-caption"},se={class:"no-margin text-caption"},de={class:"no-margin text-caption"},re={class:"inline-block q-mb-md"},me={key:0},ce={class:"text-h6"},ve={class:"caption q-mb-sm"},we={class:"caption q-mb-sm"},pe={key:0,class:"no-margin text-negative text-center"},ge=(0,t.Uk)(" Подтверждение транзакции отмены ордера "),fe=(0,t.Uk)("Комиссия"),be={components:{TradeModal:X}},_e=Object.assign(be,{__name:"Exchange",setup(e){const l=(0,s.Q)(),a=(0,r.c)(),c=(0,m.s)(),v=(0,u.iH)(null),w=(0,u.iH)(!1),p=(0,u.iH)(!1),g=(0,u.iH)(null),f=(0,u.iH)("market"),b=(0,u.iH)(null),_=(0,u.iH)({}),U=(0,u.iH)([]);let W=(0,u.iH)({}),y=(0,u.iH)(!1);async function k(e){p.value=!p.value;const a=await l.getKeyPair(),t=await d.era.tranBySeq(e);ee.log(t);const u=await d.era.tranRawCancelOrder(a,"name",t.signature,!0);W.value=u,ee.log(W.value),y.value=!0,p.value=!p.value}async function S(){p.value=!p.value,ee.log(W.value.raw);const e=await d.era.broadcast64(W.value.raw);ee.log(e),y.value=!1,p.value=!p.value}function h(){let e=Z.value[v.value];b.value=g.value*e.price}function q(){let e=Z.value[v.value];g.value=b.value*e.reversePrice}function x(){g.value=null,b.value=null,W.value={}}async function Q(){p.value=!p.value;const e=await l.getKeyPair();let a=Z.value[v.value];const t=a.have,u=g.value,n=a.want,o=b.value;ee.log("have",t),ee.log("want",n),ee.log("haveAmount",u),ee.log("wantAmount",o),await d.era.tranRawOrder(e,"name",t,u,n,o,!0).then((e=>{W.value=e,ee.log(W.value)})),p.value=!p.value}(0,t.YP)(g,(e=>{e>C.value[Z.value[v.value].have][0][1]&&(g.value=C.value[Z.value[v.value].have][0][1],b.value=0,q())}));const V=(0,t.Fl)((()=>l.assets)),Z=(0,t.Fl)((()=>l.marketExchange)),z=(0,t.Fl)((()=>l.trade_pairs)),H=(0,t.Fl)((()=>a.addresses[a.currentAddressIdx].address)),C=((0,t.Fl)((()=>a.assets)),(0,t.Fl)((()=>a.balances))),P=(0,t.Fl)((()=>Object.keys(C.value)));return(0,t.wF)((async()=>{await l.getMarketExchangeOrders(),await l.setTradePairs(),U.value=await(0,i.rK)(H.value)})),(e,l)=>{const a=(0,t.up)("page-header"),i=(0,t.up)("q-tab"),s=(0,t.up)("q-tabs"),d=(0,t.up)("q-separator"),r=(0,t.up)("q-avatar"),m=(0,t.up)("q-icon"),H=(0,t.up)("q-item-section"),j=(0,t.up)("q-item-label"),A=(0,t.up)("q-item"),K=(0,t.up)("q-list"),D=(0,t.up)("q-tab-panel"),I=(0,t.up)("q-badge"),T=(0,t.up)("q-btn"),F=(0,t.up)("q-tab-panels"),L=(0,t.up)("q-card-section"),B=(0,t.up)("q-input"),O=(0,t.up)("q-card-actions"),Y=(0,t.up)("q-card"),$=(0,t.up)("q-dialog"),M=(0,t.up)("page-body"),R=(0,t.up)("page"),E=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(R,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,null,{default:(0,t.w5)((()=>[(0,t.Wm)(a),le,(0,t.Wm)(s,{modelValue:f.value,"onUpdate:modelValue":l[0]||(l[0]=e=>f.value=e),class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{"no-caps":"",class:"bg-white",name:"market",label:"Биржа"}),(0,t.Wm)(i,{"no-caps":"",class:"bg-white",name:"own_orders",label:"Мои ордера"})])),_:1},8,["modelValue"]),(0,t.Wm)(d),(0,t.Wm)(F,{modelValue:f.value,"onUpdate:modelValue":l[1]||(l[1]=e=>f.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{name:"exchange",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,u.SU)(Z),((e,l)=>(0,t.wy)(((0,t.wg)(),(0,t.j4)(A,{clickable:"",onClick:e=>(v.value=l,w.value=!0),key:l},{default:(0,t.w5)((()=>[(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[(0,t._)("div",ae,[(0,t.Wm)(r,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:`/asset_icons/${(0,u.SU)(V).find((l=>l.key===e.have)).icon}`},null,8,te)])),_:2},1024),(0,t.Wm)(m,{name:"las la-long-arrow-alt-right",size:"30px"}),(0,t.Wm)(r,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:`/asset_icons/${(0,u.SU)(V).find((l=>l.key===e.want)).icon}`},null,8,ue)])),_:2},1024)])])),_:2},1024),(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[(0,t.Wm)(j,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)((0,u.SU)(V).find((l=>l.key===e.have)).name)+"/"+(0,n.zw)((0,u.SU)(V).find((l=>l.key===e.want)).name),1)])),_:2},1024),(0,t.Wm)(j,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" 1 / "+(0,n.zw)(e.price),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[o.F8,(0,u.SU)(P).includes(String(e.have))]]))),128))])),_:1})])),_:1}),(0,t.Wm)(D,{name:"market",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,u.SU)(z),((e,l)=>((0,t.wg)(),(0,t.j4)(A,{clickable:"",onClick:l=>(_.value=e,(0,u.SU)(c).toggleTradeModalVisible()),key:l},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(l.replace("_"," / ")),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),(0,t.Wm)(D,{name:"own_orders",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(U.value,((e,l)=>((0,t.wg)(),(0,t.j4)(A,{key:l},{default:(0,t.w5)((()=>[(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[(0,t._)("p",ne,(0,n.zw)((0,u.SU)(V).find((l=>l.key===e.wantAssetKey)).name)+" / "+(0,n.zw)((0,u.SU)(V).find((l=>l.key===e.haveAssetKey)).name),1),(0,t._)("p",oe,"Кол-во "+(0,n.zw)(e.amountHave),1),(0,t._)("p",ie,"Цена "+(0,n.zw)(e.price),1),(0,t._)("p",se,"Итого "+(0,n.zw)(e.amountWant),1),(0,t._)("p",de,"Осталось "+(0,n.zw)(e.leftWant),1),(0,t.Uk)(" "+(0,n.zw)(e.seqNo),1)])),_:2},1024),(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[(0,t._)("div",re,[4===e.status?((0,t.wg)(),(0,t.j4)(I,{key:0,color:"negative",label:"Отменен"})):(0,t.kq)("",!0),3===e.status?((0,t.wg)(),(0,t.j4)(I,{key:1,color:"positive",label:"Исполнен"})):(0,t.kq)("",!0),1===e.status?((0,t.wg)(),(0,t.j4)(I,{key:2,color:"info",label:"Открыт"})):(0,t.kq)("",!0)]),1===e.status?((0,t.wg)(),(0,t.iD)("div",me,[(0,t.Wm)(T,{icon:"delete",color:"negative",loading:p.value,onClick:l=>k(e.seqNo),unelevated:"",outline:"","no-caps":"",size:"12px",label:"Отменить ордер"},null,8,["loading","onClick"])])):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)($,{modelValue:w.value,"onUpdate:modelValue":l[4]||(l[4]=e=>w.value=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeShow:x},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[(0,t._)("div",ce,[(0,t.Uk)("Обмен "+(0,n.zw)((0,u.SU)(V).find((e=>e.key===(0,u.SU)(Z)[v.value].have)).name)+" ",1),(0,t.Wm)(m,{name:"las la-long-arrow-alt-right",size:"30px"}),(0,t.Uk)(" "+(0,n.zw)((0,u.SU)(V).find((e=>e.key===(0,u.SU)(Z)[v.value].want)).name),1)])])),_:1}),(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t._)("p",ve,"Отдам "+(0,n.zw)((0,u.SU)(V).find((e=>e.key===(0,u.SU)(Z)[v.value].have)).name)+" (баланс "+(0,n.zw)((0,u.SU)(C)[(0,u.SU)(Z)[v.value].have][0][1])+") ",1),(0,t.Wm)(B,{class:"q-mb-md",dense:"",outlined:"",autofocus:"",modelValue:g.value,"onUpdate:modelValue":l[2]||(l[2]=e=>g.value=e),onKeyup:h,type:"number"},null,8,["modelValue"]),(0,t._)("p",we,"Получу "+(0,n.zw)((0,u.SU)(V).find((e=>e.key===(0,u.SU)(Z)[v.value].want)).name),1),(0,t.Wm)(B,{class:"q-mb-md",dense:"",outlined:"",modelValue:b.value,"onUpdate:modelValue":l[3]||(l[3]=e=>b.value=e),onKeyup:q,type:"number"},null,8,["modelValue"]),(0,u.SU)(W).raw?((0,t.wg)(),(0,t.iD)("p",pe,"Комиссия : "+(0,n.zw)((0,u.SU)(W).fee),1)):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(O,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(T,{"no-caps":"",unelevated:"",color:"negative",loading:p.value,outline:"",label:"Отмена"},null,8,["loading"]),[[E]]),(0,u.SU)(W).raw?((0,t.wg)(),(0,t.j4)(T,{key:1,"no-caps":"",unelevated:"",color:"positive",loading:p.value,onClick:S,label:"Обменять"},null,8,["loading"])):((0,t.wg)(),(0,t.j4)(T,{key:0,"no-caps":"",unelevated:"",color:"positive",disable:!g.value||!b.value,loading:p.value,onClick:Q,label:"Запросить комиссию"},null,8,["disable","loading"]))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)((0,u.SU)(X),{"trade-pair":_.value},null,8,["trade-pair"]),(0,t.Wm)($,{modelValue:(0,u.SU)(y),"onUpdate:modelValue":l[5]||(l[5]=e=>(0,u.dq)(y)?y.value=e:y=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[ge])),_:1}),(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Wm)(K,{separator:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[fe])),_:1}),(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)((0,u.SU)(W).fee),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(O,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(T,{"no-caps":"",unelevated:"",color:"grey-6",loading:p.value,label:"Отмена"},null,8,["loading"]),[[E]]),(0,t.Wm)(T,{"no-caps":"",unelevated:"",loading:p.value,onClick:S,label:"Ок",color:"positive"},null,8,["loading"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}});var Ue=a(42230),We=a(70900),ye=a(89800),ke=a(84106),Se=a(22857);const he=_e,qe=he;G()(_e,"components",{QTabs:Ue.Z,QTab:We.Z,QSeparator:M.Z,QTabPanels:ye.Z,QTabPanel:ke.Z,QList:F.Z,QItem:L.Z,QItemSection:B.Z,QAvatar:D.Z,QIcon:Se.Z,QItemLabel:O.Z,QBadge:$.Z,QBtn:K.Z,QDialog:P.Z,QCard:j.Z,QCardSection:I.Z,QInput:T.Z,QCardActions:R.Z}),G()(_e,"directives",{ClosePopup:E.Z})}}]);