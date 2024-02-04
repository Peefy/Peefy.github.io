"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={id:"github-actions",sidebar_label:"Github Actions"},s="Github Actions \u96c6\u6210",o={unversionedId:"user_docs/guides/ci-integration/github-actions",id:"version-0.5.0/user_docs/guides/ci-integration/github-actions",title:"Github Actions \u96c6\u6210",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.5.0/user_docs/guides/ci-integration/1-github-actions.md",sourceDirName:"user_docs/guides/ci-integration",slug:"/user_docs/guides/ci-integration/github-actions",permalink:"/zh-CN/docs/0.5.0/user_docs/guides/ci-integration/github-actions",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/versioned_docs/version-0.5.0/user_docs/guides/ci-integration/1-github-actions.md",tags:[],version:"0.5.0",lastUpdatedBy:"peefy",lastUpdatedAt:1690255601,formattedLastUpdatedAt:"2023\u5e747\u670825\u65e5",sidebarPosition:1,frontMatter:{id:"github-actions",sidebar_label:"Github Actions"},sidebar:"user_docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/0.5.0/user_docs/guides/gitops/gitops-quick-start"},next:{title:"Gitlab CI",permalink:"/zh-CN/docs/0.5.0/user_docs/guides/ci-integration/gitlab-ci"}},l={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5177\u4f53\u6b65\u9aa4",id:"\u5177\u4f53\u6b65\u9aa4",level:2},{value:"1. \u83b7\u5f97\u793a\u4f8b",id:"1-\u83b7\u5f97\u793a\u4f8b",level:3},{value:"2. \u63d0\u4ea4\u5e94\u7528\u4ee3\u7801",id:"2-\u63d0\u4ea4\u5e94\u7528\u4ee3\u7801",level:3},{value:"3. \u914d\u7f6e\u81ea\u52a8\u66f4\u65b0",id:"3-\u914d\u7f6e\u81ea\u52a8\u66f4\u65b0",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github-actions-\u96c6\u6210"},"Github Actions \u96c6\u6210"),(0,i.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"\u5728 GitOps \u7ae0\u8282\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u5c06 KCL \u4e0e GitOps \u8fdb\u884c\u96c6\u6210\u3002\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u7ee7\u7eed\u63d0\u4f9b KCL \u548c CI \u96c6\u6210\u7684\u793a\u4f8b\u65b9\u6848\uff0c\u5e0c\u671b\u901a\u8fc7\u4f7f\u7528\u5bb9\u5668\u3001\u7528\u4e8e\u751f\u6210\u7684\u6301\u7eed\u96c6\u6210 (CI) \u548c\u7528\u4e8e\u6301\u7eed\u90e8\u7f72 (CD) \u7684 GitOps \u6765\u5b9e\u73b0\u7aef\u5230\u7aef\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u6d41\u7a0b\u3002\u5728\u6b64\u65b9\u6848\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a Flask \u5e94\u7528\u548c Github Actions \u5c06\u7528\u4f5c\u793a\u4f8b\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f60\u53ef\u4ee5\u5728\u6b64\u65b9\u6848\u4e2d\u4f7f\u7528\u4efb\u4f55\u5bb9\u5668\u5316\u5e94\u7528\u4ee5\u53ca\u4e0d\u540c\u7684 CI \u7cfb\u7edf\u5982 Gitlab CI\uff0cJenkins CI \u7b49\u3002")),(0,i.kt)("p",null,"\u6574\u4f53\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5e94\u7528\u4ee3\u7801\u5f00\u53d1\u5e76\u63d0\u4ea4\u5230\u63d0\u4ea4\u5230 GitHub \u5b58\u50a8\u5e93"),(0,i.kt)("li",{parentName:"ul"},"GitHub Actions \u4ece\u5e94\u7528\u4ee3\u7801\u751f\u6210\u5bb9\u5668\u955c\u50cf\uff0c\u5e76\u5c06\u5bb9\u5668\u955c\u50cf\u63a8\u9001\u5230 docker.io \u5bb9\u5668\u6ce8\u518c\u8868"),(0,i.kt)("li",{parentName:"ul"},"GitHub Actions \u6839\u636e docker.io \u5bb9\u5668\u6ce8\u518c\u8868\u4e2d\u5bb9\u5668\u955c\u50cf\u7684\u7248\u672c\u53f7\u5e76\u540c\u6b65\u66f4\u65b0 KCL \u6e05\u5355\u90e8\u7f72\u6587\u4ef6")),(0,i.kt)("h2",{id:"\u5177\u4f53\u6b65\u9aa4"},"\u5177\u4f53\u6b65\u9aa4"),(0,i.kt)("h3",{id:"1-\u83b7\u5f97\u793a\u4f8b"},"1. \u83b7\u5f97\u793a\u4f8b"),(0,i.kt)("p",null,"\u6211\u4eec\u5c06\u4e1a\u52a1\u6e90\u7801\u548c\u90e8\u7f72\u6e05\u5355\u653e\u5728\u4e0d\u540c\u4ed3\u5e93\uff0c\u53ef\u4ee5\u5206\u4e0d\u540c\u89d2\u8272\u8fdb\u884c\u5206\u522b\u7ef4\u62a4\uff0c\u5b9e\u73b0\u5173\u6ce8\u70b9\u5206\u79bb\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u83b7\u5f97\u4e1a\u52a1\u6e90\u7801")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/flask-demo.git/\ncd flask-demo\n")),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u4f7f\u7528 Python \u7f16\u5199\u7684 Web \u5e94\u7528\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5e94\u7528\u76ee\u5f55\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u6765\u751f\u6210\u8fd9\u4e2a\u5e94\u7528\u7684\u5bb9\u5668\u955c\u50cf\uff0c\u540c\u65f6\u53ef\u4ee5\u901a\u8fc7 Github CI \u81ea\u52a8\u6784\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"flask_demo")," \u955c\u50cf\uff0cCI \u914d\u7f6e\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# This is a basic workflow to help you get started with Actions\n\nname: CI\n\n# Controls when the workflow will run\non:\n  # Triggers the workflow on push or pull request events but only for the main branch\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\njobs:\n  # This workflow contains a single job called "build"\n  build:\n    # The type of runner that the job will run on\n    runs-on: ubuntu-latest\n\n    # Steps represent a sequence of tasks that will be executed as part of the job\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - uses: actions/checkout@v2\n      \n      - name: Docker Login\n        uses: docker/login-action@v1.10.0\n        with:\n          username: ${{ secrets.DOCKER_USERNAME }}\n          password: ${{ secrets.DOCKER_PASSWORD }}\n          logout: true\n\n      # Runs a set of commands using the runners shell\n      - name: build image\n        run: |\n          make image\n          docker tag flask_demo:latest ${{ secrets.DOCKER_USERNAME }}/flask_demo:${{ github.sha }}\n          docker push ${{ secrets.DOCKER_USERNAME }}/flask_demo:${{ github.sha }}\n\n      # Trigger KCL manifest\n      - name: Trigger CI\n        uses: InformaticsMatters/trigger-ci-action@1.0.1\n        with:\n          ci-owner: kcl-lang\n          ci-repository: flask-demo-kcl-manifests\n          ci-ref: refs/heads/main\n          ci-user: kcl-bot\n          ci-user-token: ${{ secrets.DEPLOY_ACCESS_TOKEN }}\n          ci-name: CI\n          ci-inputs: >-\n            image=${{ secrets.DOCKER_USERNAME }}/flask_demo\n            sha-tag=${{ github.sha }}\n')),(0,i.kt)("p",null,"\u6211\u4eec\u9700\u8981\u6e90\u7801\u4ed3\u5e93\u7684\u5de5\u4f5c\u6d41\u81ea\u52a8\u89e6\u53d1\u90e8\u7f72\u6e05\u5355\u4ed3\u5e93\u4e2d\u7684\u5de5\u4f5c\u6d41\uff0c\u6b64\u65f6\u9700\u8981\u521b\u5efa\u5177\u6709 Github CI \u64cd\u4f5c\u6743\u9650\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets.DEPLOY_ACCESS_TOKEN")," \u4ee5\u53ca Docker Hub \u955c\u50cf\u63a8\u9001\u7684\u8d26\u53f7\u4fe1\u606f ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets.DOCKER_USERNAME")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets.DOCKER_PASSWORD"),", \u8fd9\u4e9b\u53ef\u4ee5\u5728 Github \u4ed3\u5e93\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Secrets and variables")," \u8bbe\u7f6e\u4e2d\u8fdb\u884c\u914d\u7f6e\uff0c\u5982\u4e0b\u56fe\u6240\u793a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72621).Z,width:"2204",height:"632"})),(0,i.kt)("h3",{id:"2-\u63d0\u4ea4\u5e94\u7528\u4ee3\u7801"},"2. \u63d0\u4ea4\u5e94\u7528\u4ee3\u7801"),(0,i.kt)("p",null,"flask-demo \u4ed3\u5e93\u63d0\u4ea4\u4ee3\u7801\u540e\uff0cGithub \u4f1a\u81ea\u52a8\u6784\u5efa\u5bb9\u5668\u955c\u50cf\uff0c\u5e76\u5c06\u5236\u54c1\u63a8\u9001\u5230 Docker hub \u4e2d\uff0c\u4f1a\u518d\u89e6\u53d1 flask-demo-kcl-manifests \u4ed3\u5e93\u7684 Action\uff0c",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/automation"},"\u901a\u8fc7 KCL \u81ea\u52a8\u5316 API")," \u4fee\u6539\u90e8\u7f72\u6e05\u5355\u4ed3\u5e93\u4e2d\u7684\u955c\u50cf\u5730\u5740\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u4e3a flask-demo \u4ed3\u5e93\u521b\u5efa\u4e00\u4e2a\u63d0\u4ea4\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4ee3\u7801\u63d0\u4ea4\u540e\u89e6\u53d1\u4e1a\u52a1\u4ed3\u5e93 Github CI \u6d41\u7a0b"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(87432).Z,width:"2252",height:"1038"})),(0,i.kt)("h3",{id:"3-\u914d\u7f6e\u81ea\u52a8\u66f4\u65b0"},"3. \u914d\u7f6e\u81ea\u52a8\u66f4\u65b0"),(0,i.kt)("p",null,"\u5f53\u4e1a\u52a1\u4ed3\u5e93 Github CI \u6d41\u7a0b\u6267\u884c\u5b8c\u6210\u540e\uff0c\u4f1a\u81ea\u52a8\u5728\u5b58\u653e KCL \u8d44\u6e90\u914d\u7f6e\u7684\u4ed3\u5e93\u89e6\u53d1\u4e00\u4e2a CI \u81ea\u52a8\u66f4\u65b0\u914d\u7f6e\u5e76\u63d0\u4ea4\u5230 flask-demo-kcl-manifests main \u5206\u652f\uff0ccommit \u4fe1\u606f\u5982\u4e0b"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(34491).Z,width:"2240",height:"1090"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u83b7\u5f97\u90e8\u7f72\u6e05\u5355\u6e90\u7801\u8fdb\u884c\u7f16\u8bd1\u9a8c\u8bc1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/kcl-lang/flask-demo-kcl-manifests.git/\ncd flask-demo-kcl-manifests\ngit checkout main && git pull && kcl\n")),(0,i.kt)("p",null,"\u8f93\u51fa YAML \u4e3a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: flask_demo\n  template:\n    metadata:\n      labels:\n        app: flask_demo\n    spec:\n      containers:\n        - name: flask_demo\n          image: "kcllang/flask_demo:6428cff4309afc8c1c40ad180bb9cfd82546be3e"\n          ports:\n            - protocol: TCP\n              containerPort: 5000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: flask_demo\n  labels:\n    app: flask_demo\nspec:\n  type: NodePort\n  selector:\n    app: flask_demo\n  ports:\n    - port: 5000\n      protocol: TCP\n      targetPort: 5000\n')),(0,i.kt)("p",null,"\u4ece\u4e0a\u8ff0\u914d\u7f6e\u53ef\u4ee5\u770b\u51fa\u8d44\u6e90\u7684\u955c\u50cf\u786e\u5b9e\u81ea\u52a8\u66f4\u65b0\u4e3a\u4e86\u65b0\u6784\u5efa\u7684\u955c\u50cf\u5185\u5bb9\u3002\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 Argo CD KCL \u63d2\u4ef6 \u81ea\u52a8\u4ece Git \u5b58\u50a8\u5e93\u540c\u6b65\u6216\u4ece\u4e2d\u62c9\u53d6\u6570\u636e\u5e76\u5c06\u5e94\u7528\u90e8\u7f72\u5230 Kubernetes \u96c6\u7fa4\u3002"),(0,i.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,i.kt)("p",null,"\u901a\u8fc7\u5c06 KCL \u548c Github CI \u96c6\u6210\uff0c\u6211\u4eec\u80fd\u591f\u5c06\u4efb\u610f\u7684\u4e1a\u52a1\u4ee3\u7801\u7684\u4ea7\u51fa\u5bb9\u5668\u5316\u955c\u50cf\u8fdb\u884c\u81ea\u52a8\u5316\u4fee\u6539\u5e76\u90e8\u7f72\u914d\u7f6e\uff0c\u4ee5\u5b9e\u73b0\u7aef\u5230\u7aef\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u6d41\u7a0b\u5e76\u63d0\u5347\u7814\u53d1\u90e8\u7f72\u6548\u7387\u3002"))}d.isMDXComponent=!0},87432:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app-ci-722f8f31885ae67c956df7921faf15bd.png"},72621:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-secrets-c08dcb44c0fabc46137aefefaf3f9c97.png"},34491:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-auto-update-c98f7e713ab04391266ae88c99e85492.png"}}]);