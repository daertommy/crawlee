"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70653],{19140:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(85893),n=a(11151),s=a(93e3),o=a(14959);const i="import { Dataset, HttpCrawler, log, LogLevel } from 'crawlee';\n\n// Crawlers come with various utilities, e.g. for logging.\n// Here we use debug level of logging to improve the debugging experience.\n// This functionality is optional!\nlog.setLevel(LogLevel.DEBUG);\n\n// Create an instance of the HttpCrawler class - a crawler\n// that automatically loads the URLs and saves their HTML.\nconst crawler = new HttpCrawler({\n    // The crawler downloads and processes the web pages in parallel, with a concurrency\n    // automatically managed based on the available system memory and CPU (see AutoscaledPool class).\n    // Here we define some hard limits for the concurrency.\n    minConcurrency: 10,\n    maxConcurrency: 50,\n\n    // On error, retry each page at most once.\n    maxRequestRetries: 1,\n\n    // Increase the timeout for processing of each page.\n    requestHandlerTimeoutSecs: 30,\n\n    // Limit to 10 requests per one crawl\n    maxRequestsPerCrawl: 10,\n\n    // This function will be called for each URL to crawl.\n    // It accepts a single parameter, which is an object with options as:\n    // https://crawlee.dev/api/http-crawler/interface/HttpCrawlerOptions#requestHandler\n    // We use for demonstration only 2 of them:\n    // - request: an instance of the Request class with information such as the URL that is being crawled and HTTP method\n    // - body: the HTML code of the current page\n    async requestHandler({ request, body }) {\n        log.debug(`Processing ${request.url}...`);\n\n        // Store the results to the dataset. In local configuration,\n        // the data will be stored as JSON files in ./storage/datasets/default\n        await Dataset.pushData({\n            url: request.url,\n            body,\n        });\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries + 1 times.\n    failedRequestHandler({ request }) {\n        log.debug(`Request ${request.url} failed twice.`);\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run([\n    'https://crawlee.dev',\n]);\n\nlog.debug('Crawler finished.');\n",l={id:"http-crawler",title:"HTTP crawler"},c=void 0,p={id:"examples/http-crawler",title:"HTTP crawler",description:"This example demonstrates how to use HttpCrawler to crawl a list of URLs from an external file, load each URL using a plain HTTP request, and save HTML.",source:"@site/versioned_docs/version-3.4/examples/http_crawler.mdx",sourceDirName:"examples",slug:"/examples/http-crawler",permalink:"/docs/3.4/examples/http-crawler",draft:!1,unlisted:!1,tags:[],version:"3.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"http-crawler",title:"HTTP crawler"},sidebar:"docs",previous:{title:"Forms",permalink:"/docs/3.4/examples/forms"},next:{title:"JSDOM crawler",permalink:"/docs/3.4/examples/jsdom-crawler"}},d={},u=[];function h(e){const t={code:"code",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This example demonstrates how to use ",(0,r.jsx)(o.Z,{to:"http-crawler/class/HttpCrawler",children:(0,r.jsx)(t.code,{children:"HttpCrawler"})})," to crawl a list of URLs from an external file, load each URL using a plain HTTP request, and save HTML."]}),"\n",(0,r.jsx)(s.default,{className:"language-js",children:i})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},14959:(e,t,a)=>{a.d(t,{Z:()=>c});a(67294);var r=a(39960),n=a(74477),s=a(52263),o=a(85893),i=a(50643).version.split("."),l=[i[0],i[1]].join(".");const c=function(e){var t=e.to,a=e.children,i=(0,n.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?(0,o.jsx)(r.default,{to:"/api/"+t,children:a}):(0,o.jsx)(r.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t,children:a})}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var r=a(67294);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);