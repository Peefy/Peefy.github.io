"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="CRD to KCL",s={unversionedId:"tools/cli/openapi/crd-to-kcl",id:"version-0.4.5/tools/cli/openapi/crd-to-kcl",title:"CRD to KCL",description:"To convert from models defined in the Kubernetes CRD file to KCL schema, we could run the following script:",source:"@site/versioned_docs/version-0.4.5/tools/cli/openapi/crd-to-kcl.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/crd-to-kcl",permalink:"/docs/0.4.5/tools/cli/openapi/crd-to-kcl",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.4.5/tools/cli/openapi/crd-to-kcl.md",tags:[],version:"0.4.5",lastUpdatedBy:"Peefy",lastUpdatedAt:1676950659,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{},sidebar:"tools",previous:{title:"Quick Start",permalink:"/docs/0.4.5/tools/cli/openapi/quick-start"},next:{title:"OpenAPI to KCL",permalink:"/docs/0.4.5/tools/cli/openapi/openapi-to-kcl"}},l={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crd-to-kcl"},"CRD to KCL"),(0,o.kt)("p",null,"To convert from models defined in the Kubernetes CRD file to KCL schema, we could run the following script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model --crd -f ${your_CRD.yaml} -t ${the_kcl_files_output_dir} --skip-validation\n")),(0,o.kt)("h1",{id:"example"},"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There is the Kubernetes CRD file that we need to convert: ",(0,o.kt)("inlineCode",{parentName:"p"},"test_crontab_CRD.yaml"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Deprecated in v1.16 in favor of apiextensions.k8s.io/v1\napiVersion: apiextensions.k8s.io/v1beta1\nkind: CustomResourceDefinition\nmetadata:\n  # name must match the spec fields below, and be in the form: <plural>.<group>\n  name: crontabs.stable.example.com\nspec:\n  # group name to use for REST API: /apis/<group>/<version>\n  group: stable.example.com\n  # list of versions supported by this CustomResourceDefinition\n  versions:\n    - name: v1\n      # Each version can be enabled/disabled by Served flag.\n      served: true\n      # One and only one version must be marked as the storage version.\n      storage: true\n  # either Namespaced or Cluster\n  scope: Namespaced\n  names:\n    # plural name to be used in the URL: /apis/<group>/<version>/<plural>\n    plural: crontabs\n    # singular name to be used as an alias on the CLI and for display\n    singular: crontab\n    # kind is normally the CamelCased singular type. Your resource manifests use this.\n    kind: CronTab\n    # shortNames allow shorter string to match your resource on the CLI\n    shortNames:\n      - ct\n  preserveUnknownFields: false\n  validation:\n    openAPIV3Schema:\n      type: object\n      properties:\n        spec:\n          type: object\n          properties:\n            cronSpec:\n              type: string\n            image:\n              type: string\n            replicas:\n              type: integer\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The script will be:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model -f test_crontab_CRD.yaml -t ~/ --skip-validation --crd\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then we can find the generated file here: ",(0,o.kt)("inlineCode",{parentName:"p"},"~/models/stable_example_com_v1_cron_tab.k")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""\nThis file was generated by the KCL auto-gen tool. DO NOT EDIT.\nEditing this file might prove futile when you re-run the KCL auto-gen generate command.\n"""\nimport kusion_kubernetes.apimachinery.apis\n')))),(0,o.kt)("p",null,'  schema CronTab:\n"""stable example com v1 cron tab\n"""'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  apiVersion: "stable.example.com/v1" = "stable.example.com/v1"\n  """ APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources\n  """\n\n  kind: "CronTab" = "CronTab"\n  """ Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds\n  """\n\n  metadata?: apis.ObjectMeta\n  """ Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata\n  """\n\n  spec?: StableExampleComV1CronTabSpec\n  """spec\n  """\n')),(0,o.kt)("p",null,'  schema StableExampleComV1CronTabSpec:\n"""stable example com v1 cron tab spec\n"""'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  cronSpec?: str\n  """cron spec\n  """\n\n  image?: str\n  """image\n  """\n\n  replicas?: int\n  """replicas\n  """\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")))}u.isMDXComponent=!0}}]);