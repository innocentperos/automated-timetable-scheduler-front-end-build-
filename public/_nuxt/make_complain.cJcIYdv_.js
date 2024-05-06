import{E as M,F as W,b as o,n as X,r as d,h as q,v as J,o as u,y as h,w as t,z as a,A as w,d as y,D as T,t as i,c as g,a2 as N,a1 as A,$ as K,a0 as Q,T as O}from"./entry.tQWHpBLf.js";import{u as Y}from"./useGlobalView.1_iJaLaV.js";import{u as $}from"./use-fetch-header.3DHnPbz-.js";import{u as p}from"./use-notification.Rdal1ke4.js";import{V as Z}from"./index.qvKOBlyP.js";import{V as ee}from"./VDialog.SCbeIy52.js";import{V as te,a as oe,b as le,c as ae}from"./VCard.T8BHTP73.js";import{V as z}from"./VDivider.KeqwIEcH.js";import{V as se}from"./VContainer.HgjfEFlY.js";import{m as re,u as ue,V as ie,a as B}from"./VRow.WlLBb9Jc.js";import{V as ne}from"./VSelect.4u-stGGs.js";import{V as E}from"./VAutocomplete.6WsM3riW.js";import{a as F}from"./VList.lljtylUW.js";import{V as ce}from"./VTextarea.JjGoSqnJ.js";import{V as j}from"./VBtn._oQ1uiNP.js";import{a as me,c as de}from"./layout.RwfjoJ97.js";import"./useSlotCourse.xKZgOLu0.js";import"./use-logger.h09id-NO.js";import"./VOverlay.1V9m9YmJ.js";import"./easing.imumzmxr.js";import"./lazy.hsVx4m50.js";import"./transition.31NosCAE.js";import"./forwardRefs.y8pOSn8h.js";import"./dialog-transition.OyYDh7J5.js";import"./index.AmeJTHgO.js";import"./createSimpleFunctional.413Od-xt.js";import"./VAvatar.NX62-iRj.js";import"./VTextField.6LPIlZmm.js";import"./VInput.AAxW8xuy.js";import"./VMenu.CmTKH41A.js";import"./VProgressCircular.DTBbBXDU.js";import"./VCheckboxBtn.ztQGvB4X.js";import"./VChip.ttJWPZTa.js";import"./filter.y4xAiLA_.js";import"./ssrBoot.0aXw1rzb.js";const pe=M({...re(),...me()},"VLayout"),fe=W()({name:"VLayout",props:pe(),setup(n,f){let{slots:c}=f;const{layoutClasses:S,layoutStyles:L,getLayoutItem:r,items:R,layoutRef:I}=de(n);return ue(()=>{var v;return o("div",{ref:I,class:[S.value,n.class],style:[L.value,n.style]},[(v=c.default)==null?void 0:v.call(c)])}),{getLayoutItem:r,items:R}}}),ve=K(()=>Q(()=>import("./timetable_slot_course__full_view.oDKuKUzq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]),import.meta.url).then(n=>n.default||n)),Ve={key:0},_e={key:1},ye={key:0},Ce={key:1},tt=X({__name:"make_complain",setup(n){const{model:f,message:c,updateMessage:S,hide:L,currentSlotCourse:r,execute:R}=Y().makeComplainDialog(),I=[{title:"Department and level conflict",value:"level-conflict"},{title:"Other",value:"other-conflict"}],v=d([]),C=d(!1);async function U(){if(!r.value)return;const k=r.value.pk;try{C.value=!0;const l=await $fetch(`timetables/${k}/courses_by_slot_course/`,{baseURL:O().public.baseURL,headers:$([])});v.value=l}catch(l){C.value=!1;const m=l;if(!m.statusCode){p().postNetowrkIssue();return}switch(m.status){case 404:p().add({title:"Oops",text:"Slot course could not be found ",color:"amber",icon:"mdi-alert-circle-outline",closable:!0});break;default:p().postServerIssue();break}}finally{C.value=!1}}const P=d([]),b=d(!1);async function D(){if(!r.value)return;const k=r.value.pk;try{b.value=!0;const l=await $fetch(`complains/${k}/level_courses/`,{baseURL:O().public.baseURL,headers:$([])});P.value=l}catch(l){b.value=!1;const m=l;if(!m.statusCode){p().postNetowrkIssue();return}switch(m.status){case 404:p().add({title:"Oops",text:"Slot course could not be found ",color:"amber",icon:"mdi-alert-circle-outline",closable:!0});break;default:p().postServerIssue();break}}finally{b.value=!1}}const s=d("other-conflict"),V=d(),_=d();q([s],function(){s.value=="level-conflict"?D():s.value=="other-conflict"&&U()});const G=J(()=>!(!c.value||s.value=="level-conflict"&&!V.value||s.value=="other-conflict"&&!_.value));function H(){c.value&&R(s.value,s.value=="level-conflict"?V.value:_.value)}return(k,l)=>{const m=ve;return u(),h(fe,{row:"","justify-center":""},{default:t(()=>[o(ee,{modelValue:a(f),"onUpdate:modelValue":l[3]||(l[3]=e=>w(f)?f.value=e:null),scrollable:"",fullscreen:""},{default:t(()=>[o(te,null,{default:t(()=>[o(oe,null,{default:t(()=>[y("Report Issue or complain")]),_:1}),o(z),o(le,{style:{height:"100%"}},{default:t(()=>[o(se,{fluid:""},{default:t(()=>[o(ie,null,{default:t(()=>[a(r)?(u(),h(B,{key:0,cols:12,md:4},{default:t(()=>[o(m,{"slot-course":a(r),"full-width":""},null,8,["slot-course"])]),_:1})):T("",!0),o(B,{cols:12,md:8},{default:t(()=>[o(ne,{items:I,modelValue:a(s),"onUpdate:modelValue":l[0]||(l[0]=e=>w(s)?s.value=e:null),label:"Conflict type"},null,8,["modelValue"]),o(Z,{group:""},{default:t(()=>[a(s)=="other-conflict"?(u(),h(E,{key:0,items:a(v),"item-title":"code","item-value":"pk",loading:a(C),label:"Related Course","append-inner-icon":"mdi-refresh","onClick:appendInner":U,modelValue:a(_),"onUpdate:modelValue":l[1]||(l[1]=e=>w(_)?_.value=e:null)},{selection:t(({item:e})=>[e?(u(),g("span",Ve,i(e.raw.title)+" ("+i(e.raw.code)+") ",1)):(u(),g("span",_e))]),item:t(({item:e,props:x})=>[o(F,A(N(x)),{title:t(()=>[y(i(e.raw.title)+" ("+i(e.raw.code)+") ",1)]),_:2},1040)]),_:1},8,["items","loading","modelValue"])):T("",!0),a(s)=="level-conflict"?(u(),h(E,{key:1,items:a(P),"item-title":"course.code","item-value":"pk",loading:a(b),label:"Course conflicting with","append-inner-icon":"mdi-refresh","onClick:appendInner":D,modelValue:a(V),"onUpdate:modelValue":l[2]||(l[2]=e=>w(V)?V.value=e:null)},{selection:t(({item:e})=>[e?(u(),g("span",ye,i(e.raw.course.title)+" ("+i(e.raw.course.code)+") ",1)):(u(),g("span",Ce))]),item:t(({item:e,props:x})=>[o(F,A(N(x)),{title:t(()=>[y(i(e.raw.course.title)+" ("+i(e.raw.course.code)+") ",1)]),_:2},1040)]),_:1},8,["items","loading","modelValue"])):T("",!0)]),_:1}),o(ce,{"model-value":a(c),"onUpdate:modelValue":a(S),label:"Write complain here..."},null,8,["model-value","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),o(z),o(ae,null,{default:t(()=>[o(j,{color:"blue darken-1",flat:"",onClick:a(L)},{default:t(()=>[y("Close")]),_:1},8,["onClick"]),o(j,{color:"blue darken-1",flat:"",onClick:H,disabled:!a(G)},{default:t(()=>[y("Save")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{tt as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./timetable_slot_course__full_view.oDKuKUzq.js","./entry.tQWHpBLf.js","./entry.JkaK1PbT.css","./VCard.T8BHTP73.js","./VRow.WlLBb9Jc.js","./VRow.Jj_ITn01.css","./createSimpleFunctional.413Od-xt.js","./index.AmeJTHgO.js","./index.RLmRraAs.css","./VAvatar.NX62-iRj.js","./transition.31NosCAE.js","./VAvatar.Y9acgeJC.css","./VCard.3-GUCx0W.css","./VTooltip.gJvVvmRp.js","./VOverlay.1V9m9YmJ.js","./easing.imumzmxr.js","./lazy.hsVx4m50.js","./VOverlay.XsbusQk2.css","./forwardRefs.y8pOSn8h.js","./VTooltip.oPNLlzwT.css","./VChip.ttJWPZTa.js","./index.qvKOBlyP.js","./VBtn._oQ1uiNP.js","./VProgressCircular.DTBbBXDU.js","./VProgressCircular.u2v1YYMj.css","./VBtn.Y_2JgC81.css","./VChip.y9TZEtu3.css","./VDivider.KeqwIEcH.js","./VDivider.8k_-HhJN.css","./VBadge.ClXMEkqI.js","./VBadge.RXiHNk7i.css","./timetable_slot_course__full_view.h221uLIF.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}