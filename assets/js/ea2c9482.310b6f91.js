"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={slug:"2023-kcl-playground-0.4.5-release",title:"The new playground of the KCL programming language is coming!",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL","Playground"]},o=void 0,i={permalink:"/blog/2023-kcl-playground-0.4.5-release",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-03-17-kcl-playground-0.4.5-release/index.md",source:"@site/blog/2023-03-17-kcl-playground-0.4.5-release/index.md",title:"The new playground of the KCL programming language is coming!",description:"Introduction",date:"2023-03-17T00:00:00.000Z",formattedDate:"March 17, 2023",tags:[{label:"Release Blog",permalink:"/blog/tags/release-blog"},{label:"KCL",permalink:"/blog/tags/kcl"},{label:"Playground",permalink:"/blog/tags/playground"}],readingTime:.995,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2023-kcl-playground-0.4.5-release",title:"The new playground of the KCL programming language is coming!",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL","Playground"]},prevItem:{title:"KCL v0.4.6-alpha.1 Release Blog",permalink:"/blog/2022-kcl-0.4.6-alpha.1-release-blog"},nextItem:{title:"KCL v0.4.5 Release Blog",permalink:"/blog/2022-kcl-0.4.5-release-blog"}},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Next\u200b",id:"next",level:2},{value:"FAQ",id:"faq",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The KCL team is pleased to announce that the new playground of KCL v0.4.5 is now available!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl"},"KCL")," is an open-source, constraint-based record and functional language. KCL improves the complexity of writing numerous complex configurations, such as cloud-native scenarios, through its mature programming language technology and practice. It is dedicated to building better modularity, scalability, and stability around configurations, simpler logic writing, faster automation, and great built-in or API-driven integrations."),(0,r.kt)("p",null,"You can visit the ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL website")," and click the playground link and play. In this new version, we support the ability to automatically compile and run KCL code, format it, and share code. Welcome to writing and sharing KCL codes."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5043).Z,width:"3352",height:"966"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(82365).Z,width:"1400",height:"509"})),(0,r.kt)("h2",{id:"next"},"Next\u200b"),(0,r.kt)("p",null,"It is expected that in the middle of April 2023, we will release a new KCL Playground including KCL version selection, reference to Github code, and other capabilities."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/support/"},"KCL FAQ"),"."),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("p",null,"Thank all KCL users for their valuable feedback and suggestions during this version release. For more resources, please refer to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/"},"KCL Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"Kusion Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl"},"KCL Repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion Repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"Konfig Repo"))),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"community")," for ways to join us. \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f"))}g.isMDXComponent=!0},82365:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kcl-playground-fc658aae9889527aa6db0f023872ed33.png"},5043:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kcl-website-playground-cbf056a40b11b94ed416e019233bd760.png"}}]);