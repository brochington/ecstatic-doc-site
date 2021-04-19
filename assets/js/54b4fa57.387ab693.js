(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(t),b=o,u=s["".concat(c,".").concat(b)]||s[b]||m[b]||r;return t?a.a.createElement(u,i(i({ref:n},l),{},{components:t})):a.a.createElement(u,i({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var o=t(3),a=t(7),r=(t(0),t(114)),c={id:"tracked-component",title:"TrackedComponent",sidebar_label:"TrackedComponent",slug:"tracked-component"},i={unversionedId:"elements/tracked-component",id:"elements/tracked-component",isDocsHomePage:!1,title:"TrackedComponent",description:"Sometimes it can be really helpful to react to changes in a Component. Ecstatic helps with this by offering a TrackedComponent. a TrackedComponent is a decorated Component, allowing observability without changing the original Component.",source:"@site/docs/elements/tracked-component.md",slug:"/elements/tracked-component",permalink:"/ecstatic-doc-site/docs/elements/tracked-component",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/elements/tracked-component.md",version:"current",sidebar_label:"TrackedComponent",sidebar:"someSidebar",previous:{title:"Component",permalink:"/ecstatic-doc-site/docs/elements/component"},next:{title:"System",permalink:"/ecstatic-doc-site/docs/elements/system"}},p=[{value:"Creating a TrackedComponent",id:"creating-a-trackedcomponent",children:[]},{value:"TrackedComponent Lifecycle Methods",id:"trackedcomponent-lifecycle-methods",children:[{value:"onAdd",id:"onadd",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"onRemove",id:"onremove",children:[]}]}],l={toc:p};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sometimes it can be really helpful to react to changes in a ",Object(r.b)("inlineCode",{parentName:"p"},"Component"),". Ecstatic helps with this by offering a ",Object(r.b)("inlineCode",{parentName:"p"},"TrackedComponent"),". a ",Object(r.b)("inlineCode",{parentName:"p"},"TrackedComponent")," is a decorated ",Object(r.b)("inlineCode",{parentName:"p"},"Component"),", allowing observability without changing the original ",Object(r.b)("inlineCode",{parentName:"p"},"Component"),"."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"TrackedComponent")," uses JS Proxies under the hood, and as such incurs a very small performance hit. This generally is not a problem at all, but it might not be wise to always use them by default."))),Object(r.b)("h2",{id:"creating-a-trackedcomponent"},"Creating a TrackedComponent"),Object(r.b)("p",null,"Ecstatic offers a ",Object(r.b)("inlineCode",{parentName:"p"},"trackComponent")," function that is used to create a TrackedComponent class constructor. ",Object(r.b)("inlineCode",{parentName:"p"},"trackComponent")," takes the class constructor of the original ",Object(r.b)("inlineCode",{parentName:"p"},"Component"),", and a config object used to define lifecycle methods."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'import { trackComponent } from \'@brochington/ecstatic\';\n\nclass Component {}\n\nconst TrackedComponent = trackComponent(Component, {\n  onAdd: () => console.log("Component has been added to an entity!");\n});\n\nworld.createEntity().add(new TrackedComponent()) \n// console.logs "Component has been added to an entity!"\n')),Object(r.b)("h2",{id:"trackedcomponent-lifecycle-methods"},"TrackedComponent Lifecycle Methods"),Object(r.b)("h3",{id:"onadd"},"onAdd"),Object(r.b)("p",null,"Called when the ",Object(r.b)("inlineCode",{parentName:"p"},"TrackedComponent")," is added to an ",Object(r.b)("inlineCode",{parentName:"p"},"Entity"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"class Component {}\n\nconst TrackedComponent = trackComponent(Component, {\n  onAdd: (args) => {\n    const { component, world, entity, entities } = args;\n    // do stuff;\n  };\n});\n")),Object(r.b)("h3",{id:"onupdate"},"onUpdate"),Object(r.b)("p",null,"Called whenever a property on the ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," changes. Can be called very frequently on active components, so be careful with this."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"class Component {}\n\nconst TrackedComponent = trackComponent(Component, {\n  onUpdate: (args) => {\n    const { component, world, previousVal, property, entities } = args;\n    // do stuff;\n  };\n});\n")),Object(r.b)("h3",{id:"onremove"},"onRemove"),Object(r.b)("p",null,"Called when a ",Object(r.b)("inlineCode",{parentName:"p"},"TrackedComponent")," is removed from an ",Object(r.b)("inlineCode",{parentName:"p"},"Entity"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"class Component {}\n\nconst TrackedComponent = trackComponent(Component, {\n  onRemove: (args) => {\n    const { component, world, entity, entities } = args;\n    // do stuff;\n  };\n});\n")))}d.isMDXComponent=!0}}]);