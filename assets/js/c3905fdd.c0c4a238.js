"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27825],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),k=p(a),g=o,m=k["".concat(l,".").concat(g)]||k[g]||u[g]||r;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[k]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={},i="Share Your Package to ghcr.io",c={unversionedId:"user_docs/guides/package-management/how-to/share_your_pkg",id:"version-0.6.0/user_docs/guides/package-management/how-to/share_your_pkg",title:"Share Your Package to ghcr.io",description:"kpm is a tool for managing kcl packages. This article will guide you on how to use kpm to push your kcl package to an OCI Registry for publication. kpm uses ghcr.io as the default OCI Registry, and you can change the default OCI Registry by modifying the kpm configuration file. For information on how to modify the kpm configuration file, see kpm oci registry",source:"@site/versioned_docs/version-0.6.0/user_docs/guides/package-management/4-how-to/4-share_your_pkg.md",sourceDirName:"user_docs/guides/package-management/4-how-to",slug:"/user_docs/guides/package-management/how-to/share_your_pkg",permalink:"/docs/user_docs/guides/package-management/how-to/share_your_pkg",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/user_docs/guides/package-management/4-how-to/4-share_your_pkg.md",tags:[],version:"0.6.0",lastUpdatedBy:"peefy",lastUpdatedAt:1695042196,formattedLastUpdatedAt:"Sep 18, 2023",sidebarPosition:4,frontMatter:{},sidebar:"user_docs",previous:{title:"Quick Start",permalink:"/docs/user_docs/guides/package-management/quick-start"},next:{title:"Share Your Package to docker.io",permalink:"/docs/user_docs/guides/package-management/how-to/share_your_pkg_docker"}},l={},p=[{value:"Step 1: Install kpm",id:"step-1-install-kpm",level:2},{value:"Step 2: Create a ghcr.io token",id:"step-2-create-a-ghcrio-token",level:2},{value:"Step 3: Log in to ghcr.io",id:"step-3-log-in-to-ghcrio",level:2},{value:"Step 4: Push your kcl package",id:"step-4-push-your-kcl-package",level:2},{value:"1. A valid kcl package",id:"1-a-valid-kcl-package",level:3},{value:"2. Pushing the KCL Package",id:"2-pushing-the-kcl-package",level:3}],s={toc:p},k="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"share-your-package-to-ghcrio"},"Share Your Package to ghcr.io"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kpm"},"kpm")," is a tool for managing kcl packages. This article will guide you on how to use kpm to push your kcl package to an OCI Registry for publication. kpm uses ",(0,o.kt)("a",{parentName:"p",href:"https://ghcr.io"},"ghcr.io")," as the default OCI Registry, and you can change the default OCI Registry by modifying the kpm configuration file. For information on how to modify the kpm configuration file, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kpm/blob/main/docs/kpm_oci.md#kpm-registry"},"kpm oci registry")),(0,o.kt)("p",null,"Here is a simple step-by-step guide on how to use kpm to push your kcl package to ghcr.io."),(0,o.kt)("h2",{id:"step-1-install-kpm"},"Step 1: Install kpm"),(0,o.kt)("p",null,"First, you need to install kpm on your computer. You can follow the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/guides/package-management/installation"},"kpm installation documentation"),"."),(0,o.kt)("h2",{id:"step-2-create-a-ghcrio-token"},"Step 2: Create a ghcr.io token"),(0,o.kt)("p",null,"If you are using the default OCI Registry of kpm, to push a kcl package to ghcr.io, you need to create a token for authentication. You can follow the instruction."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic"},"Creating a ghcr.io access token"))),(0,o.kt)("h2",{id:"step-3-log-in-to-ghcrio"},"Step 3: Log in to ghcr.io"),(0,o.kt)("p",null,"After installing kpm and creating a ghcr.io token, you need to log in to ghcr.io using kpm. You can do this using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kpm login ghcr.io -u <USERNAME> -p <TOKEN>\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," is your GitHub username, ",(0,o.kt)("inlineCode",{parentName:"p"},"<TOKEN>")," is the token you created in step 2"),(0,o.kt)("p",null,"For more information on how to log in to ghcr.io using kpm, see ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/package-management/command-reference/login"},"kpm login"),"."),(0,o.kt)("h2",{id:"step-4-push-your-kcl-package"},"Step 4: Push your kcl package"),(0,o.kt)("p",null,"Now, you can use kpm to push your kcl package to ghcr.io."),(0,o.kt)("h3",{id:"1-a-valid-kcl-package"},"1. A valid kcl package"),(0,o.kt)("p",null,"First, you need to make sure that what you are pushing conforms to the specifications of a kcl package, i.e., it must contain valid kcl.mod and kcl.mod.lock files."),(0,o.kt)("p",null,"If you don't know how to get a valid kcl.mod and kcl.mod.lock, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kpm init")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Create a new kcl package named my_package\nkpm init my_package\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"kpm init my_package")," command will create a new kcl package ",(0,o.kt)("inlineCode",{parentName:"p"},"my_package")," for you and create the ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," files for this package."),(0,o.kt)("p",null,"If you already have a directory containing kcl files ",(0,o.kt)("inlineCode",{parentName:"p"},"exist_kcl_package"),", you can use the following command to convert it into a kcl package and create valid ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl.mod")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," files for it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# In the exist_kcl_package directory\n$ pwd \n/home/user/exist_kcl_package\n\n# Run the `kpm init` command to create the `kcl.mod` and `kcl.mod.lock` files\n$ kpm init \n")),(0,o.kt)("p",null,"For more information on how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"kpm init"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/package-management/command-reference/init"},"kpm init"),"."),(0,o.kt)("h3",{id:"2-pushing-the-kcl-package"},"2. Pushing the KCL Package"),(0,o.kt)("p",null,"You can use the following command in the root directory of your ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl")," package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# In the root directory of the exist_kcl_package package\n$ pwd \n/home/user/exist_kcl_package\n\n# Pushing the KCL Package to Default OCI Registry\n$ kpm push\n")),(0,o.kt)("p",null,"After completing these steps, you have successfully pushed your KCL Package to the default OCI Registry.\nFor more information on how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"kpm push"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/reference/package-management/command-reference/push"},"kpm push"),"."))}u.isMDXComponent=!0}}]);