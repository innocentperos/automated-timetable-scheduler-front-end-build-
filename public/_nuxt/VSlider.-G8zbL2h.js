import{E as X,v as r,bA as le,a6 as Q,aa as R,a3 as ae,r as J,b3 as he,ag as ke,a9 as ie,F as W,J as oe,ab as O,b as n,B as re,H as ye,C as pe,b4 as Se,K as ge,Q as Ve,L as we}from"./entry.tQWHpBLf.js";import{d as Ce,c as _e,R as xe,i as Te,j as Fe}from"./index.AmeJTHgO.js";import{f as Pe}from"./index.qvKOBlyP.js";import{m as ue,b as Re,u as G,d as se}from"./VRow.WlLBb9Jc.js";import{m as Ee,c as Le,a as Me,d as ne,V as ze}from"./VInput.AAxW8xuy.js";const Z=Symbol.for("vuetify:v-slider");function Ne(e,t,a){const i=a==="vertical",o=t.getBoundingClientRect(),h="touches"in e?e.touches[0]:e;return i?h.clientY-(o.top+o.height/2):h.clientX-(o.left+o.width/2)}function Be(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const De=X({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...Ce(),..._e({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),Ie=e=>{const t=r(()=>parseFloat(e.min)),a=r(()=>parseFloat(e.max)),i=r(()=>+e.step>0?parseFloat(e.step):0),o=r(()=>Math.max(le(i.value),le(t.value)));function h(k){if(k=parseFloat(k),i.value<=0)return k;const c=ie(k,t.value,a.value),g=t.value%i.value,C=Math.round((c-g)/i.value)*i.value+g;return parseFloat(Math.min(C,a.value).toFixed(o.value))}return{min:t,max:a,step:i,decimals:o,roundValue:h}},Ke=e=>{let{props:t,steps:a,onSliderStart:i,onSliderMove:o,onSliderEnd:h,getActiveThumb:k}=e;const{isRtl:c}=Q(),g=R(t,"reverse"),C=r(()=>t.direction==="vertical"),x=r(()=>C.value!==g.value),{min:f,max:V,step:T,decimals:z,roundValue:E}=a,I=r(()=>parseInt(t.thumbSize,10)),N=r(()=>parseInt(t.tickSize,10)),L=r(()=>parseInt(t.trackSize,10)),F=r(()=>(V.value-f.value)/T.value),B=R(t,"disabled"),_=r(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),u=r(()=>t.error||t.disabled?void 0:t.trackColor??t.color),w=r(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),v=ae(!1),m=ae(0),y=J(),p=J();function s(l){var te;const d=t.direction==="vertical",de=d?"top":"left",ce=d?"height":"width",ve=d?"clientY":"clientX",{[de]:me,[ce]:be}=(te=y.value)==null?void 0:te.$el.getBoundingClientRect(),fe=Be(l,ve);let H=Math.min(Math.max((fe-me-m.value)/be,0),1)||0;return(d?x.value:x.value!==c.value)&&(H=1-H),E(f.value+H*(V.value-f.value))}const P=l=>{h({value:s(l)}),v.value=!1,m.value=0},q=l=>{p.value=k(l),p.value&&(p.value.focus(),v.value=!0,p.value.contains(l.target)?m.value=Ne(l,p.value,t.direction):(m.value=0,o({value:s(l)})),i({value:s(l)}))},M={passive:!0,capture:!0};function A(l){o({value:s(l)})}function $(l){l.stopPropagation(),l.preventDefault(),P(l),window.removeEventListener("mousemove",A,M),window.removeEventListener("mouseup",$)}function b(l){var d;P(l),window.removeEventListener("touchmove",A,M),(d=l.target)==null||d.removeEventListener("touchend",b)}function S(l){var d;q(l),window.addEventListener("touchmove",A,M),(d=l.target)==null||d.addEventListener("touchend",b,{passive:!1})}function D(l){l.preventDefault(),q(l),window.addEventListener("mousemove",A,M),window.addEventListener("mouseup",$,{passive:!1})}const K=l=>{const d=(l-f.value)/(V.value-f.value)*100;return ie(isNaN(d)?0:d,0,100)},j=R(t,"showTicks"),U=r(()=>j.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(l=>({value:l,position:K(l),label:l.toString()})):Object.keys(t.ticks).map(l=>({value:parseFloat(l),position:K(parseFloat(l)),label:t.ticks[l]})):F.value!==1/0?he(F.value+1).map(l=>{const d=f.value+l*T.value;return{value:d,position:K(d)}}):[]:[]),Y=r(()=>U.value.some(l=>{let{label:d}=l;return!!d})),ee={activeThumbRef:p,color:R(t,"color"),decimals:z,disabled:B,direction:R(t,"direction"),elevation:R(t,"elevation"),hasLabels:Y,isReversed:g,indexFromEnd:x,min:f,max:V,mousePressed:v,numTicks:F,onSliderMousedown:D,onSliderTouchstart:S,parsedTicks:U,parseMouseMove:s,position:K,readonly:R(t,"readonly"),rounded:R(t,"rounded"),roundValue:E,showTicks:j,startOffset:m,step:T,thumbSize:I,thumbColor:_,thumbLabel:R(t,"thumbLabel"),ticks:R(t,"ticks"),tickSize:N,trackColor:u,trackContainerRef:y,trackFillColor:w,trackSize:L,vertical:C};return ke(Z,ee),ee},Oe=X({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...ue()},"VSliderThumb"),qe=W()({name:"VSliderThumb",directives:{Ripple:xe},props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a,emit:i}=t;const o=oe(Z),{isRtl:h,rtlClasses:k}=Q();if(!o)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:c,step:g,disabled:C,thumbSize:x,thumbLabel:f,direction:V,isReversed:T,vertical:z,readonly:E,elevation:I,mousePressed:N,decimals:L,indexFromEnd:F}=o,{textColorClasses:B,textColorStyles:_}=Re(c),{pageup:u,pagedown:w,end:v,home:m,left:y,right:p,down:s,up:P}=Se,q=[u,w,v,m,y,p,s,P],M=r(()=>g.value?[1,2,3]:[1,5,10]);function A(b,S){if(!q.includes(b.key))return;b.preventDefault();const D=g.value||.1,K=(e.max-e.min)/D;if([y,p,s,P].includes(b.key)){const U=(z.value?[h.value?y:p,T.value?s:P]:F.value!==h.value?[y,P]:[p,P]).includes(b.key)?1:-1,Y=b.shiftKey?2:b.ctrlKey?1:0;S=S+U*D*M.value[Y]}else if(b.key===m)S=e.min;else if(b.key===v)S=e.max;else{const j=b.key===w?1:-1;S=S-j*D*(K>100?K/10:10)}return Math.max(e.min,Math.min(e.max,S))}function $(b){const S=A(b,e.modelValue);S!=null&&i("update:modelValue",S)}return G(()=>{const b=O(F.value?100-e.position:e.position,"%"),{elevationClasses:S}=Te(r(()=>C.value?void 0:I.value));return n("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&N.value},e.class,k.value],style:[{"--v-slider-thumb-position":b,"--v-slider-thumb-size":O(x.value)},e.style],role:"slider",tabindex:C.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!E.value,"aria-orientation":V.value,onKeydown:E.value?void 0:$},[n("div",{class:["v-slider-thumb__surface",B.value,S.value],style:{..._.value}},null),re(n("div",{class:["v-slider-thumb__ripple",B.value],style:_.value},null),[[ye("ripple"),e.ripple,null,{circle:!0,center:!0}]]),n(Pe,{origin:"bottom center"},{default:()=>{var D;return[re(n("div",{class:"v-slider-thumb__label-container"},[n("div",{class:["v-slider-thumb__label"]},[n("div",null,[((D=a["thumb-label"])==null?void 0:D.call(a,{modelValue:e.modelValue}))??e.modelValue.toFixed(g.value?L.value:1)])])]),[[pe,f.value&&e.focused||f.value==="always"]])]}})])}),{}}}),Ae=X({start:{type:Number,required:!0},stop:{type:Number,required:!0},...ue()},"VSliderTrack"),je=W()({name:"VSliderTrack",props:Ae(),emits:{},setup(e,t){let{slots:a}=t;const i=oe(Z);if(!i)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:o,parsedTicks:h,rounded:k,showTicks:c,tickSize:g,trackColor:C,trackFillColor:x,trackSize:f,vertical:V,min:T,max:z,indexFromEnd:E}=i,{roundedClasses:I}=Fe(k),{backgroundColorClasses:N,backgroundColorStyles:L}=se(x),{backgroundColorClasses:F,backgroundColorStyles:B}=se(C),_=r(()=>`inset-${V.value?"block":"inline"}-${E.value?"end":"start"}`),u=r(()=>V.value?"height":"width"),w=r(()=>({[_.value]:"0%",[u.value]:"100%"})),v=r(()=>e.stop-e.start),m=r(()=>({[_.value]:O(e.start,"%"),[u.value]:O(v.value,"%")})),y=r(()=>c.value?(V.value?h.value.slice().reverse():h.value).map((s,P)=>{var M;const q=s.value!==T.value&&s.value!==z.value?O(s.position,"%"):void 0;return n("div",{key:s.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":s.position>=e.start&&s.position<=e.stop,"v-slider-track__tick--first":s.value===T.value,"v-slider-track__tick--last":s.value===z.value}],style:{[_.value]:q}},[(s.label||a["tick-label"])&&n("div",{class:"v-slider-track__tick-label"},[((M=a["tick-label"])==null?void 0:M.call(a,{tick:s,index:P}))??s.label])])}):[]);return G(()=>n("div",{class:["v-slider-track",I.value,e.class],style:[{"--v-slider-track-size":O(f.value),"--v-slider-tick-size":O(g.value)},e.style]},[n("div",{class:["v-slider-track__background",F.value,{"v-slider-track__background--opacity":!!o.value||!x.value}],style:{...w.value,...B.value}},null),n("div",{class:["v-slider-track__fill",N.value],style:{...m.value,...L.value}},null),c.value&&n("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":c.value==="always"}]},[y.value])])),{}}}),$e=X({...Ee(),...De(),...Le(),modelValue:{type:[Number,String],default:0}},"VSlider"),Qe=W()({name:"VSlider",props:$e(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,t){let{slots:a,emit:i}=t;const o=J(),{rtlClasses:h}=Q(),k=Ie(e),c=ge(e,"modelValue",void 0,u=>k.roundValue(u??k.min.value)),{min:g,max:C,mousePressed:x,roundValue:f,onSliderMousedown:V,onSliderTouchstart:T,trackContainerRef:z,position:E,hasLabels:I,readonly:N}=Ke({props:e,steps:k,onSliderStart:()=>{i("start",c.value)},onSliderEnd:u=>{let{value:w}=u;const v=f(w);c.value=v,i("end",v)},onSliderMove:u=>{let{value:w}=u;return c.value=f(w)},getActiveThumb:()=>{var u;return(u=o.value)==null?void 0:u.$el}}),{isFocused:L,focus:F,blur:B}=Me(e),_=r(()=>E(c.value));return G(()=>{const u=ne.filterProps(e),w=!!(e.label||a.label||a.prepend);return n(ne,we({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||I.value,"v-slider--focused":L.value,"v-slider--pressed":x.value,"v-slider--disabled":e.disabled},h.value,e.class],style:e.style},u,{focused:L.value}),{...a,prepend:w?v=>{var m,y;return n(Ve,null,[((m=a.label)==null?void 0:m.call(a,v))??(e.label?n(ze,{id:v.id.value,class:"v-slider__label",text:e.label},null):void 0),(y=a.prepend)==null?void 0:y.call(a,v)])}:void 0,default:v=>{let{id:m,messagesId:y}=v;return n("div",{class:"v-slider__container",onMousedown:N.value?void 0:V,onTouchstartPassive:N.value?void 0:T},[n("input",{id:m.value,name:e.name||m.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:c.value},null),n(je,{ref:z,start:0,stop:_.value},{"tick-label":a["tick-label"]}),n(qe,{ref:o,"aria-describedby":y.value,focused:L.value,min:g.value,max:C.value,modelValue:c.value,"onUpdate:modelValue":p=>c.value=p,position:_.value,elevation:e.elevation,onFocus:F,onBlur:B,ripple:e.ripple},{"thumb-label":a["thumb-label"]})])}})}),{}}});export{Qe as V};
