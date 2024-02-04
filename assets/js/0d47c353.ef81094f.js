"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84292],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=l,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const i={slug:"2023-10-11-biweekly-newsletter",title:"KCL Biweekly Newsletter (2023 09.07 - 10.11) | v0.6.0 Is Out - Enhancement on IDE Extensions and Package Management!",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","Biweekly-Newsletter"]},r=void 0,o={permalink:"/blog/2023-10-11-biweekly-newsletter",editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/blog/2023-10-11-biweekly-newsletter/index.md",source:"@site/blog/2023-10-11-biweekly-newsletter/index.md",title:"KCL Biweekly Newsletter (2023 09.07 - 10.11) | v0.6.0 Is Out - Enhancement on IDE Extensions and Package Management!",description:"KCL is an open-source, constraint-based record and functional language that enhances the writing of complex configurations, including those for cloud-native scenarios. With its advanced programming language technology and practices, KCL is dedicated to promoting better modularity, scalability, and stability for configurations. It enables simpler logic writing and offers ease of automation APIs and integration with homegrown systems.",date:"2023-10-11T00:00:00.000Z",formattedDate:"October 11, 2023",tags:[{label:"KCL",permalink:"/blog/tags/kcl"},{label:"Biweekly-Newsletter",permalink:"/blog/tags/biweekly-newsletter"}],readingTime:3.985,hasTruncateMarker:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2023-10-11-biweekly-newsletter",title:"KCL Biweekly Newsletter (2023 09.07 - 10.11) | v0.6.0 Is Out - Enhancement on IDE Extensions and Package Management!",authors:{name:"KCL Team",title:"KCL Team"},tags:["KCL","Biweekly-Newsletter"]},prevItem:{title:"KCL Introduction at CNCF KCD Hangzhou 2023 Meeting",permalink:"/blog/2023-10-21-kcl-kcd-hangzhou-meeting"},nextItem:{title:"KCL Joining CNCF as a Sandbox Project! \ud83c\udf89",permalink:"/blog/2023-09-19-kcl-joining-cncf-sandbox"}},s={authorsImageUrls:[void 0]},p=[{value:"Overview",id:"overview",level:2},{value:"Special Thanks",id:"special-thanks",level:2},{value:"Featured Updates",id:"featured-updates",level:2},{value:"IDE Extension Updates",id:"ide-extension-updates",level:3},{value:"IntelliJ Plugin",id:"intellij-plugin",level:4},{value:"KCL Package Manager Updates",id:"kcl-package-manager-updates",level:3},{value:"KCL Language Updates",id:"kcl-language-updates",level:3},{value:"KCL Models Updates",id:"kcl-models-updates",level:3},{value:"Resources",id:"resources",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,l.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(11556).Z,width:"1141",height:"435"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang"},"KCL")," is an open-source, constraint-based record and functional language that enhances the writing of complex configurations, including those for cloud-native scenarios. With its advanced programming language technology and practices, KCL is dedicated to promoting better modularity, scalability, and stability for configurations. It enables simpler logic writing and offers ease of automation APIs and integration with homegrown systems."),(0,l.kt)("p",null,"This section will update the KCL language community's latest developments every two weeks, including features, website updates, and the latest community news, helping everyone better understand the KCL community!"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"KCL Website: ",(0,l.kt)("a",{parentName:"em",href:"https://kcl-lang.io"},"https://kcl-lang.io")))),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Thank you to all contributors for their outstanding work over the past two weeks (09.07 - 10.11 2023). Here is an overview of the key content:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\ud83d\udd27 Language and Toolchain Updates")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"KCL v0.6.0 Release on 9/15")," - Updates to the language, toolchain, and community integration. Detailed information could be found ",(0,l.kt)("a",{parentName:"li",href:"/blog/2023-09-15-kcl-0.6.0-release"},"here"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"KCL IDE Updates")," - Supports for hover tooltips on standard library and built-in functions, and quick fixes for KCL code errors. And a plugin compatible with Intellij IDEA 2023.2 is released."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"KCL Package Management Tool KPM Updates")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"kpm run")," now could compile KCL files and embeded with the import tool."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"KCL Documentation Tool Updates")," - The docstring Examples section is added to the output documentation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"KCL Language Updates")," - Optimized error message output and added suggestions for fixing some errors.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\ud83d\udcf0 Official Website and Use Case Updates")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"KCL website adds v0.6.0 documentation version."),(0,l.kt)("li",{parentName:"ul"},"More KCL model examples for containers, services, and Pod Security Policy (PSP): ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/krm-kcl/tree/main/examples"},"https://github.com/kcl-lang/krm-kcl/tree/main/examples"))),(0,l.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,l.kt)("p",null,"The following are listed in no particular order:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Thanks to @jakezhu9 for contributing the KCL Import tool to convert Terraform Schema to KCL Schema \ud83d\ude4c ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kcl-go/pull/152"},"https://github.com/kcl-lang/kcl-go/pull/152")),(0,l.kt)("li",{parentName:"ul"},"Thanks to @jakezhu9 for contributing the integration of the Import tool to kpm \ud83d\ude4c ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/kpm/pull/194"},"https://github.com/kcl-lang/kpm/pull/194")),(0,l.kt)("li",{parentName:"ul"},"Thanks to @zwpaper for contributions to KCL documentation and Tree Sitter Grammar \ud83d\ude4c ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kcl-lang/tree-sitter-kcl/pull/1"},"https://github.com/kcl-lang/tree-sitter-kcl/pull/1"),", etc."),(0,l.kt)("li",{parentName:"ul"},"Thanks to @mrgleeco, @ghpu, @steeling, @prahaladramji, @zwpaper, and others for valuable feedback and discussions while using KCL and the toolchain \ud83d\ude4c")),(0,l.kt)("h2",{id:"featured-updates"},"Featured Updates"),(0,l.kt)("h3",{id:"ide-extension-updates"},"IDE Extension Updates"),(0,l.kt)("p",null,"In the recent v0.6.0 release, the KCL IDE plugin has enhanced on hover tooltips for the standard library and builtin functions, along with support for quick fixes for KCL code errors. Additionally, end-to-end tests for the language server and integration tests for the konfig repository have been added to ensure the stability and iteration of the IDE plugin. In the upcoming release, a new ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl-language-server version")," subcommand has been added to display version information. Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/user_docs/getting-started/install/#2-install-kcl-ide-extension"},"https://kcl-lang.io/docs/user_docs/getting-started/install/#2-install-kcl-ide-extension")," for instructions on how to upgrade and install the KCL IDE extension in various IDE platforms."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(3765).Z,width:"2044",height:"1200"})),(0,l.kt)("h4",{id:"intellij-plugin"},"IntelliJ Plugin"),(0,l.kt)("p",null,"Besides, the IntelliJ plugin is now compatible with version 2023.2+ and can be downloaded from the following link: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/intellij-kcl/releases"},"https://github.com/kcl-lang/intellij-kcl/releases")),(0,l.kt)("h3",{id:"kcl-package-manager-updates"},"KCL Package Manager Updates"),(0,l.kt)("p",null,"The kpm run command now supports compiling KCL files and has integrated an import tool. Additionally, the ",(0,l.kt)("inlineCode",{parentName:"p"},"--quiet")," option has been added to suppress output logs."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(68840).Z,width:"1136",height:"816"})),(0,l.kt)("h3",{id:"kcl-language-updates"},"KCL Language Updates"),(0,l.kt)("p",null,"In the upcoming release, the KCL compilation command has optimized error message output and added repair suggestions on some cases:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(54058).Z,width:"1642",height:"190"})),(0,l.kt)("h3",{id:"kcl-models-updates"},"KCL Models Updates"),(0,l.kt)("p",null,"In the past few weeks, we have provided more usage examples for configuring and validating containers, services, and Pod Security Policy (PSP). "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"readonly-root-fs"),(0,l.kt)("li",{parentName:"ul"},"allowed-image-repos"),(0,l.kt)("li",{parentName:"ul"},"deny-all"),(0,l.kt)("li",{parentName:"ul"},"deny-endpoint-edit-default-role"),(0,l.kt)("li",{parentName:"ul"},"disallow-ingress-wildcard"),(0,l.kt)("li",{parentName:"ul"},"disallow-svc-lb"),(0,l.kt)("li",{parentName:"ul"},"disallow-svc-node-port"),(0,l.kt)("li",{parentName:"ul"},"disallowed-image-repos"),(0,l.kt)("li",{parentName:"ul"},"horizontal-pod-auto-scaler"),(0,l.kt)("li",{parentName:"ul"},"psp-allow-privilege-escalation"),(0,l.kt)("li",{parentName:"ul"},"psp-app-armor"),(0,l.kt)("li",{parentName:"ul"},"psp-capabilities"),(0,l.kt)("li",{parentName:"ul"},"psp-flexvolume-drivers"),(0,l.kt)("li",{parentName:"ul"},"required-image-digests"),(0,l.kt)("li",{parentName:"ul"},"required-probes"),(0,l.kt)("li",{parentName:"ul"},"validate-auto-mount-service-account-token"),(0,l.kt)("li",{parentName:"ul"},"validate-container-limits"),(0,l.kt)("li",{parentName:"ul"},"validate-container-requests"),(0,l.kt)("li",{parentName:"ul"},"validate-deprecated-api"),(0,l.kt)("li",{parentName:"ul"},"k8s_manifests_containers")),(0,l.kt)("p",null,"You can refer to the corresponding examples to incorporate the above configurations and validations: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/krm-kcl/tree/main/examples"},"https://github.com/kcl-lang/krm-kcl/tree/main/examples"),". Now, let's explain using the Kubectl KCL plugin and the disallow-svc-lb model. The purpose of disallow-svc-lb is to validate Service resources and disallow the use of LoadBalancer as the Service type. Write the following YAML file (manifests.yaml): "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: krm.kcl.dev/v1alpha1\nkind: KCLRun\nmetadata:\n  name: disallow-svc-lb\n  annotations: \n    krm.kcl.dev/version: 0.0.1\n    krm.kcl.dev/type: validation\n    documentation: >-\n      A validation that prevents the creation of Service resources of type `LoadBalancer`\nspec:\n  source: oci://ghcr.io/kcl-lang/disallow-svc-lb\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app.kubernetes.io/name: MyApp\n  ports:\n    - name: http\n      protocol: TCP\n      port: 80\n  type: LoadBalancer # The service type is incorrectly set to LoadBalancer.\n")),(0,l.kt)("p",null,"Using the Kubectl KCL tool for resource validation on the client-side, we will get the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl kcl apply -f manifests.yaml\n")),(0,l.kt)("p",null,"The output is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"A validation that prevents the creation of Service resources of type `LoadBalancer`, for Service: my-service\n")),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("p",null,"\u2764\ufe0f Thanks to all KCL users and community members for their valuable feedback and suggestions in the community."),(0,l.kt)("p",null,"For more resources, please refer to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL Website"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://kusionstack.io/"},"KusionStack Website"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://kcl-lang.io/docs/community/release-policy/roadmap"},"KCL 2023 Roadmap"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/milestone/7"},"KCL v0.7.0 Milestone"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/kcl/issues"},"KCL Github Issues"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/orgs/kcl-lang/discussions"},"KCL Github Discussion"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/kcl-lang/community"},"KCL Community")))))}d.isMDXComponent=!0},11556:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/biweekly-newsletter-9d6bf596d15ee9a7645130bde27ed5f7.png"},54058:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/error-suggestion-f9ae735fc5136f5e0d06e19116224aee.png"},3765:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hover-built-in-cd22ae11f028854459eab771dbe5542e.png"},68840:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kpm-run-file-04507f18a1fd3f19dcaeaa6c8cc88dd6.png"}}]);