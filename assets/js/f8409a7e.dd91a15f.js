(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1046:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},Highlight:function(){return u},default:function(){return h}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Let's discover IFC.js in less than 5 minutes.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/info/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/info/docs/Guide"}},c=[{value:"What is IFC?",id:"what-is-ifc",children:[]},{value:"The problem of IFC",id:"the-problem-of-ifc",children:[]},{value:"IFC.js to the rescue",id:"ifcjs-to-the-rescue",children:[]},{value:"IFC.js in a nutshell",id:"ifcjs-in-a-nutshell",children:[]},{value:"Who is this library for",id:"who-is-this-library-for",children:[]},{value:"Start your site",id:"start-your-site",children:[]}],u=function(){return(0,o.kt)("iframe",{width:"100%",height:"300",key:Math.random(),src:"https://ifcjs.github.io/hello-world/introduction/",allowfullscreen:"allowfullscreen",allowpaymentrequest:!0,frameborder:"0"})},d={toc:c,Highlight:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's discover ",(0,o.kt)("strong",{parentName:"p"},"IFC.js in less than 5 minutes"),"."),(0,o.kt)("h2",{id:"what-is-ifc"},"What is IFC?"),(0,o.kt)("p",null,"Architects no longer draw building plans one by one, but create 3D models of buildings, much like the houses modelled in The SIMS. This way of working is called BIM (Building Information Model), because the models created contain both geometry and information."),(0,o.kt)("p",null,"However, a building is so complex that there is no single application that can create these models in their entirety. Each application has a specific mission: modelling geometry, calculating structures, making energy simulations, creating project documents, and so on. These tools come from multiple developers around the world and each one works in its own format. "),(0,o.kt)("p",null,"In other words, the structural model created by a structural calculation application cannot be read by the energy simulation programme, and vice versa. So how is it possible to create a model of a building from multiple tools? The answer is ",(0,o.kt)("strong",{parentName:"p"},"IFC"),"."),(0,o.kt)("p",null,"IFC is a format created by BuildingSMART to contain these 3D models of buildings. It is open, so anyone can read and write it. It is equivalent to the OBJ or glTF formats for 3D and videogames. Thanks to IFC any developer can freely create BIM apps that can communicate with the apps of the big development companies in the construction sector. Yay!"),(0,o.kt)("h2",{id:"the-problem-of-ifc"},"The problem of IFC"),(0,o.kt)("p",null,"Anyone who wants to make a BIM application needs to read and write IFC files to be able to import and export information from other tools. Unfortunately, IFC is a format that is difficult to read and write."),(0,o.kt)("p",null,"There are thousands of pages of documentation and creating and maintaining an self-made IFC parser is a huge task. In fact, this is something only companies with several developers working full time on this could afford. It doesn't sound that open anymore, does it?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="This is what an IFC looks like from inside:"',title:'"This',is:!0,what:!0,an:!0,IFC:!0,looks:!0,like:!0,from:!0,'inside:"':!0},"\n#6699= IFCCARTESIANPOINT((0.,-1.70530256582424E-13));\n#6701= IFCAXIS2PLACEMENT2D(#6699,#23);\n#6702= IFCRECTANGLEPROFILEDEF(.AREA.,'SH_Curtain wall',#6701,5700.,1380.);\n#6703= IFCCARTESIANPOINT((892.,-253.399999999998,150.));\n#6705= IFCAXIS2PLACEMENT3D(#6703,#15,#19);\n#6706= IFCEXTRUDEDAREASOLID(#6702,#6705,#19,506.8);\n#6707= IFCCOLOURRGB($,0.501960784313725,0.501960784313725,0.501960784313725);\n\n")),(0,o.kt)("p",null,"Even if you are willing to create a parser from scratch and maintain it with every change in the IFC schema, there are several non-trivial questions to tackle this problem. How to manage memory in very large files? How to implement geometric generation efficiently? What to do when an IFC has not been defined correctly?"),(0,o.kt)("h2",{id:"ifcjs-to-the-rescue"},"IFC.js to the rescue"),(0,o.kt)("p",null,"It wouldn't make sense for all developers to have to implement their own IFC file reader and writer for their applications when we all what the same thing: importing and exporting geometry and the data."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IFC.js")," is a JavaScript library that makes it super easy to read and write IFC files. This allows developers of architecture and construction applications to work in IFC effortlessly and focus on the functionalities that really add value to their business."),(0,o.kt)("h2",{id:"ifcjs-in-a-nutshell"},"IFC.js in a nutshell"),(0,o.kt)("p",null,"IFC.js reads IFC files and generates two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Geometry"),": IFC.js is able to generate 3D scenes because it is compatible with 3D libraries such as Three.js or Babylon.js. This means that you can create 3D BIM tools right away.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data"),": high-level access to all the properties associated with that geometry. This means easy access to data on the building components, their materials, thermal characteristics, structural strength, etc.")),(0,o.kt)("p",null,"Creating a BIM applications with IFC.js is as easy as creating a webpage with JavaScript, HTML and CSS:"),(0,o.kt)(u,{mdxType:"Highlight"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"      import { IfcLoader } from 'web-ifc-three';\n      import { Scene } from 'three';\n\n      //Creates THREE.js scene\n      const scene = new Scene();\n\n      ...\n      \n      //Loads IFC and adds it to the scene\n      const ifcLoader = new IfcLoader();\n      ifcLoader.load(ifcURL, (geometry) => scene.add(geometry));\n")),(0,o.kt)("h2",{id:"who-is-this-library-for"},"Who is this library for"),(0,o.kt)("p",null,"This library is for anyone who wants to develop BIM applications: both developers creating applications for the construction industry and architects and other professionals who want to take advantage of the data contained in their IFC files."),(0,o.kt)("p",null,"To use this library it is necessary to have a basic knowledge of JavaScript, HTML and CSS. This knowledge is beyond the scope of this documentation. You'll also need to use some 3D library to display the geometry of the IFC (Three.js or Babylon.js). If you don't know where to start, we suggest you to take a look ",(0,o.kt)("a",{parentName:"p",href:"https://threejsfundamentals.org/"},"here")," or just join the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord Channel")," and say hi."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),(0,o.kt)("h2",{id:"start-your-site"},"Start your site"),(0,o.kt)("p",null,"Run the development server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),(0,o.kt)("p",null,"Your site starts at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," and edit some lines: the site ",(0,o.kt)("strong",{parentName:"p"},"reloads automatically")," and display your changes."))}h.isMDXComponent=!0}}]);