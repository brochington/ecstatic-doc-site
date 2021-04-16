(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,b=p["".concat(o,".").concat(u)]||p[u]||m[u]||r;return n?i.a.createElement(b,s(s({ref:t},l),{},{components:n})):i.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(109)),o={id:"Getting_Started",title:"Getting Started",sidebar_label:"Getting Started",slug:"getting-started"},s={unversionedId:"Getting_Started",id:"Getting_Started",isDocsHomePage:!1,title:"Getting Started",description:"What is ECS?",source:"@site/docs/Getting_Started.md",slug:"/getting-started",permalink:"/ecstatic-doc-site/docs/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Getting_Started.md",version:"current",sidebar_label:"Getting Started"},c=[{value:"What is ECS?",id:"what-is-ecs",children:[]},{value:"Setup",id:"setup",children:[{value:"Creating a World instance",id:"creating-a-world-instance",children:[]},{value:"Creating and Registering Systems",id:"creating-and-registering-systems",children:[]},{value:"Creating Entities and adding Components",id:"creating-entities-and-adding-components",children:[]},{value:"Querying Entities",id:"querying-entities",children:[]},{value:"Tags",id:"tags",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-ecs"},"What is ECS?"),Object(r.b)("p",null,"ECS stands for ",Object(r.b)("inlineCode",{parentName:"p"},"Entity, Component, System"),", and is a way to organize logic and state in your code. Although the definition of each of these parts can vary greatly with the implementation,  the way that Ecstatic defines these is:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Entity")," - An unique ID. Ecstatic houses this ID in an object with some helper methods (",Object(r.b)("inlineCode",{parentName:"p"},"new Entity()"),") .")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Component"),' - A container of state, that has a type. Each instance of a Component is usually linked to an Entity. Basically the Entity has a collection of components that are "attached" to it.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Systems")," - Systems are functions that iterate all Entities that have Components that match certain types. If I have an Entity with a ",Object(r.b)("inlineCode",{parentName:"p"},"MyComponent")," Component added to it, and I have a System that is set to be called on all Entities that have a ",Object(r.b)("inlineCode",{parentName:"p"},"MyComponent"),' Component attached to it, then my Sytem will be called. The important part here is that the composition of the types of Components is what determines what logic is run. Usually Systems are run every "tick", and in a loop.'))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("h3",{id:"creating-a-world-instance"},"Creating a World instance"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"World")," in ECS contains all instances of entities, and also facilitates registering of systems. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"\nconst world = new World();\n")),Object(r.b)("h3",{id:"creating-and-registering-systems"},"Creating and Registering Systems"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'\n// Define the components that let the system identify which entities to run on.\n// In other words, if an entity has all the defined components, then the system will be called on it.\nconst systemComponents = [Component1, Component];\n\n// Systems are provided a number of helpful arguments to work on in the function body.\nconst systemFunction = (args) => {\n  const {\n    world, // the world instance\n    entity, // the current entity\n    components, // the current entity\'s components\n    index, // index of which entity of all entities that the system will run over\n    isFirst, // If this is the first entity to run in this system pass\n    isLast, // If this is the last entity to be run over in this system pass.\n    size // The count of entities that match the given system component requirements.\n  } = args;;\n}\n\n\n// Register the components and system function together on the world.\n// This will return a function that should be called in a loop along with\n// all other systems, usually once each "tick".\nconst firstSystem = world.createSystem(systemComponents, systemFunction)\n\n\n// Running every system in a loop allows for changes in components to be picked up, adding\n// a degree of declarativity, but is not required.\n(function run() {\n  firstSystem();\n\n  window.requestAnimationFrame(run);\n})()\n')),Object(r.b)("h3",{id:"creating-entities-and-adding-components"},"Creating Entities and adding Components"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"\nclass MyComponent {}\n\nconst myEntity = world.createEntity();\n\nmyEntity.add(new MyComponent());\n")),Object(r.b)("h3",{id:"querying-entities"},"Querying Entities"),Object(r.b)("p",null,"There are many methods available on the ",Object(r.b)("inlineCode",{parentName:"p"},"World"),' instance to query entites by what types of Components are attached to them. There is no need to define a "Query" ahead of time. For a complete list, check out the ',Object(r.b)("a",{parentName:"p",href:"https://brochington.github.io/ecstatic/classes/_src_world_.world.html"},"World Instance Methods")," in the API Documentation. Some highlights include:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},'// `world.locate()` "locates" a single entity based on its Components.\nconst entity1 = world.locate([Component1, Component2]);\n\n// `world.grabAll "Grabs" all entities that have a component of the given type attached,\n// as well as the actual component instance.\n\nworld.grabAll(Component1).forEach(({ entity, component }) => /* do greate things */)\n\n')),Object(r.b)("h3",{id:"tags"},"Tags"),Object(r.b)("p",null,"Tags may be added to entities in much the same way as components. A tag is just a string."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const myEntity = world.createEntity().addTag('AwesomeTag');\n")),Object(r.b)("p",null,"Entities can be queried by tag"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const myEntity = world.getTagged('AwesomeTag');\n")))}d.isMDXComponent=!0}}]);