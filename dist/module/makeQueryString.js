function e(e){void 0===e&&(e={});if("[object Object]"!==Object.prototype.toString.call(e))return Promise.reject(new Error("queryString(params) - expected params in the form of an object , got: "+e));var r=Object.entries(e),t=r.length;if(t<1)return Promise.resolve("");var o=!1,n=r.map((function(e,r){var n=e[0],i=e[1],c="",a="",m=typeof i;if(i&&"number"===m&&(i=i.toString()),i&&("string"===m||"number"===m))return""===i||o||(c="?",o=!0),r<t-1&&(a="&"),""+c+n+"="+i+a}));return Promise.resolve(encodeURI(n.join("")))}export{e as makeQueryString};
//# sourceMappingURL=makeQueryString.js.map
