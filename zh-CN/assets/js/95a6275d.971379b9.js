"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11615],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),k=r,u=m["".concat(p,".").concat(k)]||m[k]||d[k]||o;return t?a.createElement(u,i(i({ref:n},s),{},{components:t})):a.createElement(u,i({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=k;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={slug:"2023-06-29-k8s-sidecar-2",title:"\u804a\u804a K8S \u4e2d\u7684 Sidecar \u8bbe\u8ba1\u6a21\u5f0f\xb7\u7b2c 2 \u7bc7",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","k8s","Sidecar"]},i=void 0,l={permalink:"/zh-CN/blog/2023-06-29-k8s-sidecar-2",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-06-29-k8s-sidecar-2/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-06-29-k8s-sidecar-2/index.md",title:"\u804a\u804a K8S \u4e2d\u7684 Sidecar \u8bbe\u8ba1\u6a21\u5f0f\xb7\u7b2c 2 \u7bc7",description:"\u4ecb\u7ecd",date:"2023-06-29T00:00:00.000Z",formattedDate:"2023\u5e746\u670829\u65e5",tags:[{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"k8s",permalink:"/zh-CN/blog/tags/k-8-s"},{label:"Sidecar",permalink:"/zh-CN/blog/tags/sidecar"}],readingTime:3.32,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2023-06-29-k8s-sidecar-2",title:"\u804a\u804a K8S \u4e2d\u7684 Sidecar \u8bbe\u8ba1\u6a21\u5f0f\xb7\u7b2c 2 \u7bc7",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","k8s","Sidecar"]},prevItem:{title:"WAIC 2023 \u4f1a\u8bae KCL \u4ecb\u7ecd\u5185\u5bb9",permalink:"/zh-CN/blog/2023-03-26-kcl-os2atc-meeting"},nextItem:{title:"\u804a\u804a K8S \u4e2d\u7684 Sidecar \u8bbe\u8ba1\u6a21\u5f0f\xb7\u7b2c 1 \u7bc7",permalink:"/zh-CN/blog/2023-06-05-k8s-sidecar-1"}},p={authorsImageUrls:[void 0]},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"1. Pod \u7684 OpenAPI \u5b9a\u4e49",id:"1-pod-\u7684-openapi-\u5b9a\u4e49",level:2},{value:"2. \u4f7f\u7528 KCL \u5b9a\u4e49 Pod \u8d44\u6e90",id:"2-\u4f7f\u7528-kcl-\u5b9a\u4e49-pod-\u8d44\u6e90",level:2},{value:"3. \u5c0f\u7ed3",id:"3-\u5c0f\u7ed3",level:2}],s={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u5728\u524d\u4e00\u7bc7\u6587\u7ae0 ",(0,r.kt)("a",{parentName:"p",href:"/blog/2023-06-05-k8s-sidecar-1/"},"\u804a\u804a K8S \u4e2d\u7684Sidecar\u8bbe\u8ba1\u6a21\u5f0f\xb7\u7b2c 1 \u7bc7"),"\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u571f\u8bdd\u8bf4\u7684\u4e09\u8e66\u5b50\u7684 Sidecar \u8bbe\u8ba1\u6a21\u5f0f\u3002\u672c\u6587\u5c1d\u8bd5\u7528 KCL \u8fd9\u79cd\u73b0\u4ee3\u5316\u7684\u7c7b\u578b\u5b89\u5168\u7684\u914d\u7f6e\u8bed\u8a00\uff0c\u6765\u5c55\u793a Pod \u8d44\u6e90\u7684\u63cf\u8ff0\uff0c\u5728\u540e\u7eed\u7684\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4ee5 KCL \u6765\u4ecb\u7ecd Sidecar \u8fd9\u79cd\u6a21\u5f0f\u7684\u5b9e\u9645\u5e94\u7528\u3002"),(0,r.kt)("h2",{id:"1-pod-\u7684-openapi-\u5b9a\u4e49"},"1. Pod \u7684 OpenAPI \u5b9a\u4e49"),(0,r.kt)("p",null,"\u5148\u56de\u5230\u6700\u5f00\u59cb\u6700\u7b80\u5355\u7684 Nginx \u4f8b\u5b50\uff0c\u5176 YAML \u6587\u4ef6\u51e0\u4e4e\u662f\u76f8\u540c\u7684\u6a21\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: web-app\nspec:\n  containers:\n  - image: nginx\n    name: main-container\n    ports:\n      - containerPort: 80\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684 Pod \u6570\u636e\u6ee1\u8db3 Kubernetes \u89c4\u8303 \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"io.k8s.api.core.v1.Pod")," \u6a21\u578b\u7684\u5b9a\u4e49\u3002\u5b8c\u6574\u7684 OpenAPI \u5b9a\u4e49\u8bf7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/tree/master/api/openapi-spec"},"\u53c2\u8003"),"\u3002\u4ed4\u7ec6\u5206\u6790\u53ef\u4ee5\u53d1\u73b0\uff0capiVersion \u548c kind \u4fe1\u606f\u90fd\u662f\u6bd4\u8f83\u5e38\u89c1\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u6211\u4eec\u9700\u8981\u66f4\u73b0\u4ee3\u7684\u914d\u7f6e\u8bed\u8a00\u6765\u7b80\u5316\u3002"),(0,r.kt)("h2",{id:"2-\u4f7f\u7528-kcl-\u5b9a\u4e49-pod-\u8d44\u6e90"},"2. \u4f7f\u7528 KCL \u5b9a\u4e49 Pod \u8d44\u6e90"),(0,r.kt)("p",null,"KCL \u662f\u4e00\u95e8\u9762\u5411\u4e91\u539f\u751f\u9886\u57df\u914d\u7f6e\u7b56\u7565\u8bed\u8a00\uff0c\u8be6\u7ec6\u8d44\u6599\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io"},"\u8bed\u8a00\u5b98\u7f51")),(0,r.kt)("p",null,"\u57fa\u672c\u7684 KCL \u914d\u7f6e\u7a0b\u5e8f\u4ecd\u7136\u9075\u5faa ",(0,r.kt)("inlineCode",{parentName:"p"},"K=V")," \u7684\u5f62\u5f0f\uff0c YAML \u6bd4\u8f83\u76f8\u4f3c\u3002\u6bd4\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u4e0b\u9762\u7684 KCL \u4ee3\u7801\u6765\u91cd\u5199 Nginx \u5bb9\u5668\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import k8s.api.core.v1 as k8core\n\nk8core.Pod {\n    metadata.name = "web-app"\n    spec.containers = [{\n        name = "main-container"\n        image = "nginx"\n        ports = [{containerPort: 80}]\n    }]\n}\n')),(0,r.kt)("p",null,"\u5176\u4e2d import \u5bfc\u5165\u4e86 k8s \u5305\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s/api/core/v1")," \u5305\uff0c\u5176\u4e2d\u7684 Pod \u7ed3\u6784\u5b9a\u4e49\u5bf9\u5e94 Pod \u6a21\u578b\uff0c\u5176\u4e2d\u5df2\u7ecf\u5305\u542b\u4e86 apiVersion \u548c kind \u7684\u9ed8\u8ba4\u503c\uff0c\u56e0\u6b64\u53ea\u9700\u8981\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.containers")," \u5c5e\u6027\uff08KCL \u4e5f\u9488\u5bf9\u4e00\u4e9b\u591a\u7ea7\u5d4c\u5957\u7684\u5c5e\u6027\u63d0\u4f9b\u4e86\u7684\u8bed\u6cd5\u7cd6\uff09\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/package-management/installation"},"kpm \u5305\u7ba1\u7406\u5de5\u5177"),"\uff0c\u521b\u5efa\u4e00\u4e2a KCL \u7a0b\u5e8f\u6765\u5b9a\u4e49\u4e00\u4e2a Pod \u8d44\u6e90\u3002\u5e76\u6267\u884c\u8fd9\u4e2a\u7a0b\u5e8f\u6765\u5f97\u5230\u5bf9\u5e94\u7684 YAML\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# 1. \u521d\u59cb\u5316\u4e00\u4e2a kcl \u7a0b\u5e8f\u5305 hello.\nkpm init hello\n\n# 2. \u7f16\u8f91 hello \u5305\u5185\u7684 main.k \u6587\u4ef6\uff0c\n# \u5c06\u524d\u6587\u4e2d\u63d0\u5230\u7684 KCL \u914d\u7f6e\u4ee3\u7801\u6dfb\u52a0\u5230 hello/main.k \u4e2d\ncat <<EOF > hello/main.k\nimport k8s.api.core.v1 as k8core\n\nk8core.Pod {\n    metadata.name = "web-app"\n    spec.containers = [{\n        name = "main-container"\n        image = "nginx"\n        ports = [{containerPort: 80}]\n    }]\n}\nEOF\n\n# 3. \u8fdb\u5165\u5230 hello \u5305\u5185\uff0c\u6dfb\u52a0 k8s \u4f9d\u8d56\uff0c\u5e76\u4e14\u8fd0\u884c hello \u5305\u3002\ncd hello && kpm add k8s && kpm run\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u5f97\u5230\u5982\u4e0b YAML \u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: web-app\nspec:\n  containers:\n    - image: nginx\n      name: main-container\n      ports:\n        - containerPort: 80\n")),(0,r.kt)("h2",{id:"3-\u5c0f\u7ed3"},"3. \u5c0f\u7ed3"),(0,r.kt)("p",null,"\u8fd9\u4e00\u7bc7\u6587\u7ae0\u6211\u4eec\u7b80\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 KCL \u6784\u5efa\u51fa Pod \u914d\u7f6e\u6765\u83b7\u5f97\u66f4\u7075\u6d3b\u3001\u66f4\u5065\u58ee\u7684\u914d\u7f6e\u3002\u540e\u7eed\u6587\u7ae0\u4e2d\u6211\u4eec\u5c06\u901a\u8fc7 KCL \u6765\u63d0\u70bc\u548c\u62bd\u8c61\u6700\u4f73\u7684 Sidecar \u6a21\u5f0f\u5b9e\u8df5\uff0c\u5305\u62ec\u4f7f\u7528 KCL \u5bf9 Sidecar \u6a21\u578b\u8fdb\u884c\u62bd\u8c61\u4ee5\u53ca\u4f7f\u7528 KCL \u5bf9\u5df2\u5b58\u5728\u7684\u4e0a\u6e38 YAML \u914d\u7f6e\u8fdb\u884c Sidecar \u6ce8\u5165\u3002"))}d.isMDXComponent=!0}}]);