"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[892],{74892:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Z});var t=a(59835),u=a(60499),n=a(86970),d=a(87270),p=a(31655),o=a(91569),s=a(9991);const i=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),m={key:0,class:"text-negative text-bold text-center"},_={key:1,class:"text-primary text-bold text-center"},v={key:1},c=["innerHTML"],r={__name:"User",setup(e){const l=(0,p.T)(),a=(0,u.iH)(!1),r=(0,u.iH)(!1),w=(0,u.iH)(null),b=(0,u.iH)(null),g=(0,u.iH)(null),y=(0,u.iH)(null),q=(0,s.QT)(),k=(0,t.Fl)((()=>l.user)),f=(0,t.Fl)((()=>l.payment_methods));async function h(e){const a=await o.h.post("/api/p2p/delete_payment",{id:e});a.data.success?((0,d.d)("positive",a.data.message),await l.get_user()):(0,d.d)("negative",a.data.message)}async function W(){a.value=!a.value;await o.h.post("/api/p2p/add_tg",{wallet:k.value.wallet,use_tg:r.value,chat_id:w.value});await l.get_user(),(0,d.d)("positive",q.t("p2p_saved")),a.value=!a.value}async function V(){a.value=!a.value;await o.h.post("/api/p2p/add_payment",{wallet:k.value.wallet,selected_method:b.value,selected_type:g.value,selected_type_requsites:y.value});await l.get_user(),(0,d.d)("positive",q.t("p2p_pay_added")),a.value=!a.value,g.value=null,b.value=null,y.value=null}return(0,t.wF)((async()=>{k.value.use_telegramm?r.value=!0:r.value=!1,k.value.use_telegramm?w.value=k.value.telegramm:r.value=null})),(e,l)=>{const d=(0,t.up)("page-header"),p=(0,t.up)("q-item-label"),o=(0,t.up)("q-item-section"),s=(0,t.up)("q-btn"),q=(0,t.up)("q-item"),$=(0,t.up)("q-select"),x=(0,t.up)("q-input"),Q=(0,t.up)("q-card-section"),U=(0,t.up)("q-card"),Z=(0,t.up)("q-expansion-item"),C=(0,t.up)("q-checkbox"),H=(0,t.up)("q-list"),S=(0,t.up)("page-body"),D=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(D,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d),i,0===(0,u.SU)(k).payment_types.length?((0,t.wg)(),(0,t.iD)("p",m,(0,n.zw)(e.$t("p2p_add_req")),1)):((0,t.wg)(),(0,t.iD)("p",_,(0,n.zw)(e.$t("p2p_your_req")),1)),(0,t.Wm)(H,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,u.SU)(k).payment_types,(e=>((0,t.wg)(),(0,t.j4)(q,{key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.label),1)])),_:2},1024),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.payment_info),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(o,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{icon:"delete",onClick:l=>h(e.id),round:"",dense:"",color:"negative"},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128)),(0,t.Wm)(Z,{label:e.$t("p2p_add_req")},{default:(0,t.w5)((()=>[(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Wm)($,{outlined:"",rounded:"",options:(0,u.SU)(f),modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=e=>b.value=e),class:"q-mb-md",behavior:"menu",label:e.$t("p2p_payment_system")},null,8,["options","modelValue","label"]),b.value?((0,t.wg)(),(0,t.j4)($,{key:0,outlined:"",rounded:"",options:b.value.types,modelValue:g.value,"onUpdate:modelValue":l[1]||(l[1]=e=>g.value=e),class:"q-mb-md",behavior:"menu",label:e.$t("p2p_payment_type")},null,8,["options","modelValue","label"])):(0,t.kq)("",!0),g.value?((0,t.wg)(),(0,t.iD)("div",v,[(0,t.Wm)(x,{outlined:"",rounded:"",modelValue:y.value,"onUpdate:modelValue":l[2]||(l[2]=e=>y.value=e),type:"textarea",label:e.$t("p2p_req"),clearable:"",class:"q-mb-md"},null,8,["modelValue","label"]),(0,t.Wm)(s,{color:"positive",loading:a.value,disable:!y.value,onClick:V,rounded:"","no-caps":"",unelevated:"",class:"full-width q-py-md",label:e.$t("p2p_add")},null,8,["loading","disable","label"])])):(0,t.kq)("",!0)])),_:1})])),_:1})])),_:1},8,["label"]),(0,t.Wm)(Z,{label:`${(0,u.SU)(k).use_telegramm?e.$t("p2p_tg_del"):e.$t("p2p_tg_add")} ${e.$t("p2p_tg")}`},{default:(0,t.w5)((()=>[(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(C,{modelValue:r.value,"onUpdate:modelValue":l[3]||(l[3]=e=>r.value=e),label:e.$t("p2p_use_tg")},null,8,["modelValue","label"]),r.value?((0,t.wg)(),(0,t.iD)("p",{key:0,class:"",innerHTML:e.$t("p2p_use_tg_text")},null,8,c)):(0,t.kq)("",!0),r.value?((0,t.wg)(),(0,t.j4)(x,{key:1,outlined:"",rounded:"",modelValue:w.value,"onUpdate:modelValue":l[4]||(l[4]=e=>w.value=e),label:"ID группы",clearable:"",class:"q-mb-md"},null,8,["modelValue"])):(0,t.kq)("",!0),(0,t.Wm)(s,{color:"positive",loading:a.value,onClick:W,rounded:"","no-caps":"",unelevated:"",class:"full-width q-py-md q-mt-md",label:e.$t("p2p_tg_save")},null,8,["loading","label"])])),_:1})])),_:1})])),_:1},8,["label"])])),_:1})])),_:1})])),_:1})}}};var w=a(13246),b=a(490),g=a(76749),y=a(33115),q=a(24455),k=a(50651),f=a(44458),h=a(63190),W=a(57786),V=a(13119),$=a(11221),x=a(69984),Q=a.n(x);const U=r,Z=U;Q()(r,"components",{QList:w.Z,QItem:b.Z,QItemSection:g.Z,QItemLabel:y.Z,QBtn:q.Z,QExpansionItem:k.Z,QCard:f.Z,QCardSection:h.Z,QSelect:W.Z,QInput:V.Z,QCheckbox:$.Z})}}]);