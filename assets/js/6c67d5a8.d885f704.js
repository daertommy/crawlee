"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36956],{33144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var s=r(85893),n=r(11151),a=r(93e3),i=r(14959);const o="import { CheerioCrawler } from 'crawlee';\n\n// Create a CheerioCrawler\nconst crawler = new CheerioCrawler({\n    // Limits the crawler to only 10 requests (do not use if you want to crawl all links)\n    maxRequestsPerCrawl: 10,\n    // Function called for each URL\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        // Add some links from page to the crawler's RequestQueue\n        await enqueueLinks({\n            globs: ['http?(s)://crawlee.dev/*/*'],\n        });\n    },\n});\n\n// Define the starting URL\nawait crawler.addRequests(['https://crawlee.dev']);\n\n// Run the crawler\nawait crawler.run();\n",l={id:"crawl-some-links",title:"Crawl some links on a website"},c=void 0,p={id:"examples/crawl-some-links",title:"Crawl some links on a website",description:"This CheerioCrawler example uses the globs property in the enqueueLinks() method to only add links to the RequestQueue queue if they match the specified pattern.",source:"@site/versioned_docs/version-3.1/examples/crawl_some_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-some-links",permalink:"/docs/3.1/examples/crawl-some-links",draft:!1,unlisted:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"crawl-some-links",title:"Crawl some links on a website"},sidebar:"docs",previous:{title:"Crawl a sitemap",permalink:"/docs/3.1/examples/crawl-sitemap"},next:{title:"Export entire dataset to one file",permalink:"/docs/3.1/examples/export-entire-dataset"}},d={},u=[];function m(e){const t={code:"code",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This ",(0,s.jsx)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,s.jsx)(t.code,{children:"CheerioCrawler"})})," example uses the ",(0,s.jsx)(i.Z,{to:"core/interface/EnqueueLinksOptions#globs",children:(0,s.jsx)(t.code,{children:"globs"})})," property in the ",(0,s.jsx)(i.Z,{to:"cheerio-crawler/interface/CheerioCrawlingContext#enqueueLinks",children:(0,s.jsx)(t.code,{children:"enqueueLinks()"})})," method to only add links to the ",(0,s.jsx)(i.Z,{to:"core/class/RequestQueue",children:(0,s.jsx)(t.code,{children:"RequestQueue"})})," queue if they match the specified pattern."]}),"\n",(0,s.jsx)(a.default,{className:"language-js",children:o})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},14959:(e,t,r)=>{r.d(t,{Z:()=>c});r(67294);var s=r(39960),n=r(74477),a=r(52263),i=r(85893),o=r(50643).version.split("."),l=[o[0],o[1]].join(".");const c=function(e){var t=e.to,r=e.children,o=(0,n.E)();return(0,a.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===l?(0,i.jsx)(s.default,{to:"/api/"+t,children:r}):(0,i.jsx)(s.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t,children:r})}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var s=r(67294);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);