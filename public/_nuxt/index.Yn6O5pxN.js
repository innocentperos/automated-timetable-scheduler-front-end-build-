import{n as V,x as s,U as _,v as k,o as c,c as x,b as e,w as r,z as t,A as C,y as g,a as m,t as p,D as v,Q as y}from"./entry.tQWHpBLf.js";import{u as B}from"./courses-store.hFHtJJlz.js";import{V as R}from"./VProgressCircular.DTBbBXDU.js";import{V as h}from"./VOverlay.1V9m9YmJ.js";import{a as N,V as w}from"./VRow.WlLBb9Jc.js";import{V as D}from"./VDivider.KeqwIEcH.js";import{V as S}from"./VContainer.HgjfEFlY.js";import"./use-fetch-header.3DHnPbz-.js";import"./easing.imumzmxr.js";import"./lazy.hsVx4m50.js";import"./transition.31NosCAE.js";const b={class:"text-h4"},I={class:"ma-4"},J=V({__name:"index",setup(P){const n=s().currentRoute;_(()=>{try{return parseInt(n.value.params.course_pk)||s().replace({name:"courses"}),!0}catch{s().replace({name:"courses"})}});const i=k(()=>Number.parseInt(n.value.params.course_pk)),d=B(),{pending:o,data:a}=d.get(i.value);return(u,l)=>(c(),x(y,null,[e(h,{modelValue:t(o),"onUpdate:modelValue":l[0]||(l[0]=f=>C(o)?o.value=f:null),class:"d-flex justify-center align-center"},{default:r(()=>[e(R,{indeterminate:"",color:"primary"})]),_:1},8,["modelValue"]),t(a)?(c(),g(S,{key:0},{default:r(()=>[e(w,null,{default:r(()=>[e(N,{class:"d-flex flex-column"},{default:r(()=>[m("span",b,p(t(a).title),1),m("span",I,p(t(a).code),1)]),_:1}),e(D)]),_:1})]),_:1})):v("",!0)],64))}});export{J as default};
