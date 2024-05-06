import{n as N,r as g,v as b,o as i,y as u,w as e,a2 as A,a1 as E,t as a,a as c,d as r,b as s,L as C,Q as k,z as _,Z as y,c as z,D as I,at as L,$ as T,a0 as W,p as $,e as M,_ as R}from"./entry.tQWHpBLf.js";import{V as F}from"./VCard.T8BHTP73.js";import{V as f}from"./VTooltip.gJvVvmRp.js";import{V as p}from"./VChip.ttJWPZTa.js";import{V as w}from"./VAvatar.NX62-iRj.js";import{V as B}from"./index.AmeJTHgO.js";import{V as P}from"./VDivider.KeqwIEcH.js";import{V as O}from"./VBadge.ClXMEkqI.js";import"./VRow.WlLBb9Jc.js";import"./createSimpleFunctional.413Od-xt.js";import"./VOverlay.1V9m9YmJ.js";import"./easing.imumzmxr.js";import"./lazy.hsVx4m50.js";import"./transition.31NosCAE.js";import"./forwardRefs.y8pOSn8h.js";import"./index.qvKOBlyP.js";import"./VBtn._oQ1uiNP.js";import"./VProgressCircular.DTBbBXDU.js";const Q=T(()=>W(()=>import("./is-authenticated.2_vl-wsG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url).then(l=>l.default||l)),S=l=>($("data-v-8abc4dd0"),l=l(),M(),l),Z={class:"d-flex flex-column pa-1 text-subtitle-1"},j={class:"d-flex"},q={class:"text-subtitle-2"},G=S(()=>c("span",{class:"d-block pa-2 text-subtitle-2"},"venues",-1)),H=S(()=>c("span",{class:"d-block pa-2 text-subtitle-2"},"invigilators",-1)),J=N({__name:"timetable_slot_course__full_view",props:{slotCourse:{},errorColor:{},fullWidth:{type:Boolean}},setup(l){const n=l,h=g(!1),m=g(!1),x=b(()=>m.value==!0?n.slotCourse.invigilators:n.slotCourse.invigilators.length>2?n.slotCourse.invigilators.slice(0,2):n.slotCourse.invigilators),D=b(()=>m.value==!0?n.slotCourse.venues:n.slotCourse.venues.length>2?n.slotCourse.venues.slice(0,2):n.slotCourse.venues);return(o,d)=>{const V=Q;return i(),u(O,{color:o.slotCourse.complain_count>0?"amber":"transparent",class:L({fullWidth:o.fullWidth})},{default:e(()=>[(i(),u(F,{key:o.slotCourse.pk,color:o.errorColor,class:"border border-primary rounded-md pa-2 mb-auto course-card"},{default:e(()=>[c("span",Z,[c("div",j,[s(f,null,{activator:e(({props:t})=>[c("span",E(A(t)),a(o.slotCourse.course.code),17)]),default:e(()=>[r(" "+a(o.slotCourse.course.title),1)]),_:1})]),s(V,{"user-type":["admin","staff"]},{default:e(()=>[c("span",q,a(o.slotCourse.course.student_count)+" Students ",1),s(f,{text:"supervisor",class:"mr-auto"},{activator:e(({props:t})=>[s(p,C(t,{variant:"tonal",size:"small",class:"ma-1 ml-0 mr-auto"}),{prepend:e(()=>[s(w,{class:"mr-2",color:"white"},{default:e(()=>[s(B,null,{default:e(()=>[r("mdi-account")]),_:1})]),_:1})]),default:e(()=>[r(" "+a(o.slotCourse.supervisor.name),1)]),_:2},1040)]),_:1})]),_:1})]),s(P),G,(i(!0),z(k,null,y(_(D),t=>(i(),u(f,{key:t.pk,text:t.title},{activator:e(({props:v})=>[s(p,C(v,{"close-icon":"mdi-chat",variant:"tonal",size:"small",class:"ma-1 ml-0"}),{default:e(()=>[r(a(t.code),1)]),_:2},1040)]),_:2},1032,["text"]))),128)),o.slotCourse.venues.length>2&&!_(h)?(i(),u(p,{key:0,variant:"tonal",class:"ma-1 ml-0",onClick:d[0]||(d[0]=t=>h.value=!0)},{default:e(()=>[r(" +"+a(o.slotCourse.venues.length-2)+" More ",1)]),_:1})):I("",!0),s(V,{"user-type":["admin","staff"]},{default:e(()=>[s(P,{class:"mt-2"}),H,(i(!0),z(k,null,y(_(x),t=>(i(),u(f,{key:t.pk},{activator:e(({props:v})=>[s(p,C(v,{"close-icon":"mdi-chat",variant:"tonal",class:"ma-1 ml-0",size:"small"}),{prepend:e(()=>[s(w,{class:"mr-2",color:"white"},{default:e(()=>[s(B,null,{default:e(()=>[r("mdi-account")]),_:1})]),_:1})]),default:e(()=>[r(" "+a(t.name),1)]),_:2},1040)]),default:e(()=>[r(" Invigilator ("+a(t.department.title)+") ",1)]),_:2},1024))),128)),o.slotCourse.invigilators.length>2&&!_(m)?(i(),u(p,{key:0,"close-icon":"mdi-chat",variant:"tonal",size:"small",class:"ma-1 ml-0",onClick:d[1]||(d[1]=t=>m.value=!0)},{default:e(()=>[r(" +"+a(o.slotCourse.venues.length-2)+" More ",1)]),_:1})):I("",!0)]),_:1})]),_:1},8,["color"]))]),_:1},8,["color","class"])}}}),_e=R(J,[["__scopeId","data-v-8abc4dd0"]]);export{_e as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./is-authenticated.2_vl-wsG.js","./entry.tQWHpBLf.js","./entry.JkaK1PbT.css","./VBtn._oQ1uiNP.js","./index.AmeJTHgO.js","./VRow.WlLBb9Jc.js","./VRow.Jj_ITn01.css","./index.RLmRraAs.css","./VProgressCircular.DTBbBXDU.js","./VProgressCircular.u2v1YYMj.css","./VBtn.Y_2JgC81.css","./is-authenticated.MRbMt392.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}