"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),k=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=k(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=k(n),s=a,u=d["".concat(p,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(u,c(c({ref:t},i),{},{components:n})):r.createElement(u,c({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var k=2;k<o;k++)c[k]=n[k];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},84685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>k});var r=n(87462),a=(n(67294),n(3905));const o={},c="\u53d1\u5e03 KCL \u5305\u5230 docker.io",l={unversionedId:"user_docs/guides/package-management/how-to/share_your_pkg_docker",id:"version-0.5.2/user_docs/guides/package-management/how-to/share_your_pkg_docker",title:"\u53d1\u5e03 KCL \u5305\u5230 docker.io",description:"kpm \u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406 kcl \u5305\u7684\u5de5\u5177\u3002\u672c\u6587\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 kpm \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230\u53d1\u5e03\u5230 docker.io \u4e2d\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.2/user_docs/guides/package-management/4-how-to/5-share_your_pkg_docker.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/share_your_pkg_docker",permalink:"/zh-CN/docs/0.5.2/user_docs/guides/package-management/how-to/share_your_pkg_docker",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.2/user_docs/guides/package-management/4-how-to/5-share_your_pkg_docker.md",tags:[],version:"0.5.2",lastUpdatedBy:"zongz",lastUpdatedAt:1694576155,formattedLastUpdatedAt:"2023\u5e749\u670813\u65e5",sidebarPosition:5,frontMatter:{},sidebar:"user_docs",previous:{title:"\u53d1\u5e03 KCL \u5305\u5230 ghcr.io",permalink:"/zh-CN/docs/0.5.2/user_docs/guides/package-management/how-to/share_your_pkg"},next:{title:"\u5982\u4f55\u5728 github action \u4e2d\u4f7f\u7528 kpm \u53d1\u5e03\u60a8\u7684 KCL \u5305",permalink:"/zh-CN/docs/0.5.2/user_docs/guides/package-management/how-to/push_github_action"}},p={},k=[{value:"\u6b65\u9aa4 1\uff1a\u5b89\u88c5 kpm",id:"\u6b65\u9aa4-1\u5b89\u88c5-kpm",level:2},{value:"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u4e00\u4e2a docker.io \u8d26\u6237",id:"\u6b65\u9aa4-2\u521b\u5efa\u4e00\u4e2a-dockerio-\u8d26\u6237",level:2},{value:"\u6b65\u9aa4 3\uff1a\u767b\u5f55 docker.io",id:"\u6b65\u9aa4-3\u767b\u5f55-dockerio",level:2},{value:"\u6b65\u9aa4 4\uff1a\u63a8\u9001\u60a8\u7684 kcl \u5305",id:"\u6b65\u9aa4-4\u63a8\u9001\u60a8\u7684-kcl-\u5305",level:2},{value:"1. \u4e00\u4e2a\u5408\u6cd5\u7684 kcl \u5305",id:"1-\u4e00\u4e2a\u5408\u6cd5\u7684-kcl-\u5305",level:3},{value:"2. \u63a8\u9001 kcl \u5305",id:"2-\u63a8\u9001-kcl-\u5305",level:3}],i={toc:k},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53d1\u5e03-kcl-\u5305\u5230-dockerio"},"\u53d1\u5e03 KCL \u5305\u5230 docker.io"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kpm"},"kpm")," \u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406 kcl \u5305\u7684\u5de5\u5177\u3002\u672c\u6587\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 kpm \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230\u53d1\u5e03\u5230 docker.io \u4e2d\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6b65\u9aa4\uff0c\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 kpm \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230 docker.io\u3002"),(0,a.kt)("h2",{id:"\u6b65\u9aa4-1\u5b89\u88c5-kpm"},"\u6b65\u9aa4 1\uff1a\u5b89\u88c5 kpm"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5728\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5 kpm\u3002\u60a8\u53ef\u4ee5\u6309\u7167 ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/package-management/installation"},"kpm \u5b89\u88c5\u6587\u6863"),"\u4e2d\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u6b65\u9aa4-2\u521b\u5efa\u4e00\u4e2a-dockerio-\u8d26\u6237"},"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u4e00\u4e2a docker.io \u8d26\u6237"),(0,a.kt)("p",null,"\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a docker.io \u8d26\u6237\u4ee5\u652f\u6301\u60a8\u7684 kcl \u5305\u7684\u63a8\u9001\u3002"),(0,a.kt)("h2",{id:"\u6b65\u9aa4-3\u767b\u5f55-dockerio"},"\u6b65\u9aa4 3\uff1a\u767b\u5f55 docker.io"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 docker.io \u7684\u8d26\u6237\u540d\u548c\u5bc6\u7801\u767b\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login -u <USERNAME> -p <PASSWORD> docker.io\n")),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," \u662f\u60a8\u7684 docker.io \u7528\u6237\u540d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," \u662f\u60a8 docker.io \u8d26\u6237\u7684\u5bc6\u7801\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 kpm \u767b\u5f55 docker.io \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/package-management/command-reference/login"},"kpm login"),"\u3002"),(0,a.kt)("h2",{id:"\u6b65\u9aa4-4\u63a8\u9001\u60a8\u7684-kcl-\u5305"},"\u6b65\u9aa4 4\uff1a\u63a8\u9001\u60a8\u7684 kcl \u5305"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 kpm \u5c06\u60a8\u7684 kcl \u5305\u63a8\u9001\u5230 docker.io\u3002"),(0,a.kt)("h3",{id:"1-\u4e00\u4e2a\u5408\u6cd5\u7684-kcl-\u5305"},"1. \u4e00\u4e2a\u5408\u6cd5\u7684 kcl \u5305"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u786e\u4fdd\u60a8\u63a8\u9001\u7684\u5185\u5bb9\u662f\u7b26\u5408\u4e00\u4e2a kcl \u5305\u7684\u89c4\u8303\uff0c\u5373\u5fc5\u987b\u5305\u542b\u5408\u6cd5\u7684 kcl.mod \u548c kcl.mod.lock \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u5f97\u5230\u4e00\u4e2a\u5408\u6cd5\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock"),"\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm init")," \u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a my_package \u7684 kcl \u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm init my_package\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm init my_package")," \u547d\u4ee4\u5c06\u4f1a\u4e3a\u60a8\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 kcl \u5305 ",(0,a.kt)("inlineCode",{parentName:"p"},"my_package"),", \u5e76\u4e3a\u8fd9\u4e2a\u5305\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u5305\u542b kcl \u6587\u4ef6\u7684\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"exist_kcl_package"),"\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5176\u8f6c\u6362\u4e3a\u4e00\u4e2a kcl \u5305\uff0c\u5e76\u4e3a\u5176\u521b\u5efa\u5408\u6cd5\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock"),"\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," \u76ee\u5f55\u4e0b\u6267\u884c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm init \n")),(0,a.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 kpm init \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/package-management/command-reference/init"},"kpm init"),"\u3002"),(0,a.kt)("h3",{id:"2-\u63a8\u9001-kcl-\u5305"},"2. \u63a8\u9001 kcl \u5305"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," \u5305\u7684\u6839\u76ee\u5f55\u4e0b\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," \u5305\u7684\u6839\u76ee\u5f55\u4e0b, \u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push oci://docker.io/<USERNAME>/exist_kcl_package\n")),(0,a.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0c\u60a8\u5c31\u6210\u529f\u5730\u5c06\u60a8\u7684 kcl \u5305 ",(0,a.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," \u63a8\u9001\u5230\u4e86 docker.io \u4e2d\u3002\n\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 kpm push \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/package-management/command-reference/push"},"kpm push"),"\u3002"))}m.isMDXComponent=!0}}]);