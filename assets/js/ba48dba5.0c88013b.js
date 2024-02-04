"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={},l="KCL OpenAPI Spec",o={unversionedId:"tools/cli/openapi/spec",id:"tools/cli/openapi/spec",title:"KCL OpenAPI Spec",description:"OpenAPI defines the API Specification for API providers to describe their operations and models in a normative way and provides generating tools to automatically convert to client codes in specific languages.",source:"@site/docs/tools/cli/openapi/spec.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/spec",permalink:"/docs/next/tools/cli/openapi/spec",draft:!1,editUrl:"https://github.com/kcl-lang/kcl-lang.io/tree/main/docs/tools/cli/openapi/spec.md",tags:[],version:"current",lastUpdatedBy:"peefy",lastUpdatedAt:1693477178,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{},sidebar:"tools",previous:{title:"OpenAPI to KCL",permalink:"/docs/next/tools/cli/openapi/openapi-to-kcl"},next:{title:"kpm",permalink:"/docs/next/tools/cli/package-management/command-reference/"}},p={},d=[{value:"The File Structure of the KCL OpenAPI",id:"the-file-structure-of-the-kcl-openapi",level:2},{value:"KCL schema",id:"kcl-schema",level:2},{value:"Schema Name",id:"schema-name",level:3},{value:"Schema Type",id:"schema-type",level:3},{value:"Schema Attribute",id:"schema-attribute",level:3},{value:"Schema Index Signature",id:"schema-index-signature",level:3},{value:"Schema Inherit",id:"schema-inherit",level:3},{value:"Inline schema",id:"inline-schema",level:3},{value:"KCL Doc",id:"kcl-doc",level:2},{value:"Basic Data Types",id:"basic-data-types",level:2},{value:"Reference",id:"reference",level:2}],s={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kcl-openapi-spec"},"KCL OpenAPI Spec"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," defines the API Specification for API providers to describe their operations and models in a normative way and provides generating tools to automatically convert to client codes in specific languages."),(0,i.kt)("p",null,"The KCL OpenAPI Spec describes the rules about how the OpenAPI definitions are translated to the KCL schemas. "),(0,i.kt)("h2",{id:"the-file-structure-of-the-kcl-openapi"},"The File Structure of the KCL OpenAPI"),(0,i.kt)("p",null,"According to the OpenAPI 3.0 specification, an OpenAPI file should at least contains four root objects: ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"components"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"paths"),". The KCL OpenAPI focuses on the part in which the models are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"definitions")," object. Yet the ",(0,i.kt)("inlineCode",{parentName:"p"},"paths")," part which describes the Restful API operations is not considered by the KCL OpenAPI Spec."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note: In addition to the objects listed above, the OpenAPI spec also supports ",(0,i.kt)("inlineCode",{parentName:"p"},"servers"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"security"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tags"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"externalDocs")," as optional root objects, but none of them are concerned by KCL OpenAPI when generating model codes, so we do not need to fill in this section. Yet it won't make any difference if you do.")),(0,i.kt)("p",null,"To put it more comprehensible for beginners, let's take a quick look at the root objects that forms the typical KCL OpenAPI file (snippets from swagger example ",(0,i.kt)("a",{parentName:"p",href:"https://petstore.swagger.io/"},"Petstore"),". The KCL OpenAPI tool only focuses on the ",(0,i.kt)("inlineCode",{parentName:"p"},"definitions")," object which describes two data models (",(0,i.kt)("inlineCode",{parentName:"p"},"Pet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"), and the model ",(0,i.kt)("inlineCode",{parentName:"p"},"Pet")," contains three attributes: ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"category"),")"),(0,i.kt)("h2",{id:"kcl-schema"},"KCL schema"),(0,i.kt)("p",null,'The KCL schema structure defines the "type" of configuration data.'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"More information about KCL schema, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/reference/lang/tour"},"KCL Language Tour#Schema"))),(0,i.kt)("p",null,"In the OpenAPI spec, a KCL schema can be defined by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"definition")," element within the ",(0,i.kt)("inlineCode",{parentName:"p"},"definitions")," object."),(0,i.kt)("p",null,"Example:\nThe following example defines two schemas in KCL: ",(0,i.kt)("inlineCode",{parentName:"p"},"Pet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),", followed by the corresponding data models defined in OpenAPI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# KCL schema\nschema Pet:\n    name:      str\n    id?:       int\n    category?: Category\n\nschema Category:\n    name?: str\n\n# The corresponding OpenAPI spec\n{\n    "definitions": {\n        "Pet": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string"\n                },\n                "id": {\n                    "type": "integer",\n                    "format": "int64"\n                },\n                "category": {\n                    "$ref": "#/definitions/Category"\n                }\n            },\n            "required": [\n                "name"\n            ]\n        },\n        "Category": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string"\n                }\n            }\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n')),(0,i.kt)("h3",{id:"schema-name"},"Schema Name"),(0,i.kt)("p",null,"In KCL, the schema name is declared immediately after the schema keyword, and in OpenAPI, the name of the model is defined by the key of the definition element."),(0,i.kt)("h3",{id:"schema-type"},"Schema Type"),(0,i.kt)("p",null,'The type of KCL schema in OpenAPI is always "object". As in the previous example, the value of the ',(0,i.kt)("inlineCode",{parentName:"p"},"type")," object in ",(0,i.kt)("inlineCode",{parentName:"p"},"Pet")," should be ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,i.kt)("h3",{id:"schema-attribute"},"Schema Attribute"),(0,i.kt)("p",null,"Zero or more attributes can be defined in the KCL schema. The declaration of attributes generally includes the following parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attribute annotation: Optional, starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"@"),", such as ",(0,i.kt)("inlineCode",{parentName:"li"},"@deprecated")," to indicate a deprecated attribute"),(0,i.kt)("li",{parentName:"ul"},"Attribute name: Required"),(0,i.kt)("li",{parentName:"ul"},"Attribute optional modifiers(",(0,i.kt)("inlineCode",{parentName:"li"},"?"),"): Optional. A question mark indicates that the current attribute is optional and may not be assigned. Conversely, the absence of a question mark indicates a required attribute"),(0,i.kt)("li",{parentName:"ul"},"Attribute type: Required. The attribute can be a primitive data type, a schema type, or a combination of the two preceding types"),(0,i.kt)("li",{parentName:"ul"},"Attribute default value: Optional")),(0,i.kt)("p",null,"The mapping between them and the OpenAPI spec is as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Elements of KCL Schema Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Corresponding Elements in OpenAPI"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attribute annotation"),(0,i.kt)("td",{parentName:"tr",align:null},"Not supported. We are planning to add an extension ",(0,i.kt)("inlineCode",{parentName:"td"},"deprecate")," field to the KCL-OpenAPI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attribute name"),(0,i.kt)("td",{parentName:"tr",align:null},"The key of the property under the ",(0,i.kt)("inlineCode",{parentName:"td"},"property")," object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attribute optional modifiers(",(0,i.kt)("inlineCode",{parentName:"td"},"?"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"In each element in the ",(0,i.kt)("inlineCode",{parentName:"td"},"definition")," object, here's an optional ",(0,i.kt)("inlineCode",{parentName:"td"},"required")," field which lists the all the required attributes of that model, and the attributes not listed are optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attribute type"),(0,i.kt)("td",{parentName:"tr",align:null},"The basic types can be declared by a combination of ",(0,i.kt)("inlineCode",{parentName:"td"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"format"),", and the schema type is declared by a ",(0,i.kt)("inlineCode",{parentName:"td"},"$ref")," to the schema definition. KCL-OpenAPI spec adds a ",(0,i.kt)("inlineCode",{parentName:"td"},"x-kcl-types")," extension to indicate a type union. ",(0,i.kt)("inlineCode",{parentName:"td"},"enum")," indicates a union of several literal types. For the type declaration in KCL-OpenAPI, see the chapter - ",(0,i.kt)("a",{parentName:"td",href:"#basic-data-types"},"basic data types"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attribute default value"),(0,i.kt)("td",{parentName:"tr",align:null},"The value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"default")," field is used to set the default value for the attribute")))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,"The following KCL code defines a Pet model which contains two attributes: name (",(0,i.kt)("inlineCode",{parentName:"p"},"string")," type, ",(0,i.kt)("inlineCode",{parentName:"p"},"required"),", with no attribute annotation and no default value) and id (",(0,i.kt)("inlineCode",{parentName:"p"},"int64")," type, optional, with no attribute annotation, and the default value is -1)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# the KCL schema Pet defines two attributes: name, id\nschema Pet:\n    name: str\n    id?:  int = -1\n\n# The corresponding OpenAPI spec\n{\n    "definitions": {\n        "Pet": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                },\n                "id": {\n                    "type": "integer",\n                    "format": "int64",\n                    "default": -1\n                }\n            },\n            "required": [\n                "name"\n            ],\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n')),(0,i.kt)("h3",{id:"schema-index-signature"},"Schema Index Signature"),(0,i.kt)("p",null,"In the KCL schema, the index signatures can be used to define attributes with undefined attribute names. The KCL schema index signature contains the following elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type of the key in the index signature: Declared in square brackets. It must be the basic type"),(0,i.kt)("li",{parentName:"ul"},"Type of value in the index signature: Declared after the colon in the square brackets. It can be any valid KCL type"),(0,i.kt)("li",{parentName:"ul"},"Ellipses(",(0,i.kt)("inlineCode",{parentName:"li"},"..."),") in the index signature: In the square brackets, before the type declaration of the key. It indicates that the index signature is only used to constrain attributes not defined in the schema. The assentation of the symbol indicates that all defined and undefined attributes in the schema are constrained by the index signature."),(0,i.kt)("li",{parentName:"ul"},"Alias for key in index signature: Declared in square brackets, immediately after the left square bracket and takes the form of ",(0,i.kt)("inlineCode",{parentName:"li"},"<name>:"),". The alias can then be used to reference the index signature by name"),(0,i.kt)("li",{parentName:"ul"},"The default value of the index signature: Assign a value to the index signature as the default value")),(0,i.kt)("p",null,"The index signature with its key in ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," type can be described based on the field ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalProperties"),". Other index signatures with a key in types besides ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"check")," expressions used to validate the index signature are not supported by the KCL OpenAPI spec."),(0,i.kt)("p",null,"The mapping between them and the OpenAPI spec is as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Elements of KCL Index Signature"),(0,i.kt)("th",{parentName:"tr",align:null},"Corresponding Elements in OpenAPI"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Type of the key in the KCL index signature"),(0,i.kt)("td",{parentName:"tr",align:null},"Only string type is allowed in OpenAPI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Type of the value in the KCL index signature"),(0,i.kt)("td",{parentName:"tr",align:null},"Declared by the ",(0,i.kt)("inlineCode",{parentName:"td"},"type")," in the ",(0,i.kt)("inlineCode",{parentName:"td"},"additionalProperties")," field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ellipses(",(0,i.kt)("inlineCode",{parentName:"td"},"..."),") in the index signature"),(0,i.kt)("td",{parentName:"tr",align:null},"Only the corresponding meaning of the attendance of the ",(0,i.kt)("inlineCode",{parentName:"td"},"...")," symbol is allowed in OpenAPI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Alias for key in index signature"),(0,i.kt)("td",{parentName:"tr",align:null},"Not supported in KCL-OpenAPI yet. We are planning to add an ",(0,i.kt)("inlineCode",{parentName:"td"},"x-alias")," extension to support that")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Default value of the index signature"),(0,i.kt)("td",{parentName:"tr",align:null},"Not supported in KCL-OpenAPI")))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,"The following KCL code defines a Pet model which contains two pre-declared attributes(",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),") and allows users to add attributes with ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," type keys and ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," type values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# the KCL schema Pet. Besides the pre-declared attributes name and id, it allows to add attributes with key in string type and value in bool type\nschema Pet:\n    name:     str\n    id?:      int\n    [...str]: bool\n\n# The corresponding OpenAPI spec\n{\n    "definitions": {\n        "Pet": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                },\n                "id": {\n                    "type": "integer",\n                    "format": "int64",\n                }\n            },\n            "additionalProperties": {\n                "type": "bool"\n            },\n            "required": [\n                "name"\n            ],\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n')),(0,i.kt)("h3",{id:"schema-inherit"},"Schema Inherit"),(0,i.kt)("p",null,"working in progress"),(0,i.kt)("h3",{id:"inline-schema"},"Inline schema"),(0,i.kt)("p",null,"OpenAPI supports models to be declared inline. But KCL currently does not support that. The model defined inline in OpenAPI will be converted to a schema with a name in KCL. And the naming convention will be: "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"element to define an inline schema in OpenAPI"),(0,i.kt)("th",{parentName:"tr",align:null},"the name of the corresponding KCL schema"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"inline Property"),(0,i.kt)("td",{parentName:"tr",align:null},"add the Property name at the end of the outer schema Name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AdditionalProperties"),(0,i.kt)("td",{parentName:"tr",align:null},'add "AdditionalProperties" at the end of the outer schema Name')))),(0,i.kt)("p",null,"We are planning to support inline schema in KCL, and when supported, the naming convention will be updated then."),(0,i.kt)("p",null,"Example-1:"),(0,i.kt)("p",null,"The following KCL code defines a ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," model which contains two attributes(",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"spec"),"). And the schema of the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," attribute is defined inline."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# The OpenAPI spec\n{\n    "definitions": {\n        "Deployment": {\n            "type": "object",\n            "properties": {\n                "kind": {\n                    "type": "string",\n                },\n                "spec": {\n                    "type": "object",\n                    "properties": {\n                        "replicas": {\n                            "type": "integer",\n                            "format": "int64"\n                        }\n                    }\n                }\n            },\n            "required": [\n                "kind",\n                "spec"\n            ],\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n\n# The corresponding KCL schemas\nschema Deployment:\n    kind: str\n    spec: DeploymentSpec\n\nschema DeploymentSpec:\n    replicas?: int\n')),(0,i.kt)("p",null,"Example-2:"),(0,i.kt)("p",null,"The following KCL code defines a Person model which contains a pre-declared attribute(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),") and allows some ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalProperties")," to be assigned by user. And the type of the values in the ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalProperties")," is defined inline."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# The OpenAPI spec\n{\n    "definitions": {\n        "Person": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                },\n            },\n            "required": [\n                "name",\n                "spec"\n            ],\n            "additionalProperties": {\n                "type": "object",\n                "properties": {\n                    "name": {\n                        "type": "string"\n                    },\n                    "description": {\n                        "type": "string"\n                    }\n                },\n                "required": [\n                    "name"\n                ]\n            },\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n\n# The corresponding KCL schemas\nschema Person:\n    name: str\n    [...str]: [PersonAdditionalProperties]\n\nschema PersonAdditionalProperties:\n    name:         str\n    description?: str\n')),(0,i.kt)("h2",{id:"kcl-doc"},"KCL Doc"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"More information about KCL doc specification, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/tools/cli/kcl/docgen"},"KCL Document Specification"))),(0,i.kt)("p",null,"KCL documents consist of module documents and schema documents. And only the schema documents can be extracted from OpenAPI. The KCL schema document contains four parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Schema Description: Declared right after the schema declaration and before the schema attribute declaration. It provides an overview of schemas"),(0,i.kt)("li",{parentName:"ul"},"Schema Attribute Doc: Declared right after the schema Description and separated by ",(0,i.kt)("inlineCode",{parentName:"li"},"Attributes")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"---")," delimiters. It describes the attribute"),(0,i.kt)("li",{parentName:"ul"},"Additional information about the schema: Declared right after the schema attribute doc and separated by ",(0,i.kt)("inlineCode",{parentName:"li"},"See Also")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"---")," delimiters"),(0,i.kt)("li",{parentName:"ul"},"Example information about the schema: Declared right after the schema additional information and separated by ",(0,i.kt)("inlineCode",{parentName:"li"},"Examples")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"---")," delimiters")),(0,i.kt)("p",null,"The mapping between them and the OpenAPI spec is as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Elements of KCL Schema Document"),(0,i.kt)("th",{parentName:"tr",align:null},"Corresponding Elements in OpenAPI"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Schema Description"),(0,i.kt)("td",{parentName:"tr",align:null},"The value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"description")," field of the data model")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Schema Attribute Doc"),(0,i.kt)("td",{parentName:"tr",align:null},"The value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"description")," field of the property")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Additional information about the schema"),(0,i.kt)("td",{parentName:"tr",align:null},"The value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"externalDocs")," field of the data model")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Example information about the schema"),(0,i.kt)("td",{parentName:"tr",align:null},"The value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"example")," field of the data model")))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,"The following KCL code defines a Pet model with a schema description ",(0,i.kt)("inlineCode",{parentName:"p"},"The schema Pet definition"),", and two attributes ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," with their attribute doc ",(0,i.kt)("inlineCode",{parentName:"p"},"The name of the pet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"The id of the pet"),"; The additional information about the Pet schema is ",(0,i.kt)("a",{parentName:"p",href:"https://petstore.swagger.io/"},"here")," and the example to use the Pet schema are provided, too."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# The KCL schema Pet, with doc following the KCL Document Specification\nschema Pet:\n    """The schema Pet definition\n    \n    Attributes\n    ----------\n    name : str, default is Undefined, required\n        The name of the pet\n    id : int, default is -1, optional\n        The age of the pet\n\n    See Also\n    --------\n    Find more info here. https://petstore.swagger.io/\n\n    Examples\n    --------\n    pet = Pet {\n        name = "doggie"\n        id   = 123\n    }\n    """\n    name: str\n    id?:  int = -1\n        \n# The corresponding OpenAPI Spec\n{\n    "definitions": {\n        "Pet": {\n            "description": "The schema Pet definition",\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                    "description": "The name of the pet"\n                },\n                "id": {\n                    "type": "integer",\n                    "format": "int64",\n                    "default": -1,\n                    "description": "The age of the pet"\n                }\n            },\n            "required": [\n                "name"\n            ],\n            "externalDocs": {\n                "description": "Find more info here",\n                "url": "https://petstore.swagger.io/"\n            },\n            "example": {\n                "name": "doggie",\n                "id": 123\n            }\n        }\n    },\n    "swagger": "2.0",\n    "info": {\n        "title": "demo",\n        "version": "v1"\n    }\n}\n')),(0,i.kt)("h2",{id:"basic-data-types"},"Basic Data Types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"JSON Schema type"),(0,i.kt)("th",{parentName:"tr",align:null},"swagger type"),(0,i.kt)("th",{parentName:"tr",align:null},"KCL type"),(0,i.kt)("th",{parentName:"tr",align:null},"comment"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"number format double"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"unsupported")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"number format float"),(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"int (32)"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"integer format int64"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"unsupported")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"integer format int32"),(0,i.kt)("td",{parentName:"tr",align:null},"int (32)"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"str"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string format byte"),(0,i.kt)("td",{parentName:"tr",align:null},"str"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string format int-or-string"),(0,i.kt)("td",{parentName:"tr",align:null},"int ","|"," str"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string format binary"),(0,i.kt)("td",{parentName:"tr",align:null},"str"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string format date"),(0,i.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"As defined by\xa0full-date\xa0-\xa0",(0,i.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc3339"},"RFC3339"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string format date-time"),(0,i.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"As defined by\xa0date-time\xa0-\xa0",(0,i.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc3339"},"RFC3339"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string format\xa0password"),(0,i.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"for swagger:\xa0A hint to UIs to obscure input")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"datetime"),(0,i.kt)("td",{parentName:"tr",align:null},"datetime"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OpenAPI spec 2.0: ",(0,i.kt)("a",{parentName:"li",href:"https://swagger.io/specification/v2/"},"https://swagger.io/specification/v2/")),(0,i.kt)("li",{parentName:"ul"},"OpenAPI spec 3.0: ",(0,i.kt)("a",{parentName:"li",href:"https://spec.openapis.org/oas/v3.1.0"},"https://spec.openapis.org/oas/v3.1.0")),(0,i.kt)("li",{parentName:"ul"},"OpenAPI spec 3.0: ",(0,i.kt)("a",{parentName:"li",href:"https://swagger.io/specification/"},"https://swagger.io/specification/")),(0,i.kt)("li",{parentName:"ul"},"OpenAPI spec 2.0: ",(0,i.kt)("a",{parentName:"li",href:"https://swagger.io/specification/v2/#schemaObject"},"https://swagger.io/specification/v2/#schemaObject")),(0,i.kt)("li",{parentName:"ul"},"Go swagger: ",(0,i.kt)("a",{parentName:"li",href:"https://goswagger.io/use/models/schemas.html"},"https://goswagger.io/use/models/schemas.html")),(0,i.kt)("li",{parentName:"ul"},"Swagger data models: ",(0,i.kt)("a",{parentName:"li",href:"https://swagger.io/docs/specification/data-models/"},"https://swagger.io/docs/specification/data-models/"))))}c.isMDXComponent=!0}}]);