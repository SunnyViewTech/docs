"use strict";(self.webpackChunkmy_website_en_2=self.webpackChunkmy_website_en_2||[]).push([[6717],{873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=t(4848),l=t(8453),a=t(4252);const s={sidebar_position:70,title:"FAQ",slug:"/mots-faq"},r="FAQ",o={id:"Dollars-MOTS/mots-faq",title:"FAQ",description:"Multi-Language Input Supports",source:"@site/docs/Dollars-MOTS/mots-faq.md",sourceDirName:"Dollars-MOTS",slug:"/mots-faq",permalink:"/mots-faq",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"FAQ",slug:"/mots-faq"},sidebar:"tutorialSidebar",previous:{title:"Using the API",permalink:"/Dollars-MOTS/api"},next:{title:"Integration",permalink:"/category/integration"}},c={},u=[{value:"Multi-Language Input Supports",id:"multi-language-input-supports",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"faq",children:"FAQ"})}),"\n","\n",(0,i.jsx)(a.A,{toc:u}),"\n",(0,i.jsx)(n.h2,{id:"multi-language-input-supports",children:"Multi-Language Input Supports"}),"\n",(0,i.jsx)(n.p,{children:"Dollars MOTS currently only supports input in English."}),"\n",(0,i.jsx)(n.p,{children:"Multi-language supports is in the development plan."})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4252:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var i=t(5195);const l={tableOfContentsInline:"tableOfContentsInline_prmo"};var a=t(4848);function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,a.jsx)("div",{className:l.tableOfContentsInline,children:(0,a.jsx)(i.A,{toc:n,minHeadingLevel:t,maxHeadingLevel:s,className:"table-of-contents",linkClassName:null})})}},5195:(e,n,t)=>{t.d(n,{A:()=>v});var i=t(6540),l=t(6342);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):i.push(l)})),i}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>r(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:l,minHeadingLevel:a,maxHeadingLevel:s}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let l=n;l<=t;l+=1)i.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:s}),c=o(r,{anchorTopOffset:t.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===u)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var d=t(8774),m=t(4848);function f(e){let{toc:n,className:t,linkClassName:i,isChild:l}=e;return n.length?(0,m.jsx)("ul",{className:l?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(d.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const p=i.memo(f);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...f}=e;const v=(0,l.p)(),g=c??v.tableOfContents.minHeadingLevel,h=d??v.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,i.useMemo)((()=>s({toc:a(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:g,maxHeadingLevel:h});return u((0,i.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:g,maxHeadingLevel:h}}),[r,o,g,h])),(0,m.jsx)(p,{toc:x,className:t,linkClassName:r,...f})}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const l={},a=i.createContext(l);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);