import{F as r,_ as e,g as t}from"./Fetch-70cfbb96.js";class n extends r{constructor(r){super(r)}GetMakesForManufacturerAndYear(r,n){return e(this,void 0,void 0,(function*(){const e="GetMakesForManufacturerAndYear",s=t(r);if("string"!==s&&"number"!==s)return Promise.reject(new Error(`${e}, "manufacturer" argument is required and must be of type string or number, got: `+`<${s}> ${r}`));const o=t(n);if("object"!==o)return Promise.reject(new Error(`${e}, "params" argument is required and must be of type object, got: `+`<${o}> ${n}`));const i=t(n.year);if("number"!==i)return Promise.reject(new Error(`${e}, "params.year" argument is required and must be of type number, got: `+`<${i}> ${n.year}`));const u=yield this.buildQueryString(n).catch(r=>Promise.reject(new Error(`${e}, Error building query string: ${r}`))),a=`${this.baseUrl}/${e}/${r}${u}`;return yield this.get(a).then(r=>r).catch(r=>Promise.reject(new Error(`${e}, Fetch.get() error: ${r}`)))}))}}export{n as GetMakesForManufacturerAndYear};
//# sourceMappingURL=GetMakesForManufacturerAndYear.js.map
