"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84297],{31295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(85893),o=t(11151),r=t(14959);t(92775);const a={id:"refactoring",title:"Refactoring",description:"Your first steps into the world of scraping with Crawlee"},s=void 0,l={id:"introduction/refactoring",title:"Refactoring",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.4/introduction/08-refactoring.mdx",sourceDirName:"introduction",slug:"/introduction/refactoring",permalink:"/docs/3.4/introduction/refactoring",draft:!1,unlisted:!1,tags:[],version:"3.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:8,frontMatter:{id:"refactoring",title:"Refactoring",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Saving data",permalink:"/docs/3.4/introduction/saving-data"},next:{title:"Running in the Cloud",permalink:"/docs/3.4/introduction/deployment"}},c={},d=[{value:"Routing",id:"routing",level:2},{value:"Splitting your code into multiple files",id:"splitting-your-code-into-multiple-files",level:2},{value:"Using Crawlee <code>log</code> instead of <code>console.log</code>",id:"using-crawlee-log-instead-of-consolelog",level:2},{value:"Using a router to structure your crawling",id:"using-a-router-to-structure-your-crawling",level:2},{value:"Next lesson",id:"next-lesson",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["It may seem that the data is extracted and the crawler is done, but honestly, this is just the beginning. For the sake of brevity, we've completely omitted error handling, proxies, logging, architecture, tests, documentation and other stuff that a reliable software should have. The good thing is, ",(0,i.jsx)(n.strong,{children:"error handling is mostly done by Crawlee itself"}),", so no worries on that front, unless you need some custom magic."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["If you've got to this point and are wondering where all the ",(0,i.jsx)(n.strong,{children:"anti-blocking, bot-protection avoiding stealthy features"})," are, you're right, we haven't shown you any. But that's the point! They are ",(0,i.jsx)(n.strong,{children:"automatically used"})," with the default configuration."]}),(0,i.jsxs)(n.p,{children:["That does not mean the default configuration can handle everything, but it should get you far enough. If you want to learn more, browse the ",(0,i.jsx)(n.a,{href:"../guides/avoid-blocking",children:"Avoid getting blocked"}),", ",(0,i.jsx)(n.a,{href:"../guides/proxy-management",children:"Proxy management"})," and ",(0,i.jsx)(n.a,{href:"../guides/session-management",children:"Session management"})," guides."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Anyway, to promote good coding practices, let's look at how you can use a ",(0,i.jsx)(r.Z,{to:"core/class/Router",children:(0,i.jsx)(n.code,{children:"Router"})})," to better structure your crawler code."]}),"\n",(0,i.jsx)(n.h2,{id:"routing",children:"Routing"}),"\n",(0,i.jsx)(n.p,{children:"In the following code we've made several changes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Split the code into multiple files."}),"\n",(0,i.jsxs)(n.li,{children:["Replaced ",(0,i.jsx)(n.code,{children:"console.log"})," with the Crawlee logger for nicer, colourful logs."]}),"\n",(0,i.jsxs)(n.li,{children:["Added a ",(0,i.jsx)(n.code,{children:"Router"})," to make our routing cleaner, without ",(0,i.jsx)(n.code,{children:"if"})," clauses."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In our ",(0,i.jsx)(n.code,{children:"main.mjs"})," file, we place the general structure of the crawler:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="src/main.mjs"',children:"import { PlaywrightCrawler, log } from 'crawlee';\nimport { router } from './routes.mjs';\n\n// This is better set with CRAWLEE_LOG_LEVEL env var\n// or a configuration option. This is just for show \ud83d\ude08\nlog.setLevel(log.LEVELS.DEBUG);\n\nlog.debug('Setting up crawler.');\nconst crawler = new PlaywrightCrawler({\n    // Instead of the long requestHandler with\n    // if clauses we provide a router instance.\n    requestHandler: router,\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then in a separate ",(0,i.jsx)(n.code,{children:"routes.mjs"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="src/routes.mjs"',children:"import { createPlaywrightRouter, Dataset } from 'crawlee';\n\n// createPlaywrightRouter() is only a helper to get better\n// intellisense and typings. You can use Router.create() too.\nexport const router = createPlaywrightRouter();\n\n// This replaces the request.label === DETAIL branch of the if clause.\nrouter.addHandler('DETAIL', async ({ request, page, log }) => {\n    log.debug(`Extracting data: ${request.url}`);\n    const urlPart = request.url.split('/').slice(-1); // ['sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440']\n    const manufacturer = urlPart[0].split('-')[0]; // 'sennheiser'\n\n    const title = await page.locator('.product-meta h1').textContent();\n    const sku = await page\n        .locator('span.product-meta__sku-number')\n        .textContent();\n\n    const priceElement = page\n        .locator('span.price')\n        .filter({\n            hasText: '$',\n        })\n        .first();\n\n    const currentPriceString = await priceElement.textContent();\n    const rawPrice = currentPriceString.split('$')[1];\n    const price = Number(rawPrice.replaceAll(',', ''));\n\n    const inStockElement = page\n        .locator('span.product-form__inventory')\n        .filter({\n            hasText: 'In stock',\n        })\n        .first();\n\n    const inStock = (await inStockElement.count()) > 0;\n\n    const results = {\n        url: request.url,\n        manufacturer,\n        title,\n        sku,\n        currentPrice: price,\n        availableInStock: inStock,\n    };\n\n    log.debug(`Saving data: ${request.url}`);\n    await Dataset.pushData(results);\n});\n\nrouter.addHandler('CATEGORY', async ({ page, enqueueLinks, request, log }) => {\n    log.debug(`Enqueueing pagination for: ${request.url}`);\n    // We are now on a category page. We can use this to paginate through and enqueue all products,\n    // as well as any subsequent pages we find\n\n    await page.waitForSelector('.product-item > a');\n    await enqueueLinks({\n        selector: '.product-item > a',\n        label: 'DETAIL', // <= note the different label\n    });\n\n    // Now we need to find the \"Next\" button and enqueue the next page of results (if it exists)\n    const nextButton = await page.$('a.pagination__next');\n    if (nextButton) {\n        await enqueueLinks({\n            selector: 'a.pagination__next',\n            label: 'CATEGORY', // <= note the same label\n        });\n    }\n});\n\n// This is a fallback route which will handle the start URL\n// as well as the LIST labeled URLs.\nrouter.addDefaultHandler(async ({ request, page, enqueueLinks, log }) => {\n    log.debug(`Enqueueing categories from page: ${request.url}`);\n    // This means we're on the start page, with no label.\n    // On this page, we just want to enqueue all the category pages.\n\n    await page.waitForSelector('.collection-block-item');\n    await enqueueLinks({\n        selector: '.collection-block-item',\n        label: 'CATEGORY',\n    });\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Let's describe the changes a bit more in detail. We hope that in the end, you will agree that this structure makes the crawler more readable and manageable."}),"\n",(0,i.jsx)(n.h2,{id:"splitting-your-code-into-multiple-files",children:"Splitting your code into multiple files"}),"\n",(0,i.jsx)(n.p,{children:"There's no reason not to split your code into multiple files and keep your logic separate. Less code in a single file means less code you need to think about at any time, and that's good. We would most likely go even further and split even the routes into separate files."}),"\n",(0,i.jsxs)(n.h2,{id:"using-crawlee-log-instead-of-consolelog",children:["Using Crawlee ",(0,i.jsx)(n.code,{children:"log"})," instead of ",(0,i.jsx)(n.code,{children:"console.log"})]}),"\n",(0,i.jsxs)(n.p,{children:["We won't go to great lengths here to talk about ",(0,i.jsx)(n.code,{children:"log"})," object from Crawlee, because you can read it all in the ",(0,i.jsx)(r.Z,{to:"core/class/Log",children:"documentation"}),", but there's just one thing that we need to stress: ",(0,i.jsx)(n.strong,{children:"log levels"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Crawlee ",(0,i.jsx)(n.code,{children:"log"})," has multiple log levels, such as ",(0,i.jsx)(n.code,{children:"log.debug"}),", ",(0,i.jsx)(n.code,{children:"log.info"})," or ",(0,i.jsx)(n.code,{children:"log.warning"}),". It not only makes your log more readable, but it also allows selective turning off of some levels by either calling the ",(0,i.jsx)(n.code,{children:"log.setLevel()"})," function or by setting the ",(0,i.jsx)(n.code,{children:"CRAWLEE_LOG_LEVEL"})," environment variable. Thanks to this you can add a lot of debug logs to your crawler without polluting your log when they're not needed, but ready to help when you encounter issues."]}),"\n",(0,i.jsx)(n.h2,{id:"using-a-router-to-structure-your-crawling",children:"Using a router to structure your crawling"}),"\n",(0,i.jsxs)(n.p,{children:["At first, it might seem more readable using just a simple ",(0,i.jsx)(n.code,{children:"if / else"})," statement to select different logic based on the crawled pages, but trust us, it becomes far less impressive when working with more than two different pages, and it definitely starts to fall apart when the logic to handle each page spans tens or hundreds of lines of code."]}),"\n",(0,i.jsxs)(n.p,{children:["It's good practice in any programming language to split your logic into bite-sized chunks that are easy to read and reason about. Scrolling through a thousand line long ",(0,i.jsx)(n.code,{children:"requestHandler()"})," where everything interacts with everything and variables can be used everywhere is not a beautiful thing to do and a pain to debug. That's why we prefer the separation of routes into their own files."]}),"\n",(0,i.jsx)(n.h2,{id:"next-lesson",children:"Next lesson"}),"\n",(0,i.jsxs)(n.p,{children:["In the next and final lesson, we will show you how you can deploy your Crawlee project to the cloud. If you used the CLI to bootstrap your project, you already have a ",(0,i.jsx)(n.strong,{children:"Dockerfile"})," ready, and the next section will show you how to deploy it to the ",(0,i.jsx)(n.a,{href:"../deployment/apify-platform",children:"Apify Platform"})," with ease."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},92775:(e,n,t)=>{t.d(n,{Z:()=>q});t(67294);var i=t(94697),o=t(34334),r=t(95999),a=t(35281);const s={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};var l=t(85893);function c(e){var n=e.type,t=e.className,i=e.children;return(0,l.jsx)("div",{className:(0,o.Z)(a.k.common.admonition,a.k.common.admonitionType(n),s.admonition,t),children:i})}function d(e){var n=e.icon,t=e.title;return(0,l.jsxs)("div",{className:s.admonitionHeading,children:[(0,l.jsx)("span",{className:s.admonitionIcon,children:n}),t]})}function u(e){var n=e.children;return n?(0,l.jsx)("div",{className:s.admonitionContent,children:n}):null}function h(e){var n=e.type,t=e.icon,i=e.title,o=e.children,r=e.className;return(0,l.jsxs)(c,{type:n,className:r,children:[(0,l.jsx)(d,{title:i,icon:t}),(0,l.jsx)(u,{children:o})]})}function g(e){return(0,l.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var p={icon:(0,l.jsx)(g,{}),title:(0,l.jsx)(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function m(e){return(0,l.jsx)(h,Object.assign({},p,e,{className:(0,o.Z)("alert alert--secondary",e.className),children:e.children}))}function f(e){return(0,l.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var w={icon:(0,l.jsx)(f,{}),title:(0,l.jsx)(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function x(e){return(0,l.jsx)(h,Object.assign({},w,e,{className:(0,o.Z)("alert alert--success",e.className),children:e.children}))}function j(e){return(0,l.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var y={icon:(0,l.jsx)(j,{}),title:(0,l.jsx)(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,l.jsx)(h,Object.assign({},y,e,{className:(0,o.Z)("alert alert--info",e.className),children:e.children}))}function v(e){return(0,l.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var k={icon:(0,l.jsx)(v,{}),title:(0,l.jsx)(r.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,l.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var T={icon:(0,l.jsx)(C,{}),title:(0,l.jsx)(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var N={icon:(0,l.jsx)(v,{}),title:(0,l.jsx)(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var L={note:m,tip:x,info:b,warning:function(e){return(0,l.jsx)(h,Object.assign({},k,e,{className:(0,o.Z)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,l.jsx)(h,Object.assign({},T,e,{className:(0,o.Z)("alert alert--danger",e.className),children:e.children}))}},E={secondary:function(e){return(0,l.jsx)(m,Object.assign({title:"secondary"},e))},important:function(e){return(0,l.jsx)(b,Object.assign({title:"important"},e))},success:function(e){return(0,l.jsx)(x,Object.assign({title:"success"},e))},caution:function(e){return(0,l.jsx)(h,Object.assign({},N,e,{className:(0,o.Z)("alert alert--warning",e.className),children:e.children}))}};const R=Object.assign({},L,E);function q(e){var n,t=(0,i.X)(e),o=(n=t.type,R[n]||(console.warn('No admonition component found for admonition type "'+n+'". Using Info as fallback.'),R.info));return(0,l.jsx)(o,Object.assign({},t))}},94697:(e,n,t)=>{t.d(n,{X:()=>r});var i=t(67294),o=t(85893);function r(e){var n,t=function(e){var n=i.Children.toArray(e),t=n.find((function(e){return i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),r=n.filter((function(e){return e!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:r.length>0?(0,o.jsx)(o.Fragment,{children:r}):null}}(e.children),r=t.mdxAdmonitionTitle,a=t.rest,s=null!=(n=e.title)?n:r;return Object.assign({},e,s&&{title:s},{children:a})}},14959:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var i=t(39960),o=t(74477),r=t(52263),a=t(85893),s=t(50643).version.split("."),l=[s[0],s[1]].join(".");const c=function(e){var n=e.to,t=e.children,s=(0,o.E)();return(0,r.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===l?(0,a.jsx)(i.default,{to:"/api/"+n,children:t}):(0,a.jsx)(i.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+n,children:t})}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);