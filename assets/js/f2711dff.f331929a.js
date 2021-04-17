(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(114)),o={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"installation"},c={unversionedId:"getting_started/installation",id:"getting_started/installation",isDocsHomePage:!1,title:"Installation",description:"The Ecstatic package can be installed via npm.",source:"@site/docs/getting_started/installation.md",slug:"/getting_started/installation",permalink:"/ecstatic-doc-site/docs/getting_started/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting_started/installation.md",version:"current",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"What is ECS?",permalink:"/ecstatic-doc-site/docs/getting_started/what-is-ecs"},next:{title:"Basic Setup",permalink:"/ecstatic-doc-site/docs/getting_started/basic-setup"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Ecstatic package can be installed via ",Object(i.b)("inlineCode",{parentName:"p"},"npm"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install @brochington/ecstatic\n")),Object(i.b)("p",null,"You may also use an ESM via the ",Object(i.b)("inlineCode",{parentName:"p"},"unpkg")," CDN. Doing this will provide an ",Object(i.b)("inlineCode",{parentName:"p"},"ecstatic")," object in the global scope. This is a great option for quick experiments."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body>\n    <script type="module" src="https://unpkg.com/@brochington/ecstatic@0.2"><\/script>\n    <script type="module">\n      const { World } = ecstatic;\n\n      // Rest of your app code can go here.\n    <\/script>\n  </body>\n</html>\n')))}p.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);