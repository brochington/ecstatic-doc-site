(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.a.createElement(b,c(c({ref:t},p),{},{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(114)),i={id:"component",title:"Component",sidebar_label:"Component",slug:"component"},c={unversionedId:"elements/component",id:"elements/component",isDocsHomePage:!1,title:"Component",description:"Components in Ecstatic can be anything that is a class, granting some HUGE flexibility.",source:"@site/docs/elements/component.md",slug:"/elements/component",permalink:"/ecstatic-doc-site/docs/elements/component",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/elements/component.md",version:"current",sidebar_label:"Component",sidebar:"someSidebar",previous:{title:"Entity",permalink:"/ecstatic-doc-site/docs/elements/entity"},next:{title:"TrackedComponent",permalink:"/ecstatic-doc-site/docs/elements/tracked-component"}},s=[{value:"Tips",id:"tips",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Components")," in Ecstatic can be anything that is a class, granting some HUGE flexibility. "),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("p",null,"It's helpful to think of ",Object(a.b)("inlineCode",{parentName:"p"},"Components"),' as "balls of state". While methods may exist on a ',Object(a.b)("inlineCode",{parentName:"p"},"Component"),", be careful that they aren't doing too much. It's good to keep these methods isolated to updating and managing state that exists on the ",Object(a.b)("inlineCode",{parentName:"p"},"Component"),". Leave most logic to a ",Object(a.b)("inlineCode",{parentName:"p"},"System"),"."),Object(a.b)("p",null,"Extending ",Object(a.b)("inlineCode",{parentName:"p"},"Components")," can be really helpful in targeting the right ",Object(a.b)("inlineCode",{parentName:"p"},"Systems"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// Components\nclass AwesomeComp {}\n\nclass VeryAwesomeComp extends AwesomeComp {}\n\nclass SuperAwesomeComp extends AwesomeComp {}\n\n// Systems\n// Both Systems can have access to the same data, but can run at different times.\nworld.addSystem([VeryAwesomeComp], VeryAwesomeStuff);\n\nworld.addSystem([SuperAwesomeComp], SuperAwesomeStuff);\n\n")))}l.isMDXComponent=!0}}]);