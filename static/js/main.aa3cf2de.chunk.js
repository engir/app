(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{242:function(e,n,t){e.exports=t(455)},266:function(e,n){},268:function(e,n){},298:function(e,n){},312:function(e,n){},314:function(e,n){},342:function(e,n){},344:function(e,n){},345:function(e,n){},351:function(e,n){},353:function(e,n){},371:function(e,n){},373:function(e,n){},385:function(e,n){},388:function(e,n){},455:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(36),i=t.n(a),c=t(167),s=t.n(c),u=t(168),l=t(169),f=t(176),p=t(175),d=t(30),h=(t(257),function(e){Object(f.a)(o,e);var n=Object(p.a)(o);function o(e){var t;return Object(u.a)(this,o),(t=n.call(this,e)).parseQueryString=function(e){return e.slice(1).split("&").map((function(e){var n=e.split("=");return{key:n[0],value:n[1]}})).reduce((function(e,n){return e[n.key]=n.value,e}),{})},t}return Object(l.a)(o,[{key:"render",value:function(){var e=this.parseQueryString(window.location.search),n=this.parseQueryString(window.location.hash),o=t(57).createConnection({host:"https://remotemysql.com/",user:"Vi7WpVfpJY",database:"Vi7WpVfpJY",password:"6tQNMUIOBL"});return 0==e.vk_is_app_user||o.query("SELECT data FROM app WHERE id=?",e.vk_id,(function(e){})),r.a.createElement(d.f,{activePanel:"main"},r.a.createElement(d.d,{id:"main"},r.a.createElement(d.e,null,"Launch params"),r.a.createElement(d.b,{title:"Query params"},r.a.createElement(d.c,null,0,Object.keys(e).map((function(n){var t=e[n];return r.a.createElement(d.a,{description:n}," ",t||r.a.createElement("span",{style:{color:"red"}},"-"))})))),r.a.createElement(d.b,{title:"Hash params"},r.a.createElement(d.c,null,Object.keys(n).map((function(e){var t=n[e];return r.a.createElement(d.a,{description:e},t||r.a.createElement("span",{style:{color:"red"}},"-"))}))))))}}]),o}(r.a.Component));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.send("VKWebAppInit",{}),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");m?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):v(e)}))}}(),i.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.aa3cf2de.chunk.js.map