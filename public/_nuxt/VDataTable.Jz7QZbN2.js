import{b1 as st,r as G,b2 as it,E as T,a4 as M,ae as Ve,F as A,K as R,G as Y,a6 as dt,af as Ie,Y as ct,a3 as ft,P as ue,v as S,b3 as U,aa as I,b as c,L as C,b4 as be,ah as ye,f as De,ag as H,J as j,a9 as le,b5 as vt,ab as E,b0 as gt,b6 as mt,aZ as Te,b7 as ne,b8 as X,b9 as Q,Q as W,d as he,R as pe,t as bt,ba as re,O as J,aQ as yt,h as ht}from"./entry.tQWHpBLf.js";import{V as pt}from"./VSelect.4u-stGGs.js";import{b as xt,m as _e,c as Pt,d as St,e as kt,f as wt,g as Vt,L as It,V as Dt,u as Tt}from"./index.AmeJTHgO.js";import{m as Be,f as _t,c as Ce,u as N,d as Bt}from"./VRow.WlLBb9Jc.js";import{u as Ct}from"./VProgressCircular.DTBbBXDU.js";import{V as O}from"./VBtn._oQ1uiNP.js";import{V as se}from"./VCheckboxBtn.ztQGvB4X.js";import{m as Ft,u as Lt}from"./filter.y4xAiLA_.js";import{V as At}from"./VDivider.KeqwIEcH.js";function xe(e,l,a){return Object.keys(e).filter(t=>st(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}function $t(){const e=G([]);it(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const Ot=T({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:M,default:"$first"},prevIcon:{type:M,default:"$prev"},nextIcon:{type:M,default:"$next"},lastIcon:{type:M,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...xt(),...Be(),..._e(),...Pt(),...St(),..._t(),...Ce({tag:"nav"}),...Ve(),...kt({variant:"text"})},"VPagination"),Et=A()({name:"VPagination",props:Ot(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=R(e,"modelValue"),{t:r,n:s}=Y(),{isRtl:o}=dt(),{themeClasses:u}=Ie(e),{width:f}=ct(),i=ft(-1);ue(void 0,{scoped:!0});const{resizeRef:v}=Ct(y=>{if(!y.length)return;const{target:P,contentRect:w}=y[0],D=P.querySelector(".v-pagination__list > *");if(!D)return;const B=w.width,$=D.offsetWidth+parseFloat(getComputedStyle(D).marginRight)*2;i.value=p(B,$)}),d=S(()=>parseInt(e.length,10)),g=S(()=>parseInt(e.start,10)),x=S(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):i.value>=0?i.value:p(f.value,58));function p(y,P){const w=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((y-P*w)/P).toFixed(2)))}const m=S(()=>{if(d.value<=0||isNaN(d.value)||d.value>Number.MAX_SAFE_INTEGER)return[];if(x.value<=0)return[];if(x.value===1)return[n.value];if(d.value<=x.value)return U(d.value,g.value);const y=x.value%2===0,P=y?x.value/2:Math.floor(x.value/2),w=y?P:P+1,D=d.value-P;if(w-n.value>=0)return[...U(Math.max(1,x.value-1),g.value),e.ellipsis,d.value];if(n.value-D>=(y?1:0)){const B=x.value-1,$=d.value-B+g.value;return[g.value,e.ellipsis,...U(B,$)]}else{const B=Math.max(1,x.value-3),$=B===1?n.value:n.value-Math.ceil(B/2)+g.value;return[g.value,e.ellipsis,...U(B,$),e.ellipsis,d.value]}});function b(y,P,w){y.preventDefault(),n.value=P,w&&t(w,P)}const{refs:k,updateRef:V}=$t();ue({VPaginationBtn:{color:I(e,"color"),border:I(e,"border"),density:I(e,"density"),size:I(e,"size"),variant:I(e,"variant"),rounded:I(e,"rounded"),elevation:I(e,"elevation")}});const h=S(()=>m.value.map((y,P)=>{const w=D=>V(D,P);if(typeof y=="string")return{isActive:!1,key:`ellipsis-${P}`,page:y,props:{ref:w,ellipsis:!0,icon:!0,disabled:!0}};{const D=y===n.value;return{isActive:D,key:y,page:s(y),props:{ref:w,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:D?e.activeColor:e.color,ariaCurrent:D,ariaLabel:r(D?e.currentPageAriaLabel:e.pageAriaLabel,y),onClick:B=>b(B,y)}}}})),_=S(()=>{const y=!!e.disabled||n.value<=g.value,P=!!e.disabled||n.value>=g.value+d.value-1;return{first:e.showFirstLastPage?{icon:o.value?e.lastIcon:e.firstIcon,onClick:w=>b(w,g.value,"first"),disabled:y,ariaLabel:r(e.firstAriaLabel),ariaDisabled:y}:void 0,prev:{icon:o.value?e.nextIcon:e.prevIcon,onClick:w=>b(w,n.value-1,"prev"),disabled:y,ariaLabel:r(e.previousAriaLabel),ariaDisabled:y},next:{icon:o.value?e.prevIcon:e.nextIcon,onClick:w=>b(w,n.value+1,"next"),disabled:P,ariaLabel:r(e.nextAriaLabel),ariaDisabled:P},last:e.showFirstLastPage?{icon:o.value?e.firstIcon:e.lastIcon,onClick:w=>b(w,g.value+d.value-1,"last"),disabled:P,ariaLabel:r(e.lastAriaLabel),ariaDisabled:P}:void 0}});function L(){var P;const y=n.value-g.value;(P=k.value[y])==null||P.$el.focus()}function z(y){y.key===be.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,ye(L)):y.key===be.right&&!e.disabled&&n.value<g.value+d.value-1&&(n.value=n.value+1,ye(L))}return N(()=>c(e.tag,{ref:v,class:["v-pagination",u.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:z,"data-test":"v-pagination-root"},{default:()=>[c("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&c("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(_.value.first):c(O,C({_as:"VPaginationBtn"},_.value.first),null)]),c("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(_.value.prev):c(O,C({_as:"VPaginationBtn"},_.value.prev),null)]),h.value.map((y,P)=>c("li",{key:y.key,class:["v-pagination__item",{"v-pagination__item--is-active":y.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(y):c(O,C({_as:"VPaginationBtn"},y.props),{default:()=>[y.page]})])),c("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(_.value.next):c(O,C({_as:"VPaginationBtn"},_.value.next),null)]),e.showFirstLastPage&&c("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(_.value.last):c(O,C({_as:"VPaginationBtn"},_.value.last),null)])])]})),{}}}),Rt=T({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Fe=Symbol.for("vuetify:data-table-pagination");function Nt(e){const l=R(e,"page",void 0,t=>+(t??1)),a=R(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function Gt(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=S(()=>a.value===-1?0:a.value*(l.value-1)),r=S(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),s=S(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));De(()=>{l.value>s.value&&(l.value=s.value)});function o(d){a.value=d,l.value=1}function u(){l.value=le(l.value+1,1,s.value)}function f(){l.value=le(l.value-1,1,s.value)}function i(d){l.value=le(d,1,s.value)}const v={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:s,itemsLength:t,nextPage:u,prevPage:f,setPage:i,setItemsPerPage:o};return H(Fe,v),v}function Mt(){const e=j(Fe);if(!e)throw new Error("Missing pagination!");return e}function Ht(e){const{items:l,startIndex:a,stopIndex:t,itemsPerPage:n}=e;return{paginatedItems:S(()=>n.value<=0?l.value:l.value.slice(a.value,t.value))}}const Le=T({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Pe=A()({name:"VDataTableFooter",props:Le(),setup(e,l){let{slots:a}=l;const{t}=Y(),{page:n,pageCount:r,startIndex:s,stopIndex:o,itemsLength:u,itemsPerPage:f,setItemsPerPage:i}=Mt(),v=S(()=>e.itemsPerPageOptions.map(d=>typeof d=="number"?{value:d,title:d===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(d)}:{...d,title:t(d.title)}));return N(()=>{var d;return c("div",{class:"v-data-table-footer"},[(d=a.prepend)==null?void 0:d.call(a),c("div",{class:"v-data-table-footer__items-per-page"},[c("span",null,[t(e.itemsPerPageText)]),c(pt,{items:v.value,modelValue:f.value,"onUpdate:modelValue":g=>i(Number(g)),density:"compact",variant:"outlined","hide-details":!0},null)]),c("div",{class:"v-data-table-footer__info"},[c("div",null,[t(e.pageText,u.value?s.value+1:0,o.value,u.value)])]),c("div",{class:"v-data-table-footer__pagination"},[c(Et,{modelValue:n.value,"onUpdate:modelValue":g=>n.value=g,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},null)])])}),{}}}),ie=vt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return c(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:E(e.height),width:E(e.width),left:E(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),jt=T({headers:Array},"DataTable-header"),Ae=Symbol.for("vuetify:data-table-headers"),$e={title:"",sortable:!1},zt={...$e,width:48};function qt(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function oe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)oe(a,l);return l}function Oe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&Oe(a.children,l);return l}function Kt(e){if(e.key){if(e.key==="data-table-group")return $e;if(["data-table-expand","data-table-select"].includes(e.key))return zt}}function de(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>de(a,l+1))):l}function Wt(e){let l=!1;function a(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(s&&(r.fixed=!0),r.fixed)if(r.children)for(let o=r.children.length-1;o>=0;o--)a(r.children[o],!0);else l?isNaN(+r.width)&&mt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let o=r.children.length-1;o>=0;o--)a(r.children[o]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return s;if(r.children){r.fixedOffset=s;for(const o of r.children)s=t(o,s)}else r.fixed&&(r.fixedOffset=s,s+=parseFloat(r.width||"0")||0);return s}let n=0;for(const r of e)n=t(r,n)}function Ut(e,l){const a=[];let t=0;const n=qt(e);for(;n.size()>0;){let s=n.count();const o=[];let u=1;for(;s>0;){const{element:f,priority:i}=n.dequeue(),v=l-t-de(f);if(o.push({...f,rowspan:v??1,colspan:f.children?oe(f).length:1}),f.children)for(const d of f.children){const g=i%1+u/Math.pow(10,t+2);n.enqueue(d,t+v+g)}u+=1,s-=1}t+=1,a.push(o)}return{columns:e.map(s=>oe(s)).flat(),headers:a}}function Ee(e){const l=[];for(const a of e){const t={...Kt(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,s={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?Ee(t.children):void 0};l.push(s)}return l}function Qt(e,l){const a=G([]),t=G([]),n=G(),r=G();De(()=>{var x,p,m;const u=(e.headers||Object.keys(e.items[0]??{}).map(b=>({key:b,title:gt(b)}))).slice(),f=Oe(u);(x=l==null?void 0:l.groupBy)!=null&&x.value.length&&!f.has("data-table-group")&&u.unshift({key:"data-table-group",title:"Group"}),(p=l==null?void 0:l.showSelect)!=null&&p.value&&!f.has("data-table-select")&&u.unshift({key:"data-table-select"}),(m=l==null?void 0:l.showExpand)!=null&&m.value&&!f.has("data-table-expand")&&u.push({key:"data-table-expand"});const i=Ee(u);Wt(i);const v=Math.max(...i.map(b=>de(b)))+1,d=Ut(i,v);a.value=d.headers,t.value=d.columns;const g=d.headers.flat(1);n.value=g.reduce((b,k)=>(k.sortable&&k.key&&k.sort&&(b[k.key]=k.sort),b),{}),r.value=g.reduce((b,k)=>(k.key&&k.filter&&(b[k.key]=k.filter),b),{})});const s={headers:a,columns:t,sortFunctions:n,filterFunctions:r};return H(Ae,s),s}function Z(){const e=j(Ae);if(!e)throw new Error("Missing headers!");return e}const Jt={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Re={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return Re.select({items:a,value:l,selected:t})}},Ne={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return Ne.select({items:a,value:l,selected:t})}},Xt=T({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Te}},"DataTable-select"),Ge=Symbol.for("vuetify:data-table-selection");function Yt(e,l){let{allItems:a,currentPage:t}=l;const n=R(e,"modelValue",e.modelValue,m=>new Set(ne(m).map(b=>{var k;return((k=a.value.find(V=>e.valueComparator(b,V.value)))==null?void 0:k.value)??b})),m=>[...m.values()]),r=S(()=>a.value.filter(m=>m.selectable)),s=S(()=>t.value.filter(m=>m.selectable)),o=S(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Jt;case"all":return Ne;case"page":default:return Re}});function u(m){return ne(m).every(b=>n.value.has(b.value))}function f(m){return ne(m).some(b=>n.value.has(b.value))}function i(m,b){const k=o.value.select({items:m,value:b,selected:new Set(n.value)});n.value=k}function v(m){i([m],!u([m]))}function d(m){const b=o.value.selectAll({value:m,allItems:r.value,currentPage:s.value,selected:new Set(n.value)});n.value=b}const g=S(()=>n.value.size>0),x=S(()=>{const m=o.value.allSelected({allItems:r.value,currentPage:s.value});return!!m.length&&u(m)}),p={toggleSelect:v,select:i,selectAll:d,isSelected:u,isSomeSelected:f,someSelected:g,allSelected:x,showSelectAll:o.value.showSelectAll};return H(Ge,p),p}function ee(){const e=j(Ge);if(!e)throw new Error("Missing selection!");return e}const Zt=T({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Me=Symbol.for("vuetify:data-table-sort");function ea(e){const l=R(e,"sortBy"),a=I(e,"mustSort"),t=I(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function ta(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=u=>{if(u.key==null)return;let f=l.value.map(v=>({...v}))??[];const i=f.find(v=>v.key===u.key);i?i.order==="desc"?a.value?i.order="asc":f=f.filter(v=>v.key!==u.key):i.order="desc":t.value?f=[...f,{key:u.key,order:"asc"}]:f=[{key:u.key,order:"asc"}],l.value=f,n&&(n.value=1)};function s(u){return!!l.value.find(f=>f.key===u.key)}const o={sortBy:l,toggleSort:r,isSorted:s};return H(Me,o),o}function aa(){const e=j(Me);if(!e)throw new Error("Missing sort!");return e}function la(e,l,a,t){const n=Y();return{sortedItems:S(()=>a.value.length?na(l.value,a.value,n.current.value,{...e.customKeySort,...t==null?void 0:t.value}):l.value)}}function na(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((r,s)=>{for(let o=0;o<l.length;o++){const u=l[o].key,f=l[o].order??"asc";if(f===!1)continue;let i=X(r.raw,u),v=X(s.raw,u);if(f==="desc"&&([i,v]=[v,i]),t!=null&&t[u]){const d=t[u](i,v);if(!d)continue;return d}if(i instanceof Date&&v instanceof Date)return i.getTime()-v.getTime();if([i,v]=[i,v].map(d=>d!=null?d.toString().toLocaleLowerCase():d),i!==v)return Q(i)&&Q(v)?0:Q(i)?-1:Q(v)?1:!isNaN(i)&&!isNaN(v)?Number(i)-Number(v):n.compare(i,v)}return 0})}const He=T({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:M,default:"$sortAsc"},sortDescIcon:{type:M,default:"$sortDesc"},...wt()},"VDataTableHeaders"),Se=A()({name:"VDataTableHeaders",props:He(),setup(e,l){let{slots:a}=l;const{toggleSort:t,sortBy:n,isSorted:r}=aa(),{someSelected:s,allSelected:o,selectAll:u,showSelectAll:f}=ee(),{columns:i,headers:v}=Z(),{loaderClasses:d}=Vt(e);function g(V,h){if(!(!e.sticky&&!V.fixed))return{position:"sticky",left:V.fixed?E(V.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${h})`:void 0}}function x(V){const h=n.value.find(_=>_.key===V.key);return h?h.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:p,backgroundColorStyles:m}=Bt(e,"color"),b=S(()=>({headers:v.value,columns:i.value,toggleSort:t,isSorted:r,sortBy:n.value,someSelected:s.value,allSelected:o.value,selectAll:u,getSortIcon:x})),k=V=>{let{column:h,x:_,y:L}=V;const z=h.key==="data-table-select"||h.key==="data-table-expand";return c(ie,C({tag:"th",align:h.align,class:["v-data-table__th",{"v-data-table__th--sortable":h.sortable,"v-data-table__th--sorted":r(h),"v-data-table__th--fixed":h.fixed},d.value],style:{width:E(h.width),minWidth:E(h.minWidth),...g(h,L)},colspan:h.colspan,rowspan:h.rowspan,onClick:h.sortable?()=>t(h):void 0,fixed:h.fixed,lastFixed:h.lastFixed,noPadding:z},h.headerProps),{default:()=>{var w;const y=`header.${h.key}`,P={column:h,selectAll:u,isSorted:r,toggleSort:t,sortBy:n.value,someSelected:s.value,allSelected:o.value,getSortIcon:x};return a[y]?a[y](P):h.key==="data-table-select"?((w=a["header.data-table-select"])==null?void 0:w.call(a,P))??(f&&c(se,{modelValue:o.value,indeterminate:s.value&&!o.value,"onUpdate:modelValue":u},null)):c("div",{class:"v-data-table-header__content"},[c("span",null,[h.title]),h.sortable&&c(Dt,{key:"icon",class:"v-data-table-header__sort-icon",icon:x(h)},null),e.multiSort&&r(h)&&c("div",{key:"badge",class:["v-data-table-header__sort-badge",...p.value],style:m.value},[n.value.findIndex(D=>D.key===h.key)+1])])}})};N(()=>c(W,null,[a.headers?a.headers(b.value):v.value.map((V,h)=>c("tr",null,[V.map((_,L)=>c(k,{column:_,x:L,y:h},null))])),e.loading&&c("tr",{class:"v-data-table-progress"},[c("th",{colspan:i.value.length},[c(It,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),ra=T({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),je=Symbol.for("vuetify:data-table-group");function ua(e){return{groupBy:R(e,"groupBy")}}function oa(e){const{groupBy:l,sortBy:a}=e,t=G(new Set),n=S(()=>l.value.map(f=>({...f,order:f.order??!1})).concat(a.value));function r(f){return t.value.has(f.id)}function s(f){const i=new Set(t.value);r(f)?i.delete(f.id):i.add(f.id),t.value=i}function o(f){function i(v){const d=[];for(const g of v.items)"type"in g&&g.type==="group"?d.push(...i(g)):d.push(g);return d}return i({type:"group",items:f,id:"dummy",key:"dummy",value:"dummy",depth:0})}const u={sortByWithGroups:n,toggleGroup:s,opened:t,groupBy:l,extractRows:o,isGroupOpen:r};return H(je,u),u}function ze(){const e=j(je);if(!e)throw new Error("Missing group!");return e}function sa(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=X(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function qe(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=sa(e,l[0]),r=[],s=l.slice(1);return n.forEach((o,u)=>{const f=l[0],i=`${t}_${f}_${u}`;r.push({depth:a,id:i,key:f,value:u,items:s.length?qe(o,s,a+1,i):o,type:"group"})}),r}function Ke(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...Ke(t.items,l))):a.push(t);return a}function ia(e,l,a){return{flatItems:S(()=>{if(!l.value.length)return e.value;const n=qe(e.value,l.value.map(r=>r.key));return Ke(n,a.value)})}}const da=T({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ca=A()({name:"VDataTableGroupHeaderRow",props:da(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=ze(),{isSelected:s,isSomeSelected:o,select:u}=ee(),{columns:f}=Z(),i=S(()=>r([e.item]));return()=>c("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[f.value.map(v=>{var d,g;if(v.key==="data-table-group"){const x=t(e.item)?"$expand":"$next",p=()=>n(e.item);return((d=a["data-table-group"])==null?void 0:d.call(a,{item:e.item,count:i.value.length,props:{icon:x,onClick:p}}))??c(ie,{class:"v-data-table-group-header-row__column"},{default:()=>[c(O,{size:"small",variant:"text",icon:x,onClick:p},null),c("span",null,[e.item.value]),c("span",null,[he("("),i.value.length,he(")")])]})}if(v.key==="data-table-select"){const x=s(i.value),p=o(i.value)&&!x,m=b=>u(i.value,b);return((g=a["data-table-select"])==null?void 0:g.call(a,{props:{modelValue:x,indeterminate:p,"onUpdate:modelValue":m}}))??c("td",null,[c(se,{modelValue:x,indeterminate:p,"onUpdate:modelValue":m},null)])}return c("td",null,null)})])}}),fa=T({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),We=Symbol.for("vuetify:datatable:expanded");function va(e){const l=I(e,"expandOnClick"),a=R(e,"expanded",e.expanded,o=>new Set(o),o=>[...o.values()]);function t(o,u){const f=new Set(a.value);u?f.add(o.value):f.delete(o.value),a.value=f}function n(o){return a.value.has(o.value)}function r(o){t(o,!n(o))}const s={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return H(We,s),s}function Ue(){const e=j(We);if(!e)throw new Error("foo");return e}const ga=T({index:Number,item:Object,cellProps:[Object,Function],onClick:re(),onContextmenu:re(),onDblclick:re()},"VDataTableRow"),ma=A()({name:"VDataTableRow",props:ga(),setup(e,l){let{slots:a}=l;const{isSelected:t,toggleSelect:n}=ee(),{isExpanded:r,toggleExpand:s}=Ue(),{columns:o}=Z();N(()=>c("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&o.value.map((u,f)=>{const i=e.item,v=`item.${u.key}`,d={index:e.index,item:i.raw,internalItem:i,value:X(i.columns,u.key),column:u,isSelected:t,toggleSelect:n,isExpanded:r,toggleExpand:s},g=typeof e.cellProps=="function"?e.cellProps({index:d.index,item:d.item,internalItem:d.internalItem,value:d.value,column:u}):e.cellProps,x=typeof u.cellProps=="function"?u.cellProps({index:d.index,item:d.item,internalItem:d.internalItem,value:d.value}):u.cellProps;return c(ie,C({align:u.align,fixed:u.fixed,fixedOffset:u.fixedOffset,lastFixed:u.lastFixed,noPadding:u.key==="data-table-select"||u.key==="data-table-expand",width:u.width},g,x),{default:()=>{var p,m;return a[v]?a[v](d):u.key==="data-table-select"?((p=a["item.data-table-select"])==null?void 0:p.call(a,d))??c(se,{disabled:!i.selectable,modelValue:t([i]),onClick:pe(()=>n(i),["stop"])},null):u.key==="data-table-expand"?((m=a["item.data-table-expand"])==null?void 0:m.call(a,d))??c(O,{icon:r(i)?"$collapse":"$expand",size:"small",variant:"text",onClick:pe(()=>s(i),["stop"])},null):bt(d.value)}})})]))}}),Qe=T({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),ke=A()({name:"VDataTableRows",inheritAttrs:!1,props:Qe(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=Z(),{expandOnClick:r,toggleExpand:s,isExpanded:o}=Ue(),{isSelected:u,toggleSelect:f}=ee(),{toggleGroup:i,isGroupOpen:v}=ze(),{t:d}=Y();return N(()=>{var g,x;return e.loading&&(!e.items.length||t.loading)?c("tr",{class:"v-data-table-rows-loading",key:"loading"},[c("td",{colspan:n.value.length},[((g=t.loading)==null?void 0:g.call(t))??d(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?c("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[c("td",{colspan:n.value.length},[((x=t["no-data"])==null?void 0:x.call(t))??d(e.noDataText)])]):c(W,null,[e.items.map((p,m)=>{var V;if(p.type==="group"){const h={index:m,item:p,columns:n.value,isExpanded:o,toggleExpand:s,isSelected:u,toggleSelect:f,toggleGroup:i,isGroupOpen:v};return t["group-header"]?t["group-header"](h):c(ca,C({key:`group-header_${p.id}`,item:p},xe(a,":group-header",()=>h)),t)}const b={index:m,item:p.raw,internalItem:p,columns:n.value,isExpanded:o,toggleExpand:s,isSelected:u,toggleSelect:f},k={...b,props:C({key:`item_${p.key??p.index}`,onClick:r.value?()=>{s(p)}:void 0,index:m,item:p,cellProps:e.cellProps},xe(a,":row",()=>b),typeof e.rowProps=="function"?e.rowProps({item:b.item,index:b.index,internalItem:b.internalItem}):e.rowProps)};return c(W,{key:k.props.key},[t.item?t.item(k):c(ma,k.props,t),o(p)&&((V=t["expanded-row"])==null?void 0:V.call(t,b))])})])}),{}}}),Je=T({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Be(),..._e(),...Ce(),...Ve()},"VTable"),we=A()({name:"VTable",props:Je(),setup(e,l){let{slots:a,emit:t}=l;const{themeClasses:n}=Ie(e),{densityClasses:r}=Tt(e);return N(()=>c(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var s,o,u;return[(s=a.top)==null?void 0:s.call(a),a.default?c("div",{class:"v-table__wrapper",style:{height:E(e.height)}},[c("table",null,[a.default()])]):(o=a.wrapper)==null?void 0:o.call(a),(u=a.bottom)==null?void 0:u.call(a)]}})),{}}}),ba=T({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function ya(e,l,a,t){const n=e.returnObject?l:J(l,e.itemValue),r=J(l,e.itemSelectable,!0),s=t.reduce((o,u)=>(u.key!=null&&(o[u.key]=J(l,u.value)),o),{});return{type:"item",key:e.returnObject?J(l,e.itemValue):n,index:a,value:n,selectable:r,columns:s,raw:l}}function ha(e,l,a){return l.map((t,n)=>ya(e,t,n,a))}function pa(e,l){return{items:S(()=>ha(e,e.items,l.value))}}function xa(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const s=yt("VDataTable"),o=S(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let u=null;ht(o,()=>{Te(u,o.value)||((u==null?void 0:u.search)!==o.value.search&&(l.value=1),s.emit("update:options",o.value),u=o.value)},{deep:!0,immediate:!0})}const Pa=T({...Qe(),width:[String,Number],search:String,...fa(),...ra(),...jt(),...ba(),...Xt(),...Zt(),...He(),...Je()},"DataTable"),Sa=T({...Rt(),...Pa(),...Ft(),...Le()},"VDataTable"),Fa=A()({name:"VDataTable",props:Sa(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=ua(e),{sortBy:r,multiSort:s,mustSort:o}=ea(e),{page:u,itemsPerPage:f}=Nt(e),{columns:i,headers:v,sortFunctions:d,filterFunctions:g}=Qt(e,{groupBy:n,showSelect:I(e,"showSelect"),showExpand:I(e,"showExpand")}),{items:x}=pa(e,i),p=I(e,"search"),{filteredItems:m}=Lt(e,x,p,{transform:q=>q.columns,customKeyFilter:g}),{toggleSort:b}=ta({sortBy:r,multiSort:s,mustSort:o,page:u}),{sortByWithGroups:k,opened:V,extractRows:h,isGroupOpen:_,toggleGroup:L}=oa({groupBy:n,sortBy:r}),{sortedItems:z}=la(e,m,k,d),{flatItems:y}=ia(z,n,V),P=S(()=>y.value.length),{startIndex:w,stopIndex:D,pageCount:B,setItemsPerPage:$}=Gt({page:u,itemsPerPage:f,itemsLength:P}),{paginatedItems:te}=Ht({items:y,startIndex:w,stopIndex:D,itemsPerPage:f}),ae=S(()=>h(te.value)),{isSelected:Xe,select:Ye,selectAll:Ze,toggleSelect:et,someSelected:tt,allSelected:at}=Yt(e,{allItems:x,currentPage:ae}),{isExpanded:lt,toggleExpand:nt}=va(e);xa({page:u,itemsPerPage:f,sortBy:r,groupBy:n,search:p}),ue({VDataTableRows:{hideNoData:I(e,"hideNoData"),noDataText:I(e,"noDataText"),loading:I(e,"loading"),loadingText:I(e,"loadingText")}});const F=S(()=>({page:u.value,itemsPerPage:f.value,sortBy:r.value,pageCount:B.value,toggleSort:b,setItemsPerPage:$,someSelected:tt.value,allSelected:at.value,isSelected:Xe,select:Ye,selectAll:Ze,toggleSelect:et,isExpanded:lt,toggleExpand:nt,isGroupOpen:_,toggleGroup:L,items:ae.value.map(q=>q.raw),internalItems:ae.value,groupedItems:te.value,columns:i.value,headers:v.value}));return N(()=>{const q=Pe.filterProps(e),rt=Se.filterProps(e),ut=ke.filterProps(e),ot=we.filterProps(e);return c(we,C({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},ot),{top:()=>{var K;return(K=t.top)==null?void 0:K.call(t,F.value)},default:()=>{var K,ce,fe,ve,ge,me;return t.default?t.default(F.value):c(W,null,[(K=t.colgroup)==null?void 0:K.call(t,F.value),c("thead",null,[c(Se,rt,t)]),(ce=t.thead)==null?void 0:ce.call(t,F.value),c("tbody",null,[(fe=t["body.prepend"])==null?void 0:fe.call(t,F.value),t.body?t.body(F.value):c(ke,C(a,ut,{items:te.value}),t),(ve=t["body.append"])==null?void 0:ve.call(t,F.value)]),(ge=t.tbody)==null?void 0:ge.call(t,F.value),(me=t.tfoot)==null?void 0:me.call(t,F.value)])},bottom:()=>t.bottom?t.bottom(F.value):c(W,null,[c(At,null,null),c(Pe,q,{prepend:t["footer.prepend"]})])})}),{}}});export{Fa as V};