(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{13:function(n,o,e){n.exports=e(38)},38:function(n,o,e){"use strict";e.r(o);e(1),e(15);var t=e(11),i=e.n(t),r=(e(19),e(12)),a=e.n(r);function c(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var o=n.installing;o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=window.location.search.slice(1);a.a.get("http://f0501724.xsph.ru/validateUser.php",{params:{Authorization:l}}).then((function(n){alert(n)})),i.a.send("VKWebAppInit",{}),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");s?(!function(n){fetch(n).then((function(o){404===o.status||-1===o.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):c(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):c(n)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.ae483769.chunk.js.map