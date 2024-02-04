"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={slug:"2023-09-06-biweekly-newsletter",title:"KCL Biweekly Newsletter (2023 08.24 - 09.06) | Kubernetes Operator, IDE Extensions and v0.5.6 are out!",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","Biweekly-Newsletter"]},l=void 0,r={permalink:"/blog/2023-09-06-biweekly-newsletter",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-09-06-biweekly-newsletter/index.md",source:"@site/blog/2023-09-06-biweekly-newsletter/index.md",title:"KCL Biweekly Newsletter (2023 08.24 - 09.06) | Kubernetes Operator, IDE Extensions and v0.5.6 are out!",description:"KCL is an open-source, constraint-based record and functional language that enhances the writing of complex configurations, including those for cloud-native scenarios. With its advanced programming language technology and practices, KCL is dedicated to promoting better modularity, scalability, and stability for configurations. It enables simpler logic writing and offers ease of automation APIs and integration with homegrown systems.",date:"2023-09-06T00:00:00.000Z",formattedDate:"September 6, 2023",tags:[{label:"KCL",permalink:"/blog/tags/kcl"},{label:"Biweekly-Newsletter",permalink:"/blog/tags/biweekly-newsletter"}],readingTime:4.635,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2023-09-06-biweekly-newsletter",title:"KCL Biweekly Newsletter (2023 08.24 - 09.06) | Kubernetes Operator, IDE Extensions and v0.5.6 are out!",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","Biweekly-Newsletter"]},prevItem:{title:"A New Paradigm for Dynamic Configuration Management - KRM KCL Specification",permalink:"/blog/2023-09-06-dcm-using-kcl"},nextItem:{title:"Congratulations to jakezhu9 for becoming a KCL Community Maintainer! KCL Import Tool Welcomes Enhanced Features!",permalink:"/blog/2023-09-04-maintainer-jakezhu9-blog"}},s={authorsImageUrls:[void 0]},p=[{value:"Overview",id:"overview",level:2},{value:"Special Thanks",id:"special-thanks",level:2},{value:"Featured Updates",id:"featured-updates",level:2},{value:"KCL Operator",id:"kcl-operator",level:3},{value:"0. Prerequisites",id:"0-prerequisites",level:4},{value:"1. Install KCL Operator",id:"1-install-kcl-operator",level:4},{value:"2. Deploy KCL Annotation Setting Model",id:"2-deploy-kcl-annotation-setting-model",level:4},{value:"3. Deploy a Pod to Verify the Model Result",id:"3-deploy-a-pod-to-verify-the-model-result",level:4},{value:"IDE Extension Updates",id:"ide-extension-updates",level:3},{value:"Resources",id:"resources",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(11556).Z,width:"1141",height:"435"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," is an open-source, constraint-based record and functional language that enhances the writing of complex configurations, including those for cloud-native scenarios. With its advanced programming language technology and practices, KCL is dedicated to promoting better modularity, scalability, and stability for configurations. It enables simpler logic writing and offers ease of automation APIs and integration with homegrown systems."),(0,o.kt)("p",null,"This section will update the KCL language community's latest developments every two weeks, including features, website updates, and the latest community news, helping everyone better understand the KCL community!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"KCL Website: ",(0,o.kt)("a",{parentName:"em",href:"https://kcl-lang.io"},"https://kcl-lang.io")))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Thank you to all contributors for their outstanding work over the past two weeks (08.10-08.23 2023). Here is an overview of the key content:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udd27 Language and Toolchain Updates")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"KCL Import Tool Updates")," - Supports exporting JSON/YAML data to KCL configuration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"KCL IDE Updates")," - Supports right-click formatting ability, formatting individual files or parts of KCL code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"KCL Documentation Tool Updates")," - Exported documents support HTML escape."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"KCL Package Management Tool KPM Updates")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"kpm run")," command execution and error message optimization, supports running KCL packages located in local paths."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"KCL Language Updates")," - Optimized system package type check error messages and unified error message codes. ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udcf0 Official Website and Use Case Updates")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"KCL website adds v0.5.6 documentation version."),(0,o.kt)("li",{parentName:"ul"},"Publishing KCL packages to docker.io or ghcr.io registries using Github Actions Example: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kpm/blob/main/docs/push_by_github_action.md"},"https://github.com/kcl-lang/kpm/blob/main/docs/push_by_github_action.md")),(0,o.kt)("li",{parentName:"ul"},"KCL Operator example: ",(0,o.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator"},"https://kcl-lang.io/docs/user_docs/guides/working-with-k8s/mutate-manifests/kcl-operator"))),(0,o.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,o.kt)("p",null,"The following are listed in no particular order:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Thanks to @jakezhu9 for the contribution of converting JSON and YAML configuration data to KCL configuration in the KCL Import Tool \ud83d\ude4c ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl-go/pull/141"},"https://github.com/kcl-lang/kcl-go/pull/141")),(0,o.kt)("li",{parentName:"ul"},"Thanks to @xxmao123 and @starkers for their contributions to the KCL NeoVim and Idea IDE extensions \ud83d\ude4c ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/intellij-kcl/pull/12"},"https://github.com/kcl-lang/intellij-kcl/pull/12")),(0,o.kt)("li",{parentName:"ul"},"Thanks to @kolloch, @prahaladramji, and others for their valuable feedback and discussions during the use of KCL in the past two weeks \ud83d\ude4c ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations @jakezhu9 for becoming a KCL community Maintainer \ud83c\udf89")),(0,o.kt)("h2",{id:"featured-updates"},"Featured Updates"),(0,o.kt)("h3",{id:"kcl-operator"},"KCL Operator"),(0,o.kt)("p",null,"KCL Operator provides cluster integration, allowing you to use Access Webhook to generate, mutate, or validate resources based on KCL configuration when apply resources to the cluster. Webhook will capture creation, application, and editing operations, and execute ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/krm-kcl"},"KCLRun")," on the configuration associated with each operation, and the KCL programming language can be used to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add labels or annotations based on a condition."),(0,o.kt)("li",{parentName:"ul"},"Inject a sidecar container in all KRM resources that contain a ",(0,o.kt)("inlineCode",{parentName:"li"},"PodTemplate"),"."),(0,o.kt)("li",{parentName:"ul"},"Validating all KRM resources using KCL Schema, such as constraints on starting containers only in a root mode."),(0,o.kt)("li",{parentName:"ul"},"Generating KRM resources using an abstract model or combining and using different KRM APIs. ")),(0,o.kt)("p",null,"With KCL Operator, you can automate resource configuration management and security validation in a Kubernetes cluster using lightweight KCL code, without the need to develop a webhook server to dynamically mutate and validate configurations at runtime. "),(0,o.kt)("p",null,"Furthermore, leveraging KCL's modeling and abstraction capabilities, we can define functionality abstractions/compositions for different resource APIs and expose them in the form of KCL Schema. We can further generate OpenAPI Schema definitions from KCL Schema for other clients in the cluster to use, without manually maintaining complex OpenAPI Schema definitions for API abstractions/compositions. Here is an example of using KCL Operator to modify resource annotations:"),(0,o.kt)("h4",{id:"0-prerequisites"},"0. Prerequisites"),(0,o.kt)("p",null,"Prepare a Kubernetes cluster like ",(0,o.kt)("inlineCode",{parentName:"p"},"k3d")," the kubectl tool."),(0,o.kt)("h4",{id:"1-install-kcl-operator"},"1. Install KCL Operator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/kcl-lang/kcl-operator/main/config/all.yaml\n")),(0,o.kt)("p",null,"Use the following command to observe and wait for the pod status to be ",(0,o.kt)("inlineCode",{parentName:"p"},"Running"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get po\n")),(0,o.kt)("h4",{id:"2-deploy-kcl-annotation-setting-model"},"2. Deploy KCL Annotation Setting Model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f- << EOF\napiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata:\n  name: set-annotation\nspec:\n  # Set dynamic parameters required for the annotation modification model, here we can add the labels we want to modify/add\n  params:\n    annotations:\n      managed-by: kcl-operator\n  # Reference the annotation modification model on OCI\n  source: oci://ghcr.io/kcl-lang/set-annotation\nEOF\n")),(0,o.kt)("h4",{id:"3-deploy-a-pod-to-verify-the-model-result"},"3. Deploy a Pod to Verify the Model Result"),(0,o.kt)("p",null,"Execute the following command to deploy a ",(0,o.kt)("inlineCode",{parentName:"p"},"Pod")," resource:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f- << EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  annotations:\n    app: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx:1.14.2\n    ports:\n    - containerPort: 80\nEOF\nkubectl get po nginx -o yaml | grep kcl-operator\n")),(0,o.kt)("p",null,"We can see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"    managed-by: kcl-operator\n")),(0,o.kt)("p",null,"We can see that the Nginx Pod automatically added the annotation ",(0,o.kt)("inlineCode",{parentName:"p"},"managed-by=kcl-operator"),"."),(0,o.kt)("p",null,"In addition, besides referencing an existing model for the source field of the ",(0,o.kt)("inlineCode",{parentName:"p"},"KCLRun")," resource, we can directly set KCL code for the source field to achieve the same effect. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata:\n  name: set-annotation\nspec:\n  params:\n    annotations:\n      managed-by: kcl-operator\n  # Resource modification can be achieved with just one line of KCL code\n  source: |\n    items = [item | {metadata.annotations: option("params").annotations} for item in option("items")]\n')),(0,o.kt)("p",null,"We have provided more than 30 built-in models, and you can find more code examples in the following link: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/krm-kcl/tree/main/examples"},"https://github.com/kcl-lang/krm-kcl/tree/main/examples")),(0,o.kt)("h3",{id:"ide-extension-updates"},"IDE Extension Updates"),(0,o.kt)("p",null,"In the past two weeks, we have integrated the KCL language server LSP into NeoVim and Idea, enabling the completion, navigation, and hover features supported by VS Code IDE in NeoVim and IntelliJ IDEA."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NeoVim KCL Extension")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kcl.nvim",src:n(28522).Z,width:"1246",height:"1121"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"IntelliJ Extension")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"intellij",src:n(47669).Z,width:"1041",height:"650"})),(0,o.kt)("p",null,"For more information on downloading, installation, and features of the IDE plugins, please refer to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install#neovim"},"https://kcl-lang.io/docs/user_docs/getting-started/install#neovim")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/getting-started/install#intellij-idea"},"https://kcl-lang.io/docs/user_docs/getting-started/install#intellij-idea"))),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"\u2764\ufe0f Thanks to all KCL users and community members for their valuable feedback and suggestions in the community."),(0,o.kt)("p",null,"For more resources, please refer to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL Website"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://kusionstack.io/"},"KusionStack Website"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/release-policy/roadmap"},"KCL 2023 Roadmap"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/milestone/6"},"KCL v0.6.0 Milestone"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues"},"KCL Github Issues"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/kcl-lang/discussions"},"KCL Github Discussion"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"KCL Community")))))}m.isMDXComponent=!0},11556:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/biweekly-newsletter-9d6bf596d15ee9a7645130bde27ed5f7.png"},47669:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overview-8fba05fd4572ba3eeb1d34267098168c.png"},28522:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overview-1a92596ca2fc24561c231c91145aef4e.png"}}]);