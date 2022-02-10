(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2175],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4973:function(e,n,t){"use strict";t.d(n,{Z:function(){return p},I:function(){return u}});var r=t(7294),i=/{\w+}/g,o="{}";function a(e,n){var t=[],a=e.replace(i,(function(e){var i=e.substr(1,e.length-2),a=null==n?void 0:n[i];if(void 0!==a){var l=r.isValidElement(a)?a:String(a);return t.push(l),o}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?a.split(o).reduce((function(e,n,r){var i;return e.concat(n).concat(null!==(i=t[r])&&void 0!==i?i:"")}),""):a.split(o).reduce((function(e,n,i){return[].concat(e,[r.createElement(r.Fragment,{key:i},n,t[i])])}),[])}function l(e){return a(e.children,e.values)}var c=t(4644);function s(e){var n,t=e.id,r=e.message;return null!==(n=c[null!=t?t:r])&&void 0!==n?n:r}function u(e,n){var t,r=e.message;return a(null!==(t=s({message:r,id:e.id}))&&void 0!==t?t:r,n)}function p(e){var n,t=e.children,i=e.id,o=e.values,a=null!==(n=s({message:t,id:i}))&&void 0!==n?n:t;return r.createElement(l,{values:o},a)}},983:function(e,n,t){"use strict";t.d(n,{M:function(){return l}});var r=t(7294),i=t(9205),o="titleOffset_2I3u",a="iconContainer_1xRA",l=function(e){var n=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:a},e.icon&&r.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&o},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},n,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,n,t){"use strict";t.d(n,{A:function(){return s}});var r=t(7294),i="hidden_2JtY",o="iconContainer_2Rnc",a="visible_2147",l="link_Lh4h",c="clickable_3vcc",s=function(e){var n=" "+(e.active?a:i),t=l+" "+(e.link&&c);return r.createElement("div",{className:o+n},r.createElement("a",{href:e.link,className:t},e.icon||"\ud83d\ude80"))}},5308:function(e,n,t){"use strict";t.d(n,{Q:function(){return o}});var r=t(7294),i=t(4973),o=function(e){return r.createElement("div",null,e.image,r.createElement("a",{target:"_blank",href:e.ifcLink}," ",r.createElement("i",null,function(e){return e.hideSource?null:r.createElement(i.Z,{description:"The source of an image of the blog"},"Source")}(e))," "))}},3259:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a=t(5308),l=t(983),c=["components"],s={slug:"Build a CDE in 30 minutes",title:"30\u5206\u3067CDE\u3092\u69cb\u7bc9",author:"Ansoni",author_title:"\u81ea\u5206\u3060\u3051\u306eCDE\u3092\u4e00\u304b\u3089\u4f5c\u3063\u3066\u307f\u3088\u3046",author_url:"https://github.com/agviegas",author_image_url:"https://secure.gravatar.com/avatar/9263b9f81d351788e46bc64000c03cb6",tags:["\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb","CDE","Google"]},u={permalink:"/info/ja/blog/Build a CDE in 30 minutes",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2021-09-27-cde-in-30-minutes.mdx",title:"30\u5206\u3067CDE\u3092\u69cb\u7bc9",description:"\u5927\u624b\u4f01\u696d\u304c\u3053\u305e\u3063\u3066CDE\u3092\u8ca9\u58f2\u3057\u3066\u3044\u307e\u3059\u3002\u3042\u306a\u305f\u3082\u81ea\u5206\u306eCDE\u3092\u4f5c\u3063\u3066\u307f\u307e\u305b\u3093\u304b\uff1f",date:"2021-09-27T00:00:00.000Z",formattedDate:"2021\u5e749\u670827\u65e5",tags:[{label:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb",permalink:"/info/ja/blog/tags/\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb"},{label:"CDE",permalink:"/info/ja/blog/tags/cde"},{label:"Google",permalink:"/info/ja/blog/tags/google"}],readingTime:2.14,truncated:!0,prevItem:{title:"IFC\u304c\u3046\u307e\u304f\u3044\u304b\u306a\u3044\u7406\u7531",permalink:"/info/ja/blog/Why IFC doesnt work"},nextItem:{title:"\u6c42\u3081\u3089\u308c\u308bBIM\u3068\u306f",permalink:"/info/ja/blog/prometheus"}},p=[{value:"\u3057\u304b\u3057\u3001CDE\u3068\u306f\u4f55\u3067\u3057\u3087\u3046\u304b\uff1f",id:"\u3057\u304b\u3057\u3001cde\u3068\u306f\u4f55\u3067\u3057\u3087\u3046\u304b\uff1f",children:[]},{value:"\u5206\u304b\u3063\u305f\u304c\u3001\u306a\u305cCDE\u304c\u5fc5\u8981\u306a\u306e\u304b\uff1f",id:"\u5206\u304b\u3063\u305f\u304c\u3001\u306a\u305ccde\u304c\u5fc5\u8981\u306a\u306e\u304b\uff1f",children:[]},{value:"CDE\u306e\u7d20\u6674\u3089\u3057\u3055\u306f\u308f\u304b\u3063\u305f\u3002\u3067\u3082\u3001\u81ea\u5206\u3067\u306f\u7d76\u5bfe\u306b\u958b\u767a\u3067\u304d\u307e\u305b\u3093\u3002",id:"cde\u306e\u7d20\u6674\u3089\u3057\u3055\u306f\u308f\u304b\u3063\u305f\u3002\u3067\u3082\u3001\u81ea\u5206\u3067\u306f\u7d76\u5bfe\u306b\u958b\u767a\u3067\u304d\u307e\u305b\u3093\u3002",children:[]},{value:"CDE\u30c7\u30b6\u30a4\u30f3",id:"cde\u30c7\u30b6\u30a4\u30f3",children:[{value:"\u6226\u7565",id:"\u6226\u7565",children:[]},{value:"\u5efa\u7bc9",id:"\u5efa\u7bc9",children:[]},{value:"IFC.js\u30a2\u30d7\u30ea",id:"ifcjs\u30a2\u30d7\u30ea",children:[]},{value:"Chrome\u62e1\u5f35\u6a5f\u80fd",id:"chrome\u62e1\u5f35\u6a5f\u80fd",children:[]},{value:"\u307f\u3093\u306a\u3067\u4e00\u7dd2\u306b!",id:"\u307f\u3093\u306a\u3067\u4e00\u7dd2\u306b",children:[]}]},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",children:[]}],d={toc:p};function m(e){var n=e.components,s=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u5927\u624b\u4f01\u696d\u304c\u3053\u305e\u3063\u3066CDE\u3092\u8ca9\u58f2\u3057\u3066\u3044\u307e\u3059\u3002\u3042\u306a\u305f\u3082\u81ea\u5206\u306eCDE\u3092\u4f5c\u3063\u3066\u307f\u307e\u305b\u3093\u304b\uff1f")),(0,o.kt)(a.Q,{image:(0,o.kt)("img",{src:t(5038).Z,alt:"Lego image"}),ifcLink:"https://www.pexels.com/photo/set-of-multicolored-plastic-construction-toys-scattered-on-floor-7444982/",mdxType:"IfcImage"}),(0,o.kt)("h2",{id:"\u3057\u304b\u3057\u3001cde\u3068\u306f\u4f55\u3067\u3057\u3087\u3046\u304b\uff1f"},"\u3057\u304b\u3057\u3001CDE\u3068\u306f\u4f55\u3067\u3057\u3087\u3046\u304b\uff1f"),(0,o.kt)("p",null,"\ud83d\udce6\n\u975e\u516c\u5f0f\u306b\u8a00\u3048\u3070\u3001",(0,o.kt)("strong",{parentName:"p"},"CDE"),"\u3068\u306f\u3001\u5efa\u8a2d\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u60c5\u5831\u304c\u4e00\u5143\u5316\u3055\u308c\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u5834\u6240\u306b\u3059\u304e\u306a\u3044\u3002"),(0,o.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udd27\ud83d\udd28 CDE\u306f\u3001\u5f93\u6765\u306eBIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u3059\u3079\u3066\u306e\u6a5f\u80fd\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u30023D\u30d3\u30e5\u30fc\u30a2\u3001\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f\u3068\u7de8\u96c6\u3001\u30a8\u30cd\u30eb\u30ae\u30fc\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3001\u81ea\u52d5\u8a08\u6e2c\u3068\u4e88\u7b97\u7ba1\u7406\u306a\u3069\u3067\u3059\u3002"),"\ufe0f",(0,o.kt)("p",null,"\ud83c\udf0e\ud83c\udf0d\ud83c\udf0f\n\u3057\u304b\u3057\u3001\u3053\u308c\u3089\u306e\u88fd\u54c1\u306b\u306f\u57fa\u672c\u7684\u306a\u5229\u70b9\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u306f\u3001",(0,o.kt)("strong",{parentName:"p"},"\u30a6\u30a7\u30d6\u4e0a\u306b\u3042\u308b"),"\u3068\u3044\u3046\u3053\u3068\u3067\u3042\u308a\u3001\u3069\u3053\u304b\u3089\u3067\u3082\u3001\u3069\u3093\u306a\u30c7\u30d0\u30a4\u30b9\u304b\u3089\u3067\u3082\u3001\u4f55\u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u306a\u304f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u5206\u304b\u3063\u305f\u304c\u3001\u306a\u305ccde\u304c\u5fc5\u8981\u306a\u306e\u304b\uff1f"},"\u5206\u304b\u3063\u305f\u304c\u3001\u306a\u305cCDE\u304c\u5fc5\u8981\u306a\u306e\u304b\uff1f"),(0,o.kt)("p",null,"\ud83d\udcb8\n\u3057\u304b\u3057\u3001\u5b9f\u306f\u4eca\u3001CDE\u306f\u30cb\u30e5\u30fc\u30d6\u30e9\u30c3\u30af\u306a\u306e\u3067\u3059\u3002**\u696d\u754c\u306e\u307b\u3068\u3093\u3069\u306e\u5927\u624b\u4f01\u696d\u304cCDE\u3092\u69cb\u7bc9\u3057\u3001\u6cd5\u5916\u306a\u4fa1\u683c\u3067\u9867\u5ba2\u306b\u8ca9\u58f2\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\ud83c\udfc3\u200d\u2640\ufe0f\ud83c\udfc3\u200d\u2642\ufe0f\ud83c\udfc3\u200d\u2640\ufe0f\n\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306e\u9ad8\u901f\u5316\u30fb\u9ad8\u6a5f\u80fd\u5316\u306b\u4f34\u3044\u3001\u79c1\u305f\u3061\u304c\u77e5\u3063\u3066\u3044\u308b\u3088\u3046\u306a\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u901a\u7528\u3057\u306a\u304f\u306a\u308a\u3001\u79c1\u305f\u3061\u306e\u4ed5\u4e8b\u306e\u5927\u90e8\u5206\u304c\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u884c\u308f\u308c\u308b\u3088\u3046\u306b\u306a\u308b\u65e5\u304c\u6765\u308b\u3067\u3057\u3087\u3046\u3002\u8a00\u3044\u63db\u3048\u308c\u3070\u3001",(0,o.kt)("strong",{parentName:"p"},"CDE\u306f\u672a\u6765"),"\u3067\u3042\u308a\u3001\u73fe\u5728\u3001\u6700\u9ad8\u306eCDE\u3092\u4f5c\u308b\u305f\u3081\u306e\u5927\u304d\u306a\u7af6\u4e89\u304c\u884c\u308f\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"cde\u306e\u7d20\u6674\u3089\u3057\u3055\u306f\u308f\u304b\u3063\u305f\u3002\u3067\u3082\u3001\u81ea\u5206\u3067\u306f\u7d76\u5bfe\u306b\u958b\u767a\u3067\u304d\u307e\u305b\u3093\u3002"},"CDE\u306e\u7d20\u6674\u3089\u3057\u3055\u306f\u308f\u304b\u3063\u305f\u3002\u3067\u3082\u3001\u81ea\u5206\u3067\u306f\u7d76\u5bfe\u306b\u958b\u767a\u3067\u304d\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb\n\u9593\u9055\u3063\u3066\u3044\u308b\uff01\uff1fBIM\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u304c\u3067\u304d\u306a\u3044\u3068\u601d\u308f\u308c\u3066\u3044\u308b\u6700\u5927\u306e\u539f\u56e0\u306f\u3001\u73fe\u5728\u306eBIM\u30d9\u30f3\u30c0\u30fc\u306b\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002IFC.js\u3067\u306f\u3001\u3053\u306e\u795e\u8a71\u3092\u6253\u3061\u7834\u308a\u3001\u30b7\u30f3\u30d7\u30eb\u306aCDE\u3092\u4e00\u304b\u3089\u4f5c\u308a\u3001",(0,o.kt)("strong",{parentName:"p"},"BIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u3092\u59cb\u3081\u308b\u3053\u3068\u306f\u305d\u308c\u307b\u3069\u96e3\u3057\u3044\u3053\u3068\u3067\u306f\u306a\u3044"),"\u3053\u3068\u3092\u793a\u3057\u305f\u3044\u3068\u8003\u3048\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,"\u261d\n\u660e\u3089\u304b\u306b\u3001\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f\u6700\u5c0f\u9650\u306e\u4f8b\u3067\u3059\u3002\u3057\u304b\u3057\u3001\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u30b7\u30f3\u30d7\u30eb\u306aCDE\u304b\u3089\u5927\u4f01\u696d\u306eCDE\u307e\u3067\u306f\u3001\u898b\u304b\u3051\u307b\u3069\u306e\u8ddd\u96e2\u306f\u3042\u308a\u307e\u305b\u3093\u3002",(0,o.kt)("strong",{parentName:"p"},"\u96d1\u8ac7\u306f\u3053\u3053\u307e\u3067\u306b\u3057\u3066\u3001\u3055\u3063\u305d\u304f\u3084\u3063\u3066\u307f\u307e\u3057\u3087\u3046\uff01"),"\u3002"),(0,o.kt)("h2",{id:"cde\u30c7\u30b6\u30a4\u30f3"},"CDE\u30c7\u30b6\u30a4\u30f3"),(0,o.kt)("h3",{id:"\u6226\u7565"},"\u6226\u7565"),(0,o.kt)("p",null,"\u23f3\n\u3053\u306eCDE\u3092\u884c\u3046\u305f\u3081\u306e\u6642\u9593\u306f",(0,o.kt)("strong",{parentName:"p"},"30\u5206"),"\u3057\u304b\u306a\u3044\u306e\u3067\u3001\u6642\u9593\u3092\u7121\u99c4\u306b\u3057\u306a\u3044\u305f\u3081\u306b\u3001\u614e\u91cd\u306b\u65b9\u6cd5\u3092\u9078\u629e\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u307e\u305a\u7b2c\u4e00\u306b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4fdd\u5b58\u3059\u308b\u5834\u6240\u304c\u5fc5\u8981\u3067\u3059",(0,o.kt)("strong",{parentName:"p"},"\u3002\u305d\u308c\u3092\u53ef\u80fd\u306b\u3059\u308b\u65e2\u5b58\u306e\u30c4\u30fc\u30eb\u3092\u3054\u5b58\u77e5\u3067\u3057\u3087\u3046\u304b\uff1f\u79c1\u305f\u3061\u306f\u3001"),"Google Drive**\u3092\u8003\u3048\u307e\u3057\u305f\u3002"),(0,o.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udcaa Google Drive\u306b\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u66f8\u304d\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3001\u30aa\u30fc\u30d7\u30f3API\u306a\u3069\u3001\u591a\u304f\u306e\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002\u8981\u3059\u308b\u306b\u3001BIM\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u4f1a\u793e\u304c\u6709\u6599\u3067\u63d0\u4f9b\u3057\u3066\u3044\u308b\u3082\u306e\u306e\u591a\u304f\u3092\u3001\u5b8c\u5168\u306b\u7121\u6599\u3067\u63d0\u4f9b\u3057\u3066\u3044\u308b\u306e\u3067\u3059\u3002"),"\ufe0f",(0,o.kt)("p",null,"\ud83d\uded1\n\u3057\u304b\u3057\u3001Google Drive\u306b\u306f\u30013D\u30d3\u30e5\u30fc\u30a2\u304c\u306a\u304f\u3001BIM\u30e2\u30c7\u30eb\uff08IFC\u30e2\u30c7\u30eb\u306a\u3069\uff09\u306e\u30c7\u30fc\u30bf\u306b\u7c21\u5358\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u3068\u3044\u3046\u6839\u672c\u7684\u306a\u9650\u754c\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\ud83e\udd1d\n",(0,o.kt)("strong",{parentName:"p"},"\u3053\u3053\u3067IFC.js\u306e\u51fa\u756a\u3067\u3059\u3002"),"\u3001\u30a6\u30a7\u30d6\u4e0a\u3067\u76f4\u63a5BIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Google Drive\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u3068\u30a2\u30af\u30bb\u30b9\u6a29\u3092IFC.js\u306e3D\u3068\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u53d6\u308a\u3068\u7de8\u96c6\u6a5f\u80fd\u3068\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u3067\u3001\u57fa\u672c\u7684\u306aCDE\u309230\u5206\u3067\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u3002\u305d\u306e\u65b9\u6cd5\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"\u5efa\u7bc9"},"\u5efa\u7bc9"),(0,o.kt)("p",null,"\ud83e\udd37\u200d\u2640\ufe0f\n",(0,o.kt)("strong",{parentName:"p"},"IFC.js\u3068google drive\u3092\u9023\u643a\u3055\u305b\u3001"),"CDE\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u306b\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3057\u3087\u3046\u304b\uff1f\u79c1\u305f\u3061\u306e\u30c7\u30b6\u30a4\u30f3\u6848\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002\u8907\u96d1\u306b\u898b\u3048\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u5b9f\u306f\u3068\u3066\u3082\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3002"),(0,o.kt)(a.Q,{hideSource:!0,image:(0,o.kt)("img",{src:t(9927).Z,alt:"Schema explaining the concept of the CDE"}),mdxType:"IfcImage"}),(0,o.kt)("p",null,"\ud83c\udfe0\n\u307e\u305a\u6700\u521d\u306b\u3001google drive",(0,o.kt)("strong",{parentName:"p"},"\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u308b"),"3D BIM\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u307e\u3059\u3002\u5177\u4f53\u7684\u306b\u306f\u3001URL\u30d1\u30e9\u30e1\u30fc\u30bf\u3067\u898b\u3064\u304b\u3063\u305fID\u306e\u30d5\u30a1\u30a4\u30eb\u3092google drive\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001URL\u304c",(0,o.kt)("inlineCode",{parentName:"p"},"https://.../?id=123&name=TEST.ifc"),"\u3067\u3042\u308c\u3070\u3001\u30a2\u30d7\u30ea\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u306egoogle\u30a2\u30ab\u30a6\u30f3\u30c8\u304b\u3089",(0,o.kt)("inlineCode",{parentName:"p"},"ID"),"\u304c",(0,o.kt)("inlineCode",{parentName:"p"},"123"),"\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\ud83c\udf10\n\u6b21\u306b\u30013\u3064\u306e\u3053\u3068\u3092\u884c\u3046",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/extensions/"},"google chrome extension"),"\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u30a6\u30a7\u30d6\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0\u3067\u30e6\u30fc\u30b6\u30fc\u304c\u30af\u30ea\u30c3\u30af\u3057\u305fHTML\u8981\u7d20"),"\u306e\u540d\u524d\u3092\u8aad\u307f\u53d6\u308b\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"google drive API\u3092\u4f7f\u7528\u3057\u3066\u3001\u305d\u306e\u8981\u7d20\u306eID\u3092\u8abf\u3079\u307e\u3059\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"IFC.js\u306eWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067URL\u3092\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u30e1\u30cb\u30e5\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059"),"\u3002\u3055\u3089\u306b\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u540d\u524d\u3068ID\u3068\u3044\u30462\u3064\u306eURL\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)(l.M,{mdxType:"IfcCard"},"\u8981\u3059\u308b\u306b\u3001google chrome\u306e\u62e1\u5f35\u6a5f\u80fd\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30d5\u30a1\u30a4\u30eb\u306e\u540d\u524d\u3092\u53d6\u5f97\u3057\u3001\u305d\u306eID\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u65b9\u6cd5\u3092\u77e5\u3063\u3066\u3044\u308b\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u3092\u958b\u304d\u307e\u3059\u3002\u4ee5\u4e0a\u3067\u3059\u3002"),"\ufe0f")),(0,o.kt)("h3",{id:"ifcjs\u30a2\u30d7\u30ea"},"IFC.js\u30a2\u30d7\u30ea"),(0,o.kt)("h4",{id:"bim\u30a2\u30d7\u30ea"},"BIM\u30a2\u30d7\u30ea"),(0,o.kt)("p",null,"\ud83c\udfe2\nIFC.js\u306e\u304a\u304b\u3052\u3067\u3001",(0,o.kt)("strong",{parentName:"p"},"\u3053\u3053\u304c\u4e00\u756a\u7c21\u5358"),"\u3067\u3059\u3002\u5177\u4f53\u7684\u306b\u306f\u300150\u884c\u306e\u30b3\u30fc\u30c9\u3067BIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u308b",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/web-ifc-viewer"},"web-ifc-viewer"),"\u3092\u4f7f\u3063\u3066\u4f5c\u6210\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u3059\u3079\u3066\u306e\u30b3\u30fc\u30c9\u306f",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/hello-world/tree/main/examples/web-ifc-viewer/google-drive-viewer"},"\u3053\u3053"),"\u3067\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\ud83d\ude09\n\u306f\u3044\u3001\u305d\u306e\u901a\u308a\u3067\u3059\u3002",(0,o.kt)("strong",{parentName:"p"},"50\u884c\u306e\u30d5\u30eb3D BIM\u30a2\u30d7\u30ea"),"\u3067\u3059\u3002\u3057\u304b\u3082\u3001\u65ad\u9762\u56f3\u30843D\u5bf8\u6cd5\u306a\u3069\u306e\u6a5f\u80fd\u3082\u5099\u3048\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    import {IfcViewerAPI} from 'web-ifc-viewer';\n    import {Color} from 'three'\n\n    // 3D\u30b7\u30fc\u30f3\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308bdiv\u30b3\u30f3\u30c6\u30ca\u306e\u53d6\u5f97\n    const container = document.getElementById('viewer-container');\n\n    // IFC.js\u306eAPI\u3092\u521d\u671f\u5316\u3057\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u3068\u3057\u3066\u8ffd\u52a0\u3059\u308b\u3002\n    const viewer = new IfcViewerAPI({\n                            container,\n                            backgroundColor: new Color(0xffffff)\n                                });\n    viewer.IFC.applyWebIfcConfig({\n                            COORDINATE_TO_ORIGIN: true,\n                            USE_FAST_BOOLS: true\n                                });\n    window.webIfcAPI = viewer;\n\n    // \u30b7\u30fc\u30f3\u306e\u8a2d\u5b9a\n    viewer.addAxes();\n    viewer.addGrid(50, 50);\n    viewer.IFC.setWasmPath('wasm/');\n    viewer.clipper.active = true;\n    let dimensionsActive = false;\n\n    // \u57fa\u672c\u7684\u306a\u5165\u529b\u30ed\u30b8\u30c3\u30af\u306e\u8ffd\u52a0\n    const handleKeyDown = (event) => {\n        if (event.code === 'KeyE') {\n            dimensionsActive = !dimensionsActive;\n            viewer.dimensions.active = dimensionsActive;\n            viewer.dimensions.previewActive = dimensionsActive;\n            viewer.IFC.unPrepickIfcItems();\n            window.onmousemove = dimensionsActive ?\n                                            null :\n                                .IFC.prePickIfcItem;\n        }\n        if (event.code === 'KeyD') {\n            viewer.dimensions.create();\n        }\n        if (event.code === 'KeyG') {\n            viewer.clipper.createPlane();\n        }\n        if (event.code === 'Delete') {\n            viewer.dimensions.deleteAll();\n            viewer.clipper.deletePlane();\n            viewer.IFC.unpickIfcItems();\n        }\n    };\n    window.onkeydown = handleKeyDown;\n\n    // \u30a2\u30a4\u30c6\u30e0\u306b\u30ab\u30fc\u30bd\u30eb\u3092\u5408\u308f\u305b\u308b\u3068\u30cf\u30a4\u30e9\u30a4\u30c8\u3055\u308c\u308b\n    window.onmousemove = viewer.IFC.prePickIfcItem;\n\n    // \u30a2\u30a4\u30c6\u30e0\u306e\u9078\u629e\u3068\u30ed\u30b0\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\n    window.ondblclick = async () => {\n        const item = await viewer.IFC.pickIfcItem(true);\n        if(item.modelID === undefined || item.id === undefined ) return;\n        console.log(\n            await viewer.IFC.getProperties(item.modelID, item.id, true));\n    }\n")),(0,o.kt)("p",null,"\ud83c\udfa8\n\u898b\u308b\u4eba\u306b\u601d\u3044\u901a\u308a\u306e\u5370\u8c61\u3092\u4e0e\u3048\u308b\u305f\u3081\u306b\u3001\u5fc5\u8981\u306aHTML\u3084CSS\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h4",{id:"google-drive-api"},"Google Drive API"),(0,o.kt)("p",null,"\ud83d\udd12\ud83d\udd12\ud83d\udd12\n\u3055\u3066\u3001BIM\u30d3\u30e5\u30fc\u30a2\u3067\u3059\u304c\u3001\u4eca\u306e\u3068\u3053\u308d",(0,o.kt)("strong",{parentName:"p"},"Google Drive API"),"\u304b\u3089\u306f\u4f55\u3082\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3002\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8](",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/drive/api/v3/quickstart/js)%E3%81%AB%E8%A8%98%E8%BC%89%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E6%89%8B%E9%A0%86%E3%81%AB%E5%BE%93%E3%81%84%E3%80%81JavaScript%E3%81%AE%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E3%82%B3%E3%83%94%E3%83%BC%EF%BC%86%E3%83%9A%E3%83%BC%E3%82%B9%E3%83%88%E3%81%99%E3%82%8B%E3%81%A0%E3%81%91%E3%81%A7%E3%80%81API%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82"},"https://developers.google.com/drive/api/v3/quickstart/js)\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u624b\u9806\u306b\u5f93\u3044\u3001JavaScript\u306e\u30b3\u30fc\u30c9\u3092\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u3059\u308b\u3060\u3051\u3067\u3001API\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002")),(0,o.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udd11\ud83d\udd11\ud83d\udd11 Google\u306e\u30ac\u30a4\u30c9\u306b\u5f93\u3063\u3066\u3001\u65b0\u3057\u3044Google Cloud\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001\u81ea\u5206\u306eCLIENT_ID\u3068API_KEY\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001Google\u304c\u3042\u306a\u305f\u306e\u3053\u3068\u3092\u77e5\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a2\u3064\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002\u8a00\u3044\u63db\u3048\u308c\u3070\u3001\u79c1\u305f\u3061\u304c\u6301\u3063\u3066\u3044\u308b\u30ad\u30fc\u3092\u4f7f\u3063\u3066\u3042\u306a\u305f\u306e\u30c9\u30e9\u30a4\u30d6\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),"\ufe0f",(0,o.kt)("p",null,"\ud83d\udccb\n\u79c1\u305f\u3061\u304c\u6295\u7a3f\u3057\u305f\u30b3\u30fc\u30c9\u3092\u898b\u3066\u307f\u308b\u3068\u3001",(0,o.kt)("strong",{parentName:"p"},"\u79c1\u305f\u3061\u306f",(0,o.kt)("a",{parentName:"strong",href:"https://developers.google.com/drive/api/v3/quickstart/js"},"google example"),"\u304b\u3089\u307b\u3068\u3093\u3069\u3059\u3079\u3066\u306e\u30b3\u30fc\u30c9"),"\u3092\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\u8ffd\u52a0\u3057\u305f\u306e\u306f\u4ee5\u4e0b\u306e\u90e8\u5206\u3060\u3051\u3067\u3001\u3053\u308c\u306f\u5358\u7d14\u306b\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eURL\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u306eID\u3092\u53d6\u5f97\u3057\u3001google drive\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    /**\n     *  \u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u305f\u72b6\u614b\u304c\u5909\u5316\u3057\u305f\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u3001UI\u3092\u9069\u5207\u306b\u66f4\u65b0\u3057\u307e\u3059\u3002\u30b5\u30a4\u30f3\u30a4\u30f3\u5f8c\u306f\u3001API\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002\n     */\n    function updateSigninStatus(isSignedIn) {\n        if (isSignedIn) {\n            const {id, name} = getIdAndName();\n            fileName.innerText = `Name: ${name}`;\n            if (id) downloadFile(id);\n            else console.log('No ID was providen as URL parameter!');\n        }\n    }\n\n    /**\n     *  \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u307e\u3059\u3002\n     */\n    function handleAuthClick(event) {\n        authorizeButton.onclick = handleSignoutClick;\n        buttonText.innerText = 'Sign out';\n        gapi.auth2.getAuthInstance().signIn();\n    }\n\n\n    function downloadFile(fileId) {\n        gapi.client.drive.files.get({\n            fileId: fileId,\n            alt: 'media'\n        }).then(function (response) {\n            loadIfcModel(response.body);\n        }, function (error) {\n            console.error(error)\n        })\n    }\n\n    function getIdAndName() {\n        const urlParams = new URLSearchParams(window.location.search);\n        const id = urlParams.get(\"id\");\n        const name = urlParams.get(\"name\");\n        return {id, name};\n    }\n\n    function loadIfcModel(text) {\n        const blob = new Blob([text], {type: 'text/plain'});\n        const file = new File([blob], \"ifcModel\");\n        window.webIfcAPI.IFC.loadIfc(file);\n    }\n")),(0,o.kt)("p",null,"\ud83c\udf89\ud83c\udf89 \u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3053\u308c\u3067\u3001Google Drive\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u308bBIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5b8c\u6210\u3057\u307e\u3057\u305f\u3002\u3042\u3068\u306f\u3001\u6700\u5f8c\u306e\u4ed5\u4e0a\u3052\u3068\u3057\u3066\u3001Google Chrome\u306e\u62e1\u5f35\u6a5f\u80fd\u3092\u4f5c\u6210\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,o.kt)("h3",{id:"chrome\u62e1\u5f35\u6a5f\u80fd"},"Chrome\u62e1\u5f35\u6a5f\u80fd"),(0,o.kt)("p",null,"\u3055\u3066\u3001\u3053\u308c\u304b\u3089Google Chrome\u306e\u62e1\u5f35\u6a5f\u80fd\u3092\u4f5c\u3063\u3066\u3001",(0,o.kt)("strong",{parentName:"p"},"\u30e6\u30fc\u30b6\u30fc\u304c\u958b\u304d\u305f\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059"),"\u3002\u4eca\u307e\u3067\u3084\u3063\u305f\u3053\u3068\u304c\u306a\u3044\u4eba\u306b\u306f\u96e3\u3057\u304f\u805e\u3053\u3048\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u5b9f\u969b\u306b\u306f\u3068\u3066\u3082\u7c21\u5358\u3067\u3059\u3002\u5b8c\u6210\u3057\u305f\u3082\u306e\u306f",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/Drive-CDE"},"\u3053\u3061\u3089"),"\u3067\u3054\u89a7\u3044\u305f\u3060\u3051\u307e\u3059\u3002"),(0,o.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udd11\ud83d\udd11\ud83d\udd11 Google\u306e\u30ac\u30a4\u30c9\u306b\u5f93\u3063\u3066\u3001\u65b0\u3057\u3044Google Cloud\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001\u81ea\u5206\u306eCLIENT_ID\u3068API_KEY\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001Google\u304c\u3042\u306a\u305f\u306e\u3053\u3068\u3092\u77e5\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a2\u3064\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002\u8a00\u3044\u63db\u3048\u308c\u3070\u3001\u79c1\u305f\u3061\u304c\u6301\u3063\u3066\u3044\u308b\u30ad\u30fc\u3092\u4f7f\u3063\u3066\u3042\u306a\u305f\u306e\u30c9\u30e9\u30a4\u30d6\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002",(0,o.kt)("a",{href:"https://developers.google.com/drive/api/v3/about-sdk#create_and_open_files_directly_from_the_drive_ui"},"\u8a73\u7d30\u306f\u3053\u3061\u3089"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),"\ufe0f",(0,o.kt)("p",null,"\ud83d\udc63\n\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u4e0a\u306b\u306f\u305f\u304f\u3055\u3093\u306e",(0,o.kt)("a",{parentName:"p",href:"https://dev.to/anobjectisa/how-to-build-a-chrome-extension-new-manifest-v3-5edk"},"step-by-step guide"),"\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u79c1\u305f\u3061\u306f\u3001\u79c1\u305f\u3061\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30b3\u30fc\u30c9\u3092\u53d6\u308a\u51fa\u3057\u3001\u305d\u308c\u3092\u7814\u7a76\u3057\u3001\u305d\u308c\u304c\u3069\u306e\u3088\u3046\u306b\u6a5f\u80fd\u3059\u308b\u304b\u3092\u904a\u3093\u3067\u307f\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\ud83e\uddf1\n\u91cd\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306f2\u3064\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/Drive-CDE/blob/master/background.js"},"background.js"),": \u30e6\u30fc\u30b6\u30fc\u304c\u4f55\u304b\u3092\u30af\u30ea\u30c3\u30af\u3057\u305f\u3068\u304d\u306a\u3069\u3001\u30da\u30fc\u30b8\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u5236\u5fa1\u3057\u307e\u3059\u304c\u3001\u30da\u30fc\u30b8\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u306f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/Drive-CDE/blob/master/foreground.js"},"foreground.js"),": \u30da\u30fc\u30b8\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u306f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u304c\u3001\u30a4\u30d9\u30f3\u30c8\u306b\u306f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3002"))),(0,o.kt)("p",null,"\ud83d\udc6c\n\u60f3\u50cf\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u79c1\u305f\u3061\u304c\u671b\u3080\u3053\u3068\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u4e21\u65b9\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u304a\u4e92\u3044\u306b\u901a\u4fe1\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u308f\u304b\u308b\u3088\u3046\u306b\u3001\u30b7\u30f3\u30d7\u30eb\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u30b7\u30b9\u30c6\u30e0\u3067\u305d\u308c\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb\n\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306f\u3001\u4f55\u304c\u4f55\u3092\u3059\u308b\u306e\u304b\u306b\u3064\u3044\u3066\u306e\u30b9\u30c6\u30c3\u30d7\u30d0\u30a4\u30b9\u30c6\u30c3\u30d7\u306e\u30b3\u30e1\u30f3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002\u95a2\u9023\u3059\u308b\u30b3\u30fc\u30c9\u306f\u5168\u90e8\u3067100\u884c\u306b\u3082\u6e80\u305f\u305a\u3001\u4ed6\u306f\u3059\u3079\u3066\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u3067\u3059\u3002"),(0,o.kt)("h3",{id:"\u307f\u3093\u306a\u3067\u4e00\u7dd2\u306b"},"\u307f\u3093\u306a\u3067\u4e00\u7dd2\u306b!"),(0,o.kt)("p",null,"\ud83d\udd25\ud83d\udd25\ud83d\udd25\n\u3053\u308c\u304c30\u5206CDE\u306e\u69d8\u5b50\u3067\u3059\u3002"),(0,o.kt)("iframe",{width:"100%",height:"600px",src:"https://www.youtube.com/embed/lYzTaOBuv7k",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,o.kt)("p",null,"\ud83c\udfc6\n\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3042\u306a\u305f\u306f",(0,o.kt)("strong",{parentName:"p"},"\u6700\u521d\u306eCDE"),"\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002\u5927\u3057\u305f\u3053\u3068\u3067\u306f\u306a\u3044\u3068\u601d\u308f\u308c\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u305d\u306e\u6a5f\u80fd\u6027\u3092\u8003\u3048\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\u30d5\u30a1\u30a4\u30eb\u306e\u4fdd\u5b58\u3001\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30013D\u30d3\u30e5\u30fc\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u3078\u306e\u30a2\u30af\u30bb\u30b9\u30013D\u6e2c\u5b9a\u3001\u65ad\u9762\u56f3...\u3002"),(0,o.kt)("p",null,"\ud83d\ude80\ud83d\ude80\ud83d\ude80\nGoogle Drive\u3092\u4f7f\u3063\u3066\u77ed\u6642\u9593\u3067\u3053\u308c\u3060\u3051\u306e\u3053\u3068\u304c\u3067\u304d\u305f\u306e\u3067\u3059\u304b\u3089\u3001IFC.js\u3084\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9",(0,o.kt)("strong",{parentName:"p"},"\u3084"),"\u30b5\u30fc\u30d0\u30fc",(0,o.kt)("strong",{parentName:"p"},"\u306a\u3069\u306e\u4ed6\u306e\u6280\u8853\u3092\u4f7f\u3063\u3066\u4f55\u304c\u3067\u304d\u308b\u304b\u60f3\u50cf\u3067\u304d\u307e\u3059\u304b\uff1f"),"\u3054\u5fc3\u914d\u306a\u304f\u3002"))}m.isMDXComponent=!0},5038:function(e,n,t){"use strict";n.Z=t.p+"assets/images/lego-27af32023b801c95f6e806ca0f47aec0.jpg"},9927:function(e,n,t){"use strict";n.Z=t.p+"assets/images/schema-ee9c12a5d7cba299d5a0035eccae4d6e.jpg"}}]);