import{J as D,a3 as _,ag as G,bw as M,r as P,E as L,K as ne,v as f,j as ce,aQ as Ke,bb as He,by as Ue,a4 as B,F as j,aa as S,b as v,B as de,C as qe,ba as ae,ae as ve,h as Qe,af as fe,bz as ze,H as Je,Q as le,L as se,aZ as We,O as V,I as me,P as Ze,bp as Xe}from"./entry.tQWHpBLf.js";import{d as Ye}from"./index.qvKOBlyP.js";import{m as N,c as R,u as E,i as ye,j as et,l as tt,k as ge,b as nt,d as at}from"./VRow.WlLBb9Jc.js";import{u as lt}from"./ssrBoot.0aXw1rzb.js";import{M as st}from"./transition.31NosCAE.js";import{a as z,b as pe,m as he,c as be,d as Se,e as Ce,R as it,h as ke,n as rt,u as Ve,i as we,j as Ie,q as ut,V as ie}from"./index.AmeJTHgO.js";import{c as Pe}from"./createSimpleFunctional.413Od-xt.js";import{V as re}from"./VAvatar.NX62-iRj.js";import{V as ot}from"./VDivider.KeqwIEcH.js";const J=Symbol.for("vuetify:list");function Ae(){const e=D(J,{hasPrepend:_(!1),updateHasPrepend:()=>null}),l={hasPrepend:_(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return G(J,l),e}function Le(){return D(J,null)}const ct={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},Oe={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},dt={open:Oe.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},Z=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=M(n),e&&!s){const i=Array.from(a.entries()).reduce((r,h)=>{let[y,g]=h;return g==="on"?[...r,y]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},Be=e=>{const l=Z(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=M(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},vt=e=>{const l=Z(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=M(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},ft=e=>{const l=Be(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=M(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},mt=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=M(n);const h=new Map(a),y=[n];for(;y.length;){const u=y.shift();a.set(u,s?"on":"off"),i.has(u)&&y.push(...i.get(u))}let g=r.get(n);for(;g;){const u=i.get(g),o=u.every(c=>a.get(c)==="on"),d=u.every(c=>!a.has(c)||a.get(c)==="off");a.set(g,o?"on":d?"off":"indeterminate"),g=r.get(g)}return e&&!s&&Array.from(a.entries()).reduce((o,d)=>{let[c,m]=d;return m==="on"?[...o,c]:o},[]).length===0?h:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},F=Symbol.for("vuetify:nested"),Me={id:_(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:P(new Set),selected:P(new Map),selectedValues:P([])}},yt=L({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),gt=e=>{let l=!1;const t=P(new Map),n=P(new Map),s=ne(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return ft(e.mandatory);case"leaf":return vt(e.mandatory);case"independent":return Z(e.mandatory);case"single-independent":return Be(e.mandatory);case"classic":default:return mt(e.mandatory)}}),i=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return dt;case"single":return ct;case"multiple":default:return Oe}}),r=ne(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));ce(()=>{l=!0});function h(u){const o=[];let d=u;for(;d!=null;)o.unshift(d),d=n.value.get(d);return o}const y=Ke("nested"),g={id:_(),root:{opened:s,selected:r,selectedValues:f(()=>{const u=[];for(const[o,d]of r.value.entries())d==="on"&&u.push(o);return u}),register:(u,o,d)=>{o&&u!==o&&n.value.set(u,o),d&&t.value.set(u,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],u])},unregister:u=>{if(l)return;t.value.delete(u);const o=n.value.get(u);if(o){const d=t.value.get(o)??[];t.value.set(o,d.filter(c=>c!==u))}n.value.delete(u),s.value.delete(u)},open:(u,o,d)=>{y.emit("click:open",{id:u,value:o,path:h(u),event:d});const c=i.value.open({id:u,value:o,opened:new Set(s.value),children:t.value,parents:n.value,event:d});c&&(s.value=c)},openOnSelect:(u,o,d)=>{const c=i.value.select({id:u,value:o,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:d});c&&(s.value=c)},select:(u,o,d)=>{y.emit("click:select",{id:u,value:o,path:h(u),event:d});const c=a.value.select({id:u,value:o,selected:new Map(r.value),children:t.value,parents:n.value,event:d});c&&(r.value=c),g.root.openOnSelect(u,o,d)},children:t,parents:n}};return G(F,g),g.root},_e=(e,l)=>{const t=D(F,Me),n=Symbol(He()),s=f(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:f(()=>t.root.opened.value.has(s.value)),parent:f(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:f(()=>t.root.selected.value.get(M(s.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),ce(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&G(F,a),a},pt=()=>{const e=D(F,Me);G(F,{...e,isGroupActivator:!0})},ht=Ue({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return pt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),bt=L({activeColor:String,baseColor:String,color:String,collapseIcon:{type:B,default:"$collapse"},expandIcon:{type:B,default:"$expand"},prependIcon:B,appendIcon:B,fluid:Boolean,subgroup:Boolean,title:String,value:null,...N(),...R()},"VListGroup"),ue=j()({name:"VListGroup",props:bt(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=_e(S(e,"value"),!0),i=f(()=>`v-list-group--id-${String(a.value)}`),r=Le(),{isBooted:h}=lt();function y(d){s(!n.value,d)}const g=f(()=>({onClick:y,class:"v-list-group__header",id:i.value})),u=f(()=>n.value?e.collapseIcon:e.expandIcon),o=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return E(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(z,{defaults:o.value},{default:()=>[v(ht,null,{default:()=>[t.activator({props:g.value,isOpen:n.value})]})]}),v(st,{transition:{component:Ye},disabled:!h.value},{default:()=>{var d;return[de(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(d=t.default)==null?void 0:d.call(t)]),[[qe,n.value]])]}})]})),{}}}),St=Pe("v-list-item-subtitle"),Ct=Pe("v-list-item-title"),kt=L({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:B,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ae(),onClickOnce:ae(),...pe(),...N(),...he(),...ye(),...be(),...Se(),...et(),...R(),...ve(),...Ce({variant:"text"})},"VListItem"),oe=j()({name:"VListItem",directives:{Ripple:it},props:kt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=tt(e,t),i=f(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:h,isIndeterminate:y,isGroupActivator:g,root:u,parent:o,openOnSelect:d}=_e(i,!1),c=Le(),m=f(()=>{var p;return e.active!==!1&&(e.active||((p=a.isActive)==null?void 0:p.value)||h.value)}),w=f(()=>e.link!==!1&&a.isLink.value),k=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!c)),O=f(()=>e.rounded||e.nav),A=f(()=>e.color??e.activeColor),$=f(()=>({color:m.value?A.value??e.baseColor:e.baseColor,variant:e.variant}));Qe(()=>{var p;return(p=a.isActive)==null?void 0:p.value},p=>{p&&o.value!=null&&u.open(o.value,!0),p&&d(p)},{immediate:!0});const{themeClasses:K}=fe(e),{borderClasses:H}=ke(e),{colorClasses:U,colorStyles:I,variantClasses:b}=rt($),{densityClasses:x}=Ve(e),{dimensionStyles:Te}=ge(e),{elevationClasses:De}=we(e),{roundedClasses:Ge}=Ie(O),Ne=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),q=f(()=>({isActive:m.value,select:r,isSelected:h.value,isIndeterminate:y.value}));function X(p){var T;s("click",p),!(g||!k.value)&&((T=a.navigate)==null||T.call(a,p),e.value!=null&&r(!h.value,p))}function Re(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),X(p))}return E(()=>{const p=w.value?"a":e.tag,T=n.title||e.title!=null,Ee=n.subtitle||e.subtitle!=null,Y=!!(e.appendAvatar||e.appendIcon),$e=!!(Y||n.append),ee=!!(e.prependAvatar||e.prependIcon),Q=!!(ee||n.prepend);return c==null||c.updateHasPrepend(Q),e.activeColor&&ze("active-color",["color","base-color"]),de(v(p,{class:["v-list-item",{"v-list-item--active":m.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Q&&(c==null?void 0:c.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&m.value},K.value,H.value,U.value,x.value,De.value,Ne.value,Ge.value,b.value,e.class],style:[I.value,Te.value,e.style],href:a.href.value,tabindex:k.value?c?-2:0:void 0,onClick:X,onKeydown:k.value&&!w.value&&Re},{default:()=>{var te;return[ut(k.value||m.value,"v-list-item"),Q&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(z,{key:"prepend-defaults",disabled:!ee,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var C;return[(C=n.prepend)==null?void 0:C.call(n,q.value)]}}):v(le,null,[e.prependAvatar&&v(re,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(ie,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),v("div",{class:"v-list-item__spacer"},null)]),v("div",{class:"v-list-item__content","data-no-activator":""},[T&&v(Ct,{key:"title"},{default:()=>{var C;return[((C=n.title)==null?void 0:C.call(n,{title:e.title}))??e.title]}}),Ee&&v(St,{key:"subtitle"},{default:()=>{var C;return[((C=n.subtitle)==null?void 0:C.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(te=n.default)==null?void 0:te.call(n,q.value)]),$e&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(z,{key:"append-defaults",disabled:!Y,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var C;return[(C=n.append)==null?void 0:C.call(n,q.value)]}}):v(le,null,[e.appendIcon&&v(ie,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(re,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),v("div",{class:"v-list-item__spacer"},null)])]}}),[[Je("ripple"),k.value&&e.ripple]])}),{}}}),Vt=L({color:String,inset:Boolean,sticky:Boolean,title:String,...N(),...R()},"VListSubheader"),wt=j()({name:"VListSubheader",props:Vt(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=nt(S(e,"color"));return E(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&v("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),It=L({items:Array,returnObject:Boolean},"VListChildren"),Fe=j()({name:"VListChildren",props:It(),setup(e,l){let{slots:t}=l;return Ae(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var o,d;let{children:i,props:r,type:h,raw:y}=a;if(h==="divider")return((o=t.divider)==null?void 0:o.call(t,{props:r}))??v(ot,r,null);if(h==="subheader")return((d=t.subheader)==null?void 0:d.call(t,{props:r}))??v(wt,r,null);const g={subtitle:t.subtitle?c=>{var m;return(m=t.subtitle)==null?void 0:m.call(t,{...c,item:y})}:void 0,prepend:t.prepend?c=>{var m;return(m=t.prepend)==null?void 0:m.call(t,{...c,item:y})}:void 0,append:t.append?c=>{var m;return(m=t.append)==null?void 0:m.call(t,{...c,item:y})}:void 0,title:t.title?c=>{var m;return(m=t.title)==null?void 0:m.call(t,{...c,item:y})}:void 0},u=ue.filterProps(r);return i?v(ue,se({value:r==null?void 0:r.value},u),{activator:c=>{let{props:m}=c;const w={...r,...m,value:e.returnObject?y:r.value};return t.header?t.header({props:w}):v(oe,w,g)},default:()=>v(Fe,{items:i},t)}):t.item?t.item({props:r}):v(oe,se(r,{value:e.returnObject?y:r.value}),g)}))}}}),Pt=L({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:We}},"list-items");function W(e,l){const t=V(l,e.itemTitle,l),n=V(l,e.itemValue,t),s=V(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?me(l,["children"]):l:void 0:V(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?je(e,s):void 0,raw:l}}function je(e,l){const t=[];for(const n of l)t.push(W(e,n));return t}function Rt(e){const l=f(()=>je(e,e.items)),t=f(()=>l.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(i=>i!==null)),a.map(i=>e.returnObject&&typeof i=="string"?W(e,i):l.value.find(r=>e.valueComparator(i,r.value))||W(e,i))}function s(a){return e.returnObject?a.map(i=>{let{raw:r}=i;return r}):a.map(i=>{let{value:r}=i;return r})}return{items:l,transformIn:n,transformOut:s}}function At(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Lt(e,l){const t=V(l,e.itemType,"item"),n=At(l)?l:V(l,e.itemTitle),s=V(l,e.itemValue,void 0),a=V(l,e.itemChildren),i=e.itemProps===!0?me(l,["children"]):V(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?xe(e,a):void 0,raw:l}}function xe(e,l){const t=[];for(const n of l)t.push(Lt(e,n));return t}function Ot(e){return{items:f(()=>xe(e,e.items))}}const Bt=L({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...yt({selectStrategy:"single-leaf",openStrategy:"list"}),...pe(),...N(),...he(),...ye(),...be(),itemType:{type:String,default:"type"},...Pt(),...Se(),...R(),...ve(),...Ce({variant:"text"})},"VList"),Et=j()({name:"VList",props:Bt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=Ot(e),{themeClasses:s}=fe(e),{backgroundColorClasses:a,backgroundColorStyles:i}=at(S(e,"bgColor")),{borderClasses:r}=ke(e),{densityClasses:h}=Ve(e),{dimensionStyles:y}=ge(e),{elevationClasses:g}=we(e),{roundedClasses:u}=Ie(e),{open:o,select:d}=gt(e),c=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),m=S(e,"activeColor"),w=S(e,"baseColor"),k=S(e,"color");Ae(),Ze({VListGroup:{activeColor:m,baseColor:w,color:k},VListItem:{activeClass:S(e,"activeClass"),activeColor:m,baseColor:w,color:k,density:S(e,"density"),disabled:S(e,"disabled"),lines:S(e,"lines"),nav:S(e,"nav"),slim:S(e,"slim"),variant:S(e,"variant")}});const O=_(!1),A=P();function $(b){O.value=!0}function K(b){O.value=!1}function H(b){var x;!O.value&&!(b.relatedTarget&&((x=A.value)!=null&&x.contains(b.relatedTarget)))&&I()}function U(b){if(A.value){if(b.key==="ArrowDown")I("next");else if(b.key==="ArrowUp")I("prev");else if(b.key==="Home")I("first");else if(b.key==="End")I("last");else return;b.preventDefault()}}function I(b){if(A.value)return Xe(A.value,b)}return E(()=>v(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,a.value,r.value,h.value,g.value,c.value,u.value,e.class],style:[i.value,y.value,e.style],tabindex:e.disabled||O.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:$,onFocusout:K,onFocus:H,onKeydown:U},{default:()=>[v(Fe,{items:n.value,returnObject:e.returnObject},t)]})),{open:o,select:d,focus:I}}});export{Et as V,oe as a,Ct as b,St as c,Pt as m,Rt as u};