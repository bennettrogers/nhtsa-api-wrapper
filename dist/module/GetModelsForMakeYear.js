import{F as e,_ as r,g as t}from"./Fetch-86b867a6.js";import"./isValidVin.js";class o extends e{constructor(e){super(e)}GetModelsForMakeYear(e){return r(this,void 0,void 0,(function*(){const r="GetModelsForMakeYear",o=null==e?void 0:e.make,i=null==e?void 0:e.modelYear,s=null==e?void 0:e.vehicleType,n=t(e);if("object"!==n)return Promise.reject(new Error(`${r}, "params" argument must be of type object, got: `+`<${n}> ${e}`));const a=t(o);if("string"!==a)return Promise.reject(new Error(`${r}, "params.make" argument is required and must be of type string, got: `+`<${a}> ${o}`));if(!i&&!s)return Promise.reject(new Error(`${r}, either one of "params.modelYear" or "params.vehicleType" is required, got: `+`${i} | ${s}`));const m=t(i);if(i&&"number"!==m)return Promise.reject(new Error(`${r}, "params.modelYear" must be of type number, got: `+`<${m}> ${i}`));const c=t(s);if(s&&"string"!==c)return Promise.reject(new Error(`${r}, "params.vehicleType" must be of type string, got: `+`<${c}> ${s}`));let $=`${r}/make/${e.make}/`;$+=i&&s?`modelYear/${i}/vehicleType/${s}`:i?`modelYear/${i}`:`vehicleType/${s}`;const u=yield this.buildQueryString().catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),l=`${this.baseUrl}/${$}${u}`;return yield this.get(l).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}export{o as GetModelsForMakeYear};
//# sourceMappingURL=GetModelsForMakeYear.js.map
