"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[874],{70874:(e,l,a)=>{a.r(l),a.d(l,{default:()=>W});var u=a(59835),d=a(60499),n=a(86970),o=a(23459),t=a(46190),s=a(31655),m=a(91569),p=a(87270),i=a(18910),v=a(17779);const r=(0,u._)("div",{class:"",style:{height:"50px"}},null,-1),c={key:0},b={key:1},y={class:"text-caption"},_={key:2},w={__name:"NewBuyOffer",setup(e){const l=(0,o.Q)(),w=(0,t.c)(),V=(0,d.iH)(null),g=(0,i.tv)();let h=a(24409);const q=(0,s.T)(),f=(0,d.iH)(null),k=(0,d.iH)(null),W=(0,d.iH)(1),U=(0,d.iH)(null),x=(0,d.iH)(null),H=((0,u.Fl)((()=>w.addresses[w.currentAddressIdx].address)),(0,u.Fl)((()=>q.user))),F=(0,u.Fl)((()=>h.orderBy(l.assets,["id"])));(0,u.Fl)((()=>w.balances));async function Q(){v.log(f.value);const e=await m.h.post("/api/p2p/add_offer",{is_sell:!1,asset_key:f.value.key,wallet:H.value.wallet,amount:k.value,min_amount:W.value,payment_types:V.value,course:U.value,rules:x.value});e.data.success?(0,p.d)("positive",e.data.message):(0,p.d)("negative",e.data.message),await q.get_own_offers(),g.push({name:"p2p_index"})}return(e,l)=>{const a=(0,u.up)("page-header"),o=(0,u.up)("q-select"),t=(0,u.up)("q-input"),s=(0,u.up)("q-btn"),m=(0,u.up)("page-body"),p=(0,u.up)("page");return(0,u.wg)(),(0,u.j4)(p,null,{default:(0,u.w5)((()=>[(0,u.Wm)(m,{class:"q-pa-md"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,{route_name:"p2p_index"}),r,(0,u.Wm)(o,{outlined:"",rounded:"",options:(0,d.SU)(F),modelValue:f.value,"onUpdate:modelValue":l[0]||(l[0]=e=>f.value=e),"option-label":"name",class:"q-mb-md",behavior:"menu",label:"Выберите актив для покупки"},null,8,["options","modelValue"]),f.value?((0,u.wg)(),(0,u.iD)("div",c,[(0,u.Wm)(o,{outlined:"",rounded:"",options:(0,d.SU)(H).payment_types,modelValue:V.value,"onUpdate:modelValue":l[1]||(l[1]=e=>V.value=e),class:"q-mb-md",behavior:"menu",multiple:"",label:"Выберите платежные ситемы"},null,8,["options","modelValue"])])):(0,u.kq)("",!0),V.value&&V.value.length>0?((0,u.wg)(),(0,u.iD)("div",b,[(0,u.Wm)(t,{outlined:"",rounded:"",modelValue:k.value,"onUpdate:modelValue":l[2]||(l[2]=e=>k.value=e),class:"q-mb-md",type:"number",label:"Введите обьем оффера"},null,8,["modelValue"]),(0,u.Wm)(t,{outlined:"",rounded:"",modelValue:W.value,"onUpdate:modelValue":l[3]||(l[3]=e=>W.value=e),class:"q-mb-md",type:"number",label:"Введите минимальный обьем сделки"},null,8,["modelValue"]),(0,u._)("p",y,"Текущий курс: "+(0,n.zw)(f.value.course),1),(0,u.Wm)(t,{outlined:"",rounded:"",modelValue:U.value,"onUpdate:modelValue":l[4]||(l[4]=e=>U.value=e),class:"q-mb-md",type:"number",label:"Введите курс покупки в рублях"},null,8,["modelValue"]),(0,u.Wm)(t,{outlined:"",rounded:"",modelValue:x.value,"onUpdate:modelValue":l[5]||(l[5]=e=>x.value=e),class:"q-mb-md",type:"textarea",label:"Введите условия покупки"},null,8,["modelValue"])])):(0,u.kq)("",!0),k.value&&W.value&&U.value?((0,u.wg)(),(0,u.iD)("div",_,[(0,u.Wm)(s,{dense:"",class:"full-width q-py-md",color:"positive","no-caps":"",unelevated:"",disable:!k.value||W.value>k.value,onClick:Q,rounded:"",label:`Создать оффер на ${k.value*U.value} руб`},null,8,["disable","label"])])):(0,u.kq)("",!0)])),_:1})])),_:1})}}};var V=a(18401),g=a(13119),h=a(24455),q=a(69984),f=a.n(q);const k=w,W=k;f()(w,"components",{QSelect:V.Z,QInput:g.Z,QBtn:h.Z})}}]);