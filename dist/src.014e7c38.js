parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=[{type:"title",value:"Hello World from JS!"},{type:"text",value:"here we go with some text"},{type:"columns",value:["111111111","111111111","111222323"]},{type:"image",value:"./assets/image.png"}];exports.model=e;
},{}],"ZLZB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateImageBlock=exports.generateRowBlock=exports.generateTextBlock=exports.generateTitleBlock=void 0;var e=function(e){return'<div class="row">\n            <div class="col-sm">\n                <h1>'.concat(e.value,"</h1>\n            </div>\n          </div>")};exports.generateTitleBlock=e;var n=function(e){return'<div class="row">\n            <div class="col-sm">\n                <p>'.concat(e.value,"</p>\n            </div>\n        </div>")};exports.generateTextBlock=n;var o=function(e){var n=e.value.map(function(e){return'<div class="col-sm">\n                <p>'.concat(e,"</p>\n            </div>")});return'\n        <div class="row">\n            '.concat(n.join(""),"\n        </div>\n    ")};exports.generateRowBlock=o;var r=function(e){return'\n        <div class="row">\n            <img src="'.concat(e.value,'"/>\n        </div>\n        ')};exports.generateImageBlock=r;
},{}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./model"),t=require("./_templates");require("./styles/main.css");var r=document.querySelector("#site");e.model.forEach(function(e){var a="";"title"===e.type?a=(0,t.generateTitleBlock)(e):"text"===e.type?a=(0,t.generateTextBlock)(e):"columns"===e.type?a=(0,t.generateRowBlock)(e):"image"===e.type&&(a=(0,t.generateImageBlock)(e)),r.insertAdjacentHTML("beforeend",a)});
},{"./model":"JDu1","./templates":"ZLZB","./styles/main.css":"jExt"}]},{},["Focm"], null)