import{ai as A,r as m,v as y,T,n as B,o as O,y as D,w as n,d as C,b as u,z as t,A as v,R as E}from"./entry.tQWHpBLf.js";import{u as P}from"./fetch.EGa3nfvI.js";import{u as k}from"./use-fetch-header.3DHnPbz-.js";import{u as W}from"./use-logger.h09id-NO.js";import{u as h}from"./use-notification.Rdal1ke4.js";import{a as b,b as S,d as j}from"./form-validations.GCMU-Axm.js";import{V as z,a as H,b as I,c as J}from"./VCard.T8BHTP73.js";import{V as G,a as g}from"./VRow.WlLBb9Jc.js";import{V as w}from"./VTextField.6LPIlZmm.js";import{V as K}from"./VSelect.4u-stGGs.js";import{V as q}from"./VBtn._oQ1uiNP.js";import{V as Q}from"./VForm.Y4-k9QxA.js";const X=A("venue-store",()=>{const p=m({}),V=T();function c(a){p.value[a.pk]=a}async function i(a){const s=await $fetch("/venues/",{baseURL:V.public.baseURL,method:"POST",body:{title:a.title,code:a.code,capacity:a.capacity,category:a.capacity}});return c(s),y(()=>p.value[s.pk])}function r(a){return y(()=>p.value[a])}async function d(a){const s=await $fetch(`/venues/${a}/`,{baseURL:V.public.baseURL,method:"POST"});return c(s),y(()=>p.value[s.pk])}return{insert:c,$insert:i,retrieve:r,$retrieve:d}}),ie=B({__name:"add_venue",emits:["close","add"],setup(p,{emit:V}){const c=T(),i=m(""),r=m(""),d=m(),a=m(),s=m(!1),M=X(),{data:$,pending:F}=P("/venues/categories/",{baseURL:c.public.baseURL,headers:k([]),default:()=>[]},"$WEWJEjAI9B"),L=V,R=m(!1);async function N(){if(!R.value)return;const e=new FormData;e.append("title",i.value),e.append("code",r.value),e.append("capacity",d.value),e.append("category",a.value);try{s.value=!0;const l=await $fetch("/venues/",{baseURL:c.public.baseURL,method:"post",headers:k([]),body:e});L("add",l),M.insert(l),U()}catch(l){const o=l;if(W().error("Add Venue Dialog","Unable to add Venue",o),o.statusCode)switch(o.statusCode){case 400:h().add({title:"Form error",text:"The values you provided in the form was invalid",icon:"mdi-page-layout-header",action(f){f()}});break;default:h().add({title:"Oops",text:"Something wrong happened on the server, try again later",icon:"mdi-server-network-off",action(f){f()}});break}else h().add({title:"Oops",text:"Make sure you have a stable internet connection and try again",icon:"mdi-wifi-strength-alert-outline",action(f){f()}})}finally{s.value=!1}}function U(){i.value="",r.value="",a.value=null,d.value=[],s.value=!1,L("close")}return(e,l)=>(O(),D(Q,{onSubmit:l[4]||(l[4]=E(()=>{},["prevent"])),modelValue:t(R),"onUpdate:modelValue":l[5]||(l[5]=o=>v(R)?R.value=o:null),disabled:t(s)},{default:n(()=>[u(z,null,{default:n(()=>[u(H,{"primary-title":""},{default:n(()=>[C(" Add new venue ")]),_:1}),u(I,null,{default:n(()=>[u(G,null,{default:n(()=>[u(g,{cols:"8"},{default:n(()=>[u(w,{name:"title",label:"Title",id:"title",modelValue:t(i),"onUpdate:modelValue":l[0]||(l[0]=o=>v(i)?i.value=o:null),rules:["useRuleRequired"in e?e.useRuleRequired:t(b),("useRuleMinLength"in e?e.useRuleMinLength:t(S))(3)]},null,8,["modelValue","rules"])]),_:1}),u(g,{cols:"4"},{default:n(()=>[u(w,{name:"code",label:"Code",id:"Code",modelValue:t(r),"onUpdate:modelValue":l[1]||(l[1]=o=>v(r)?r.value=o:null),rules:["useRuleRequired"in e?e.useRuleRequired:t(b),("useRuleMinLength"in e?e.useRuleMinLength:t(S))(3)]},null,8,["modelValue","rules"])]),_:1}),u(g,{cols:"12"},{default:n(()=>[u(K,{items:t($),modelValue:t(a),"onUpdate:modelValue":l[2]||(l[2]=o=>v(a)?a.value=o:null),label:"Venue Category",rules:["useRuleRequired"in e?e.useRuleRequired:t(b)],loading:t(F),"item-value":"pk"},null,8,["items","modelValue","rules","loading"])]),_:1}),u(g,{cols:"12"},{default:n(()=>[u(w,{name:"capactiy",label:"Venue Capacity",id:"student_count",modelValue:t(d),"onUpdate:modelValue":l[3]||(l[3]=o=>v(d)?d.value=o:null),rules:["useRuleRequired"in e?e.useRuleRequired:t(b),"useRuleNumber"in e?e.useRuleNumber:t(j)]},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1}),u(J,null,{default:n(()=>[u(q,{class:"ml-4",type:"submit",color:"primary",onClick:N,loading:t(s)},{default:n(()=>[C("Save Venue")]),_:1},8,["loading"]),u(q,{color:"error",onClick:U},{default:n(()=>[C("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"]))}});export{ie as _};