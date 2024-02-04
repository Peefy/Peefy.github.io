"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},o="\u5b89\u88c5",p={unversionedId:"user_docs/guides/package-management/installation",id:"user_docs/guides/package-management/installation",title:"\u5b89\u88c5",description:"\u5b89\u88c5 kpm",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/package-management/2-installation.md",sourceDirName:"user_docs/guides/package-management",slug:"/user_docs/guides/package-management/installation",permalink:"/zh-CN/docs/next/user_docs/guides/package-management/installation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/package-management/2-installation.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1693477178,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:2,frontMatter:{},sidebar:"user_docs",previous:{title:"\u7b80\u4ecb",permalink:"/zh-CN/docs/next/user_docs/guides/package-management/overview"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/next/user_docs/guides/package-management/quick-start"}},i={},c=[{value:"\u5b89\u88c5 <code>kpm</code>",id:"\u5b89\u88c5-kpm",level:2},{value:"\u4f7f\u7528 <code>go install</code> \u5b89\u88c5 <code>kpm</code>",id:"\u4f7f\u7528-go-install-\u5b89\u88c5-kpm",level:3},{value:"\u4ece Github release \u9875\u9762\u624b\u52a8\u5b89\u88c5 <code>kpm</code>",id:"\u4ece-github-release-\u9875\u9762\u624b\u52a8\u5b89\u88c5-kpm",level:3}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("h2",{id:"\u5b89\u88c5-kpm"},"\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"h2"},"kpm")),(0,r.kt)("p",null,"kpm \u5c06\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"KCL"),"\u7f16\u8bd1\u5668\u6765\u7f16\u8bd1 KCL \u7a0b\u5e8f\u3002\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," \u4e4b\u524d\uff0c\u60a8\u9700\u8981\u786e\u4fdd ",(0,r.kt)("inlineCode",{parentName:"p"},"KCL")," \u7f16\u8bd1\u5668\u5df2\u7ecf\u6210\u529f\u5b89\u88c5\uff0c\u60a8\u53ef\u4ee5\u53c2\u7167",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"\u5982\u4f55\u5b89\u88c5 KCL \u7f16\u8bd1\u5668"),"\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-go-install-\u5b89\u88c5-kpm"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h3"},"go install")," \u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"h3"},"kpm")),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 go install \u547d\u4ee4\u5b89\u88c5 kpm\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go install kcl-lang.io/kpm@latest\n")),(0,r.kt)("h3",{id:"\u4ece-github-release-\u9875\u9762\u624b\u52a8\u5b89\u88c5-kpm"},"\u4ece Github release \u9875\u9762\u624b\u52a8\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"h3"},"kpm")),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kpm/releases"},"kpm Github Release")," \u4e2d\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," \uff0c\u5e76\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u8def\u5f84\u8bbe\u7f6e\u5230\u73af\u5883\u53d8\u91cf PATH \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# KPM_INSTALLATION_PATH \u662f `kpm` \u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u6240\u5728\u76ee\u5f55.\nexport PATH=$KPM_INSTALLATION_PATH:$PATH  \n")),(0,r.kt)("p",null,"\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u786e\u4fdd\u60a8\u6210\u529f\u5b89\u88c5\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"kpm"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm --help\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\u4fe1\u606f\uff0c\u90a3\u4e48\u4f60\u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"kpm"),"\uff0c\u53ef\u4ee5\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u6b65\u64cd\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NAME:\n   kpm - kpm is a kcl package manager\n\nUSAGE:\n   kpm  <command> [arguments]...\n\nCOMMANDS:\n   init      initialize new module in current directory\n   add       add new dependency\n   pkg       package a kcl package into tar\n   metadata  output the resolved dependencies of a package\n   run       compile kcl package.\n   login     login to a registry\n   logout    logout from a registry\n   push      push kcl package to OCI registry.\n   pull      pull kcl package from OCI registry.\n   help, h   Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --help, -h  show help\n")))}u.isMDXComponent=!0}}]);