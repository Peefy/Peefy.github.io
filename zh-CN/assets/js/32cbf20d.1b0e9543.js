"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50584],{3905:(t,e,l)=>{l.d(e,{Zo:()=>u,kt:()=>h});var a=l(67294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,a)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function p(t,e){if(null==t)return{};var l,a,n=function(t,e){if(null==t)return{};var l,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var c=a.createContext({}),s=function(t){var e=a.useContext(c),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},u=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},k="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var l=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=s(l),m=n,h=k["".concat(c,".").concat(m)]||k[m]||o[m]||r;return l?a.createElement(h,i(i({ref:e},u),{},{components:l})):a.createElement(h,i({ref:e},u))}));function h(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=l.length,i=new Array(r);i[0]=m;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[k]="string"==typeof t?t:n,i[1]=p;for(var s=2;s<r;s++)i[s]=l[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},64711:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=l(87462),n=(l(67294),l(3905));const r={slug:"2023-10-25-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 10.12 - 10.25) | IDE \u63d2\u4ef6\u652f\u6301\u5f15\u7528\u67e5\u627e\u3001\u5305\u7ba1\u7406\u96c6\u6210 ArtifactHub",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},i=void 0,p={permalink:"/zh-CN/blog/2023-10-25-biweekly-newsletter",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-10-25-biweekly-newsletter/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-10-25-biweekly-newsletter/index.md",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 10.12 - 10.25) | IDE \u63d2\u4ef6\u652f\u6301\u5f15\u7528\u67e5\u627e\u3001\u5305\u7ba1\u7406\u96c6\u6210 ArtifactHub",description:"KCL \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\u5e76\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002",date:"2023-10-25T00:00:00.000Z",formattedDate:"2023\u5e7410\u670825\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"Biweekly-Newsletter",permalink:"/zh-CN/blog/tags/biweekly-newsletter"}],readingTime:6.69,hasTruncateMarker:!1,authors:[{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"}],frontMatter:{slug:"2023-10-25-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 10.12 - 10.25) | IDE \u63d2\u4ef6\u652f\u6301\u5f15\u7528\u67e5\u627e\u3001\u5305\u7ba1\u7406\u96c6\u6210 ArtifactHub",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},nextItem:{title:"KCD \u793e\u533a\u4f1a\u8bae\u56de\u987e | \u57fa\u4e8e\u4e91\u539f\u751f\u4f9b\u5e94\u94fe\u7684\u914d\u7f6e\u7b56\u7565\u7ba1\u7406\u65b0\u8303\u5f0f - KRM KCL \u89c4\u8303",permalink:"/zh-CN/blog/2023-10-23-cloud-native-supply-chain-krm-kcl-spec"}},c={authorsImageUrls:[void 0]},s=[{value:"\u5185\u5bb9\u6982\u8ff0",id:"\u5185\u5bb9\u6982\u8ff0",level:2},{value:"\u7279\u522b\u9e23\u8c22",id:"\u7279\u522b\u9e23\u8c22",level:2},{value:"\u7cbe\u9009\u66f4\u65b0",id:"\u7cbe\u9009\u66f4\u65b0",level:2},{value:"KCL IDE \u63d2\u4ef6\u66f4\u65b0",id:"kcl-ide-\u63d2\u4ef6\u66f4\u65b0",level:3},{value:"KCL \u5305\u7ba1\u7406\u5de5\u5177",id:"kcl-\u5305\u7ba1\u7406\u5de5\u5177",level:3},{value:"KCL \u8bed\u8a00\u66f4\u65b0",id:"kcl-\u8bed\u8a00\u66f4\u65b0",level:3},{value:"KCL \u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762",id:"kcl-\u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762",level:3},{value:"\u793e\u533a\u52a8\u6001",id:"\u793e\u533a\u52a8\u6001",level:3},{value:"\u8fd1\u671f\u6d3b\u52a8",id:"\u8fd1\u671f\u6d3b\u52a8",level:3},{value:"KCD \u676d\u5dde\u7ad9\u6d3b\u52a8\u987a\u5229\u4e3e\u884c",id:"kcd-\u676d\u5dde\u7ad9\u6d3b\u52a8\u987a\u5229\u4e3e\u884c",level:4},{value:"KCL \u5f00\u6e90\u53cc\u5468\u4f1a",id:"kcl-\u5f00\u6e90\u53cc\u5468\u4f1a",level:4},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],u={toc:s},k="wrapper";function o(t){let{components:e,...r}=t;return(0,n.kt)(k,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(71831).Z,width:"1127",height:"435"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," \u662f\u4e00\u4e2a CNCF \u57fa\u91d1\u4f1a\u6258\u7ba1\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\u5e76\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002"),(0,n.kt)("p",null,"\u672c\u680f\u76ee\u5c06\u4f1a\u53cc\u5468\u66f4\u65b0 KCL \u8bed\u8a00\u793e\u533a\u6700\u65b0\u52a8\u6001\uff0c\u5305\u62ec\u529f\u80fd\u3001\u5b98\u7f51\u66f4\u65b0\u548c\u6700\u65b0\u7684\u793e\u533a\u52a8\u6001\u7b49\uff0c\u5e2e\u52a9\u5927\u5bb6\u66f4\u597d\u5730\u4e86\u89e3 KCL \u793e\u533a\uff01"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"KCL \u5b98\u7f51\uff1a",(0,n.kt)("a",{parentName:"em",href:"https://kcl-lang.io"},"https://kcl-lang.io")))),(0,n.kt)("h2",{id:"\u5185\u5bb9\u6982\u8ff0"},"\u5185\u5bb9\u6982\u8ff0"),(0,n.kt)("p",null,"\u611f\u8c22\u6240\u6709\u8d21\u732e\u8005\u8fc7\u53bb\u4e24\u5468 (2023 10.12 - 10.25) \u7684\u6770\u51fa\u5de5\u4f5c\uff0c\u4ee5\u4e0b\u662f\u91cd\u70b9\u5408\u5e76\u5185\u5bb9\u6982\u8ff0"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ud83d\udd27 \u8bed\u8a00\u53ca\u5de5\u5177\u94fe\u66f4\u65b0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"KCL IDE \u66f4\u65b0 - \u652f\u6301\u5bf9\u7b26\u53f7\u7684\u5f15\u7528\u8df3\u8f6c\u548c\u91cd\u547d\u540d\uff1b\u4f18\u5316\u4e86\u5f15\u7528\u8bed\u53e5\u548c union \u7c7b\u578b\u7684\u683c\u5f0f\u5316\u8f93\u51fa\uff1b\u4fee\u590d\u4e86\u6587\u4ef6\u53d8\u66f4\u5f15\u53d1\u8bed\u8a00\u670d\u52a1\u5d29\u6e83\u7684\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"KCL \u5305\u7ba1\u7406\u5de5\u5177 KPM \u66f4\u65b0 - kpm \u6b63\u5728\u96c6\u6210 AritifactHub\uff0c\u652f\u6301\u5c06 KCL \u5305\u53d1\u5e03\u5230 ArtifactHub"),(0,n.kt)("li",{parentName:"ul"},"KCL \u8bed\u8a00\u66f4\u65b0 - \u4f18\u5316\u4e86\u65b9\u6cd5\u7684\u53c2\u6570\u7c7b\u578b\u4e0d\u5339\u914d\u7b49\u62a5\u9519\u4fe1\u606f\uff0c\u660e\u786e\u6307\u51fa\u4e86\u4e0d\u5339\u914d\u7684\u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"KCL \u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762 - \u91cd\u65b0\u8bbe\u8ba1\u4e86 KCL \u76f8\u5173\u5de5\u5177\u7684\u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762\u548c\u5de5\u4f5c\u6d41\uff0c\u8fdb\u5165\u5b9e\u73b0\u9636\u6bb5")),(0,n.kt)("h2",{id:"\u7279\u522b\u9e23\u8c22"},"\u7279\u522b\u9e23\u8c22"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u6392\u540d\u4e0d\u5206\u5148\u540e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u611f\u8c22 @jakezhu9 \u5bf9 KCL \u8bed\u6cd5\u89e3\u6790\u5355\u5143\u6d4b\u8bd5\u7684\u6539\u8fdb\uff0c\u5c06\u90e8\u5206\u6d4b\u8bd5\u7528\u4f8b\u7edf\u4e00\u8fc1\u79fb\u5230\u4f7f\u7528 snaptest \u6846\u67b6 \ud83d\ude4c ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/kcl-lang/kcl/pull/794"},"https://github.com/kcl-lang/kcl/pull/794"))," \u7b49"),(0,n.kt)("li",{parentName:"ul"},"\u611f\u8c22 @opsnull \u5bf9 KCL \u5b98\u7f51\u6587\u6863\u4e2d\u4ee3\u7801\u793a\u4f8b\u7684\u7ea0\u9519\u548c\u8d21\u732e \ud83d\ude4c ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/kcl-lang/kcl-lang.io/pull/182"},"https://github.com/kcl-lang/kcl-lang.io/pull/182"))),(0,n.kt)("li",{parentName:"ul"},"\u611f\u8c22 @prahaladramji \u5bf9 KCL IntelliJ \u63d2\u4ef6\u683c\u5f0f\u5316\u529f\u80fd\u7684\u7ea0\u9519\u548c\u4f18\u5316 \ud83d\ude4c ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/kcl-lang/intellij-kcl/pull/15"},"https://github.com/kcl-lang/intellij-kcl/pull/15"))),(0,n.kt)("li",{parentName:"ul"},"\u611f\u8c22 @steeling, @prahaladramji, @liangyuanpen, @Kory Taborn \u7b49\u5728\u4f7f\u7528 KCL \u53ca\u5de5\u5177\u94fe\u8fc7\u7a0b\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u53cd\u9988\u548c\u8ba8\u8bba \ud83d\ude4c")),(0,n.kt)("h2",{id:"\u7cbe\u9009\u66f4\u65b0"},"\u7cbe\u9009\u66f4\u65b0"),(0,n.kt)("h3",{id:"kcl-ide-\u63d2\u4ef6\u66f4\u65b0"},"KCL IDE \u63d2\u4ef6\u66f4\u65b0"),(0,n.kt)("p",null,"\u5728\u5f85\u53d1\u5e03\u7684\u7248\u672c\u4e2d\uff0cKCL IDE \u63d2\u4ef6\u652f\u6301\u4e86\u5bf9\u7b26\u53f7\u7684\u5f15\u7528\u8df3\u8f6c\u53ca\u91cd\u547d\u540d\u529f\u80fd\uff1b\u4f18\u5316\u4e86\u5bf9\u5f15\u7528\u8bed\u53e5\u548cunion\u7c7b\u578b\u7684\u683c\u5f0f\u5316\u8f93\u51fa\u3002\u540c\u65f6\u4fee\u590d\u4e86\u8bed\u8a00\u670d\u52a1\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u76f8\u5173\u7684bug\uff1a\u6587\u4ef6\u7ef4\u5ea6\u7684\u53d8\u66f4\u5f15\u53d1\u4f1a\u8bed\u8a00\u670d\u52a1\u5d29\u6e83\uff0c\u5fc5\u987b\u91cd\u542f IDE \u6062\u590d\uff0c\u73b0\u5df2\u4fee\u590d\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"\u8f6c\u5230\u5f15\u7528"),"\u6216",(0,n.kt)("inlineCode",{parentName:"p"},"\u67e5\u627e\u6240\u6709\u5f15\u7528"),"\uff1a\n",(0,n.kt)("img",{src:l(11864).Z,width:"1682",height:"880"})),(0,n.kt)("p",null,"\u5bf9\u7b26\u53f7\u8fdb\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"\u91cd\u547d\u540d"),"\uff1a\n",(0,n.kt)("img",{src:l(85852).Z,width:"832",height:"513"})),(0,n.kt)("p",null,"\u5bf9\u5f15\u7528\u8bed\u53e5\u548c union \u7c7b\u578b\u7684\u683c\u5f0f\u5316\uff1a\u4f18\u5316\u4e86\u5f15\u7528\u8bed\u53e5\u4e0e\u5176\u4ed6\u4ee3\u7801\u5757\u4e4b\u95f4\u7684\u7a7a\u884c\u884c\u4e3a\uff08\u683c\u5f0f\u5316\u4e3a\u4e00\u4e2a\u7a7a\u884c\uff09\u3001union \u7c7b\u578b\u7684\u7a7a\u683c\u884c\u4e3a\uff08\u591a\u4e2a\u7c7b\u578b\u4e4b\u95f4\u683c\u5f0f\u5316\u4e3a\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"p"},"|")," \u95f4\u9694\uff09\uff1a\n",(0,n.kt)("img",{src:l(29792).Z,width:"590",height:"269"})),(0,n.kt)("h3",{id:"kcl-\u5305\u7ba1\u7406\u5de5\u5177"},"KCL \u5305\u7ba1\u7406\u5de5\u5177"),(0,n.kt)("p",null,"\u5728\u5f85\u53d1\u5e03\u7684\u7248\u672c\u4e2d\uff0ckpm \u652f\u6301\u4e0e ",(0,n.kt)("a",{parentName:"p",href:"https://artifacthub.io/"},"ArtifactHub")," \u7684\u96c6\u6210\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5411",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/artifacthub"},"kcl-lang Registry \u4ed3\u5e93")," \u63d0\u4ea4 PR \u7684\u65b9\u5f0f\u5c06\u60a8\u7684 KCL \u5305\u53d1\u5e03\u5230 ArtifactHub. \u76ee\u524d\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://staging.artifacthub.io/packages/search?ts_query_web=kcl&sort=relevance&page=1"},"ArtifactHub staging \u9875\u9762"),"\u770b\u5230\u9884\u4e0a\u4f20\u7684 KCL k8s \u5305\u7684\u6548\u679c\uff0c\u8be5\u529f\u80fd\u5c06\u5728 v0.6.1 \u7248\u672c\u53d1\u5e03\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(13639).Z,width:"2204",height:"1536"})),(0,n.kt)("h3",{id:"kcl-\u8bed\u8a00\u66f4\u65b0"},"KCL \u8bed\u8a00\u66f4\u65b0"),(0,n.kt)("p",null,"KCL \u7684\u7f16\u8bd1\u547d\u4ee4\u6b63\u5728\u6301\u7eed\u5730\u4f18\u5316\u9519\u8bef\u4fe1\u606f\u7684\u8f93\u51fa\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u6e05\u6670\u6613\u61c2\u7684\u6307\u5f15\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u5b9a\u4f4d\u548c\u4fee\u590d\u95ee\u9898\uff0c\u7f16\u5199\u51fa\u6b63\u786e\u7684\u4ee3\u7801\u3002\u8fd1\u671f\uff0cKCL \u5bf9\u65b9\u6cd5\u7c7b\u578b\u548c\u53c2\u6570\u65b9\u9762\u7684\u9519\u8bef\u4fe1\u606f\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u4f8b\u5982\uff1a\u660e\u786e\u6307\u51fa\u4e86\u65b9\u6cd5\u7684\u53c2\u6570\u7c7b\u578b\u4e0d\u5339\u914d\u7684\u62a5\u9519\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(47737).Z,width:"1254",height:"968"})),(0,n.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u4fee\u590d\u4e86\u5c5e\u6027\u8d4b\u503c\u7684\u60f0\u6027\u6c42\u503c\u95ee\u9898\uff0c\u5c06\u5c5e\u6027\u8d4b\u503c\u7684\u8ba1\u7b97\u548c\u7ea6\u675f\u6821\u9a8c\u5ef6\u8fdf\u5230\u914d\u7f6e\u5408\u5e76\u5b8c\u6210\u540e\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u7f16\u8bd1\u62a5\u9519\u3002"),(0,n.kt)("h3",{id:"kcl-\u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762"},"KCL \u547d\u4ee4\u884c\u7edf\u4e00\u754c\u9762"),(0,n.kt)("p",null,"\u4e3a\u5411 KCL \u7528\u6237\u63d0\u4f9b\u4e00\u81f4\u548c\u6807\u51c6\u5316\u7684\u4f53\u9a8c\uff0c\u6211\u4eec\u6b63\u5728\u5bf9 KCL \u7684\u547d\u4ee4\u884c\u754c\u9762\u8fdb\u884c\u8bbe\u8ba1\u6539\u8fdb\uff0c\u4ee5\u8fbe\u5230\u7edf\u4e00\u7684\u7528\u6237\u5de5\u4f5c\u6d41\u3001\u76f8\u5173\u5de5\u5177\u548c\u591a\u8bed\u8a00 API \u7684\u65e0\u7f1d\u96c6\u6210\u3001\u547d\u4ee4\u884c\u5de5\u5177\u7684\u53ef\u6269\u5c55\u6027\u3002\u76ee\u524d\u5b8c\u6210\u4e86\u521d\u6b65\u8bbe\u8ba1\u8fdb\u5165\u5b9e\u73b0\u9636\u6bb5\uff0c\u6b22\u8fce\u611f\u5174\u8da3\u7684\u5c0f\u4f19\u4f34\u4e00\u8d77\u8ba8\u8bba\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues/756"},"https://github.com/kcl-lang/kcl/issues/756")),(0,n.kt)("h3",{id:"\u793e\u533a\u52a8\u6001"},"\u793e\u533a\u52a8\u6001"),(0,n.kt)("p",null,"\u968f\u7740\u52a0\u5165 CNCF sandbox\uff0cCNCF KCL Slack \u9891\u9053\u5df2\u7ecf\u5f00\u901a\uff0c\u4e0e KCL \u8bed\u8a00\u76f8\u5173\u7684\u4ea4\u6d41\u5c06\u9010\u6b65\u8fc1\u79fb\u5230\u65b0\u7684\u9891\u9053\uff0c\u6b22\u8fce\u5927\u5bb6\u52a0\u5165\u4ea4\u6d41\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u52a0\u5165 CNCF \u5de5\u4f5c\u7a7a\u95f4\uff0c\u586b\u5199\u4e2a\u4eba\u90ae\u7bb1\u5373\u53ef: ",(0,n.kt)("a",{parentName:"li",href:"https://communityinviter.com/apps/cloud-native/cncf"},"https://communityinviter.com/apps/cloud-native/cncf")),(0,n.kt)("li",{parentName:"ol"},"\u52a0\u5165 CNCF KCL \u9891\u9053: ",(0,n.kt)("a",{parentName:"li",href:"https://cloud-native.slack.com/archives/C05TC96NWN8"},"https://cloud-native.slack.com/archives/C05TC96NWN8"))),(0,n.kt)("h3",{id:"\u8fd1\u671f\u6d3b\u52a8"},"\u8fd1\u671f\u6d3b\u52a8"),(0,n.kt)("h4",{id:"kcd-\u676d\u5dde\u7ad9\u6d3b\u52a8\u987a\u5229\u4e3e\u884c"},"KCD \u676d\u5dde\u7ad9\u6d3b\u52a8\u987a\u5229\u4e3e\u884c"),(0,n.kt)("p",null,"Kubernetes Community Days\uff08KCD\uff09\u676d\u5dde\u7ad9\u6d3b\u52a8\u5df2\u4e8e 10.21 \u987a\u5229\u4e3e\u884c\uff0c\u73b0\u573a\u6536\u5230\u4e86 KCL \u7528\u6237\u4ea4\u6d41\u4e92\u52a8\u548c\u70ed\u60c5\u53cd\u9988\u3002KCL \u9879\u76ee\u7684\u5f90\u9e4f\u98de\u53d1\u8868\u4e86\u300a\u57fa\u4e8e\u4e91\u539f\u751f\u4f9b\u5e94\u94fe\u7684\u914d\u7f6e\u7b56\u7565\u7ba1\u7406\u65b0\u8303\u5f0f\u300b\u8bae\u9898\u7684\u6f14\u8bb2\uff0c\u76f8\u5173\u8d44\u6599\u5df2\u4e0a\u4f20 KCL \u5b98\u7f51\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/talks/kcl-cncf-kcd-hangzhou2023.pdf"},"https://kcl-lang.io/talks/kcl-cncf-kcd-hangzhou2023.pdf")),(0,n.kt)("h4",{id:"kcl-\u5f00\u6e90\u53cc\u5468\u4f1a"},"KCL \u5f00\u6e90\u53cc\u5468\u4f1a"),(0,n.kt)("p",null,"\u8fd1\u671f KCL \u5f00\u6e90\u53cc\u5468\u4f1a\u5c06\u4e8e 10.26 \u8fdb\u884c\uff0c\u6b22\u8fce\u793e\u533a\u5c0f\u4f19\u4f34\u8e0a\u8dc3\u53c2\u4e0e\u3001\u4ea4\u6d41\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community/discussions/9"},"https://github.com/kcl-lang/community/discussions/9")),(0,n.kt)("p",null,"\u70b9\u51fb\u94fe\u63a5\u5165\u4f1a\uff0c\u6216\u6dfb\u52a0\u81f3\u4f1a\u8bae\u5217\u8868\uff1a\n",(0,n.kt)("a",{parentName:"p",href:"https://meeting.tencent.com/dm/Hc6sNpqTWnPb"},"https://meeting.tencent.com/dm/Hc6sNpqTWnPb")),(0,n.kt)("p",null,"#\u817e\u8baf\u4f1a\u8bae\uff1a778-2381-6338"),(0,n.kt)("p",null,"\u590d\u5236\u8be5\u4fe1\u606f\uff0c\u6253\u5f00\u624b\u673a\u817e\u8baf\u4f1a\u8bae\u5373\u53ef\u53c2\u4e0e"),(0,n.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,n.kt)("p",null,"\u2764\ufe0f \u611f\u8c22\u6240\u6709 KCL \u7528\u6237\u548c\u793e\u533a\u5c0f\u4f19\u4f34\u5728\u793e\u533a\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u53cd\u9988\u4e0e\u5efa\u8bae\u3002\u9884\u8ba1 11 \u6708\u5e95\u6211\u4eec\u4f1a\u6b63\u5f0f\u53d1\u5e03 KCL v0.7 \u65b0\u7248\u672c\uff0c\u656c\u8bf7\u671f\u5f85!"),(0,n.kt)("p",null,"\u66f4\u591a\u5176\u4ed6\u8d44\u6e90\u8bf7\u53c2\u8003\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL \u7f51\u7ad9"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://kusionstack.io/"},"KusionStack \u7f51\u7ad9"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/release-policy/roadmap"},"KCL 2023 \u8def\u7ebf\u89c4\u5212"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/milestone/7"},"KCL v0.7.0 Milestone"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues"},"KCL Github Issues"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/kcl-lang/discussions"},"KCL Github Discussion"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"KCL Community")))))}o.isMDXComponent=!0},71831:(t,e,l)=>{l.d(e,{Z:()=>a});const a=l.p+"assets/images/biweekly-newsletter-zh-bd4cf8c2bcc913a580e7b0e5d6691a08.png"},29792:(t,e,l)=>{l.d(e,{Z:()=>a});const a=l.p+"assets/images/Format-bacf4e759fcb2a5a29f0f219b4dfa8ec.gif"},47737:(t,e,l)=>{l.d(e,{Z:()=>a});const a=l.p+"assets/images/error-msg-b8d24e1f29627c121d233db677b923b6.png"},11864:(t,e,l)=>{l.d(e,{Z:()=>a});const a=l.p+"assets/images/FindRefs-924c460d5480d6888c032d8b406a5c74.png"},85852:(t,e,l)=>{l.d(e,{Z:()=>a});const a=l.p+"assets/images/Rename-82061ac2cb03a77c542d5a4474797228.gif"},13639:(t,e,l)=>{l.d(e,{Z:()=>a});const a=l.p+"assets/images/artifacthubStaging-6afae7c6f808a91ec2bd8af334a1ea80.png"}}]);