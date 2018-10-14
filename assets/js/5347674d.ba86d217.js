"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80201],{77010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=a(85893),l=a(11151),r=a(15316),c=a(65488),i=a(85162);a(14959);const s={code:"import { Dataset, PuppeteerCrawler } from 'crawlee';\nimport puppeteerExtra from 'puppeteer-extra';\nimport stealthPlugin from 'puppeteer-extra-plugin-stealth';\n\n// First, we tell puppeteer-extra to use the plugin (or plugins) we want.\n// Certain plugins might have options you can pass in - read up on their documentation!\npuppeteerExtra.use(stealthPlugin());\n\n// Create an instance of the PuppeteerCrawler class - a crawler\n// that automatically loads the URLs in headless Chrome / Puppeteer.\nconst crawler = new PuppeteerCrawler({\n    launchContext: {\n        // !!! You need to specify this option to tell Crawlee to use puppeteer-extra as the launcher !!!\n        launcher: puppeteerExtra,\n        launchOptions: {\n            // Other puppeteer options work as usual\n            headless: true,\n        },\n    },\n\n    // Stop crawling after several pages\n    maxRequestsPerCrawl: 50,\n\n    // This function will be called for each URL to crawl.\n    // Here you can write the Puppeteer scripts you are familiar with,\n    // with the exception that browsers and pages are automatically managed by Crawlee.\n    // The function accepts a single parameter, which is an object with the following fields:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - page: Puppeteer's Page object (see https://pptr.dev/#show=api-class-page)\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        log.info(`Processing ${request.url}...`);\n\n        // A function to be evaluated by Puppeteer within the browser context.\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData: { title: string; rank: string; href: string }[] = [];\n\n            // We're getting the title, rank and URL of each post on Hacker News.\n            $posts.forEach(($post) => {\n                scrapedData.push({\n                    title: $post.querySelector('.title a').innerText,\n                    rank: $post.querySelector('.rank').innerText,\n                    href: $post.querySelector('.title a').href,\n                });\n            });\n\n            return scrapedData;\n        });\n\n        // Store the results to the default dataset.\n        await Dataset.pushData(data);\n\n        // Find a link to the next page and enqueue it if it exists.\n        const infos = await enqueueLinks({\n            selector: '.morelink',\n        });\n\n        if (infos.processedRequests.length === 0) log.info(`${request.url} is the last page!`);\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request, log }) {\n        log.error(`Request ${request.url} failed too many times.`);\n    },\n});\n\nawait crawler.addRequests(['https://news.ycombinator.com/']);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IERhdGFzZXQsIFB1cHBldGVlckNyYXdsZXIgfSBmcm9tICdjcmF3bGVlJztcXG5pbXBvcnQgcHVwcGV0ZWVyRXh0cmEgZnJvbSAncHVwcGV0ZWVyLWV4dHJhJztcXG5pbXBvcnQgc3RlYWx0aFBsdWdpbiBmcm9tICdwdXBwZXRlZXItZXh0cmEtcGx1Z2luLXN0ZWFsdGgnO1xcblxcbi8vIEZpcnN0LCB3ZSB0ZWxsIHB1cHBldGVlci1leHRyYSB0byB1c2UgdGhlIHBsdWdpbiAob3IgcGx1Z2lucykgd2Ugd2FudC5cXG4vLyBDZXJ0YWluIHBsdWdpbnMgbWlnaHQgaGF2ZSBvcHRpb25zIHlvdSBjYW4gcGFzcyBpbiAtIHJlYWQgdXAgb24gdGhlaXIgZG9jdW1lbnRhdGlvbiFcXG5wdXBwZXRlZXJFeHRyYS51c2Uoc3RlYWx0aFBsdWdpbigpKTtcXG5cXG4vLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIFB1cHBldGVlckNyYXdsZXIgY2xhc3MgLSBhIGNyYXdsZXJcXG4vLyB0aGF0IGF1dG9tYXRpY2FsbHkgbG9hZHMgdGhlIFVSTHMgaW4gaGVhZGxlc3MgQ2hyb21lIC8gUHVwcGV0ZWVyLlxcbmNvbnN0IGNyYXdsZXIgPSBuZXcgUHVwcGV0ZWVyQ3Jhd2xlcih7XFxuICAgIGxhdW5jaENvbnRleHQ6IHtcXG4gICAgICAgIC8vICEhISBZb3UgbmVlZCB0byBzcGVjaWZ5IHRoaXMgb3B0aW9uIHRvIHRlbGwgQ3Jhd2xlZSB0byB1c2UgcHVwcGV0ZWVyLWV4dHJhIGFzIHRoZSBsYXVuY2hlciAhISFcXG4gICAgICAgIGxhdW5jaGVyOiBwdXBwZXRlZXJFeHRyYSxcXG4gICAgICAgIGxhdW5jaE9wdGlvbnM6IHtcXG4gICAgICAgICAgICAvLyBPdGhlciBwdXBwZXRlZXIgb3B0aW9ucyB3b3JrIGFzIHVzdWFsXFxuICAgICAgICAgICAgaGVhZGxlc3M6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICAvLyBTdG9wIGNyYXdsaW5nIGFmdGVyIHNldmVyYWwgcGFnZXNcXG4gICAgbWF4UmVxdWVzdHNQZXJDcmF3bDogNTAsXFxuXFxuICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2ggVVJMIHRvIGNyYXdsLlxcbiAgICAvLyBIZXJlIHlvdSBjYW4gd3JpdGUgdGhlIFB1cHBldGVlciBzY3JpcHRzIHlvdSBhcmUgZmFtaWxpYXIgd2l0aCxcXG4gICAgLy8gd2l0aCB0aGUgZXhjZXB0aW9uIHRoYXQgYnJvd3NlcnMgYW5kIHBhZ2VzIGFyZSBhdXRvbWF0aWNhbGx5IG1hbmFnZWQgYnkgQ3Jhd2xlZS5cXG4gICAgLy8gVGhlIGZ1bmN0aW9uIGFjY2VwdHMgYSBzaW5nbGUgcGFyYW1ldGVyLCB3aGljaCBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIGZpZWxkczpcXG4gICAgLy8gLSByZXF1ZXN0OiBhbiBpbnN0YW5jZSBvZiB0aGUgUmVxdWVzdCBjbGFzcyB3aXRoIGluZm9ybWF0aW9uIHN1Y2ggYXMgVVJMIGFuZCBIVFRQIG1ldGhvZFxcbiAgICAvLyAtIHBhZ2U6IFB1cHBldGVlcidzIFBhZ2Ugb2JqZWN0IChzZWUgaHR0cHM6Ly9wcHRyLmRldi8jc2hvdz1hcGktY2xhc3MtcGFnZSlcXG4gICAgYXN5bmMgcmVxdWVzdEhhbmRsZXIoeyByZXF1ZXN0LCBwYWdlLCBlbnF1ZXVlTGlua3MsIGxvZyB9KSB7XFxuICAgICAgICBsb2cuaW5mbyhgUHJvY2Vzc2luZyAke3JlcXVlc3QudXJsfS4uLmApO1xcblxcbiAgICAgICAgLy8gQSBmdW5jdGlvbiB0byBiZSBldmFsdWF0ZWQgYnkgUHVwcGV0ZWVyIHdpdGhpbiB0aGUgYnJvd3NlciBjb250ZXh0LlxcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHBhZ2UuJCRldmFsKCcuYXRoaW5nJywgKCRwb3N0cykgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHNjcmFwZWREYXRhOiB7IHRpdGxlOiBzdHJpbmc7IHJhbms6IHN0cmluZzsgaHJlZjogc3RyaW5nIH1bXSA9IFtdO1xcblxcbiAgICAgICAgICAgIC8vIFdlJ3JlIGdldHRpbmcgdGhlIHRpdGxlLCByYW5rIGFuZCBVUkwgb2YgZWFjaCBwb3N0IG9uIEhhY2tlciBOZXdzLlxcbiAgICAgICAgICAgICRwb3N0cy5mb3JFYWNoKCgkcG9zdCkgPT4ge1xcbiAgICAgICAgICAgICAgICBzY3JhcGVkRGF0YS5wdXNoKHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAkcG9zdC5xdWVyeVNlbGVjdG9yKCcudGl0bGUgYScpLmlubmVyVGV4dCxcXG4gICAgICAgICAgICAgICAgICAgIHJhbms6ICRwb3N0LnF1ZXJ5U2VsZWN0b3IoJy5yYW5rJykuaW5uZXJUZXh0LFxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJHBvc3QucXVlcnlTZWxlY3RvcignLnRpdGxlIGEnKS5ocmVmLFxcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICByZXR1cm4gc2NyYXBlZERhdGE7XFxuICAgICAgICB9KTtcXG5cXG4gICAgICAgIC8vIFN0b3JlIHRoZSByZXN1bHRzIHRvIHRoZSBkZWZhdWx0IGRhdGFzZXQuXFxuICAgICAgICBhd2FpdCBEYXRhc2V0LnB1c2hEYXRhKGRhdGEpO1xcblxcbiAgICAgICAgLy8gRmluZCBhIGxpbmsgdG8gdGhlIG5leHQgcGFnZSBhbmQgZW5xdWV1ZSBpdCBpZiBpdCBleGlzdHMuXFxuICAgICAgICBjb25zdCBpbmZvcyA9IGF3YWl0IGVucXVldWVMaW5rcyh7XFxuICAgICAgICAgICAgc2VsZWN0b3I6ICcubW9yZWxpbmsnLFxcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICBpZiAoaW5mb3MucHJvY2Vzc2VkUmVxdWVzdHMubGVuZ3RoID09PSAwKSBsb2cuaW5mbyhgJHtyZXF1ZXN0LnVybH0gaXMgdGhlIGxhc3QgcGFnZSFgKTtcXG4gICAgfSxcXG5cXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgaWYgdGhlIHBhZ2UgcHJvY2Vzc2luZyBmYWlsZWQgbW9yZSB0aGFuIG1heFJlcXVlc3RSZXRyaWVzKzEgdGltZXMuXFxuICAgIGZhaWxlZFJlcXVlc3RIYW5kbGVyKHsgcmVxdWVzdCwgbG9nIH0pIHtcXG4gICAgICAgIGxvZy5lcnJvcihgUmVxdWVzdCAke3JlcXVlc3QudXJsfSBmYWlsZWQgdG9vIG1hbnkgdGltZXMuYCk7XFxuICAgIH0sXFxufSk7XFxuXFxuYXdhaXQgY3Jhd2xlci5hZGRSZXF1ZXN0cyhbJ2h0dHBzOi8vbmV3cy55Y29tYmluYXRvci5jb20vJ10pO1xcblxcbi8vIFJ1biB0aGUgY3Jhd2xlciBhbmQgd2FpdCBmb3IgaXQgdG8gZmluaXNoLlxcbmF3YWl0IGNyYXdsZXIucnVuKCk7XFxuXFxuY29uc29sZS5sb2coJ0NyYXdsZXIgZmluaXNoZWQuJyk7XFxuXCJ9Iiwib3B0aW9ucyI6eyJidWlsZCI6ImxhdGVzdCIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCIsIm1lbW9yeSI6NDA5NiwidGltZW91dCI6MTgwfX0.sfanNw3MjGlDd1cxBfJTG-nygvhkjGj02U9OAnGvcAc"},g={code:"import { Dataset, PlaywrightCrawler } from 'crawlee';\n\n// For playwright-extra you will need to import the browser type itself that you want to use!\n// By default, PlaywrightCrawler uses chromium, but you can also use firefox or webkit.\nimport { chromium } from 'playwright-extra';\nimport stealthPlugin from 'puppeteer-extra-plugin-stealth';\n\n// First, we tell playwright-extra to use the plugin (or plugins) we want.\n// Certain plugins might have options you can pass in - read up on their documentation!\nchromium.use(stealthPlugin());\n\n// Create an instance of the PlaywrightCrawler class - a crawler\n// that automatically loads the URLs in headless Chrome / Playwright.\nconst crawler = new PlaywrightCrawler({\n    launchContext: {\n        // !!! You need to specify this option to tell Crawlee to use playwright-extra as the launcher !!!\n        launcher: chromium,\n        launchOptions: {\n            // Other playwright options work as usual\n            headless: true,\n        },\n    },\n\n    // Stop crawling after several pages\n    maxRequestsPerCrawl: 50,\n\n    // This function will be called for each URL to crawl.\n    // Here you can write the Puppeteer scripts you are familiar with,\n    // with the exception that browsers and pages are automatically managed by Crawlee.\n    // The function accepts a single parameter, which is an object with the following fields:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - page: Puppeteer's Page object (see https://pptr.dev/#show=api-class-page)\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        log.info(`Processing ${request.url}...`);\n\n        // A function to be evaluated by Puppeteer within the browser context.\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData: { title: string; rank: string; href: string }[] = [];\n\n            // We're getting the title, rank and URL of each post on Hacker News.\n            $posts.forEach(($post) => {\n                scrapedData.push({\n                    title: $post.querySelector('.title a').innerText,\n                    rank: $post.querySelector('.rank').innerText,\n                    href: $post.querySelector('.title a').href,\n                });\n            });\n\n            return scrapedData;\n        });\n\n        // Store the results to the default dataset.\n        await Dataset.pushData(data);\n\n        // Find a link to the next page and enqueue it if it exists.\n        const infos = await enqueueLinks({\n            selector: '.morelink',\n        });\n\n        if (infos.processedRequests.length === 0) log.info(`${request.url} is the last page!`);\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request, log }) {\n        log.error(`Request ${request.url} failed too many times.`);\n    },\n});\n\nawait crawler.addRequests(['https://news.ycombinator.com/']);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IERhdGFzZXQsIFBsYXl3cmlnaHRDcmF3bGVyIH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuLy8gRm9yIHBsYXl3cmlnaHQtZXh0cmEgeW91IHdpbGwgbmVlZCB0byBpbXBvcnQgdGhlIGJyb3dzZXIgdHlwZSBpdHNlbGYgdGhhdCB5b3Ugd2FudCB0byB1c2UhXFxuLy8gQnkgZGVmYXVsdCwgUGxheXdyaWdodENyYXdsZXIgdXNlcyBjaHJvbWl1bSwgYnV0IHlvdSBjYW4gYWxzbyB1c2UgZmlyZWZveCBvciB3ZWJraXQuXFxuaW1wb3J0IHsgY2hyb21pdW0gfSBmcm9tICdwbGF5d3JpZ2h0LWV4dHJhJztcXG5pbXBvcnQgc3RlYWx0aFBsdWdpbiBmcm9tICdwdXBwZXRlZXItZXh0cmEtcGx1Z2luLXN0ZWFsdGgnO1xcblxcbi8vIEZpcnN0LCB3ZSB0ZWxsIHBsYXl3cmlnaHQtZXh0cmEgdG8gdXNlIHRoZSBwbHVnaW4gKG9yIHBsdWdpbnMpIHdlIHdhbnQuXFxuLy8gQ2VydGFpbiBwbHVnaW5zIG1pZ2h0IGhhdmUgb3B0aW9ucyB5b3UgY2FuIHBhc3MgaW4gLSByZWFkIHVwIG9uIHRoZWlyIGRvY3VtZW50YXRpb24hXFxuY2hyb21pdW0udXNlKHN0ZWFsdGhQbHVnaW4oKSk7XFxuXFxuLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBQbGF5d3JpZ2h0Q3Jhd2xlciBjbGFzcyAtIGEgY3Jhd2xlclxcbi8vIHRoYXQgYXV0b21hdGljYWxseSBsb2FkcyB0aGUgVVJMcyBpbiBoZWFkbGVzcyBDaHJvbWUgLyBQbGF5d3JpZ2h0LlxcbmNvbnN0IGNyYXdsZXIgPSBuZXcgUGxheXdyaWdodENyYXdsZXIoe1xcbiAgICBsYXVuY2hDb250ZXh0OiB7XFxuICAgICAgICAvLyAhISEgWW91IG5lZWQgdG8gc3BlY2lmeSB0aGlzIG9wdGlvbiB0byB0ZWxsIENyYXdsZWUgdG8gdXNlIHBsYXl3cmlnaHQtZXh0cmEgYXMgdGhlIGxhdW5jaGVyICEhIVxcbiAgICAgICAgbGF1bmNoZXI6IGNocm9taXVtLFxcbiAgICAgICAgbGF1bmNoT3B0aW9uczoge1xcbiAgICAgICAgICAgIC8vIE90aGVyIHBsYXl3cmlnaHQgb3B0aW9ucyB3b3JrIGFzIHVzdWFsXFxuICAgICAgICAgICAgaGVhZGxlc3M6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICAvLyBTdG9wIGNyYXdsaW5nIGFmdGVyIHNldmVyYWwgcGFnZXNcXG4gICAgbWF4UmVxdWVzdHNQZXJDcmF3bDogNTAsXFxuXFxuICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2ggVVJMIHRvIGNyYXdsLlxcbiAgICAvLyBIZXJlIHlvdSBjYW4gd3JpdGUgdGhlIFB1cHBldGVlciBzY3JpcHRzIHlvdSBhcmUgZmFtaWxpYXIgd2l0aCxcXG4gICAgLy8gd2l0aCB0aGUgZXhjZXB0aW9uIHRoYXQgYnJvd3NlcnMgYW5kIHBhZ2VzIGFyZSBhdXRvbWF0aWNhbGx5IG1hbmFnZWQgYnkgQ3Jhd2xlZS5cXG4gICAgLy8gVGhlIGZ1bmN0aW9uIGFjY2VwdHMgYSBzaW5nbGUgcGFyYW1ldGVyLCB3aGljaCBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIGZpZWxkczpcXG4gICAgLy8gLSByZXF1ZXN0OiBhbiBpbnN0YW5jZSBvZiB0aGUgUmVxdWVzdCBjbGFzcyB3aXRoIGluZm9ybWF0aW9uIHN1Y2ggYXMgVVJMIGFuZCBIVFRQIG1ldGhvZFxcbiAgICAvLyAtIHBhZ2U6IFB1cHBldGVlcidzIFBhZ2Ugb2JqZWN0IChzZWUgaHR0cHM6Ly9wcHRyLmRldi8jc2hvdz1hcGktY2xhc3MtcGFnZSlcXG4gICAgYXN5bmMgcmVxdWVzdEhhbmRsZXIoeyByZXF1ZXN0LCBwYWdlLCBlbnF1ZXVlTGlua3MsIGxvZyB9KSB7XFxuICAgICAgICBsb2cuaW5mbyhgUHJvY2Vzc2luZyAke3JlcXVlc3QudXJsfS4uLmApO1xcblxcbiAgICAgICAgLy8gQSBmdW5jdGlvbiB0byBiZSBldmFsdWF0ZWQgYnkgUHVwcGV0ZWVyIHdpdGhpbiB0aGUgYnJvd3NlciBjb250ZXh0LlxcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHBhZ2UuJCRldmFsKCcuYXRoaW5nJywgKCRwb3N0cykgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHNjcmFwZWREYXRhOiB7IHRpdGxlOiBzdHJpbmc7IHJhbms6IHN0cmluZzsgaHJlZjogc3RyaW5nIH1bXSA9IFtdO1xcblxcbiAgICAgICAgICAgIC8vIFdlJ3JlIGdldHRpbmcgdGhlIHRpdGxlLCByYW5rIGFuZCBVUkwgb2YgZWFjaCBwb3N0IG9uIEhhY2tlciBOZXdzLlxcbiAgICAgICAgICAgICRwb3N0cy5mb3JFYWNoKCgkcG9zdCkgPT4ge1xcbiAgICAgICAgICAgICAgICBzY3JhcGVkRGF0YS5wdXNoKHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAkcG9zdC5xdWVyeVNlbGVjdG9yKCcudGl0bGUgYScpLmlubmVyVGV4dCxcXG4gICAgICAgICAgICAgICAgICAgIHJhbms6ICRwb3N0LnF1ZXJ5U2VsZWN0b3IoJy5yYW5rJykuaW5uZXJUZXh0LFxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJHBvc3QucXVlcnlTZWxlY3RvcignLnRpdGxlIGEnKS5ocmVmLFxcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICByZXR1cm4gc2NyYXBlZERhdGE7XFxuICAgICAgICB9KTtcXG5cXG4gICAgICAgIC8vIFN0b3JlIHRoZSByZXN1bHRzIHRvIHRoZSBkZWZhdWx0IGRhdGFzZXQuXFxuICAgICAgICBhd2FpdCBEYXRhc2V0LnB1c2hEYXRhKGRhdGEpO1xcblxcbiAgICAgICAgLy8gRmluZCBhIGxpbmsgdG8gdGhlIG5leHQgcGFnZSBhbmQgZW5xdWV1ZSBpdCBpZiBpdCBleGlzdHMuXFxuICAgICAgICBjb25zdCBpbmZvcyA9IGF3YWl0IGVucXVldWVMaW5rcyh7XFxuICAgICAgICAgICAgc2VsZWN0b3I6ICcubW9yZWxpbmsnLFxcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICBpZiAoaW5mb3MucHJvY2Vzc2VkUmVxdWVzdHMubGVuZ3RoID09PSAwKSBsb2cuaW5mbyhgJHtyZXF1ZXN0LnVybH0gaXMgdGhlIGxhc3QgcGFnZSFgKTtcXG4gICAgfSxcXG5cXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgaWYgdGhlIHBhZ2UgcHJvY2Vzc2luZyBmYWlsZWQgbW9yZSB0aGFuIG1heFJlcXVlc3RSZXRyaWVzKzEgdGltZXMuXFxuICAgIGZhaWxlZFJlcXVlc3RIYW5kbGVyKHsgcmVxdWVzdCwgbG9nIH0pIHtcXG4gICAgICAgIGxvZy5lcnJvcihgUmVxdWVzdCAke3JlcXVlc3QudXJsfSBmYWlsZWQgdG9vIG1hbnkgdGltZXMuYCk7XFxuICAgIH0sXFxufSk7XFxuXFxuYXdhaXQgY3Jhd2xlci5hZGRSZXF1ZXN0cyhbJ2h0dHBzOi8vbmV3cy55Y29tYmluYXRvci5jb20vJ10pO1xcblxcbi8vIFJ1biB0aGUgY3Jhd2xlciBhbmQgd2FpdCBmb3IgaXQgdG8gZmluaXNoLlxcbmF3YWl0IGNyYXdsZXIucnVuKCk7XFxuXFxuY29uc29sZS5sb2coJ0NyYXdsZXIgZmluaXNoZWQuJyk7XFxuXCJ9Iiwib3B0aW9ucyI6eyJidWlsZCI6ImxhdGVzdCIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCIsIm1lbW9yeSI6NDA5NiwidGltZW91dCI6MTgwfX0.0kreiVCSB7X6Bj9STXlplCevCpC_FU6omktJuvhQrik"},o={id:"playwright-puppeteer-extra",title:"Using puppeteer-extra and playwright-extra"},u=void 0,d={id:"examples/crawler-plugins/playwright-puppeteer-extra",title:"Using puppeteer-extra and playwright-extra",description:"puppeteer-extra and playwright-extra are community-built",source:"@site/versioned_docs/version-3.5/examples/crawler-plugins/index.mdx",sourceDirName:"examples/crawler-plugins",slug:"/examples/crawler-plugins/",permalink:"/docs/3.5/examples/crawler-plugins/",draft:!1,unlisted:!1,tags:[],version:"3.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"playwright-puppeteer-extra",title:"Using puppeteer-extra and playwright-extra"},sidebar:"docs",previous:{title:"Crawl some links on a website",permalink:"/docs/3.5/examples/crawl-some-links"},next:{title:"Export entire dataset to one file",permalink:"/docs/3.5/examples/export-entire-dataset"}},p={},h=[];function I(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/puppeteer-extra",target:"_blank",rel:"noopener",children:(0,n.jsx)(t.code,{children:"puppeteer-extra"})})," and ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/playwright-extra",target:"_blank",rel:"noopener",children:(0,n.jsx)(t.code,{children:"playwright-extra"})})," are community-built\nlibraries that bring in a plugin system to enhance the usage of ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/puppeteer",target:"_blank",rel:"noopener",children:(0,n.jsx)(t.code,{children:"puppeteer"})})," and\n",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/playwright",target:"_blank",rel:"noopener",children:(0,n.jsx)(t.code,{children:"playwright"})})," respectively (bringing in extra functionality, like improving stealth for\nexample by using the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/puppeteer-extra-plugin-stealth",target:"_blank",rel:"noopener",children:(0,n.jsx)(t.code,{children:"puppeteer-extra-plugin-stealth"})})," plugin)."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Available plugins",type:"tip",children:[(0,n.jsxs)(t.p,{children:["You can see a list of available plugins on the ",(0,n.jsxs)(t.a,{href:"https://www.npmjs.com/package/puppeteer-extra#plugins",target:"_blank",rel:"noopener",children:[(0,n.jsx)(t.code,{children:"puppeteer-extra"}),"s plugin list"]}),"."]}),(0,n.jsxs)(t.p,{children:["For ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/playwright",target:"_blank",rel:"noopener",children:(0,n.jsx)(t.code,{children:"playwright"})}),", please see ",(0,n.jsxs)(t.a,{href:"https://www.npmjs.com/package/playwright-extra#plugins",target:"_blank",rel:"noopener",children:[(0,n.jsx)(t.code,{children:"playwright-extra"}),"s plugin list"]})," instead."]})]}),"\n",(0,n.jsxs)(t.p,{children:["In this example, we'll show you how to use the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/puppeteer-extra-plugin-stealth",target:"_blank",rel:"noopener",children:(0,n.jsx)(t.code,{children:"puppeteer-extra-plugin-stealth"})})," plugin\nto help you avoid bot detections when crawling your target website."]}),"\n",(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(i.Z,{value:"puppeteer",label:"Puppeteer & puppeteer-extra",default:!0,children:[(0,n.jsxs)(t.admonition,{title:"Before you begin",type:"info",children:[(0,n.jsxs)(t.p,{children:["Make sure you've installed the ",(0,n.jsx)(t.code,{children:"puppeteer-extra"})," and ",(0,n.jsx)(t.code,{children:"puppeteer-extra-plugin-stealth"})," packages via your preferred package manager"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install puppeteer-extra puppeteer-extra-plugin-stealth\n"})})]}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["To run this example on the Apify Platform, select the ",(0,n.jsx)(t.code,{children:"apify/actor-node-puppeteer-chrome"})," image for your Dockerfile."]})}),(0,n.jsx)(r.Z,{className:"language-js",title:"src/crawler.ts",type:"puppeteer",children:s})]}),(0,n.jsxs)(i.Z,{value:"playwright",label:"Playwright & playwright-extra",children:[(0,n.jsxs)(t.admonition,{title:"Before you begin",type:"info",children:[(0,n.jsxs)(t.p,{children:["Make sure you've installed the ",(0,n.jsx)(t.code,{children:"playwright-extra"})," and ",(0,n.jsx)(t.code,{children:"puppeteer-extra-plugin-stealth"})," packages via your preferred package manager"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install playwright-extra puppeteer-extra-plugin-stealth\n"})})]}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["To run this example on the Apify Platform, select the ",(0,n.jsx)(t.code,{children:"apify/actor-node-puppeteer-chrome"})," image for your Dockerfile."]})}),(0,n.jsx)(r.Z,{className:"language-js",title:"src/crawler.ts",type:"playwright",children:g})]})]})]})}function b(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(I,{...e})}):I(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>c});a(67294);var n=a(34334);const l={tabItem:"tabItem_Ymn6"};var r=a(85893);function c(e){var t=e.children,a=e.hidden,c=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,c),hidden:a,children:t})}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),l=a(34334),r=a(12466),c=a(70989),i=a(72389);const s={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function o(e){var t=e.className,a=e.block,n=e.selectedValue,c=e.selectValue,i=e.tabValues,o=[],u=(0,r.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=o.indexOf(t),l=i[a].value;l!==n&&(u(t),c(l))},p=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,l=o.indexOf(e.currentTarget)+1;a=null!=(n=o[l])?n:o[0];break;case"ArrowLeft":var r,c=o.indexOf(e.currentTarget)-1;a=null!=(r=o[c])?r:o[o.length-1]}null==(t=a)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t),children:i.map((function(e){var t=e.value,a=e.label,r=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return o.push(e)},onKeyDown:p,onClick:d},r,{className:(0,l.Z)("tabs__item",s.tabItem,null==r?void 0:r.className,{"tabs__item--active":n===t}),children:null!=a?a:t}),t)}))})}function u(e){var t=e.lazy,a=e.children,l=e.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var c=r.find((function(e){return e.props.value===l}));return c?(0,n.cloneElement)(c,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})}))})}function d(e){var t=(0,c.Y)(e);return(0,g.jsxs)("div",{className:(0,l.Z)("tabs-container",s.tabList),children:[(0,g.jsx)(o,Object.assign({},e,t)),(0,g.jsx)(u,Object.assign({},e,t))]})}function p(e){var t=(0,i.Z)();return(0,g.jsx)(d,Object.assign({},e,{children:(0,c.h)(e.children)}),String(t))}},70989:(e,t,a)=>{a.d(t,{Y:()=>p,h:()=>g});var n=a(67294),l=a(16550),r=a(20469),c=a(91980),i=a(67392),s=a(50012);function g(e){var t,a;return null!=(t=null==(a=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}function o(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return g(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(a);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function u(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,i=(0,l.k6)(),s=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:r});return[(0,c._X)(s),(0,n.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function p(e){var t,a,l,c,i=e.defaultValue,g=e.queryString,p=void 0!==g&&g,h=e.groupId,I=o(e),b=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var l=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:i,tabValues:I})})),m=b[0],C=b[1],x=d({queryString:p,groupId:h}),y=x[0],G=x[1],Z=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),a=(0,s.Nk)(t),l=a[0],c=a[1],[l,(0,n.useCallback)((function(e){t&&c.set(e)}),[t,c])]),X=Z[0],w=Z[1],B=function(){var e=null!=y?y:X;return u({value:e,tabValues:I})?e:null}();return(0,r.Z)((function(){B&&C(B)}),[B]),{selectedValue:m,selectValue:(0,n.useCallback)((function(e){if(!u({value:e,tabValues:I}))throw new Error("Can't select invalid tab value="+e);C(e),G(e),w(e)}),[G,w,I]),tabValues:I}}},14959:(e,t,a)=>{a.d(t,{Z:()=>g});a(67294);var n=a(39960),l=a(74477),r=a(52263),c=a(85893),i=a(50643).version.split("."),s=[i[0],i[1]].join(".");const g=function(e){var t=e.to,a=e.children,i=(0,l.E)();return(0,r.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===s?(0,c.jsx)(n.default,{to:"/api/"+t,children:a}):(0,c.jsx)(n.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t,children:a})}},15316:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(63366),l=(a(67294),a(90512)),r=a(93e3),c=a(39960);const i={button:"button_YBBj",container:"container_TGAW"};var s=a(85893),g=["children","actor","hash","type"],o={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const u=function(e){var t,a=e.children,u=e.actor,d=e.hash,p=e.type,h=(0,n.Z)(e,g);if(d=null!=(t=d)?t:a.hash,!a.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!d)return(0,s.jsx)(r.default,Object.assign({},h,{children:a.code}));var I="https://console.apify.com/actors/"+(null!=u?u:o[null!=p?p:"playwright"])+"?runConfig="+d+"&asrc=run_on_apify";return(0,s.jsxs)("div",{className:(0,l.Z)(i.container,"runnable-code-block"),children:[(0,s.jsxs)(c.default,{href:I,className:i.button,rel:"follow",children:["Run on",(0,s.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,s.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,s.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,s.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,s.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,s.jsx)(r.default,Object.assign({},h,{className:(0,l.Z)(i.codeBlock,"code-block",null!=h.title?"has-title":"no-title"),children:a.code}))]})}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>c});var n=a(67294);const l={},r=n.createContext(l);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),n.createElement(r.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);