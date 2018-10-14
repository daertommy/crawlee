"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29641],{18501:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(85893),s=n(11151);n(14959);const i={id:"introduction",title:"Introduction",description:"Your first steps into the world of scraping with Crawlee"},o=void 0,l={id:"introduction/introduction",title:"Introduction",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.5/introduction/index.mdx",sourceDirName:"introduction",slug:"/introduction/",permalink:"/docs/3.5/introduction/",draft:!1,unlisted:!1,tags:[],version:"3.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"introduction",title:"Introduction",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/3.5/quick-start/"},next:{title:"Setting up",permalink:"/docs/3.5/introduction/setting-up"}},a={},c=[{value:"What you will learn",id:"what-you-will-learn",level:2},{value:"\ud83d\udee0 Features",id:"-features",level:2},{value:"\ud83d\udc7e HTTP crawling",id:"-http-crawling",level:3},{value:"\ud83d\udcbb Real browser crawling",id:"-real-browser-crawling",level:3},{value:"Next lesson",id:"next-lesson",level:2}];function d(e){const r={h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Crawlee covers your crawling and scraping end-to-end and helps you ",(0,t.jsx)(r.strong,{children:"build reliable scrapers. Fast."})]}),"\n",(0,t.jsx)(r.p,{children:"Your crawlers will appear human-like and fly under the radar of modern bot protections even with the default configuration. Crawlee gives you the tools to crawl the web for links, scrape data and persistently store it in machine-readable formats, without having to worry about the technical details. And thanks to rich configuration options, you can tweak almost any aspect of Crawlee to suit your project's needs if the default settings don't cut it."}),"\n",(0,t.jsx)(r.h2,{id:"what-you-will-learn",children:"What you will learn"}),"\n",(0,t.jsx)(r.p,{children:"The goal of the introduction is to provide a step-by-step guide to the most important features of Crawlee. It will walk you through creating the simplest of crawlers that only prints text to console, all the way up to a full-featured scraper that collects links from a website and extracts data."}),"\n",(0,t.jsx)(r.h2,{id:"-features",children:"\ud83d\udee0 Features"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Single interface for ",(0,t.jsx)(r.strong,{children:"HTTP and headless browser"})," crawling"]}),"\n",(0,t.jsxs)(r.li,{children:["Persistent ",(0,t.jsx)(r.strong,{children:"queue"})," for URLs to crawl (breadth & depth first)"]}),"\n",(0,t.jsxs)(r.li,{children:["Pluggable ",(0,t.jsx)(r.strong,{children:"storage"})," of both tabular data and files"]}),"\n",(0,t.jsxs)(r.li,{children:["Automatic ",(0,t.jsx)(r.strong,{children:"scaling"})," with available system resources"]}),"\n",(0,t.jsxs)(r.li,{children:["Integrated ",(0,t.jsx)(r.strong,{children:"proxy rotation"})," and session management"]}),"\n",(0,t.jsxs)(r.li,{children:["Lifecycles customizable with ",(0,t.jsx)(r.strong,{children:"hooks"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"CLI"})," to bootstrap your projects"]}),"\n",(0,t.jsxs)(r.li,{children:["Configurable ",(0,t.jsx)(r.strong,{children:"routing"}),", ",(0,t.jsx)(r.strong,{children:"error handling"})," and ",(0,t.jsx)(r.strong,{children:"retries"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Dockerfiles"})," ready to deploy"]}),"\n",(0,t.jsxs)(r.li,{children:["Written in ",(0,t.jsx)(r.strong,{children:"TypeScript"})," with generics"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"-http-crawling",children:"\ud83d\udc7e HTTP crawling"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Zero config ",(0,t.jsx)(r.strong,{children:"HTTP2 support"}),", even for proxies"]}),"\n",(0,t.jsxs)(r.li,{children:["Automatic generation of ",(0,t.jsx)(r.strong,{children:"browser-like headers"})]}),"\n",(0,t.jsxs)(r.li,{children:["Replication of browser ",(0,t.jsx)(r.strong,{children:"TLS fingerprints"})]}),"\n",(0,t.jsxs)(r.li,{children:["Integrated fast ",(0,t.jsx)(r.strong,{children:"HTML parsers"}),". Cheerio and JSDOM"]}),"\n",(0,t.jsxs)(r.li,{children:["Yes, you can scrape ",(0,t.jsx)(r.strong,{children:"JSON APIs"})," as well"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"-real-browser-crawling",children:"\ud83d\udcbb Real browser crawling"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["JavaScript ",(0,t.jsx)(r.strong,{children:"rendering"})," and ",(0,t.jsx)(r.strong,{children:"screenshots"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Headless"})," and ",(0,t.jsx)(r.strong,{children:"headful"})," support"]}),"\n",(0,t.jsxs)(r.li,{children:["Zero-config generation of ",(0,t.jsx)(r.strong,{children:"human-like fingerprints"})]}),"\n",(0,t.jsxs)(r.li,{children:["Automatic ",(0,t.jsx)(r.strong,{children:"browser management"})]}),"\n",(0,t.jsxs)(r.li,{children:["Use ",(0,t.jsx)(r.strong,{children:"Playwright"})," and ",(0,t.jsx)(r.strong,{children:"Puppeteer"})," with the same interface"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Chrome"}),", ",(0,t.jsx)(r.strong,{children:"Firefox"}),", ",(0,t.jsx)(r.strong,{children:"Webkit"})," and many others"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"next-lesson",children:"Next lesson"}),"\n",(0,t.jsx)(r.p,{children:"In the next lesson you will install Crawlee and learn how to bootstrap projects with the Crawlee CLI."})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},14959:(e,r,n)=>{n.d(r,{Z:()=>c});n(67294);var t=n(39960),s=n(74477),i=n(52263),o=n(85893),l=n(50643).version.split("."),a=[l[0],l[1]].join(".");const c=function(e){var r=e.to,n=e.children,l=(0,s.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===a?(0,o.jsx)(t.default,{to:"/api/"+r,children:n}):(0,o.jsx)(t.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+r,children:n})}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>o});var t=n(67294);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);