import{F as e,_ as r,g as t}from"./Fetch-d0e51133.js";class s extends e{constructor(e){super(e)}GetVehicleTypesForMakeId(e){return r(this,void 0,void 0,(function*(){const r="GetVehicleTypesForMakeId",s=t(e);if("number"!==s)return Promise.reject(new Error(`${r}, "makeId" argument is required and must be of type number, got: <${s}> ${e}`));const i=yield this.buildQueryString().catch((e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`)))),o=`${this.baseUrl}/${r}/${e}${i}`;return yield this.get(o).then((e=>e)).catch((e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`))))}))}}export{s as GetVehicleTypesForMakeId};
//# sourceMappingURL=GetVehicleTypesForMakeId.js.map
