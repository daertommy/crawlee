"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99010],{22167:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>I,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>g,toc:()=>h});var c=t(85893),n=t(11151),a=t(15316),s=t(14959);const o={code:"import { Dataset, JSDOMCrawler, log, LogLevel } from 'crawlee';\n\n// Crawlers come with various utilities, e.g. for logging.\n// Here we use debug level of logging to improve the debugging experience.\n// This functionality is optional!\nlog.setLevel(LogLevel.DEBUG);\n\n// Create an instance of the JSDOMCrawler class - a crawler\n// that automatically loads the URLs and parses their HTML using the jsdom library.\nconst crawler = new JSDOMCrawler({\n    // The crawler downloads and processes the web pages in parallel, with a concurrency\n    // automatically managed based on the available system memory and CPU (see AutoscaledPool class).\n    // Here we define some hard limits for the concurrency.\n    minConcurrency: 10,\n    maxConcurrency: 50,\n\n    // On error, retry each page at most once.\n    maxRequestRetries: 1,\n\n    // Increase the timeout for processing of each page.\n    requestHandlerTimeoutSecs: 30,\n\n    // Limit to 10 requests per one crawl\n    maxRequestsPerCrawl: 10,\n\n    // This function will be called for each URL to crawl.\n    // It accepts a single parameter, which is an object with options as:\n    // https://crawlee.dev/api/jsdom-crawler/interface/JSDOMCrawlerOptions#requestHandler\n    // We use for demonstration only 2 of them:\n    // - request: an instance of the Request class with information such as the URL that is being crawled and HTTP method\n    // - window: the JSDOM window object\n    async requestHandler({ request, window }) {\n        log.debug(`Processing ${request.url}...`);\n\n        // Extract data from the page\n        const title = window.document.title;\n        const h1texts: { text: string }[] = [];\n        window.document.querySelectorAll('h1').forEach((element) => {\n            h1texts.push({\n                text: element.textContent!,\n            });\n        });\n\n        // Store the results to the dataset. In local configuration,\n        // the data will be stored as JSON files in ./storage/datasets/default\n        await Dataset.pushData({\n            url: request.url,\n            title,\n            h1texts,\n        });\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries + 1 times.\n    failedRequestHandler({ request }) {\n        log.debug(`Request ${request.url} failed twice.`);\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run([\n    'https://crawlee.dev',\n]);\n\nlog.debug('Crawler finished.');\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IERhdGFzZXQsIEpTRE9NQ3Jhd2xlciwgbG9nLCBMb2dMZXZlbCB9IGZyb20gJ2NyYXdsZWUnO1xcblxcbi8vIENyYXdsZXJzIGNvbWUgd2l0aCB2YXJpb3VzIHV0aWxpdGllcywgZS5nLiBmb3IgbG9nZ2luZy5cXG4vLyBIZXJlIHdlIHVzZSBkZWJ1ZyBsZXZlbCBvZiBsb2dnaW5nIHRvIGltcHJvdmUgdGhlIGRlYnVnZ2luZyBleHBlcmllbmNlLlxcbi8vIFRoaXMgZnVuY3Rpb25hbGl0eSBpcyBvcHRpb25hbCFcXG5sb2cuc2V0TGV2ZWwoTG9nTGV2ZWwuREVCVUcpO1xcblxcbi8vIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgSlNET01DcmF3bGVyIGNsYXNzIC0gYSBjcmF3bGVyXFxuLy8gdGhhdCBhdXRvbWF0aWNhbGx5IGxvYWRzIHRoZSBVUkxzIGFuZCBwYXJzZXMgdGhlaXIgSFRNTCB1c2luZyB0aGUganNkb20gbGlicmFyeS5cXG5jb25zdCBjcmF3bGVyID0gbmV3IEpTRE9NQ3Jhd2xlcih7XFxuICAgIC8vIFRoZSBjcmF3bGVyIGRvd25sb2FkcyBhbmQgcHJvY2Vzc2VzIHRoZSB3ZWIgcGFnZXMgaW4gcGFyYWxsZWwsIHdpdGggYSBjb25jdXJyZW5jeVxcbiAgICAvLyBhdXRvbWF0aWNhbGx5IG1hbmFnZWQgYmFzZWQgb24gdGhlIGF2YWlsYWJsZSBzeXN0ZW0gbWVtb3J5IGFuZCBDUFUgKHNlZSBBdXRvc2NhbGVkUG9vbCBjbGFzcykuXFxuICAgIC8vIEhlcmUgd2UgZGVmaW5lIHNvbWUgaGFyZCBsaW1pdHMgZm9yIHRoZSBjb25jdXJyZW5jeS5cXG4gICAgbWluQ29uY3VycmVuY3k6IDEwLFxcbiAgICBtYXhDb25jdXJyZW5jeTogNTAsXFxuXFxuICAgIC8vIE9uIGVycm9yLCByZXRyeSBlYWNoIHBhZ2UgYXQgbW9zdCBvbmNlLlxcbiAgICBtYXhSZXF1ZXN0UmV0cmllczogMSxcXG5cXG4gICAgLy8gSW5jcmVhc2UgdGhlIHRpbWVvdXQgZm9yIHByb2Nlc3Npbmcgb2YgZWFjaCBwYWdlLlxcbiAgICByZXF1ZXN0SGFuZGxlclRpbWVvdXRTZWNzOiAzMCxcXG5cXG4gICAgLy8gTGltaXQgdG8gMTAgcmVxdWVzdHMgcGVyIG9uZSBjcmF3bFxcbiAgICBtYXhSZXF1ZXN0c1BlckNyYXdsOiAxMCxcXG5cXG4gICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBVUkwgdG8gY3Jhd2wuXFxuICAgIC8vIEl0IGFjY2VwdHMgYSBzaW5nbGUgcGFyYW1ldGVyLCB3aGljaCBpcyBhbiBvYmplY3Qgd2l0aCBvcHRpb25zIGFzOlxcbiAgICAvLyBodHRwczovL2NyYXdsZWUuZGV2L2FwaS9qc2RvbS1jcmF3bGVyL2ludGVyZmFjZS9KU0RPTUNyYXdsZXJPcHRpb25zI3JlcXVlc3RIYW5kbGVyXFxuICAgIC8vIFdlIHVzZSBmb3IgZGVtb25zdHJhdGlvbiBvbmx5IDIgb2YgdGhlbTpcXG4gICAgLy8gLSByZXF1ZXN0OiBhbiBpbnN0YW5jZSBvZiB0aGUgUmVxdWVzdCBjbGFzcyB3aXRoIGluZm9ybWF0aW9uIHN1Y2ggYXMgdGhlIFVSTCB0aGF0IGlzIGJlaW5nIGNyYXdsZWQgYW5kIEhUVFAgbWV0aG9kXFxuICAgIC8vIC0gd2luZG93OiB0aGUgSlNET00gd2luZG93IG9iamVjdFxcbiAgICBhc3luYyByZXF1ZXN0SGFuZGxlcih7IHJlcXVlc3QsIHdpbmRvdyB9KSB7XFxuICAgICAgICBsb2cuZGVidWcoYFByb2Nlc3NpbmcgJHtyZXF1ZXN0LnVybH0uLi5gKTtcXG5cXG4gICAgICAgIC8vIEV4dHJhY3QgZGF0YSBmcm9tIHRoZSBwYWdlXFxuICAgICAgICBjb25zdCB0aXRsZSA9IHdpbmRvdy5kb2N1bWVudC50aXRsZTtcXG4gICAgICAgIGNvbnN0IGgxdGV4dHM6IHsgdGV4dDogc3RyaW5nIH1bXSA9IFtdO1xcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2gxJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xcbiAgICAgICAgICAgIGgxdGV4dHMucHVzaCh7XFxuICAgICAgICAgICAgICAgIHRleHQ6IGVsZW1lbnQudGV4dENvbnRlbnQhLFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICAvLyBTdG9yZSB0aGUgcmVzdWx0cyB0byB0aGUgZGF0YXNldC4gSW4gbG9jYWwgY29uZmlndXJhdGlvbixcXG4gICAgICAgIC8vIHRoZSBkYXRhIHdpbGwgYmUgc3RvcmVkIGFzIEpTT04gZmlsZXMgaW4gLi9zdG9yYWdlL2RhdGFzZXRzL2RlZmF1bHRcXG4gICAgICAgIGF3YWl0IERhdGFzZXQucHVzaERhdGEoe1xcbiAgICAgICAgICAgIHVybDogcmVxdWVzdC51cmwsXFxuICAgICAgICAgICAgdGl0bGUsXFxuICAgICAgICAgICAgaDF0ZXh0cyxcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBpZiB0aGUgcGFnZSBwcm9jZXNzaW5nIGZhaWxlZCBtb3JlIHRoYW4gbWF4UmVxdWVzdFJldHJpZXMgKyAxIHRpbWVzLlxcbiAgICBmYWlsZWRSZXF1ZXN0SGFuZGxlcih7IHJlcXVlc3QgfSkge1xcbiAgICAgICAgbG9nLmRlYnVnKGBSZXF1ZXN0ICR7cmVxdWVzdC51cmx9IGZhaWxlZCB0d2ljZS5gKTtcXG4gICAgfSxcXG59KTtcXG5cXG4vLyBSdW4gdGhlIGNyYXdsZXIgYW5kIHdhaXQgZm9yIGl0IHRvIGZpbmlzaC5cXG5hd2FpdCBjcmF3bGVyLnJ1bihbXFxuICAgICdodHRwczovL2NyYXdsZWUuZGV2JyxcXG5dKTtcXG5cXG5sb2cuZGVidWcoJ0NyYXdsZXIgZmluaXNoZWQuJyk7XFxuXCJ9Iiwib3B0aW9ucyI6eyJidWlsZCI6ImxhdGVzdCIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCIsIm1lbW9yeSI6MTAyNCwidGltZW91dCI6MTgwfX0.t1wUm2FNbkVeUwE7hQ7bWM8mSayTaxDzbH5hoMuRj1U"},r={code:"import { JSDOMCrawler, log } from 'crawlee';\n\n// Create an instance of the JSDOMCrawler class - crawler that automatically \n// loads the URLs and parses their HTML using the jsdom library.\nconst crawler = new JSDOMCrawler({\n    // Setting the `runScripts` option to `true` allows the crawler to execute client-side \n    // JavaScript code on the page. This is required for some websites (such as the React application in this example), but may pose a security risk.\n    runScripts: true,\n    // This function will be called for each crawled URL.\n    // Here we extract the window object from the options and use it to extract data from the page.\n    requestHandler: async ({ window }) => {\n        const { document } = window;\n        // The `document` object is analogous to the `window.document` object you know from your favourite web browsers.\n        // Thanks to this, you can use the regular browser-side APIs here.\n        document.querySelectorAll('button')[12].click(); // 1\n        document.querySelectorAll('button')[15].click(); // +\n        document.querySelectorAll('button')[12].click(); // 1\n        document.querySelectorAll('button')[18].click(); // =\n\n        const result = document.querySelectorAll('.component-display')[0].childNodes[0] as Element;\n        // The result is passed to the console. Unlike with Playwright or Puppeteer crawlers, \n        // this console call goes to the Node.js console, not the browser console. All the code here runs right in Node.js!\n        log.info(result.innerHTML); // 2\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run([\n    'https://ahfarmer.github.io/calculator/',\n]);\n\nlog.debug('Crawler finished.');",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IEpTRE9NQ3Jhd2xlciwgbG9nIH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBKU0RPTUNyYXdsZXIgY2xhc3MgLSBjcmF3bGVyIHRoYXQgYXV0b21hdGljYWxseSBcXG4vLyBsb2FkcyB0aGUgVVJMcyBhbmQgcGFyc2VzIHRoZWlyIEhUTUwgdXNpbmcgdGhlIGpzZG9tIGxpYnJhcnkuXFxuY29uc3QgY3Jhd2xlciA9IG5ldyBKU0RPTUNyYXdsZXIoe1xcbiAgICAvLyBTZXR0aW5nIHRoZSBgcnVuU2NyaXB0c2Agb3B0aW9uIHRvIGB0cnVlYCBhbGxvd3MgdGhlIGNyYXdsZXIgdG8gZXhlY3V0ZSBjbGllbnQtc2lkZSBcXG4gICAgLy8gSmF2YVNjcmlwdCBjb2RlIG9uIHRoZSBwYWdlLiBUaGlzIGlzIHJlcXVpcmVkIGZvciBzb21lIHdlYnNpdGVzIChzdWNoIGFzIHRoZSBSZWFjdCBhcHBsaWNhdGlvbiBpbiB0aGlzIGV4YW1wbGUpLCBidXQgbWF5IHBvc2UgYSBzZWN1cml0eSByaXNrLlxcbiAgICBydW5TY3JpcHRzOiB0cnVlLFxcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGNyYXdsZWQgVVJMLlxcbiAgICAvLyBIZXJlIHdlIGV4dHJhY3QgdGhlIHdpbmRvdyBvYmplY3QgZnJvbSB0aGUgb3B0aW9ucyBhbmQgdXNlIGl0IHRvIGV4dHJhY3QgZGF0YSBmcm9tIHRoZSBwYWdlLlxcbiAgICByZXF1ZXN0SGFuZGxlcjogYXN5bmMgKHsgd2luZG93IH0pID0-IHtcXG4gICAgICAgIGNvbnN0IHsgZG9jdW1lbnQgfSA9IHdpbmRvdztcXG4gICAgICAgIC8vIFRoZSBgZG9jdW1lbnRgIG9iamVjdCBpcyBhbmFsb2dvdXMgdG8gdGhlIGB3aW5kb3cuZG9jdW1lbnRgIG9iamVjdCB5b3Uga25vdyBmcm9tIHlvdXIgZmF2b3VyaXRlIHdlYiBicm93c2Vycy5cXG4gICAgICAgIC8vIFRoYW5rcyB0byB0aGlzLCB5b3UgY2FuIHVzZSB0aGUgcmVndWxhciBicm93c2VyLXNpZGUgQVBJcyBoZXJlLlxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylbMTJdLmNsaWNrKCk7IC8vIDFcXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpWzE1XS5jbGljaygpOyAvLyArXFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVsxMl0uY2xpY2soKTsgLy8gMVxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylbMThdLmNsaWNrKCk7IC8vID1cXG5cXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wb25lbnQtZGlzcGxheScpWzBdLmNoaWxkTm9kZXNbMF0gYXMgRWxlbWVudDtcXG4gICAgICAgIC8vIFRoZSByZXN1bHQgaXMgcGFzc2VkIHRvIHRoZSBjb25zb2xlLiBVbmxpa2Ugd2l0aCBQbGF5d3JpZ2h0IG9yIFB1cHBldGVlciBjcmF3bGVycywgXFxuICAgICAgICAvLyB0aGlzIGNvbnNvbGUgY2FsbCBnb2VzIHRvIHRoZSBOb2RlLmpzIGNvbnNvbGUsIG5vdCB0aGUgYnJvd3NlciBjb25zb2xlLiBBbGwgdGhlIGNvZGUgaGVyZSBydW5zIHJpZ2h0IGluIE5vZGUuanMhXFxuICAgICAgICBsb2cuaW5mbyhyZXN1bHQuaW5uZXJIVE1MKTsgLy8gMlxcbiAgICB9LFxcbn0pO1xcblxcbi8vIFJ1biB0aGUgY3Jhd2xlciBhbmQgd2FpdCBmb3IgaXQgdG8gZmluaXNoLlxcbmF3YWl0IGNyYXdsZXIucnVuKFtcXG4gICAgJ2h0dHBzOi8vYWhmYXJtZXIuZ2l0aHViLmlvL2NhbGN1bGF0b3IvJyxcXG5dKTtcXG5cXG5sb2cuZGVidWcoJ0NyYXdsZXIgZmluaXNoZWQuJyk7XCJ9Iiwib3B0aW9ucyI6eyJidWlsZCI6ImxhdGVzdCIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCIsIm1lbW9yeSI6NDA5NiwidGltZW91dCI6MTgwfX0.qXQ8O47AKidllWQ0yo6VmcyOGmWlkSclzYFookgpljs"},i={id:"jsdom-crawler",title:"JSDOM crawler"},d=void 0,g={id:"examples/jsdom-crawler",title:"JSDOM crawler",description:"This example demonstrates how to use JSDOMCrawler to interact with a website using jsdom DOM implementation.",source:"@site/../docs/examples/jsdom_crawler.mdx",sourceDirName:"examples",slug:"/examples/jsdom-crawler",permalink:"/docs/next/examples/jsdom-crawler",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"jsdom-crawler",title:"JSDOM crawler"},sidebar:"docs",previous:{title:"HTTP crawler",permalink:"/docs/next/examples/http-crawler"},next:{title:"Dataset Map and Reduce methods",permalink:"/docs/next/examples/map-and-reduce"}},I={},h=[];function b(e){const l={a:"a",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(l.p,{children:["This example demonstrates how to use ",(0,c.jsx)(s.Z,{to:"jsdom-crawler/class/JSDOMCrawler",children:(0,c.jsx)(l.code,{children:"JSDOMCrawler"})})," to interact with a website using ",(0,c.jsx)(l.a,{href:"https://www.npmjs.com/package/jsdom",target:"_blank",rel:"noopener",children:"jsdom"})," DOM implementation.\nHere the script will open a calculator app from the ",(0,c.jsx)(l.a,{href:"https://reactjs.org/community/examples.html",target:"_blank",rel:"noopener",children:"React examples"}),", click ",(0,c.jsx)(l.code,{children:"1"})," ",(0,c.jsx)(l.code,{children:"+"})," ",(0,c.jsx)(l.code,{children:"1"})," ",(0,c.jsx)(l.code,{children:"="})," and extract the result."]}),"\n",(0,c.jsx)(a.Z,{className:"language-ts",type:"cheerio",children:r}),"\n",(0,c.jsxs)(l.p,{children:["In the following example, we use ",(0,c.jsx)(s.Z,{to:"jsdom-crawler/class/JSDOMCrawler",children:(0,c.jsx)(l.code,{children:"JSDOMCrawler"})})," to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the ",(0,c.jsx)(l.a,{href:"https://www.npmjs.com/package/jsdom",target:"_blank",rel:"noopener",children:"jsdom"})," DOM implementation and extract some data from it: the page title and all ",(0,c.jsx)(l.code,{children:"h1"})," tags."]}),"\n",(0,c.jsx)(a.Z,{className:"language-ts",type:"cheerio",children:o})]})}function u(e={}){const{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,c.jsx)(l,{...e,children:(0,c.jsx)(b,{...e})}):b(e)}},14959:(e,l,t)=>{t.d(l,{Z:()=>i});t(67294);var c=t(39960),n=t(74477),a=t(52263),s=t(85893),o=t(50643).version.split("."),r=[o[0],o[1]].join(".");const i=function(e){var l=e.to,t=e.children,o=(0,n.E)();return(0,a.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===r?(0,s.jsx)(c.default,{to:"/api/"+l,children:t}):(0,s.jsx)(c.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+l,children:t})}},15316:(e,l,t)=>{t.d(l,{Z:()=>g});var c=t(63366),n=(t(67294),t(90512)),a=t(93e3),s=t(39960);const o={button:"button_YBBj",container:"container_TGAW"};var r=t(85893),i=["children","actor","hash","type"],d={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const g=function(e){var l,t=e.children,g=e.actor,I=e.hash,h=e.type,b=(0,c.Z)(e,i);if(I=null!=(l=I)?l:t.hash,!t.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!I)return(0,r.jsx)(a.default,Object.assign({},b,{children:t.code}));var u="https://console.apify.com/actors/"+(null!=g?g:d[null!=h?h:"playwright"])+"?runConfig="+I+"&asrc=run_on_apify";return(0,r.jsxs)("div",{className:(0,n.Z)(o.container,"runnable-code-block"),children:[(0,r.jsxs)(s.default,{href:u,className:o.button,rel:"follow",children:["Run on",(0,r.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,r.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,r.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,r.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,r.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,r.jsx)(a.default,Object.assign({},b,{className:(0,n.Z)(o.codeBlock,"code-block",null!=b.title?"has-title":"no-title"),children:t.code}))]})}},11151:(e,l,t)=>{t.d(l,{Z:()=>o,a:()=>s});var c=t(67294);const n={},a=c.createContext(n);function s(e){const l=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function o(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),c.createElement(a.Provider,{value:l},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);