(()=>{"use strict";var e,t,o,n,s={9:(e,t,o)=>{o.d(t,{M:()=>n});class n{map;constructor(e){if(this.map=new Map,e){if("function"!=typeof e[Symbol.iterator])throw new Error("Invalid entries; expected an iterable.");for(const[t,o]of e){const e=this.getKeyInLowerCase(t);this.map.set(e,{key:t,value:o})}}}set(e,t){const o=this.getKeyInLowerCase(e);this.map.set(o,{key:e,value:t})}get(e){const t=this.getKeyInLowerCase(e),o=this.map.get(t);return o?o.value:void 0}has(e){const t=this.getKeyInLowerCase(e);return this.map.has(t)}keys(){const e=[];for(const t of this.map.values())e.push(t.key);return e}getKeyInLowerCase(e){return"string"==typeof e?e.toLowerCase():String(e).toLowerCase()}}},532:(e,t,o)=>{o.d(t,{h:()=>i});const n=document.querySelectorAll("[class]"),s=document.getElementById("darkmode-button"),a=document.getElementById("lightmode-button"),r="wikiTranslatorVisualStyle";let i;function c(e){if(e!==i){for(const t of n){const o=t.classList;e:for(;;){for(const t of o)if(t.includes(i)){const n=t.replace(i,e);o.remove(t),o.add(n);continue e}break}}i=e,localStorage.setItem(r,e)}}s?.addEventListener("click",(()=>{c("dark"),s.classList.add("window-button--active-dark"),a?.classList.remove("window-button--active-dark")})),a?.addEventListener("click",(()=>{c("light"),a.classList.add("window-button--active-light"),s?.classList.remove("window-button--active-light")})),function(){i=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";const e=localStorage.getItem(r);c(null!==e?e:i),"dark"===i?(s?.classList.add("window-button--active-dark"),a?.classList.remove("window-button--active-dark")):(a?.classList.add("window-button--active-light"),s?.classList.remove("window-button--active-light"))}()},177:(e,t,o)=>{o.d(t,{Q:()=>i,k:()=>r});const n=document.getElementById("showIconsToggle"),s=document.getElementById("showDetailedToggle"),a=document.getElementById("showDetailedOption");let r,i;n.addEventListener("change",(e=>{r=e.currentTarget.checked,localStorage.setItem("showIconsKey",r.toString()),a.className=r?"":"options-list--disabled"})),s.addEventListener("change",(e=>{i=e.currentTarget.checked,localStorage.setItem("showDetailedKey",i.toString())})),function(){const e=localStorage.getItem("showIconsKey"),t=localStorage.getItem("showDetailedKey");e?r="true"===e:(r=!0,localStorage.setItem("showIconsKey","true")),t?i="true"===t:(i=!1,localStorage.setItem("showDetailedKey","false")),n.checked=r,s.checked=i,a.className=r?"":"options-list--disabled"}()},625:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(177),s=o(532),a=o(437),r=o(988),i=e([a]);a=(i.then?(await i)():i)[0];const c=document.querySelectorAll('[data-button="menu"]')[1],l=document.querySelector('[data-search="input"]'),d=document.getElementById("ge-items"),u=document.getElementById("ge_item_found"),m=document.getElementById("ge_not_found"),h=a.FI.keys();let p,g=null,w=[];async function f(){u.classList.remove("hidden");const e=w;for(const t of e){if(e!==w)return;const o=a.FI.get(t),i=document.createElement("div");i.className=`ge-item ge-item--${s.h}`;const c=document.createElement("p");c.className="ge-item__name",c.textContent=t;const l=document.createElement("button");l.className=`window-button window-button--${s.h}`,l.addEventListener("click",(()=>{window.open(`https://secure.runescape.com/m=itemdb_rs/l=3/a=9/${t}/viewitem?obj=${o}`,"_blank")}));const u=document.createElement("img");if(u.className="ge-item__open-url ge__item-open-url--dark",l.appendChild(u),n.k){const e=document.createElement("img"),t=n.Q?"big":"sprite",s=n.Q?"ge-item__detail-icon":"";e.src=`https://secure.runescape.com/m=itemdb_rs/obj_${t}.gif?id=${o}`,e.className=s,i.appendChild(e),await(0,r._)(50)}i.appendChild(c),i.appendChild(l),d.appendChild(i)}}function v(){null!==g&&clearTimeout(g),d.querySelectorAll(".ge-item").forEach((e=>{d.removeChild(e)})),u.classList.add("hidden"),m.classList.add("hidden")}c.addEventListener("click",(()=>{l.value="",l.focus(),v()})),l.addEventListener("input",(()=>{v();const e=!p||p.length>l.value.length;if(p=l.value,!p||1===p.length)return m.classList.remove("hidden"),void(w=[]);w=e||0===w.length?h.filter((e=>e.toLowerCase().includes(p.toLowerCase()))):w.filter((e=>e.toLowerCase().includes(p.toLowerCase()))),0!==w.length?n.k?g=setTimeout(f,250):f():m.classList.remove("hidden")})),t()}catch(y){t(y)}}))},12:(e,t,o)=>{var n=o(532);const s=Array.from(document.querySelectorAll('[data-filter="website"]')),a=Array.from(document.querySelectorAll('[data-filter="days"]')),r=Array.from(document.querySelectorAll('[data-filter="months"]')),i=Array.from(document.querySelectorAll('[data-filter="years"]')),c=Array.from(document.querySelectorAll('[data-filter="container"]')),l=document.querySelector('[data-filter="search"]'),d={websiteDate:{website:-1,day:void 0,month:void 0,year:void 0},monthList:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],yearList:Array.from({length:(new Date).getFullYear()-2009+1},((e,t)=>2009+t))};function u(e){window.open(e,"_blank")}s.forEach(((e,t)=>{e.addEventListener("click",(()=>{const o=`window-button--active-${n.h}`;s.forEach((e=>e.classList.remove(o))),e.classList.add(o),d.websiteDate.website=t;const a=d.websiteDate.website,r=c[1],i=c[2],u=c[3],m=1!==a,h=[1,2].includes(a);i.classList.remove("hidden"),r.classList.toggle("hidden",!m),u.classList.toggle("hidden",!h),l.classList.remove("window-button--disabled")}))})),a.forEach(((e,t)=>{e.addEventListener("click",(()=>{const o=`window-button--active-${n.h}`;a.forEach((e=>e.classList.remove(o))),e.classList.add(o),d.websiteDate.day=t}))})),r.forEach(((e,t)=>{e.addEventListener("click",(()=>{const o=`window-button--active-${n.h}`;r.forEach((e=>e.classList.remove(o))),e.classList.add(o),d.websiteDate.month=t}))})),i.forEach(((e,t)=>{e.addEventListener("click",(()=>{const o=`window-button--active-${n.h}`;i.forEach((e=>e.classList.remove(o))),e.classList.add(o),d.websiteDate.year=t}))})),l.addEventListener("click",(()=>{const{yearList:e,websiteDate:t,monthList:o}=d,n=`https://secure.runescape.com/m=news/l=3/a=9/archive?year=${e[t.year]}&month=${void 0!==t.month?t.month+1:""}&filter=Filtrar`,s=void 0!==t.day?t.day+1:"",a=o[t.month]?.toLowerCase(),r=`https://pt.runescape.wiki/w/${s}_de_${a}`;switch(d.websiteDate.website){case 0:u(r);break;case 1:u(n);break;case 2:u(n),u(r)}}))},691:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(23),s=o(532),a=o(952),r=o(769),i=e([n]);n=(i.then?(await i)():i)[0];const c=document.querySelectorAll('[data-js="text-input"]'),l=document.querySelector('[data-js="text-output"]'),d=document.querySelector('[data-js="copy-button"]'),u=document.querySelector('[data-js="copy-icon"]'),m=document.querySelector('[data-js="copy-success"]'),h=document.querySelector('[data-js="delete-button"]'),p=Array.from(document.querySelectorAll('[data-window="popup"]')),g=Array.from(document.querySelectorAll('[data-button="menu"]')),w=document.querySelector(".options-list__shadowy");let f,v,y=null,L=-1;c[r.J].focus(),c.forEach((e=>{e.addEventListener("input",(()=>{const t=(0,n.I)(e.value);l.innerText=t,t?(d?.classList.toggle("textbox__button--active-scroll",l.clientHeight<l.scrollHeight),h?.classList.toggle("textbox__button--active-scroll",e.clientHeight<e.scrollHeight),d?.classList.remove("hidden"),h?.classList.remove("hidden")):(d?.classList.add("hidden"),h?.classList.add("hidden"))}))})),l.addEventListener("keypress",(e=>{e.preventDefault()})),l.addEventListener("paste",(e=>{e.preventDefault()})),window.addEventListener("resize",(()=>{d?.classList.toggle("textbox__button--active-scroll",l.clientHeight<l.scrollHeight),h?.classList.toggle("textbox__button--active-scroll",c[r.J].clientHeight<c[r.J].scrollHeight)})),d?.addEventListener("focusout",(()=>{m?.classList.add("hidden"),u?.classList.remove("hidden")})),d?.addEventListener("click",(()=>{navigator.clipboard.writeText(l.textContent).then((()=>{u?.classList.add("hidden"),m?.classList.remove("hidden")})).catch((e=>{console.error("Failed to copy text: ",e)})),setTimeout((()=>{m?.classList.add("hidden"),u?.classList.remove("hidden")}),2500)})),h?.addEventListener("click",(()=>{c[r.J].value=l.textContent="",d?.classList.add("hidden"),h?.classList.add("hidden")})),w.addEventListener("click",(()=>{const e=document.getElementById("shadowy");if(e){const t=e.textContent?.includes("escuro")?"Modo <i>sombrio</i>":"Modo escuro";e.innerHTML=t}})),p.forEach((e=>{e.addEventListener("touchstart",(e=>{const t=e.touches[0];f=t.clientX,v=t.clientY})),e.addEventListener("touchend",(t=>{const o=t.changedTouches[0],n=o.clientX,a=o.clientY,r=n-f,i=a-v;if(Math.abs(r)>Math.abs(i)&&Math.abs(r)>100){const t=document.querySelector(`header-button--active-${s.h}`);t?.classList.remove(`header-button--active-${s.h}`),e.classList.remove("menu-line__popup-window--show")}}))})),g.forEach(((e,t)=>{e.addEventListener("click",(()=>{if(3===t)return;const o=`header-button--active-${s.h}`,n=p[t];if(null!==y&&(clearTimeout(y),y=null),-1===L)return e.classList.add(o),n.classList.add("menu-line__popup-window--show"),void(L=t);if(L===t)return e.classList.remove(o),n.classList.remove("menu-line__popup-window--show"),L=-1,void(a.B||(n.classList.add("menu-line__popup-window--hide"),y=setTimeout((()=>{n.classList.remove("menu-line__popup-window--hide")}),500)));e.classList.add(o);const r=g[L],i=p[L];r?.classList.remove(o),i?.classList.remove("menu-line__popup-window--show"),a.B?(n.classList.remove("menu-line__popup-window--hide"),n.classList.add("menu-line__popup-window--show")):(i?.classList.add("menu-line__popup-window--hide"),y=setTimeout((()=>{n.classList.remove("menu-line__popup-window--hide"),n.classList.add("menu-line__popup-window--show")}),500)),L=t}))})),document.addEventListener("click",(e=>{if(-1===L)return;const t=e.target,o=g[L],n=p[L];o.contains(t)||n.contains(t)||(o.classList.remove(`header-button--active-${s.h}`),n.classList.remove("menu-line__popup-window--show"),a.B||(n.classList.add("menu-line__popup-window--hide"),y=setTimeout((()=>{n.classList.remove("menu-line__popup-window--hide")}),500)),L=-1)})),t()}catch(e){t(e)}}))},437:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{CM:()=>i,FI:()=>c,W:()=>r});var s=o(9);async function a(){return Promise.all([fetch("public/data/dataItems.json").then((e=>e.json())),fetch("public/data/dataNPCs.json").then((e=>e.json())),fetch("public/data/dataGE.json").then((e=>e.json()))]).then((([e,t,o])=>({itemNames:new s.M(e),npcNames:new s.M(t),geItems:new s.M(o)}))).catch((e=>{throw console.error("Error loading JSON files:",e),e}))}const{itemNames:r,npcNames:i,geItems:c}=await a();n()}catch(l){n(l)}}),1)},769:(e,t,o)=>{o.d(t,{J:()=>l});var n=o(532);const s=document.getElementById("pt-button"),a=document.getElementById("en-button"),r=document.querySelector('[data-search="input"]'),i=document.querySelectorAll('[lang="pt"]'),c=document.querySelectorAll('[lang="en"]');let l;function d(){const e=`window-button--active-${n.h}`;a.classList.remove(e),s.classList.add(e),c.forEach((e=>e.classList.add("hidden"))),i.forEach((e=>e.classList.remove("hidden"))),r.placeholder="Digite o nome de um item",localStorage.setItem("wikiTranslatorLanguageKey","pt"),l=0}function u(){const e=`window-button--active-${n.h}`;s.classList.remove(e),a.classList.add(e),i.forEach((e=>e.classList.add("hidden"))),c.forEach((e=>e.classList.remove("hidden"))),r.placeholder="Insert an item name (in Portuguese)",localStorage.setItem("wikiTranslatorLanguageKey","en"),l=1}s.addEventListener("click",d),a.addEventListener("click",u),function(){const e=localStorage.getItem("wikiTranslatorLanguageKey");if(!e)return(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).includes("en")?(localStorage.setItem("wikiTranslatorLanguageKey","en"),u()):(localStorage.setItem("wikiTranslatorLanguageKey","pt"),d());"pt"===e?d():u()}()},305:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{$:()=>i,q:()=>r});var s=o(9);async function a(){return Promise.all([fetch("public/data/parameters.json").then((e=>e.json())),fetch("public/data/infoboxes.json").then((e=>e.json()))]).then((([e,t])=>({parameters:new s.M(Object.entries(e)),infoboxes:new s.M(Object.entries(t).map((([e,t])=>[e.toLowerCase(),t])))}))).catch((e=>{throw console.error("Error loading JSON files:",e),e}))}const{parameters:r,infoboxes:i}=await a();n()}catch(c){n(c)}}),1)},952:(e,t,o)=>{o.d(t,{B:()=>s});const n=document.getElementById("reduceAnimsToggle");let s;n.addEventListener("change",(e=>{s=e.currentTarget.checked,localStorage.setItem("reduceAnimsKey",s.toString()),s&&document.querySelectorAll(".menu-line__popup-window--hide").forEach((e=>e.classList.remove("menu-line__popup-window--hide")))})),function(){const e=localStorage.getItem("reduceAnimsKey");e?s="true"===e:(s=!1,localStorage.setItem("reduceAnimsKey","false")),n.checked=s}()},988:(e,t,o)=>{function n(e){return new Promise((t=>setTimeout(t,e)))}o.d(t,{_:()=>n})},755:()=>{document.querySelectorAll(".tooltip").forEach((e=>{const t=e.querySelector(".tooltip__text");e.addEventListener("mousemove",(o=>{const n=e.getBoundingClientRect(),s=o.clientX-n.left,a=o.clientY-n.top,r=s-t.offsetWidth/2,i=a+20;t.style.left=r+"px",t.style.top=i+"px"}))}))},23:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{I:()=>v});var s=o(305),a=o(437),r=o(697),i=e([s,a]);[s,a]=i.then?(await i)():i;const c=new Map([["date",l],["release",d],["exchange",u],["gemw",u]]);function l(e){return e.replace(/date\s*=\s*(\d+)\s+([\w\s]+)\s+(\d+)/gi,((e,t,o,n)=>`data={{Data|${t}|${o.toLowerCase()}|${n}}}`))}function d(e){const t=new Map([["january","Janeiro"],["february","Fevereiro"],["march","Março"],["april","Abril"],["may","Maio"],["june","Junho"],["july","Julho"],["august","Agosto"],["september","Setembro"],["october","Outubro"],["november","Novembro"],["december","Dezembro"]]);return e.replace(/release\s*=\s*\[\[([\w\s]+)\]\]\s*\[\[([\w\s]+)\]\]/gi,((e,o,n)=>{const[s,a]=o.trim().split(" ");return`lançamento={{Data|${s}|${t.get(a.toLowerCase())}|${n.trim()}}}`}))}function u(e){const t=e.match(/\|(exchange|gemw)=([^|\[\]]+)/gi);if(!t)return e;const o=t[0];return"}}"===o.slice(-2)?e.replace(o,"|mercado=gemw}}"):e.replace(o,"|mercado=gemw")}function m(e){return Array.from({length:(e.length-1)/2},((t,o)=>[e[2*o+1].trim(),e[2*o+2].trim()]))}function h(e){const t=e.split(/[|=]+/);return 1===t.length?0!==t[0].length&&[t[0],""]:0!==t[0].length?[t[0],m(t)]:m(t)}function p(e,t){if(c.has(e)){const o=c.get(e);if("function"==typeof o)return o(t)}if(s.q.has(e))return t.replace(`${e}=`,`${s.q.get(e)}=`);const o=e.slice(-1);if(!isNaN(Number(o))){const n=e.slice(0,-1);if(s.q.has(n))return t.replace(`${e}=`,`${s.q.get(n)}${o}=`)}return t}function g(e){if(/^\d+\s/.test(e)){const t=e.split(/\s+(.+)/)[1];if(null!=t)return r.n.removeSymbols(t)}return r.n.removeSymbols(e)}function w(e,t){const o=e.split(/, |:|\(/);for(const[e,n]of o.entries()){const i=n.slice(-1);if(")"===i){const r=n.slice(0,-1);if(!r.isNaN&&e>0){const n=`${o[e-1]}(${r})`;if(a.W.has(n)){t=t.replace(n,a.W.get(n));continue}}if(s.q.has(r)){t=t.replace(n,`${s.q.get(r)})`);continue}}if("}"===i){const e=n.slice(0,-2);if(s.q.has(e)){t=t.replace(`=${n}`,`=${s.q.get(e)}}}`);continue}if(a.W.has(e)){t=t.replace(`=${n}`,`=${a.W.get(e)}}}`);continue}}if(s.q.has(n)){t=0===e?t.replace(`=${n}`,`=${s.q.get(n)}`):t.replace(`, ${n}`,`, ${s.q.get(n)}`);continue}if(a.W.has(n)){t=t.replace(n,a.W.get(n));continue}const c=g(n);if(parseInt(c)&&e>0){const n=`${r.n.removeSymbols(o[e-1])}(${c})`;if(a.W.has(n)){t=t.replace(n,a.W.get(n));continue}}s.q.has(c)?t=t.replace(c,s.q.get(c)):a.W.has(c)?t=t.replace(c,a.W.get(c)):a.CM.has(c)&&(t=t.replace(c,a.CM.get(c)))}return t}function f(e){const t=e.replace(/ = /g,"=").split(/[<>]+/),o=t.length;for(let e=0;e<o;e++){if(e%2==1)continue;let o=h(t[e]);if(o){if(2===o.length){const n=r.N.removeSymbols(o[0]);s.$.has(n)&&(t[e]=t[e].replace(n,s.$.get(n))),o=o[1]}for(const[n,s]of o)t[e]=p(n,t[e]),t[e]=w(s,t[e])}}return t.reduce(((e,t,o)=>0===o?t:`${e}${o%2==0?">":"<"}${t}`),"")}function v(e){return e.split("\n").map(f).join("\n")}n()}catch(y){n(y)}}))},697:(e,t,o)=>{o.d(t,{N:()=>r,n:()=>a});class n{children;isEndOfSymbol;constructor(){this.children=new Map,this.isEndOfSymbol=!1}}class s{root;constructor(e){this.root=new n,e.forEach((e=>this.insert(e)))}insert(e){let t=this.root;for(const o of e)t.children.has(o)||t.children.set(o,new n),t=t.children.get(o);t.isEndOfSymbol=!0}removeSymbols(e){let t="",o=this.root;for(const n of e)o.children.has(n)?o=o.children.get(n):(t+=n,o=this.root),o.isEndOfSymbol&&(o=this.root);return t}}const a=new s([".png",".gif","[","]",")"]),r=new s(["{","}"])}},a={};function r(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return s[e](o,o.exports,r),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},r.a=(s,a,r)=>{var i;r&&((i=[]).d=-1);var c,l,d,u=new Set,m=s.exports,h=new Promise(((e,t)=>{d=t,l=e}));h[t]=m,h[e]=e=>(i&&e(i),u.forEach(e),h.catch((e=>{}))),s.exports=h,a((s=>{var a;c=(s=>s.map((s=>{if(null!==s&&"object"==typeof s){if(s[e])return s;if(s.then){var a=[];a.d=0,s.then((e=>{r[t]=e,n(a)}),(e=>{r[o]=e,n(a)}));var r={};return r[e]=e=>e(a),r}}var i={};return i[e]=e=>{},i[t]=s,i})))(s);var r=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),l=new Promise((t=>{(a=()=>t(r)).r=0;var o=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](o)))}));return a.r?l:r()}),(e=>(e?d(h[o]=e):l(m),n(i)))),i&&i.d<0&&(i.d=0)},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(691),r(12),r(625),r(532),r(177),r(952),r(755),r(769)})();