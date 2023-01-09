"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["sessions"],{59753(a,b,c){function d(){if(!(this instanceof d))return new d;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}c.d(b,{f:()=>B,on:()=>A});var e,f=window.document.documentElement,g=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector;d.prototype.matchesSelector=function(a,b){return g.call(a,b)},d.prototype.querySelectorAll=function(a,b){return b.querySelectorAll(a)},d.prototype.indexes=[];var h=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"ID",selector:function(a){var b;if(b=a.match(h))return b[0].slice(1)},element:function(a){if(a.id)return[a.id]}});var i=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"CLASS",selector:function(a){var b;if(b=a.match(i))return b[0].slice(1)},element:function(a){var b=a.className;if(b){if("string"==typeof b)return b.split(/\s/);if("object"==typeof b&&"baseVal"in b)return b.baseVal.split(/\s/)}}});var j=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"TAG",selector:function(a){var b;if(b=a.match(j))return b[0].toUpperCase()},element:function(a){return[a.nodeName.toUpperCase()]}}),d.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},e="function"==typeof window.Map?window.Map:function(){function a(){this.map={}}return a.prototype.get=function(a){return this.map[a+" "]},a.prototype.set=function(a,b){this.map[a+" "]=b},a}();var k=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function l(a,b){var c,d,e,f,g,h,i=(a=a.slice(0).concat(a.default)).length,j=b,l=[];do if(k.exec(""),(e=k.exec(j))&&(j=e[3],e[2]||!j)){for(c=0;c<i;c++)if(g=(h=a[c]).selector(e[1])){for(d=l.length,f=!1;d--;)if(l[d].index===h&&l[d].key===g){f=!0;break}f||l.push({index:h,key:g});break}}while(e)return l}function m(a,b){var c,d,e;for(c=0,d=a.length;c<d;c++)if(e=a[c],b.isPrototypeOf(e))return e}function n(a,b){return a.id-b.id}d.prototype.logDefaultIndexUsed=function(){},d.prototype.add=function(a,b){var c,d,f,g,h,i,j,k,n=this.activeIndexes,o=this.selectors,p=this.selectorObjects;if("string"==typeof a){for(d=0,p[(c={id:this.uid++,selector:a,data:b}).id]=c,j=l(this.indexes,a);d<j.length;d++)g=(k=j[d]).key,f=k.index,h=m(n,f),h||((h=Object.create(f)).map=new e,n.push(h)),f===this.indexes.default&&this.logDefaultIndexUsed(c),i=h.map.get(g),i||(i=[],h.map.set(g,i)),i.push(c);this.size++,o.push(a)}},d.prototype.remove=function(a,b){if("string"==typeof a){var c,d,e,f,g,h,i,j,k=this.activeIndexes,m=this.selectors=[],n=this.selectorObjects,o={},p=1===arguments.length;for(e=0,c=l(this.indexes,a);e<c.length;e++)for(d=c[e],f=k.length;f--;)if(h=k[f],d.index.isPrototypeOf(h)){if(i=h.map.get(d.key))for(g=i.length;g--;)(j=i[g]).selector===a&&(p||j.data===b)&&(i.splice(g,1),o[j.id]=!0);break}for(e in o)delete n[e],this.size--;for(e in n)m.push(n[e].selector)}},d.prototype.queryAll=function(a){if(!this.selectors.length)return[];var b,c,d,e,f,g,h,i,j={},k=[],l=this.querySelectorAll(this.selectors.join(", "),a);for(b=0,d=l.length;b<d;b++)for(c=0,f=l[b],e=(g=this.matches(f)).length;c<e;c++)j[(i=g[c]).id]?h=j[i.id]:(h={id:i.id,selector:i.selector,data:i.data,elements:[]},j[i.id]=h,k.push(h)),h.elements.push(f);return k.sort(n)},d.prototype.matches=function(a){if(!a)return[];var b,c,d,e,f,g,h,i,j,k,l,m=this.activeIndexes,o={},p=[];for(b=0,e=m.length;b<e;b++)if(i=(h=m[b]).element(a)){for(c=0,f=i.length;c<f;c++)if(j=h.map.get(i[c]))for(d=0,g=j.length;d<g;d++)!o[l=(k=j[d]).id]&&this.matchesSelector(a,k.selector)&&(o[l]=!0,p.push(k))}return p.sort(n)};var o={},p={},q=new WeakMap,r=new WeakMap,s=new WeakMap,t=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function u(a,b,c){var d=a[b];return a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)},a}function v(){q.set(this,!0)}function w(){q.set(this,!0),r.set(this,!0)}function x(){return s.get(this)||null}function y(a,b){t&&Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:b||t.get})}function z(a){if(function(a){try{return a.eventPhase,!0}catch(b){return!1}}(a)){var b=(1===a.eventPhase?p:o)[a.type];if(b){var c=function(a,b,c){var d=[],e=b;do{if(1!==e.nodeType)break;var f=a.matches(e);if(f.length){var g={node:e,observers:f};c?d.unshift(g):d.push(g)}}while(e=e.parentElement)return d}(b,a.target,1===a.eventPhase);if(c.length){u(a,"stopPropagation",v),u(a,"stopImmediatePropagation",w),y(a,x);for(var d=0,e=c.length;d<e&&!q.get(a);d++){var f=c[d];s.set(a,f.node);for(var g=0,h=f.observers.length;g<h&&!r.get(a);g++)f.observers[g].data.call(f.node,a)}s.delete(a),y(a)}}}}function A(a,b,c){var e=arguments.length>3&& void 0!==arguments[3]?arguments[3]:{},f=!!e.capture,g=f?p:o,h=g[a];h||(h=new d,g[a]=h,document.addEventListener(a,z,f)),h.add(b,c)}function B(a,b,c){return a.dispatchEvent(new CustomEvent(b,{bubbles:!0,cancelable:!0,detail:c}))}},54679(a,b,c){c.d(b,{H:()=>f,v:()=>e});var d=c(59753);function e(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!1)}function f(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!0)}(0,d.on)("deprecatedAjaxError","[data-remote]",function(a){let b=a.detail,{error:c,text:d}=b;a.currentTarget===a.target&&"abort"!==c&&"canceled"!==c&&(/<html/.test(d)?(e(),a.stopImmediatePropagation()):setTimeout(function(){!a.defaultPrevented&&e()},0))}),(0,d.on)("deprecatedAjaxSend","[data-remote]",function(){f()}),(0,d.on)("click",".js-ajax-error-dismiss",function(){f()})},67404(a,b,c){function d(a){return e(a)[0]}function e(a){let b=[];for(let c of f()){let[d,e]=c.trim().split("=");a===d&& void 0!==e&&b.push({key:d,value:e})}return b}function f(){try{return document.cookie.split(";")}catch{return[]}}function g(a,b,c=null,d=!1,e="lax"){let f=document.domain;if(null==f)throw Error("Unable to get document domain");f.endsWith(".github.com")&&(f="github.com");let g="https:"===location.protocol?"; secure":"",h=c?`; expires=${c}`:"";!1===d&&(f=`.${f}`);try{document.cookie=`${a}=${b}; path=/; domain=${f}${h}${g}; samesite=${e}`}catch{}}function h(a,b=!1){let c=document.domain;if(null==c)throw Error("Unable to get document domain");c.endsWith(".github.com")&&(c="github.com");let d=new Date().getTime(),e=new Date(d-1).toUTCString(),f="https:"===location.protocol?"; secure":"",g=`; expires=${e}`;!1===b&&(c=`.${c}`);try{document.cookie=`${a}=''; path=/; domain=${c}${g}${f}`}catch{}}c.d(b,{"$1":()=>e,d8:()=>g,ej:()=>d,kT:()=>h})},54650(a,b,c){c.d(b,{Bt:()=>h,DN:()=>k,KL:()=>n,Se:()=>j,qC:()=>o,sw:()=>l});var d=c(59753),e=c(76177),f=c(54679);function g(a,b,c){return a.dispatchEvent(new CustomEvent(b,{bubbles:!0,cancelable:c}))}function h(a,b){b&&(i(a,b),(0,e.j)(b)),g(a,"submit",!0)&&a.submit()}function i(a,b){if(!(a instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(b instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==b.type)throw TypeError("The specified element is not a submit button.");if(!a||a!==b.form)throw Error("The specified element is not owned by the form element.")}function j(a,b){if("boolean"==typeof b){if(a instanceof HTMLInputElement)a.checked=b;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===a.type)throw TypeError("checkbox can't be set to string value");a.value=b}g(a,"change",!1)}function k(a,b){for(let c in b){let d=b[c],e=a.elements.namedItem(c);e instanceof HTMLInputElement?e.value=d:e instanceof HTMLTextAreaElement&&(e.value=d)}}function l(a){if(!(a instanceof HTMLElement))return!1;let b=a.nodeName.toLowerCase(),c=(a.getAttribute("type")||"").toLowerCase();return"select"===b||"textarea"===b||"input"===b&&"submit"!==c&&"reset"!==c||a.isContentEditable}function m(a){return new URLSearchParams(a)}function n(a,b){let c=new URLSearchParams(a.search),d=m(b);for(let[e,f]of d)c.append(e,f);return c.toString()}function o(a){return m(new FormData(a)).toString()}(0,d.on)("click",".js-remote-submit-button",async function(a){let b=a.currentTarget,c=b.form;a.preventDefault();let d;try{d=await fetch(c.action,{method:c.method,body:new FormData(c),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}d&&!d.ok&&(0,f.v)()})},254(a,b,c){c.d(b,{ZG:()=>h,q6:()=>j,w4:()=>i});var d=c(8439);let e=!1,f=new d.Z;function g(a){let b=a.target;if(b instanceof HTMLElement&&b.nodeType!==Node.DOCUMENT_NODE)for(let c of f.matches(b))c.data.call(null,b)}function h(a,b){e||(e=!0,document.addEventListener("focus",g,!0)),f.add(a,b),document.activeElement instanceof HTMLElement&&document.activeElement.matches(a)&&b(document.activeElement)}function i(a,b,c){function d(b){let e=b.currentTarget;e&&(e.removeEventListener(a,c),e.removeEventListener("blur",d))}h(b,function(b){b.addEventListener(a,c),b.addEventListener("blur",d)})}function j(a,b){function c(a){let{currentTarget:d}=a;d&&(d.removeEventListener("input",b),d.removeEventListener("blur",c))}h(a,function(a){a.addEventListener("input",b),a.addEventListener("blur",c)})}},76177(a,b,c){function d(a){let b=a.closest("form");if(!(b instanceof HTMLFormElement))return;let c=e(b);if(a.name){let d=a.matches("input[type=submit]")?"Submit":"",f=a.value||d;c||((c=document.createElement("input")).type="hidden",c.classList.add("js-submit-button-value"),b.prepend(c)),c.name=a.name,c.value=f}else c&&c.remove()}function e(a){let b=a.querySelector("input.js-submit-button-value");return b instanceof HTMLInputElement?b:null}c.d(b,{j:()=>d,u:()=>e})},8704(a,b,c){c.d(b,{A7:()=>d.A7,ko:()=>d.ko,q1:()=>d.q1});var d=c(53729)},96056(a,b,c){c.d(b,{Hu:()=>l,"_8":()=>i,cj:()=>h});var d=c(69567),e=c(64463);let f="github-mobile-auth-flash";function g(){let a=document.querySelector("#js-flash-container");if(a)for(let b of a.children)!b.classList.contains("js-flash-template")&&b.classList.contains(f)&&a.removeChild(b)}function h(){let a=document.getElementById("github-mobile-authenticate-prompt");a&&(a.hidden=!0);let b=document.getElementById("github-mobile-authenticate-error-and-retry");b&&(b.hidden=!1)}function i(){g();let a=document.getElementById("github-mobile-authenticate-prompt");a&&(a.hidden=!1);let b=document.getElementById("github-mobile-authenticate-error-and-retry");b&&(b.hidden=!0)}function j(a){a&&function(a){let b=new d.R(document.querySelector("template.js-flash-template"),{className:`flash-error ${f}`,message:a}),c=document.importNode(b,!0),e=document.querySelector("#js-flash-container");e&&(g(),e.appendChild(c))}(a),h()}function k(a){return document.getElementById("github-mobile-authenticate-error-and-retry").getAttribute(a)}async function l(a,b,c,d){try{var e,f,g,h;await (e=a.getAttribute("data-poll-url"),f=b,g=c,h=d,async function a(b){if(h&&h())return;let c="STATUS_UNKNOWN",d;try{let i=document.getElementById("github-mobile-authenticate-form"),l=i.querySelector(".js-data-url-csrf"),m=await self.fetch(new Request(e,{method:"POST",body:new FormData(i),mode:"same-origin",headers:{Accept:"application/json","Scoped-CSRF-Token":l.value,"X-Requested-With":"XMLHttpRequest"}}));if(m.ok){let n=await m.json();c=n.status,d=n.token}else c="STATUS_ERROR"}catch{c="STATUS_ERROR"}let o;switch(c){case"STATUS_APPROVED":var p;let q;return f?f():void((q=(p=d)?new URL(`password_reset/${encodeURIComponent(p)}`,window.location.origin):new URL("",window.location.href)).searchParams.set("redirect","true"),window.location.assign(q));case"STATUS_EXPIRED":return o=k("timeout-flash"),g?g(o):j(o);case"STATUS_ACTIVE":case"STATUS_ERROR":case"STATUS_UNKNOWN":break;case"STATUS_REJECTED":return o=k("error-flash"),g?g(o):void document.getElementById("github-mobile-rejected-redirect").click();default:return o=k("error-flash"),g?g(o):j(o)}await new Promise(a=>setTimeout(a,3e3)),a(0)}(0))}catch(i){let l=k("error-flash");return j(l)}}(0,e.N7)(".js-poll-github-mobile-two-factor-authenticate",function(a){l(a)}),(0,e.N7)(".js-poll-github-mobile-verified-device-authenticate",function(a){l(a)}),(0,e.N7)(".js-poll-github-mobile-two-factor-password-reset-authenticate",function(a){l(a)})},98576(a,b,c){c.d(b,{C:()=>h,v:()=>i});var d=c(64463),e=c(254),f=c(65935),g=c(54650);function h(){document.body.classList.add("is-sending"),document.body.classList.remove("is-sent","is-not-sent")}function i(){document.body.classList.add("is-sent"),document.body.classList.remove("is-sending")}(0,f.AC)(".js-send-auth-code",async(a,b)=>{h();let c;try{c=await b.text()}catch(d){var e;(e=d.response.text)&&(document.querySelector(".js-sms-error").textContent=e),document.body.classList.add("is-not-sent"),document.body.classList.remove("is-sending")}c&&i()}),(0,d.N7)(".js-two-factor-sms-fallback-button",function(a){a.addEventListener("toggle",function(a){let b=a.currentTarget;for(let c of b.querySelectorAll(".flash"))c instanceof HTMLElement&&(c.hidden=!0);b.querySelector(".js-configure-sms-fallback").hidden=!1,b.querySelector(".js-verify-sms-fallback").hidden=!0})}),(0,f.AC)(".js-two-factor-set-sms-fallback",async(a,b)=>{let c;try{c=await b.text()}catch(d){let e=a.querySelector(".js-configure-sms-fallback"),f=a.querySelector(".js-verify-sms-fallback"),g=e.hidden?f:e,h=g.querySelector(".flash");switch(d.response.status){case 422:case 429:h.textContent=JSON.parse(d.response.text).error,h.hidden=!1}}if(c)switch(c.status){case 200:case 201:window.location.reload();break;case 202:a.querySelector(".js-configure-sms-fallback").hidden=!0,a.querySelector(".js-verify-sms-fallback").hidden=!1,a.querySelector(".js-fallback-otp").focus()}}),(0,e.q6)(".js-verification-code-input-auto-submit",function(a){let b=a.currentTarget,c=b.pattern||"[0-9]{6}";RegExp(`^(${c})$`).test(b.value)&&(0,g.Bt)(b.form)})},63047(a,b,c){c.d(b,{T:()=>e,k:()=>f});var d=c(8433);function e(){return(0,d.Zh)()?"supported":"unsupported"}async function f(){return await window.PublicKeyCredential?.isUserVerifyingPlatformAuthenticatorAvailable()?"supported":"unsupported"}},5760(a,b,c){var d=c(67404),e=c(64463);(0,e.N7)(".js-transform-notice",{constructor:HTMLElement,add(a){let b=(0,d.$1)("org_transform_notice");for(let c of b){let e=document.createElement("span");try{e.textContent=atob(decodeURIComponent(c.value)),(0,d.kT)(c.key),a.appendChild(e),a.hidden=!1}catch(f){}return}}}),c(98576),c(96056);var f=c(63047),g=c(8433),h=c(54650);async function i(){let a=document.querySelector(".js-conditional-webauthn-placeholder"),b=await globalThis.PublicKeyCredential?.isConditionalMediationAvailable?.();if(a&&b){document.querySelector("#login_field")?.setAttribute("autocomplete","username webauthn");let c=a.getAttribute("data-webauthn-sign-request");if(!c)return;let d=JSON.parse(c),e=await (0,g.U2)((0,g.wz)(d)),f=a.querySelector(".js-webauthn-response");f.value=JSON.stringify(e),(0,h.Bt)(a)}}(0,e.N7)(".js-webauthn-support",{constructor:HTMLInputElement,add(a){(0,h.Se)(a,(0,f.T)())}}),(0,e.N7)(".js-webauthn-iuvpaa-support",{constructor:HTMLInputElement,async add(a){(0,h.Se)(a,await (0,f.k)())}}),(0,e.N7)(".js-conditional-webauthn-placeholder",function(){i()});var j=c(254),k=c(8704);let l=window.location.hostname.split(".")[0];(0,j.q6)(".js-login-field",function(a){let b=a.target,c=b.closest("form");if(!c)return;let d=c.querySelector(".js-password-field"),e=c.querySelector(".js-sign-in-button");if(!d||!e)return;let f=b.value,g=["pj_nitin","up_the_irons"],h=()=>!(0,k.ko)();h()&&f.includes("_")&&!f.includes("@")&&!g.includes(f)&&!f.endsWith("_admin")&&!(e.getAttribute("development")&&(f.endsWith("_fab")||"github"!==l))?(d.setAttribute("disabled","true"),e.value=e.getAttribute("data-sso-label")||" "):(d.removeAttribute("disabled"),e.value=e.getAttribute("data-signin-label")||" ")})},53729(a,b,c){c.d(b,{A7:()=>i,ko:()=>h,q1:()=>g});var d=c(15205),e=c(86283);let f=(0,d.Z)(function(){return e.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),g=(0,d.Z)(function(){return e.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}),h=(0,d.Z)(function(){return"enterprise"===f()}),i="webpack"},86283(a,b,c){c.d(b,{Qg:()=>d.Qg,iG:()=>e.iG,jX:()=>e.jX,n4:()=>e.n4,yF:()=>d.yF});var d=c(35647),e=c(73614)},73614(a,b,c){c.d(b,{iG:()=>e,jX:()=>f,n4:()=>d});let d="undefined"==typeof document?void 0:document,e="undefined"==typeof window?void 0:window,f="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647(a,b,c){c.d(b,{Qg:()=>f,yF:()=>g});var d=c(73614);let e=void 0===d.n4,f=!e;function g(){return!!e||Boolean(d.n4.querySelector('react-app[data-ssr="true"]'))}},15205(a,b,c){function d(...a){return JSON.stringify(a,(a,b)=>"object"==typeof b?b:String(b))}function e(a,b={}){let{hash:c=d,cache:e=new Map}=b;return function(...b){let d=c.apply(this,b);if(e.has(d))return e.get(d);let f=a.apply(this,b);return f instanceof Promise&&(f=f.catch(a=>{throw e.delete(d),a})),e.set(d,f),f}}c.d(b,{Z:()=>e})}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_github_template-parts_lib_-273494"],()=>b(5760));var c=a.O()}])
//# sourceMappingURL=sessions-874445d6dbaf.js.map