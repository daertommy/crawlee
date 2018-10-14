"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28343],{89447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=r(85893),a=r(11151),s=r(93e3),i=r(14959);const o="import { Dataset, PuppeteerCrawler } from 'crawlee';\n\n// Create an instance of the PuppeteerCrawler class - a crawler\n// that automatically loads the URLs in headless Chrome / Puppeteer.\nconst crawler = new PuppeteerCrawler({\n    // Here you can set options that are passed to the launchPuppeteer() function.\n    launchContext: {\n        launchOptions: {\n            headless: true,\n            // Other Puppeteer options\n        },\n    },\n\n    // Stop crawling after several pages\n    maxRequestsPerCrawl: 50,\n\n    // This function will be called for each URL to crawl.\n    // Here you can write the Puppeteer scripts you are familiar with,\n    // with the exception that browsers and pages are automatically managed by Crawlee.\n    // The function accepts a single parameter, which is an object with the following fields:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - page: Puppeteer's Page object (see https://pptr.dev/#show=api-class-page)\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        log.info(`Processing ${request.url}...`);\n\n        // A function to be evaluated by Puppeteer within the browser context.\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData: { title: string; rank: string; href: string }[] = [];\n\n            // We're getting the title, rank and URL of each post on Hacker News.\n            $posts.forEach(($post) => {\n                scrapedData.push({\n                    title: $post.querySelector('.title a').innerText,\n                    rank: $post.querySelector('.rank').innerText,\n                    href: $post.querySelector('.title a').href,\n                });\n            });\n\n            return scrapedData;\n        });\n\n        // Store the results to the default dataset.\n        await Dataset.pushData(data);\n\n        // Find a link to the next page and enqueue it if it exists.\n        const infos = await enqueueLinks({\n            selector: '.morelink',\n        });\n\n        if (infos.processedRequests.length === 0) log.info(`${request.url} is the last page!`);\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request, log }) {\n        log.error(`Request ${request.url} failed too many times.`);\n    },\n});\n\nawait crawler.addRequests(['https://news.ycombinator.com/']);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n",p={id:"puppeteer-crawler",title:"Puppeteer crawler"},l=void 0,c={id:"examples/puppeteer-crawler",title:"Puppeteer crawler",description:"This example demonstrates how to use PuppeteerCrawler in combination",source:"@site/versioned_docs/version-3.0/examples/puppeteer_crawler.mdx",sourceDirName:"examples",slug:"/examples/puppeteer-crawler",permalink:"/docs/3.0/examples/puppeteer-crawler",draft:!1,unlisted:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"puppeteer-crawler",title:"Puppeteer crawler"},sidebar:"docs",previous:{title:"Capture a screenshot using Puppeteer",permalink:"/docs/3.0/examples/capture-screenshot"},next:{title:"Puppeteer recursive crawl",permalink:"/docs/3.0/examples/puppeteer-recursive-crawl"}},u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This example demonstrates how to use ",(0,n.jsx)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",children:(0,n.jsx)(t.code,{children:"PuppeteerCrawler"})})," in combination\nwith ",(0,n.jsx)(i.Z,{to:"core/class/RequestQueue",children:(0,n.jsx)(t.code,{children:"RequestQueue"})}),"\nto recursively scrape the ",(0,n.jsx)(t.a,{href:"https://news.ycombinator.com",target:"_blank",rel:"noopener",children:"Hacker News website"})," using headless Chrome / Puppeteer."]}),"\n",(0,n.jsxs)(t.p,{children:["The crawler starts with a single URL, finds links to next pages, enqueues them and continues until no more desired links are available. The results\nare stored to the default dataset. In local configuration, the results are stored as JSON files in ",(0,n.jsx)(t.code,{children:"./storage/datasets/default"})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["To run this example on the Apify Platform, select the ",(0,n.jsx)(t.code,{children:"apify/actor-node-puppeteer-chrome"})," image for your Dockerfile."]})}),"\n",(0,n.jsx)(s.default,{className:"language-js",children:o})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},14959:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var n=r(39960),a=r(74477),s=r(52263),i=r(85893),o=r(50643).version.split("."),p=[o[0],o[1]].join(".");const l=function(e){var t=e.to,r=e.children,o=(0,a.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===p?(0,i.jsx)(n.default,{to:"/api/"+t,children:r}):(0,i.jsx)(n.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t,children:r})}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(67294);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);