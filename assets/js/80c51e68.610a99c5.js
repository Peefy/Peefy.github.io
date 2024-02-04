"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const p={},o="kpm push",c={unversionedId:"reference/package-management/command-reference/push",id:"version-0.5.0/reference/package-management/command-reference/push",title:"kpm push",description:"Push a package to the kpm registry.",source:"@site/versioned_docs/version-0.5.0/reference/package-management/command-reference/8.push.md",sourceDirName:"reference/package-management/command-reference",slug:"/reference/package-management/command-reference/push",permalink:"/docs/0.5.0/reference/package-management/command-reference/push",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/reference/package-management/command-reference/8.push.md",tags:[],version:"0.5.0",lastUpdatedBy:"zongz",lastUpdatedAt:1688369241,formattedLastUpdatedAt:"Jul 3, 2023",sidebarPosition:8,frontMatter:{},sidebar:"reference",previous:{title:"kpm logout",permalink:"/docs/0.5.0/reference/package-management/command-reference/logout"},next:{title:"kpm pull",permalink:"/docs/0.5.0/reference/package-management/command-reference/pull"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"options",id:"options",level:2},{value:"--tar_path",id:"--tar_path",level:3},{value:"--help, -h",id:"--help--h",level:3},{value:"Examples",id:"examples",level:2},{value:"push the current package",id:"push-the-current-package",level:3},{value:"push a tar to the registry",id:"push-a-tar-to-the-registry",level:3}],s={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kpm-push"},"kpm push"),(0,a.kt)("p",null,"Push a package to the kpm registry."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push [options][kpm_registry]\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," will push a package to the kpm registry."),(0,a.kt)("h2",{id:"options"},"options"),(0,a.kt)("h3",{id:"--tar_path"},"--tar_path"),(0,a.kt)("p",null,"The path to the tar file to push."),(0,a.kt)("h3",{id:"--help--h"},"--help, -h"),(0,a.kt)("p",null,"Show help for ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," command."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"push-the-current-package"},"push the current package"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," under the kcl package root directory to upload a kcl package to an OCI-based registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# create a new kcl package.\n$ kpm init <package_name> \n# enter the kcl package root directory\n$ cd <package_name> \n# push it to an oci registry\n$ kpm push <oci_url>\n")),(0,a.kt)("h3",{id:"push-a-tar-to-the-registry"},"push a tar to the registry"),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"kpm push")," to upload a tar file to an OCI-based registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kpm push --tar_path <tar_path> <oci_url>\n")))}m.isMDXComponent=!0}}]);