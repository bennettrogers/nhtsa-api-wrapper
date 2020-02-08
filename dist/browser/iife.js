var NHTSA=function(r,e){"use strict";function t(r){var e=Object.prototype.toString.call(r).toLowerCase();return e.slice(8,e.length-1)}e=e&&e.hasOwnProperty("default")?e.default:e;var n=function(r,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])})(r,e)};function i(r,e){function t(){this.constructor=r}n(r,e),r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var o=function(){return(o=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r}).apply(this,arguments)};function u(r,e,t,n){return new(t||(t=Promise))((function(i,o){function u(r){try{c(n.next(r))}catch(r){o(r)}}function s(r){try{c(n.throw(r))}catch(r){o(r)}}function c(r){r.done?i(r.value):new t((function(e){e(r.value)})).then(u,s)}c((n=n.apply(r,e||[])).next())}))}function s(r,e){var t,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(r,u)}catch(r){o=[6,r],n=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function c(r){void 0===r&&(r={});if("[object Object]"!==Object.prototype.toString.call(r))return Promise.reject(new Error("queryString(params) - expected params in the form of an object , got: "+r));var e=Object.entries(r),t=e.length;if(t<1)return Promise.resolve("");var n=!1,i=e.map((function(r,e){var i=r[0],o=r[1],u="",s="",c=typeof o;if(o&&"number"===c&&(o=o.toString()),o&&("string"===c||"number"===c))return""===o||n||(u="?",n=!0),e<t-1&&(s="&"),""+u+i+"="+o+s}));return Promise.resolve(encodeURI(i.join("")))}var a={apiResponseFormat:"json",baseUrl:"https://vpic.nhtsa.dot.gov/api/vehicles"},l=function(){function r(r){var e;e="object"===t(r)?o(o({},a),r):o({},a),this.apiResponseFormat="json",this.baseUrl=e.baseUrl,this.config=e}return r.prototype.buildQueryString=function(r){return u(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,c(r=r&&"object"===t(r)?o(o({},r),{format:this.apiResponseFormat}):{format:this.apiResponseFormat})];case 1:return[2,e.sent()]}}))}))},r.prototype.get=function(r){return u(this,void 0,void 0,(function(){var n,i,u;return s(this,(function(s){switch(s.label){case 0:return"string"!==t(r)?[2,Promise.reject(new Error("Fetch.get(url) - url argument must be of type string"))]:[4,e(r).then((function(r){var e,t,n,i;if(!(null===(e=r)||void 0===e?void 0:e.status)||r.status>=400)throw new Error("Bad response from server, code: "+(null===(t=r)||void 0===t?void 0:t.status)+", text: "+(null===(n=r)||void 0===n?void 0:n.statusText)+", headers: "+(null===(i=r)||void 0===i?void 0:i.headers));return r})).catch((function(r){return Promise.reject(new Error("Fetch.get() http error: "+r))}))];case 1:return[4,(n=s.sent()).json()];case 2:return i=s.sent(),u=o(o({},i),{Response:{headers:n.headers,ok:n.ok,redirected:n.redirected,status:n.status,statusText:n.statusText,url:n.url}}),[2,Promise.resolve(u)]}}))}))},r}(),h=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.DecodeVin=function(r,e){return void 0===e&&(e={}),u(this,void 0,void 0,(function(){var n,i,o;return s(this,(function(u){switch(u.label){case 0:return n="DecodeVin","string"!==t(r)?[2,Promise.reject(new Error(n+", vin argument is required and must be a string, got: "+r))]:[4,this.buildQueryString(e).catch((function(r){return Promise.reject(new Error(n+", Error building query string: "+r))}))];case 1:return i=u.sent(),o=this.baseUrl+"/"+n+"/"+r+i,[4,this.get(o).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(n+", Fetch.get() error: "+r))}))];case 2:return[2,u.sent()]}}))}))},e}(l),f=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.DecodeVinValues=function(r,e){return void 0===e&&(e={}),u(this,void 0,void 0,(function(){var n,i,o;return s(this,(function(u){switch(u.label){case 0:return n="DecodeVinValues","string"!==t(r)?[2,Promise.reject(new Error(n+", vin argument is required and must be a string, got: "+r))]:[4,this.buildQueryString(e).catch((function(r){return Promise.reject(new Error(n+", Error building query string: "+r))}))];case 1:return i=u.sent(),o=this.baseUrl+"/"+n+"/"+r+i,[4,this.get(o).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(n+", Fetch.get() error: "+r))}))];case 2:return[2,u.sent()]}}))}))},e}(l),p=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.DecodeVinExtended=function(r,e){return void 0===e&&(e={}),u(this,void 0,void 0,(function(){var n,i,o;return s(this,(function(u){switch(u.label){case 0:return n="DecodeVinExtended","string"!==t(r)?[2,Promise.reject(new Error(n+", vin argument is required and must be a string, got: "+r))]:[4,this.buildQueryString(e).catch((function(r){return Promise.reject(new Error(n+", Error building query string: "+r))}))];case 1:return i=u.sent(),o=this.baseUrl+"/"+n+"/"+r+i,[4,this.get(o).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(n+", Fetch.get() error: "+r))}))];case 2:return[2,u.sent()]}}))}))},e}(l),d=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.DecodeVinValuesExtended=function(r,e){return void 0===e&&(e={}),u(this,void 0,void 0,(function(){var n,i,o;return s(this,(function(u){switch(u.label){case 0:return n="DecodeVinValuesExtended","string"!==t(r)?[2,Promise.reject(new Error(n+", vin argument is required and must be a string, got: "+r))]:[4,this.buildQueryString(e).catch((function(r){return Promise.reject(new Error(n+", Error building query string: "+r))}))];case 1:return i=u.sent(),o=this.baseUrl+"/"+n+"/"+r+i,[4,this.get(o).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(n+", Fetch.get() error: "+r))}))];case 2:return[2,u.sent()]}}))}))},e}(l),g=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.DecodeWMI=function(r){return u(this,void 0,void 0,(function(){var e,n,i;return s(this,(function(o){switch(o.label){case 0:return e="DecodeWMI","string"!==t(r)?[2,Promise.reject(new Error(e+", WMI argument is required and must be a string, got: "+r))]:[4,this.buildQueryString({}).catch((function(r){return Promise.reject(new Error(e+", Error building query string: "+r))}))];case 1:return n=o.sent(),i=this.baseUrl+"/"+e+"/"+r+n,[4,this.get(i).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(e+", Fetch.get() error: "+r))}))];case 2:return[2,o.sent()]}}))}))},e}(l),y=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.GetWMIsForManufacturer=function(r){return u(this,void 0,void 0,(function(){var e,n,i;return s(this,(function(o){switch(o.label){case 0:return e="GetWMIsForManufacturer","string"!==t(r)?[2,Promise.reject(new Error(e+", manufacturer argument is required and must be a string, got: "+r))]:[4,this.buildQueryString({}).catch((function(r){return Promise.reject(new Error(e+", Error building query string: "+r))}))];case 1:return n=o.sent(),i=this.baseUrl+"/"+e+"/"+r+n,[4,this.get(i).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(e+", Fetch.get() error: "+r))}))];case 2:return[2,o.sent()]}}))}))},e}(l),v=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.GetAllMakes=function(){return u(this,void 0,void 0,(function(){var r,e,t;return s(this,(function(n){switch(n.label){case 0:return r="GetAllMakes",[4,this.buildQueryString({}).catch((function(e){return Promise.reject(new Error(r+", Error building query string: "+e))}))];case 1:return e=n.sent(),t=this.baseUrl+"/"+r+e,[4,this.get(t).then((function(r){return r})).catch((function(e){return Promise.reject(new Error(r+", Fetch.get() error: "+e))}))];case 2:return[2,n.sent()]}}))}))},e}(l),b=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.GetParts=function(r){return void 0===r&&(r={}),u(this,void 0,void 0,(function(){var e,t,n;return s(this,(function(i){switch(i.label){case 0:return e="GetParts",[4,this.buildQueryString(r).catch((function(r){return Promise.reject(new Error(e+", Error building query string: "+r))}))];case 1:return t=i.sent(),n=this.baseUrl+"/"+e+t,[4,this.get(n).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(e+", Fetch.get() error: "+r))}))];case 2:return[2,i.sent()]}}))}))},e}(l),m=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.GetAllManufacturers=function(r){return void 0===r&&(r={}),u(this,void 0,void 0,(function(){var e,t,n;return s(this,(function(i){switch(i.label){case 0:return e="GetAllManufacturers",[4,this.buildQueryString(r).catch((function(r){return Promise.reject(new Error(e+", Error building query string: "+r))}))];case 1:return t=i.sent(),n=this.baseUrl+"/"+e+t,[4,this.get(n).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(e+", Fetch.get() error: "+r))}))];case 2:return[2,i.sent()]}}))}))},e}(l),w=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.GetManufacturerDetails=function(r){return u(this,void 0,void 0,(function(){var e,t,n;return s(this,(function(i){switch(i.label){case 0:return e="GetManufacturerDetails",r?[4,this.buildQueryString({}).catch((function(r){return Promise.reject(new Error(e+", Error building query string: "+r))}))]:[2,Promise.reject(new Error(e+", manufacturer argument is required and must be a string or number, got: "+r))];case 1:return t=i.sent(),n=this.baseUrl+"/"+e+"/"+r+t,[4,this.get(n).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(e+", Fetch.get() error: "+r))}))];case 2:return[2,i.sent()]}}))}))},e}(l),E=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.GetMakeForManufacturer=function(r){return u(this,void 0,void 0,(function(){var e,t,n;return s(this,(function(i){switch(i.label){case 0:return e="GetMakeForManufacturer",r?[4,this.buildQueryString({}).catch((function(r){return Promise.reject(new Error(e+", Error building query string: "+r))}))]:[2,Promise.reject(new Error(e+", manufacturer argument is required and must be a string or number, got: "+r))];case 1:return t=i.sent(),n=this.baseUrl+"/"+e+"/"+r+t,[4,this.get(n).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(e+", Fetch.get() error: "+r))}))];case 2:return[2,i.sent()]}}))}))},e}(l),j=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.GetMakesForManufacturerAndYear=function(r,e){return void 0===e&&(e={year:void 0}),u(this,void 0,void 0,(function(){var t,n,i;return s(this,(function(o){switch(o.label){case 0:return t="GetMakesForManufacturerAndYear",r?e.year?[4,this.buildQueryString(e).catch((function(r){return Promise.reject(new Error(t+", Error building query string: "+r))}))]:[2,Promise.reject(new Error(t+", please provide a valid year parameter, either a number or string, got params.year: "+e.year))]:[2,Promise.reject(new Error(t+", please provide a valid manufacturer arg, either a number or string, got: "+r))];case 1:return n=o.sent(),i=this.baseUrl+"/"+t+"/"+r+n,[4,this.get(i).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(t+", Fetch.get() error: "+r))}))];case 2:return[2,o.sent()]}}))}))},e}(l),P=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.GetMakesForVehicleType=function(r){return u(this,void 0,void 0,(function(){var e,n,i;return s(this,(function(o){switch(o.label){case 0:return e="GetMakesForVehicleType","string"!==t(r)?[2,Promise.reject(new Error(e+", typeName is required and must be a string, got: "+r))]:[4,this.buildQueryString({}).catch((function(r){return Promise.reject(new Error(e+", Error building query string: "+r))}))];case 1:return n=o.sent(),i=this.baseUrl+"/"+e+"/"+r+n,[4,this.get(i).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(e+", Fetch.get() error: "+r))}))];case 2:return[2,o.sent()]}}))}))},e}(l),M=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.GetVehicleTypesForMake=function(r){return u(this,void 0,void 0,(function(){var e,n,i;return s(this,(function(o){switch(o.label){case 0:return e="GetVehicleTypesForMake","string"!==t(r)?[2,Promise.reject(new Error(e+", makeName is required and must be a string, got: "+r))]:[4,this.buildQueryString({}).catch((function(r){return Promise.reject(new Error(e+", Error building query string: "+r))}))];case 1:return n=o.sent(),i=this.baseUrl+"/"+e+"/"+r+n,[4,this.get(i).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(e+", Fetch.get() error: "+r))}))];case 2:return[2,o.sent()]}}))}))},e}(l),F=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return i(e,r),e.prototype.GetVehicleTypesForMakeId=function(r){return u(this,void 0,void 0,(function(){var e,n,i;return s(this,(function(o){switch(o.label){case 0:return e="GetVehicleTypesForMakeId","number"!==t(r)?[2,Promise.reject(new Error(e+", makeID is required and must be a number, got: "+r))]:[4,this.buildQueryString({}).catch((function(r){return Promise.reject(new Error(e+", Error building query string: "+r))}))];case 1:return n=o.sent(),i=this.baseUrl+"/"+e+"/"+r+n,[4,this.get(i).then((function(r){return r})).catch((function(r){return Promise.reject(new Error(e+", Fetch.get() error: "+r))}))];case 2:return[2,o.sent()]}}))}))},e}(l),G=function(r){function e(e){var t=r.call(this,e)||this;return t.DecodeVin=h.prototype.DecodeVin,t.DecodeVinValues=f.prototype.DecodeVinValues,t.DecodeVinExtended=p.prototype.DecodeVinExtended,t.DecodeVinValuesExtended=d.prototype.DecodeVinValuesExtended,t.DecodeWMI=g.prototype.DecodeWMI,t.GetWMIsForManufacturer=y.prototype.GetWMIsForManufacturer,t.GetAllMakes=v.prototype.GetAllMakes,t.GetParts=b.prototype.GetParts,t.GetAllManufacturers=m.prototype.GetAllManufacturers,t.GetManufacturerDetails=w.prototype.GetManufacturerDetails,t.GetMakeForManufacturer=E.prototype.GetMakeForManufacturer,t.GetMakesForManufacturerAndYear=j.prototype.GetMakesForManufacturerAndYear,t.GetMakesForVehicleType=P.prototype.GetMakesForVehicleType,t.GetVehicleTypesForMake=M.prototype.GetVehicleTypesForMake,t.GetVehicleTypesForMakeId=F.prototype.GetVehicleTypesForMakeId,t}return i(e,r),e}(l),V=new G;return r.Client=V,r.NHTSA=G,r.getTypeof=t,r.isValidType=function(r){var e;return u(this,void 0,void 0,(function(){var t,n,i;return s(this,(function(o){return"string"==typeof(null===(e=r)||void 0===e?void 0:e.type)&&r.value?(t=r.type.toLowerCase(),n="[object "+t+"]",i=Object.prototype.toString.call(r.value).toLowerCase(),[2,Promise.resolve(n===i)]):[2,Promise.resolve(!1)]}))}))},r.isValidVin=function(r){return u(this,void 0,void 0,(function(){var e,t,n,i,o,u;return s(this,(function(s){return"string"!=typeof r||17!=r.length?[2,Promise.resolve(!1)]:(r=r.toUpperCase(),e=r.split(""),t=e[8],isNaN(parseInt(t))&&"X"!==t?[2,Promise.resolve(!1)]:(n="X"===t?10:parseInt(t),i={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9},o=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],u=e.map((function(r,e){return(isNaN(parseInt(r))?i[r]:parseInt(r))*o[e]})).reduce((function(r,e){return r+e}),0)%11,[2,Promise.resolve(u===n)]))}))}))},r.makeQueryString=c,r}({},fetch);
//# sourceMappingURL=iife.js.map