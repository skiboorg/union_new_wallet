"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[530],{75008:(e,a,t)=>{t.d(a,{C:()=>d,d:()=>n});var l=t(13433),s=t(17779);const n=({seed:e,password:a})=>{const t={status:!0,seed:e},s=l.createCipher("aes192",a);return s.update(JSON.stringify(t),"utf8","hex")+s.final("hex")},d=({hash:e,password:a})=>{try{const t=l.createDecipher("aes192",a),s=t.update(e,"hex","utf8")+t.final("utf8"),n=JSON.parse(s);return!!n.status&&n.seed}catch(t){return s.log(t),!1}}},51530:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Ee});var l=t(59835),s=t(60499),n=t(86970),d=t(32743),i=t(76028),o=t(43463),u=t(46190),c=t(18910);const m={class:"q-mb-none q-mr-sm"},r=(0,l._)("div",{class:"",style:{height:"60px"}},null,-1),w={class:"text-right"},p=["href"],f=(0,l.Uk)("Дата"),g=(0,l.Uk)("Создатель"),_={style:{"max-width":"90%"},class:"ellipsis"},v=(0,l.Uk)("Подтверждений"),x=(0,l.Uk)("Размер"),W=(0,l.Uk)("Подпись"),h={style:{"max-width":"100%"},class:"ellipsis"},k=(0,l.Uk)("Получатель"),b={style:{"max-width":"90%"},class:"ellipsis"},y=(0,l.Uk)("Сумма"),U=(0,l.Uk)("Статус"),q=(0,l.Uk)("Выполнена"),S=(0,l.Uk)("Все данные транзакции"),z={style:{"word-break":"break-all"},class:""},C={props:["transactionInfo"]},Z=Object.assign(C,{__name:"TransactionInfo",setup(e){const a=(0,o.s)();return(t,d)=>{const i=(0,l.up)("q-btn"),o=(0,l.up)("q-header"),u=(0,l.up)("q-item-section"),c=(0,l.up)("q-item"),C=(0,l.up)("q-badge"),Z=(0,l.up)("q-list"),Q=(0,l.up)("q-card-section"),V=(0,l.up)("q-card"),I=(0,l.up)("q-dialog"),j=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(I,{modelValue:(0,s.SU)(a).transactionInfoModalVisible,"onUpdate:modelValue":d[0]||(d[0]=e=>(0,s.SU)(a).transactionInfoModalVisible=e),persistent:"",maximized:"","transition-show":"slide-left","transition-hide":"slide-right"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{class:"bg-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(i,{label:"Назад","no-caps":"",icon:"las la-angle-left",unelevated:""},null,512),[[j]]),(0,l._)("p",m,"Транзакция #"+(0,n.zw)(e.transactionInfo.seqNo),1)])),_:1}),r,(0,l.Wm)(Q,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l._)("p",w,[(0,l._)("a",{class:"text-dark text-weight-medium",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${e.transactionInfo.seqNo}&lang=ru`,target:"_blank"}," Открыть в блок-эксплорере",8,p)]),(0,l.Wm)(Z,{dense:"",separator:""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[f])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.fullDate),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",_,(0,n.zw)(e.transactionInfo.creator),1),(0,l.Uk)(" "+(0,n.zw)(e.transactionInfo.creator_name?`${e.transactionInfo.creator_name}`:""),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[v])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.confirmations),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[x])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.size),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[W])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",h,(0,n.zw)(e.transactionInfo.signature),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",b,(0,n.zw)(e.transactionInfo.recipient),1),(0,l.Uk)(" "+(0,n.zw)(e.transactionInfo.recipient_name?`${e.transactionInfo.recipient_name}`:""),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[y])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.amount)+" "+(0,n.zw)(e.transactionInfo.asset_name),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[U])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{color:"positive","text-color":"white",style:{width:"30%"}},{default:(0,l.w5)((()=>[q])),_:1})])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding bg-grey-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[S])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.transactionInfo,((e,a)=>((0,l.wg)(),(0,l.j4)(c,{class:"no-padding",key:a},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a),1)])),_:2},1024),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",z,(0,n.zw)(e),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}}});var Q=t(32074),V=t(44458),I=t(16602),j=t(24455),H=t(63190),M=t(13246),P=t(490),A=t(76749),D=t(20990),B=t(62146),F=t(69984),$=t.n(F);const O=Z,K=O;$()(Z,"components",{QDialog:Q.Z,QCard:V.Z,QHeader:I.Z,QBtn:j.Z,QCardSection:H.Z,QList:M.Z,QItem:P.Z,QItemSection:A.Z,QBadge:D.Z}),$()(Z,"directives",{ClosePopup:B.Z});var L=t(61957),T=t(87270),Y=t(75008),N=t(17779);const R={props:["transactionInfo"]},E=Object.assign(R,{__name:"PinCodeModal",emits:["pincode_ок"],setup(e,{emit:a}){const t=(0,o.s)();function n(e){const l=localStorage.getItem("hash"),s=(0,Y.C)({hash:l,password:e});N.log(s),s?(a("pincode_ок"),t.togglePinCodeModalVisible()):(0,T.d)("negative","Неверный пинкод")}return(e,a)=>{const d=(0,l.up)("pin-code"),i=(0,l.up)("q-btn"),o=(0,l.up)("q-card-section"),u=(0,l.up)("q-card"),c=(0,l.up)("q-dialog");return(0,l.wg)(),(0,l.j4)(c,{modelValue:(0,s.SU)(t).pinCodeModalVisible,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,s.SU)(t).pinCodeModalVisible=e),persistent:"",maximized:"","transition-show":"slide-left","transition-hide":"slide-right"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"bg-white fullscreen"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{class:"flex column items-center justify-center fullscreen"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{showDigits:!1,onPincode_ready:n}),(0,l.Wm)(i,{class:"q-mt-md",onClick:a[0]||(a[0]=e=>(0,s.SU)(t).togglePinCodeModalVisible()),"no-caps":"",color:"negative",label:"Отмена"})])),_:1})])),_:1})])),_:1},8,["modelValue"])}}}),J=E,G=J;$()(E,"components",{QDialog:Q.Z,QCard:V.Z,QCardSection:H.Z,QBtn:j.Z});var X=t(4682),ee=t(23459),ae=t(98030),te=t(17779);const le=(0,l._)("div",{class:"",style:{height:"50px"}},null,-1),se=(0,l.Uk)("Ваш баланс"),ne=(0,l._)("p",{class:"text-bold q-mb-none"},"Основная информация",-1),de=(0,l.Uk)("Кол-во отправляемого актива*"),ie=(0,l.Uk)("Адрес получателя*"),oe={id:"video-container"},ue=(0,l._)("video",{id:"qr-video"},null,-1),ce=[ue],me=(0,l._)("p",{class:"text-bold q-mb-none"},"Сообщение к отправке",-1),re=(0,l.Uk)("Заголовок сообщения"),we=(0,l.Uk)("Сообщение"),pe=(0,l.Uk)(" Подтверждение отправки актива "),fe=(0,l.Uk)("Актив"),ge=(0,l.Uk)("Количество"),_e=(0,l.Uk)("Получатель"),ve={style:{"word-break":"break-all"}},xe=(0,l.Uk)("Комиссия транзакции"),We={key:0},he=(0,l._)("p",{class:"text-caption text-white q-pa-md bg-negative"},"Внимание, если адрес получателя указан неверно, Вы не сможете вернуть средства назад",-1),ke={__name:"SendAssetModal",props:{asset:Object},emits:["close"],setup(e,{emit:a}){const d=e,i=(0,o.s)(),{EraChain:m}=((0,c.tv)(),t(99407)),r=(0,u.c)(),w=(0,ee.Q)();let p=(0,s.iH)(!1);const f=(0,s.iH)(!1),g=(0,s.iH)(!1);let _=null;const v=(0,l.Fl)((()=>r.balances));(0,l.Fl)((()=>r.verifyPersonData));async function x(){g.value=!0;const e=document.getElementById("qr-video");te.log(e);const a=new X.Z(e,(e=>{te.log("decoded qr code:",e);try{h.value.address=e.data.split(":")[0],h.value.amount=e.data.split(":")[2],g.value=!1,a.stop()}catch(t){g.value=!1,a.stop()}}),{});_=a,await a.start()}function W(){i.togglePinCodeModalVisible()}const h=(0,s.iH)({amount:"",address:"",title:"",message:"",encrypted:!1,fee:0,raw:0});function k(){h.value={amount:"",address:"",title:"",message:"",encrypted:!0,fee:0,raw:0}}async function b(){f.value=!f.value;const e=!0,a=await w.getKeyPair(),t=new m.Type.KeyPair(a),l={assetKey:d.asset.key,amount:h.value.amount};te.log(t),te.log(l);const s=await ae.era.tranRawSendAsset(t,l,h.value.address,h.value.title,h.value.message,h.value.encrypted,e);te.log(s),s.error?(0,T.d)("negative",s.error.message):(h.value.fee=s.fee,h.value.raw=s.raw),f.value=!f.value}async function y(){f.value=!f.value;const e=await ae.era.broadcast64(h.value.raw);te.log(e),e.error?((0,T.d)("negative",e.message),f.value=!f.value):((0,T.d)("info","Транзакция создана"),p.value=!1,f.value=!f.value,i.toggleSendAssetModalVisible())}function U(){_.stop(),a("close")}return(a,t)=>{const d=(0,l.up)("q-btn"),o=(0,l.up)("unconfirmed-tx-icon"),u=(0,l.up)("q-header"),c=(0,l.up)("q-item-section"),m=(0,l.up)("q-item"),r=(0,l.up)("q-input"),w=(0,l.up)("q-separator"),_=(0,l.up)("btn"),q=(0,l.up)("q-list"),S=(0,l.up)("q-card-section"),z=(0,l.up)("q-card"),C=(0,l.up)("q-dialog"),Z=(0,l.up)("q-card-actions"),Q=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(C,{modelValue:(0,s.SU)(i).sendAssetModalVisible,"onUpdate:modelValue":t[4]||(t[4]=e=>(0,s.SU)(i).sendAssetModalVisible=e),persistent:"",maximized:"",class:(0,n.C_)({hidden:(0,s.SU)(i).isPageHidden}),"transition-show":"slide-left","transition-hide":"slide-right",onBeforeHide:U},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{class:"bg-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(d,{"no-caps":"",label:`Отправка актива ${e.asset.name}`,icon:"las la-angle-left",unelevated:""},null,8,["label"]),[[Q]]),(0,l.Wm)(o)])),_:1}),le,(0,l.Wm)(S,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{side:"",class:"text-weight-bold text-dark"},{default:(0,l.w5)((()=>[se])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)((0,s.SU)(v)[e.asset.key][0][1])+" "+(0,n.zw)(e.asset.name),1)])),_:1})])),_:1}),ne,(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[de])),_:1})])),_:1}),(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{rounded:"",dense:"",outlined:"",type:"number",modelValue:h.value.amount,"onUpdate:modelValue":t[0]||(t[0]=e=>h.value.amount=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[ie])),_:1}),(0,l.Wm)(c,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{size:"18px","text-color":"dark",unelevated:"",icon:"las la-qrcode",onClick:x})])),_:1})])),_:1}),(0,l.wy)((0,l._)("div",oe,ce,512),[[L.F8,g.value]]),(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{rounded:"",dense:"",outlined:"",modelValue:h.value.address,"onUpdate:modelValue":t[1]||(t[1]=e=>h.value.address=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(w,{class:"q-my-md"}),me,(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[re])),_:1})])),_:1}),(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{rounded:"",dense:"",outlined:"",modelValue:h.value.title,"onUpdate:modelValue":t[2]||(t[2]=e=>h.value.title=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[we])),_:1})])),_:1}),(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{rounded:"",type:"textarea",dense:"",outlined:"",modelValue:h.value.message,"onUpdate:modelValue":t[3]||(t[3]=e=>h.value.message=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(w,{class:"q-my-md"}),(0,l.Wm)(_,{label:"Отправить",onClick:W,disabled:!h.value.amount||!h.value.address,outline:!1},null,8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","class"]),(0,l.Wm)(C,{modelValue:(0,s.SU)(p),"onUpdate:modelValue":t[5]||(t[5]=e=>(0,s.dq)(p)?p.value=e:p=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeHide:k},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{class:"bg-white text-dark",style:{width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{class:"text-weight-bold"},{default:(0,l.w5)((()=>[pe])),_:1}),(0,l.Wm)(S,{class:"q-py-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{dense:"",separator:"",class:"q-mb-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[fe])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.asset.name),1)])),_:1})])),_:1}),(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[ge])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(h.value.amount)+" "+(0,n.zw)(e.asset.name),1)])),_:1})])),_:1}),(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[_e])),_:1}),(0,l.Wm)(c,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",ve,(0,n.zw)(h.value.address),1)])),_:1})])),_:1}),(0,l.Wm)(m,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[xe])),_:1}),(0,l.Wm)(c,{class:"text-caption"},{default:(0,l.w5)((()=>[h.value.fee>0?((0,l.wg)(),(0,l.iD)("span",We,(0,n.zw)(h.value.fee)+" "+(0,n.zw)(e.asset.key<4e3?e.asset.name:"OLF"),1)):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1}),he])),_:1}),(0,l.Wm)(Z,{class:"bg-white text-teal"},{default:(0,l.w5)((()=>[0===h.value.fee?((0,l.wg)(),(0,l.j4)(d,{key:0,label:"Расчет комиссии",rounded:"",loading:f.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"info",onClick:b,outline:!1},null,8,["loading"])):((0,l.wg)(),(0,l.j4)(d,{key:1,label:"Подтвердить",rounded:"",loading:f.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"positive",onClick:y,outline:!1},null,8,["loading"])),(0,l.wy)((0,l.Wm)(d,{label:"Отменить",rounded:"","no-caps":"",color:"negative",class:"full-width",unelevated:"",outline:"",loading:f.value},null,8,["loading"]),[[Q]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)((0,s.SU)(G),{onPincode_ок:t[6]||(t[6]=e=>(0,s.dq)(p)?p.value=!0:p=!0)})],64)}}};var be=t(64152),ye=t(50926),Ue=t(11221),qe=t(11821);const Se=ke,ze=Se;$()(ke,"components",{QDialog:Q.Z,QCard:V.Z,QHeader:I.Z,QBtn:j.Z,QCardSection:H.Z,QList:M.Z,QItem:P.Z,QItemSection:A.Z,QInput:be.Z,QSeparator:ye.Z,QCheckbox:Ue.Z,QCardActions:qe.Z}),$()(ke,"directives",{ClosePopup:B.Z});const Ce={class:"page-body--top flex column items-center justify-evenly"},Ze={class:"text-center"},Qe=["src"],Ve={class:"text-center"},Ie={class:"flex items-center justify-evenly full-width text-white"},je=(0,l._)("p",{class:"no-margin text-caption lh100"},[(0,l.Uk)("Отправить"),(0,l._)("br"),(0,l.Uk)("в сети RUPAY")],-1),He=(0,l._)("p",{class:"no-margin text-caption lh100"},[(0,l.Uk)("Получить"),(0,l._)("br"),(0,l.Uk)("в сети RUPAY")],-1),Me=(0,l._)("p",{class:"no-margin text-caption"},"Обмен",-1),Pe={class:""},Ae={class:"flex items-center justify-between q-pa-md"},De=(0,l._)("p",{class:"q-mb-none"},"История транзакций",-1),Be={class:"asset-date q-pa-md bg-grey-2 q-mb-none"},Fe={style:{"max-width":"70%"},class:"ellipsis inline-block"},$e={key:0,class:"text-center q-pa-md"},Oe={components:{TransactionInfo:K,SendAssetModal:ze}},Ke=Object.assign(Oe,{__name:"Asset",setup(e){const a=(0,o.s)(),t=(0,u.c)(),m=(0,c.yj)(),r="https://scan.rupay.pro";let w=(0,s.iH)(0),p=(0,s.iH)({}),f=(0,s.iH)([]),g=(0,s.iH)(!1),_=(0,s.iH)(0);const v=(0,l.Fl)((()=>t.addresses[t.currentAddressIdx].address)),x=(0,l.Fl)((()=>d.ZP.isEmpty(f.value))),W=(0,l.Fl)((()=>t.assets[w.value])),h=(0,l.Fl)((()=>t.balances[W.value.key][0][1])),k=(0,l.Fl)((()=>h.value*W.value.course));async function b(e,a){g.value=!g.value;const t=await(0,i.sg)(v.value,W.value.key,e,a);f.value=d.ZP.groupBy(t,"timestamp"),g.value=!g.value}async function y(){_.value+=50,await b(50,_.value)}return(0,l.bv)((async()=>{w.value=m.params.asset_key,await b(50,_.value)})),(e,t)=>{const d=(0,l.up)("page-header"),i=(0,l.up)("q-avatar"),o=(0,l.up)("q-icon"),u=(0,l.up)("q-item-section"),c=(0,l.up)("q-item-label"),m=(0,l.up)("q-item"),w=(0,l.up)("q-list"),U=(0,l.up)("q-btn"),q=(0,l.up)("q-scroll-area"),S=(0,l.up)("page-body"),z=(0,l.up)("page");return(0,l.wg)(),(0,l.j4)(z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[(0,l._)("div",Ce,[(0,l.Wm)(d),(0,l._)("div",Ze,[(0,l.Wm)(i,{size:"50px",class:"q-mr-md"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:(0,s.SU)(r)+(0,s.SU)(W).iconURL,alt:""},null,8,Qe)])),_:1})]),(0,l._)("div",Ve,[(0,l._)("p",{class:(0,n.C_)(["text-bold text-h6 text-white no-margin",{blur:e.$global.isBlur}])},(0,n.zw)((0,s.SU)(h))+" "+(0,n.zw)((0,s.SU)(W).name),3),(0,l._)("p",{class:(0,n.C_)(["text-weight-medium text-body1 text-white no-margin",{blur:e.$global.isBlur}])},"~ "+(0,n.zw)(e.$filters.convertAmount((0,s.SU)(k)))+" ₽",3)]),(0,l._)("div",Ie,[(0,l._)("div",{class:"text-center",onClick:t[0]||(t[0]=e=>(0,s.SU)(a).toggleSendAssetModalVisible())},[(0,l.Wm)(i,{class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{size:"22px",name:"las la-upload"})])),_:1}),je]),(0,l._)("div",{class:"text-center",onClick:t[1]||(t[1]=a=>e.$router.push(`/wallet/receive?asset=${(0,s.SU)(W).key}&amount=0`))},[(0,l.Wm)(i,{class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{size:"22px",name:"las la-download"})])),_:1}),He]),(0,l._)("div",{class:"text-center",onClick:t[2]||(t[2]=a=>e.$router.push({name:"wallet_exchange"}))},[(0,l.Wm)(i,{class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{size:"22px",name:"las la-exchange-alt"})])),_:1}),Me])])]),(0,l._)("div",Pe,[(0,l._)("div",Ae,[De,(0,l.Wm)(o,{onClick:t[3]||(t[3]=e=>((0,s.dq)(_)?_.value=0:_=0,b(50,(0,s.SU)(_)))),name:"las la-sync",color:"primary",size:"26px",class:(0,n.C_)({rotate:(0,s.SU)(g)})},null,8,["class"])]),(0,l.Wm)(q,{style:{height:"50vh",width:"100vw"}},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{style:{width:"100vw"},separator:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,s.SU)(f),((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"",key:t},[(0,l._)("p",Be,(0,n.zw)(t),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,((e,t)=>((0,l.wg)(),(0,l.j4)(m,{clickable:"",onClick:t=>((0,s.dq)(p)?p.value=e:p=e,(0,s.SU)(a).toggleTransactionInfoModalVisible()),key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{avatar:""},{default:(0,l.w5)((()=>[(0,s.SU)(v)!==e.creator&&1===Math.sign(e.amount)?((0,l.wg)(),(0,l.j4)(o,{key:0,color:"positive",name:"las la-arrow-down"})):((0,l.wg)(),(0,l.j4)(o,{key:1,color:"negative",name:"las la-arrow-up"}))])),_:2},1024),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[e.message?((0,l.wg)(),(0,l.j4)(c,{key:0,overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.message),1)])),_:2},1024)):((0,l.wg)(),(0,l.j4)(c,{key:1,overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.actionName),1)])),_:2},1024)),(0,l.Wm)(c,{caption:""},{default:(0,l.w5)((()=>[(0,l._)("span",Fe,(0,n.zw)((0,s.SU)(v)!==e.creator&&1===Math.sign(e.amount)?"от":"кому")+" "+(0,n.zw)((0,s.SU)(v)!==e.creator&&1===Math.sign(e.amount)?e.creator:e.recipient),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(u,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(parseFloat(e.amount).toFixed(4)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])))),128))])),_:1}),(0,s.SU)(x)?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",$e,[(0,l.Wm)(U,{rounded:"",color:"primary",label:"Загрузить еще",loading:(0,s.SU)(g),"no-caps":"",outline:"",icon:"add",onClick:y},null,8,["loading"])]))])),_:1})])])),_:1}),(0,l.Wm)((0,s.SU)(K),{"transaction-info":(0,s.SU)(p)},null,8,["transaction-info"]),(0,l.Wm)((0,s.SU)(ze),{asset:(0,s.SU)(W),onClose:t[4]||(t[4]=e=>b(50,0))},null,8,["asset"])])),_:1})}}});var Le=t(61357),Te=t(22857),Ye=t(66663),Ne=t(33115);const Re=Ke,Ee=Re;$()(Ke,"components",{QAvatar:Le.Z,QIcon:Te.Z,QScrollArea:Ye.Z,QList:M.Z,QItem:P.Z,QItemSection:A.Z,QItemLabel:Ne.Z,QBtn:j.Z})}}]);