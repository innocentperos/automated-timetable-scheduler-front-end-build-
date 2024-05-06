import{E as $,F as q,G as me,b as e,v as S,B as A,H as pe,I as ce,J as fe,K as ve,L as Q,M as Ve,N as ye,O as X,P as be,Q as ge,n as Se,s as _e,r as f,o as H,y as K,w as a,z as o,A as k,d as C,R as we,D as Z,S as he,C as B,t as ee,a as W,T as te,x as ke,p as xe,e as Ce,_ as Ie}from"./entry.tQWHpBLf.js";import{u as Pe}from"./form-validations.GCMU-Axm.js";import{u as Le}from"./departments-store.L9CsyjDw.js";import{u as le}from"./use-logger.h09id-NO.js";import{L as Ae}from"./types.H3O6Ekup.js";import{V as ae}from"./VContainer.HgjfEFlY.js";import{u as D,V as U,a as v}from"./VRow.WlLBb9Jc.js";import{V as oe,a as Re,b as Te}from"./VCard.T8BHTP73.js";import{V as R,m as Be,u as We,a as Ee,b as Ue}from"./VBtn._oQ1uiNP.js";import{a as re,R as Fe,V as se}from"./index.AmeJTHgO.js";import{c as $e}from"./createSimpleFunctional.413Od-xt.js";import{V as qe}from"./VAvatar.NX62-iRj.js";import{m as De,V as O,a as Ne,b as F}from"./VWindowItem.1NJacqKo.js";import{m as je,V as J}from"./VSheet.C_PFHFB9.js";import{V as ze}from"./VDivider.KeqwIEcH.js";import{V as Ge}from"./VForm.Y4-k9QxA.js";import{V as G}from"./VTextField.6LPIlZmm.js";import{V as Y}from"./VSelect.4u-stGGs.js";import{V as Me}from"./VDialog.SCbeIy52.js";import{V as He}from"./VSpacer.t62wCS3Z.js";import{V as Ke}from"./VBanner.T3kYHC40.js";import{V as Ye,a as Oe}from"./VMain.xwUrnvbJ.js";import"./courses-store.hFHtJJlz.js";import"./use-fetch-header.3DHnPbz-.js";import"./use-notification.Rdal1ke4.js";import"./VProgressCircular.DTBbBXDU.js";import"./transition.31NosCAE.js";import"./lazy.hsVx4m50.js";import"./ssrBoot.0aXw1rzb.js";import"./VInput.AAxW8xuy.js";import"./index.qvKOBlyP.js";import"./forwardRefs.y8pOSn8h.js";import"./easing.imumzmxr.js";import"./VList.lljtylUW.js";import"./dialog-transition.OyYDh7J5.js";import"./VMenu.CmTKH41A.js";import"./VOverlay.1V9m9YmJ.js";import"./VCheckboxBtn.ztQGvB4X.js";import"./VChip.ttJWPZTa.js";import"./layout.RwfjoJ97.js";const ne=$({color:String,disabled:{type:[Boolean,String],default:!1},prevText:{type:String,default:"$vuetify.stepper.prev"},nextText:{type:String,default:"$vuetify.stepper.next"}},"VStepperActions"),Je=q()({name:"VStepperActions",props:ne(),emits:{"click:prev":()=>!0,"click:next":()=>!0},setup(t,b){let{emit:l,slots:r}=b;const{t:d}=me();function p(){l("click:prev")}function m(){l("click:next")}return D(()=>{const n={onClick:p},V={onClick:m};return e("div",{class:"v-stepper-actions"},[e(re,{defaults:{VBtn:{disabled:["prev",!0].includes(t.disabled),text:d(t.prevText),variant:"text"}}},{default:()=>{var c;return[((c=r.prev)==null?void 0:c.call(r,{props:n}))??e(R,n,null)]}}),e(re,{defaults:{VBtn:{color:t.color,disabled:["next",!0].includes(t.disabled),text:d(t.nextText),variant:"tonal"}}},{default:()=>{var c;return[((c=r.next)==null?void 0:c.call(r,{props:V}))??e(R,V,null)]}})])}),{}}}),ue=$e("v-stepper-header"),Qe=$({color:String,title:String,subtitle:String,complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},error:Boolean,errorIcon:{type:String,default:"$error"},icon:String,ripple:{type:[Boolean,Object],default:!0},rules:{type:Array,default:()=>[]},...Be()},"VStepperItem"),M=q()({name:"VStepperItem",directives:{Ripple:Fe},props:Qe(),emits:{"group:selected":t=>!0},setup(t,b){let{slots:l}=b;const r=We(t,ie,!0),d=S(()=>(r==null?void 0:r.value.value)??t.value),p=S(()=>t.rules.every(h=>h()===!0)),m=S(()=>!t.disabled&&t.editable),n=S(()=>t.error||!p.value),V=S(()=>t.complete||t.rules.length>0&&p.value),c=S(()=>n.value?t.errorIcon:V.value?t.completeIcon:t.editable?t.editIcon:t.icon),I=S(()=>({canEdit:m.value,hasError:n.value,hasCompleted:V.value,title:t.title,subtitle:t.subtitle,step:d.value,value:t.value}));return D(()=>{var _,w,P;const h=(!r||r.isSelected.value||V.value||m.value)&&!n.value&&!t.disabled,g=!!(t.title!=null||l.title),E=!!(t.subtitle!=null||l.subtitle);function i(){r==null||r.toggle()}return A(e("button",{class:["v-stepper-item",{"v-stepper-item--complete":V.value,"v-stepper-item--disabled":t.disabled,"v-stepper-item--error":n.value},r==null?void 0:r.selectedClass.value],disabled:!t.editable,onClick:i},[e(qe,{key:"stepper-avatar",class:"v-stepper-item__avatar",color:h?t.color:void 0,size:24},{default:()=>{var L;return[((L=l.icon)==null?void 0:L.call(l,I.value))??(c.value?e(se,{icon:c.value},null):d.value)]}}),e("div",{class:"v-stepper-item__content"},[g&&e("div",{key:"title",class:"v-stepper-item__title"},[((_=l.title)==null?void 0:_.call(l,I.value))??t.title]),E&&e("div",{key:"subtitle",class:"v-stepper-item__subtitle"},[((w=l.subtitle)==null?void 0:w.call(l,I.value))??t.subtitle]),(P=l.default)==null?void 0:P.call(l,I.value)])]),[[pe("ripple"),t.ripple&&t.editable,null]])}),{}}}),Xe=Symbol.for("vuetify:v-stepper"),Ze=$({...ce(De(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VStepperWindow"),et=q()({name:"VStepperWindow",props:Ze(),emits:{"update:modelValue":t=>!0},setup(t,b){let{slots:l}=b;const r=fe(Xe,null),d=ve(t,"modelValue"),p=S({get(){var m;return d.value!=null||!r?d.value:(m=r.items.value.find(n=>r.selected.value.includes(n.id)))==null?void 0:m.value},set(m){d.value=m}});return D(()=>{const m=O.filterProps(t);return e(O,Q({_as:"VStepperWindow"},m,{modelValue:p.value,"onUpdate:modelValue":n=>p.value=n,class:"v-stepper-window",mandatory:!1,touch:!1}),l)}),{}}}),tt=$({...Ne()},"VStepperWindowItem"),lt=q()({name:"VStepperWindowItem",props:tt(),setup(t,b){let{slots:l}=b;return D(()=>{const r=F.filterProps(t);return e(F,Q({_as:"VStepperWindowItem"},r,{class:"v-stepper-window-item"}),l)}),{}}}),ie=Symbol.for("vuetify:v-stepper"),at=$({altLabels:Boolean,bgColor:String,editable:Boolean,hideActions:Boolean,items:{type:Array,default:()=>[]},itemTitle:{type:String,default:"title"},itemValue:{type:String,default:"value"},mobile:Boolean,nonLinear:Boolean,flat:Boolean,...Ee({mandatory:"force",selectedClass:"v-stepper-item--selected"}),...je(),...Ve(ne(),["prevText","nextText"])},"VStepper"),ot=q()({name:"VStepper",props:at(),emits:{"update:modelValue":t=>!0},setup(t,b){let{slots:l}=b;const{items:r,next:d,prev:p,selected:m}=Ue(t,ie),{color:n,editable:V,prevText:c,nextText:I}=ye(t),h=S(()=>t.items.map((i,_)=>{const w=X(i,t.itemTitle,i),P=X(i,t.itemValue,_+1);return{title:w,value:P,raw:i}})),g=S(()=>r.value.findIndex(i=>m.value.includes(i.id))),E=S(()=>t.disabled?t.disabled:g.value===0?"prev":g.value===r.value.length-1?"next":!1);return be({VStepperItem:{editable:V,prevText:c,nextText:I},VStepperActions:{color:n,disabled:E,prevText:c,nextText:I}}),D(()=>{const i=J.filterProps(t),_=!!(l.header||t.items.length),w=t.items.length>0,P=!t.hideActions&&!!(w||l.actions);return e(J,Q(i,{color:t.bgColor,class:["v-stepper",{"v-stepper--alt-labels":t.altLabels,"v-stepper--flat":t.flat,"v-stepper--non-linear":t.nonLinear,"v-stepper--mobile":t.mobile},t.class],style:t.style}),{default:()=>{var L,j;return[_&&e(ue,{key:"stepper-header"},{default:()=>[h.value.map((x,y)=>e(ge,null,[!!y&&e(ze,null,null),e(M,x,{default:l[`header-item.${x.value}`]??l.header,icon:l.icon,title:l.title,subtitle:l.subtitle})]))]}),w&&e(et,{key:"stepper-window"},{default:()=>[h.value.map(x=>e(lt,{value:x.value},{default:()=>{var y,z;return((y=l[`item.${x.value}`])==null?void 0:y.call(l,x))??((z=l.item)==null?void 0:z.call(l,x))}}))]}),(L=l.default)==null?void 0:L.call(l,{prev:p,next:d}),P&&(((j=l.actions)==null?void 0:j.call(l,{next:d,prev:p}))??e(Je,{key:"stepper-actions","onClick:prev":p,"onClick:next":d},l))]}})}),{prev:p,next:d}}}),N=t=>(xe("data-v-1ea44ee3"),t=t(),Ce(),t),rt=N(()=>W("span",{class:"text-h3 py-4"},"Welcome user",-1)),st=N(()=>W("span",{class:"text-h6"}," Let get you started with a new account ",-1)),nt=N(()=>W("span",null,"Let confirm that your email address has not been used by another user",-1)),ut=N(()=>W("div",{class:"pl-4"},"Registration Successful",-1)),it={class:"d-flex justify-space-between w-100 px-10"},dt=N(()=>W("span",{class:"text-subtitle-1"},"If you already have an account, you can login ",-1)),mt=Se({__name:"register",setup(t){_e("not-authenticated");const b=f(!1),l=f(!1),r=f(""),d=f(""),p=f(""),m=f(""),n=f("student"),V=f(),c=f(),I=f(!1),h=f(!1),g=Pe(),E=Le().all(),i=f(!1),_=f(""),w=f(!1);async function P(){try{w.value=!0,await $fetch("/accounts/check_email/",{baseURL:te().public.baseURL,method:"post",body:{email:r.value}}),_.value="Email already used"}catch(T){console.log(T);const s=T;if(!s.statusCode)return;switch(s.statusCode){case 400:_.value="Please provide your email address";break;case 404:i.value=!0,_.value="",y.value="user-type"}}finally{w.value=!1}}const L=f(!1);async function j(){if(!h.value)return;const T={level:c.value,department:V.value,email:r.value,password:d.value,user_type:n.value,first_name:p.value,last_name:m.value};le().info("Form data","Registration form data",T);try{L.value=!0,await $fetch("/accounts/register/",{baseURL:te().public.baseURL,body:T,method:"post"}),b.value=!0}catch(s){le().error("Registration Failed","Error registering user",s)}finally{L.value=!1}}function x(){ke().replace({name:"auth-login",query:{email:r.value}})}const y=f("email"),z=S(()=>!(!["student","staff"].includes(n.value)||!V.value||n.value=="student"&&!c.value)),de=S(()=>!(!p.value||!m.value||!d.value));return(T,s)=>(H(),K(Oe,{theme:o(I)?"light":"dark"},{default:a(()=>[e(Ye,null,{default:a(()=>[e(ae,{style:{height:"100vh"}},{default:a(()=>[e(U,{"align-content":"center",justify:"center",class:"w-100 h-100"},{default:a(()=>[e(v,{lg:"4",md:"10",cols:12,class:"d-flex align-start w-100"},{default:a(()=>[e(oe,{class:"pa-5 d-flex flex-column w-100"},{default:a(()=>[rt,st]),_:1})]),_:1}),e(v,{cols:12,md:"10",lg:"8"},{default:a(()=>[e(ot,{class:"mb-2"},{default:a(()=>[e(ue,{modelValue:o(y),"onUpdate:modelValue":s[0]||(s[0]=u=>k(y)?y.value=u:null)},{default:a(()=>[e(M,{value:"email",complete:o(i)},{default:a(()=>[C(" Check Email ")]),_:1},8,["complete"]),e(M,{value:"user-type",color:"primary",complete:o(y)=="user-type"},{default:a(()=>[C(" Account Type ")]),_:1},8,["complete"]),e(M,{value:"personal",color:"primary",complete:o(y)=="personal"},{default:a(()=>[C(" Personal Info ")]),_:1},8,["complete"])]),_:1},8,["modelValue"])]),_:1}),e(Ge,{modelValue:o(h),"onUpdate:modelValue":s[12]||(s[12]=u=>k(h)?h.value=u:null),onSubmit:s[13]||(s[13]=we(()=>{},["prevent"]))},{default:a(()=>[e(J,{class:"pa-4","max-height":600,style:{"overflow-y":"auto"}},{default:a(()=>[e(O,{modelValue:o(y),"onUpdate:modelValue":s[11]||(s[11]=u=>k(y)?y.value=u:null)},{default:a(()=>[e(F,{value:"email"},{default:a(()=>[e(U,null,{default:a(()=>[o(i)?Z("",!0):(H(),K(v,{key:0,cols:"12"},{default:a(()=>[nt]),_:1})),e(v,{cols:"12"},{default:a(()=>[e(G,{label:"Email Address",modelValue:o(r),"onUpdate:modelValue":[s[1]||(s[1]=u=>k(r)?r.value=u:null),s[2]||(s[2]=u=>i.value=!1)],rules:[o(g).required],"error-messages":o(_),error:o(_)!="",loading:o(w),required:"",onKeypress:he(P,["enter"]),messages:"Provide your email address"},null,8,["modelValue","rules","error-messages","error","loading"])]),_:1}),e(v,{cols:"12"},{default:a(()=>[e(R,{onClick:P,disabled:!o(r),loading:o(w),size:"large",color:"primary",block:""},{default:a(()=>[C("CHECK EMAIL")]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1}),e(F,{value:"user-type"},{default:a(()=>[e(U,null,{default:a(()=>[A(e(v,{cols:"12"},{default:a(()=>[e(Y,{items:["staff","student"],modelValue:o(n),"onUpdate:modelValue":s[3]||(s[3]=u=>k(n)?n.value=u:null),label:"Account Type",rules:[o(g).required],messages:"Are you a student or staff?"},null,8,["modelValue","rules"])]),_:1},512),[[B,o(i)]]),A(e(v,{cols:o(n)=="student"?8:12},{default:a(()=>[e(Y,{items:o(E),modelValue:o(V),"onUpdate:modelValue":s[4]||(s[4]=u=>k(V)?V.value=u:null),label:"Department","item-title":"title","item-value":"pk",rules:[o(g).required],messages:"Which department are you in?"},null,8,["items","modelValue","rules"])]),_:1},8,["cols"]),[[B,o(i)]]),o(n)=="student"?A((H(),K(v,{key:0,cols:o(n)=="student"?4:12},{default:a(()=>[e(Y,{items:o(Ae),modelValue:o(c),"onUpdate:modelValue":s[5]||(s[5]=u=>k(c)?c.value=u:null),label:"Level","item-title":"title","item-value":"value",rules:[o(g).required],messages:"Which level are you currently in ?"},null,8,["items","modelValue","rules"])]),_:1},8,["cols"])),[[B,o(i)]]):Z("",!0),e(v,{cols:"12"},{default:a(()=>[e(R,{onClick:s[6]||(s[6]=u=>y.value="personal"),disabled:!o(z),size:"large",block:"",color:"primary"},{default:a(()=>[C("Continue")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),e(F,{value:"personal"},{default:a(()=>[e(U,null,{default:a(()=>[A(e(v,{cols:"12"},{default:a(()=>[e(G,{label:"First name",modelValue:o(p),"onUpdate:modelValue":s[7]||(s[7]=u=>k(p)?p.value=u:null),rules:[o(g).required],required:"",messages:"Your first name"},null,8,["modelValue","rules"])]),_:1},512),[[B,o(i)]]),A(e(v,{cols:"12"},{default:a(()=>[e(G,{label:"Last name",modelValue:o(m),"onUpdate:modelValue":s[8]||(s[8]=u=>k(m)?m.value=u:null),rules:[o(g).required],required:"",messages:"Your last name"},null,8,["modelValue","rules"])]),_:1},512),[[B,o(i)]]),A(e(v,{cols:"12"},{default:a(()=>[e(G,{label:"Password",modelValue:o(d),"onUpdate:modelValue":s[9]||(s[9]=u=>k(d)?d.value=u:null),rules:[o(g).required,o(g).minLen(4)],required:"",messages:"Enter a preferred password",type:o(l)?"text":"password","append-inner-icon":o(l)?"mdi-eye-off":"mdi-eye","onClick:appendInner":s[10]||(s[10]=u=>l.value=!o(l))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1},512),[[B,o(i)]]),e(v,{cols:"12"},{default:a(()=>[e(R,{onClick:j,disabled:!o(de),block:"",size:"large",color:"primary"},{default:a(()=>[C(" Complete Registration ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(v,{cols:12,md:"8",lg:"6"})]),_:1})]),_:1}),e(Me,{modelValue:o(b),"onUpdate:modelValue":s[14]||(s[14]=u=>k(b)?b.value=u:null),persistent:"","max-width":"600",transition:"dialog-transition"},{default:a(()=>[e(oe,{color:"teal"},{default:a(()=>[e(Re,{class:"px-8 mt-4 d-flex"},{default:a(()=>[e(se,null,{default:a(()=>[C("mdi-check")]),_:1}),ut]),_:1}),e(Te,null,{default:a(()=>[e(ae,null,{default:a(()=>[e(U,{justify:"end"},{default:a(()=>[e(v,{cols:12},{default:a(()=>[C(" Your "+ee(o(n)=="staff"?"Staff":"Student")+" account has been created use the email "+ee(o(r))+" and the password you provided to login ",1)]),_:1}),e(He),e(v,{cols:"auto"},{default:a(()=>[e(R,{color:"primary",onClick:x},{default:a(()=>[C("Login")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Ke,{position:"absolute",location:"bottom center"},{default:a(()=>[W("div",it,[dt,e(R,{color:"primary",variant:"outlined",onClick:x},{default:a(()=>[C("Login")]),_:1})])]),_:1})]),_:1})]),_:1},8,["theme"]))}}),Xt=Ie(mt,[["__scopeId","data-v-1ea44ee3"]]);export{Xt as default};
