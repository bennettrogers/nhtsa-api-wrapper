import{F as r,_ as e,g as t}from"./Fetch-70cfbb96.js";class s extends r{constructor(r){super(r)}GetManufacturerDetails(r){return e(this,void 0,void 0,(function*(){const e="GetManufacturerDetails",s=t(r);if("string"!==s&&"number"!==s)return Promise.reject(new Error(`${e}, "manufacturer" argument is required and must be of type string or number, got: `+`<${s}> ${r}`));const i=yield this.buildQueryString().catch(r=>Promise.reject(new Error(`${e}, Error building query string: ${r}`))),n=`${this.baseUrl}/${e}/${r}${i}`;return yield this.get(n).then(r=>r).catch(r=>Promise.reject(new Error(`${e}, Fetch.get() error: ${r}`)))}))}}export{s as GetManufacturerDetails};
//# sourceMappingURL=GetManufacturerDetails.js.map
