"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33790],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),i=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(a),k=r,u=s["".concat(m,".").concat(k)]||s[k]||d[k]||o;return a?n.createElement(u,l(l({ref:t},p),{},{components:a})):n.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[s]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},39954:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={},l="kpm",c={unversionedId:"tools/cli/package-management/command-reference/index",id:"tools/cli/package-management/command-reference/index",title:"kpm",description:"The kpm cli",source:"@site/docs/tools/cli/package-management/command-reference/index.md",sourceDirName:"tools/cli/package-management/command-reference",slug:"/tools/cli/package-management/command-reference/",permalink:"/docs/next/tools/cli/package-management/command-reference/",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/package-management/command-reference/index.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1698036833,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{},sidebar:"tools",previous:{title:"KCL OpenAPI Spec",permalink:"/docs/next/tools/cli/openapi/spec"},next:{title:"kpm init",permalink:"/docs/next/tools/cli/package-management/command-reference/init"}},m={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"--help, -h",id:"--help--h",level:3},{value:"--version, -v",id:"--version--v",level:3},{value:"Subcommands",id:"subcommands",level:2}],p={toc:i},s="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kpm"},"kpm"),(0,r.kt)("p",null,"The kpm cli"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kpm  <command> [arguments]...\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kpm")," is a kcl package manager. It is used to install, remove, and update kcl packages."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--help--h"},"--help, -h"),(0,r.kt)("p",null,"Show help for kpm command"),(0,r.kt)("h3",{id:"--version--v"},"--version, -v"),(0,r.kt)("p",null,"Print the version of kpm"),(0,r.kt)("h2",{id:"subcommands"},"Subcommands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tools/cli/package-management/command-reference/init"},"kpm init")," - Init a kcl package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tools/cli/package-management/command-reference/add"},"kpm add")," - Add a dependency to a kcl package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tools/cli/package-management/command-reference/pkg"},"kpm pkg")," - Package a kcl package into `*.tar``"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tools/cli/package-management/command-reference/metadata"},"kpm metadata")," - Print the metadata of a kcl package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tools/cli/package-management/command-reference/run"},"kpm run")," - Compile a kcl package into yaml"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tools/cli/package-management/command-reference/login"},"kpm login")," - Login to a kcl registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tools/cli/package-management/command-reference/logout"},"kpm logout")," - Logout from a kcl registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tools/cli/package-management/command-reference/push"},"kpm push")," - Push a kcl package to a registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tools/cli/package-management/command-reference/pull"},"kpm pull")," - Pull a kcl package from a registry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/tools/cli/package-management/command-reference/help"},"kpm help")," - print help for kpm command")))}d.isMDXComponent=!0}}]);