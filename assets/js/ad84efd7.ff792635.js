"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19037],{36653:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>w});var a=t(85893),i=t(11151),s=t(93e3),n=t(14959);const o="import { PlaywrightCrawler } from 'crawlee';\nimport { firefox } from 'playwright';\n\n// Create an instance of the PlaywrightCrawler class.\nconst crawler = new PlaywrightCrawler({\n    launchContext: {\n        // Set the Firefox browser to be used by the crawler.\n        // If launcher option is not specified here,\n        // default Chromium browser will be used.\n        launcher: firefox,\n    },\n    async requestHandler({ request, page, log }) {\n        const pageTitle = await page.title();\n\n        log.info(`URL: ${request.loadedUrl} | Page title: ${pageTitle}`);\n    },\n});\n\nawait crawler.addRequests(['https://example.com']);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n",l={id:"playwright-crawler-firefox",title:"Using Firefox browser with Playwright crawler"},c=void 0,p={id:"examples/playwright-crawler-firefox",title:"Using Firefox browser with Playwright crawler",description:"This example demonstrates how to use PlaywrightCrawler with headless Firefox browser.",source:"@site/versioned_docs/version-3.1/examples/playwright_crawler_firefox.mdx",sourceDirName:"examples",slug:"/examples/playwright-crawler-firefox",permalink:"/docs/3.1/examples/playwright-crawler-firefox",draft:!1,unlisted:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"playwright-crawler-firefox",title:"Using Firefox browser with Playwright crawler"},sidebar:"docs",previous:{title:"Playwright crawler",permalink:"/docs/3.1/examples/playwright-crawler"},next:{title:"Capture a screenshot using Puppeteer",permalink:"/docs/3.1/examples/capture-screenshot"}},d={},w=[];function h(e){const r={a:"a",admonition:"admonition",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["This example demonstrates how to use ",(0,a.jsx)(n.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,a.jsx)(r.code,{children:"PlaywrightCrawler"})})," with headless Firefox browser."]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To run this example on the Apify Platform, select the ",(0,a.jsx)(r.code,{children:"apify/actor-node-playwright-firefox"})," image for your Dockerfile."]})}),"\n",(0,a.jsx)(s.default,{className:"language-js",children:o}),"\n",(0,a.jsxs)(r.p,{children:["To see a real-world example of how to use ",(0,a.jsx)(n.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,a.jsx)(r.code,{children:"PlaywrightCrawler"})})," in combination with ",(0,a.jsx)(n.Z,{to:"core/class/RequestQueue",children:(0,a.jsx)(r.code,{children:"RequestQueue"})})," to recursively scrape the ",(0,a.jsx)(r.a,{href:"https://news.ycombinator.com",target:"_blank",rel:"noopener",children:"Hacker News website"})," check out the ",(0,a.jsx)(r.a,{href:"./playwright-crawler",children:(0,a.jsx)(r.code,{children:"Playwright\xa0crawler\xa0example"})}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},14959:(e,r,t)=>{t.d(r,{Z:()=>c});t(67294);var a=t(39960),i=t(74477),s=t(52263),n=t(85893),o=t(50643).version.split("."),l=[o[0],o[1]].join(".");const c=function(e){var r=e.to,t=e.children,o=(0,i.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===l?(0,n.jsx)(a.default,{to:"/api/"+r,children:t}):(0,n.jsx)(a.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+r,children:t})}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>n});var a=t(67294);const i={},s=a.createContext(i);function n(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(s.Provider,{value:r},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);