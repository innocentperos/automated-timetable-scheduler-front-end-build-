import{r as a,T as n,v as d}from"./entry.tQWHpBLf.js";import{u}from"./use-fetch-header.3DHnPbz-.js";import{u as i}from"./use-notification.Rdal1ke4.js";import{u as c}from"./use-logger.h09id-NO.js";async function f(r,t,o,e){try{t.value=!0;const s=await $fetch(`slot_courses/${r}/auto_assign_venue/`,{baseURL:n().public.baseURL,method:"POST",headers:u([])});e&&e()}catch(s){o.value=s}finally{t.value=!1}}function h(r){const t=a(!1),o=a();return{pending:t,error:o,execute:e=>f(e.pk,t,o,r)}}async function m(r,t,o,e){try{t.value=!0,await $fetch(`/timetables/${r.pk}/slot_course/`,{method:"delete",baseURL:n().public.baseURL,headers:u([])}),e&&e()}catch(s){const l=s;if(o.value=l,console.log(l),!l.status)i().add({title:"Oops",text:"Please make sure you have a stable internet connection adn try again",icon:"mdi-network-off",closable:!0,color:"amber"});else switch(l.statusCode){case 404:i().add({title:"Oops",text:"Could not find the slot course on the server",icon:"mdi-alert-box",closable:!0,color:"amber"});break;default:i().add({title:"Oops",text:"Something went wrong on the server, please try again",icon:"mdi-alert-circle-outline",closable:!0,color:"amber"})}}finally{t.value=!1}}function p(r,t){const o=a(!1),e=a();return{execute:()=>m(r,o,e,t),pending:o,error:e}}async function v(r,t,o){try{return await $fetch("/slot_courses/",{method:"POST",baseURL:n().public.baseURL,headers:u([]),body:{slot:o,course:r,supervisor:t}})}catch(e){throw c().error("useSlotCourse AddSlotCourse","Cloud not add a new slot course",e),e}}async function b(r,t,o,e){try{t.value=!0;const s=await $fetch(`/slot_courses/${r}/auto_assign_invigilator/`,{baseURL:n().public.baseURL,method:"POST",headers:u([])});return e&&e(),s}catch(s){c().error("useSlotCourse","Could not assign invigilator",s),o.value=s}finally{t.value=!1}}function g(r,t){const o=a(!1),e=a();return{pending:d(()=>o.value),error:d(()=>e.value),execute:()=>b(r.pk,o,e,t),reset:()=>{o.value=!1,e.value=void 0}}}async function _(r,t,o,e){try{return await $fetch("/complains/",{method:"POST",baseURL:n().public.baseURL,headers:u([]),body:{slot_course:r.pk,message:t,complain_type:o,related_slot_course:o!="level-conflict"?null:e,related_course:o=="level-conflict"?null:e}})}catch(s){throw c().error("MakeComplain","Error while making a complain",s),s}}const R=()=>({assignVenueAutomatically:h,deleteSlotCourse:p,addCourseSlot:v,assignInvigilator:g,makeComplain:_});export{R as u};
