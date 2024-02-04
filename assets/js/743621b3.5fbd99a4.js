"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64169],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},k=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=l(a),d=n,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||r;return a?o.createElement(m,c(c({ref:t},k),{},{components:a})):o.createElement(m,c({ref:t},k))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<r;l++)c[l]=a[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},39632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=a(87462),n=(a(67294),a(3905));const r={},c="Share Your Package to docker.io",i={unversionedId:"user_docs/guides/package-management/how-to/share_your_pkg_docker",id:"user_docs/guides/package-management/how-to/share_your_pkg_docker",title:"Share Your Package to docker.io",description:"kpm is a tool for managing kcl packages. This article will show you how to use kpm to push your kcl packages to docker.io.",source:"@site/docs/user_docs/guides/package-management/4-how-to/5-share_your_pkg_docker.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/share_your_pkg_docker",permalink:"/docs/next/user_docs/guides/package-management/how-to/share_your_pkg_docker",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/user_docs/guides/package-management/4-how-to/5-share_your_pkg_docker.md",tags:[],version:"current",lastUpdatedBy:"zongz",lastUpdatedAt:1694576155,formattedLastUpdatedAt:"Sep 13, 2023",sidebarPosition:5,frontMatter:{},sidebar:"user_docs",previous:{title:"Share Your Package to ghcr.io",permalink:"/docs/next/user_docs/guides/package-management/how-to/share_your_pkg"},next:{title:"Push Your KCL Package by GitHub Action",permalink:"/docs/next/user_docs/guides/package-management/how-to/push_github_action"}},p={},l=[{value:"Step 1: Install kpm",id:"step-1-install-kpm",level:2},{value:"Step 2: Create a docker.io account",id:"step-2-create-a-dockerio-account",level:2},{value:"Step 3: Log in to docker.io",id:"step-3-log-in-to-dockerio",level:2},{value:"Step 4: Push your kcl package",id:"step-4-push-your-kcl-package",level:2},{value:"1. A valid kcl package",id:"1-a-valid-kcl-package",level:3},{value:"2. Pushing the KCL Package",id:"2-pushing-the-kcl-package",level:3}],k={toc:l},s="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,o.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"share-your-package-to-dockerio"},"Share Your Package to docker.io"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kpm"},"kpm")," is a tool for managing kcl packages. This article will show you how to use kpm to push your kcl packages to docker.io."),(0,n.kt)("p",null,"Here is a simple step-by-step guide on how to use kpm to push your kcl package to docker.io."),(0,n.kt)("h2",{id:"step-1-install-kpm"},"Step 1: Install kpm"),(0,n.kt)("p",null,"First, you need to install kpm on your computer. You can follow the instructions in the ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/package-management/installation"},"kpm installation documentation"),"."),(0,n.kt)("h2",{id:"step-2-create-a-dockerio-account"},"Step 2: Create a docker.io account"),(0,n.kt)("p",null,"If you want to use ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io")," as the OCI registry to share your kcl package with others, you need to create a ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io")," account to support the push of your kcl package."),(0,n.kt)("h2",{id:"step-3-log-in-to-dockerio"},"Step 3: Log in to docker.io"),(0,n.kt)("p",null,"You can use the following command to log in to docker.io."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login -u <USERNAME> -p <PASSWORD> docker.io\n")),(0,n.kt)("p",null,"Where ",(0,n.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," is your ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io")," username, and ",(0,n.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," is your ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io")," password."),(0,n.kt)("p",null,"For more information on how to log in to docker.io using kpm, see ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/package-management/command-reference/login"},"kpm login"),"."),(0,n.kt)("h2",{id:"step-4-push-your-kcl-package"},"Step 4: Push your kcl package"),(0,n.kt)("p",null,"Now, you can use kpm to push your kcl package to ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io"),"."),(0,n.kt)("h3",{id:"1-a-valid-kcl-package"},"1. A valid kcl package"),(0,n.kt)("p",null,"First, you need to make sure that what you are pushing conforms to the specifications of a kcl package, i.e., it must contain valid kcl.mod and kcl.mod.lock files."),(0,n.kt)("p",null,"If you don't know how to get a valid kcl.mod and kcl.mod.lock, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm init")," command."),(0,n.kt)("p",null,"Create a new kcl package named ",(0,n.kt)("inlineCode",{parentName:"p"},"my_package"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kpm init my_package\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm init my_package")," command will create a new kcl package ",(0,n.kt)("inlineCode",{parentName:"p"},"my_package")," for you and create the ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," files for this package."),(0,n.kt)("p",null,"If you already have a directory containing kcl files ",(0,n.kt)("inlineCode",{parentName:"p"},"exist_kcl_package"),", you can use the following command to convert it into a kcl package and create valid ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," files for it."),(0,n.kt)("p",null,"Run the ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm init")," command under the ",(0,n.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kpm init \n")),(0,n.kt)("p",null,"For more information on how to use ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm init"),", see ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/package-management/command-reference/init"},"kpm init"),"."),(0,n.kt)("h3",{id:"2-pushing-the-kcl-package"},"2. Pushing the KCL Package"),(0,n.kt)("p",null,"You can use the following command in the root directory of your ",(0,n.kt)("inlineCode",{parentName:"p"},"kcl")," package:"),(0,n.kt)("p",null,"Run the ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm push")," command under the ",(0,n.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push oci://docker.io/<USERNAME>/exist_kcl_package\n")),(0,n.kt)("p",null,"After completing these steps, you have successfully pushed your KCL Package ",(0,n.kt)("inlineCode",{parentName:"p"},"exist_kcl_package")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"docker.io"),".\nFor more information on how to use ",(0,n.kt)("inlineCode",{parentName:"p"},"kpm push"),", see ",(0,n.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/package-management/command-reference/push"},"kpm push"),"."))}u.isMDXComponent=!0}}]);