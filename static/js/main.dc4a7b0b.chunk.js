(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{117:function(n,o,e){n.exports=e(154)},130:function(n,o){},132:function(n,o){},154:function(n,o,e){"use strict";e.r(o);e(10),e(119);var t=e(32),i=e.n(t),r=(e(123),e(155),e(124),e(33));function a(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var o=n.installing;o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));e(125).post("https://jsonplaceholder.typicode.com/posts",{id:"1"}).then((function(n){alert(n.body)}));var s=r.getInfo();alert(s),i.a.send("VKWebAppInit",{}),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");c?(!function(n){fetch(n).then((function(o){404===o.status||-1===o.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):a(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):a(n)}))}}()},33:function(n,o){this.parseQueryString(window.location.search),this.parseQueryString(window.location.hash)}},[[117,1,2]]]);
//# sourceMappingURL=main.dc4a7b0b.chunk.js.map