(()=>{"use strict";var e,t,o,n,r={9:(e,t,o)=>{o.d(t,{M:()=>n});class n{map;constructor(e){if(this.map=new Map,e){if("function"!=typeof e[Symbol.iterator])throw new Error("Invalid entries; expected an iterable.");for(const[t,o]of e){const e=this.getKeyInLowerCase(t);this.map.set(e,{key:t,value:o})}}}set(e,t){const o=this.getKeyInLowerCase(e);this.map.set(o,{key:e,value:t})}get(e){const t=this.getKeyInLowerCase(e),o=this.map.get(t);return o?o.value:void 0}has(e){const t=this.getKeyInLowerCase(e);return this.map.has(t)}getKeyInLowerCase(e){return"string"==typeof e?e.toLowerCase():String(e).toLowerCase()}}},691:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(506),r=o(23),a=e([n,r]);[n,r]=a.then?(await a)():a;const s=document.querySelector('[data-js="text-input"]'),i=document.querySelector('[data-js="text-output"]'),c=document.querySelector('[data-js="copy-button"]'),l=document.querySelector('[data-js="copy-button"]'),d=document.querySelector('[data-js="copy-success"]'),u=document.querySelector('[data-js="delete-button"]');s.focus(),s.addEventListener("input",(()=>{const e=(0,r.I)(s.value);i.value=e,e?(c?.classList.toggle("textbox__button--active-scroll",i.clientHeight<i.scrollHeight),u?.classList.toggle("textbox__button--active-scroll",s.clientHeight<s.scrollHeight),c?.classList.remove("hidden"),u?.classList.remove("hidden")):(c?.classList.add("hidden"),u?.classList.add("hidden"))})),c?.addEventListener("focusout",(()=>{d?.classList.add("hidden"),l?.classList.remove("hidden")})),c?.addEventListener("click",(()=>{navigator.clipboard.writeText(i.value).then((()=>{l?.classList.add("hidden"),d?.classList.remove("hidden")})).catch((e=>{console.error("Failed to copy text: ",e)})),setTimeout((()=>{d?.classList.add("hidden"),l?.classList.remove("hidden")}),2500)})),u?.addEventListener("click",(()=>{s.value=i.value="",c?.classList.add("hidden"),u?.classList.add("hidden")})),(0,n.mC)(),(0,n.iq)(),(0,n.fk)(),(0,n.Cs)(),(0,n.Uo)(),(0,n.$y)(),(0,n.kz)(),(0,n.ie)(),t()}catch(e){t(e)}}))},437:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{CM:()=>i,FI:()=>c,W:()=>s});var r=o(9);async function a(){return Promise.all([fetch("public/data/dataItems.json").then((e=>e.json())),fetch("public/data/dataNPCs.json").then((e=>e.json())),fetch("public/data/dataGE.json").then((e=>e.json()))]).then((([e,t,o])=>({itemNames:new r.M(e),npcNames:new r.M(t),geItems:new r.M(o)}))).catch((e=>{throw console.error("Error loading JSON files:",e),e}))}const{itemNames:s,npcNames:i,geItems:c}=await a();n()}catch(l){n(l)}}),1)},305:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{$:()=>i,q:()=>s});var r=o(9);async function a(){return Promise.all([fetch("public/data/parameters.json").then((e=>e.json())),fetch("public/data/infoboxes.json").then((e=>e.json()))]).then((([e,t])=>({parameters:new r.M(Object.entries(e)),infoboxes:new r.M(Object.entries(t).map((([e,t])=>[e.toLowerCase(),t])))}))).catch((e=>{throw console.error("Error loading JSON files:",e),e}))}const{parameters:s,infoboxes:i}=await a();n()}catch(c){n(c)}}),1)},506:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{$y:()=>C,Cs:()=>k,Uo:()=>_,fk:()=>A,ie:()=>O,iq:()=>j,kz:()=>M,mC:()=>E});var r=o(437),a=e([r]);r=(a.then?(await a)():a)[0];const s=Array.from(document.querySelectorAll('[data-window="popup"]')),i=Array.from(document.querySelectorAll('[data-button="menu"]')),c=i[1],l=Array.from(document.querySelectorAll('[data-filter="website"]')),d=Array.from(document.querySelectorAll('[data-filter="days"]')),u=Array.from(document.querySelectorAll('[data-filter="months"]')),h=Array.from(document.querySelectorAll('[data-filter="years"]')),m=Array.from(document.querySelectorAll('[data-filter="container"]')),f=document.querySelector('[data-search="input"]'),p=document.querySelector('[data-search="button"]'),b=document.querySelector('[data-filter="search"]'),y=document.getElementById("ge_item_found"),w=document.getElementById("ge_not_found");let v,g;const L={websiteDate:{website:"",day:void 0,month:void 0,year:void 0},monthList:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],yearList:Array.from({length:15},((e,t)=>2009+t))};function S(){const e=L.websiteDate.website,t=m[1],o=m[3],n="Wiki"===e||"Oficial"!==e,r=!n;t.classList.toggle("hidden",!n),o.classList.toggle("hidden",!r)}function $(e){const t=Array.from(d),o=Array.from(u),n=Array.from(h);e.forEach((r=>{r.addEventListener("click",(a=>{e.forEach((e=>{e.classList.remove("window-button--active")})),r.classList.add("window-button--active");const s=a.target.getAttribute("data-filter"),{websiteDate:i}=L;switch(s){case"website":i.website=a.target.textContent.trim(),S();break;case"days":i.day=t.indexOf(a.target);break;case"months":i.month=o.indexOf(a.target);break;case"years":i.year=n.indexOf(a.target)}}))}))}function q(e){window.open(e,"_blank")}function E(){$(l),$(d),$(u),$(h)}function _(){b.addEventListener("click",(()=>{const{yearList:e,websiteDate:t,monthList:o}=L,n=`https://secure.runescape.com/m=news/l=3/a=9/archive?year=${e[t.year]}&month=${void 0!==t.month?t.month+1:""}&filter=Filtrar`,r=`https://pt.runescape.wiki/w/${void 0!==t.day?t.day+1:""}_de_${o[t.month]?.toLowerCase()}`;switch(L.websiteDate.website){case"Wiki":q(r);break;case"Oficial":q(n);break;case"Ambos":setTimeout((()=>{q(n)}),100),setTimeout((()=>{q(r)}),200);break;default:console.error("You must select the preferred website")}}))}function k(){s.forEach((e=>{e.addEventListener("touchstart",(e=>{const t=e.touches[0];v=t.clientX,g=t.clientY})),e.addEventListener("touchend",(t=>{const o=t.changedTouches[0],n=o.clientX,r=o.clientY,a=n-v,s=r-g;if(Math.abs(a)>Math.abs(s)&&Math.abs(a)>100){const t=document.querySelector(".header-button--active");t?.classList.remove("header-button--active"),e.classList.remove("menu-line__popup-window--show")}}))}))}function j(){i.forEach(((e,t)=>{e.addEventListener("click",(()=>{const o=e.classList.contains("header-button--active");i.forEach((e=>e.classList.remove("header-button--active"))),o||e.classList.toggle("header-button--active"),s.forEach(((e,o)=>{t===o?(e.classList.toggle("menu-line__popup-window--show"),f.focus()):e.classList.remove("menu-line__popup-window--show")}))}))}))}function A(){document.addEventListener("click",(e=>{const t=document.querySelector(".header-button--active"),o=document.querySelector(".menu-line__popup-window--show");null!=t&&null!=o&&!t.contains(e.target)&&!o.contains(e.target)&&(t.classList.remove("header-button--active"),o.classList.remove("menu-line__popup-window--show"))}))}function x(){p.classList.add("window-button--disabled"),y.classList.add("hidden"),w.classList.add("hidden")}function C(){c.addEventListener("click",(()=>{f.value="",x()}))}function M(){f.addEventListener("input",(()=>{const e=f.value;e?r.FI.has(e)?(p.classList.remove("window-button--disabled"),y.classList.remove("hidden"),w.classList.add("hidden")):(p.classList.add("window-button--disabled"),w.classList.remove("hidden"),y.classList.add("hidden")):x()}))}function O(){p.addEventListener("click",(()=>{const e=f.value;q(`https://secure.runescape.com/m=itemdb_rs/l=3/a=9/${e}/viewitem?obj=${r.FI.get(e)}`)}))}n()}catch(I){n(I)}}))},23:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{I:()=>w});var r=o(305),a=o(437),s=o(697),i=e([r,a]);[r,a]=i.then?(await i)():i;const c=new Map([["date",l],["release",d],["exchange",u],["gemw",u]]);function l(e){return e.replace(/date\s*=\s*(\d+)\s+([\w\s]+)\s+(\d+)/gi,((e,t,o,n)=>`data={{Data|${t}|${o.toLowerCase()}|${n}}}`))}function d(e){const t=new Map([["january","Janeiro"],["february","Fevereiro"],["march","Março"],["april","Abril"],["may","Maio"],["june","Junho"],["july","Julho"],["august","Agosto"],["september","Setembro"],["october","Outubro"],["november","Novembro"],["december","Dezembro"]]);return e.replace(/release\s*=\s*\[\[([\w\s]+)\]\]\s*\[\[([\w\s]+)\]\]/gi,((e,o,n)=>{const[r,a]=o.trim().split(" ");return`lançamento={{Data|${r}|${t.get(a.toLowerCase())}|${n.trim()}}}`}))}function u(e){const t=e.match(/\|(exchange|gemw)=([^|\[\]]+)/gi);if(!t)return e;const o=t[0];return"}}"===o.slice(-2)?e.replace(o,"|mercado=gemw}}"):e.replace(o,"|mercado=gemw")}function h(e){return Array.from({length:(e.length-1)/2},((t,o)=>[e[2*o+1].trim(),e[2*o+2].trim()]))}function m(e){const t=e.split(/[|=]+/);return 1===t.length?0!==t[0].length&&[t[0],""]:0!==t[0].length?[t[0],h(t)]:h(t)}function f(e,t){if(c.has(e)){const o=c.get(e);if("function"==typeof o)return o(t)}if(r.q.has(e))return t.replace(`${e}=`,`${r.q.get(e)}=`);const o=e.slice(-1);if(!isNaN(Number(o))){const n=e.slice(0,-1);if(r.q.has(n))return t.replace(`${e}=`,`${r.q.get(n)}${o}=`)}return t}function p(e){if(/^\d+\s/.test(e)){const t=e.split(/\s+(.+)/)[1];if(null!=t)return s.n.removeSymbols(t)}return s.n.removeSymbols(e)}function b(e,t){const o=e.split(/, |:|\(/);for(const[e,n]of o.entries()){const i=n.slice(-1);if(")"===i){const s=n.slice(0,-1);if(!s.isNaN&&e>0){const n=`${o[e-1]}(${s})`;if(a.W.has(n)){t=t.replace(n,a.W.get(n));continue}}if(r.q.has(s)){t=t.replace(n,`${r.q.get(s)})`);continue}}if("}"===i){const e=n.slice(0,-2);if(r.q.has(e)){t=t.replace(`=${n}`,`=${r.q.get(e)}}}`);continue}if(a.W.has(e)){t=t.replace(`=${n}`,`=${a.W.get(e)}}}`);continue}}if(r.q.has(n)){t=0===e?t.replace(`=${n}`,`=${r.q.get(n)}`):t.replace(`, ${n}`,`, ${r.q.get(n)}`);continue}if(a.W.has(n)){t=t.replace(n,a.W.get(n));continue}const c=p(n);if(parseInt(c)&&e>0){const n=`${s.n.removeSymbols(o[e-1])}(${c})`;if(a.W.has(n)){t=t.replace(n,a.W.get(n));continue}}r.q.has(c)?t=t.replace(c,r.q.get(c)):a.W.has(c)?t=t.replace(c,a.W.get(c)):a.CM.has(c)&&(t=t.replace(c,a.CM.get(c)))}return t}function y(e){const t=e.replace(/ = /g,"=").split(/[<>]+/),o=t.length;for(let e=0;e<o;e++){if(e%2==1)continue;let o=m(t[e]);if(o){if(2===o.length){const n=s.N.removeSymbols(o[0]);r.$.has(n)&&(t[e]=t[e].replace(n,r.$.get(n))),o=o[1]}for(const[n,r]of o)t[e]=f(n,t[e]),t[e]=b(r,t[e])}}return t.reduce(((e,t,o)=>0===o?t:`${e}${o%2==0?">":"<"}${t}`),"")}function w(e){return e.split("\n").map(y).join("\n")}n()}catch(v){n(v)}}))},697:(e,t,o)=>{o.d(t,{N:()=>s,n:()=>a});class n{children;isEndOfSymbol;constructor(){this.children=new Map,this.isEndOfSymbol=!1}}class r{root;constructor(e){this.root=new n,e.forEach((e=>this.insert(e)))}insert(e){let t=this.root;for(const o of e)t.children.has(o)||t.children.set(o,new n),t=t.children.get(o);t.isEndOfSymbol=!0}removeSymbols(e){let t="",o=this.root;for(const n of e)o.children.has(n)?o=o.children.get(n):(t+=n,o=this.root),o.isEndOfSymbol&&(o=this.root);return t}}const a=new r([".png",".gif","[","]",")"]),s=new r(["{","}"])}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return r[e](o,o.exports,s),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(r,a,s)=>{var i;s&&((i=[]).d=-1);var c,l,d,u=new Set,h=r.exports,m=new Promise(((e,t)=>{d=t,l=e}));m[t]=h,m[e]=e=>(i&&e(i),u.forEach(e),m.catch((e=>{}))),r.exports=m,a((r=>{var a;c=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var a=[];a.d=0,r.then((e=>{s[t]=e,n(a)}),(e=>{s[o]=e,n(a)}));var s={};return s[e]=e=>e(a),s}}var i={};return i[e]=e=>{},i[t]=r,i})))(r);var s=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),l=new Promise((t=>{(a=()=>t(s)).r=0;var o=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](o)))}));return a.r?l:s()}),(e=>(e?d(m[o]=e):l(h),n(i)))),i&&i.d<0&&(i.d=0)},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s(691)})();