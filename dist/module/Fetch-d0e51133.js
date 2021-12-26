/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,r,n){return new(r||(r=Promise))((function(s,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function u(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}c((n=n.apply(e,t||[])).next())}))}function t(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var r=t(Object.freeze({__proto__:null,default:function(e,t){return t=t||{},new Promise((function(r,n){var s=new XMLHttpRequest,o=[],i=[],u={},c=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:c,headers:{keys:function(){return o},entries:function(){return i},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var a in s.open(t.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,r){o.push(t=t.toLowerCase()),i.push([t,r]),u[t]=u[t]?u[t]+","+r:r})),r(c())},s.onerror=n,s.withCredentials="include"==t.credentials,t.headers)s.setRequestHeader(a,t.headers[a]);s.send(t.body||null)}))}}));function n(e){const t=Object.prototype.toString.call(e).toLowerCase();return t.slice(8,t.length-1)}self.fetch||(self.fetch=r.default||r);const s={apiResponseFormat:"json",baseUrl:"https://vpic.nhtsa.dot.gov/api/vehicles",options:{}};class o{constructor(e){let t;t=e&&"object"===n(e)?Object.assign(Object.assign(Object.assign({},s),e),{options:Object.assign(Object.assign({},s.options),e.options)}):Object.assign({},s),this.apiResponseFormat="json",this.baseUrl=t.baseUrl,this.options=t.options}buildQueryString(t,r=!1){return e(this,void 0,void 0,(function*(){return t=t&&"object"===n(t)?Object.assign(Object.assign({},t),{format:this.apiResponseFormat}):{format:this.apiResponseFormat},yield function(e={},t=!1){if("object"!==n(e))return Promise.reject(new Error(`queryString(params) - expected params in the form of an object, got: ${e}`));const r=Object.entries(e),s=r.length;if(s<1)return Promise.resolve("");let o=!1;const i=r.map((([e,r],i)=>{let u="",c="";const a=n(r);if(r&&"number"===a&&(r=r.toString()),(r||t)&&("string"===a||"number"===a))return o||(u="?",o=!0),i<s-1&&(c="&"),`${u}${e}=${r}${c}`}));return Promise.resolve(encodeURI(i.join("")))}(t,r)}))}get(t,r={}){return e(this,void 0,void 0,(function*(){const e=n(t);if("string"!==e)return Promise.reject(new Error(`Fetch.get(url) - url argument must be of type string, got: ${e}`));const s=n(r);if("object"!==s)return Promise.reject(new Error(`Fetch.get(url, options) - options argument must be of type object, got: ${s}`));const o=Object.assign(Object.assign({},this.options),r),i=yield fetch(t,o).then((e=>{if(!(null==e?void 0:e.status)||e.status>=400)throw new Error(`Bad response from server, code: ${null==e?void 0:e.status}, text: ${null==e?void 0:e.statusText}, headers: ${null==e?void 0:e.headers}`);return e})).catch((e=>Promise.reject(new Error(`Fetch.get() http error: ${e}`)))),u=yield i.json().then((e=>e)),c=Object.assign(Object.assign({},u),{FetchResponse:{headers:i.headers,ok:i.ok,redirected:i.redirected,status:i.status,statusText:i.statusText,url:i.url}});return Promise.resolve(c)}))}}export{o as F,e as _,n as g};
//# sourceMappingURL=Fetch-d0e51133.js.map
