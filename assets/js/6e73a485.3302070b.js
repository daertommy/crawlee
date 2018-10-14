"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62957],{98792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>g,toc:()=>I});var a=n(85893),s=n(11151),i=n(15316),c=n(14959);const l={code:"import { PlaywrightCrawler, Dataset } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        console.log(`Processing: ${request.url}`);\n        if (request.label === 'DETAIL') {\n            const urlPart = request.url.split('/').slice(-1); // ['sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440']\n            const manufacturer = urlPart[0].split('-')[0]; // 'sennheiser'\n\n            const title = await page.locator('.product-meta h1').textContent();\n            const sku = await page.locator('span.product-meta__sku-number').textContent();\n\n            const priceElement = page\n                .locator('span.price')\n                .filter({\n                    hasText: '$',\n                })\n                .first();\n\n            const currentPriceString = await priceElement.textContent();\n            const rawPrice = currentPriceString.split('$')[1];\n            const price = Number(rawPrice.replaceAll(',', ''));\n\n            const inStockElement = page\n                .locator('span.product-form__inventory')\n                .filter({\n                    hasText: 'In stock',\n                })\n                .first();\n\n            const inStock = (await inStockElement.count()) > 0;\n\n            const results = {\n                url: request.url,\n                manufacturer,\n                title,\n                sku,\n                currentPrice: price,\n                availableInStock: inStock,\n            };\n\n            // highlight-next-line\n            await Dataset.pushData(results);\n        } else if (request.label === 'CATEGORY') {\n            // We are now on a category page. We can use this to paginate through and enqueue all products,\n            // as well as any subsequent pages we find\n\n            await page.waitForSelector('.product-item > a');\n            await enqueueLinks({\n                selector: '.product-item > a',\n                label: 'DETAIL', // <= note the different label\n            });\n\n            // Now we need to find the \"Next\" button and enqueue the next page of results (if it exists)\n            const nextButton = await page.$('a.pagination__next');\n            if (nextButton) {\n                await enqueueLinks({\n                    selector: 'a.pagination__next',\n                    label: 'CATEGORY', // <= note the same label\n                });\n            }\n        } else {\n            // This means we're on the start page, with no label.\n            // On this page, we just want to enqueue all the category pages.\n\n            await page.waitForSelector('.collection-block-item');\n            await enqueueLinks({\n                selector: '.collection-block-item',\n                label: 'CATEGORY',\n            });\n        }\n    },\n\n    // Let's limit our crawls to make our tests shorter and safer.\n    maxRequestsPerCrawl: 50,\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IFBsYXl3cmlnaHRDcmF3bGVyLCBEYXRhc2V0IH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuY29uc3QgY3Jhd2xlciA9IG5ldyBQbGF5d3JpZ2h0Q3Jhd2xlcih7XFxuICAgIHJlcXVlc3RIYW5kbGVyOiBhc3luYyAoeyBwYWdlLCByZXF1ZXN0LCBlbnF1ZXVlTGlua3MgfSkgPT4ge1xcbiAgICAgICAgY29uc29sZS5sb2coYFByb2Nlc3Npbmc6ICR7cmVxdWVzdC51cmx9YCk7XFxuICAgICAgICBpZiAocmVxdWVzdC5sYWJlbCA9PT0gJ0RFVEFJTCcpIHtcXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJ0ID0gcmVxdWVzdC51cmwuc3BsaXQoJy8nKS5zbGljZSgtMSk7IC8vIFsnc2VubmhlaXNlci1ta2UtNDQwLXByb2Zlc3Npb25hbC1zdGVyZW8tc2hvdGd1bi1taWNyb3Bob25lLW1rZS00NDAnXVxcbiAgICAgICAgICAgIGNvbnN0IG1hbnVmYWN0dXJlciA9IHVybFBhcnRbMF0uc3BsaXQoJy0nKVswXTsgLy8gJ3Nlbm5oZWlzZXInXFxuXFxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBhd2FpdCBwYWdlLmxvY2F0b3IoJy5wcm9kdWN0LW1ldGEgaDEnKS50ZXh0Q29udGVudCgpO1xcbiAgICAgICAgICAgIGNvbnN0IHNrdSA9IGF3YWl0IHBhZ2UubG9jYXRvcignc3Bhbi5wcm9kdWN0LW1ldGFfX3NrdS1udW1iZXInKS50ZXh0Q29udGVudCgpO1xcblxcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRWxlbWVudCA9IHBhZ2VcXG4gICAgICAgICAgICAgICAgLmxvY2F0b3IoJ3NwYW4ucHJpY2UnKVxcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHtcXG4gICAgICAgICAgICAgICAgICAgIGhhc1RleHQ6ICckJyxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLmZpcnN0KCk7XFxuXFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByaWNlU3RyaW5nID0gYXdhaXQgcHJpY2VFbGVtZW50LnRleHRDb250ZW50KCk7XFxuICAgICAgICAgICAgY29uc3QgcmF3UHJpY2UgPSBjdXJyZW50UHJpY2VTdHJpbmcuc3BsaXQoJyQnKVsxXTtcXG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IE51bWJlcihyYXdQcmljZS5yZXBsYWNlQWxsKCcsJywgJycpKTtcXG5cXG4gICAgICAgICAgICBjb25zdCBpblN0b2NrRWxlbWVudCA9IHBhZ2VcXG4gICAgICAgICAgICAgICAgLmxvY2F0b3IoJ3NwYW4ucHJvZHVjdC1mb3JtX19pbnZlbnRvcnknKVxcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHtcXG4gICAgICAgICAgICAgICAgICAgIGhhc1RleHQ6ICdJbiBzdG9jaycsXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC5maXJzdCgpO1xcblxcbiAgICAgICAgICAgIGNvbnN0IGluU3RvY2sgPSAoYXdhaXQgaW5TdG9ja0VsZW1lbnQuY291bnQoKSkgPiAwO1xcblxcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSB7XFxuICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdC51cmwsXFxuICAgICAgICAgICAgICAgIG1hbnVmYWN0dXJlcixcXG4gICAgICAgICAgICAgICAgdGl0bGUsXFxuICAgICAgICAgICAgICAgIHNrdSxcXG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlOiBwcmljZSxcXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlSW5TdG9jazogaW5TdG9jayxcXG4gICAgICAgICAgICB9O1xcblxcbiAgICAgICAgICAgIC8vIGhpZ2hsaWdodC1uZXh0LWxpbmVcXG4gICAgICAgICAgICBhd2FpdCBEYXRhc2V0LnB1c2hEYXRhKHJlc3VsdHMpO1xcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmxhYmVsID09PSAnQ0FURUdPUlknKSB7XFxuICAgICAgICAgICAgLy8gV2UgYXJlIG5vdyBvbiBhIGNhdGVnb3J5IHBhZ2UuIFdlIGNhbiB1c2UgdGhpcyB0byBwYWdpbmF0ZSB0aHJvdWdoIGFuZCBlbnF1ZXVlIGFsbCBwcm9kdWN0cyxcXG4gICAgICAgICAgICAvLyBhcyB3ZWxsIGFzIGFueSBzdWJzZXF1ZW50IHBhZ2VzIHdlIGZpbmRcXG5cXG4gICAgICAgICAgICBhd2FpdCBwYWdlLndhaXRGb3JTZWxlY3RvcignLnByb2R1Y3QtaXRlbSA-IGEnKTtcXG4gICAgICAgICAgICBhd2FpdCBlbnF1ZXVlTGlua3Moe1xcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5wcm9kdWN0LWl0ZW0gPiBhJyxcXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdERVRBSUwnLCAvLyA8PSBub3RlIHRoZSBkaWZmZXJlbnQgbGFiZWxcXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICAvLyBOb3cgd2UgbmVlZCB0byBmaW5kIHRoZSBcXFwiTmV4dFxcXCIgYnV0dG9uIGFuZCBlbnF1ZXVlIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cyAoaWYgaXQgZXhpc3RzKVxcbiAgICAgICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSBhd2FpdCBwYWdlLiQoJ2EucGFnaW5hdGlvbl9fbmV4dCcpO1xcbiAgICAgICAgICAgIGlmIChuZXh0QnV0dG9uKSB7XFxuICAgICAgICAgICAgICAgIGF3YWl0IGVucXVldWVMaW5rcyh7XFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EucGFnaW5hdGlvbl9fbmV4dCcsXFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NBVEVHT1JZJywgLy8gPD0gbm90ZSB0aGUgc2FtZSBsYWJlbFxcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIC8vIFRoaXMgbWVhbnMgd2UncmUgb24gdGhlIHN0YXJ0IHBhZ2UsIHdpdGggbm8gbGFiZWwuXFxuICAgICAgICAgICAgLy8gT24gdGhpcyBwYWdlLCB3ZSBqdXN0IHdhbnQgdG8gZW5xdWV1ZSBhbGwgdGhlIGNhdGVnb3J5IHBhZ2VzLlxcblxcbiAgICAgICAgICAgIGF3YWl0IHBhZ2Uud2FpdEZvclNlbGVjdG9yKCcuY29sbGVjdGlvbi1ibG9jay1pdGVtJyk7XFxuICAgICAgICAgICAgYXdhaXQgZW5xdWV1ZUxpbmtzKHtcXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuY29sbGVjdGlvbi1ibG9jay1pdGVtJyxcXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDQVRFR09SWScsXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9XFxuICAgIH0sXFxuXFxuICAgIC8vIExldCdzIGxpbWl0IG91ciBjcmF3bHMgdG8gbWFrZSBvdXIgdGVzdHMgc2hvcnRlciBhbmQgc2FmZXIuXFxuICAgIG1heFJlcXVlc3RzUGVyQ3Jhd2w6IDUwLFxcbn0pO1xcblxcbmF3YWl0IGNyYXdsZXIucnVuKFsnaHR0cHM6Ly93YXJlaG91c2UtdGhlbWUtbWV0YWwubXlzaG9waWZ5LmNvbS9jb2xsZWN0aW9ucyddKTtcXG5cIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5Ijo0MDk2LCJ0aW1lb3V0IjoxODB9fQ.TePUf8gRETWwYQcR6grSUw9tXO1h7TGQAYAqoebaWus"},o={id:"saving-data",title:"Saving data",description:"Your first steps into the world of scraping with Crawlee"},r=void 0,g={id:"introduction/saving-data",title:"Saving data",description:"Your first steps into the world of scraping with Crawlee",source:"@site/../docs/introduction/07-saving-data.mdx",sourceDirName:"introduction",slug:"/introduction/saving-data",permalink:"/docs/next/introduction/saving-data",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:7,frontMatter:{id:"saving-data",title:"Saving data",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Scraping",permalink:"/docs/next/introduction/scraping"},next:{title:"Refactoring",permalink:"/docs/next/introduction/refactoring"}},d={},I=[{value:"What&#39;s <code>Dataset.pushData()</code>",id:"whats-datasetpushdata",level:2},{value:"Finding saved data",id:"finding-saved-data",level:2},{value:"Next lesson",id:"next-lesson",level:2}];function C(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"A data extraction job would not be complete without saving the data for later use and processing. We've come to the final and most difficult part of this tutorial so make sure to pay attention very carefully!"}),"\n",(0,a.jsx)(t.p,{children:"First, add a new import to the top of the file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import { PlaywrightCrawler, Dataset } from 'crawlee';\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then, replace the ",(0,a.jsx)(t.code,{children:"console.log(results)"})," call with:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"await Dataset.pushData(results);\n"})}),"\n",(0,a.jsx)(t.p,{children:"and that's it. Unlike earlier, we are being serious now. That's it, we're done. The final code looks like this:"}),"\n",(0,a.jsx)(i.Z,{className:"language-js",type:"playwright",children:l}),"\n",(0,a.jsxs)(t.h2,{id:"whats-datasetpushdata",children:["What's ",(0,a.jsx)(t.code,{children:"Dataset.pushData()"})]}),"\n",(0,a.jsxs)(t.p,{children:["\u200b",(0,a.jsx)(c.Z,{to:"core/class/Dataset#pushData",children:(0,a.jsx)(t.code,{children:"Dataset.pushData()"})})," is a function that saves data to the default ",(0,a.jsx)(c.Z,{to:"core/class/Dataset",children:(0,a.jsx)(t.code,{children:"Dataset"})}),". ",(0,a.jsx)(t.code,{children:"Dataset"})," is a storage designed to hold data in a format similar to a table. Each time you call ",(0,a.jsx)(t.code,{children:"Dataset.pushData()"})," a new row in the table is created, with the property names serving as column titles. In the default configuration, the rows are represented as JSON files saved on your disk, but other storage systems can be plugged into Crawlee as well."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Each time you start Crawlee a default ",(0,a.jsx)(t.code,{children:"Dataset"})," is automatically created, so there's no need to initialize it or create an instance first. You can create as many datasets as you want and even give them names. For more details see the ",(0,a.jsx)(t.a,{href:"../guides/result-storage#dataset",children:"Result storage guide"})," and the ",(0,a.jsx)(c.Z,{to:"core/class/Dataset#open",children:(0,a.jsx)(t.code,{children:"Dataset.open()"})})," function."]})}),"\n",(0,a.jsx)(t.h2,{id:"finding-saved-data",children:"Finding saved data"}),"\n",(0,a.jsxs)(t.p,{children:["Unless you changed the configuration that Crawlee uses locally, which would suggest that you knew what you were doing, and you didn't need this tutorial anyway, you'll find your data in the ",(0,a.jsx)(t.code,{children:"storage"})," directory that Crawlee creates in the working directory of the running script:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"{PROJECT_FOLDER}/storage/datasets/default/\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The above folder will hold all your saved data in numbered files, as they were pushed into the dataset. Each file represents one invocation of ",(0,a.jsx)(t.code,{children:"Dataset.pushData()"})," or one table row."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["If you would like to store your data in a single big file, instead of many small ones, see the ",(0,a.jsx)(t.a,{href:"../guides/result-storage#key-value-store",children:"Result storage guide"})," for Key-value stores."]})}),"\n",(0,a.jsx)(t.h2,{id:"next-lesson",children:"Next lesson"}),"\n",(0,a.jsx)(t.p,{children:"In the next lesson, we will show you some improvements that you can add to your crawler code that will make it more readable and maintainable in the long run."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(C,{...e})}):C(e)}},14959:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var a=n(39960),s=n(74477),i=n(52263),c=n(85893),l=n(50643).version.split("."),o=[l[0],l[1]].join(".");const r=function(e){var t=e.to,n=e.children,l=(0,s.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===o?(0,c.jsx)(a.default,{to:"/api/"+t,children:n}):(0,c.jsx)(a.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t,children:n})}},15316:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(63366),s=(n(67294),n(90512)),i=n(93e3),c=n(39960);const l={button:"button_YBBj",container:"container_TGAW"};var o=n(85893),r=["children","actor","hash","type"],g={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const d=function(e){var t,n=e.children,d=e.actor,I=e.hash,C=e.type,h=(0,a.Z)(e,r);if(I=null!=(t=I)?t:n.hash,!n.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!I)return(0,o.jsx)(i.default,Object.assign({},h,{children:n.code}));var u="https://console.apify.com/actors/"+(null!=d?d:g[null!=C?C:"playwright"])+"?runConfig="+I+"&asrc=run_on_apify";return(0,o.jsxs)("div",{className:(0,s.Z)(l.container,"runnable-code-block"),children:[(0,o.jsxs)(c.default,{href:u,className:l.button,rel:"follow",children:["Run on",(0,o.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,o.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,o.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,o.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,o.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,o.jsx)(i.default,Object.assign({},h,{className:(0,s.Z)(l.codeBlock,"code-block",null!=h.title?"has-title":"no-title"),children:n.code}))]})}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>c});var a=n(67294);const s={},i=a.createContext(s);function c(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(i.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);