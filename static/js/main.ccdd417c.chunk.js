(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{175:function(n,t,o){n.exports=o(390)},203:function(n,t){},205:function(n,t){},215:function(n,t){},217:function(n,t){},243:function(n,t){},245:function(n,t){},246:function(n,t){},252:function(n,t){},254:function(n,t){},272:function(n,t){},274:function(n,t){},286:function(n,t){},289:function(n,t){},317:function(n,t){},318:function(n,t){},354:function(n,t){},359:function(n,t){function o(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}o.keys=function(){return[]},o.resolve=o,n.exports=o,o.id=359},361:function(n,t){},363:function(n,t){},389:function(n,t,o){var e=o(141).Router();e.get("/validate",(function(n,t){t.send({method:"POST"})})),n.exports=e},390:function(n,t,o){"use strict";o.r(t);o(83),o(177);var e=o(172),c=o.n(e);o(181),o(182);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=o(174),a=o(173),r=o(54);var u=function(n,t){var o,e=[],c=function(n,t){"string"===typeof t&&("sign"===n?o=t:n.startsWith("vk_")&&e.push({key:n,value:t}))};if("string"===typeof n){var u,s=n.startsWith("?")?n.slice(1):n,f=Object(a.a)(s.split("&"));try{for(f.s();!(u=f.n()).done;){var l=u.value.split("="),p=Object(i.a)(l,2);c(p[0],p[1])}}catch(g){f.e(g)}finally{f.f()}}else for(var v=0,h=Object.keys(n);v<h.length;v++){var d=h[v];c(d,n[d])}if(!o||0===e.length)return!1;var w=e.sort((function(n,t){return n.key.localeCompare(t.key)})).reduce((function(n,t,o){var e=t.key,c=t.value;return n+(0===o?"":"&")+"".concat(e,"=").concat(encodeURIComponent(c))}),"");return r.createHmac("sha256",t).update(w).digest().toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=$/,"")===o?e:0}(window.location.search.slice(1),"6O1XjtpFwXlGtHaxvbD3");0==u?alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430"):console.log(u);var s=o(141)();s.use("/userManager",o(389)),s.listen(4e3),c.a.send("VKWebAppInit",{})}},[[175,1,2]]]);
//# sourceMappingURL=main.ccdd417c.chunk.js.map