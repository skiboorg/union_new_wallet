"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[165],{55165:(e,a,l)=>{l.r(a),l.d(a,{default:()=>j});l(40702);var t=l(59835),s=l(86970),n=l(60499),u=l(46190),o=l(17779);const m=e=>((0,t.dD)("data-v-84740ab6"),e=e(),(0,t.Cn)(),e),c={class:"page-body--top text-white flex column items-center justify-evenly"},r={class:"flex items-center text-center q-mb-md"},i={class:"top-buttons"},d=m((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},[(0,t.Uk)("Отправить"),(0,t._)("br"),(0,t.Uk)("в сети RUPAY")],-1))),p=m((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},[(0,t.Uk)("Получить"),(0,t._)("br"),(0,t.Uk)("в сети RUPAY")],-1))),_=m((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},"Получить",-1))),b=m((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},"Обмен",-1))),w=m((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},"Вывести",-1))),f=m((()=>(0,t._)("p",{class:"no-margin text-caption lh100"},"P2P",-1))),g=(0,t.Uk)("Название актива"),W=(0,t.Uk)("В собственности"),h=["src"],k={__name:"Index",setup(e){const a=(0,u.c)(),l="https://scan.rupay.pro",m=(0,n.iH)("tokens"),k=((0,n.iH)(void 0),(0,t.Fl)((()=>a.addresses[a.currentAddressIdx].address)),(0,t.Fl)((()=>a.assets))),x=(0,t.Fl)((()=>a.balances));const v=(0,t.Fl)((()=>{let e=0;if(k.value.length>0)for(let l of k.value)try{e+=x.value[l.key][0][1]*l.course}catch(a){o.log("balance error",a)}return e}));return(e,a)=>{const u=(0,t.up)("page-header"),o=(0,t.up)("q-btn"),q=(0,t.up)("q-icon"),U=(0,t.up)("q-avatar"),y=(0,t.up)("q-tab"),C=(0,t.up)("q-tabs"),Z=(0,t.up)("q-separator"),$=(0,t.up)("q-item-section"),Q=(0,t.up)("q-item-label"),z=(0,t.up)("q-item"),I=(0,t.up)("q-list"),S=(0,t.up)("q-scroll-area"),A=(0,t.up)("q-tab-panel"),T=(0,t.up)("q-tab-panels"),B=(0,t.up)("page-body"),P=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(P,null,{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t._)("div",c,[(0,t.Wm)(u),(0,t._)("div",r,[(0,t._)("p",{class:(0,s.C_)(["q-mb-none q-mr-md text-h5 text-bold",{blur:e.$global.isBlur}])},"~ "+(0,s.zw)(e.$filters.convertAmount((0,n.SU)(v)))+" ₽",3),(0,t.Wm)(o,{icon:e.$global.isBlur?"las la-low-vision":"las la-eye",flat:"",dense:"",round:"",onClick:a[0]||(a[0]=a=>e.$global.toggleIsBlur())},null,8,["icon"])]),(0,t._)("div",i,[(0,t._)("div",{class:"text-center",onClick:a[1]||(a[1]=a=>e.$router.push({name:"wallet_own_assets"}))},[(0,t.Wm)(U,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{size:"22px",name:"las la-upload"})])),_:1}),d]),(0,t._)("div",{class:"text-center",onClick:a[2]||(a[2]=a=>e.$router.push({name:"wallet_select"}))},[(0,t.Wm)(U,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{size:"22px",name:"las la-download"})])),_:1}),p]),(0,t._)("div",{class:"text-center",onClick:a[3]||(a[3]=a=>e.$router.push({name:"wallet_assets_for_buy"}))},[(0,t.Wm)(U,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{size:"22px",name:"las la-tag"})])),_:1}),_]),(0,t._)("div",{class:"text-center",onClick:a[4]||(a[4]=a=>e.$router.push({name:"wallet_exchange"}))},[(0,t.Wm)(U,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{size:"22px",name:"las la-exchange-alt"})])),_:1}),b]),(0,t._)("div",{class:"text-center",onClick:a[5]||(a[5]=a=>e.$router.push({name:"withdraw"}))},[(0,t.Wm)(U,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{size:"22px",name:"las la-wallet"})])),_:1}),w]),(0,t._)("div",{class:"text-center",onClick:a[6]||(a[6]=a=>e.$router.push({name:"p2p_index"}))},[(0,t.Wm)(U,{class:"bg-blue-7 q-mb-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{size:"22px",name:"las la-users"})])),_:1}),f])])]),(0,t.Wm)(C,{modelValue:m.value,"onUpdate:modelValue":a[7]||(a[7]=e=>m.value=e),class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{"no-caps":"",class:"bg-white",name:"tokens",label:"Активы"}),(0,t.Wm)(y,{disable:"","no-caps":"",class:"bg-white",name:"nft",label:"NFTs"})])),_:1},8,["modelValue"]),(0,t.Wm)(Z),(0,t.Wm)(T,{modelValue:m.value,"onUpdate:modelValue":a[8]||(a[8]=e=>m.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"tokens",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{style:{height:"50vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{separator:""},{default:(0,t.w5)((()=>[(0,t.Wm)(z,null,{default:(0,t.w5)((()=>[(0,t.Wm)($,{avatar:""}),(0,t.Wm)($,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{caption:""},{default:(0,t.w5)((()=>[g])),_:1})])),_:1}),(0,t.Wm)($,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{caption:""},{default:(0,t.w5)((()=>[W])),_:1})])),_:1})])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(k),((a,u)=>((0,t.wg)(),(0,t.j4)(z,{onClick:a=>e.$router.push({name:"wallet_asset",params:{asset_key:u}}),clickable:"",key:u},{default:(0,t.w5)((()=>[(0,t.Wm)($,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,n.SU)(l)+a.iconURL},null,8,h)])),_:2},1024)])),_:2},1024),(0,t.Wm)($,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.name),1)])),_:2},1024),(0,t.Wm)(Q,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.course)+" ₽",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)($,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{class:(0,s.C_)(["text-weight-medium",{blur:e.$global.isBlur}])},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)((0,n.SU)(x)[a.key][0][1]),1)])),_:2},1032,["class"]),a.course?((0,t.wg)(),(0,t.j4)(Q,{key:0,caption:"",class:(0,s.C_)({blur:e.$global.isBlur})},{default:(0,t.w5)((()=>[(0,t.Uk)("~ "+(0,s.zw)(e.$filters.convertAmount((0,n.SU)(x)[a.key][0][1]*a.course))+" ₽",1)])),_:2},1032,["class"])):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),(0,t.Wm)(A,{name:"nft"})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}};var x=l(11639),v=l(24455),q=l(61357),U=l(22857),y=l(47817),C=l(70900),Z=l(50926),$=l(89800),Q=l(84106),z=l(66663),I=l(13246),S=l(490),A=l(76749),T=l(33115),B=l(69984),P=l.n(B);const V=(0,x.Z)(k,[["__scopeId","data-v-84740ab6"]]),j=V;P()(k,"components",{QBtn:v.Z,QAvatar:q.Z,QIcon:U.Z,QTabs:y.Z,QTab:C.Z,QSeparator:Z.Z,QTabPanels:$.Z,QTabPanel:Q.Z,QScrollArea:z.Z,QList:I.Z,QItem:S.Z,QItemSection:A.Z,QItemLabel:T.Z})}}]);