"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[874],{70874:(e,l,a)=>{a.r(l),a.d(l,{default:()=>q});var u=a(59835),d=a(60499),n=a(23459),o=a(46190),t=a(31655),s=a(91569),m=a(87270),p=a(18910),i=a(17779);const v=(0,u._)("div",{class:"",style:{height:"50px"}},null,-1),r={key:0},c={key:1},b={key:2},y={__name:"NewBuyOffer",setup(e){const l=(0,n.Q)(),y=(0,o.c)(),V=(0,d.iH)(null),_=(0,p.tv)();let w=a(24409);const g=(0,t.T)(),h=(0,d.iH)(null),k=(0,d.iH)(null),q=(0,d.iH)(1),f=(0,d.iH)(null),U=(0,d.iH)(null),W=((0,u.Fl)((()=>y.addresses[y.currentAddressIdx].address)),(0,u.Fl)((()=>g.user))),H=(0,u.Fl)((()=>w.orderBy(l.assets,["id"]))),x=(0,u.Fl)((()=>y.balances));async function F(){i.log(h.value);const e=await s.h.post("/api/p2p/add_offer",{is_sell:!1,asset_key:h.value.key,wallet:W.value.wallet,amount:k.value,min_amount:q.value,payment_types:V.value,course:f.value,rules:U.value});e.data.success?(0,m.d)("positive",e.data.message):(0,m.d)("negative",e.data.message),await g.get_own_offers(),_.push({name:"p2p_index"})}return(e,l)=>{const a=(0,u.up)("page-header"),n=(0,u.up)("q-select"),o=(0,u.up)("q-input"),t=(0,u.up)("q-btn"),s=(0,u.up)("page-body"),m=(0,u.up)("page");return(0,u.wg)(),(0,u.j4)(m,null,{default:(0,u.w5)((()=>[(0,u.Wm)(s,{class:"q-pa-md"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,{route_name:"p2p_index"}),v,(0,u.Wm)(n,{outlined:"",rounded:"",options:(0,d.SU)(H),modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=e=>h.value=e),"option-label":"name",class:"q-mb-md",behavior:"menu",label:"Выберите актив для покупки"},null,8,["options","modelValue"]),h.value?((0,u.wg)(),(0,u.iD)("div",r,[(0,u.Wm)(n,{outlined:"",rounded:"",options:(0,d.SU)(W).payment_types,modelValue:V.value,"onUpdate:modelValue":l[1]||(l[1]=e=>V.value=e),class:"q-mb-md",behavior:"menu",multiple:"",label:"Выберите платежные ситемы"},null,8,["options","modelValue"])])):(0,u.kq)("",!0),V.value&&V.value.length>0?((0,u.wg)(),(0,u.iD)("div",c,[(0,u.Wm)(o,{outlined:"",rounded:"",modelValue:k.value,"onUpdate:modelValue":l[2]||(l[2]=e=>k.value=e),class:"q-mb-md",type:"number",label:"Введите обьем оффера"},null,8,["modelValue"]),(0,u.Wm)(o,{outlined:"",rounded:"",modelValue:q.value,"onUpdate:modelValue":l[3]||(l[3]=e=>q.value=e),class:"q-mb-md",type:"number",label:"Введите минимальный обьем сделки"},null,8,["modelValue"]),(0,u.Wm)(o,{outlined:"",rounded:"",modelValue:f.value,"onUpdate:modelValue":l[4]||(l[4]=e=>f.value=e),class:"q-mb-md",type:"number",label:"Введите курс покупки в рублях"},null,8,["modelValue"]),(0,u.Wm)(o,{outlined:"",rounded:"",modelValue:U.value,"onUpdate:modelValue":l[5]||(l[5]=e=>U.value=e),class:"q-mb-md",type:"textarea",label:"Введите условия покупки"},null,8,["modelValue"])])):(0,u.kq)("",!0),k.value&&q.value&&f.value?((0,u.wg)(),(0,u.iD)("div",b,[(0,u.Wm)(t,{dense:"",class:"full-width q-py-md",color:"positive","no-caps":"",unelevated:"",disable:k.value>(0,d.SU)(x)[h.value.key][0][1],onClick:F,rounded:"",label:`Создать оффер на ${k.value*f.value} руб`},null,8,["disable","label"])])):(0,u.kq)("",!0)])),_:1})])),_:1})}}};var V=a(18401),_=a(13119),w=a(24455),g=a(69984),h=a.n(g);const k=y,q=k;h()(y,"components",{QSelect:V.Z,QInput:_.Z,QBtn:w.Z})}}]);