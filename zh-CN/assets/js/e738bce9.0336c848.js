"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(n),k=l,h=u["".concat(m,".").concat(k)]||u[k]||c[k]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},36305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={slug:"2023-08-09-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 07.26 - 08.09) | KCL 0.5.1 \u548c 0.5.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},i=void 0,p={permalink:"/zh-CN/blog/2023-08-09-biweekly-newsletter",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-08-09-biweekly-newsletter/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-08-09-biweekly-newsletter/index.md",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 07.26 - 08.09) | KCL 0.5.1 \u548c 0.5.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03",description:"KCL \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\u5e76\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002",date:"2023-08-09T00:00:00.000Z",formattedDate:"2023\u5e748\u67089\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"Biweekly-Newsletter",permalink:"/zh-CN/blog/tags/biweekly-newsletter"}],readingTime:4.945,hasTruncateMarker:!1,authors:[{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"}],frontMatter:{slug:"2023-08-09-biweekly-newsletter",title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 07.26 - 08.09) | KCL 0.5.1 \u548c 0.5.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03",authors:{name:"KCL \u56e2\u961f",title:"KCL \u56e2\u961f"},tags:["KCL","Biweekly-Newsletter"]},prevItem:{title:"KCL \u793e\u533a\u5f00\u6e90\u53cc\u5468\u62a5 (2023 08.10 - 08.23) | KCL v0.5.3, v0.5.4 \u548c v0.5.5 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/2023-08-23-biweekly-newsletter"},nextItem:{title:"\u4f7f\u7528 Github\u3001Argo CD \u548c KCL \u5b9e\u73b0 GitOps \u4ee5\u7b80\u5316 DevOps",permalink:"/zh-CN/blog/2023-07-31-kcl-github-argocd-gitops"}},m={authorsImageUrls:[void 0]},o=[{value:"\u5185\u5bb9\u6982\u8ff0",id:"\u5185\u5bb9\u6982\u8ff0",level:2},{value:"\u7279\u522b\u9e23\u8c22",id:"\u7279\u522b\u9e23\u8c22",level:2},{value:"\u7cbe\u9009\u66f4\u65b0",id:"\u7cbe\u9009\u66f4\u65b0",level:2},{value:"KCL Import \u5de5\u5177\u66f4\u65b0",id:"kcl-import-\u5de5\u5177\u66f4\u65b0",level:3},{value:"Helmfile KCL \u63d2\u4ef6",id:"helmfile-kcl-\u63d2\u4ef6",level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],s={toc:o},u="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(71831).Z,width:"1127",height:"435"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\u5e76\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u6bd4\u5982\u4e91\u539f\u751f Kubernetes \u914d\u7f6e\u573a\u666f\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u7b80\u5355\u7684\u81ea\u52a8\u5316\u548c\u751f\u6001\u5de5\u5177\u96c6\u6210\u3002"),(0,l.kt)("p",null,"\u672c\u680f\u76ee\u5c06\u4f1a\u53cc\u5468\u66f4\u65b0 KCL \u8bed\u8a00\u793e\u533a\u6700\u65b0\u52a8\u6001\uff0c\u5305\u62ec\u529f\u80fd\u3001\u5b98\u7f51\u66f4\u65b0\u548c\u6700\u65b0\u7684\u793e\u533a\u52a8\u6001\u7b49\uff0c\u5e2e\u52a9\u5927\u5bb6\u66f4\u597d\u5730\u4e86\u89e3 KCL \u793e\u533a\uff01"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"KCL \u5b98\u7f51\uff1a",(0,l.kt)("a",{parentName:"em",href:"https://kcl-lang.io"},"https://kcl-lang.io")))),(0,l.kt)("h2",{id:"\u5185\u5bb9\u6982\u8ff0"},"\u5185\u5bb9\u6982\u8ff0"),(0,l.kt)("p",null,"\u8fc7\u53bb\u4e24\u5468 (2023 07.26 - 08.09)\uff0cKCL \u6240\u6709\u9879\u76ee\u4e2d\u603b\u8ba1\u6709\xa0",(0,l.kt)("strong",{parentName:"p"},"34"),"\xa0\u4e2a PR \u88ab\u5408\u5e76\uff0c\u611f\u8c22\u6240\u6709\u8d21\u732e\u8005\u7684\u6770\u51fa\u5de5\u4f5c\uff0c\u4ee5\u4e0b\u662f\u91cd\u70b9\u5408\u5e76\u5185\u5bb9\u6982\u8ff0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud83d\udd27 \u8bed\u8a00\u53ca\u5de5\u5177\u94fe\u66f4\u65b0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"KCL Doc \u6587\u6863\u5de5\u5177\u65b0\u589e Markdown \u6587\u6863\u5bfc\u51fa\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"KCL\xa0Import \u5bfc\u5165\u5de5\u5177\u66f4\u65b0 - \u652f\u6301 JsonSchema \u8f6c\u6362\u4e3a KCL Schema"),(0,l.kt)("li",{parentName:"ul"},"KCL \u5305\u7ba1\u7406\u5de5\u5177 KPM \u652f\u6301\u5728 kcl.mod \u4e2d\u8bbe\u7f6e\u7f16\u8bd1\u53c2\u6570\uff0c\u4f18\u5316\u547d\u4ee4\u884c\u63d0\u793a\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"KCL IDE \u63d2\u4ef6\u4f18\u5316\u8865\u5168\u3001\u8df3\u8f6c\u548c\u60ac\u505c\u6587\u6863\u663e\u793a\u7b49\u529f\u80fd\uff0c\u5e76\u652f\u6301 NeoVim \u7f16\u8f91\u5668"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud83c\udfc4 API \u66f4\u65b0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"KCL Schema \u6a21\u578b\u89e3\u6790\xa0GetSchemaType API \u65b0\u589e\u88c5\u9970\u5668\u4fe1\u606f\u548c\u5305\u4fe1\u606f\u5b57\u6bb5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud83c\udfe0 \u793e\u533a\u6269\u5c55\u66f4\u65b0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Helmfile KCL \u63d2\u4ef6\u652f\u6301"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud83d\udcf0 \u5b98\u7f51\u548c\u7528\u4f8b\u66f4\u65b0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"KCL \u5b98\u7f51\u65b0\u589e\xa0v0.5.x\xa0\u6587\u6863\u7248\u672c\u9009\u62e9"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e KCL \u7528\u4f8b\u4ed3\u5e93:\xa0",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"https://github.com/kcl-lang/examples"},"https://github.com/kcl-lang/examples")),"  ")))),(0,l.kt)("h2",{id:"\u7279\u522b\u9e23\u8c22"},"\u7279\u522b\u9e23\u8c22"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u611f\u8c22 @jakezhu9 \u5bf9 KCL Import \u5de5\u5177 JsonSchema \u8f6c\u6362\u7684\u8d21\u732e \ud83d\ude4c"),(0,l.kt)("li",{parentName:"ul"},"\u611f\u8c22 @xxmao123 \u5bf9 Vim \u548c NeoVim KCL \u63d2\u4ef6\u7684\u8d21\u732e \ud83d\ude4c"),(0,l.kt)("li",{parentName:"ul"},"\u611f\u8c22 @yyxhero \u5728 Helmfile KCL \u63d2\u4ef6\u652f\u6301\u4e2d\u63d0\u4f9b\u7684\u5e2e\u52a9\u4e0e\u652f\u6301 \ud83d\ude4c"),(0,l.kt)("li",{parentName:"ul"},"\u611f\u8c22 @nkabir, @mihaigalos, @prahaladramji, @dhhopen \u7b49\u5728\u4f7f\u7528 KCL \u8fc7\u7a0b\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u5efa\u8bae\u548c\u8ba8\u8bba\xa0\ud83d\ude4c")),(0,l.kt)("h2",{id:"\u7cbe\u9009\u66f4\u65b0"},"\u7cbe\u9009\u66f4\u65b0"),(0,l.kt)("h3",{id:"kcl-import-\u5de5\u5177\u66f4\u65b0"},"KCL Import \u5de5\u5177\u66f4\u65b0"),(0,l.kt)("p",null,"KCL Import \u5de5\u5177\u5728 Protobuf, OpenAPI \u6a21\u578b\u548c Go \u7ed3\u6784\u4f53\u8f6c\u6362\u4e3a KCL Schema \u7684\u57fa\u7840\u4e0a\uff0c\u65b0\u589e JsonSchema \u5230 KCL Schema \u7684\u8f6c\u6362\u652f\u6301\uff0c\u6bd4\u5982\u5bf9\u4e8e\u5982\u4e0b\u7684 JsonSchema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n\xa0"$schema":\xa0"http://json-schema.org/draft-07/schema#",\n\xa0"$id":\xa0"https://example.com/schemas/customer.json",\n\xa0"type":\xa0"object",\n\xa0"$defs":\xa0{\n\xa0\xa0"address":\xa0{\n\xa0\xa0\xa0"type":\xa0"object",\n\xa0\xa0\xa0"properties":\xa0{\n\xa0\xa0\xa0\xa0"city":\xa0{\n\xa0\xa0\xa0\xa0\xa0"type":\xa0"string"\n\xa0\xa0\xa0\xa0},\n\xa0\xa0\xa0\xa0"state":\xa0{\n\xa0\xa0\xa0\xa0\xa0"$ref":\xa0"#/$defs/state"\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0}\n\xa0\xa0},\n\xa0\xa0"state":\xa0{\n\xa0\xa0\xa0"type":\xa0"object",\n\xa0\xa0\xa0"properties":\xa0{\n\xa0\xa0\xa0\xa0"name":\xa0{\n\xa0\xa0\xa0\xa0\xa0"type":\xa0"string"\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0}\n\xa0\xa0}\n\xa0},\n\xa0"properties":\xa0{\n\xa0\xa0"name":\xa0{\n\xa0\xa0\xa0"type":\xa0"string"\n\xa0\xa0},\n\xa0\xa0"address":\xa0{\n\xa0\xa0\xa0"$ref":\xa0"#/$defs/address"\n\xa0\xa0}\n\xa0}\n}\n')),(0,l.kt)("p",null,"\u7ecf\u8fc7 KCL Import \u5de5\u5177\u53ef\u4ee5\u8f93\u51fa\u4e3a\u5982\u4e0b KCL \u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'schema\xa0Customer:\n\xa0\xa0\xa0\xa0"""\n\xa0\xa0\xa0\xa0Customer\n\n\xa0\xa0\xa0\xa0Attributes\n\xa0\xa0\xa0\xa0----------\n\xa0\xa0\xa0\xa0name:\xa0str,\xa0optional\n\xa0\xa0\xa0\xa0address:\xa0Address,\xa0optional\n\xa0\xa0\xa0\xa0"""\n\n\xa0\xa0\xa0\xa0name?:\xa0str\n\xa0\xa0\xa0\xa0address?:\xa0Address\n\nschema\xa0Address:\n\xa0\xa0\xa0\xa0"""\n\xa0\xa0\xa0\xa0Address\n\n\xa0\xa0\xa0\xa0Attributes\n\xa0\xa0\xa0\xa0----------\n\xa0\xa0\xa0\xa0city:\xa0str,\xa0optional\n\xa0\xa0\xa0\xa0state:\xa0State,\xa0optional\n\xa0\xa0\xa0\xa0"""\n\n\xa0\xa0\xa0\xa0city?:\xa0str\n\xa0\xa0\xa0\xa0state?:\xa0State\n\nschema\xa0State:\n\xa0\xa0\xa0\xa0"""\n\xa0\xa0\xa0\xa0State\n\n\xa0\xa0\xa0\xa0Attributes\n\xa0\xa0\xa0\xa0----------\n\xa0\xa0\xa0\xa0name:\xa0str,\xa0optional\n\xa0\xa0\xa0\xa0"""\n\n\xa0\xa0\xa0\xa0name?:\xa0str\n')),(0,l.kt)("h3",{id:"helmfile-kcl-\u63d2\u4ef6"},"Helmfile KCL \u63d2\u4ef6"),(0,l.kt)("p",null,"Helmfile \u662f\u7528\u4e8e\u90e8\u7f72 Helm Chart \u7684\u58f0\u660e\u6027\u89c4\u8303\u548c\u5de5\u5177\uff0c\u901a\u8fc7 Helmfile KCL \u63d2\u4ef6\u60a8\u53ef\u4ee5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u65e0\u4fb5\u5165\u7684 Hook \u65b9\u5f0f\u7f16\u8f91\u6216\u8005\u9a8c\u8bc1 Helm Chart \u914d\u7f6e\uff0c\u5c06 Kubernetes \u914d\u7f6e\u7ba1\u7406\u7684\u6570\u636e\u90e8\u5206\u548c\u903b\u8f91\u90e8\u5206\u5206\u79bb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u8d44\u6e90\u6807\u7b7e/\u6ce8\u89e3, \u6ce8\u5165 Sidecar \u5bb9\u5668\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 KCL Schema \u6821\u9a8c\u8d44\u6e90\uff0c\u5b9a\u4e49\u81ea\u5df1\u7684\u62bd\u8c61\u6a21\u578b\u5e76\u5206\u4eab\u590d\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u96c5\u5730\u7ef4\u62a4\u591a\u73af\u5883\u3001\u591a\u79df\u6237\u573a\u666f\u914d\u7f6e\uff0c\u800c\u4e0d\u662f\u7b80\u5355\u5730\u590d\u5236\u7c98\u8d34")),(0,l.kt)("p",null,"\u4e0b\u9762\u4ee5\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b\u8fdb\u884c\u8be6\u7ec6\u8bf4\u660e\uff0c\u4f7f\u7528 Helmfile KCL \u63d2\u4ef6\u65e0\u9700\u60a8\u5b89\u88c5\u4e0e KCL \u4efb\u4f55\u76f8\u5173\u7684\u7ec4\u4ef6\uff0c\u53ea\u9700\u672c\u673a\u5177\u5907 Helmfile \u5de5\u5177\u7684\u6700\u65b0\u7248\u672c\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u5982\u4e0b\u6240\u793a\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"helmfile.yaml"),"\xa0\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'repositories:\n-\xa0name:\xa0prometheus-community\n\xa0\xa0url:\xa0https://prometheus-community.github.io/helm-charts\n\nreleases:\n-\xa0name:\xa0prom-norbac-ubuntu\n\xa0\xa0namespace:\xa0prometheus\n\xa0\xa0chart:\xa0prometheus-community/prometheus\n\xa0\xa0set:\n\xa0\xa0-\xa0name:\xa0rbac.create\n\xa0\xa0\xa0\xa0value:\xa0false\n\xa0\xa0transformers:\n\xa0\xa0#\xa0Use\xa0KCL\xa0Plugin\xa0to\xa0mutate\xa0or\xa0validate\xa0Kubernetes\xa0manifests.\n\xa0\xa0-\xa0apiVersion:\xa0krm.kcl.dev/v1alpha1\n\xa0\xa0\xa0\xa0kind:\xa0KCLRun\n\xa0\xa0\xa0\xa0metadata:\n\xa0\xa0\xa0\xa0\xa0\xa0name:\xa0"set-annotation"\n\xa0\xa0\xa0\xa0\xa0\xa0annotations:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0config.kubernetes.io/function:\xa0|\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0container:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0image:\xa0docker.io/kcllang/kustomize-kcl:v0.2.0\n\xa0\xa0\xa0\xa0spec:\n\xa0\xa0\xa0\xa0\xa0\xa0source:\xa0|\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[resource\xa0|\xa0{if\xa0resource.kind\xa0==\xa0"Deployment":\xa0metadata.annotations:\xa0{"managed-by"\xa0=\xa0"helmfile-kcl"}}\xa0for\xa0resource\xa0in\xa0option("resource_list").items]\n')),(0,l.kt)("p",null,"\u5728\u4e0a\u8ff0\u914d\u7f6e\u4e2d\uff0c\u6211\u4eec\u5f15\u7528\u4e86 Prometheus Helm Chart, \u5e76\u901a\u8fc7\u4e00\u884c KCL \u4ee3\u7801\u5c31\u53ef\u4ee5\u5b8c\u6210 Prometheus \u7684\u6240\u6709\u7684 Deployment \u8d44\u6e90\u6ce8\u5165\u6807\u7b7e\xa0",(0,l.kt)("inlineCode",{parentName:"p"},'managed-by="helmfile-kcl"'),"\uff0c\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u6211\u4eec\u53ef\u4ee5\u5c06\u4e0a\u8ff0\u914d\u7f6e\u4e0b\u53d1\u5230\u96c6\u7fa4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helmfile\xa0apply\n")),(0,l.kt)("p",null,"\u66f4\u591a\u7528\u4f8b\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/krm-kcl"},"\u8fd9\u91cc")),(0,l.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,l.kt)("p",null,"\u2764\ufe0f \u611f\u8c22\u6240\u6709 KCL \u7528\u6237\u548c\u793e\u533a\u5c0f\u4f19\u4f34\u5728\u793e\u533a\u4e2d\u63d0\u51fa\u7684\u5b9d\u8d35\u53cd\u9988\u4e0e\u5efa\u8bae\u3002\u540e\u7eed\u6211\u4eec\u4f1a\u64b0\u5199\u66f4\u591a KCL v0.5.x \u65b0\u7248\u672c\u529f\u80fd\u89e3\u8bfb\u7cfb\u5217\u6587\u7ae0\uff0c\u656c\u8bf7\u671f\u5f85!"),(0,l.kt)("p",null,"\u66f4\u591a\u5176\u4ed6\u8d44\u6e90\u8bf7\u53c2\u8003\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL \u7f51\u7ad9"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://kusionstack.io/"},"KusionStack \u7f51\u7ad9"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/release-policy/roadmap"},"KCL 2023 \u8def\u7ebf\u89c4\u5212"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/milestone/6"},"KCL v0.6.0 Milestone"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues"},"KCL Github Issues"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/orgs/kcl-lang/discussions"},"KCL Github Discussion"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"KCL Community"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/releases/tag/v0.5.0"},"KCL v0.5.0 Release"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/releases/tag/v0.5.1"},"KCL v0.5.1 Release"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/releases/tag/v0.5.2"},"KCL v0.5.2\xa0Release")))))}c.isMDXComponent=!0},71831:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/biweekly-newsletter-zh-bd4cf8c2bcc913a580e7b0e5d6691a08.png"}}]);