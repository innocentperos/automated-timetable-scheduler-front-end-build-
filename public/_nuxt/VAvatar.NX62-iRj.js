import{m as I,i as M,k as L,u as P,f as Q,c as G,g as J}from"./VRow.WlLBb9Jc.js";import{m as K,d as X,e as Y,n as Z,u as p,j as ee,V as te,q as ae}from"./index.AmeJTHgO.js";import{E as k,F as R,b as a,v as b,aW as W,aQ as ne,a3 as _,r as re,h as V,U as se,ah as ie,j as le,B as N,H as oe,Q as ue,L as ce,ab as ve,C as de,a4 as me,ae as ge,af as fe}from"./entry.tQWHpBLf.js";import{m as Se,M as h}from"./transition.31NosCAE.js";function ye(e){return{aspectStyles:b(()=>{const o=Number(e.aspectRatio);return o?{paddingBottom:String(1/o*100)+"%"}:void 0})}}const D=k({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...I(),...M()},"VResponsive"),O=R()({name:"VResponsive",props:D(),setup(e,o){let{slots:n}=o;const{aspectStyles:r}=ye(e),{dimensionStyles:c}=L(e);return P(()=>{var m;return a("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[a("div",{class:"v-responsive__sizer",style:r.value},null),(m=n.additional)==null?void 0:m.call(n),n.default&&a("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function _e(e,o){if(!W)return;const n=o.modifiers||{},r=o.value,{handler:c,options:m}=typeof r=="object"?r:{handler:r,options:{}},i=new IntersectionObserver(function(){var d;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const v=(d=e._observe)==null?void 0:d[o.instance.$.uid];if(!v)return;const l=s.some(S=>S.isIntersecting);c&&(!n.quiet||v.init)&&(!n.once||l||v.init)&&c(l,s,g),l&&n.once?F(e,o):v.init=!0},m);e._observe=Object(e._observe),e._observe[o.instance.$.uid]={init:!1,observer:i},i.observe(e)}function F(e,o){var r;const n=(r=e._observe)==null?void 0:r[o.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[o.instance.$.uid])}const he={mounted:_e,unmounted:F},be=he,ze=k({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...D(),...I(),...Se()},"VImg"),Ve=R()({name:"VImg",directives:{intersect:be},props:ze(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,o){let{emit:n,slots:r}=o;const c=ne("VImg"),m=_(""),i=re(),s=_(e.eager?"loading":"idle"),g=_(),v=_(),l=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=b(()=>l.value.aspect||g.value/v.value||0);V(()=>e.src,()=>{S(s.value!=="idle")}),V(d,(t,u)=>{!t&&u&&i.value&&y(i.value)}),se(()=>S());function S(t){if(!(e.eager&&t)&&!(W&&!t&&!e.eager)){if(s.value="loading",l.value.lazySrc){const u=new Image;u.src=l.value.lazySrc,y(u,null)}l.value.src&&ie(()=>{var u;n("loadstart",((u=i.value)==null?void 0:u.currentSrc)||l.value.src),setTimeout(()=>{var f;if(!c.isUnmounted)if((f=i.value)!=null&&f.complete){if(i.value.naturalWidth||T(),s.value==="error")return;d.value||y(i.value,null),s.value==="loading"&&C()}else d.value||y(i.value),w()})})}}function C(){var t;c.isUnmounted||(w(),y(i.value),s.value="loaded",n("load",((t=i.value)==null?void 0:t.currentSrc)||l.value.src))}function T(){var t;c.isUnmounted||(s.value="error",n("error",((t=i.value)==null?void 0:t.currentSrc)||l.value.src))}function w(){const t=i.value;t&&(m.value=t.currentSrc||t.src)}let z=-1;le(()=>{clearTimeout(z)});function y(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const f=()=>{if(clearTimeout(z),c.isUnmounted)return;const{naturalHeight:U,naturalWidth:A}=t;U||A?(g.value=A,v.value=U):!t.complete&&s.value==="loading"&&u!=null?z=window.setTimeout(f,u):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,v.value=1)};f()}const B=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),$=()=>{var f;if(!l.value.src||s.value==="idle")return null;const t=a("img",{class:["v-img__img",B.value],style:{objectPosition:e.position},src:l.value.src,srcset:l.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:i,onLoad:C,onError:T},null),u=(f=r.sources)==null?void 0:f.call(r);return a(h,{transition:e.transition,appear:!0},{default:()=>[N(u?a("picture",{class:"v-img__picture"},[u,t]):t,[[de,s.value==="loaded"]])]})},x=()=>a(h,{transition:e.transition},{default:()=>[l.value.lazySrc&&s.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",B.value],style:{objectPosition:e.position},src:l.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),E=()=>r.placeholder?a(h,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!r.error)&&a("div",{class:"v-img__placeholder"},[r.placeholder()])]}):null,q=()=>r.error?a(h,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&a("div",{class:"v-img__error"},[r.error()])]}):null,H=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=_(!1);{const t=V(d,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),t())})}return P(()=>{const t=O.filterProps(e);return N(a(O,ce({class:["v-img",{"v-img--booting":!j.value},e.class],style:[{width:ve(e.width==="auto"?g.value:e.width)},e.style]},t,{aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>a(ue,null,[a($,null,null),a(x,null,null),a(H,null,null),a(E,null,null),a(q,null,null)]),default:r.default}),[[oe("intersect"),{handler:S,options:e.options},null,{once:!0}]])}),{currentSrc:m,image:i,state:s,naturalWidth:g,naturalHeight:v}}}),Ie=k({start:Boolean,end:Boolean,icon:me,image:String,text:String,...I(),...K(),...X(),...Q(),...G(),...ge(),...Y({variant:"flat"})},"VAvatar"),Te=R()({name:"VAvatar",props:Ie(),setup(e,o){let{slots:n}=o;const{themeClasses:r}=fe(e),{colorClasses:c,colorStyles:m,variantClasses:i}=Z(e),{densityClasses:s}=p(e),{roundedClasses:g}=ee(e),{sizeClasses:v,sizeStyles:l}=J(e);return P(()=>a(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},r.value,c.value,s.value,g.value,v.value,i.value,e.class],style:[m.value,l.value,e.style]},{default:()=>{var d;return[e.image?a(Ve,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?a(te,{key:"icon",icon:e.icon},null):((d=n.default)==null?void 0:d.call(n))??e.text,ae(!1,"v-avatar")]}})),{}}});export{be as I,Te as V,O as a,Ve as b};