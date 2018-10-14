"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52143],{85226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=r(85893),s=r(11151),n=r(93e3);r(14959);const i="import { gotScraping } from 'got-scraping';\n\n// Get the HTML of a web page\nconst { body } = await gotScraping({ url: 'https://www.example.com' });\nconsole.log(body);\n",o={id:"crawl-single-url",title:"Crawl a single URL"},l=void 0,c={id:"examples/crawl-single-url",title:"Crawl a single URL",description:"This example uses the got-scraping npm package",source:"@site/versioned_docs/version-3.3/examples/crawl_single_url.mdx",sourceDirName:"examples",slug:"/examples/crawl-single-url",permalink:"/docs/3.3/examples/crawl-single-url",draft:!1,unlisted:!1,tags:[],version:"3.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"crawl-single-url",title:"Crawl a single URL"},sidebar:"docs",previous:{title:"Crawl a website with relative links",permalink:"/docs/3.3/examples/crawl-relative-links"},next:{title:"Crawl a sitemap",permalink:"/docs/3.3/examples/crawl-sitemap"}},p={},d=[];function u(e){const t={a:"a",code:"code",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This example uses the ",(0,a.jsx)(t.a,{href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener",children:(0,a.jsx)(t.code,{children:"got-scraping"})})," npm package\nto grab the HTML of a web page."]}),"\n",(0,a.jsx)(n.default,{className:"language-js",children:i}),"\n",(0,a.jsxs)(t.p,{children:["If you don't want to hard-code the URL into the script, refer to the ",(0,a.jsx)(t.a,{href:"./accept-user-input",children:"Accept User Input"})," example."]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},14959:(e,t,r)=>{r.d(t,{Z:()=>c});r(67294);var a=r(39960),s=r(74477),n=r(52263),i=r(85893),o=r(50643).version.split("."),l=[o[0],o[1]].join(".");const c=function(e){var t=e.to,r=e.children,o=(0,s.E)();return(0,n.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===l?(0,i.jsx)(a.default,{to:"/api/"+t,children:r}):(0,i.jsx)(a.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t,children:r})}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var a=r(67294);const s={},n=a.createContext(s);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);