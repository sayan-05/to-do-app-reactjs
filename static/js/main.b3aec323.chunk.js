(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(28)},20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),l=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(13),i=n(6),s=(n(20),n(12)),u=n.n(s),m=(n(21),n(10)),f=n.n(m),p=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",null,e.text),o.a.createElement(f.a,{className:"delete_icon",onClick:function(){e.onSelect(e.serial)}}))},h=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),s=Object(i.a)(l,2),m=s[0],f=s[1],h=function(e){f((function(t){return t.filter((function(t,n){return n!==e}))}))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Exo:wght@900&display=swap",rel:"stylesheet"}),o.a.createElement("div",{className:"main_div"},o.a.createElement("h1",null," To-Do-List"),o.a.createElement("input",{type:"text",placeholder:"Write task here!",className:"input",onChange:function(e){c(e.target.value)}}),o.a.createElement(u.a,{className:"add_button",onClick:function(){f([].concat(Object(r.a)(m),[n]))}}),o.a.createElement("ul",null,m.map((function(e,t){return o.a.createElement(p,{className:"list",serial:t,key:t,text:e,onSelect:h})})))))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b3aec323.chunk.js.map