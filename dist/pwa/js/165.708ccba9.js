"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[165],{55165:(e,a,l)=>{l.r(a),l.d(a,{default:()=>j});l(40702);var t=l(59835),s=l(86970),n=l(60499),u=l(46190);const m={class:"page-body--top text-white flex column items-center justify-evenly"},o={class:"text-center q-mb-xl"},c={class:"no-margin text-h5 text-bold"},r={class:"flex items-center justify-evenly full-width text-white"},i=(0,t._)("p",{class:"no-margin text-caption"},"Отправить",-1),d=(0,t._)("p",{class:"no-margin text-caption"},"Получить",-1),p=(0,t._)("p",{class:"no-margin text-caption"},"Купить",-1),w=(0,t._)("p",{class:"no-margin text-caption"},"Обмен",-1),_=(0,t.Uk)("Название актива"),f=(0,t.Uk)("В собственности"),b=["src"],g={__name:"Index",setup(e){const a=(0,u.c)(),l="https://scan.rupay.pro",g=(0,n.iH)("tokens"),W=((0,n.iH)(void 0),(0,t.Fl)((()=>a.addresses[a.currentAddressIdx].address)),(0,t.Fl)((()=>a.assets))),x=(0,t.Fl)((()=>a.balances)),h=(0,t.Fl)((()=>{let e=0;if(W.value.length>0)for(let a of W.value)e+=x.value[a.key][0][1]*a.course;return e}));return(e,a)=>{const u=(0,t.up)("page-header"),k=(0,t.up)("q-icon"),v=(0,t.up)("q-avatar"),y=(0,t.up)("q-tab"),q=(0,t.up)("q-tabs"),U=(0,t.up)("q-separator"),Q=(0,t.up)("q-item-section"),Z=(0,t.up)("q-item-label"),F=(0,t.up)("q-item"),z=(0,t.up)("q-list"),C=(0,t.up)("q-scroll-area"),S=(0,t.up)("q-tab-panel"),T=(0,t.up)("q-tab-panels"),j=(0,t.up)("page-body"),I=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(I,null,{default:(0,t.w5)((()=>[(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t._)("div",m,[(0,t.Wm)(u),(0,t._)("div",o,[(0,t._)("p",c,"~ "+(0,s.zw)(parseFloat((0,n.SU)(h)).toFixed(2))+" ₽",1)]),(0,t._)("div",r,[(0,t._)("div",{class:"text-center",onClick:a[0]||(a[0]=a=>e.$router.push({name:"wallet_own_assets"}))},[(0,t.Wm)(v,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{size:"22px",name:"las la-upload"})])),_:1}),i]),(0,t._)("div",{class:"text-center",onClick:a[1]||(a[1]=a=>e.$router.push({name:"wallet_select"}))},[(0,t.Wm)(v,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{size:"22px",name:"las la-download"})])),_:1}),d]),(0,t._)("div",{class:"text-center",onClick:a[2]||(a[2]=a=>e.$router.push({name:"wallet_assets_for_buy"}))},[(0,t.Wm)(v,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{size:"22px",name:"las la-tag"})])),_:1}),p]),(0,t._)("div",{class:"text-center",onClick:a[3]||(a[3]=a=>e.$router.push({name:"wallet_exchange"}))},[(0,t.Wm)(v,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{size:"22px",name:"las la-exchange-alt"})])),_:1}),w])])]),(0,t.Wm)(q,{modelValue:g.value,"onUpdate:modelValue":a[4]||(a[4]=e=>g.value=e),class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{"no-caps":"",class:"bg-white",name:"tokens",label:"Активы"}),(0,t.Wm)(y,{disable:"","no-caps":"",class:"bg-white",name:"nft",label:"NFTs"})])),_:1},8,["modelValue"]),(0,t.Wm)(U),(0,t.Wm)(T,{modelValue:g.value,"onUpdate:modelValue":a[5]||(a[5]=e=>g.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"tokens",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{style:{height:"50vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{separator:""},{default:(0,t.w5)((()=>[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{avatar:""}),(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{caption:""},{default:(0,t.w5)((()=>[_])),_:1})])),_:1}),(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{caption:""},{default:(0,t.w5)((()=>[f])),_:1})])),_:1})])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(W),((a,u)=>((0,t.wg)(),(0,t.j4)(F,{onClick:a=>e.$router.push({name:"wallet_asset",params:{asset_key:u}}),clickable:"",key:u},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,n.SU)(l)+a.iconURL},null,8,b)])),_:2},1024)])),_:2},1024),(0,t.Wm)(Q,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Wm)(Z,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.name),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)((0,n.SU)(x)[a.key][0][1]),1)])),_:2},1024),a.course?((0,t.wg)(),(0,t.j4)(Z,{key:0,caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("~ "+(0,s.zw)(parseFloat((0,n.SU)(x)[a.key][0][1]*a.course).toFixed(2))+" ₽",1)])),_:2},1024)):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),(0,t.Wm)(S,{name:"nft"})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}};var W=l(61357),x=l(22857),h=l(42230),k=l(70900),v=l(50926),y=l(89800),q=l(84106),U=l(66663),Q=l(13246),Z=l(490),F=l(76749),z=l(33115),C=l(69984),S=l.n(C);const T=g,j=T;S()(g,"components",{QAvatar:W.Z,QIcon:x.Z,QTabs:h.Z,QTab:k.Z,QSeparator:v.Z,QTabPanels:y.Z,QTabPanel:q.Z,QScrollArea:U.Z,QList:Q.Z,QItem:Z.Z,QItemSection:F.Z,QItemLabel:z.Z})}}]);