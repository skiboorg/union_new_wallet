"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[928],{46928:(e,a,l)=>{l.r(a),l.d(a,{default:()=>j});var s=l(59835),t=l(60499),n=l(86970),p=l(39981),r=l.n(p),u=l(87270),i=l(18910),c=l(9991);const o=(0,s._)("div",{class:"",style:{height:"60px"}},null,-1),d={key:0,class:""},w={class:"row q-col-gutter-md q-mb-lg"},m={class:"col-6"},_={class:"col-6"},g={class:"text-bold"},b={class:"q-mb-xs"},y={class:""},q={class:"text-bold q-mb-sm"},v={__name:"Person",setup(e){const a=(0,i.yj)();let l=(0,t.iH)(null),p=(0,t.iH)(null),v=(0,t.iH)({}),h=(0,t.iH)(!1);const k=(0,c.QT)();async function f(e){await(0,u.Q)(e,"positive",k.t("wallet_address_copy"))}return(0,s.wF)((async()=>{l.value=a.params.person_key;const e=await r().get(`https://scan.rupay.pro/apiperson/addresses/${l.value}`);p.value=e.data[0];const s=await r().get(`https://scan.rupay.pro/index/blockexplorer.json?address=${p.value}&lang=ru`);v.value=s.data,h.value=!0})),(e,a)=>{const p=(0,s.up)("page-header"),r=(0,s.up)("q-img"),u=(0,s.up)("q-btn"),i=(0,s.up)("q-item-label"),c=(0,s.up)("q-item-section"),k=(0,s.up)("q-item"),S=(0,s.up)("q-list"),U=(0,s.up)("q-spinner"),Q=(0,s.up)("q-inner-loading"),W=(0,s.up)("page-body"),x=(0,s.up)("page");return(0,s.wg)(),(0,s.j4)(x,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{class:"q-px-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(p),o,(0,t.SU)(h)?((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",w,[(0,s._)("div",m,[(0,s.Wm)(r,{src:`https://scan.rupay.pro/apiperson/image/${(0,t.SU)(l)}`},null,8,["src"])]),(0,s._)("div",_,[(0,s._)("p",g,(0,n.zw)((0,t.SU)(v).person),1),(0,s.Wm)(u,{onClick:a[0]||(a[0]=e=>f((0,t.SU)(v).address)),"no-caps":"",dense:"",color:"primary",rounded:"",unelevated:"",class:"text-primary full-width q-mb-md",label:e.$t("address_copy_btn")},null,8,["label"]),(0,s._)("p",b,(0,n.zw)(e.$t("registred"))+": "+(0,n.zw)((0,t.SU)(v).registered),1),(0,s._)("p",y,(0,n.zw)(e.$t("Заверено"))+": "+(0,n.zw)((0,t.SU)(v).certified),1)])]),(0,s._)("p",q,(0,n.zw)(e.$t("balance")),1),(0,t.SU)(v).Balance?((0,s.wg)(),(0,s.j4)(S,{key:0,dense:"",separator:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,t.SU)(v).Balance.balances,((e,a)=>((0,s.wg)(),(0,s.j4)(k,{key:a},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"ellipsis"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(e.asset_name),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(e.balance_1),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,s.kq)("",!0)])):(0,s.kq)("",!0),(0,s.Wm)(Q,{showing:!(0,t.SU)(h)},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{size:"50px",color:"primary"})])),_:1},8,["showing"])])),_:1})])),_:1})}}};var h=l(70335),k=l(24455),f=l(13246),S=l(490),U=l(76749),Q=l(33115),W=l(60854),x=l(63940),z=l(69984),Z=l.n(z);const $=v,j=$;Z()(v,"components",{QImg:h.Z,QBtn:k.Z,QList:f.Z,QItem:S.Z,QItemSection:U.Z,QItemLabel:Q.Z,QInnerLoading:W.Z,QSpinner:x.Z})}}]);