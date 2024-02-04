"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"regex",linkTitle:"regex",type:"docs",description:"regex system module",weight:100},i=void 0,o={unversionedId:"reference/model/regex",id:"version-0.5.0/reference/model/regex",title:"regex",description:"regex system module",source:"@site/versioned_docs/version-0.5.0/reference/model/regex.md",sourceDirName:"reference/model",slug:"/reference/model/regex",permalink:"/docs/0.5.0/reference/model/regex",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/reference/model/regex.md",tags:[],version:"0.5.0",lastUpdatedBy:"Peefy",lastUpdatedAt:1684753665,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{title:"regex",linkTitle:"regex",type:"docs",description:"regex system module",weight:100},sidebar:"reference",previous:{title:"net",permalink:"/docs/0.5.0/reference/model/net"},next:{title:"units",permalink:"/docs/0.5.0/reference/model/units"}},p={},s=[{value:"replace",id:"replace",level:2},{value:"match",id:"match",level:2},{value:"compile",id:"compile",level:2},{value:"findall",id:"findall",level:2},{value:"search",id:"search",level:2},{value:"split",id:"split",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"replace"},"replace"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"replace(string: str, pattern: str, replace: str, count=0) -> str")),(0,a.kt)("p",null,"Return the string obtained by replacing the leftmost non-overlapping occurrences of the pattern in string by the replacement."),(0,a.kt)("h2",{id:"match"},"match"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"match(string: str, pattern: str) -> bool")),(0,a.kt)("p",null,"Try to apply the pattern at the start of the string, returning a bool value ",(0,a.kt)("inlineCode",{parentName:"p"},"True")," if any match was found, or ",(0,a.kt)("inlineCode",{parentName:"p"},"False")," if no match was found."),(0,a.kt)("h2",{id:"compile"},"compile"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"compile(pattern: str) -> bool")),(0,a.kt)("p",null,"Compile a regular expression pattern, returning a bool value denoting whether the pattern is valid."),(0,a.kt)("h2",{id:"findall"},"findall"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"findall(string: str, pattern: str) -> List[str]")),(0,a.kt)("p",null,"Return a list of all non-overlapping matches in the string."),(0,a.kt)("h2",{id:"search"},"search"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"search(string: str, pattern: str) -> bool")),(0,a.kt)("p",null,"Scan through string looking for a match to the pattern, returning a bool value ",(0,a.kt)("inlineCode",{parentName:"p"},"True")," if any match was found, or ",(0,a.kt)("inlineCode",{parentName:"p"},"False")," if no match was found."),(0,a.kt)("h2",{id:"split"},"split"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"split(string: str, pattern: str, maxsplit=0) -> List[str]")),(0,a.kt)("p",null,"Return a list composed of words from the string, splitting up to a maximum of ",(0,a.kt)("inlineCode",{parentName:"p"},"maxsplit")," times using ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern")," as the separator."))}d.isMDXComponent=!0}}]);