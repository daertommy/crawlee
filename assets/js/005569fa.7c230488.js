"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57150],{39182:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var i=t(85893),n=t(11151),s=t(14959);const a={id:"cheerio-crawler-guide",title:"CheerioCrawler guide",sidebar_label:"CheerioCrawler",description:"Your first steps into the world of scraping with Crawlee"},o=void 0,l={id:"guides/cheerio-crawler-guide",title:"CheerioCrawler guide",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.3/guides/cheerio_crawler.mdx",sourceDirName:"guides",slug:"/guides/cheerio-crawler-guide",permalink:"/docs/3.3/guides/cheerio-crawler-guide",draft:!1,unlisted:!1,tags:[],version:"3.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"cheerio-crawler-guide",title:"CheerioCrawler guide",sidebar_label:"CheerioCrawler",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/3.3/guides/configuration"},next:{title:"JavaScript rendering",permalink:"/docs/3.3/guides/javascript-rendering"}},c={},h=[{value:"What is Cheerio",id:"what-is-cheerio",level:2},{value:"How the crawler works",id:"how-the-crawler-works",level:2},{value:"When to use <code>CheerioCrawler</code>",id:"when-to-use-cheeriocrawler",level:2},{value:"Example use of Cheerio",id:"example-use-of-cheerio",level:2},{value:"Get text content of an element",id:"get-text-content-of-an-element",level:3},{value:"Find all links on a page",id:"find-all-links-on-a-page",level:3},{value:"Other examples",id:"other-examples",level:3}];function d(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["\u200b",(0,i.jsx)(s.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,i.jsx)(r.code,{children:"CheerioCrawler"})})," is our simplest and fastest crawler. If you're familiar with ",(0,i.jsx)(r.a,{href:"https://jquery.com/",target:"_blank",rel:"noopener",children:"jQuery"}),", you'll understand ",(0,i.jsx)(r.code,{children:"CheerioCrawler"})," in minutes."]}),"\n",(0,i.jsx)(r.h2,{id:"what-is-cheerio",children:"What is Cheerio"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener",children:"Cheerio"})," is essentially ",(0,i.jsx)(r.a,{href:"https://jquery.com/",target:"_blank",rel:"noopener",children:"jQuery"})," for Node.js. It offers the same API, including the familiar ",(0,i.jsx)(r.code,{children:"$"})," object. You can use it, as you would use jQuery for manipulating the DOM of an HTML page. In crawling, you'll mostly use it to select the needed elements and extract their values - the data you're interested in. But jQuery runs in a browser and attaches directly to the browser's DOM. Where does ",(0,i.jsx)(r.code,{children:"cheerio"})," get its HTML? This is where the ",(0,i.jsx)(r.code,{children:"Crawler"})," part of ",(0,i.jsx)(s.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,i.jsx)(r.code,{children:"CheerioCrawler"})})," comes in."]}),"\n",(0,i.jsx)(r.h2,{id:"how-the-crawler-works",children:"How the crawler works"}),"\n",(0,i.jsxs)(r.p,{children:["\u200b",(0,i.jsx)(s.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,i.jsx)(r.code,{children:"CheerioCrawler"})})," crawls by making plain HTTP requests to the provided URLs using the specialized ",(0,i.jsx)(r.a,{href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener",children:"got-scraping"})," HTTP client. The URLs are fed to the crawler using ",(0,i.jsx)(s.Z,{to:"core/class/RequestQueue",children:(0,i.jsx)(r.code,{children:"RequestQueue"})}),". The HTTP responses it gets back are usually HTML pages. The same pages you would get in your browser when you first load a URL. But it can handle any content types with the help of the ",(0,i.jsx)(s.Z,{to:"cheerio-crawler/interface/CheerioCrawlerOptions#additionalMimeTypes",children:(0,i.jsx)(r.code,{children:"additionalMimeTypes"})})," option."]}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsxs)(r.p,{children:["Modern web pages often do not serve all of their content in the first HTML response, but rather the first HTML contains links to other resources such as CSS and JavaScript that get downloaded afterwards, and together they create the final page. To crawl those, see ",(0,i.jsx)(s.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",children:(0,i.jsx)(r.code,{children:"PuppeteerCrawler"})})," and ",(0,i.jsx)(s.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,i.jsx)(r.code,{children:"PlaywrightCrawler"})}),"."]})}),"\n",(0,i.jsxs)(r.p,{children:["Once the page's HTML is retrieved, the crawler will pass it to ",(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener",children:"Cheerio"})," for parsing. The result is the typical ",(0,i.jsx)(r.code,{children:"$"})," function, which should be familiar to jQuery users. You can use the ",(0,i.jsx)(r.code,{children:"$"})," function to do all sorts of lookups and manipulation of the page's HTML, but in scraping, you will mostly use it to find specific HTML elements and extract their data."]}),"\n",(0,i.jsxs)(r.p,{children:["Example use of Cheerio and its ",(0,i.jsx)(r.code,{children:"$"})," function in comparison to browser JavaScript:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"// Return the text content of the <title> element.\ndocument.querySelector('title').textContent; // plain JS\n$('title').text(); // Cheerio\n\n// Return an array of all 'href' links on the page.\nArray.from(document.querySelectorAll('[href]')).map(el => el.href); // plain JS\n$('[href]')\n    .map((i, el) => $(el).attr('href'))\n    .get(); // Cheerio\n"})}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsx)(r.p,{children:"This is not to show that Cheerio is better than plain browser JavaScript. Some might actually prefer the more expressive way plain JS provides. Unfortunately, the browser JavaScript methods are not available in Node.js, so Cheerio is your best bet to do the parsing in Node."})}),"\n",(0,i.jsxs)(r.h2,{id:"when-to-use-cheeriocrawler",children:["When to use ",(0,i.jsx)(r.code,{children:"CheerioCrawler"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"CheerioCrawler"})," really shines when you need to cope with extremely high workloads. With just 4 GBs of memory and a single CPU core, you can scrape 500 or more pages a minute! ",(0,i.jsx)(r.em,{children:"(assuming each page contains approximately 400KB of HTML)"}),". To scrape this fast with a full browser scraper, such as the ",(0,i.jsx)(s.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,i.jsx)(r.code,{children:"PlaywrightCrawler"})}),", you'd need significantly more computing power."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Advantages:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Extremely fast and cheap to run"}),"\n",(0,i.jsx)(r.li,{children:"Easy to set up"}),"\n",(0,i.jsx)(r.li,{children:"Familiar for jQuery users"}),"\n",(0,i.jsx)(r.li,{children:"Automatically avoids some anti-scraping bans"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Disadvantages:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Does not work for websites that require JavaScript rendering"}),"\n",(0,i.jsx)(r.li,{children:"May easily overload the target website with requests"}),"\n",(0,i.jsx)(r.li,{children:"Does not enable any manipulation of the website before scraping"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"example-use-of-cheerio",children:"Example use of Cheerio"}),"\n",(0,i.jsx)(r.h3,{id:"get-text-content-of-an-element",children:"Get text content of an element"}),"\n",(0,i.jsxs)(r.p,{children:["Finds the first ",(0,i.jsx)(r.code,{children:"<h2>"})," element and returns its text content."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"$('h2').text()\n"})}),"\n",(0,i.jsx)(r.h3,{id:"find-all-links-on-a-page",children:"Find all links on a page"}),"\n",(0,i.jsxs)(r.p,{children:["This snippet finds all ",(0,i.jsx)(r.code,{children:"<a>"})," elements which have the ",(0,i.jsx)(r.code,{children:"href"})," attribute and extracts the hrefs into an array."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"$('a[href]')\n    .map((i, el) => $(el).attr('href'))\n    .get();\n"})}),"\n",(0,i.jsx)(r.h3,{id:"other-examples",children:"Other examples"}),"\n",(0,i.jsxs)(r.p,{children:["Visit the ",(0,i.jsx)(r.a,{href:"../examples",children:"Examples"})," section to browse examples of ",(0,i.jsx)(r.code,{children:"CheerioCrawler"})," usage. Almost all examples show ",(0,i.jsx)(r.code,{children:"CheerioCrawler"})," code in their code tabs."]})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},14959:(e,r,t)=>{t.d(r,{Z:()=>c});t(67294);var i=t(39960),n=t(74477),s=t(52263),a=t(85893),o=t(50643).version.split("."),l=[o[0],o[1]].join(".");const c=function(e){var r=e.to,t=e.children,o=(0,n.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===l?(0,a.jsx)(i.default,{to:"/api/"+r,children:t}):(0,a.jsx)(i.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+r,children:t})}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>a});var i=t(67294);const n={},s=i.createContext(n);function a(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:r},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);