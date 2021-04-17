(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||a;return n?o.a.createElement(m,l(l({ref:t},d),{},{components:n})):o.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(114)),i={id:"world",title:"World",sidebar_label:"World",slug:"world"},l={unversionedId:"elements/world",id:"elements/world",isDocsHomePage:!1,title:"World",description:"The World is the heart of Ecstatic. All Entities and Systems are added to the World instance, and its methods allow querying of Entities.",source:"@site/docs/elements/world.md",slug:"/elements/world",permalink:"/ecstatic-doc-site/docs/elements/world",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/elements/world.md",version:"current",sidebar_label:"World",sidebar:"someSidebar",previous:{title:"Using With Typescript",permalink:"/ecstatic-doc-site/docs/getting_started/typescript"},next:{title:"Entity",permalink:"/ecstatic-doc-site/docs/elements/entity"}},c=[{value:"Create a World",id:"create-a-world",children:[]},{value:"Querying Entities",id:"querying-entities",children:[]}],d={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"World")," is the heart of Ecstatic. All ",Object(a.b)("inlineCode",{parentName:"p"},"Entities")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Systems")," are added to the ",Object(a.b)("inlineCode",{parentName:"p"},"World")," instance, and its methods allow querying of ",Object(a.b)("inlineCode",{parentName:"p"},"Entities"),"."),Object(a.b)("h2",{id:"create-a-world"},"Create a World"),Object(a.b)("p",null,"To create a ",Object(a.b)("inlineCode",{parentName:"p"},"World"),' instance, all you need to do is "new" one up.'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { World } from '@brochington/ecstatic';\n\nconst world = new World();\n")),Object(a.b)("h2",{id:"querying-entities"},"Querying Entities"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"World")," instance offers a good amount of methods that can be used to find the ",Object(a.b)("inlineCode",{parentName:"p"},"Entities")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Components")," that you want to operate on. "),Object(a.b)("p",null,"To see all the methods that can be used to query with, check out the ",Object(a.b)("a",{parentName:"p",href:"https://brochington.github.io/ecstatic/classes/world.default.html"},"World API Docs"),". "),Object(a.b)("p",null,"Query methods can generally be grouped in a couple buckets:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"get()")," - If you know the entities' id, you can get it directly with get()."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"find(), findAll()"),' - Use a predicate to "find" entities.'),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"locate(), locateAll()"),' - "locate" an entity or entities by what ',Object(a.b)("inlineCode",{parentName:"li"},"Components")," are attached to it. "),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"grab(), grabAll(), grabBy()")," - Similar to ",Object(a.b)("inlineCode",{parentName:"li"},"locate"),' methods, but also "grabs" a component instance as well. Very handy if you know that you\'ll need to update a specific component on an entity.')))}s.isMDXComponent=!0}}]);