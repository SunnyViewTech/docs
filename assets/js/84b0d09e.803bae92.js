"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[738],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",O={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,d=u["".concat(s,".").concat(f)]||u[f]||O[f]||i;return t?n.createElement(d,a(a({ref:r},c),{},{components:t})):n.createElement(d,a({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1766:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>O,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:50,title:"\u5f55\u5236 BVH \u6587\u4ef6"},a="\u5f55\u5236 BVH \u6587\u4ef6",l={unversionedId:"Dollars-MONO/bvh",id:"Dollars-MONO/bvh",title:"\u5f55\u5236 BVH \u6587\u4ef6",description:"\u60a8\u53ef\u4ee5\u6309\u4e0b\u56fe\u4e2d\u6309\u94ae\u5f00\u59cb\u3001\u7ed3\u675f BVH \u6587\u4ef6\u7684\u5f55\u5236\u3002",source:"@site/docs/Dollars-MONO/bvh.md",sourceDirName:"Dollars-MONO",slug:"/Dollars-MONO/bvh",permalink:"/Dollars-MONO/bvh",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"\u5f55\u5236 BVH \u6587\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u9762\u90e8\u6355\u6349",permalink:"/Dollars-MONO/facialcap"},next:{title:"\u4f7f\u7528 OBS \u865a\u62df\u6444\u50cf\u5934\u4f5c\u4e3a\u8f93\u5165",permalink:"/Dollars-MONO/virtualcam"}},s={},p=[],c={toc:p},u="wrapper";function O(e){let{components:r,...i}=e;return(0,o.kt)(u,(0,n.Z)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5f55\u5236-bvh-\u6587\u4ef6"},"\u5f55\u5236 BVH \u6587\u4ef6"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u6309\u4e0b\u56fe\u4e2d\u6309\u94ae\u5f00\u59cb\u3001\u7ed3\u675f BVH \u6587\u4ef6\u7684\u5f55\u5236\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(3027).Z+"#center",width:"650",height:"66"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5f55\u5236\u9891\u7387\uff1a30FPS"),(0,o.kt)("p",{parentName:"admonition"},"\u9884\u4f30\u5927\u5c0f\uff1a\u6bcf\u5206\u949f 5M")),(0,o.kt)("p",null,"\u5f55\u5236\u7684\u6587\u4ef6\u5c06\u4ee5\u5f53\u524d\u65f6\u95f4\u6233\u4e3a\u6587\u4ef6\u540d\uff0c\u5b58\u653e\u4e8e\u9053\u4e50\u5e08\u7a0b\u5e8f\u6839\u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(8318).Z+"#center",width:"693",height:"278"})))}O.isMDXComponent=!0},3027:(e,r,t)=>{t.d(r,{Z:()=>n});const n="data:image/png;base64,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"},8318:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/Fl6Q4YjY87r8iBedfrMyncM6LFMK-8c0469c34a7abeea3d13eb66eee9a5c2.png"}}]);