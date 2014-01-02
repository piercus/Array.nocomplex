/**
 * almond 0.2.7 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * Array.nocomplex version: "0.0.4" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/Array.nocomplex for details
 */

!function(){var r,n,t;!function(e){function o(r,n){return A.call(r,n)}function i(r,n){var t,e,o,i,s,u,a,f,c,h,p=n&&n.split("/"),l=v.map,m=l&&l["*"]||{};if(r&&"."===r.charAt(0))if(n){for(p=p.slice(0,p.length-1),r=p.concat(r.split("/")),f=0;f<r.length;f+=1)if(h=r[f],"."===h)r.splice(f,1),f-=1;else if(".."===h){if(1===f&&(".."===r[2]||".."===r[0]))break;f>0&&(r.splice(f-1,2),f-=2)}r=r.join("/")}else 0===r.indexOf("./")&&(r=r.substring(2));if((p||m)&&l){for(t=r.split("/"),f=t.length;f>0;f-=1){if(e=t.slice(0,f).join("/"),p)for(c=p.length;c>0;c-=1)if(o=l[p.slice(0,c).join("/")],o&&(o=o[e])){i=o,s=f;break}if(i)break;!u&&m&&m[e]&&(u=m[e],a=f)}!i&&u&&(i=u,s=a),i&&(t.splice(0,s,i),r=t.join("/"))}return r}function s(r,n){return function(){return l.apply(e,w.call(arguments,0).concat([r,n]))}}function u(r){return function(n){return i(n,r)}}function a(r){return function(n){d[r]=n}}function f(r){if(o(g,r)){var n=g[r];delete g[r],x[r]=!0,p.apply(e,n)}if(!o(d,r)&&!o(x,r))throw new Error("No "+r);return d[r]}function c(r){var n,t=r?r.indexOf("!"):-1;return t>-1&&(n=r.substring(0,t),r=r.substring(t+1,r.length)),[n,r]}function h(r){return function(){return v&&v.config&&v.config[r]||{}}}var p,l,m,y,d={},g={},v={},x={},A=Object.prototype.hasOwnProperty,w=[].slice;m=function(r,n){var t,e=c(r),o=e[0];return r=e[1],o&&(o=i(o,n),t=f(o)),o?r=t&&t.normalize?t.normalize(r,u(n)):i(r,n):(r=i(r,n),e=c(r),o=e[0],r=e[1],o&&(t=f(o))),{f:o?o+"!"+r:r,n:r,pr:o,p:t}},y={require:function(r){return s(r)},exports:function(r){var n=d[r];return"undefined"!=typeof n?n:d[r]={}},module:function(r){return{id:r,uri:"",exports:d[r],config:h(r)}}},p=function(r,n,t,i){var u,c,h,p,l,v,A=[],w=typeof t;if(i=i||r,"undefined"===w||"function"===w){for(n=!n.length&&t.length?["require","exports","module"]:n,l=0;l<n.length;l+=1)if(p=m(n[l],i),c=p.f,"require"===c)A[l]=y.require(r);else if("exports"===c)A[l]=y.exports(r),v=!0;else if("module"===c)u=A[l]=y.module(r);else if(o(d,c)||o(g,c)||o(x,c))A[l]=f(c);else{if(!p.p)throw new Error(r+" missing "+c);p.p.load(p.n,s(i,!0),a(c),{}),A[l]=d[c]}h=t?t.apply(d[r],A):void 0,r&&(u&&u.exports!==e&&u.exports!==d[r]?d[r]=u.exports:h===e&&v||(d[r]=h))}else r&&(d[r]=t)},r=n=l=function(r,n,t,o,i){return"string"==typeof r?y[r]?y[r](n):f(m(r,n).f):(r.splice||(v=r,n.splice?(r=n,n=t,t=null):r=e),n=n||function(){},"function"==typeof t&&(t=o,o=i),o?p(e,r,n,t):setTimeout(function(){p(e,r,n,t)},4),l)},l.config=function(r){return v=r,v.deps&&l(v.deps,v.callback),l},r._defined=d,t=function(r,n,t){n.splice||(t=n,n=[]),o(d,r)||o(g,r)||(g[r]=[r,n,t])},t.amd={jQuery:!0}}(),t("bower_components/almond/almond",function(){}),t("Array.nocomplex/collect",[],function(){Array.prototype.collect=function(r){var n=[];if("string"==typeof r)for(var t=-1,e=this.length;++t<e;)n.push(this[t][r]);else for(var t=-1,e=this.length;++t<e;)n.push(r(this[t]));return n}}),t("Array.nocomplex/each",[],function(){Array.prototype.each=function(r){for(var n=0,t=this.length;t>n;n++)r(this[n],n);return this}}),t("Array.nocomplex/first",[],function(){Array.prototype.first=function(r){for(var n=0,t=this.length;t>n;n++)if(r(this[n]))return this[n];return null}}),t("Array.nocomplex/has",[],function(){Array.prototype.has=function(r){for(var n=this.length;n--;)if(this[n]===r)return!0;return!1}}),t("Array.nocomplex/last",[],function(){Array.prototype.last=function(){return this[this.length-1]}}),t("Array.nocomplex/map",[],function(){Array.prototype.map=Array.prototype.map||function(r,n){n&&(r=r.bind(n));var t=this.slice();if("function"==typeof r)for(var e=0,o=t.length;o>e;e++)t[e]=r(t[e],e);else{r=r.substr(2,r.length);for(var e=0,o=t.length;o>e;e++)t[e]=t[e][r]()}return t}}),t("Array.nocomplex/onEls",[],function(){Array.prototype.onEls=function(r){for(var n=this.length;n--;)this[n]=r(this[n],n);return this}}),t("Array.nocomplex/remove",[],function(){Array.prototype.remove=function(r){for(var n=this.length;n--;)this[n]===r&&this.splice(n,1);return this}}),t("Array.nocomplex/removeOneValue",[],function(){Array.prototype.removeOneValue=function(r){for(var n=this.length;n--;)if(this[n]===r)return this.splice(n,1)}}),t("Array.nocomplex/except",[],function(){Array.prototype.except=function(r){for(var n=[],t=0,e=this.length;e>t;t++)this[t]!==r&&n.push(this[t]);return n}}),t("Array.nocomplex/exceptFn",[],function(){Array.prototype.exceptFn=function(r){for(var n=this.slice(),t=n.length;t--;)r(n[t])&&n.splice(t,1);return n}}),t("Array.nocomplex/indexOf",[],function(){Array.prototype.indexOf=Array.prototype.indexOf||function(r){var n,t;for(n=0,t=this.length;t>n;n++)if(this[n]===r)return n;return-1}}),t("Array.nocomplex/isIn",["./has"],function(){Array.prototype.isIn=function(r){for(var n=this.length;n--;)if(!r.has(this[n]))return!1;return!0}}),t("Array.nocomplex/send",[],function(){Array.prototype.send=function(r){var n=Array.prototype.slice.call(arguments);if(n.splice(0,1),"string"==typeof r)for(var t=-1,e=this.length;++t<e;)this[t]&&this[t][r].apply(this[t],n);else for(var t=-1,e=this.length;++t<e;)r.apply({},[this[t]].concat(n));return this}}),t("Array.nocomplex/uniq",["./has"],function(){Array.prototype.uniq=function(r){if(r){for(var n=[],t=[],e=0,o=this.length;o>e;e++){var i=r(this[e]);t.has(i)||(n.push(this[e]),t.push(i))}return n}for(var n=[],e=this.length;e--;)!n.has(this[e])&&n.push(this[e]);return n}}),t("Array.nocomplex/equals",["./isIn"],function(){Array.prototype.equals=function(r){return this.isIn(r)&&r.isIn(this)?!0:!1}}),t("Array.nocomplex/find",[],function(){Array.prototype.find=function(r){for(var n=0,t=this.length;t>n;n++)if(r(this[n],n))return this[n];return!1},Array.prototype.findReverse=function(r){for(var n=this.length;n--;)if(r(this[n],n))return this[n];return!1}}),t("Array.nocomplex/where",[],function(){Array.prototype.where=function(r){for(var n=[],t=0,e=this.length;e>t;t++)r(this[t])&&n.push(this[t]);return n}}),t("Array.nocomplex/findIndexOf",[],function(){Array.prototype.findIndexOf=function(r){for(var n=0,t=this.length;t>n;n++)if(r(this[n],n))return n;return!1}}),t("Array.nocomplex/findByKey",[],function(){Array.prototype.findByKey=function(r,n){for(var t=0,e=this.length;e>t;t++)if(this[t][r]===n)return this[t];return!1}}),t("Array.nocomplex/basics",["./collect","./each","./first","./has","./last","./map","./onEls","./remove","./removeOneValue","./remove","./except","./exceptFn","./indexOf","./isIn","./send","./uniq","./equals","./find","./where","./findIndexOf","./findByKey"],function(){return Array.prototype}),t("Array.nocomplex/math/all",[],function(){var r={equals:function(r){for(var n=this.length;n--;)if(r[n]!==this[n])return!1;return!0},multiply:function(r){var n=[];if("number"==typeof r)for(var t=this.length;t--;)n[t]=this[t]*r;else for(var t=this.length;t--;)n[t]=this[t]*r[t];return n},divide:function(r){var n=[];if("number"==typeof r)for(var t=this.length;t--;)n[t]=this[t]/r;else for(var t=this.length;t--;)n[t]=this[t]/r[t];return n},min:function(r){var n=r?this.map(r):this;return Math.min.apply(null,n)},minMax:function(r){return[this.min(r),this.max(r)]},max:function(r){var n=r?this.map(r):this;return Math.max.apply(null,n)},average:function(){for(var r=0,n=this.length;n--;)r+=this[n];return r/this.length},minus:function(r){var n=[];if("number"==typeof r)for(var t=this.length;t--;)n[t]=this[t]-r;else for(var t=this.length;t--;)n[t]=this[t]-r[t];return n},domain:function(r,n){var t,e,o=n&&"number"==typeof n[0]?n[0]:this.min(),i=n&&"number"==typeof n[1]?n[1]:this.max();return o===i?this.map(function(){return r[0]}):(t=(r[1]-r[0])/(i-o),e=(r[0]*i-r[1]*o)/(i-o),this.multiply(t).add(e))},add:function(r){var n=[];if("number"==typeof r)for(var t=this.length;t--;)n[t]=this[t]+r;else for(var t=this.length;t--;)n[t]=this[t]+r[t];return n},round:function(){for(var r=this.length;r--;)this[r]=Math.round(this[r]);return this},sum:function(r){for(var n=0,t=this.length;t--;)n+=r(t);return n},orth:function(){if(2!=this.length)throw Error;return[-this[1],this[0]]},norm:function(){return Math.sqrt(this.sum(function(r){return r*r}))}};for(var n in r)r.hasOwnProperty(n)&&(Array.prototype[n]=r[n]);return Array.prototype}),t("Array.nocomplex/Array.nocomplex",["./basics","./math/all"],function(){return Array.prototype});var e=function(){this.isNode=!1,this.isBrowser=!1,this.isUnknown=!1,this._exports,this.detect()};e.prototype={detect:function(){"undefined"!=typeof module&&module.exports?this._setAsNode():"undefined"!=typeof window?this._setAsBrowser():this._setAsUnknown()},_setAsNode:function(){this.isNode=!0,this.name="node"},_setAsBrowser:function(){this.isBrowser=!0,this._global=window,this.name="browser"},_setAsUnknown:function(){this.isUnknown=!0,this.name="unknown"},setGlobal:function(r){this._global=r},ifNode:function(r){this.isNode&&r()},ifBrowser:function(r){this.isBrowser&&r()},exports:function(r,n){this.isNode?this._global.exports=n:this.isBrowser&&(this._global[r]=n)}};var o,r,i=new e;i.ifNode(function(){o=__dirname,r=n("requirejs"),i.setGlobal(module)}),i.ifBrowser(function(){o="."}),r.config({baseUrl:function(){return"undefined"==typeof t?__dirname:"."}(),shim:{mocha:{exports:"mocha"}},paths:{"Array.nocomplex":".",almond:"bower_components/almond/almond",chai:"bower_components/chai/chai","chai-as-promised":"bower_components/chai-as-promised/lib/chai-as-promised",mocha:"bower_components/mocha/mocha","normalize-css":"bower_components/normalize-css/normalize.css",requirejs:"bower_components/requirejs/require",async:"bower_components/requirejs-plugins/src/async",depend:"bower_components/requirejs-plugins/src/depend",font:"bower_components/requirejs-plugins/src/font",goog:"bower_components/requirejs-plugins/src/goog",image:"bower_components/requirejs-plugins/src/image",json:"bower_components/requirejs-plugins/src/json",mdown:"bower_components/requirejs-plugins/src/mdown",noext:"bower_components/requirejs-plugins/src/noext",propertyParser:"bower_components/requirejs-plugins/src/propertyParser","Markdown.Converter":"bower_components/requirejs-plugins/lib/Markdown.Converter",text:"bower_components/requirejs-plugins/lib/text","sinon-chai":"bower_components/sinon-chai/lib/sinon-chai",sinonjs:"bower_components/sinonjs/sinon"}});var s=!!r._defined,u=s;if(i.ifNode(function(){u=!0}),u){var a=r("Array.nocomplex/Array.nocomplex");i.exports("ArrayNocomplex",a)}else r(["Array.nocomplex/Array.nocomplex"],function(r){i.exports("ArrayNocomplex",r)});t("Array.nocomplex/main",function(){})}();