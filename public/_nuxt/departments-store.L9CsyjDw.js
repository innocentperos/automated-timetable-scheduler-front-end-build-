import{ai as y,r as c,v as o,T as h}from"./entry.tQWHpBLf.js";import{u as D}from"./courses-store.hFHtJJlz.js";import{u as b}from"./use-fetch-header.3DHnPbz-.js";import{u as d}from"./use-notification.Rdal1ke4.js";import{u as j}from"./use-logger.h09id-NO.js";const $=y("staff-store",()=>{const t=c({});function u(i){i.forEach(s=>t.value[s.pk]=s)}function n(i){i.forEach(s=>{s in t.value&&delete t.value[s]})}function l(){return o(()=>Object.values(t.value))}return{insert:u,remove:n,all:l}}),m=j(),M=y("department-store",()=>{const t=c({}),u=c({}),n=c({}),l=$(),i=D();function s(e){return e in u.value||(u.value[e]=[]),o(()=>u.value[e])}function S(e,r){e in u.value||(u.value[e]=[]),r.forEach(a=>{u.value[e].push(a.pk)}),l.insert(r)}function E(e,r){if(!(e in u.value)){u.value[e]=[];return}u.value[e]=u.value[e].filter(a=>!r.includes(a))}function R(e){return e in n.value||(n.value[e]=[]),o(()=>n.value[e])}function L(e,r){e in n.value||(n.value[e]=[]),r.forEach(a=>{n.value[e].push(a.pk)}),i.insert(r)}function O(e,r){if(!(e in n.value)){n.value[e]=[];return}n.value[e]=n.value[e].filter(a=>!r.includes(a))}function g(e){t.value[e.pk]=e,m.debug("Department Store","Added a department",e)}function f(e){return o(()=>t.value[e])}function v(e){e.forEach(r=>{g(r)})}function p(e){e in t.value&&delete t.value[e]}function U(e){e.forEach(r=>{p(r)})}async function _(e){const r=c(null);if(e in t.value)return{data:f(e),error:o(()=>r.value)};try{const a=await $fetch(`/departments/${e}/`,{baseURL:h().public.baseURL,headers:b([])});t.value[a.pk]=a}catch(a){a.value=a}return{data:f(e),error:o(()=>r.value)}}async function C(){try{const e=await $fetch("/departments/",{baseURL:h().public.baseURL,retry:5,retryDelay:300,headers:b([])});v(e)}catch(e){e.statusCode?d().add({text:"An error occured on the server, try again.",icon:"mdi-server",closable:!0}):(console.log(e),d().add({text:"Oops, please make sure you have a stable internet connection and try again",icon:"mdi-wifi-alert",closable:!0}))}}return{insert:g,retrieve:f,bulkInsert:v,remove:p,bulkRemove:U,getOrFetch:_,refreshDepartments:C,all:()=>(Object.keys(t.value).length<1&&$fetch("/departments/",{baseURL:h().public.baseURL,headers:b([])}).then(v).catch(e=>{m.log({level:"error",tag:"Department Store; all()",message:"Error getting department list",stackTrace:Error.captureStackTrace(e),error:e})}),o(()=>Object.values(t.value))),count:()=>o(()=>Object.keys(t).length),staffs:s,insertStaff:S,removeStaff:E,courses:R,insertCourse:L,removeCourse:O}});export{$ as a,M as u};
