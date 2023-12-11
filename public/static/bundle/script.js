(()=>{"use strict";var e,t,n,o,s={9:(e,t,n)=>{n.d(t,{M:()=>o});class o{map;constructor(e){if(this.map=new Map,e){if("function"!=typeof e[Symbol.iterator])throw new Error("Invalid entries; expected an iterable.");for(const[t,n]of e){const e=this.getKeyInLowerCase(t);this.map.set(e,{key:t,value:n})}}}set(e,t){const n=this.getKeyInLowerCase(e);this.map.set(n,{key:e,value:t})}get(e){const t=this.getKeyInLowerCase(e),n=this.map.get(t);return n?n.value:void 0}has(e){const t=this.getKeyInLowerCase(e);return this.map.has(t)}keys(){const e=[];for(const t of this.map.values())e.push(t.key);return e}getKeyInLowerCase(e){return"string"==typeof e?e.toLowerCase():String(e).toLowerCase()}}},532:(e,t,n)=>{n.d(t,{h:()=>r});const o=document.querySelectorAll("[class]"),s=document.getElementById("darkmode-button"),a=document.getElementById("lightmode-button"),i="wikiTranslatorVisualStyle";let r;function c(e){if(e!==r){for(const t of o){const n=t.classList;e:for(;;){for(const t of n)if(t.includes(r)){const o=t.replace(r,e);n.remove(t),n.add(o);continue e}break}}r=e,localStorage.setItem(i,e)}}s?.addEventListener("click",(()=>{c("dark"),s.classList.add("window-button--active-dark"),a?.classList.remove("window-button--active-dark")})),a?.addEventListener("click",(()=>{c("light"),a.classList.add("window-button--active-light"),s?.classList.remove("window-button--active-light")})),function(){r=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";const e=localStorage.getItem(i);c(null!==e?e:r),"dark"===r?(s?.classList.add("window-button--active-dark"),a?.classList.remove("window-button--active-dark")):(a?.classList.add("window-button--active-light"),s?.classList.remove("window-button--active-light"))}()},177:(e,t,n)=>{n.d(t,{Q:()=>r,k:()=>i});const o=document.getElementById("showIconsToggle"),s=document.getElementById("showDetailedToggle"),a=document.getElementById("showDetailedOption");let i,r;o.addEventListener("change",(e=>{i=e.currentTarget.checked,localStorage.setItem("showIconsKey",i.toString()),a.className=i?"":"options-list--disabled"})),s.addEventListener("change",(e=>{r=e.currentTarget.checked,localStorage.setItem("showDetailedKey",r.toString())})),function(){const e=localStorage.getItem("showIconsKey"),t=localStorage.getItem("showDetailedKey");e?i="true"===e:(i=!0,localStorage.setItem("showIconsKey","true")),t?r="true"===t:(r=!1,localStorage.setItem("showDetailedKey","false")),o.checked=i,s.checked=r,a.className=i?"":"options-list--disabled"}()},625:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var o=n(177),s=n(532),a=n(437),i=n(988),r=e([a]);a=(r.then?(await r)():r)[0];const c=document.querySelectorAll('[data-button="menu"]')[1],l=document.querySelector('[data-search="input"]'),d=document.getElementById("ge-items"),u=document.getElementById("ge_item_found"),m=document.getElementById("ge_not_found"),h=a.FI.keys();let g,p=null,w=[];async function f(){u.classList.remove("hidden");const e=w;for(const t of e){if(e!==w)return;const n=a.FI.get(t),r=document.createElement("div");r.className=`ge-item ge-item--${s.h}`;const c=document.createElement("p");c.className="ge-item__name",c.textContent=t;const l=document.createElement("button");l.className=`window-button window-button--${s.h}`,l.addEventListener("click",(()=>{window.open(`https://secure.runescape.com/m=itemdb_rs/l=3/a=9/${t}/viewitem?obj=${n}`,"_blank")}));const u=document.createElement("img");if(u.className="ge-item__open-url ge__item-open-url--dark",l.appendChild(u),o.k){const e=document.createElement("img"),t=o.Q?"big":"sprite",s=o.Q?"ge-item__detail-icon":"";e.src=`https://secure.runescape.com/m=itemdb_rs/obj_${t}.gif?id=${n}`,e.className=s,r.appendChild(e),await(0,i._)(50)}r.appendChild(c),r.appendChild(l),d.appendChild(r)}}function v(){null!==p&&clearTimeout(p),d.querySelectorAll(".ge-item").forEach((e=>{d.removeChild(e)})),u.classList.add("hidden"),m.classList.add("hidden")}c.addEventListener("click",(()=>{l.value="",l.focus(),v()})),l.addEventListener("input",(()=>{v();const e=!g||g.length>l.value.length;if(g=l.value,!g||1===g.length)return m.classList.remove("hidden"),void(w=[]);w=e||0===w.length?h.filter((e=>e.toLowerCase().includes(g.toLowerCase()))):w.filter((e=>e.toLowerCase().includes(g.toLowerCase()))),0!==w.length?o.k?p=setTimeout(f,250):f():m.classList.remove("hidden")})),t()}catch(y){t(y)}}))},12:(e,t,n)=>{var o=n(532);const s=Array.from(document.querySelectorAll('[data-filter="website"]')),a=Array.from(document.querySelectorAll('[data-filter="days"]')),i=Array.from(document.querySelectorAll('[data-filter="months"]')),r=Array.from(document.querySelectorAll('[data-filter="years"]')),c=Array.from(document.querySelectorAll('[data-filter="container"]')),l=document.querySelector('[data-filter="search"]'),d={websiteDate:{website:-1,day:void 0,month:void 0,year:void 0},monthList:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],yearList:Array.from({length:(new Date).getFullYear()-2009+1},((e,t)=>2009+t))};function u(e){window.open(e,"_blank")}s.forEach(((e,t)=>{e.addEventListener("click",(()=>{const n=`window-button--active-${o.h}`;s.forEach((e=>e.classList.remove(n))),e.classList.add(n),d.websiteDate.website=t;const a=d.websiteDate.website,i=c[1],r=c[2],u=c[3],m=1!==a,h=[1,2].includes(a);r.classList.remove("hidden"),i.classList.toggle("hidden",!m),u.classList.toggle("hidden",!h),l.classList.remove("window-button--disabled")}))})),a.forEach(((e,t)=>{e.addEventListener("click",(()=>{const n=`window-button--active-${o.h}`;a.forEach((e=>e.classList.remove(n))),e.classList.add(n),d.websiteDate.day=t}))})),i.forEach(((e,t)=>{e.addEventListener("click",(()=>{const n=`window-button--active-${o.h}`;i.forEach((e=>e.classList.remove(n))),e.classList.add(n),d.websiteDate.month=t}))})),r.forEach(((e,t)=>{e.addEventListener("click",(()=>{const n=`window-button--active-${o.h}`;r.forEach((e=>e.classList.remove(n))),e.classList.add(n),d.websiteDate.year=t}))})),l.addEventListener("click",(()=>{const{yearList:e,websiteDate:t,monthList:n}=d,o=`https://secure.runescape.com/m=news/l=3/a=9/archive?year=${e[t.year]}&month=${void 0!==t.month?t.month+1:""}&filter=Filtrar`,s=void 0!==t.day?t.day+1:"",a=n[t.month]?.toLowerCase(),i=`https://pt.runescape.wiki/w/${s}_de_${a}`;switch(d.websiteDate.website){case 0:u(i);break;case 1:u(o);break;case 2:u(o),u(i)}}))},691:(e,t,n)=>{n.a(e,(async(e,o)=>{try{n.d(t,{Y:()=>L});var s=n(23),a=n(532),i=n(952),r=n(769),c=n(697),l=n(915),d=e([s]);s=(d.then?(await d)():d)[0];const u=document.querySelectorAll('[data-js="text-input"]'),m=document.querySelector('[data-js="text-output"]'),h=document.querySelector('[data-js="copy-button"]'),g=document.querySelector('[data-js="copy-icon"]'),p=document.querySelector('[data-js="copy-success"]'),w=document.querySelector('[data-js="delete-button"]'),f=Array.from(document.querySelectorAll('[data-window="popup"]')),v=Array.from(document.querySelectorAll('[data-button="menu"]')),y=document.querySelector(".options-list__shadowy"),L=f[2];let b,E,_=null,S=-1;u[r.J].focus(),u.forEach((e=>{e.addEventListener("input",(()=>{const t=(0,s.I)(e.value);if(l.Ph){const n=e.value.split("\n");for(let e=0;e<n.length;e++){const o=n[e].replace(" = ","="),s=t[e].split("=");for(let e=0;e<s.length;e++){const t=c.Bm.removeSymbols(s[e]);if(!/^[0-9]+$/.test(t)&&o.includes(s[e])){const t="}"===s[e].slice(-1),n=s[e].replace("<","&lt").replace(">","&gt");if((n.endsWith(".")||n.endsWith(".}}"))&&l.Kd){s[e]=t?`<b class="examine">${s[e].slice(0,-2)}</b>}}`:`<b class="examine">${n}</b>`;continue}s[e]=t?`<b class="untranslated">${s[e].slice(0,-2)}</b>}}`:`<b class="untranslated">${n}</b>`}}t[e]=s.join("=")}}m.innerHTML=t.join("<br>"),t?(h?.classList.toggle("textbox__button--active-scroll",m.clientHeight<m.scrollHeight),w?.classList.toggle("textbox__button--active-scroll",e.clientHeight<e.scrollHeight),h?.classList.remove("hidden"),w?.classList.remove("hidden")):(h?.classList.add("hidden"),w?.classList.add("hidden"))}))})),m.addEventListener("click",(e=>{e.target instanceof HTMLAnchorElement&&(e.preventDefault(),window.open(e.target.getAttribute("data-url"),"_blank"))})),m.addEventListener("keypress",(e=>{e.preventDefault()})),m.addEventListener("paste",(e=>{e.preventDefault()})),window.addEventListener("resize",(()=>{h?.classList.toggle("textbox__button--active-scroll",m.clientHeight<m.scrollHeight),w?.classList.toggle("textbox__button--active-scroll",u[r.J].clientHeight<u[r.J].scrollHeight),L.className.includes("menu-line__popup-window--show")&&(L.scrollHeight>L.clientHeight?L.style.paddingRight="0rem":L.style.paddingRight="0.5rem")})),h?.addEventListener("focusout",(()=>{p?.classList.add("hidden"),g?.classList.remove("hidden")})),h?.addEventListener("click",(()=>{navigator.clipboard.writeText(m.innerText).then((()=>{g?.classList.add("hidden"),p?.classList.remove("hidden")})).catch((e=>{console.error("Failed to copy text: ",e)})),setTimeout((()=>{p?.classList.add("hidden"),g?.classList.remove("hidden")}),2500)})),w?.addEventListener("click",(()=>{u[r.J].value=m.textContent="",h?.classList.add("hidden"),w?.classList.add("hidden")})),y.addEventListener("click",(()=>{const e=document.getElementById("shadowy");if(e){const t=e.textContent?.includes("escuro")?"Modo <i>sombrio</i>":"Modo escuro";e.innerHTML=t}})),f.forEach((e=>{e.addEventListener("touchstart",(e=>{const t=e.touches[0];b=t.clientX,E=t.clientY})),e.addEventListener("touchend",(t=>{const n=t.changedTouches[0],o=n.clientX,s=n.clientY,i=o-b,r=s-E;if(Math.abs(i)>Math.abs(r)&&Math.abs(i)>100){const t=document.querySelector(`header-button--active-${a.h}`);t?.classList.remove(`header-button--active-${a.h}`),e.classList.remove("menu-line__popup-window--show")}}))})),v[2].addEventListener("click",(()=>{L.scrollHeight>L.clientHeight?L.style.paddingRight="0rem":L.style.paddingRight="0.5rem"})),v.forEach(((e,t)=>{e.addEventListener("click",(()=>{if(3===t)return;const n=`header-button--active-${a.h}`,o=f[t];if(null!==_&&(clearTimeout(_),_=null),-1===S)return e.classList.add(n),o.classList.add("menu-line__popup-window--show"),void(S=t);if(S===t)return e.classList.remove(n),o.classList.remove("menu-line__popup-window--show"),S=-1,void(i.B||(o.classList.add("menu-line__popup-window--hide"),_=setTimeout((()=>{o.classList.remove("menu-line__popup-window--hide")}),500)));e.classList.add(n);const s=v[S],r=f[S];s?.classList.remove(n),r?.classList.remove("menu-line__popup-window--show"),i.B?(o.classList.remove("menu-line__popup-window--hide"),o.classList.add("menu-line__popup-window--show")):(r?.classList.add("menu-line__popup-window--hide"),_=setTimeout((()=>{o.classList.remove("menu-line__popup-window--hide"),o.classList.add("menu-line__popup-window--show")}),500)),S=t}))})),document.addEventListener("click",(e=>{if(-1===S)return;const t=e.target,n=v[S],o=f[S];n.contains(t)||o.contains(t)||(n.classList.remove(`header-button--active-${a.h}`),o.classList.remove("menu-line__popup-window--show"),i.B||(o.classList.add("menu-line__popup-window--hide"),_=setTimeout((()=>{o.classList.remove("menu-line__popup-window--hide")}),500)),S=-1)})),o()}catch(e){o(e)}}))},437:(e,t,n)=>{n.a(e,(async(e,o)=>{try{n.d(t,{CM:()=>r,FI:()=>c,W:()=>i});var s=n(9);async function a(){return Promise.all([fetch("public/data/dataItems.json").then((e=>e.json())),fetch("public/data/dataNPCs.json").then((e=>e.json())),fetch("public/data/dataGE.json").then((e=>e.json()))]).then((([e,t,n])=>({itemNames:new s.M(e),npcNames:new s.M(t),geItems:new s.M(n)}))).catch((e=>{throw console.error("Error loading JSON files:",e),e}))}const{itemNames:i,npcNames:r,geItems:c}=await a();o()}catch(l){o(l)}}),1)},769:(e,t,n)=>{n.d(t,{J:()=>l});var o=n(532);const s=document.getElementById("pt-button"),a=document.getElementById("en-button"),i=document.querySelector('[data-search="input"]'),r=document.querySelectorAll('[lang="pt"]'),c=document.querySelectorAll('[lang="en"]');let l;function d(){const e=`window-button--active-${o.h}`;a.classList.remove(e),s.classList.add(e),c.forEach((e=>e.classList.add("hidden"))),r.forEach((e=>e.classList.remove("hidden"))),i.placeholder="Digite o nome de um item",localStorage.setItem("wikiTranslatorLanguageKey","pt"),l=0}function u(){const e=`window-button--active-${o.h}`;s.classList.remove(e),a.classList.add(e),r.forEach((e=>e.classList.add("hidden"))),c.forEach((e=>e.classList.remove("hidden"))),i.placeholder="Insert an item name (in Portuguese)",localStorage.setItem("wikiTranslatorLanguageKey","en"),l=1}s.addEventListener("click",d),a.addEventListener("click",u),function(){const e=localStorage.getItem("wikiTranslatorLanguageKey");if(!e)return(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).includes("en")?(localStorage.setItem("wikiTranslatorLanguageKey","en"),u()):(localStorage.setItem("wikiTranslatorLanguageKey","pt"),d());"pt"===e?d():u()}()},305:(e,t,n)=>{n.a(e,(async(e,o)=>{try{n.d(t,{$:()=>r,q:()=>i});var s=n(9);async function a(){return Promise.all([fetch("public/data/parameters.json").then((e=>e.json())),fetch("public/data/infoboxes.json").then((e=>e.json()))]).then((([e,t])=>({parameters:new s.M(Object.entries(e)),infoboxes:new s.M(Object.entries(t).map((([e,t])=>[e.toLowerCase(),t])))}))).catch((e=>{throw console.error("Error loading JSON files:",e),e}))}const{parameters:i,infoboxes:r}=await a();o()}catch(c){o(c)}}),1)},952:(e,t,n)=>{n.d(t,{B:()=>s});const o=document.getElementById("reduceAnimsToggle");let s;o.addEventListener("change",(e=>{s=e.currentTarget.checked,localStorage.setItem("reduceAnimsKey",s.toString()),s&&document.querySelectorAll(".menu-line__popup-window--hide").forEach((e=>e.classList.remove("menu-line__popup-window--hide")))})),function(){const e=localStorage.getItem("reduceAnimsKey");e?s="true"===e:(s=!1,localStorage.setItem("reduceAnimsKey","false")),o.checked=s}()},988:(e,t,n)=>{function o(e){return new Promise((t=>setTimeout(t,e)))}n.d(t,{_:()=>o})},915:(e,t,n)=>{n.d(t,{Kd:()=>l,Ph:()=>c,QK:()=>r});const o=document.querySelector("#showLinksToggle"),s=document.querySelector("#showHighlightToggle"),a=document.querySelector("#showExamineToggle"),i=document.getElementById("showExamineOption");let r,c,l;o.addEventListener("change",(e=>{r=e.currentTarget.checked,localStorage.setItem("showLinksKey",r.toString())})),s.addEventListener("change",(e=>{c=e.currentTarget.checked,localStorage.setItem("showHighlightKey",c.toString()),i.className=c?"":"options-list--disabled"})),a.addEventListener("change",(e=>{l=e.currentTarget.checked,localStorage.setItem("showExamineKey",l.toString())})),function(){const e=localStorage.getItem("showLinksKey"),t=localStorage.getItem("showHighlightKey"),n=localStorage.getItem("showExamineKey");e?r="true"===e:(r=!0,localStorage.setItem("showLinksKey","true")),t?c="true"===t:(c=!1,localStorage.setItem("showHighlightKey","true")),n?l="true"===n:(l=!1,localStorage.setItem("showExamineKey","true")),o.checked=r,s.checked=c}()},755:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var o=n(691),s=e([o]);function a(e,t,n){return e+n+25>o.Y.clientHeight?t-n:t+25}o=(s.then?(await s)():s)[0],document.querySelectorAll(".tooltip").forEach((e=>{e.addEventListener("mousemove",(t=>{const n=e.querySelector(".tooltip__text"),o=n.getBoundingClientRect().height,s=e.getBoundingClientRect(),i=t.clientX-s.left,r=t.clientY-s.top,c=i-n.offsetWidth/2,l=a(t.clientY,r,o);n.style.left=c+"px",n.style.top=l+"px"}))})),t()}catch(i){t(i)}}))},23:(e,t,n)=>{n.a(e,(async(e,o)=>{try{n.d(t,{I:()=>y});var s=n(305),a=n(437),i=n(697),r=n(915),c=e([s,a]);[s,a]=c.then?(await c)():c;const l=new Map([["date",d],["release",u],["exchange",m],["gemw",m]]);function d(e){return e.replace(/date\s*=\s*(\d+)\s+([\w\s]+)\s+(\d+)/gi,((e,t,n,o)=>`data={{Data|${t}|${n.toLowerCase()}|${o}}}`))}function u(e){const t=new Map([["january","Janeiro"],["february","Fevereiro"],["march","Março"],["april","Abril"],["may","Maio"],["june","Junho"],["july","Julho"],["august","Agosto"],["september","Setembro"],["october","Outubro"],["november","Novembro"],["december","Dezembro"]]);return e.replace(/release\s*=\s*\[\[([\w\s]+)\]\]\s*\[\[([\w\s]+)\]\]/gi,((e,n,o)=>{const[s,a]=n.trim().split(" ");return`lançamento={{Data|${s}|${t.get(a.toLowerCase())}|${o.trim()}}}`}))}function m(e){const t=e.match(/\|(exchange|gemw)=([^|\[\]]+)/gi);if(!t)return e;const n=t[0];return"}}"===n.slice(-2)?e.replace(n,"|mercado=gemw}}"):e.replace(n,"|mercado=gemw")}function h(e){return Array.from({length:(e.length-1)/2},((t,n)=>[e[2*n+1].trim(),e[2*n+2].trim()]))}function g(e){const t=e.split(/[|=]+/);return 1===t.length?0!==t[0].length&&[t[0],""]:0!==t[0].length?[t[0],h(t)]:h(t)}function p(e,t){if(l.has(e)){const n=l.get(e);if("function"==typeof n)return n(t)}if(s.q.has(e))return t.replace(`${e}=`,`${s.q.get(e)}=`);const n=e.slice(-1);if(!isNaN(Number(n))){const o=e.slice(0,-1);if(s.q.has(o))return t.replace(`${e}=`,`${s.q.get(o)}${n}=`)}return t}function w(e){if(/^\d+\s/.test(e)){const t=e.split(/\s+(.+)/)[1];if(null!=t)return i.nh.removeSymbols(t)}return i.nh.removeSymbols(e)}function f(e,t){const n=e.split(/, |:|\(/);for(const[e,o]of n.entries()){const r=o.slice(-1);if(")"===r){const i=o.slice(0,-1);if(!i.isNaN&&e>0){const o=`${n[e-1]}(${i})`;if(a.W.has(o)){t=t.replace(o,a.W.get(o));continue}}if(s.q.has(i)){t=t.replace(o,`${s.q.get(i)})`);continue}}if("}"===r){const e=o.slice(0,-2);if(s.q.has(e)){t=t.replace(`=${o}`,`=${s.q.get(e)}}}`);continue}if(a.W.has(e)){t=t.replace(`=${o}`,`=${a.W.get(e)}}}`);continue}}if(s.q.has(o)){t=0===e?t.replace(`=${o}`,`=${s.q.get(o)}`):t.replace(`, ${o}`,`, ${s.q.get(o)}`);continue}if(a.W.has(o)){t=t.replace(o,a.W.get(o));continue}const c=w(o);if(parseInt(c)&&e>0){const o=`${i.nh.removeSymbols(n[e-1])}(${c})`;if(a.W.has(o)){t=t.replace(o,a.W.get(o));continue}}s.q.has(c)?t=t.replace(c,s.q.get(c)):a.W.has(c)?t=t.replace(c,a.W.get(c)):a.CM.has(c)&&(t=t.replace(c,a.CM.get(c)))}return t}function v(e){if(e.toLowerCase().includes("npc map"))return p(e.split("=")[0].slice(1).trim(),e.replace(" = ","="));const t=e.replace(/ = /g,"=").split(/[<>]+/),n=t.length;for(let e=0;e<n;e++){if(e%2==1)continue;let n=g(t[e]);if(n){if(2===n.length){const o=i.N_.removeSymbols(n[0]);if(s.$.has(o)){const n=s.$.get(o);if(r.QK){const s=`<a href="#" data-url="https://pt.runescape.wiki/w/Predefini%C3%A7%C3%A3o:${n}">${n}</a>`;t[e]=t[e].replace(o,s)}else t[e]=t[e].replace(o,n)}n=n[1]}for(const[o,s]of n)t[e]=p(o,t[e]),t[e]=f(s,t[e])}}return t.reduce(((e,t,n)=>0===n?t:`${e}${n%2==0?">":"<"}${t}`),"")}function y(e){return e.split("\n").map(v)}o()}catch(L){o(L)}}))},697:(e,t,n)=>{n.d(t,{Bm:()=>r,N_:()=>i,nh:()=>a});class o{children;isEndOfSymbol;constructor(){this.children=new Map,this.isEndOfSymbol=!1}}class s{root;constructor(e){this.root=new o,e.forEach((e=>this.insert(e)))}insert(e){let t=this.root;for(const n of e)t.children.has(n)||t.children.set(n,new o),t=t.children.get(n);t.isEndOfSymbol=!0}removeSymbols(e){let t="",n=this.root;for(const o of e)n.children.has(o)?n=n.children.get(o):(t+=o,n=this.root),n.isEndOfSymbol&&(n=this.root);return t}}const a=new s([".png",".gif","[","]",")"]),i=new s(["{","}"]),r=new s(["}","/"])}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return s[e](n,n.exports,i),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(s,a,i)=>{var r;i&&((r=[]).d=-1);var c,l,d,u=new Set,m=s.exports,h=new Promise(((e,t)=>{d=t,l=e}));h[t]=m,h[e]=e=>(r&&e(r),u.forEach(e),h.catch((e=>{}))),s.exports=h,a((s=>{var a;c=(s=>s.map((s=>{if(null!==s&&"object"==typeof s){if(s[e])return s;if(s.then){var a=[];a.d=0,s.then((e=>{i[t]=e,o(a)}),(e=>{i[n]=e,o(a)}));var i={};return i[e]=e=>e(a),i}}var r={};return r[e]=e=>{},r[t]=s,r})))(s);var i=()=>c.map((e=>{if(e[n])throw e[n];return e[t]})),l=new Promise((t=>{(a=()=>t(i)).r=0;var n=e=>e!==r&&!u.has(e)&&(u.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](n)))}));return a.r?l:i()}),(e=>(e?d(h[n]=e):l(m),o(r)))),r&&r.d<0&&(r.d=0)},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i(691),i(12),i(625),i(532),i(915),i(177),i(952),i(755),i(769)})();