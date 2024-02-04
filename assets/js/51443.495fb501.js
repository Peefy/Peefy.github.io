"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51443],{23746:(t,e,r)=>{r.d(e,{ZP:()=>h,lG:()=>i});var n=r(87410);const o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=r(67294),i={Prism:n.Z,theme:o};function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(t){0===t.length?t.push({types:["plain"],content:"\n",empty:!0}):1===t.length&&""===t[0].content&&(t[0].content="\n",t[0].empty=!0)},p=function(t,e){var r=t.length;return r>0&&t[r-1]===e?t:t.concat(e)};function y(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(r[n]=t[n]);return r}var v=function(t){function e(){for(var e=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];t.apply(this,r),l(this,"getThemeDict",(function(t){if(void 0!==e.themeDict&&t.theme===e.prevTheme&&t.language===e.prevLanguage)return e.themeDict;e.prevTheme=t.theme,e.prevLanguage=t.language;var r=t.theme?function(t,e){var r=t.plain,n=Object.create(null),o=t.styles.reduce((function(t,r){var n=r.languages,o=r.style;return n&&!n.includes(e)||r.types.forEach((function(e){var r=c({},t[e],o);t[e]=r})),t}),n);return o.root=r,o.plain=c({},r,{backgroundColor:null}),o}(t.theme,t.language):void 0;return e.themeDict=r})),l(this,"getLineProps",(function(t){var r=t.key,n=t.className,o=t.style,a=c({},y(t,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=e.getThemeDict(e.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?c({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),l(this,"getStyleForToken",(function(t){var r=t.types,n=t.empty,o=r.length,a=e.getThemeDict(e.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var i=n?{display:"inline-block"}:{},l=r.map((function(t){return a[t]}));return Object.assign.apply(Object,[i].concat(l))}})),l(this,"getTokenProps",(function(t){var r=t.key,n=t.className,o=t.style,a=t.token,i=c({},y(t,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:e.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?c({},i.style,o):o),void 0!==r&&(i.key=r),n&&(i.className+=" "+n),i})),l(this,"tokenize",(function(t,e,r,n){var o={code:e,grammar:r,language:n,tokens:[]};t.hooks.run("before-tokenize",o);var a=o.tokens=t.tokenize(o.code,o.grammar,o.language);return t.hooks.run("after-tokenize",o),a}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(){var t=this.props,e=t.Prism,r=t.language,n=t.code,o=t.children,a=this.getThemeDict(this.props),i=e.languages[r];return o({tokens:function(t){for(var e=[[]],r=[t],n=[0],o=[t.length],a=0,i=0,l=[],c=[l];i>-1;){for(;(a=n[i]++)<o[i];){var y=void 0,v=e[i],h=r[i][a];if("string"==typeof h?(v=i>0?v:["plain"],y=h):(v=p(v,h.type),h.alias&&(v=p(v,h.alias)),y=h.content),"string"==typeof y){var g=y.split(s),d=g.length;l.push({types:v,content:g[0]});for(var f=1;f<d;f++)u(l),c.push(l=[]),l.push({types:v,content:g[f]})}else i++,e.push(v),r.push(y),n.push(0),o.push(y.length)}i--,e.pop(),r.pop(),n.pop(),o.pop()}return u(l),c}(void 0!==i?this.tokenize(e,n,i,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},e}(a.Component);const h=v},53854:(t,e,r)=>{r.d(e,{NNQ:()=>o});var n=r(88357);function o(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"}}]})(t)}},60155:(t,e,r)=>{r.d(e,{GYW:()=>a,O6n:()=>o,U6X:()=>i,xID:()=>c,yVd:()=>l});var n=r(88357);function o(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 112a56 56 0 1156-56 56.06 56.06 0 01-56 56z"}},{tag:"path",attr:{d:"M432 112.8l-.45.12-.42.13c-1 .28-2 .58-3 .89-18.61 5.46-108.93 30.92-172.56 30.92-59.13 0-141.28-22-167.56-29.47a73.79 73.79 0 00-8-2.58c-19-5-32 14.3-32 31.94 0 17.47 15.7 25.79 31.55 31.76v.28l95.22 29.74c9.73 3.73 12.33 7.54 13.6 10.84 4.13 10.59.83 31.56-.34 38.88l-5.8 45-32.19 176.19q-.15.72-.27 1.47l-.23 1.27c-2.32 16.15 9.54 31.82 32 31.82 19.6 0 28.25-13.53 32-31.94s28-157.57 42-157.57 42.84 157.57 42.84 157.57c3.75 18.41 12.4 31.94 32 31.94 22.52 0 34.38-15.74 32-31.94a57.17 57.17 0 00-.76-4.06L329 301.27l-5.79-45c-4.19-26.21-.82-34.87.32-36.9a1.09 1.09 0 00.08-.15c1.08-2 6-6.48 17.48-10.79l89.28-31.21a16.9 16.9 0 001.62-.52c16-6 32-14.3 32-31.93S451 107.81 432 112.8z"}}]})(t)}function a(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"256",cy:"256",r:"208",fill:"none",strokeMiterlimit:"10",strokeWidth:"32"}},{tag:"circle",attr:{cx:"288",cy:"200",r:"24"}},{tag:"circle",attr:{cx:"296",cy:"128",r:"24"}},{tag:"circle",attr:{cx:"360",cy:"168",r:"24"}}]})(t)}function i(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 352c-12.6-.84-21-4-28-12-14-16-14-36 5.49-52.48l32.82-29.14c50.27-44.41 50.27-117.21 0-161.63C389.26 64.14 339.54 48 287.86 48c-60.34 0-123.39 22-172 65.11-90.46 80-90.46 210.92 0 290.87 45 39.76 105.63 59.59 165.64 60h1.84c60 0 119.07-19.5 161.2-56.77C464 390 464 385 444.62 355.56 440 348 431 353 416 352zM112 208a32 32 0 1132 32 32 32 0 01-32-32zm40 135a32 32 0 1132-32 32 32 0 01-32 32zm40-199a32 32 0 1132 32 32 32 0 01-32-32zm64 271a48 48 0 1148-48 48 48 0 01-48 48zm72-239a32 32 0 1132-32 32 32 0 01-32 32z"}}]})(t)}function l(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 432v-96a80 80 0 010-160V80c97.05 0 176 79 176 176s-78.95 176-176 176z"}},{tag:"path",attr:{d:"M336 256a80 80 0 00-80-80v160a80 80 0 0080-80z"}}]})(t)}function c(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zm224 0h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zm112 0h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zm-224 0h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z"}}]})(t)}},88357:(t,e,r)=>{r.d(e,{w_:()=>s});var n=r(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},l=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function c(t){return t&&t.map((function(t,e){return n.createElement(t.tag,i({key:e},t.attr),c(t.child))}))}function s(t){return function(e){return n.createElement(u,i({attr:i({},t.attr)},e),c(t.child))}}function u(t){var e=function(e){var r,o=t.attr,a=t.size,c=t.title,s=l(t,["attr","size","title"]),u=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,s,{className:r,style:i(i({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),t.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(t){return e(t)})):e(o)}},27856:(t,e,r)=>{function n(t,e,r,n){var o,a=!1,i=0;function l(){o&&clearTimeout(o)}function c(){for(var c=arguments.length,s=new Array(c),u=0;u<c;u++)s[u]=arguments[u];var p=this,y=Date.now()-i;function v(){i=Date.now(),r.apply(p,s)}a||(n&&!o&&v(),l(),void 0===n&&y>t?v():!0!==e&&(o=setTimeout(n?function(){o=void 0}:v,void 0===n?t-y:t)))}return"boolean"!=typeof e&&(n=r,r=e,e=void 0),c.cancel=function(){l(),a=!0},c}r.d(e,{P:()=>n})}}]);