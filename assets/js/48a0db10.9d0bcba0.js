"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28578],{18483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>w,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=a(85893),s=a(11151),n=a(93e3),i=a(14959);const o="import { BasicCrawler, Dataset } from 'crawlee';\n\n// Create a BasicCrawler - the simplest crawler that enables\n// users to implement the crawling logic themselves.\nconst crawler = new BasicCrawler({\n    // This function will be called for each URL to crawl.\n    async requestHandler({ request, sendRequest, log }) {\n        const { url } = request;\n        log.info(`Processing ${url}...`);\n\n        // Fetch the page HTML via the crawlee sendRequest utility method\n        // By default, the method will use the current request that is being handled, so you don't have to\n        // provide it yourself. You can also provide a custom request if you want.\n        const { body } = await sendRequest();\n\n        // Store the HTML and URL to the default dataset.\n        await Dataset.pushData({\n            url,\n            html: body,\n        });\n    },\n});\n\n// The initial list of URLs to crawl. Here we use just a few hard-coded URLs.\nawait crawler.addRequests([\n    'https://www.google.com',\n    'https://www.example.com',\n    'https://www.bing.com',\n    'https://www.wikipedia.com',\n]);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n",l={id:"basic-crawler",title:"Basic crawler"},c=void 0,d={id:"examples/basic-crawler",title:"Basic crawler",description:"This is the most bare-bones example of using Crawlee, which demonstrates some of its building blocks such as the BasicCrawler. You probably don't need to go this deep though, and it would be better to start with one of the full-featured crawlers",source:"@site/versioned_docs/version-3.1/examples/basic_crawler.mdx",sourceDirName:"examples",slug:"/examples/basic-crawler",permalink:"/docs/3.1/examples/basic-crawler",draft:!1,unlisted:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"basic-crawler",title:"Basic crawler"},sidebar:"docs",previous:{title:"Add data to dataset",permalink:"/docs/3.1/examples/add-data-to-dataset"},next:{title:"Cheerio crawler",permalink:"/docs/3.1/examples/cheerio-crawler"}},p={},u=[];function h(e){const t={a:"a",code:"code",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This is the most bare-bones example of using Crawlee, which demonstrates some of its building blocks such as the ",(0,r.jsx)(i.Z,{to:"basic-crawler/class/BasicCrawler",children:(0,r.jsx)(t.code,{children:"BasicCrawler"})}),". You probably don't need to go this deep though, and it would be better to start with one of the full-featured crawlers\nlike ",(0,r.jsx)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,r.jsx)(t.code,{children:"CheerioCrawler"})})," or ",(0,r.jsx)(i.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,r.jsx)(t.code,{children:"PlaywrightCrawler"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The script simply downloads several web pages with plain HTTP requests using the ",(0,r.jsx)(i.Z,{to:"basic-crawler/interface/BasicCrawlingContext#sendRequest",children:(0,r.jsx)(t.code,{children:"sendRequest"})})," utility function (which uses the ",(0,r.jsx)(t.a,{href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener",children:(0,r.jsx)(t.code,{children:"got-scraping"})}),"\nnpm module internally) and stores their raw HTML and URL in the default dataset. In local configuration, the data will be stored as JSON files in\n",(0,r.jsx)(t.code,{children:"./storage/datasets/default"}),"."]}),"\n",(0,r.jsx)(n.default,{className:"language-js",children:o})]})}function w(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},14959:(e,t,a)=>{a.d(t,{Z:()=>c});a(67294);var r=a(39960),s=a(74477),n=a(52263),i=a(85893),o=a(50643).version.split("."),l=[o[0],o[1]].join(".");const c=function(e){var t=e.to,a=e.children,o=(0,s.E)();return(0,n.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===l?(0,i.jsx)(r.default,{to:"/api/"+t,children:a}):(0,i.jsx)(r.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t,children:a})}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>i});var r=a(67294);const s={},n=r.createContext(s);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);