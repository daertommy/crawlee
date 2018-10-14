"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89488],{26783:(e,r,s)=>{s.r(r),s.d(r,{contentTitle:()=>n,default:()=>o,frontMatter:()=>c,toc:()=>i});var a=s(85893),t=s(11151),c={},n=void 0,i=[{value:"Example usage",id:"example-usage",level:2}];function l(e){var r=Object.assign({a:"a",code:"code",h2:"h2",p:"p",pre:"pre"},(0,t.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Provides a simple framework for parallel crawling of web pages. The URLs to crawl are fed either from a static list of URLs or from a dynamic queue of URLs enabling recursive crawling of websites."}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"BasicCrawler"})," is a low-level tool that requires the user to implement the page download and data extraction functionality themselves.\nIf we want a crawler that already facilitates this functionality, we should consider using ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/cheerio-crawler/class/CheerioCrawler",children:"CheerioCrawler"}),", ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler",children:"PuppeteerCrawler"})," or ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler",children:"PlaywrightCrawler"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"BasicCrawler"})," invokes the user-provided ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/basic-crawler/interface/BasicCrawlerOptions#requestHandler",children:(0,a.jsx)(r.code,{children:"requestHandler"})})," for each ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/Request",children:"Request"})," object, which represents a single URL to crawl. The ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/Request",children:"Request"})," objects are fed from the ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/RequestList",children:"RequestList"})," or ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/RequestQueue",children:"RequestQueue"})," instances provided by the ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/basic-crawler/interface/BasicCrawlerOptions#requestList",children:(0,a.jsx)(r.code,{children:"requestList"})})," or ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/basic-crawler/interface/BasicCrawlerOptions#requestQueue",children:(0,a.jsx)(r.code,{children:"requestQueue"})})," constructor options, respectively. If neither ",(0,a.jsx)(r.code,{children:"requestList"})," nor ",(0,a.jsx)(r.code,{children:"requestQueue"})," options are provided, the crawler will open the default request queue either when the ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/basic-crawler/class/BasicCrawler#addRequests",children:(0,a.jsx)(r.code,{children:"crawler.addRequests()"})})," function is called, or if ",(0,a.jsx)(r.code,{children:"requests"})," parameter (representing the initial requests) of the ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/basic-crawler/class/BasicCrawler#run",children:(0,a.jsx)(r.code,{children:"crawler.run()"})})," function is provided."]}),"\n",(0,a.jsxs)(r.p,{children:["If both ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/basic-crawler/interface/BasicCrawlerOptions#requestList",children:(0,a.jsx)(r.code,{children:"requestList"})})," and ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/basic-crawler/interface/BasicCrawlerOptions#requestQueue",children:(0,a.jsx)(r.code,{children:"requestQueue"})})," options are used, the instance first processes URLs from the ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/RequestList",children:"RequestList"})," and automatically enqueues all of them to the ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/RequestQueue",children:"RequestQueue"})," before it starts their processing. This ensures that a single URL is not crawled multiple times."]}),"\n",(0,a.jsxs)(r.p,{children:["The crawler finishes if there are no more ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/Request",children:"Request"})," objects to crawl."]}),"\n",(0,a.jsxs)(r.p,{children:["New requests are only dispatched when there is enough free CPU and memory available, using the functionality provided by the ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/AutoscaledPool",children:"AutoscaledPool"})," class. All ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/AutoscaledPool",children:"AutoscaledPool"})," configuration options can be passed to the ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/basic-crawler/interface/BasicCrawlerOptions#autoscaledPoolOptions",children:(0,a.jsx)(r.code,{children:"autoscaledPoolOptions"})})," parameter of the ",(0,a.jsx)(r.code,{children:"BasicCrawler"})," constructor. For user convenience, the ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/interface/AutoscaledPoolOptions#minConcurrency",children:(0,a.jsx)(r.code,{children:"minConcurrency"})})," and ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/interface/AutoscaledPoolOptions#maxConcurrency",children:(0,a.jsx)(r.code,{children:"maxConcurrency"})})," options of the underlying ",(0,a.jsx)(r.a,{href:"https://crawlee.dev/api/core/class/AutoscaledPool",children:"AutoscaledPool"})," constructor are available directly in the ",(0,a.jsx)(r.code,{children:"BasicCrawler"})," constructor."]}),"\n",(0,a.jsx)(r.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"import { BasicCrawler, Dataset } from 'crawlee';\n\n// Create a crawler instance\nconst crawler = new BasicCrawler({\n    async requestHandler({ request, sendRequest }) {\n        // 'request' contains an instance of the Request class\n        // Here we simply fetch the HTML of the page and store it to a dataset\n        const { body } = await sendRequest({\n            url: request.url,\n            method: request.method,\n            body: request.payload,\n            headers: request.headers,\n        });\n\n        await Dataset.pushData({\n            url: request.url,\n            html: body,\n        })\n    },\n});\n\n// Enqueue the initial requests and run the crawler\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n]);\n"})})]})}function o(e){void 0===e&&(e={});var r=Object.assign({},(0,t.a)(),e.components).wrapper;return r?(0,a.jsx)(r,Object.assign({},e,{children:(0,a.jsx)(l,Object.assign({},e))})):l(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>i,a:()=>n});var a=s(67294);const t={},c=a.createContext(t);function n(e){const r=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),a.createElement(c.Provider,{value:r},e.children)}}}]);