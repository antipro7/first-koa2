!function(s){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],u=0,i=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&i.push(l[n][0]),l[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t]);for(p&&p(e);i.length;)i.shift()();return f.push.apply(f,a||[]),c()}function c(){for(var e,t=0;t<f.length;t++){for(var n=f[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==l[a]&&(r=!1)}r&&(f.splice(t--,1),e=u(u.s=n[0]))}return e}var n={},l={1:0},f=[];function u(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=s,u.c=n,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=r;f.push([834,0]),c()}({191:function(e,t,n){"use strict";var r=n(12),o=n.n(r),a=n(1),u=n.n(a);n(4);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=o.a.Footer,y=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,l(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(e,u.a.Component),function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(e,[{key:"render",value:function(){return u.a.createElement(p,{style:{textAlign:"center"}},"Hello World ©2017 Created by hello world")}}]),e}();t.a=y},230:function(e,t,n){"use strict";var r=n(29),o=n.n(r),a=n(12),u=n.n(a),i=n(1),s=n.n(i);n(4),n(248);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=u.a.Header,b=(u.a.Content,u.a.Footer,function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,p(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(e,s.a.Component),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(e,[{key:"render",value:function(){return s.a.createElement(m,null,s.a.createElement("div",{className:"logo"}),s.a.createElement(o.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},s.a.createElement(o.a.Item,{key:"1"},s.a.createElement("a",{href:"/"},"Home")),s.a.createElement(o.a.Item,{key:"2"},s.a.createElement("a",{href:"/admin"},"Admin")),s.a.createElement(o.a.Item,{key:"3"},s.a.createElement("a",{href:"/work"},"Work"))))}}]),e}());t.a=b},250:function(e,t,n){var r={"./af":63,"./af.js":63,"./ar":64,"./ar-dz":65,"./ar-dz.js":65,"./ar-kw":66,"./ar-kw.js":66,"./ar-ly":67,"./ar-ly.js":67,"./ar-ma":68,"./ar-ma.js":68,"./ar-sa":69,"./ar-sa.js":69,"./ar-tn":70,"./ar-tn.js":70,"./ar.js":64,"./az":71,"./az.js":71,"./be":72,"./be.js":72,"./bg":73,"./bg.js":73,"./bm":74,"./bm.js":74,"./bn":75,"./bn.js":75,"./bo":76,"./bo.js":76,"./br":77,"./br.js":77,"./bs":78,"./bs.js":78,"./ca":79,"./ca.js":79,"./cs":80,"./cs.js":80,"./cv":81,"./cv.js":81,"./cy":82,"./cy.js":82,"./da":83,"./da.js":83,"./de":84,"./de-at":85,"./de-at.js":85,"./de-ch":86,"./de-ch.js":86,"./de.js":84,"./dv":87,"./dv.js":87,"./el":88,"./el.js":88,"./en-SG":89,"./en-SG.js":89,"./en-au":90,"./en-au.js":90,"./en-ca":91,"./en-ca.js":91,"./en-gb":92,"./en-gb.js":92,"./en-ie":93,"./en-ie.js":93,"./en-il":94,"./en-il.js":94,"./en-nz":95,"./en-nz.js":95,"./eo":96,"./eo.js":96,"./es":97,"./es-do":98,"./es-do.js":98,"./es-us":99,"./es-us.js":99,"./es.js":97,"./et":100,"./et.js":100,"./eu":101,"./eu.js":101,"./fa":102,"./fa.js":102,"./fi":103,"./fi.js":103,"./fo":104,"./fo.js":104,"./fr":105,"./fr-ca":106,"./fr-ca.js":106,"./fr-ch":107,"./fr-ch.js":107,"./fr.js":105,"./fy":108,"./fy.js":108,"./ga":109,"./ga.js":109,"./gd":110,"./gd.js":110,"./gl":111,"./gl.js":111,"./gom-latn":112,"./gom-latn.js":112,"./gu":113,"./gu.js":113,"./he":114,"./he.js":114,"./hi":115,"./hi.js":115,"./hr":116,"./hr.js":116,"./hu":117,"./hu.js":117,"./hy-am":118,"./hy-am.js":118,"./id":119,"./id.js":119,"./is":120,"./is.js":120,"./it":121,"./it-ch":122,"./it-ch.js":122,"./it.js":121,"./ja":123,"./ja.js":123,"./jv":124,"./jv.js":124,"./ka":125,"./ka.js":125,"./kk":126,"./kk.js":126,"./km":127,"./km.js":127,"./kn":128,"./kn.js":128,"./ko":129,"./ko.js":129,"./ku":130,"./ku.js":130,"./ky":131,"./ky.js":131,"./lb":132,"./lb.js":132,"./lo":133,"./lo.js":133,"./lt":134,"./lt.js":134,"./lv":135,"./lv.js":135,"./me":136,"./me.js":136,"./mi":137,"./mi.js":137,"./mk":138,"./mk.js":138,"./ml":139,"./ml.js":139,"./mn":140,"./mn.js":140,"./mr":141,"./mr.js":141,"./ms":142,"./ms-my":143,"./ms-my.js":143,"./ms.js":142,"./mt":144,"./mt.js":144,"./my":145,"./my.js":145,"./nb":146,"./nb.js":146,"./ne":147,"./ne.js":147,"./nl":148,"./nl-be":149,"./nl-be.js":149,"./nl.js":148,"./nn":150,"./nn.js":150,"./pa-in":151,"./pa-in.js":151,"./pl":152,"./pl.js":152,"./pt":153,"./pt-br":154,"./pt-br.js":154,"./pt.js":153,"./ro":155,"./ro.js":155,"./ru":156,"./ru.js":156,"./sd":157,"./sd.js":157,"./se":158,"./se.js":158,"./si":159,"./si.js":159,"./sk":160,"./sk.js":160,"./sl":161,"./sl.js":161,"./sq":162,"./sq.js":162,"./sr":163,"./sr-cyrl":164,"./sr-cyrl.js":164,"./sr.js":163,"./ss":165,"./ss.js":165,"./sv":166,"./sv.js":166,"./sw":167,"./sw.js":167,"./ta":168,"./ta.js":168,"./te":169,"./te.js":169,"./tet":170,"./tet.js":170,"./tg":171,"./tg.js":171,"./th":172,"./th.js":172,"./tl-ph":173,"./tl-ph.js":173,"./tlh":174,"./tlh.js":174,"./tr":175,"./tr.js":175,"./tzl":176,"./tzl.js":176,"./tzm":177,"./tzm-latn":178,"./tzm-latn.js":178,"./tzm.js":177,"./ug-cn":179,"./ug-cn.js":179,"./uk":180,"./uk.js":180,"./ur":181,"./ur.js":181,"./uz":182,"./uz-latn":183,"./uz-latn.js":183,"./uz.js":182,"./vi":184,"./vi.js":184,"./x-pseudo":185,"./x-pseudo.js":185,"./yo":186,"./yo.js":186,"./zh-cn":187,"./zh-cn.js":187,"./zh-hk":188,"./zh-hk.js":188,"./zh-tw":189,"./zh-tw.js":189};function o(e){var t=a(e);return n(t)}function a(e){if(n.o(r,e))return r[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}o.keys=function(){return Object.keys(r)},o.resolve=a,(e.exports=o).id=250},832:function(e,t,n){},834:function(e,t,n){"use strict";n.r(t);n(234),n(376);var r=n(1),o=n.n(r),a=n(4),u=n.n(a),i=n(57),s=n.n(i),c=n(12),l=n.n(c),f=n(321),p=n.n(f),y=n(232),m=n.n(y),b=n(265),h=n.n(b),d=n(194),j=n.n(d),v=n(20),g=n.n(v),w=n(193),O=n.n(w),E=n(192),k=n.n(E);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(n,!0).forEach(function(e){_(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e){if(e){var t,n,r=e.url||"",o=e.type||"GET",a=e.data||{},u={credentials:"include"};if("GET"===o){var i=[];for(var s in a){var c="";c="object"===x(a[s])?"".concat(s,"=").concat(JSON.stringify(a[s])):"".concat(s,"=").concat(a[s]),i.push(c)}r=0<=r.indexOf("?")?"".concat(r,"&").concat(i.join("&")):"".concat(r,"?").concat(i.join("&")),u=S({},u,{},{headers:new Headers})}else u=S({},u={credentials:"include",method:o,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},{},{method:o,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if("function"!=typeof e.success||"function"!=typeof e.error)return new Promise(function(t,n){window.fetch(r,u).then(function(e){return e.json()}).then(function(e){t(e)}).catch(function(e){n(e)})}).catch(function(e){console.log(e)});t=e.success,n=e.error,window.fetch(r,u).then(function(e){return e.json()}).then(function(e){t(e)}).catch(function(e){n(e)})}}var C={get:function(e){if("object"===x(e))return e.type="GET",z(e)},post:function(e){if("object"===x(e))return e.type="POST",z(e)},form:function(e){if("object"===x(e)){var t=e.url||"",n=e.data||{},r=document.createElement("form");for(var o in r.method="POST",r.action=t,n){var a=document.createElement("input");a.type="hidden";var u=n[a.name=o];"object"===x(u)&&(u=window.JSON.stringify(u)),a.value=u,r.appendChild(a)}document.body.appendChild(r),r.submit()}}};function T(e,t,n,r,o,a,u){try{var i=e[a](u),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}var F=function(){var t=function(i){return function(){var e=this,u=arguments;return new Promise(function(t,n){var r=i.apply(e,u);function o(e){T(r,t,n,o,a,"next",e)}function a(e){T(r,t,n,o,a,"throw",e)}o(void 0)})}}(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post({url:"/api/user/signIn.json",data:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}();function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t,n,r,o,a,u){try{var i=e[a](u),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=k.a.Item,A=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),I(this,q(e).apply(this,arguments))}var t;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(e,o.a.Component),function(e,t,n){t&&R(e.prototype,t),n&&R(e,n)}(e,[{key:"handleSubmit",value:(t=function(i){return function(){var e=this,u=arguments;return new Promise(function(t,n){var r=i.apply(e,u);function o(e){D(r,t,n,o,a,"next",e)}function a(e){D(r,t,n,o,a,"throw",e)}o(void 0)})}}(regeneratorRuntime.mark(function e(n){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,this.getFormValues();case 3:if(r=e.sent)return e.next=7,F(r);e.next=11;break;case 7:(o=e.sent)&&!0===o.success?(O.a.success("登录成功！"),(t=r).source="form",C.form({url:"/api/user/signIn.json",data:t})):o&&o.message&&O.a.error(o.message),e.next=12;break;case 11:O.a.error("系统繁忙，稍后再试！");case 12:case"end":return e.stop()}var t},e,this)})),function(e){return t.apply(this,arguments)})},{key:"getFormValues",value:function(){var e=this;return new Promise(function(n,r){e.props.form.validateFields(function(e,t){e?r(!1):n(t)})})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return o.a.createElement("div",{style:{width:"280px",margin:"0 auto"}},o.a.createElement(k.a,{onSubmit:this.handleSubmit.bind(this),className:"login-form"},o.a.createElement(H,null,e("userName",{rules:[{required:!0,message:"请您输入账号名称！"}]})(o.a.createElement(j.a,{addonBefore:o.a.createElement(g.a,{type:"user"}),placeholder:"请您输入用户名称！"}))),o.a.createElement(H,null,e("password",{rules:[{required:!0,message:"请您输入账号密码！"}]})(o.a.createElement(j.a,{addonBefore:o.a.createElement(g.a,{type:"lock"}),type:"password",placeholder:"请您输入账号密码"}))),o.a.createElement(H,null,e("remember",{valuePropName:"checked",initialValue:!0})(o.a.createElement(h.a,null,"记住登录")),o.a.createElement("a",{className:"login-form-forgot"},"忘记密码"),o.a.createElement("br",null),o.a.createElement(m.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"确定"))))}}]),e}(),J=k.a.create()(A),V=n(320),G=n.n(V),M=n(403),U=n.n(M),W=n(402),K=n.n(W);function L(e,t,n,r,o,a,u){try{var i=e[a](u),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}var Q=function(){var t=function(i){return function(){var e=this,u=arguments;return new Promise(function(t,n){var r=i.apply(e,u);function o(e){L(r,t,n,o,a,"next",e)}function a(e){L(r,t,n,o,a,"throw",e)}o(void 0)})}}(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!1===(n=X(t)).success)return e.abrupt("return",n);e.next=3;break;case 3:return r=C.post({url:"/api/user/signUp.json",data:t}),e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}(),X=function(e){var t={success:!1,message:""};return!1===/[a-z0-9\_\-]{6,16}/.test(e.userName)?t.message="用户名格式为6-16位的小写字母，包括-、_":K.a.isEmail(e.email)?/[\w+]{6,16}/.test(e.password)?e.password!==e.confirmPassword?t.message="两次密码不一致":t.success=!0:t.message="密码长度应该为6-16":t.message="请输入正确的邮箱地址",t};function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function $(e,t,n,r,o,a,u){try{var i=e[a](u),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var oe=k.a.Item,ae=(U.a.Option,function(){function a(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(ne(t=function(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?ne(e):t}(this,(e=te(a)).call.apply(e,[this].concat(r)))),"state",{passwordDirty:!1}),t}var t;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(a,o.a.Component),function(e,t,n){t&&ee(e.prototype,t),n&&ee(e,n)}(a,[{key:"handleSubmit",value:(t=function(i){return function(){var e=this,u=arguments;return new Promise(function(t,n){var r=i.apply(e,u);function o(e){$(r,t,n,o,a,"next",e)}function a(e){$(r,t,n,o,a,"throw",e)}o(void 0)})}}(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.getFormValues();case 3:if(n=e.sent)return e.next=7,Q(n);e.next=11;break;case 7:(r=e.sent)&&!0===r.success?(O.a.success("注册成功！"),window.location.href="/admin?signUpSuccess=true"):r&&r.message&&O.a.error(r.message),e.next=12;break;case 11:O.a.error("系统繁忙，稍后再试！");case 12:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"getFormValues",value:function(){var e=this;return new Promise(function(n,r){e.props.form.validateFieldsAndScroll(function(e,t){e?r(!1):n(t)})})}},{key:"handlePasswordBlur",value:function(e){var t=e.target.value;this.setState({passwordDirty:this.state.passwordDirty||!!t})}},{key:"checkPassword",value:function(e,t,n){var r=this.props.form;t&&t!==r.getFieldValue("password")?n("两次密码输入不一致，请你检查！"):n()}},{key:"checkConfirm",value:function(e,t,n){var r=this.props.form;t&&this.state.passwordDirty&&r.validateFields(["confirm"],{force:!0}),n()}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}},n={wrapperCol:{span:14,offset:6}};return o.a.createElement(k.a,{onSubmit:this.handleSubmit.bind(this)},o.a.createElement(oe,Z({},t,{label:o.a.createElement("span",null,"用户名",o.a.createElement(G.a,{title:"必须是小写6-16位字母，或数字，或下划线，不能以数字开头"},o.a.createElement(g.a,{type:"question-circle-o"}))),hasFeedback:!0}),e("userName",{rules:[{required:!0,message:"请输入您的用户名"}]})(o.a.createElement(j.a,null))),o.a.createElement(oe,Z({},t,{label:"E-mail地址",hasFeedback:!0}),e("email",{rules:[{type:"email",message:"请您输入正确格式的邮箱地址"},{required:!0,message:"请您输入邮箱地址！"}]})(o.a.createElement(j.a,null))),o.a.createElement(oe,Z({},t,{label:"密码",hasFeedback:!0}),e("password",{rules:[{required:!0,message:"请您输入您的账号密码！"},{validator:this.checkConfirm.bind(this)}]})(o.a.createElement(j.a,{type:"password",onBlur:this.handlePasswordBlur.bind(this)}))),o.a.createElement(oe,Z({},t,{label:"确认密码",hasFeedback:!0}),e("confirmPassword",{rules:[{required:!0,message:"请您再次输入账号密码进行确认！"},{validator:this.checkPassword.bind(this)}]})(o.a.createElement(j.a,{type:"password"}))),o.a.createElement(oe,Z({},n,{style:{marginBottom:8}}),e("agreement",{valuePropName:"checked"})(o.a.createElement(h.a,null,"我已阅读 ",o.a.createElement("a",null,"《xxxx协议》")))),o.a.createElement(oe,n,o.a.createElement(m.a,{type:"primary",htmlType:"submit",size:"large"},"确定")))}}]),a}()),ue=k.a.create()(ae);function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ce(e,t){return!t||"object"!==ie(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fe(e,t){return(fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var pe=p.a.TabPane,ye=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ce(this,le(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}(e,o.a.Component),function(e,t,n){t&&se(e.prototype,t),n&&se(e,n)}(e,[{key:"render",value:function(){return o.a.createElement("div",{style:{width:"640px",margin:"0 auto"}},o.a.createElement(p.a,{defaultActiveKey:"1",size:"small"},o.a.createElement(pe,{tab:"登录",key:"1"},o.a.createElement(J,null)),o.a.createElement(pe,{tab:"注册",key:"2"},o.a.createElement(ue,null))))}}]),e}(),me=n(230),be=n(191);n(832);function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function je(e,t){return!t||"object"!==he(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ge(e,t){return(ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.a.Header;var we=l.a.Content,Oe=(l.a.Footer,function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),je(this,ve(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ge(e,t)}(e,o.a.Component),function(e,t,n){t&&de(e.prototype,t),n&&de(e,n)}(e,[{key:"render",value:function(){return o.a.createElement(l.a,{className:"layout"},o.a.createElement(me.a,null),o.a.createElement(we,{style:{padding:"0 50px"}},o.a.createElement(s.a,{style:{margin:"12px 0"}},o.a.createElement(s.a.Item,null,"Admin"),o.a.createElement(s.a.Item,null,"User")),o.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},o.a.createElement(ye,null))),o.a.createElement(be.a,null))}}]),e}());u.a.render(o.a.createElement(Oe,null),document.getElementById("app"))}});