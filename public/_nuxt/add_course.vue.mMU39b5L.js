import{n as O,r as n,W,o as $,y as H,w as o,z as l,t as z,d as g,b as u,C as T,B,A as r,R as j,T as G}from"./entry.tQWHpBLf.js";import{u as J}from"./fetch.EGa3nfvI.js";import{u as I}from"./use-fetch-header.3DHnPbz-.js";import{u as K}from"./use-logger.h09id-NO.js";import{a as m,b as F,d as P}from"./form-validations.GCMU-Axm.js";import{L as Q,S as X}from"./types.H3O6Ekup.js";import{V as Y,a as Z,b as _,c as x}from"./VCard.T8BHTP73.js";import{V as ee}from"./VBanner.T3kYHC40.js";import{V as S}from"./VBtn._oQ1uiNP.js";import{V as le,a as d}from"./VRow.WlLBb9Jc.js";import{V as q}from"./VTextField.6LPIlZmm.js";import{V as w}from"./VSelect.4u-stGGs.js";import{V as ae}from"./VForm.Y4-k9QxA.js";const Re=O({__name:"add_course",props:{departmentId:{}},emits:["close","add"],setup(N,{emit:h}){const y=G(),p=n(""),f=n(""),v=n(),V=n(),R=n(),i=n(),b=n([]),c=n(!1),s=n({icon:"",title:"",viewed:!1}),{data:U,pending:k}=J("/departments/",{baseURL:y.public.baseURL,headers:I([]),default:()=>[]},"$3fWWSLsVHb"),D=N;W(()=>{D.departmentId&&(i.value=D.departmentId)});const M=h,C=n(!1);function L(e,a=""){s.value.title=e,s.value.icon=a,s.value.viewed=!1}async function A(){if(!C.value)return;const e=new FormData;e.append("title",p.value),e.append("code",f.value),e.append("student_count",R.value),e.append("level",v.value),e.append("semester",V.value),e.append("department",i.value),b.value.forEach(a=>{e.append("departments",a.toString())});try{c.value=!0;const a=await $fetch("/courses/",{baseURL:y.public.baseURL,headers:I([]),method:"post",body:e});M("add",a),E()}catch(a){const t=a;if(K().error("Add Course Dialog","Unable to add a new course",t),t.statusCode)switch(t.statusCode){case 400:L("Invalid form provided","mdi-information-variant-circle");break;default:L("Oops, something wrong happened on the server, try again later","mdi-server-network-off");break}else L("Oops, make sure you have a stable internet connection and try again","mdi-wifi-strength-alert-outline")}finally{c.value=!1}}function E(){p.value="",f.value="",v.value=null,V.value=null,i.value=null,b.value=[],R.value=[],c.value=!1,s.value.icon="",s.value.viewed=!1,s.value.title="",M("close")}return(e,a)=>($(),H(ae,{onSubmit:a[8]||(a[8]=j(()=>{},["prevent"])),modelValue:l(C),"onUpdate:modelValue":a[9]||(a[9]=t=>r(C)?C.value=t:null),disabled:l(c)},{default:o(()=>[u(Y,null,{default:o(()=>[B(u(ee,{stick:"top",lines:"one",icon:l(s).icon},{text:o(()=>[g(z(l(s).title),1)]),actions:o(()=>[u(S,{color:"error",onClick:a[0]||(a[0]=t=>l(s).viewed=!0)},{default:o(()=>[g(" close ")]),_:1})]),_:1},8,["icon"]),[[T,!l(s).viewed&&l(s).title]]),u(Z,{"primary-title":""},{default:o(()=>[g(" Add Course ")]),_:1}),u(_,null,{default:o(()=>[u(le,null,{default:o(()=>[u(d,{cols:"8"},{default:o(()=>[u(q,{name:"title",label:"Title",id:"title",modelValue:l(p),"onUpdate:modelValue":a[1]||(a[1]=t=>r(p)?p.value=t:null),rules:["useRuleRequired"in e?e.useRuleRequired:l(m),("useRuleMinLength"in e?e.useRuleMinLength:l(F))(3)]},null,8,["modelValue","rules"])]),_:1}),u(d,{cols:"4"},{default:o(()=>[u(q,{name:"code",label:"Code",id:"Code",modelValue:l(f),"onUpdate:modelValue":a[2]||(a[2]=t=>r(f)?f.value=t:null),rules:["useRuleRequired"in e?e.useRuleRequired:l(m),("useRuleMinLength"in e?e.useRuleMinLength:l(F))(3)]},null,8,["modelValue","rules"])]),_:1}),B(u(d,{cols:"12"},{default:o(()=>[u(w,{items:l(U),modelValue:l(i),"onUpdate:modelValue":a[3]||(a[3]=t=>r(i)?i.value=t:null),label:"Course Department",rules:["useRuleRequired"in e?e.useRuleRequired:l(m)],loading:l(k),"item-value":"pk",disabled:e.departmentId!=null},null,8,["items","modelValue","rules","loading","disabled"])]),_:1},512),[[T,e.departmentId==null]]),u(d,{cols:"12"},{default:o(()=>[u(w,{items:l(U),modelValue:l(b),"onUpdate:modelValue":a[4]||(a[4]=t=>r(b)?b.value=t:null),label:"Offered By Department",loading:l(k),"item-value":"pk",multiple:""},null,8,["items","modelValue","loading"])]),_:1}),u(d,{cols:"6"},{default:o(()=>[u(w,{items:l(Q),rules:["useRuleRequired"in e?e.useRuleRequired:l(m)],modelValue:l(v),"onUpdate:modelValue":a[5]||(a[5]=t=>r(v)?v.value=t:null),label:"Level"},null,8,["items","rules","modelValue"])]),_:1}),u(d,{cols:"6"},{default:o(()=>[u(w,{items:l(X),rules:["useRuleRequired"in e?e.useRuleRequired:l(m)],modelValue:l(V),"onUpdate:modelValue":a[6]||(a[6]=t=>r(V)?V.value=t:null),label:"Semester"},null,8,["items","rules","modelValue"])]),_:1}),u(d,{cols:"12"},{default:o(()=>[u(q,{name:"student_count",label:"Student Count",id:"student_count",modelValue:l(R),"onUpdate:modelValue":a[7]||(a[7]=t=>r(R)?R.value=t:null),rules:["useRuleRequired"in e?e.useRuleRequired:l(m),"useRuleNumber"in e?e.useRuleNumber:l(P)]},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1}),u(x,null,{default:o(()=>[u(S,{class:"ml-4",type:"submit",color:"primary",onClick:A,loading:l(c)},{default:o(()=>[g("Save Course")]),_:1},8,["loading"]),u(S,{color:"error",onClick:E},{default:o(()=>[g("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"]))}});export{Re as _};