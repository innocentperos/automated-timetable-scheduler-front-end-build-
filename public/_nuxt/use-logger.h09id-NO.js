const c={};function l(o){const e=Symbol();return c[e]=o,e}function n(o){switch(Object.values(c).forEach(r=>r(o)),o.level){case"debug":console.debug(o);break;case"info":console.info(o);break;case"warning":console.warn(o);break;default:console.error(o)}}function s(o,e,r){n({level:"debug",message:e,tag:o,error:r})}function a(o,e,r){n({level:"info",message:e,tag:o,error:r})}function u(o,e,r){n({level:"debug",message:e,tag:o,error:r})}const i=function(){return{addListener:l,log:n,debug:s,info:a,error:u}};export{i as u};