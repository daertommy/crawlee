"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27156],{80017:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(85893),t=o(11151);const a={id:"upgrading-to-v1",title:"Upgrading to v1"},s=void 0,i={id:"upgrading/upgrading-to-v1",title:"Upgrading to v1",description:"Summary",source:"@site/versioned_docs/version-3.0/upgrading/upgrading_v1.md",sourceDirName:"upgrading",slug:"/upgrading/upgrading-to-v1",permalink:"/docs/3.0/upgrading/upgrading-to-v1",draft:!1,unlisted:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"upgrading-to-v1",title:"Upgrading to v1"},sidebar:"docs",previous:{title:"Upgrading",permalink:"/docs/3.0/upgrading"},next:{title:"Upgrading to v2",permalink:"/docs/3.0/upgrading/upgrading-to-v2"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Installation",id:"installation",level:2},{value:"Running on Apify Platform",id:"running-on-apify-platform",level:2},{value:"Handler arguments are now Crawling Context",id:"handler-arguments-are-now-crawling-context",level:2},{value:"<code>Map</code> of crawling contexts and their IDs",id:"map-of-crawling-contexts-and-their-ids",level:3},{value:"<code>autoscaledPool</code> was moved under <code>crawlingContext.crawler</code>",id:"autoscaledpool-was-moved-under-crawlingcontextcrawler",level:3},{value:"Replacement of <code>PuppeteerPool</code> with <code>BrowserPool</code>",id:"replacement-of-puppeteerpool-with-browserpool",level:2},{value:"Access to running <code>BrowserPool</code>",id:"access-to-running-browserpool",level:3},{value:"Pages now have IDs",id:"pages-now-have-ids",level:3},{value:"Configuration and lifecycle hooks",id:"configuration-and-lifecycle-hooks",level:3},{value:"Introduction of <code>BrowserController</code>",id:"introduction-of-browsercontroller",level:3},{value:"<code>BrowserPool</code> methods vs <code>PuppeteerPool</code>",id:"browserpool-methods-vs-puppeteerpool",level:3},{value:"Updated <code>PuppeteerCrawlerOptions</code>",id:"updated-puppeteercrawleroptions",level:2},{value:"Removal of <code>gotoFunction</code>",id:"removal-of-gotofunction",level:3},{value:"<code>launchPuppeteerOptions</code> =&gt; <code>launchContext</code>",id:"launchpuppeteeroptions--launchcontext",level:3},{value:"Removal of <code>launchPuppeteerFunction</code>",id:"removal-of-launchpuppeteerfunction",level:3},{value:"Launch functions",id:"launch-functions",level:2},{value:"Updated arguments",id:"updated-arguments",level:3},{value:"Custom modules",id:"custom-modules",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.p,{children:["After 3.5 years of rapid development and a lot of breaking changes and deprecations,\nhere comes the result - ",(0,r.jsx)(n.strong,{children:"Apify SDK v1"}),". There were two goals for this release. ",(0,r.jsx)(n.strong,{children:"Stability"}),"\nand ",(0,r.jsx)(n.strong,{children:"adding support for more browsers"})," - Firefox and Webkit (Safari)."]}),"\n",(0,r.jsxs)(n.p,{children:["The SDK has grown quite popular over the years, powering thousands of web scraping\nand automation projects. We think our developers deserve a stable environment to work\nin and by releasing SDK v1, ",(0,r.jsx)(n.strong,{children:"we commit to only make breaking changes once a year,\nwith a new major release"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["We added support for more browsers by replacing ",(0,r.jsx)(n.code,{children:"PuppeteerPool"})," with\n",(0,r.jsx)(n.a,{href:"https://github.com/apify/browser-pool",target:"_blank",rel:"noopener",children:(0,r.jsx)(n.code,{children:"browser-pool"})}),". A new library that we created\nspecifically for this purpose. It builds on the ideas from ",(0,r.jsx)(n.code,{children:"PuppeteerPool"})," and extends\nthem to support ",(0,r.jsx)(n.a,{href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener",children:"Playwright"}),". Playwright is\na browser automation library similar to Puppeteer. It works with all well known browsers\nand uses almost the same interface as Puppeteer, while adding useful features and simplifying\ncommon tasks. Don't worry, you can still use Puppeteer with the new ",(0,r.jsx)(n.code,{children:"BrowserPool"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A large breaking change is that neither ",(0,r.jsx)(n.code,{children:"puppeteer"})," nor ",(0,r.jsx)(n.code,{children:"playwright"})," are bundled with\nthe SDK v1. To make the choice of a library easier and installs faster, users will\nhave to install the selected modules and versions themselves. This allows us to add\nsupport for even more libraries in the future."]}),"\n",(0,r.jsxs)(n.p,{children:["Thanks to the addition of Playwright we now have a ",(0,r.jsx)(n.code,{children:"PlaywrightCrawler"}),". It is very similar\nto ",(0,r.jsx)(n.code,{children:"PuppeteerCrawler"})," and you can pick the one you prefer. It also means we needed to make\nsome interface changes. The ",(0,r.jsx)(n.code,{children:"launchPuppeteerFunction"})," option of ",(0,r.jsx)(n.code,{children:"PuppeteerCrawler"})," is gone\nand ",(0,r.jsx)(n.code,{children:"launchPuppeteerOptions"})," were replaced by ",(0,r.jsx)(n.code,{children:"launchContext"}),". We also moved things around\nin the ",(0,r.jsx)(n.code,{children:"handlePageFunction"})," arguments. See the\n",(0,r.jsx)(n.a,{href:"#migration-guide",children:"migration guide"}),"\nfor more detailed explanation and migration examples."]}),"\n",(0,r.jsx)(n.p,{children:"What's in store for SDK v2? We want to split the SDK into smaller libraries,\nso that everyone can install only the things they need. We plan a TypeScript migration\nto make crawler development faster and safer. Finally, we will take a good look\nat the interface of the whole SDK and update it to improve the developer experience.\nBug fixes and scraping features will of course keep landing in versions 1.X as well."}),"\n",(0,r.jsx)(n.h2,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,r.jsx)(n.p,{children:"There are a lot of breaking changes in the v1.0.0 release, but we're confident that\nupdating your code will be a matter of minutes. Below, you'll find examples how to do it\nand also short tutorials how to use many of the new features."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Many of the new features are made with power users in mind,\nso don't worry if something looks complicated. You don't need to use it."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["Previous versions of the SDK bundled the ",(0,r.jsx)(n.code,{children:"puppeteer"})," package, so you did not have to install\nit. SDK v1 supports also ",(0,r.jsx)(n.code,{children:"playwright"})," and we don't want to force users to install both.\nTo install SDK v1 with Puppeteer (same as previous versions), run:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install apify puppeteer\n"})}),"\n",(0,r.jsx)(n.p,{children:"To install SDK v1 with Playwright run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install apify playwright\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"While we tried to add the most important functionality in the initial release,\nyou may find that there are still some utilities or options that are only\nsupported by Puppeteer and not Playwright."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"running-on-apify-platform",children:"Running on Apify Platform"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to make use of Playwright on the Apify Platform, you need to use a Docker image\nthat supports Playwright. We've created them for you, so head over to the new\n",(0,r.jsx)(n.a,{href:"https://sdk.apify.com/docs/guides/docker-images",target:"_blank",rel:"noopener",children:"Docker image guide"})," and pick the one\nthat best suits your needs."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that your ",(0,r.jsx)(n.code,{children:"package.json"})," ",(0,r.jsx)(n.strong,{children:"MUST"})," include ",(0,r.jsx)(n.code,{children:"puppeteer"})," and/or ",(0,r.jsx)(n.code,{children:"playwright"})," as dependencies.\nIf you don't list them, the libraries will be uninstalled from your ",(0,r.jsx)(n.code,{children:"node_modules"})," folder\nwhen you build your actors."]}),"\n",(0,r.jsx)(n.h2,{id:"handler-arguments-are-now-crawling-context",children:"Handler arguments are now Crawling Context"}),"\n",(0,r.jsx)(n.p,{children:"Previously, arguments of user provided handler functions were provided in separate\nobjects. This made it difficult to track values across function invocations."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const handlePageFunction = async (args1) => {\n    args1.hasOwnProperty('proxyInfo') // true\n}\n\nconst handleFailedRequestFunction = async (args2) => {\n    args2.hasOwnProperty('proxyInfo') // false\n}\n\nargs1 === args2 // false\n"})}),"\n",(0,r.jsx)(n.p,{children:"This happened because a new arguments object was created for each function.\nWith SDK v1 we now have a single object called Crawling Context."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const handlePageFunction = async (crawlingContext1) => {\n    crawlingContext1.hasOwnProperty('proxyInfo') // true\n}\n\nconst handleFailedRequestFunction = async (crawlingContext2) => {\n    crawlingContext2.hasOwnProperty('proxyInfo') // true\n}\n\n// All contexts are the same object.\ncrawlingContext1 === crawlingContext2 // true\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"map-of-crawling-contexts-and-their-ids",children:[(0,r.jsx)(n.code,{children:"Map"})," of crawling contexts and their IDs"]}),"\n",(0,r.jsxs)(n.p,{children:["Now that all the objects are the same, we can keep track of all running crawling contexts.\nWe can do that by working with the new ",(0,r.jsx)(n.code,{children:"id"})," property of ",(0,r.jsx)(n.code,{children:"crawlingContext"}),"\nThis is useful when you need cross-context access."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let masterContextId;\nconst handlePageFunction = async ({ id, page, request, crawler }) => {\n    if (request.userData.masterPage) {\n        masterContextId = id;\n        // Prepare the master page.\n    } else {\n        const masterContext = crawler.crawlingContexts.get(masterContextId);\n        const masterPage = masterContext.page;\n        const masterRequest = masterContext.request;\n        // Now we can manipulate the master data from another handlePageFunction.\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"autoscaledpool-was-moved-under-crawlingcontextcrawler",children:[(0,r.jsx)(n.code,{children:"autoscaledPool"})," was moved under ",(0,r.jsx)(n.code,{children:"crawlingContext.crawler"})]}),"\n",(0,r.jsxs)(n.p,{children:["To prevent bloat and to make access to certain key objects easier, we exposed a ",(0,r.jsx)(n.code,{children:"crawler"}),"\nproperty on the handle page arguments."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const handePageFunction = async ({ request, page, crawler }) => {\n    await crawler.requestQueue.addRequest({ url: 'https://example.com' });\n    await crawler.autoscaledPool.pause();\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This also means that some shorthands like ",(0,r.jsx)(n.code,{children:"puppeteerPool"})," or ",(0,r.jsx)(n.code,{children:"autoscaledPool"})," were\nno longer necessary."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const handePageFunction = async (crawlingContext) => {\n    crawlingContext.autoscaledPool // does NOT exist anymore\n    crawlingContext.crawler.autoscaledPool // <= this is correct usage\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"replacement-of-puppeteerpool-with-browserpool",children:["Replacement of ",(0,r.jsx)(n.code,{children:"PuppeteerPool"})," with ",(0,r.jsx)(n.code,{children:"BrowserPool"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"BrowserPool"})," was created to extend ",(0,r.jsx)(n.code,{children:"PuppeteerPool"})," with the ability to manage other\nbrowser automation libraries. The API is similar, but not the same."]}),"\n",(0,r.jsxs)(n.h3,{id:"access-to-running-browserpool",children:["Access to running ",(0,r.jsx)(n.code,{children:"BrowserPool"})]}),"\n",(0,r.jsxs)(n.p,{children:["Only ",(0,r.jsx)(n.code,{children:"PuppeteerCrawler"})," and ",(0,r.jsx)(n.code,{children:"PlaywrightCrawler"})," use ",(0,r.jsx)(n.code,{children:"BrowserPool"}),". You can access it\non the ",(0,r.jsx)(n.code,{children:"crawler"})," object."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const crawler = new Apify.PlaywrightCrawler({\n    handlePageFunction: async ({ page, crawler }) => {\n        crawler.browserPool // <-----\n    }\n});\n\ncrawler.browserPool // <-----\n"})}),"\n",(0,r.jsx)(n.h3,{id:"pages-now-have-ids",children:"Pages now have IDs"}),"\n",(0,r.jsxs)(n.p,{children:["And they're equal to ",(0,r.jsx)(n.code,{children:"crawlingContext.id"})," which gives you access to full ",(0,r.jsx)(n.code,{children:"crawlingContext"}),"\nin hooks. See ",(0,r.jsx)(n.a,{href:"#configuration-and-lifecycle-hooks",children:"Lifecycle hooks"})," below."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const pageId = browserPool.getPageId\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configuration-and-lifecycle-hooks",children:"Configuration and lifecycle hooks"}),"\n",(0,r.jsxs)(n.p,{children:["The most important addition with ",(0,r.jsx)(n.code,{children:"BrowserPool"})," are the\n",(0,r.jsx)(n.a,{href:"https://github.com/apify/browser-pool#browserpool",target:"_blank",rel:"noopener",children:"lifecycle hooks"}),".\nYou can access them via ",(0,r.jsx)(n.code,{children:"browserPoolOptions"})," in both crawlers. A full list of ",(0,r.jsx)(n.code,{children:"browserPoolOptions"}),"\ncan be found in ",(0,r.jsxs)(n.a,{href:"https://github.com/apify/browser-pool#new-browserpooloptions",target:"_blank",rel:"noopener",children:[(0,r.jsx)(n.code,{children:"browser-pool"})," readme"]}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const crawler = new Apify.PuppeteerCrawler({\n    browserPoolOptions: {\n        retireBrowserAfterPageCount: 10,\n        preLaunchHooks: [\n            async (pageId, launchContext) => {\n                const { request } = crawler.crawlingContexts.get(pageId);\n                if (request.userData.useHeadful === true) {\n                    launchContext.launchOptions.headless = false;\n                }\n            }\n        ]\n    }\n})\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"introduction-of-browsercontroller",children:["Introduction of ",(0,r.jsx)(n.code,{children:"BrowserController"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/apify/browser-pool#browsercontroller",target:"_blank",rel:"noopener",children:(0,r.jsx)(n.code,{children:"BrowserController"})}),"\nis a class of ",(0,r.jsx)(n.code,{children:"browser-pool"})," that's responsible for browser management.\nIts purpose is to provide a single API for working with both Puppeteer and Playwright browsers.\nIt works automatically in the background, but if you ever wanted to close a browser properly,\nyou should use a ",(0,r.jsx)(n.code,{children:"browserController"})," to do it. You can find it in the handle page arguments."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const handlePageFunction = async ({ page, browserController }) => {\n    // Wrong usage. Could backfire because it bypasses BrowserPool.\n    await page.browser().close();\n\n    // Correct usage. Allows graceful shutdown.\n    await browserController.close();\n\n    const cookies = [/* some cookie objects */];\n    // Wrong usage. Will only work in Puppeteer and not Playwright.\n    await page.setCookies(...cookies);\n\n    // Correct usage. Will work in both.\n    await browserController.setCookies(page, cookies);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"BrowserController"})," also includes important information about the browser, such as\nthe context it was launched with. This was difficult to do before SDK v1."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const handlePageFunction = async ({ browserController }) => {\n    // Information about the proxy used by the browser\n    browserController.launchContext.proxyInfo\n\n    // Session used by the browser\n    browserController.launchContext.session\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"browserpool-methods-vs-puppeteerpool",children:[(0,r.jsx)(n.code,{children:"BrowserPool"})," methods vs ",(0,r.jsx)(n.code,{children:"PuppeteerPool"})]}),"\n",(0,r.jsx)(n.p,{children:"Some functions were removed (in line with earlier deprecations), and some were changed a bit:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// OLD\nawait puppeteerPool.recyclePage(page);\n\n// NEW\nawait page.close();\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// OLD\nawait puppeteerPool.retire(page.browser());\n\n// NEW\nbrowserPool.retireBrowserByPage(page);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// OLD\nawait puppeteerPool.serveLiveViewSnapshot();\n\n// NEW\n// There's no LiveView in BrowserPool\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"updated-puppeteercrawleroptions",children:["Updated ",(0,r.jsx)(n.code,{children:"PuppeteerCrawlerOptions"})]}),"\n",(0,r.jsxs)(n.p,{children:["To keep ",(0,r.jsx)(n.code,{children:"PuppeteerCrawler"})," and ",(0,r.jsx)(n.code,{children:"PlaywrightCrawler"})," consistent, we updated the options."]}),"\n",(0,r.jsxs)(n.h3,{id:"removal-of-gotofunction",children:["Removal of ",(0,r.jsx)(n.code,{children:"gotoFunction"})]}),"\n",(0,r.jsxs)(n.p,{children:["The concept of a configurable ",(0,r.jsx)(n.code,{children:"gotoFunction"})," is not ideal. Especially since we use a modified\n",(0,r.jsx)(n.code,{children:"gotoExtended"}),". Users have to know this when they override ",(0,r.jsx)(n.code,{children:"gotoFunction"})," if they want to\nextend default behavior. We decided to replace ",(0,r.jsx)(n.code,{children:"gotoFunction"})," with ",(0,r.jsx)(n.code,{children:"preNavigationHooks"})," and\n",(0,r.jsx)(n.code,{children:"postNavigationHooks"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The following example illustrates how ",(0,r.jsx)(n.code,{children:"gotoFunction"})," makes things complicated."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const gotoFunction = async ({ request, page }) => {\n    // pre-processing\n    await makePageStealthy(page);\n\n    // Have to remember how to do this:\n    const response = await gotoExtended(page, request, {/* have to remember the defaults */});\n\n    // post-processing\n    await page.evaluate(() => {\n        window.foo = 'bar';\n    });\n\n    // Must not forget!\n    return response;\n}\n\nconst crawler = new Apify.PuppeteerCrawler({\n    gotoFunction,\n    // ...\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["With ",(0,r.jsx)(n.code,{children:"preNavigationHooks"})," and ",(0,r.jsx)(n.code,{children:"postNavigationHooks"})," it's much easier. ",(0,r.jsx)(n.code,{children:"preNavigationHooks"}),"\nare called with two arguments: ",(0,r.jsx)(n.code,{children:"crawlingContext"})," and ",(0,r.jsx)(n.code,{children:"gotoOptions"}),". ",(0,r.jsx)(n.code,{children:"postNavigationHooks"}),"\nare called only with ",(0,r.jsx)(n.code,{children:"crawlingContext"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const preNavigationHooks = [\n    async ({ page }) => makePageStealthy(page)\n];\n\nconst postNavigationHooks = [\n    async ({ page }) => page.evaluate(() => {\n        window.foo = 'bar'\n    })\n]\n\nconst crawler = new Apify.PuppeteerCrawler({\n    preNavigationHooks,\n    postNavigationHooks,\n    // ...\n})\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"launchpuppeteeroptions--launchcontext",children:[(0,r.jsx)(n.code,{children:"launchPuppeteerOptions"})," => ",(0,r.jsx)(n.code,{children:"launchContext"})]}),"\n",(0,r.jsxs)(n.p,{children:["Those were always a point of confusion because they merged custom Apify options with\n",(0,r.jsx)(n.code,{children:"launchOptions"})," of Puppeteer."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const launchPuppeteerOptions = {\n    useChrome: true, // Apify option\n    headless: false, // Puppeteer option\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Use the new ",(0,r.jsx)(n.code,{children:"launchContext"})," object, which explicitly defines ",(0,r.jsx)(n.code,{children:"launchOptions"}),".\n",(0,r.jsx)(n.code,{children:"launchPuppeteerOptions"})," were removed."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const crawler = new Apify.PuppeteerCrawler({\n    launchContext: {\n        useChrome: true, // Apify option\n        launchOptions: {\n            headless: false // Puppeteer option\n        }\n    }\n})\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["LaunchContext is also a type of ",(0,r.jsx)(n.a,{href:"https://github.com/apify/browser-pool",target:"_blank",rel:"noopener",children:(0,r.jsx)(n.code,{children:"browser-pool"})})," and\nthe structure is exactly the same there. SDK only adds extra options."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"removal-of-launchpuppeteerfunction",children:["Removal of ",(0,r.jsx)(n.code,{children:"launchPuppeteerFunction"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"browser-pool"})," introduces the idea of ",(0,r.jsx)(n.a,{href:"https://github.com/apify/browser-pool#browserpool",target:"_blank",rel:"noopener",children:"lifecycle hooks"}),",\nwhich are functions that are executed when a certain event in the browser lifecycle happens."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const launchPuppeteerFunction = async (launchPuppeteerOptions) => {\n    if (someVariable === 'chrome') {\n        launchPuppeteerOptions.useChrome = true;\n    }\n    return Apify.launchPuppeteer(launchPuppeteerOptions);\n}\n\nconst crawler = new Apify.PuppeteerCrawler({\n    launchPuppeteerFunction,\n    // ...\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now you can recreate the same functionality with a ",(0,r.jsx)(n.code,{children:"preLaunchHook"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const maybeLaunchChrome = (pageId, launchContext) => {\n    if (someVariable === 'chrome') {\n        launchContext.useChrome = true;\n    }\n}\n\nconst crawler = new Apify.PuppeteerCrawler({\n    browserPoolOptions: {\n        preLaunchHooks: [maybeLaunchChrome]\n    },\n    // ...\n})\n"})}),"\n",(0,r.jsx)(n.p,{children:"This is better in multiple ways. It is consistent across both Puppeteer and Playwright.\nIt allows you to easily construct your browsers with pre-defined behavior:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const preLaunchHooks = [\n    maybeLaunchChrome,\n    useHeadfulIfNeeded,\n    injectNewFingerprint,\n]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And thanks to the addition of ",(0,r.jsx)(n.a,{href:"#handler-arguments-are-now-crawling-context",children:(0,r.jsx)(n.code,{children:"crawler.crawlingContexts"})}),"\nthe functions also have access to the ",(0,r.jsx)(n.code,{children:"crawlingContext"})," of the ",(0,r.jsx)(n.code,{children:"request"})," that triggered the launch."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const preLaunchHooks = [\n    async function maybeLaunchChrome(pageId, launchContext) {\n        const { request } = crawler.crawlingContexts.get(pageId);\n        if (request.userData.useHeadful === true) {\n            launchContext.launchOptions.headless = false;\n        }\n    }\n]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"launch-functions",children:"Launch functions"}),"\n",(0,r.jsxs)(n.p,{children:["In addition to ",(0,r.jsx)(n.code,{children:"Apify.launchPuppeteer()"})," we now also have ",(0,r.jsx)(n.code,{children:"Apify.launchPlaywright()"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"updated-arguments",children:"Updated arguments"}),"\n",(0,r.jsxs)(n.p,{children:["We ",(0,r.jsx)(n.a,{href:"#launchpuppeteeroptions--launchcontext",children:"updated the launch options object"})," because\nit was a frequent source of confusion."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// OLD\nawait Apify.launchPuppeteer({\n    useChrome: true,\n    headless: true,\n})\n\n// NEW\nawait Apify.launchPuppeteer({\n    useChrome: true,\n    launchOptions: {\n        headless: true,\n    }\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-modules",children:"Custom modules"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Apify.launchPuppeteer"})," already supported the ",(0,r.jsx)(n.code,{children:"puppeteerModule"})," option. With Playwright,\nwe normalized the name to ",(0,r.jsx)(n.code,{children:"launcher"})," because the ",(0,r.jsx)(n.code,{children:"playwright"})," module itself does not\nlaunch browsers."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const puppeteer = require('puppeteer');\nconst playwright = require('playwright');\n\nawait Apify.launchPuppeteer();\n// Is the same as:\nawait Apify.launchPuppeteer({\n    launcher: puppeteer\n})\n\nawait Apify.launchPlaywright();\n// Is the same as:\nawait Apify.launchPlaywright({\n    launcher: playwright.chromium\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>s});var r=o(67294);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);