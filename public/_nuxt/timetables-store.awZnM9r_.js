import{ai as s,r as c,v as u}from"./entry.tQWHpBLf.js";const v=s("timetable-store",()=>{const t=c({});function a(e){return u(()=>t.value[e])}function n(e){t.value[e.pk]=e}function i(e){e.forEach(r=>{n(r)})}function o(e){e in t.value&&delete t.value[e]}function l(e){e.forEach(r=>{o(r)})}return{retrieve:a,insert:n,bulkInsert:i,remove:o,bulkRemove:l,all:()=>u(()=>Object.values(t.value))}});export{v as u};