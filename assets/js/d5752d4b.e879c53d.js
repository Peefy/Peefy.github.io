"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||l;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},76093:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={slug:"2022-kcl-0.4.6-alpha.1-release-blog",title:"KCL v0.4.6-alpha.1 Release Blog",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL"]},o=void 0,i={permalink:"/blog/2022-kcl-0.4.6-alpha.1-release-blog",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-03-20-kcl-0.4.6-alpha.1-release/index.md",source:"@site/blog/2023-03-20-kcl-0.4.6-alpha.1-release/index.md",title:"KCL v0.4.6-alpha.1 Release Blog",description:"Introduction",date:"2023-03-20T00:00:00.000Z",formattedDate:"March 20, 2023",tags:[{label:"Release Blog",permalink:"/blog/tags/release-blog"},{label:"KCL",permalink:"/blog/tags/kcl"}],readingTime:1.17,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2022-kcl-0.4.6-alpha.1-release-blog",title:"KCL v0.4.6-alpha.1 Release Blog",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL"]},prevItem:{title:"KCL Introduction on OS2ATC 2022 Meeting",permalink:"/blog/2023-03-26-kcl-os2atc-meeting"},nextItem:{title:"The new playground of the KCL programming language is coming!",permalink:"/blog/2023-kcl-playground-0.4.5-release"}},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Release Content",id:"release-content",level:2},{value:"Next\u200b",id:"next",level:2},{value:"FAQ",id:"faq",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The KCL team is pleased to announce that KCL v0.4.6-alpha.1 is now available!"),(0,n.kt)("p",null,"You can visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/releases/tag/v0.4.6-alpha.1"},"KCL release page")," or the ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL website")," to get KCL binary download link and more detailed release information."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl"},"KCL")," is an open-source, constraint-based record and functional language. KCL improves the writing of numerous complex configurations, such as cloud-native scenarios, through its mature programming language technology and practice. It is dedicated to building better modularity, scalability, and stability around configurations, simpler logic writing, faster automation, and great built-in or API-driven integrations."),(0,n.kt)("h2",{id:"release-content"},"Release Content"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Lexical error recovery including numbers, literal values, parentheses, etc"),(0,n.kt)("li",{parentName:"ul"},"KCL IDE plug-in supports error and warning display, go-to-definition, and other capabilities."),(0,n.kt)("li",{parentName:"ul"},"Some compiler error reporting improvements"),(0,n.kt)("li",{parentName:"ul"},"KCL Playground supports code sharing capabilities"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl/issues/434"},"KPT Tool KCL SDK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl/issues/426"},"Helm KCL Plugin"))),(0,n.kt)("h2",{id:"next"},"Next\u200b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"KPM package management tool release"),(0,n.kt)("li",{parentName:"ul"},"More KCL compiler syntax error recovery supports the release of new IDE plug-ins, with an expected performance improvement of 20 times"),(0,n.kt)("li",{parentName:"ul"},"KCL integration of Kubernetes tools such as Helm and KPT release")),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/support/"},"KCL FAQ"),"."),(0,n.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,n.kt)("p",null,"Thank all KCL users for their valuable feedback and suggestions during this version release. For more resources, please refer to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kcl-lang.io/"},"KCL Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"Kusion Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl"},"KCL Repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion Repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"Konfig Repo"))),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"community")," for ways to join us. \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f"))}m.isMDXComponent=!0}}]);