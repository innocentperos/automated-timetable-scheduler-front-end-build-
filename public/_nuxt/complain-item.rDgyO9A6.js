import{n as I,W as h,o as r,c as L,z as a,y as l,w as e,d as o,b as t,D as d,a as i,t as f,L as v,Q as D,$ as N,a0 as w,V as P}from"./entry.tQWHpBLf.js";import{u as k}from"./slot-course-store.Z83VEvRp.js";import{V as T}from"./VSkeletonLoader.bS24LWfm.js";import{V as z}from"./VAvatar.NX62-iRj.js";import{V as A}from"./index.AmeJTHgO.js";import{b as E,c as R,a as $}from"./VList.lljtylUW.js";import{V as p}from"./VChip.ttJWPZTa.js";import{V as C}from"./VTooltip.gJvVvmRp.js";import{e as H,V as b}from"./VBtn._oQ1uiNP.js";import{V as Q}from"./VDivider.KeqwIEcH.js";import"./use-fetch-header.3DHnPbz-.js";import"./use-logger.h09id-NO.js";import"./VRow.WlLBb9Jc.js";import"./transition.31NosCAE.js";import"./index.qvKOBlyP.js";import"./ssrBoot.0aXw1rzb.js";import"./createSimpleFunctional.413Od-xt.js";import"./VOverlay.1V9m9YmJ.js";import"./easing.imumzmxr.js";import"./lazy.hsVx4m50.js";import"./forwardRefs.y8pOSn8h.js";import"./VProgressCircular.DTBbBXDU.js";const j=N(()=>w(()=>import("./is-authenticated.2_vl-wsG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url).then(m=>m.default||m)),F={class:"d-flex justify-space-between align-center"},G=i("span",null,"Innocent Peros",-1),M={class:"d-flex flex-column"},O={class:"my-2 d-flex"},W=i("div",{class:"ml-1"},null,-1),ye=I({__name:"complain-item",props:{complain:{}},setup(m){const V=m,{data:s,pending:S,refresh:y}=k().load(V.complain.slot_course);h(()=>{s.value||y()});const{data:u,pending:q,refresh:J}=k().load(V.complain.related_slot_course??0);h(()=>{s.value||y()});function g(n){P().setQuery(n.course.code)}return(n,c)=>{const x=j;return r(),L(D,null,[a(S)?(r(),l(T,{key:0,type:"list-item-two-line"})):a(s)?(r(),l($,{key:1,color:"amber"},{prepend:e(()=>[t(z,{color:"grey"},{default:e(()=>[t(A,null,{default:e(()=>[o("mdi-account")]),_:1})]),_:1})]),default:e(()=>[t(E,{class:"my-1 mt-2"},{default:e(()=>[i("div",F,[G,n.complain.type=="level-conflict"?(r(),l(p,{key:0,color:"red"},{default:e(()=>[o(" colision ")]),_:1})):n.complain.type=="other-conflict"?(r(),l(p,{key:1,color:"amber"},{default:e(()=>[o(" other ")]),_:1})):d("",!0)])]),_:1}),t(R,null,{default:e(()=>[i("div",M,[i("span",null,f(n.complain.heading.message),1),i("span",O,[a(s)?(r(),l(C,{key:0},{activator:e(({props:_})=>[t(p,v(_,{onClick:c[0]||(c[0]=B=>g(a(s)))}),{default:e(()=>[o(f(a(s).course.code),1)]),_:2},1040)]),default:e(()=>[o(" Highlight course in timetable ")]),_:1})):d("",!0),W,a(u)?(r(),l(C,{key:1},{activator:e(({props:_})=>[t(p,v(_,{onClick:c[1]||(c[1]=B=>g(a(u)))}),{default:e(()=>[o(f(a(u).course.code),1)]),_:2},1040)]),default:e(()=>[o(" Highlight course in timetable ")]),_:1})):d("",!0)]),t(x,{"user-type":"admin"},{default:e(()=>[t(H,{class:"d-flex my-4 ml-auto",density:"compact"},{default:e(()=>[t(b,{color:"teal"},{default:e(()=>[o("Resloved")]),_:1}),t(b,{color:"red"},{default:e(()=>[o("Delete")]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})):d("",!0),t(Q)],64)}}});export{ye as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./is-authenticated.2_vl-wsG.js","./entry.tQWHpBLf.js","./entry.JkaK1PbT.css","./VBtn._oQ1uiNP.js","./index.AmeJTHgO.js","./VRow.WlLBb9Jc.js","./VRow.Jj_ITn01.css","./index.RLmRraAs.css","./VProgressCircular.DTBbBXDU.js","./VProgressCircular.u2v1YYMj.css","./VBtn.Y_2JgC81.css","./is-authenticated.MRbMt392.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}