import{n as A,r as n,W as z,o as H,y as P,w as a,z as l,t as T,d as C,b as o,C as h,B as I,A as i,R as W,T as j}from"./entry.tQWHpBLf.js";import{u as G}from"./fetch.EGa3nfvI.js";import{u as B}from"./use-fetch-header.3DHnPbz-.js";import{u as J}from"./use-logger.h09id-NO.js";import{a as p,b as F,d as K}from"./form-validations.GCMU-Axm.js";import{L as Q,S as X}from"./types.H3O6Ekup.js";import{V as Y,a as Z,b as _,c as x}from"./VCard.T8BHTP73.js";import{V as ee}from"./VBanner.T3kYHC40.js";import{V as L}from"./VBtn._oQ1uiNP.js";import{V as le,a as d}from"./VRow.WlLBb9Jc.js";import{V as U}from"./VTextField.6LPIlZmm.js";import{V as S}from"./VSelect.4u-stGGs.js";import{V as te}from"./VForm.Y4-k9QxA.js";import"./createSimpleFunctional.413Od-xt.js";import"./index.AmeJTHgO.js";import"./VAvatar.NX62-iRj.js";import"./transition.31NosCAE.js";import"./VProgressCircular.DTBbBXDU.js";import"./index.qvKOBlyP.js";import"./VInput.AAxW8xuy.js";import"./easing.imumzmxr.js";import"./forwardRefs.y8pOSn8h.js";import"./VList.lljtylUW.js";import"./ssrBoot.0aXw1rzb.js";import"./VDivider.KeqwIEcH.js";import"./dialog-transition.OyYDh7J5.js";import"./VMenu.CmTKH41A.js";import"./VOverlay.1V9m9YmJ.js";import"./lazy.hsVx4m50.js";import"./VCheckboxBtn.ztQGvB4X.js";import"./VChip.ttJWPZTa.js";const Be=A({__name:"edit_course",props:{course:{},departmentId:{}},emits:["close","updated"],setup(N,{emit:O}){const q=j(),s=N,f=n(s.course.title),v=n(s.course.code),V=n(s.course.level),c=n(s.course.semester),R=n(s.course.student_count),m=n(s.course.department.pk),g=n(s.course.departments.map(e=>e.pk));z(()=>{s.departmentId&&(m.value=s.departmentId)});const b=n(!1),r=n({icon:"",title:"",viewed:!1}),{data:y,pending:D}=G("/departments/",{baseURL:q.public.baseURL,headers:B([]),default:()=>[]},"$3RV457LxpS"),E=O,w=n(!1);function k(e,t=""){r.value.title=e,r.value.icon=t,r.value.viewed=!1}async function $(){if(!w.value){console.log("Invalid course edit form");return}const e=new FormData;e.append("title",f.value),e.append("code",v.value),e.append("student_count",R.value.toString()),e.append("level",V.value.toString()),e.append("semester",c.value.toString()),e.append("department",m.value.toString()),e.append("id",s.course.pk.toString()),g.value.forEach(t=>{e.append("departments",t.toString())});try{b.value=!0;const t=await $fetch("/courses/"+s.course.pk+"/",{baseURL:q.public.baseURL,headers:B([]),method:"PUT",body:e});E("updated",t),M()}catch(t){const u=t;if(J().error("Edit Course Dialog","Unable to edit a new course",u),u.statusCode)switch(u.statusCode){case 400:k("Invalid form provided","mdi-information-variant-circle");break;default:k("Oops, something wrong happened on the server, try again later","mdi-server-network-off");break}else k("Oops, make sure you have a stable internet connection and try again","mdi-wifi-strength-alert-outline")}finally{b.value=!1}}function M(){f.value="",v.value="",V.value=null,c.value=null,m.value=null,g.value=[],R.value=0,b.value=!1,r.value.icon="",r.value.viewed=!1,r.value.title="",E("close")}return(e,t)=>(H(),P(te,{onSubmit:t[8]||(t[8]=W(()=>{},["prevent"])),modelValue:l(w),"onUpdate:modelValue":t[9]||(t[9]=u=>i(w)?w.value=u:null),disabled:l(b)},{default:a(()=>[o(Y,{height:"600"},{default:a(()=>[I(o(ee,{stick:"top",lines:"one",icon:l(r).icon},{text:a(()=>[C(T(l(r).title),1)]),actions:a(()=>[o(L,{color:"error",onClick:t[0]||(t[0]=u=>l(r).viewed=!0)},{default:a(()=>[C(" close ")]),_:1})]),_:1},8,["icon"]),[[h,!l(r).viewed&&l(r).title]]),o(Z,{"primary-title":"",class:"pa-6"},{default:a(()=>[C(" Update Course ("+T(e.course.title)+") ",1)]),_:1}),o(_,{class:"h-100 overflow-auto"},{default:a(()=>[o(le,null,{default:a(()=>[o(d,{cols:"8"},{default:a(()=>[o(U,{name:"title",label:"Title",id:"title",modelValue:l(f),"onUpdate:modelValue":t[1]||(t[1]=u=>i(f)?f.value=u:null),rules:["useRuleRequired"in e?e.useRuleRequired:l(p),("useRuleMinLength"in e?e.useRuleMinLength:l(F))(3)]},null,8,["modelValue","rules"])]),_:1}),o(d,{cols:"4"},{default:a(()=>[o(U,{name:"code",label:"Code",id:"Code",modelValue:l(v),"onUpdate:modelValue":t[2]||(t[2]=u=>i(v)?v.value=u:null),rules:["useRuleRequired"in e?e.useRuleRequired:l(p),("useRuleMinLength"in e?e.useRuleMinLength:l(F))(3)]},null,8,["modelValue","rules"])]),_:1}),I(o(d,{cols:"12"},{default:a(()=>[o(S,{items:l(y),modelValue:l(m),"onUpdate:modelValue":t[3]||(t[3]=u=>i(m)?m.value=u:null),label:"Course Department",rules:["useRuleRequired"in e?e.useRuleRequired:l(p)],loading:l(D),"item-value":"pk",disabled:e.departmentId!=null},null,8,["items","modelValue","rules","loading","disabled"])]),_:1},512),[[h,e.departmentId==null]]),o(d,{cols:"12"},{default:a(()=>[o(S,{items:l(y),modelValue:l(g),"onUpdate:modelValue":t[4]||(t[4]=u=>i(g)?g.value=u:null),label:"Offered By Department",loading:l(D),"item-value":"pk",multiple:""},null,8,["items","modelValue","loading"])]),_:1}),o(d,{cols:"12",md:"6"},{default:a(()=>[o(S,{items:l(Q),rules:["useRuleRequired"in e?e.useRuleRequired:l(p)],modelValue:l(V),"onUpdate:modelValue":t[5]||(t[5]=u=>i(V)?V.value=u:null),label:"Level"},null,8,["items","rules","modelValue"])]),_:1}),o(d,{cols:"12",md:"6"},{default:a(()=>[o(S,{items:l(X),rules:["useRuleRequired"in e?e.useRuleRequired:l(p)],modelValue:l(c),"onUpdate:modelValue":t[6]||(t[6]=u=>i(c)?c.value=u:null),label:"Semester"},null,8,["items","rules","modelValue"])]),_:1}),o(d,{cols:"12"},{default:a(()=>[o(U,{name:"student_count",label:"Student Count",id:"student_count",modelValue:l(R),"onUpdate:modelValue":t[7]||(t[7]=u=>i(R)?R.value=u:null),rules:["useRuleRequired"in e?e.useRuleRequired:l(p),"useRuleNumber"in e?e.useRuleNumber:l(K)]},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1}),o(x,null,{default:a(()=>[o(L,{class:"ml-4",type:"submit",color:"primary",onClick:$,loading:l(b)},{default:a(()=>[C("Update Course")]),_:1},8,["loading"]),o(L,{color:"error",onClick:M},{default:a(()=>[C("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"]))}});export{Be as default};