"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34157],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,k=s["".concat(p,".").concat(m)]||s[m]||g[m]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={slug:"2023-kcl-playground-0.4.5-release",title:"\u5168\u65b0\u7684 KCL Playground \u6765\u4e86!",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL","Playground"]},o=void 0,i={permalink:"/zh-CN/blog/2023-kcl-playground-0.4.5-release",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-03-17-kcl-playground-0.4.5-release/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-03-17-kcl-playground-0.4.5-release/index.md",title:"\u5168\u65b0\u7684 KCL Playground \u6765\u4e86!",description:"\u7b80\u4ecb",date:"2023-03-17T00:00:00.000Z",formattedDate:"2023\u5e743\u670817\u65e5",tags:[{label:"Release Blog",permalink:"/zh-CN/blog/tags/release-blog"},{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"Playground",permalink:"/zh-CN/blog/tags/playground"}],readingTime:1.765,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2023-kcl-playground-0.4.5-release",title:"\u5168\u65b0\u7684 KCL Playground \u6765\u4e86!",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL","Playground"]},prevItem:{title:"KCL v0.4.6-alpha.1 \u53d1\u5e03\u65e5\u5fd7",permalink:"/zh-CN/blog/2022-kcl-0.4.6-alpha.1-release-blog"},nextItem:{title:"KCL v0.4.5 \u53d1\u5e03\u65e5\u5fd7",permalink:"/zh-CN/blog/2022-kcl-0.4.5-release-blog"}},p={authorsImageUrls:[void 0]},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4e0b\u4e00\u6b65\u8ba1\u5212",id:"\u4e0b\u4e00\u6b65\u8ba1\u5212",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54",level:2},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],c={toc:u},s="wrapper";function g(e){let{components:t,...l}=e;return(0,a.kt)(s,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"KCL \u56e2\u961f\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03 KCL Playground v0.4.5 \u7248\u672c\u73b0\u5728\u5df2\u7ecf\u53ef\u7528\uff01"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl"},"KCL")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\uff0c\u671f\u671b\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u548c\u7b56\u7565\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u5feb\u7684\u81ea\u52a8\u5316\u96c6\u6210\u548c\u826f\u597d\u7684\u751f\u6001\u5ef6\u5c55\u6027\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL \u7f51\u7ad9")," \u70b9\u51fb playground \u8fdb\u884c\u4f53\u9a8c\u3002\u5728\u8fd9\u4e2a\u65b0\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u652f\u6301\u4e86\u6839\u636e\u8f93\u5165 KCL \u4ee3\u7801\u53d8\u5316\u81ea\u52a8\u7f16\u8bd1\u548c\u8fd0\u884c KCL \u4ee3\u7801\u3001\u683c\u5f0f\u5316\u4ee3\u7801\u548c\u4ee5\u53ca\u5171\u4eab\u4ee3\u7801\u7684\u80fd\u529b\u3002\u6b22\u8fce\u53c2\u4e0e\u64b0\u5199\u5e76\u5c06 KCL \u4ee3\u7801\u5206\u4eab\u7ed9\u60a8\u7684\u5c0f\u4f19\u4f34\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5043).Z,width:"3352",height:"966"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(82365).Z,width:"1400",height:"509"})),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u6b65\u8ba1\u5212"},"\u4e0b\u4e00\u6b65\u8ba1\u5212"),(0,a.kt)("p",null,"\u9884\u8ba1 2023 \u5e74 4 \u6708\u4e2d\u65ec\uff0c\u6211\u4eec\u5c06\u53d1\u5e03 ",(0,a.kt)("strong",{parentName:"p"},"KCL Playground v0.4.6 \u7248\u672c"),"\uff0c\u9884\u671f\u91cd\u70b9\u6f14\u8fdb\u5305\u62ec\uff1aKCL \u7248\u672c\u9009\u62e9\uff0c\u5bfc\u5165\u5df2\u6709\u4ee3\u7801\u7247\u6bb5\u7b49\u80fd\u529b\u3002"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54"),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/support/"},"KCL \u5e38\u89c1\u95ee\u9898")),(0,a.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,a.kt)("p",null,"\u611f\u8c22\u6240\u6709 KCL \u7528\u6237\u5728\u6b64\u6b21\u7248\u672c\u66f4\u65b0\u8fc7\u7a0b\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u7684\u53cd\u9988\u4e0e\u5efa\u8bae\u3002\u66f4\u591a\u5176\u4ed6\u8d44\u6e90\u8bf7\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kcl-lang.io/"},"KCL \u7f51\u7ad9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"Kusion \u7f51\u7ad9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl"},"KCL Github \u4ed3\u5e93")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion Github \u4ed3\u5e93")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"Konfig Github \u4ed3\u5e93"))),(0,a.kt)("p",null,"\u6b22\u8fce\u52a0\u5165\u6211\u4eec\u7684\u793e\u533a\u8fdb\u884c\u4ea4\u6d41 \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"https://github.com/kcl-lang/community")))}g.isMDXComponent=!0},82365:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kcl-playground-fc658aae9889527aa6db0f023872ed33.png"},5043:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kcl-website-playground-cbf056a40b11b94ed416e019233bd760.png"}}]);