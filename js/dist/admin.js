(()=>{var a={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},d:(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},e={};(()=>{"use strict";a.r(e);const r=flarum.core.compat["admin/app"];var t=a.n(r);t().initializers.add("nearata-ajax-chat",(function(){t().extensionData.for("nearata-ajax-chat").registerPermission({icon:"fas fa-eye",label:t().translator.trans("nearata-ajax-chat.admin.permissions.view"),permission:"nearata-ajax-chat.view"},"view").registerPermission({icon:"fas fa-plus",label:t().translator.trans("nearata-ajax-chat.admin.permissions.create"),permission:"nearata-ajax-chat.create"},"view").registerPermission({icon:"fas fa-edit",label:t().translator.trans("nearata-ajax-chat.admin.permissions.edit"),permission:"nearata-ajax-chat.edit"},"view").registerPermission({icon:"fas fa-trash",label:t().translator.trans("nearata-ajax-chat.admin.permissions.delete"),permission:"nearata-ajax-chat.delete"},"view")}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map