/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var n=r(288).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),c=new A(n||[]);return i(a,"_invoke",{value:L(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d={};function m(){}function v(){}function y(){}var g={};h(g,s,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(C([])));w&&w!==r&&a.call(w,s)&&(g=w);var b=y.prototype=m.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,c,s){var u=p(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==n(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function C(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=y,i(b,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=h(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},j(_.prototype),h(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(b),h(b,l,"Generator"),h(b,s,(function(){return this})),h(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var n=r(648)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";function t(e,r){return t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},t(e,r)}function e(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,t(e,r)}function o(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}r.r(n),r.d(n,{extend:()=>z});var a=r(357),i=r.n(a);const c=flarum.core.compat["forum/app"];var s=r.n(c),u=function(){function t(){this.loading=void 0,this.data=void 0,this.needsFocus=void 0,this.loading=!0,this.data=[],this.needsFocus=!1}var e=t.prototype;return e.load=function(){var t,e=(t=i().mark((function t(e){var r,n=this;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===e&&(e=0),this.loading=!0,m.redraw(),r={page:{offset:e}},t.next=6,s().store.find("ajaxChat",r).then((function(t){n.data=[].concat(t),n.needsFocus=!0})).catch((function(t){return console.error(t)})).finally((function(){n.loading=!1,m.redraw()}));case 6:case"end":return t.stop()}}),t,this)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function c(t){o(i,n,a,c,s,"next",t)}function s(t){o(i,n,a,c,s,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}(),e.refresh=function(){this.data=s().store.all("ajaxChat"),this.needsFocus=!0,m.redraw()},t}();const l=flarum.core.compat["common/Component"];var h=r.n(l);const f=flarum.core.compat["common/components/Button"];var p=r.n(f);const d=flarum.core.compat["common/utils/Stream"];var v=r.n(d),y=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state=void 0,e.content=void 0,e}e(r,t);var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state=e.attrs.state,this.content=v()("")},n.view=function(t){return m("div",{class:"ChatComposer"},m("input",{type:"text",name:"content",bidi:this.content}),m(p(),{onclick:this.onClick.bind(this)},"Send"))},n.onClick=function(t){var e=this;t.preventDefault(),s().store.createRecord("ajaxChat").save({content:this.content()}).then((function(t){e.content(""),e.state.refresh()})).catch((function(t){return console.error(t)}))},r}(h());const g=flarum.core.compat["common/components/Link"];var x=r.n(g);const w=flarum.core.compat["common/helpers/avatar"];var b=r.n(w);const j=flarum.core.compat["common/helpers/humanTime"];var _=r.n(j);const L=flarum.core.compat["common/helpers/userOnline"];var O=r.n(L);const E=flarum.core.compat["common/helpers/username"];var S=r.n(E),A=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).message=void 0,e}e(r,t);var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.message=e.attrs.message},n.view=function(t){return m("div",{class:"NearataAjaxChat ChatMessage"},m("div",{class:"avatar"},b()(this.message.user())),m("div",{class:"body"},m("header",null,m("div",{class:"online"},O()(this.message.user())),m(x(),{href:s().route.user(this.message.user())},S()(this.message.user())),m("div",{class:"createdAt"},_()(this.message.createdAt()))),m("main",null,m("div",{class:"content"},this.message.content()))))},r}(h());const C=flarum.core.compat["common/components/Placeholder"];var P=r.n(C),k=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state=void 0,e}e(r,t);var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state=e.attrs.state},n.onupdate=function(e){var r;t.prototype.onupdate.call(this,e),this.state.needsFocus&&(this.state.needsFocus=!1,null==(r=this.element.lastElementChild)||r.scrollIntoView({behavior:"smooth",block:"nearest"}))},n.view=function(t){return m("div",{class:"NearataAjaxChat ChatList"},!this.state.loading&&!this.state.data.length&&m(P(),{text:s().translator.trans("nearata-ajax-chat.forum.chat.placeholder_label")}),this.state.data.sort((function(t,e){return t.createdAt()-e.createdAt()})).map((function(t){return m(A,{message:t})})))},r}(h());const F=flarum.core.compat["common/components/LoadingIndicator"];var N=r.n(F),T=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state=void 0,e}e(r,t);var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state=new u,this.state.load()},n.view=function(t){return m("div",{class:"NearataAjaxChat container"},m("div",{class:"Chat"},m("div",{class:"heading"},s().translator.trans("nearata-ajax-chat.forum.chat.label")),m(k,{state:this.state}),this.state.loading&&m(N(),null),s().session.user.attribute("nearata-ajax-chat.canCreate")&&m(y,{state:this.state})))},r}(h());const M=flarum.core.compat["common/extend"],G=flarum.core.compat["forum/components/IndexPage"];var I=r.n(G);const R=flarum.core.compat["common/Model"];var D=r.n(R),V=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).content=D().attribute("content"),e.createdAt=D().attribute("createdAt",D().transformDate),e.updatedAt=D().attribute("updatedAt",D().transformDate),e}return e(r,t),r.prototype.user=function(){return D().hasOne("user").call(this)},r}(D());const Y=flarum.core.compat["common/extenders"],z=[(new(r.n(Y)().Store)).add("ajaxChat",V)];s().initializers.add("nearata-ajax-chat",(function(){(0,M.override)(I().prototype,"hero",(function(t){var e;return null!=(e=s().session.user)&&e.attribute("nearata-ajax-chat.canView")?[t(),m(T,null)]:t()}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map