"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[292],{83292:(l,e,a)=>{a.r(e),a.d(e,{default:()=>ae});var n=a(59835),t=a(60499),u=a(86970),o=a(23459),s=a(91569),r=a(87270),i=a(31655);const d=(0,n._)("div",{class:"",style:{height:"50px"}},null,-1),_={key:0},m=(0,n._)("strong",null,"Разместил",-1),p=(0,n.Uk)("в сети"),w=(0,n.Uk)("не в сети"),c=(0,n._)("br",null,null,-1),b=(0,n._)("strong",null,"Дата размещения",-1),f=(0,n._)("br",null,null,-1),g=(0,n._)("strong",null,"Обьем",-1),k=(0,n._)("br",null,null,-1),U=(0,n._)("strong",null,"Курс",-1),v=(0,n._)("br",null,null,-1),y=(0,n._)("strong",null,"Минимальный объем",-1),h=(0,n._)("br",null,null,-1),W=(0,n._)("strong",null,"Тип оплаты",-1),z=(0,n.Uk)(":"),$=(0,n._)("br",null,null,-1),q=(0,n._)("br",null,null,-1),x=(0,n._)("strong",null,"Условия",-1),S=(0,n.Uk)(":"),D=(0,n._)("br",null,null,-1),C=(0,n._)("br",null,null,-1),Q=(0,n._)("br",null,null,-1),V=(0,n._)("strong",null,"Разместил ",-1),Z=(0,n.Uk)("в сети"),j=(0,n.Uk)("не в сети"),H=(0,n._)("br",null,null,-1),Y=(0,n._)("strong",null,"Дата размещения",-1),K=(0,n._)("br",null,null,-1),P=(0,n._)("strong",null,"Обьем",-1),T=(0,n._)("br",null,null,-1),F=(0,n._)("strong",null,"Курс",-1),L=(0,n._)("br",null,null,-1),B=(0,n._)("strong",null,"Минимальный объем",-1),I=(0,n._)("br",null,null,-1),A=(0,n._)("strong",null,"Тип оплаты",-1),R=(0,n.Uk)(":"),E=(0,n._)("br",null,null,-1),G=(0,n._)("br",null,null,-1),J=(0,n._)("strong",null,"Условия",-1),M=(0,n.Uk)(":"),N=(0,n._)("br",null,null,-1),O=(0,n._)("br",null,null,-1),X=(0,n._)("br",null,null,-1),ll=(0,n._)("p",{class:"text-bold"},"Мои предложения",-1),el=(0,n._)("strong",null,"В сделке",-1),al=(0,n.Uk)(": "),nl=(0,n._)("br",null,null,-1),tl=(0,n._)("strong",null,"Дата размещения",-1),ul=(0,n._)("br",null,null,-1),ol=(0,n._)("strong",null,"Обьем",-1),sl=(0,n._)("br",null,null,-1),rl=(0,n._)("strong",null,"Курс",-1),il=(0,n._)("br",null,null,-1),dl=(0,n._)("strong",null,"Минимальный объем",-1),_l=(0,n._)("br",null,null,-1),ml=(0,n._)("strong",null,"Тип оплаты",-1),pl=(0,n.Uk)(":"),wl=(0,n._)("br",null,null,-1),cl=(0,n._)("br",null,null,-1),bl=(0,n._)("strong",null,"Условия",-1),fl=(0,n.Uk)(":"),gl=(0,n._)("br",null,null,-1),kl=(0,n._)("br",null,null,-1),Ul=(0,n._)("br",null,null,-1),vl={class:"q-gutter-md"},yl=(0,n._)("p",{class:"text-bold"},"Мои сделки",-1),hl=(0,n._)("strong",null,"Дата создания сделки",-1),Wl=(0,n._)("br",null,null,-1),zl=(0,n._)("br",null,null,-1),$l=(0,n._)("strong",null,"Объем в рублях",-1),ql=(0,n._)("br",null,null,-1),xl=(0,n._)("br",null,null,-1),Sl=(0,n._)("p",{class:"text-bold"},"Активные сделки",-1),Dl=(0,n._)("strong",null,"Дата создания сделки",-1),Cl=(0,n._)("br",null,null,-1),Ql=(0,n._)("br",null,null,-1),Vl=(0,n._)("strong",null,"Объем в рублях",-1),Zl=(0,n._)("br",null,null,-1),jl=(0,n._)("br",null,null,-1),Hl={key:1,class:"relative-position full-height"},Yl={__name:"Index",setup(l){let e=a(24409);const Yl=(0,o.Q)(),Kl=(0,i.T)(),Pl=(0,t.iH)("sell"),Tl=(0,t.iH)("offers"),Fl=(0,t.iH)(!1),Ll=(0,t.iH)({name:""});(0,n.YP)(Ll,(async l=>{await Nl()}));const Bl=(0,n.Fl)((()=>e.orderBy(Yl.assets,["id"]))),Il=(0,n.Fl)((()=>Kl.offers)),Al=(0,n.Fl)((()=>Kl.own_offers)),Rl=(0,n.Fl)((()=>Kl.own_trades)),El=(0,n.Fl)((()=>Kl.all_trades)),Gl=(0,n.Fl)((()=>Kl.user));async function Jl(l){await Nl(),l()}async function Ml(l){const e=await s.h.post("/api/p2p/delete_offer",{wallet:Gl.value.wallet,id:l});e.data.success?(0,r.d)("positive",e.data.message):(0,r.d)("negative",e.data.message),await Kl.get_own_offers()}async function Nl(){await Kl.getAllData(Ll.value.id)}return(0,n.wF)((async()=>{Fl.value=!Fl,Ll.value=Bl.value[0],await Nl(),Fl.value=!Fl})),(l,a)=>{const o=(0,n.up)("page-header"),s=(0,n.up)("q-tab"),r=(0,n.up)("q-tabs"),i=(0,n.up)("q-separator"),Yl=(0,n.up)("q-select"),Kl=(0,n.up)("q-btn"),Nl=(0,n.up)("q-pull-to-refresh"),Ol=(0,n.up)("q-inner-loading"),Xl=(0,n.up)("q-badge"),le=(0,n.up)("q-card-section"),ee=(0,n.up)("q-card"),ae=(0,n.up)("q-expansion-item"),ne=(0,n.up)("q-list"),te=(0,n.up)("q-scroll-area"),ue=(0,n.up)("q-tab-panel"),oe=(0,n.up)("q-tab-panels"),se=(0,n.up)("page-body"),re=(0,n.up)("page");return(0,n.wg)(),(0,n.j4)(re,null,{default:(0,n.w5)((()=>[(0,n.Wm)(se,{class:""},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{route_name:"wallet_index"}),d,(0,t.SU)(Gl).is_p2p_blocked?((0,n.wg)(),(0,n.iD)("div",Hl,[(0,n.Wm)(Ol,{class:"z-max",showing:"",label:"Доступ на P2P вам временно закрыт",color:"negative","label-class":"text-negative","label-style":"font-size: 1.1em"})])):((0,n.wg)(),(0,n.iD)("div",_,[(0,n.Wm)(r,{modelValue:Tl.value,"onUpdate:modelValue":a[0]||(a[0]=l=>Tl.value=l),align:"justify","narrow-indicator":""},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{"no-caps":"",class:"bg-white text-primary",name:"offers",label:"P2P"}),(0,n.Wm)(s,{"no-caps":"",class:"bg-white text-primary",name:"own",label:"Мои предложения и сделки"}),(0,t.SU)(Gl).is_p2p_admin?((0,n.wg)(),(0,n.j4)(s,{key:0,"no-caps":"",class:"bg-white text-negative",name:"admin",label:"Раздел админа"})):(0,n.kq)("",!0)])),_:1},8,["modelValue"]),(0,n.Wm)(i),(0,n.Wm)(oe,{modelValue:Tl.value,"onUpdate:modelValue":a[6]||(a[6]=l=>Tl.value=l),animated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ue,{name:"offers",class:"q-pa-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(Nl,{onRefresh:Jl},{default:(0,n.w5)((()=>[(0,n.Wm)(Yl,{outlined:"",rounded:"",options:(0,t.SU)(Bl),modelValue:Ll.value,"onUpdate:modelValue":a[1]||(a[1]=l=>Ll.value=l),"option-label":"name",class:"q-mb-md",behavior:"menu",label:"Выберите актив"},null,8,["options","modelValue"]),(0,n.Wm)(Kl,{label:"Создать предложение на покупку",onClick:a[2]||(a[2]=e=>l.$router.push({name:"p2p_new_buy_offer"})),rounded:"",unelevated:"","no-caps":"",color:"positive",class:"full-width q-mb-md q-py-md"}),(0,n.Wm)(Kl,{label:"Создать предложение на продажу",onClick:a[3]||(a[3]=e=>l.$router.push({name:"p2p_new_sell_offer"})),rounded:"",unelevated:"","no-caps":"",color:"negative",class:"full-width q-py-md"}),(0,n.Wm)(i,{spaced:"lg"})])),_:1}),(0,n.Wm)(r,{modelValue:Pl.value,"onUpdate:modelValue":a[4]||(a[4]=l=>Pl.value=l),align:"justify"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{"no-caps":"",class:"bg-white text-negative",name:"sell",label:`Продажа (${(0,t.SU)(Il).filter((l=>l.is_sell)).length})`},null,8,["label"]),(0,n.Wm)(s,{"no-caps":"",class:"bg-white text-positive",name:"buy",label:`Покупка (${(0,t.SU)(Il).filter((l=>!l.is_sell)).length})`},null,8,["label"])])),_:1},8,["modelValue"]),(0,n.Wm)(i),(0,n.Wm)(oe,{modelValue:Pl.value,"onUpdate:modelValue":a[5]||(a[5]=l=>Pl.value=l),animated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ue,{name:"buy",class:"no-padding"},{default:(0,n.w5)((()=>[(0,n.Wm)(te,{style:{height:"calc(100vh - 400px)"}},{default:(0,n.w5)((()=>[(0,n.Wm)(Ol,{class:"z-max",showing:Fl.value,color:"primary"},null,8,["showing"]),(0,n.Wm)(ne,{separator:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(e).orderBy((0,t.SU)(Il).filter((l=>!l.is_sell)),["course"],["desc"]),(e=>((0,n.wg)(),(0,n.j4)(ae,{clickable:"",group:"buy",label:`№${e.id} Объем ${e.amount} из ${e.start_amount}`,key:e.id,caption:`Курс ${e.course}`},{default:(0,n.w5)((()=>[(0,n.Wm)(ee,null,{default:(0,n.w5)((()=>[(0,n.Wm)(le,null,{default:(0,n.w5)((()=>[m,(0,n.Uk)(" "+(0,u.zw)(e.user.fio)+" ",1),e.user.is_online?((0,n.wg)(),(0,n.j4)(Xl,{key:0,color:"positive"},{default:(0,n.w5)((()=>[p])),_:1})):((0,n.wg)(),(0,n.j4)(Xl,{key:1,color:"negative"},{default:(0,n.w5)((()=>[w])),_:1})),c,b,(0,n.Uk)(": "+(0,u.zw)(new Date(e.created_at).toLocaleDateString()),1),f,g,(0,n.Uk)(": "+(0,u.zw)(e.amount)+" из "+(0,u.zw)(e.start_amount),1),k,U,(0,n.Uk)(": "+(0,u.zw)(e.course),1),v,y,(0,n.Uk)(": "+(0,u.zw)(e.min_amount),1),h,W,z,$,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.payment_types,(l=>((0,n.wg)(),(0,n.iD)("span",{key:l.id},(0,u.zw)(l.label)+"  ",1)))),128)),q,x,S,D,(0,n.Uk)(" "+(0,u.zw)(e.rules),1),C,Q,(0,n.Wm)(Kl,{color:"negative",disable:e.user.wallet===(0,t.SU)(Gl).wallet,onClick:a=>l.$router.push({name:"p2p_offer",params:{offer_id:e.id}}),rounded:"","no-caps":"",unelevated:"",class:"full-width",label:"Продать"},null,8,["disable","onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","caption"])))),128))])),_:1})])),_:1})])),_:1}),(0,n.Wm)(ue,{name:"sell",class:"no-padding"},{default:(0,n.w5)((()=>[(0,n.Wm)(te,{style:{height:"calc(100vh - 400px)"}},{default:(0,n.w5)((()=>[(0,n.Wm)(Ol,{class:"z-max",showing:Fl.value,color:"primary"},null,8,["showing"]),(0,n.Wm)(ne,{separator:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(e).orderBy((0,t.SU)(Il).filter((l=>l.is_sell)),["course"],["asc"]),(e=>((0,n.wg)(),(0,n.j4)(ae,{clickable:"",group:"sell",key:e.id,label:`№${e.id} Объем ${e.amount} из ${e.start_amount}`,caption:`Курс ${e.course}`},{default:(0,n.w5)((()=>[(0,n.Wm)(ee,null,{default:(0,n.w5)((()=>[(0,n.Wm)(le,null,{default:(0,n.w5)((()=>[V,(0,n.Uk)(" "+(0,u.zw)(e.user.fio)+" ",1),e.user.is_online?((0,n.wg)(),(0,n.j4)(Xl,{key:0,color:"positive"},{default:(0,n.w5)((()=>[Z])),_:1})):((0,n.wg)(),(0,n.j4)(Xl,{key:1,color:"negative"},{default:(0,n.w5)((()=>[j])),_:1})),H,Y,(0,n.Uk)(": "+(0,u.zw)(new Date(e.created_at).toLocaleDateString()),1),K,P,(0,n.Uk)(": "+(0,u.zw)(e.amount)+" из "+(0,u.zw)(e.start_amount),1),T,F,(0,n.Uk)(": "+(0,u.zw)(e.course)+" руб",1),L,B,(0,n.Uk)(": "+(0,u.zw)(e.min_amount),1),I,A,R,E,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.payment_types,(l=>((0,n.wg)(),(0,n.iD)("span",{key:l.id},(0,u.zw)(l.label)+"  ",1)))),128)),G,J,M,N,(0,n.Uk)(" "+(0,u.zw)(e.rules),1),O,X,(0,n.Wm)(Kl,{color:"positive",disable:e.user.wallet===(0,t.SU)(Gl).wallet,onClick:a=>l.$router.push({name:"p2p_offer",params:{offer_id:e.id}}),rounded:"","no-caps":"",unelevated:"",class:"full-width",label:"Купить"},null,8,["disable","onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","caption"])))),128))])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,n.Wm)(ue,{name:"own",class:"q-pa-md"},{default:(0,n.w5)((()=>[ll,(0,n.Wm)(ne,{separator:"",class:"q-mb-md"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(Al),(l=>((0,n.wg)(),(0,n.j4)(ae,{clickable:"",group:"offers",label:`#${l.id} - На ${l.is_sell?"продажу":"покупку"} ${l.amount} ${l.asset.name}`,key:l.id,caption:`Курс ${l.course}`},{default:(0,n.w5)((()=>[(0,n.Wm)(ee,null,{default:(0,n.w5)((()=>[(0,n.Wm)(le,null,{default:(0,n.w5)((()=>[el,al,(0,n._)("span",{class:(0,u.C_)(["text-bold",l.is_in_trade?"text-negative":"text-positive"])},(0,u.zw)(l.is_in_trade?"ДА":"НЕТ"),3),nl,tl,(0,n.Uk)(": "+(0,u.zw)(new Date(l.created_at).toLocaleDateString()),1),ul,ol,(0,n.Uk)(": "+(0,u.zw)(l.amount),1),sl,rl,(0,n.Uk)(": "+(0,u.zw)(l.course)+" руб",1),il,dl,(0,n.Uk)(": "+(0,u.zw)(l.min_amount),1),_l,ml,pl,wl,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.payment_types,(l=>((0,n.wg)(),(0,n.iD)("span",{key:l.id},(0,u.zw)(l.label)+"  ",1)))),128)),cl,bl,fl,gl,(0,n.Uk)(" "+(0,u.zw)(l.rules),1),kl,Ul,(0,n._)("div",vl,[(0,n.Wm)(Kl,{color:"warning",disable:"",rounded:"","no-caps":"",unelevated:"",label:"Редактировать"}),(0,n.Wm)(Kl,{color:"negative",onClick:e=>Ml(l.id),rounded:"","no-caps":"",unelevated:"",label:"Удалить"},null,8,["onClick"])])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","caption"])))),128))])),_:1}),yl,(0,n.Wm)(ne,{separator:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(Rl),(e=>((0,n.wg)(),(0,n.j4)(ae,{clickable:"",group:"offers",label:`# ${e.id} - ${e.offer.is_sell?e.opponent.wallet===(0,t.SU)(Gl).wallet?"Покупка":"Продажа":e.opponent.wallet===(0,t.SU)(Gl).wallet?"Продажа":"Покупка"}\n                                ${e.asset_amount} ${e.offer.asset.name} по офферу #${e.offer.id}`,"header-class":`${e.offer.is_sell?e.opponent.wallet===(0,t.SU)(Gl).wallet?"text-positive":"text-negative":e.opponent.wallet===(0,t.SU)(Gl).wallet?"text-negative":"text-positive"}\n                                ${e.asset_amount} ${e.offer.asset.name}`,key:e.id,caption:`Сумма сделки в рублях ${e.fiat_amount} | Статус сделки: ${e.status.label}`},{default:(0,n.w5)((()=>[(0,n.Wm)(ee,null,{default:(0,n.w5)((()=>[(0,n.Wm)(le,null,{default:(0,n.w5)((()=>[hl,(0,n.Uk)(": "+(0,u.zw)(new Date(e.created_at).toLocaleDateString()),1),Wl,(0,n._)("strong",null,"Обьем в "+(0,u.zw)(e.offer.asset.name),1),(0,n.Uk)(": "+(0,u.zw)(e.asset_amount)+" ",1),zl,$l,(0,n.Uk)(": "+(0,u.zw)(e.fiat_amount),1),ql,xl,(0,n.Wm)(Kl,{dense:"",class:"full-width q-py-md",color:"primary","no-caps":"",unelevated:"",onClick:a=>l.$router.push({name:"p2p_trade",params:{uid:e.UID}}),rounded:"",label:"В сделку"},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","header-class","caption"])))),128))])),_:1})])),_:1}),(0,n.Wm)(ue,{name:"admin",class:"q-pa-md"},{default:(0,n.w5)((()=>[Sl,(0,n.Wm)(ne,{separator:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(El).filter((l=>l.in_progress)),(e=>((0,n.wg)(),(0,n.j4)(ae,{clickable:"",group:"offers",label:`№${e.id} Cтатус: ${e.status.label}`,"header-class":`text-${e.status.color}`,key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(ee,null,{default:(0,n.w5)((()=>[(0,n.Wm)(le,null,{default:(0,n.w5)((()=>[Dl,(0,n.Uk)(": "+(0,u.zw)(new Date(e.created_at).toLocaleDateString()),1),Cl,(0,n._)("strong",null,"Обьем в "+(0,u.zw)(e.offer.asset.name),1),(0,n.Uk)(": "+(0,u.zw)(e.asset_amount)+" ",1),Ql,Vl,(0,n.Uk)(": "+(0,u.zw)(e.fiat_amount),1),Zl,jl,(0,n.Wm)(Kl,{dense:"",class:"full-width q-py-md",color:"primary","no-caps":"",unelevated:"",onClick:a=>l.$router.push({name:"p2p_trade",params:{uid:e.UID}}),rounded:"",label:"В сделку"},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","header-class"])))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"])]))])),_:1})])),_:1})}}};var Kl=a(47817),Pl=a(70900),Tl=a(50926),Fl=a(89800),Ll=a(84106),Bl=a(90699),Il=a(18401),Al=a(24455),Rl=a(66663),El=a(60854),Gl=a(13246),Jl=a(61123),Ml=a(44458),Nl=a(63190),Ol=a(20990),Xl=a(69984),le=a.n(Xl);const ee=Yl,ae=ee;le()(Yl,"components",{QTabs:Kl.Z,QTab:Pl.Z,QSeparator:Tl.Z,QTabPanels:Fl.Z,QTabPanel:Ll.Z,QPullToRefresh:Bl.Z,QSelect:Il.Z,QBtn:Al.Z,QScrollArea:Rl.Z,QInnerLoading:El.Z,QList:Gl.Z,QExpansionItem:Jl.Z,QCard:Ml.Z,QCardSection:Nl.Z,QBadge:Ol.Z})}}]);