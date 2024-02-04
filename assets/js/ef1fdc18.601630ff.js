"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const l={sidebar_position:3},i="Lint",a={unversionedId:"tools/cli/kcl/lint",id:"version-0.5.5/tools/cli/kcl/lint",title:"Lint",description:"The KCL Lint tool supports checking some warning-level defects in KCL code and supports multiple output formats. This document shows how to use the KCL Lint tool.",source:"@site/versioned_docs/version-0.5.5/tools/cli/kcl/lint.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/lint",permalink:"/docs/0.5.5/tools/cli/kcl/lint",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.5/tools/cli/kcl/lint.md",tags:[],version:"0.5.5",lastUpdatedBy:"peefy",lastUpdatedAt:1693489043,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tools",previous:{title:"Format",permalink:"/docs/0.5.5/tools/cli/kcl/fmt"},next:{title:"Validation",permalink:"/docs/0.5.5/tools/cli/kcl/vet"}},c={},s=[{value:"Example",id:"example",level:2},{value:"Project Structure",id:"project-structure",level:3},{value:"KCL Lint Tool",id:"kcl-lint-tool",level:2},{value:"Args",id:"args",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lint"},"Lint"),(0,o.kt)("p",null,"The KCL Lint tool supports checking some warning-level defects in KCL code and supports multiple output formats. This document shows how to use the KCL Lint tool."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"project-structure"},"Project Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},".\n\u2514\u2500\u2500 Test\n    \u2514\u2500\u2500 kcl.mod\n    \u2514\u2500\u2500 a.k\n    \u2514\u2500\u2500 b.k\n    \u2514\u2500\u2500 dir\n        \u2514\u2500\u2500 c.k\n    \u2514\u2500\u2500 test.k\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"a.k"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"b.k"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"c.k")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"test.k")," are the kcl file to be checked."),(0,o.kt)("p",null,"Args\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-lint your_config.k\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-lint your_config_path\n")),(0,o.kt)("h2",{id:"kcl-lint-tool"},"KCL Lint Tool"),(0,o.kt)("h3",{id:"args"},"Args"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"USAGE:\n    kcl-lint [OPTIONS] [--] [input]...\n\nARGS:\n    <input>...    Sets the input file to use\n\nOPTIONS:\n        --emit_warning            Emit warning message\n    -h, --help                    Print help information\n    -v, --verbose                 Print test information verbosely\n    -Y, --setting <setting>...    Sets the input file to use\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"input: the path of a single ",(0,o.kt)("inlineCode",{parentName:"li"},"*.k")," file or directory to be checked. Support the absolute path or relative path of the current directory.")))}d.isMDXComponent=!0}}]);