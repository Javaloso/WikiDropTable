(()=>{"use strict";var e,t,o,n,s={9:(e,t,o)=>{o.d(t,{M:()=>n});class n{map;constructor(e){if(this.map=new Map,e){if("function"!=typeof e[Symbol.iterator])throw new Error("Invalid entries; expected an iterable.");for(const[t,o]of e){const e=this.getKeyInLowerCase(t);this.map.set(e,{key:t,value:o})}}}set(e,t){const o=this.getKeyInLowerCase(e);this.map.set(o,{key:e,value:t})}get(e){const t=this.getKeyInLowerCase(e),o=this.map.get(t);return o?o.value:void 0}has(e){const t=this.getKeyInLowerCase(e);return this.map.has(t)}keys(){const e=[];for(const t of this.map.values())e.push(t.key);return e}getKeyInLowerCase(e){return"string"==typeof e?e.toLowerCase():String(e).toLowerCase()}}},532:(e,t,o)=>{o.d(t,{h:()=>i});const n=document.querySelectorAll("[class]"),s=document.getElementById("darkmode-button"),a=document.getElementById("lightmode-button"),r="wikiTranslatorVisualStyle";let i;function c(e){if(e!==i){for(const t of n){const o=t.classList;e:for(;;){for(const t of o)if(t.includes(i)){const n=t.replace(i,e);o.remove(t),o.add(n);continue e}break}}i=e,localStorage.setItem(r,e)}}s?.addEventListener("click",(()=>{c("dark"),s.classList.add("window-button--active-dark"),a?.classList.remove("window-button--active-dark")})),a?.addEventListener("click",(()=>{c("light"),a.classList.add("window-button--active-light"),s?.classList.remove("window-button--active-light")})),function(){i=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";const e=localStorage.getItem(r);if("dark"===e&&"dark"===i?(s?.classList.add("window-button--active-dark"),a?.classList.remove("window-button--active-dark")):(a?.classList.add("window-button--active-light"),s?.classList.remove("window-button--active-light")),null===e)try{localStorage.setItem(r,"dark")}catch(e){console.error("Error accessing local storage:",e)}else c(e)}()},625:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(532),s=o(437),a=o(988),r=e([s]);s=(r.then?(await r)():r)[0];const i=document.querySelectorAll('[data-button="menu"]')[1],c=document.querySelector('[data-search="input"]'),l=document.getElementById("ge-items"),d=document.getElementById("ge_item_found"),u=document.getElementById("ge_not_found"),m=s.FI.keys();let h,f=null,p=[];async function w(){d.classList.remove("hidden");const e=p;for(const t of e){if(e!==p)return;const o=s.FI.get(t),r=document.createElement("div");r.className=`ge-item ge-item--${n.h}`;const i=document.createElement("p");i.className="ge-item__name",i.textContent=t;const c=document.createElement("button");c.className=`window-button window-button--${n.h}`,c.textContent="Abrir",c.addEventListener("click",(()=>{window.open(`https://secure.runescape.com/m=itemdb_rs/l=3/a=9/${t}/viewitem?obj=${o}`,"_blank")}));const d=document.createElement("img");d.src=`https://secure.runescape.com/m=itemdb_rs/obj_sprite.gif?id=${o}`,r.appendChild(d),r.appendChild(i),r.appendChild(c),l.appendChild(r),await(0,a._)(50)}}function g(){null!==f&&clearTimeout(f),l.querySelectorAll(".ge-item").forEach((e=>{l.removeChild(e)})),d.classList.add("hidden"),u.classList.add("hidden")}i.addEventListener("click",(()=>{c.value="",c.focus(),g()})),c.addEventListener("input",(()=>{g();const e=!h||h.length>c.value.length;if(h=c.value,!h||1===h.length)return u.classList.remove("hidden"),void(p=[]);p=e||0===p.length?m.filter((e=>e.toLowerCase().includes(h.toLowerCase()))):p.filter((e=>e.toLowerCase().includes(h.toLowerCase()))),0!==p.length?f=setTimeout(w,250):u.classList.remove("hidden")})),t()}catch(b){t(b)}}))},12:(e,t,o)=>{var n=o(532);const s=Array.from(document.querySelectorAll('[data-filter="website"]')),a=Array.from(document.querySelectorAll('[data-filter="days"]')),r=Array.from(document.querySelectorAll('[data-filter="months"]')),i=Array.from(document.querySelectorAll('[data-filter="years"]')),c=Array.from(document.querySelectorAll('[data-filter="container"]')),l=document.querySelector('[data-filter="search"]'),d=Array.from(a),u=Array.from(r),m=Array.from(i),h={websiteDate:{website:"",day:void 0,month:void 0,year:void 0},monthList:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],yearList:Array.from({length:(new Date).getFullYear()-2009+1},((e,t)=>2009+t))};function f(e){e.forEach((t=>{t.addEventListener("click",(o=>{e.forEach((e=>{e.classList.remove(`window-button--active-${n.h}`)})),t.classList.add(`window-button--active-${n.h}`);const s=o.target.getAttribute("data-filter"),{websiteDate:a}=h;switch(s){case"website":a.website=o.target.textContent.trim(),function(){const e=h.websiteDate.website,t=c[1],o=c[2],n=c[3],s="Oficial"!==e,a=["Oficial","Ambos"].includes(e);o.classList.remove("hidden"),t.classList.toggle("hidden",!s),n.classList.toggle("hidden",!a),l.classList.remove("window-button--disabled")}();break;case"days":a.day=d.indexOf(o.target);break;case"months":a.month=u.indexOf(o.target);break;case"years":a.year=m.indexOf(o.target)}}))}))}function p(e){window.open(e,"_blank")}f(s),f(a),f(r),f(i),l.addEventListener("click",(()=>{const{yearList:e,websiteDate:t,monthList:o}=h,n=`https://secure.runescape.com/m=news/l=3/a=9/archive?year=${e[t.year]}&month=${void 0!==t.month?t.month+1:""}&filter=Filtrar`,s=void 0!==t.day?t.day+1:"",a=o[t.month]?.toLowerCase(),r=`https://pt.runescape.wiki/w/${s}_de_${a}`;switch(h.websiteDate.website){case"Wiki":p(r);break;case"Oficial":p(n);break;case"Ambos":p(n),p(r)}}))},691:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(23),s=o(532),a=o(988),r=e([n]);n=(r.then?(await r)():r)[0];const i=document.querySelector('[data-js="text-input"]'),c=document.querySelector('[data-js="text-output"]'),l=document.querySelector('[data-js="copy-button"]'),d=document.querySelector('[data-js="copy-icon"]'),u=document.querySelector('[data-js="copy-success"]'),m=document.querySelector('[data-js="delete-button"]'),h=Array.from(document.querySelectorAll('[data-window="popup"]')),f=Array.from(document.querySelectorAll('[data-button="menu"]'));let p,w,g;i.focus(),i.addEventListener("input",(()=>{const e=(0,n.I)(i.value);c.value=e,e?(l?.classList.toggle("textbox__button--active-scroll",c.clientHeight<c.scrollHeight),m?.classList.toggle("textbox__button--active-scroll",i.clientHeight<i.scrollHeight),l?.classList.remove("hidden"),m?.classList.remove("hidden")):(l?.classList.add("hidden"),m?.classList.add("hidden"))})),window.addEventListener("resize",(()=>{l?.classList.toggle("textbox__button--active-scroll",c.clientHeight<c.scrollHeight),m?.classList.toggle("textbox__button--active-scroll",i.clientHeight<i.scrollHeight)})),l?.addEventListener("focusout",(()=>{u?.classList.add("hidden"),d?.classList.remove("hidden")})),l?.addEventListener("click",(()=>{navigator.clipboard.writeText(c.value).then((()=>{d?.classList.add("hidden"),u?.classList.remove("hidden")})).catch((e=>{console.error("Failed to copy text: ",e)})),setTimeout((()=>{u?.classList.add("hidden"),d?.classList.remove("hidden")}),2500)})),m?.addEventListener("click",(()=>{i.value=c.value="",l?.classList.add("hidden"),m?.classList.add("hidden")})),h.forEach((e=>{e.addEventListener("touchstart",(e=>{const t=e.touches[0];p=t.clientX,w=t.clientY})),e.addEventListener("touchend",(t=>{const o=t.changedTouches[0],n=o.clientX,a=o.clientY,r=n-p,i=a-w;if(Math.abs(r)>Math.abs(i)&&Math.abs(r)>100){const t=document.querySelector(`header-button--active-${s.h}`);t?.classList.remove(`header-button--active-${s.h}`),e.classList.remove("menu-line__popup-window--show")}}))})),f.forEach(((e,t)=>{e.addEventListener("click",(async()=>{const o=`header-button--active-${s.h}`,n=h[t];if(e.classList.contains(o))e.classList.remove(o),n.classList.remove("menu-line__popup-window--show"),n.classList.add("menu-line__popup-window--hide");else{e.classList.toggle(o);const s=f[g],r=h[g];r&&(s?.classList.remove(o),r?.classList.remove("menu-line__popup-window--show"),r?.classList.add("menu-line__popup-window--hide"),await(0,a._)(500)),n.classList.remove("menu-line__popup-window--hide"),n.classList.add("menu-line__popup-window--show"),g=t}}))})),document.addEventListener("click",(e=>{const t=`header-button--active-${s.h}`,o=document.querySelector(`.${t}`),n=document.querySelector(".menu-line__popup-window--show");null!=o&&null!=n&&!o.contains(e.target)&&!n.contains(e.target)&&(o.classList.remove(t),n.classList.remove("menu-line__popup-window--show"),n.classList.add("menu-line__popup-window--hide"))})),t()}catch(e){t(e)}}))},437:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{CM:()=>i,FI:()=>c,W:()=>r});var s=o(9);async function a(){return Promise.all([fetch("public/data/dataItems.json").then((e=>e.json())),fetch("public/data/dataNPCs.json").then((e=>e.json())),fetch("public/data/dataGE.json").then((e=>e.json()))]).then((([e,t,o])=>({itemNames:new s.M(e),npcNames:new s.M(t),geItems:new s.M(o)}))).catch((e=>{throw console.error("Error loading JSON files:",e),e}))}const{itemNames:r,npcNames:i,geItems:c}=await a();n()}catch(l){n(l)}}),1)},305:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{$:()=>i,q:()=>r});var s=o(9);async function a(){return Promise.all([fetch("public/data/parameters.json").then((e=>e.json())),fetch("public/data/infoboxes.json").then((e=>e.json()))]).then((([e,t])=>({parameters:new s.M(Object.entries(e)),infoboxes:new s.M(Object.entries(t).map((([e,t])=>[e.toLowerCase(),t])))}))).catch((e=>{throw console.error("Error loading JSON files:",e),e}))}const{parameters:r,infoboxes:i}=await a();n()}catch(c){n(c)}}),1)},988:(e,t,o)=>{function n(e){return new Promise((t=>setTimeout(t,e)))}o.d(t,{_:()=>n})},23:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{I:()=>b});var s=o(305),a=o(437),r=o(697),i=e([s,a]);[s,a]=i.then?(await i)():i;const c=new Map([["date",l],["release",d],["exchange",u],["gemw",u]]);function l(e){return e.replace(/date\s*=\s*(\d+)\s+([\w\s]+)\s+(\d+)/gi,((e,t,o,n)=>`data={{Data|${t}|${o.toLowerCase()}|${n}}}`))}function d(e){const t=new Map([["january","Janeiro"],["february","Fevereiro"],["march","Março"],["april","Abril"],["may","Maio"],["june","Junho"],["july","Julho"],["august","Agosto"],["september","Setembro"],["october","Outubro"],["november","Novembro"],["december","Dezembro"]]);return e.replace(/release\s*=\s*\[\[([\w\s]+)\]\]\s*\[\[([\w\s]+)\]\]/gi,((e,o,n)=>{const[s,a]=o.trim().split(" ");return`lançamento={{Data|${s}|${t.get(a.toLowerCase())}|${n.trim()}}}`}))}function u(e){const t=e.match(/\|(exchange|gemw)=([^|\[\]]+)/gi);if(!t)return e;const o=t[0];return"}}"===o.slice(-2)?e.replace(o,"|mercado=gemw}}"):e.replace(o,"|mercado=gemw")}function m(e){return Array.from({length:(e.length-1)/2},((t,o)=>[e[2*o+1].trim(),e[2*o+2].trim()]))}function h(e){const t=e.split(/[|=]+/);return 1===t.length?0!==t[0].length&&[t[0],""]:0!==t[0].length?[t[0],m(t)]:m(t)}function f(e,t){if(c.has(e)){const o=c.get(e);if("function"==typeof o)return o(t)}if(s.q.has(e))return t.replace(`${e}=`,`${s.q.get(e)}=`);const o=e.slice(-1);if(!isNaN(Number(o))){const n=e.slice(0,-1);if(s.q.has(n))return t.replace(`${e}=`,`${s.q.get(n)}${o}=`)}return t}function p(e){if(/^\d+\s/.test(e)){const t=e.split(/\s+(.+)/)[1];if(null!=t)return r.n.removeSymbols(t)}return r.n.removeSymbols(e)}function w(e,t){const o=e.split(/, |:|\(/);for(const[e,n]of o.entries()){const i=n.slice(-1);if(")"===i){const r=n.slice(0,-1);if(!r.isNaN&&e>0){const n=`${o[e-1]}(${r})`;if(a.W.has(n)){t=t.replace(n,a.W.get(n));continue}}if(s.q.has(r)){t=t.replace(n,`${s.q.get(r)})`);continue}}if("}"===i){const e=n.slice(0,-2);if(s.q.has(e)){t=t.replace(`=${n}`,`=${s.q.get(e)}}}`);continue}if(a.W.has(e)){t=t.replace(`=${n}`,`=${a.W.get(e)}}}`);continue}}if(s.q.has(n)){t=0===e?t.replace(`=${n}`,`=${s.q.get(n)}`):t.replace(`, ${n}`,`, ${s.q.get(n)}`);continue}if(a.W.has(n)){t=t.replace(n,a.W.get(n));continue}const c=p(n);if(parseInt(c)&&e>0){const n=`${r.n.removeSymbols(o[e-1])}(${c})`;if(a.W.has(n)){t=t.replace(n,a.W.get(n));continue}}s.q.has(c)?t=t.replace(c,s.q.get(c)):a.W.has(c)?t=t.replace(c,a.W.get(c)):a.CM.has(c)&&(t=t.replace(c,a.CM.get(c)))}return t}function g(e){const t=e.replace(/ = /g,"=").split(/[<>]+/),o=t.length;for(let e=0;e<o;e++){if(e%2==1)continue;let o=h(t[e]);if(o){if(2===o.length){const n=r.N.removeSymbols(o[0]);s.$.has(n)&&(t[e]=t[e].replace(n,s.$.get(n))),o=o[1]}for(const[n,s]of o)t[e]=f(n,t[e]),t[e]=w(s,t[e])}}return t.reduce(((e,t,o)=>0===o?t:`${e}${o%2==0?">":"<"}${t}`),"")}function b(e){return e.split("\n").map(g).join("\n")}n()}catch(v){n(v)}}))},697:(e,t,o)=>{o.d(t,{N:()=>r,n:()=>a});class n{children;isEndOfSymbol;constructor(){this.children=new Map,this.isEndOfSymbol=!1}}class s{root;constructor(e){this.root=new n,e.forEach((e=>this.insert(e)))}insert(e){let t=this.root;for(const o of e)t.children.has(o)||t.children.set(o,new n),t=t.children.get(o);t.isEndOfSymbol=!0}removeSymbols(e){let t="",o=this.root;for(const n of e)o.children.has(n)?o=o.children.get(n):(t+=n,o=this.root),o.isEndOfSymbol&&(o=this.root);return t}}const a=new s([".png",".gif","[","]",")"]),r=new s(["{","}"])}},a={};function r(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return s[e](o,o.exports,r),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},r.a=(s,a,r)=>{var i;r&&((i=[]).d=-1);var c,l,d,u=new Set,m=s.exports,h=new Promise(((e,t)=>{d=t,l=e}));h[t]=m,h[e]=e=>(i&&e(i),u.forEach(e),h.catch((e=>{}))),s.exports=h,a((s=>{var a;c=(s=>s.map((s=>{if(null!==s&&"object"==typeof s){if(s[e])return s;if(s.then){var a=[];a.d=0,s.then((e=>{r[t]=e,n(a)}),(e=>{r[o]=e,n(a)}));var r={};return r[e]=e=>e(a),r}}var i={};return i[e]=e=>{},i[t]=s,i})))(s);var r=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),l=new Promise((t=>{(a=()=>t(r)).r=0;var o=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](o)))}));return a.r?l:r()}),(e=>(e?d(h[o]=e):l(m),n(i)))),i&&i.d<0&&(i.d=0)},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(691),r(12),r(625),r(532)})();