import{m as c,u,c as f}from"./VRow.WlLBb9Jc.js";import{a as d,c as V,b}from"./layout.RwfjoJ97.js";import{E as i,ae as g,F as p,af as k,a6 as P,b as o}from"./entry.tQWHpBLf.js";import{u as h}from"./ssrBoot.0aXw1rzb.js";const C=i({...c(),...d({fullHeight:!0}),...g()},"VApp"),R=p()({name:"VApp",props:C(),setup(a,r){let{slots:e}=r;const s=k(a),{layoutClasses:n,getLayoutItem:t,items:l,layoutRef:v}=V(a),{rtlClasses:y}=P();return u(()=>{var m;return o("div",{ref:v,class:["v-application",s.themeClasses.value,n.value,y.value,a.class],style:[a.style]},[o("div",{class:"v-application__wrap"},[(m=e.default)==null?void 0:m.call(e)])])}),{getLayoutItem:t,items:l,theme:s}}}),A=i({scrollable:Boolean,...c(),...f({tag:"main"})},"VMain"),S=p()({name:"VMain",props:A(),setup(a,r){let{slots:e}=r;const{mainStyles:s}=b(),{ssrBootStyles:n}=h();return u(()=>o(a.tag,{class:["v-main",{"v-main--scrollable":a.scrollable},a.class],style:[s.value,n.value,a.style]},{default:()=>{var t,l;return[a.scrollable?o("div",{class:"v-main__scroller"},[(t=e.default)==null?void 0:t.call(e)]):(l=e.default)==null?void 0:l.call(e)]}})),{}}});export{S as V,R as a};
