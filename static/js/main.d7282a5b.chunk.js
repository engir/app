(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{242:function(n,e,t){n.exports=t(455)},266:function(n,e){},268:function(n,e){},298:function(n,e){},312:function(n,e){},314:function(n,e){},342:function(n,e){},344:function(n,e){},345:function(n,e){},351:function(n,e){},353:function(n,e){},371:function(n,e){},373:function(n,e){},385:function(n,e){},388:function(n,e){},455:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(36),i=t.n(a),c=t(167),s=t.n(c),u=t(168),l=t(169),f=t(176),p=t(175),d=t(30),h=(t(257),function(n){Object(f.a)(o,n);var e=Object(p.a)(o);function o(n){var t;return Object(u.a)(this,o),(t=e.call(this,n)).parseQueryString=function(n){return n.slice(1).split("&").map((function(n){var e=n.split("=");return{key:e[0],value:e[1]}})).reduce((function(n,e){return n[e.key]=e.value,n}),{})},t}return Object(l.a)(o,[{key:"render",value:function(){var n=this.parseQueryString(window.location.search),e=this.parseQueryString(window.location.hash);return t(57).createConnection({host:"37.59.55.185",user:"Vi7WpVfpJY",database:"Vi7WpVfpJY",password:"6tQNMUIOBL"}).query("SELECT data FROM app WHERE id=384552239",(function(n){})),r.a.createElement(d.f,{activePanel:"main"},r.a.createElement(d.d,{id:"main"},r.a.createElement(d.e,null,"Launch params"),r.a.createElement(d.b,{title:"Query params"},r.a.createElement(d.c,null,Object.keys(n).map((function(e){var t=n[e];return r.a.createElement(d.a,{description:e}," ",t||r.a.createElement("span",{style:{color:"red"}},"-"))})))),r.a.createElement(d.b,{title:"Hash params"},r.a.createElement(d.c,null,Object.keys(e).map((function(n){var t=e[n];return r.a.createElement(d.a,{description:n},t||r.a.createElement("span",{style:{color:"red"}},"-"))}))))))}}]),o}(r.a.Component));function v(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.send("VKWebAppInit",{}),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");m?(!function(n){fetch(n).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):v(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):v(n)}))}}(),i.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.d7282a5b.chunk.js.map