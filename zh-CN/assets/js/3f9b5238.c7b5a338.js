"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18162],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>k});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=l,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return a?t.createElement(k,p(p({ref:n},c),{},{components:a})):t.createElement(k,p({ref:n},c))}));function k(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=a[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},33308:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=a(87462),l=(a(67294),a(3905));const r={title:"\u81ea\u52a8\u5316",sidebar_position:6},p=void 0,i={unversionedId:"user_docs/guides/automation",id:"version-0.5.4/user_docs/guides/automation",title:"\u81ea\u52a8\u5316",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.4/user_docs/guides/automation.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/automation",permalink:"/zh-CN/docs/0.5.4/user_docs/guides/automation",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.4/user_docs/guides/automation.md",tags:[],version:"0.5.4",lastUpdatedBy:"peefy",lastUpdatedAt:1692270336,formattedLastUpdatedAt:"2023\u5e748\u670817\u65e5",sidebarPosition:6,frontMatter:{title:"\u81ea\u52a8\u5316",sidebar_position:6},sidebar:"user_docs",previous:{title:"\u6570\u636e\u96c6\u6210",permalink:"/zh-CN/docs/0.5.4/user_docs/guides/data-integration"},next:{title:"\u7b80\u4ecb",permalink:"/zh-CN/docs/0.5.4/user_docs/guides/package-management/overview"}},o={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528 KCL \u8fdb\u884c\u81ea\u52a8\u5316",id:"\u4f7f\u7528-kcl-\u8fdb\u884c\u81ea\u52a8\u5316",level:2},{value:"0. \u5148\u51b3\u6761\u4ef6",id:"0-\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u83b7\u5f97\u793a\u4f8b",id:"1-\u83b7\u5f97\u793a\u4f8b",level:3},{value:"2. \u4f7f\u7528 KCL CLI \u8fdb\u884c\u81ea\u52a8\u5316",id:"2-\u4f7f\u7528-kcl-cli-\u8fdb\u884c\u81ea\u52a8\u5316",level:3},{value:"\u4fee\u6539\u914d\u7f6e",id:"\u4fee\u6539\u914d\u7f6e",level:4},{value:"\u5220\u9664\u914d\u7f6e",id:"\u5220\u9664\u914d\u7f6e",level:4},{value:"3. \u4f7f\u7528 KCL API \u8fdb\u884c\u81ea\u52a8\u5316",id:"3-\u4f7f\u7528-kcl-api-\u8fdb\u884c\u81ea\u52a8\u5316",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...r}=e;return(0,l.kt)(u,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"\u5728 KCL \u4e2d\u63d0\u4f9b\u4e86\u5f88\u591a\u81ea\u52a8\u5316\u76f8\u5173\u7684\u80fd\u529b\uff0c\u4e3b\u8981\u5305\u62ec\u5de5\u5177\u548c\u591a\u8bed\u8a00 API\u3002 \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"package_identifier : key_identifier"),"\u7684\u6a21\u5f0f\u652f\u6301\u5bf9\u4efb\u610f\u914d\u7f6e\u952e\u503c\u7684\u7d22\u5f15\uff0c\u4ece\u800c\u5b8c\u6210\u5bf9\u4efb\u610f\u952e\u503c\u7684\u589e\u5220\u6539\u67e5\u3002\u6bd4\u5982\u4e0b\u56fe\u6240\u793a\u4fee\u6539\u67d0\u4e2a\u5e94\u7528\u914d\u7f6e\u7684\u955c\u50cf\u5185\u5bb9\uff0c\u53ef\u4ee5\u76f4\u63a5\u6267\u884c\u5982\u4e0b\u6307\u4ee4\u4fee\u6539\u955c\u50cf\uff0c\u4fee\u6539\u524d\u540e\u7684 diff \u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(14466).Z,width:"1828",height:"502"})),(0,l.kt)("p",null,"\u6b64\u5916\uff0cKCL \u7684\u81ea\u52a8\u5316\u80fd\u529b\u4e5f\u53ef\u4ee5\u88ab\u96c6\u6210\u5230 CI/CD \u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(45079).Z,width:"890",height:"247"})),(0,l.kt)("h2",{id:"\u4f7f\u7528-kcl-\u8fdb\u884c\u81ea\u52a8\u5316"},"\u4f7f\u7528 KCL \u8fdb\u884c\u81ea\u52a8\u5316"),(0,l.kt)("h3",{id:"0-\u5148\u51b3\u6761\u4ef6"},"0. \u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install"},"KCL"))),(0,l.kt)("h3",{id:"1-\u83b7\u5f97\u793a\u4f8b"},"1. \u83b7\u5f97\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/data-integration\n")),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u663e\u793a\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat main.k\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    """The application model."""\n    name: str\n    replicas: int\n    labels?: {str:str} = {app = name}\n\napp: App {\n    name = "app"\n    replicas = 1\n    labels.key = "value"\n}\n')),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u8f93\u51fa\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"app:\n  name: app\n  replicas: 1\n  labels:\n    app: app\n    key: value\n")),(0,l.kt)("h3",{id:"2-\u4f7f\u7528-kcl-cli-\u8fdb\u884c\u81ea\u52a8\u5316"},"2. \u4f7f\u7528 KCL CLI \u8fdb\u884c\u81ea\u52a8\u5316"),(0,l.kt)("p",null,"KCL \u5141\u8bb8\u4f7f\u7528\u901a\u8fc7 CLI ",(0,l.kt)("inlineCode",{parentName:"p"},"-O|--overrides")," \u53c2\u6570\u4fee\u6539\u914d\u7f6e\u6a21\u578b\u4e2d\u7684\u503c\uff0c\u8fd9\u4e2a\u53c2\u6570\u901a\u5e38\u7531\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210: \u5305\u540d ",(0,l.kt)("inlineCode",{parentName:"p"},"pkg"),", \u914d\u7f6e\u6807\u8bc6\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"identifier"),", \u914d\u7f6e\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"attribute")," \u548c\u8986\u76d6\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"override_value")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O override_spec\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"override_spec"),": \u8868\u793a\u9700\u8981\u4fee\u6539\u7684\u914d\u7f6e\u6a21\u578b\u5b57\u6bb5\u548c\u503c\u7684\u7edf\u4e00\u8868\u793a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'override_spec: [[pkgpath] ":"] identifier ("=" value | "-")\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pkgpath"),": \u8868\u793a\u9700\u8981\u4fee\u6539\u6807\u8bc6\u7b26\u7684\u5305\u8def\u5f84\uff0c\u901a\u5e38\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"a.b.c")," \u7684\u5f62\u5f0f\uff0c\u5bf9\u4e8e main \u5305\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"pkgpath")," \u8868\u793a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"__main__"),", \u53ef\u7701\u7565\uff0c\u7701\u7565\u4e0d\u5199\u65f6\u8868\u793a main \u5305"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"identifier"),": \u8868\u793a\u9700\u8981\u4fee\u6539\u914d\u7f6e\u7684\u6807\u8bc6\u7b26\uff0c\u901a\u5e38\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"a.b.c")," \u7684\u5f62\u5f0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),": \u8868\u793a\u9700\u8981\u4fee\u6539\u914d\u7f6e\u7684\u503c\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u5408\u6cd5\u7684 KCL \u8868\u8fbe\u5f0f\uff0c\u6bd4\u5982\u6570\u5b57/\u5b57\u7b26\u4e32\u5b57\u9762\u503c\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"list"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"dict"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"schema")," \u8868\u8fbe\u5f0f\u7b49"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"="),": \u8868\u793a\u4fee\u6539identifier\u7684\u503c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-"),": \u8868\u793a\u5220\u9664 identifier \u5c5e\u6027")),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"identifier")," \u591a\u6b21\u51fa\u73b0\u65f6\uff0c\u4fee\u6539/\u5220\u9664\u5168\u90e8 ",(0,l.kt)("inlineCode",{parentName:"p"},"identifier")," \u7684\u503c"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u5728 KCL \u4e2d\u8fd8\u63d0\u4f9b\u4e86 API \u7528\u4e8e\u53d8\u91cf\u67e5\u8be2\u548c\u4fee\u6539\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/xlang-api/"},"API \u6587\u6863")),(0,l.kt)("h4",{id:"\u4fee\u6539\u914d\u7f6e"},"\u4fee\u6539\u914d\u7f6e"),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u66f4\u65b0\u5e94\u7528\u540d\u79f0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O app.name='new_app'\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"app:\n  name: new_app\n  replicas: 1\n  labels:\n    app: new_app\n    key: value\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"app")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u5c5e\u6027\u7684\u503c\u88ab\u4fee\u6539\u4e3a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"new_app")),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u5f53\u6211\u4eec\u4f7f\u7528 KCL CLI ",(0,l.kt)("inlineCode",{parentName:"p"},"-d")," \u53c2\u6570\u65f6\uff0cKCL \u6587\u4ef6\u5c06\u540c\u65f6\u4fee\u6539\u4e3a\u4ee5\u4e0b\u5185\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O app.name='new_app' -d\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    """The application model."""\n    name: str\n    replicas: int\n    labels?: {str:str} = {app = name}\n\napp: App {\n    name = "new_app"\n    replicas = 1\n    labels: {key = "value"}\n}\n')),(0,l.kt)("h4",{id:"\u5220\u9664\u914d\u7f6e"},"\u5220\u9664\u914d\u7f6e"),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"labels")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," \u5b57\u6bb5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O app.labels.key-\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"app:\n  name: app\n  replicas: 1\n  labels:\n    app: app\n")),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kcl main.k -O config.x-\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  x: 1\n  y: s\n")),(0,l.kt)("h3",{id:"3-\u4f7f\u7528-kcl-api-\u8fdb\u884c\u81ea\u52a8\u5316"},"3. \u4f7f\u7528 KCL API \u8fdb\u884c\u81ea\u52a8\u5316"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/xlang-api/overview"},"\u591a\u8bed\u8a00 API")," \u81ea\u52a8\u4fee\u6539\u914d\u7f6e\u5c5e\u6027"),(0,l.kt)("p",null,"\u4ee5 RestAPI \u4e3a\u4f8b"),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u542f\u52a8 RestAPI \u670d\u52a1\u7aef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'python3 -m pip install kclvm -U\npython3 -m gunicorn "kclvm.program.rpc-server.__main__:create_app()" -t 120 -w 4 -k uvicorn.workers.UvicornWorker -b :2021\n')),(0,l.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4 POST \u547d\u4ee4\u8bf7\u6c42\u914d\u7f6e\u4fee\u6539\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://127.0.0.1:2021/api:protorpc/KclvmService.OverrideFile -H \'content-type: accept/json\' -d \'{\n    "file": "main.k",\n    "specs": ["app.name=\\"nginx\\""]\n}\'\n')),(0,l.kt)("p",null,"\u670d\u52a1\u8c03\u7528\u5b8c\u6210\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"main.k")," \u4f1a\u88ab\u4fee\u6539\u4e3a\u5982\u4e0b\u5f62\u5f0f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    """The application model."""\n    name: str\n    replicas: int\n    labels?: {str:str} = {app = name}\n\napp: App {\n    name = "nginx"\n    replicas = 1\n    labels: {\n        "key" = "value"\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,l.kt)("p",null,"\u8be5\u6587\u6863\u4ecb\u7ecd\u4e86KCL\u7684\u81ea\u52a8\u5316\u529f\u80fd\uff0c\u5305\u62ec\u5de5\u5177\u548c\u591a\u8bed\u8a00 API\u3002\u5b83\u652f\u6301\u5bf9\u4efb\u4f55\u914d\u7f6e\u7684\u952e\u503c\u8fdb\u884c\u7d22\u5f15\uff0c\u5141\u8bb8\u6dfb\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\u548c\u67e5\u8be2\u4efb\u4f55\u952e\u503c\u3002\u5b83\u4e5f\u53ef\u4ee5\u96c6\u6210\u5230 CI/CD \u4e2d\u3002\u672c\u6587\u6863\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4f7f\u7528 KCL \u81ea\u52a8\u5316\u914d\u7f6e\u7ba1\u7406\u7684\u793a\u4f8b\uff0c\u5305\u62ec\u4f7f\u7528 KCL CLI/API \u8986\u76d6\u548c\u5220\u9664\u914d\u7f6e\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/lang/tour#KCL-cli-variable-Override"},"\u6b64\u5904"),"\u3002"))}m.isMDXComponent=!0},14466:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/14-kcl-image-update-80dc55f27d4f69507a7f00c20e7d62d8.png"},45079:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/15-kcl-automation-2eda1a821f8a1b7ef01e4d09891e595b.png"}}]);