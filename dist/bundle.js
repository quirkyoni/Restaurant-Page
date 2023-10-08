(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),a=n.n(o),c=n(645),r=n.n(c),s=n(667),i=n.n(s),l=new URL(n(209),n.b),d=r()(a()),p=i()(l);d.push([e.id,`body {\n    color: white;\n    background: url(${p});\n}\n\nnav {\n    display: flex;\n    justify-content: flex-end;\n}\n\nnav > * {\n    margin: 1rem;\n}`,""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,c){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&r[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},r=[],s=0;s<e.length;s++){var i=e[s],l=o.base?i[0]+o.base:i[0],d=c[l]||0,p="".concat(l," ").concat(d);c[l]=d+1;var u=n(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var c=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<c.length;r++){var s=n(c[r]);t[s].references--}for(var i=o(e,a),l=0;l<c.length;l++){var d=n(c[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}c=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},209:(e,t,n)=>{e.exports=n.p+"1b8ba2e98943c4a3fc89.jpeg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),c=n(569),r=n.n(c),s=n(565),i=n.n(s),l=n(216),d=n.n(l),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=i(),h.insert=r().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=n(209);const C=()=>{let e=document.createElement("h1");e.textContent="Webpack Restaurant";let t=document.createElement("h2");t.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium dolorum voluptate, perspiciatis mollitia esse a sequi officiis laborum harum!";const n=document.createElement("img");n.src=f;let o=document.createElement("h4");o.textContent="Lorem ipsum dolor sit amet.",content.appendChild(e),content.appendChild(t),content.appendChild(n),content.appendChild(o),console.log("Hello World!")},v=document.querySelector("body"),g=document.getElementById("content"),x=document.createElement("div");x.className="navBar";const E=document.createElement("nav"),y=document.createElement("div");y.className="home",y.textContent="Home",E.appendChild(y);const b=document.createElement("div");b.className="menu",b.textContent="Menu",E.appendChild(b);const N=document.createElement("div");N.className="contact",N.textContent="Contact",E.appendChild(N),x.appendChild(E),v.insertBefore(x,v.firstChild),C(),E.addEventListener("click",(e=>{console.log(e.target.className),"home"==e.target.className&&(g.textContent="",C()),"menu"==e.target.className&&(g.textContent="",(()=>{const e=document.createElement("h1");e.className="menu",e.textContent="Menu";const t=document.createElement("div");t.className="menu-items";const n=document.createElement("div");n.className="appetizer-menu",t.appendChild(n);const o=document.createElement("h2");o.className="appetizer",o.textContent="Appetizer",n.appendChild(o);const a=document.createElement("p");a.textContent="Tortilla Chips & Avocado Dip",n.appendChild(a);const c=document.createElement("p");c.textContent="French Fries",n.appendChild(c);const r=document.createElement("p");r.textContent="Chicken Wings",n.appendChild(r);const s=document.createElement("div");s.className="dinner-menu",t.appendChild(s);const i=document.createElement("h2");i.className="dinner",i.textContent="Dinner",s.appendChild(i);const l=document.createElement("p");l.textContent="Sphagetti & Meatballs",s.appendChild(l);const d=document.createElement("p");d.textContent="Roast Beef Sandwich",s.appendChild(d);const p=document.createElement("p");p.textContent="Beef Hot Dog",s.appendChild(p);const u=document.createElement("div");u.className="dessert-menu",t.appendChild(u);const m=document.createElement("h2");m.className="dessert",m.textContent="Dessert",u.appendChild(m);const h=document.createElement("p");h.textContent="Chocolate Cake",u.appendChild(h);const f=document.createElement("p");f.textContent="Original Cheesecake",u.appendChild(f);const C=document.createElement("p");C.textContent="Chocolate Croissant",u.appendChild(C),content.appendChild(e),content.appendChild(t)})()),"contact"==e.target.className&&(g.textContent="",(()=>{const e=document.createElement("h1");e.className="contact-h1",e.textContent="Contact Us";const t=document.createElement("div");t.className="contact-items";const n=document.createElement("div");n.className="contact-one";const o=document.createElement("h3");o.textContent="Main Contact",n.appendChild(o);const a=document.createElement("p");a.className="contact-one-info",a.textContent="(416) 729 - 4166",n.appendChild(a),t.appendChild(n);const c=document.createElement("div");c.className="contact-two";const r=document.createElement("h3");r.textContent="Secondary Contact",c.appendChild(r);const s=document.createElement("p");s.className="contact-two-info",s.textContent="(416) 838 - 1147",c.appendChild(s),t.appendChild(c),content.appendChild(e),content.appendChild(t)})())}))})()})();