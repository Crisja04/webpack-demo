if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return t[e]||(r=new Promise(async r=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=r}else importScripts(e),r()})),r.then(()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]})},r=(r,t)=>{Promise.all(r.map(e)).then(e=>t(1===e.length?e[0]:e))},t={require:Promise.resolve(r)};self.define=(r,i,s)=>{t[r]||(t[r]=Promise.resolve().then(()=>{let t={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return t;case"module":return o;default:return e(r)}})).then(e=>{const r=s(...e);return t.default||(t.default=r),t})}))}}define("./service-worker.js",["./workbox-d9851aed"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"autoapp.bundle.js",revision:"d3337d25f8a65a6961b2361491376bfa"},{url:"autoindex.html",revision:"0824a4c1880f67f97bd9bff35e120068"},{url:"autoprint.bundle.js",revision:"925c8f9c4ba9dd19d9a8681ae4ba5655"}],{})}));
