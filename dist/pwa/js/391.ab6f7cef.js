(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[391],{35391:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>be});var s=l(59835),t=l(60499),n=l(86970),u=l(29565),i=l.n(u),o=l(23459),m=l(46190),d=l(91569),c=l(39981),r=l.n(c),p=l(18910),v=l(87270),b=l(65054);const y=(0,s._)("div",{class:"",style:{height:"60px"}},null,-1),_={key:0,class:"q-mb-lg"},U={key:0},w=(0,s._)("p",{class:"q-mb-sm text-caption"},"Укажите кошелек с которого будете совершать транзакцию*",-1),g=(0,s._)("p",{class:"q-mb-sm text-caption"},"С указанного вами кошелька совершаете транзакцию на адрес:",-1),x={class:"text-weight-medium q-mb-sm"},k={class:"q-mb-sm text-caption"},q=(0,s.Uk)(" Отправляйте на данный адрес только "),S={class:"text-weight-bold"},h=(0,s._)("br",null,null,-1),f=(0,s._)("span",{class:"text-negative"},"Отправка любых других монет приведет к их безвозвратной потере",-1),z=(0,s._)("br",null,null,-1),V=(0,s.Uk)(" Совершая транзакцию в "),H={class:"text-weight-bold"},W=(0,s._)("br",null,null,-1),A=(0,s.Uk)(" Зачисление происходит в сроки до 24 часов с момента транзакции (указаны максимальные сроки) "),F=(0,s._)("p",{class:"q-mb-sm text-caption"},"Сумма пополнения*",-1),C={key:1},D=(0,s._)("p",{class:"q-mb-sm text-caption"},"Cовершаете транзакцию на адрес:",-1),$={class:"text-weight-medium q-mb-sm"},Q={class:"q-mb-sm text-caption"},R=(0,s.Uk)(" Отправляйте на данный адрес только "),j={class:"text-weight-bold"},B=(0,s._)("br",null,null,-1),M=(0,s._)("span",{class:"text-negative"},"Отправка любых других монет приведет к их безвозвратной потере",-1),Z=(0,s._)("br",null,null,-1),N=(0,s._)("p",{class:"q-mb-sm text-caption text-bold"},"После проведения транзакции, скопируйте Transaction Hash, вставьте в поле ниже и нажмите кнопку проверить",-1),I={key:1,class:"q-mb-lg"},J={key:0},O={class:"q-mb-sm text-caption"},T=(0,s._)("br",null,null,-1),E={class:"text-bold text-negative"},G={class:"q-mb-sm text-caption text-bold"},P={key:1},Y={key:0},K=(0,s._)("p",{class:"q-mb-sm text-caption"},[(0,s.Uk)("Сумма пополнения в рублях* ("),(0,s._)("span",{class:"text-bold text-negative"},"мининум 1000 руб"),(0,s.Uk)(")")],-1),L={class:"q-mb-sm text-caption text-bold"},X={key:1},ee=(0,s._)("p",{class:"text-bold"},"Внимание!",-1),ae={class:"q-mb-sm text-caption"},le={class:"q-mb-sm text-caption text-weight-bold"},se=(0,s._)("p",{class:"q-mb-sm text-caption text-weight-bold"}," ВНИМАНИЕ НАЗНАЧЕНИЕ ПЛАТЕЖА ДОЛЖНО СОВПАДАТЬ С УКАЗАННЫМ В ИНСТРУКЦИИ.",-1),te={class:"q-mb-sm text-caption"},ne=(0,s._)("div",{class:"text-center"},[(0,s._)("img",{style:{width:"300px",height:"300px","object-fit":"contain"},src:i()})],-1),ue=(0,s._)("p",{class:"q-mb-lg text-caption"},[(0,s._)("span",{style:{"font-weight":"bold"}},"Реквизиты для оплаты взносов"),(0,s._)("br"),(0,s.Uk)(" Номер счёта: 40703810326350000009"),(0,s._)("br"),(0,s.Uk)(" Валюта: RUR"),(0,s._)("br"),(0,s.Uk)(' Название: ПОТРЕБИТЕЛЬСКИЙ КООПЕРАТИВ ПО РАЗВИТИЮ ГРАЖДАНСКИХ ИНИЦИАТИВ "РОЛФ"'),(0,s._)("br"),(0,s.Uk)(" ИНН: 2366034781"),(0,s._)("br"),(0,s.Uk)(" КПП: 236601001"),(0,s._)("br"),(0,s.Uk)(' Банк: ФИЛИАЛ "РОСТОВСКИЙ" АО "АЛЬФА-БАНК"'),(0,s._)("br"),(0,s.Uk)(" БИК: 046015207"),(0,s._)("br"),(0,s.Uk)(" Кор. счёт: 30101810500000000207"),(0,s._)("br"),(0,s.Uk)(" Юридический адрес компании: улица ГОРЬКОГО, д. 60/4, кв./оф. 44, Краснодарский край, р-н ГОРОД-КУРОРТ СОЧИ, г. Сочи")],-1),ie={__name:"Buy",setup(e){const a=(0,o.Q)(),l=(0,m.c)(),u=(0,p.yj)(),i="https://rupay.pro";let c=(0,t.iH)(null),ie=(0,t.iH)(null),oe=(0,t.iH)(null),me=(0,t.iH)(null),de=(0,t.iH)(!1),ce=(0,t.iH)(!1),re=(0,t.iH)(0),pe=(0,t.iH)(300),ve=(0,t.iH)(0),be=(0,t.iH)(null);(0,t.iH)(.02),(0,t.iH)(0);const ye=(0,t.iH)({label:"Visa/Mastercard",currency:"RUB",value:"Card1",min:300,max:5e4,commission:0}),_e=[{label:"Visa/Mastercard",value:"Card1",currency:"RUB",min:300,max:5e4,commission:0},{label:"Qiwi",value:"Qiwi",currency:"RUB",min:300,max:5e4,commission:0},{label:"Перевод на Р/С",value:"rs",currency:"RUB",min:1e3,max:5e4,commission:0}],Ue=(0,s.Fl)((()=>2===qe.value.key||1048610===qe.value.key?(ve.value=pe.value,parseFloat(parseFloat(pe.value/qe.value.course)-parseFloat(pe.value/qe.value.course*ye.value.commission)).toFixed(5)):(ve.value=pe.value*qe.value.course_api,parseFloat(pe.value-pe.value*ye.value.commission).toFixed(5))));async function we(){de.value=!de.value;const e=await r().post(i+"/api/data/check_tx_hash",{tx:be.value,wallet:Se.value,addr:qe.value.from_address});e.data.success?(0,v.d)("positive",JSON.stringify(e.data.message)):(0,v.d)("negative",JSON.stringify(e.data.message)),de.value=!de.value}async function ge(){de.value=!de.value;const e=await r().post(i+"/api/data/create_payment",{wallet:Se.value,type:ye.value.value,want_to_buy:Ue.value,amount:ve.value,currency:2===qe.value.key||1643===qe.value.key||1048610===qe.value.key?ye.value.currency:"USD",asset_id:qe.value.key});de.value=!de.value,e.data.success?window.location.href=e.data.url:(0,v.d)("negative",JSON.stringify(e.data.message))}async function xe(){de.value=!de.value,await d.h.post("/api/settings/payment_request",{code:ie.value,wallet:Se.value,fromWallet:me.value,currency:qe.value.name,amount:oe.value});let e="";1048610===qe.value.key&&(e="🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️"),await r().get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=${e}Запрос на пополнение с RUPAY%0A\n  Код : ${ie.value}%0A\n  С кошелека ${me.value}%0A\n  На кошелек ${Se.value}%0A\n  Актив ${qe.value.name}%0A\n  Сумма пополнения: ${oe.value} ${qe.value.name}\n\n`),ie.value=he(4),me.value=null,oe.value=null,de.value=!de.value,ce.value=!0,(0,v.d)("positive","Запрос успешно отправлен<br>Ожидаем поступление средств")}function ke(){(0,b.Z)(qe.value.from_address).then((()=>{(0,v.d)("positive","Адрес кошелька скопирован")})).catch((()=>{}))}const qe=(0,s.Fl)((()=>a.assets.find((e=>e.key===re.value)))),Se=(0,s.Fl)((()=>l.addresses[l.currentAddressIdx].address));function he(e){for(var a="",l="0123456789",s=l.length,t=0;t<e;t++)a+=l.charAt(Math.floor(Math.random()*s));return a}return(0,s.wF)((async()=>{re.value=parseInt(u.query.asset),c.value=u.query.type,ie.value=he(4),qe.value.payment_system&&(ye.value={label:qe.value.payment_system,value:qe.value.payment_system,currency:`${qe.value.name}`,min:qe.value.payment_min/qe.value.course_api,max:qe.value.payment_max/qe.value.course_api,commission:qe.value.payment_comission/100},pe.value=qe.value.payment_min/qe.value.course_api)})),(e,a)=>{const l=(0,s.up)("page-header"),u=(0,s.up)("q-input"),i=(0,s.up)("q-btn"),o=(0,s.up)("q-select"),m=(0,s.up)("q-scroll-area"),d=(0,s.up)("page-body"),r=(0,s.up)("page");return(0,s.wg)(),(0,s.j4)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{class:"q-px-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(l),y,"other"===(0,t.SU)(c)?((0,s.wg)(),(0,s.iD)("div",_,[1048610!==(0,t.SU)(qe).key?((0,s.wg)(),(0,s.iD)("div",U,[w,(0,s.Wm)(u,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,t.SU)(me),"onUpdate:modelValue":a[0]||(a[0]=e=>(0,t.dq)(me)?me.value=e:me=e)},null,8,["modelValue"]),(0,s._)("div",null,[g,(0,s._)("p",x,(0,n.zw)((0,t.SU)(qe).from_address),1),(0,s.Wm)(i,{rounded:"",class:"q-mb-sm",color:"primary",label:"Скопировать адрес",onClick:ke,"no-caps":"",size:"12px",unelevated:"",icon:"las la-copy"}),(0,s._)("p",k,[q,(0,s._)("span",S,(0,n.zw)((0,t.SU)(qe).name)+" "+(0,n.zw)((0,t.SU)(qe).description),1),h,f,z,V,(0,s._)("span",H,(0,n.zw)((0,t.SU)(qe).name),1),(0,s.Uk)(" вы делаете добровольный имущественный паевой взнос ПКРГИ РОЛФ Равный количеству отправляемых "+(0,n.zw)((0,t.SU)(qe).name)+" Вывод монет с кошелька является выплатой по вашему взносу",1),W,A]),F,(0,s.Wm)(u,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(oe),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,t.dq)(oe)?oe.value=e:oe=e),type:"number"},null,8,["modelValue"]),(0,s.Wm)(i,{rounded:"",color:"primary",loading:(0,t.SU)(de),onClick:xe,disable:!(0,t.SU)(oe)||!(0,t.SU)(me),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])])):((0,s.wg)(),(0,s.iD)("div",C,[D,(0,s._)("p",$,(0,n.zw)((0,t.SU)(qe).from_address),1),(0,s.Wm)(i,{rounded:"",class:"q-mb-sm",color:"primary",label:"Скопировать адрес",onClick:ke,"no-caps":"",size:"12px",unelevated:"",icon:"las la-copy"}),(0,s._)("p",Q,[R,(0,s._)("span",j,(0,n.zw)((0,t.SU)(qe).name)+" "+(0,n.zw)((0,t.SU)(qe).description),1),B,M,Z]),N,(0,s.Wm)(u,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(be),"onUpdate:modelValue":a[2]||(a[2]=e=>(0,t.dq)(be)?be.value=e:be=e)},null,8,["modelValue"]),(0,s.Wm)(i,{rounded:"",color:"primary",loading:(0,t.SU)(de),onClick:we,disable:!(0,t.SU)(be),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Проверить транзакцию"},null,8,["loading","disable"])]))])):((0,s.wg)(),(0,s.iD)("div",I,[(0,s.Wm)(m,{style:{height:"85vh"}},{default:(0,s.w5)((()=>["rs"!==ye.value.value?((0,s.wg)(),(0,s.iD)("div",J,[2===(0,t.SU)(qe).key||1643===(0,t.SU)(qe).key||1048610===(0,t.SU)(qe).key?((0,s.wg)(),(0,s.j4)(o,{key:0,rounded:"",modelValue:ye.value,"onUpdate:modelValue":a[3]||(a[3]=e=>ye.value=e),outlined:"",dense:"",options:_e,class:"q-mb-md",label:"Выберите тип оплаты"},null,8,["modelValue"])):(0,s.kq)("",!0),(0,s._)("p",O,[(0,s.Uk)("Сумма пополнения в "+(0,n.zw)(ye.value.currency)+"*",1),T,(0,s._)("span",E," мининум "+(0,n.zw)(ye.value.min)+" "+(0,n.zw)(ye.value.currency)+", максимум "+(0,n.zw)(ye.value.max)+" "+(0,n.zw)(ye.value.currency)+", комиссия "+(0,n.zw)(100*ye.value.commission)+" %",1)]),(0,s.Wm)(u,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(pe),"onUpdate:modelValue":a[4]||(a[4]=e=>(0,t.dq)(pe)?pe.value=e:pe=e),type:"number",label:"На какую сумму хотите пополнить*"},null,8,["modelValue"]),(0,s._)("p",G,"Вы получите: "+(0,n.zw)((0,t.SU)(Ue))+" "+(0,n.zw)((0,t.SU)(qe).name),1),(0,s.Wm)(i,{color:"primary",rounded:"",loading:(0,t.SU)(de),onClick:ge,disable:(0,t.SU)(pe)<ye.value.min||(0,t.SU)(pe)>ye.value.max,unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):((0,s.wg)(),(0,s.iD)("div",P,[(0,t.SU)(ce)?((0,s.wg)(),(0,s.iD)("div",X,[ee,(0,s._)("p",ae,"Для пополнения вашего баланса "+(0,n.zw)((0,t.SU)(qe).name)+" по указанным реквизитам ниже совершаете оплату в назначении платежа указать:",1),(0,s._)("p",le," Добровольный членский взнос от ФИО, КОД "+(0,n.zw)((0,t.SU)(ie)),1),se,(0,s._)("p",te," Зачисление "+(0,n.zw)((0,t.SU)(qe).name)+" происходит в течении нескольких часов после получения средств на счет! Рекомендуем совершать оплату с Альфа Банка, тогда зачисление будет происходить быстрее. Оплата с других банков может затянуть зачисление до 5 рабочих дней.",1),ne,ue])):((0,s.wg)(),(0,s.iD)("div",Y,[K,(0,s.Wm)(u,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(oe),"onUpdate:modelValue":a[5]||(a[5]=e=>(0,t.dq)(oe)?oe.value=e:oe=e),type:"number"},null,8,["modelValue"]),(0,s._)("p",L,"Вы получите: "+(0,n.zw)((0,t.SU)(oe)/(0,t.SU)(qe).course)+" "+(0,n.zw)((0,t.SU)(qe).name),1),(0,s.Wm)(i,{color:"primary",loading:(0,t.SU)(de),onClick:xe,disable:!(0,t.SU)(oe)||(0,t.SU)(oe)<1e3,unelevated:"","no-caps":"",class:"full-width q-py-md q-mb-md",rounded:"",label:"Отправить"},null,8,["loading","disable"])]))]))])),_:1})]))])),_:1})])),_:1})}}};var oe=l(13119),me=l(24455),de=l(66663),ce=l(18401),re=l(69984),pe=l.n(re);const ve=ie,be=ve;pe()(ie,"components",{QInput:oe.Z,QBtn:me.Z,QScrollArea:de.Z,QSelect:ce.Z})},29565:(e,a,l)=>{e.exports=l.p+"img/qr.28e572d7.jpg"}}]);