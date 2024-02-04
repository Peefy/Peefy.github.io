"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11156],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20526:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={id:"vault",sidebar_label:"Vault"},o="Vault",i={unversionedId:"user_docs/guides/secret-management/vault",id:"version-0.6.0/user_docs/guides/secret-management/vault",title:"Vault",description:"Introduction",source:"@site/versioned_docs/version-0.6.0/user_docs/guides/secret-management/1-vault.md",sourceDirName:"user_docs/guides/secret-management",slug:"/user_docs/guides/secret-management/vault",permalink:"/docs/user_docs/guides/secret-management/vault",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.6.0/user_docs/guides/secret-management/1-vault.md",tags:[],version:"0.6.0",lastUpdatedBy:"peefy",lastUpdatedAt:1694439196,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:1,frontMatter:{id:"vault",sidebar_label:"Vault"},sidebar:"user_docs",previous:{title:"Gitlab CI",permalink:"/docs/user_docs/guides/ci-integration/gitlab-ci"},next:{title:"Validate Terraform Configuration",permalink:"/docs/user_docs/guides/working-with-terraform/validation"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to",id:"how-to",level:2},{value:"1. Get the Example",id:"1-get-the-example",level:3},{value:"2. Pre-store Secrets",id:"2-pre-store-secrets",level:3},{value:"3. Deploy Configuration",id:"3-deploy-configuration",level:3},{value:"4. Verify Secrets",id:"4-verify-secrets",level:3},{value:"Summary",id:"summary",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vault"},"Vault"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This guide will show you that KCL solves the secret management problem by integrating ",(0,r.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/vault"},"Vault")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helmfile/vals"},"Vals"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"KCL")),(0,r.kt)("li",{parentName:"ul"},"Prepare a ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes Cluster")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/vault/downloads"},"Vault")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/helmfile/vals"},"Vals"))),(0,r.kt)("h2",{id:"how-to"},"How to"),(0,r.kt)("h3",{id:"1-get-the-example"},"1. Get the Example"),(0,r.kt)("p",null,"We put the application source code and infrastructure deployment code in different repos, which can be maintained by different roles to achieve the separation of concerns."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get the application code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/kcl-lang.io.git/\ncd ./kcl-lang.io/examples/secret-management/vault\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Show the config")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat main.k\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Secret Management using Vault and Vals\n\napiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n    annotations: {\n        "secret-store": "vault"\n        # Valid format:\n        #  "ref+vault://PATH/TO/KV_BACKEND#/KEY"\n        "foo": "ref+vault://secret/foo#/foo"\n        "bar": "ref+vault://secret/bar#/bar"\n    }\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"The main.k file extends the configuration of the Nginx application and customizes annotations. Among them, the value of annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," follow secret reference format (",(0,r.kt)("inlineCode",{parentName:"p"},"ref+vault://PATH/TO/KV_BACKEND#/KEY"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ref+vault"),": indicates that this is a secret reference, and the external storage service is ",(0,r.kt)("inlineCode",{parentName:"li"},"Vault"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PATH/TO/KV_BACKEND"),": specifies the path where a secret is stored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KEY"),": specifies the key to reading secret.")),(0,r.kt)("p",null,"The complete format is concatenated using a style similar to URI expressions, which can retrieve a secret stored externally."),(0,r.kt)("h3",{id:"2-pre-store-secrets"},"2. Pre-store Secrets"),(0,r.kt)("p",null,"Start the Vault Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault server -dev\nexport VAULT_ADDR='http://127.0.0.1:8200'\n# Note: Replace with your token \nexport VAULT_TOKEN=yourtoken\n")),(0,r.kt)("p",null,"After Vault is started in development mode and unpacked, secrets are pre-stored, and the path and keys are consistent with ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vault kv put secret/foo foo=foo\nvault kv put secret/bar bar=bar\n")),(0,r.kt)("h3",{id:"3-deploy-configuration"},"3. Deploy Configuration"),(0,r.kt)("p",null,"Using the following command to apply the deployment manifest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kcl main.k | vals eval -f - | kubectl apply -f -\n")),(0,r.kt)("p",null,"The expect output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"deployment.apps/nginx created\n")),(0,r.kt)("h3",{id:"4-verify-secrets"},"4. Verify Secrets"),(0,r.kt)("p",null,"Next, verify that the secrets have been retrieved from Vault and replace the values of annotations of Nginx:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify the ",(0,r.kt)("inlineCode",{parentName:"li"},"foo")," annotation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy nginx -o yaml | grep 'foo:'\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    foo: foo\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify the ",(0,r.kt)("inlineCode",{parentName:"li"},"bar")," annotation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy nginx -o yaml | grep 'bar:'\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    bar: bar\n")),(0,r.kt)("p",null,"So far, we have retrieved the secrets hosted in ",(0,r.kt)("inlineCode",{parentName:"p"},"Vault")," and put them into use."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This guide introduces how KCL solves the secret management by integrating Vault and Vals. By following these steps, we can retrieve the secrets hosted in Vault and utilize them."))}d.isMDXComponent=!0}}]);