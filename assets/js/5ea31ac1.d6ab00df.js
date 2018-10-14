"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17577],{69503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(85893),l=t(11151);const i={id:"crawling",title:"Crawling the Store",sidebar_label:"Crawling",description:"Your first steps into the world of scraping with Crawlee"},a=void 0,s={id:"introduction/crawling",title:"Crawling the Store",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.6/introduction/05-crawling.mdx",sourceDirName:"introduction",slug:"/introduction/crawling",permalink:"/docs/introduction/crawling",draft:!1,unlisted:!1,tags:[],version:"3.6",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:5,frontMatter:{id:"crawling",title:"Crawling the Store",sidebar_label:"Crawling",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Real-world project",permalink:"/docs/introduction/real-world-project"},next:{title:"Scraping",permalink:"/docs/introduction/scraping"}},r={},c=[{value:"Crawling the listing pages",id:"crawling-the-listing-pages",level:2},{value:"The <code>selector</code> parameter of <code>enqueueLinks()</code>",id:"the-selector-parameter-of-enqueuelinks",level:3},{value:"The <code>label</code> of <code>enqueueLinks()</code>",id:"the-label-of-enqueuelinks",level:3},{value:"Crawling the detail pages",id:"crawling-the-detail-pages",level:2},{value:"Next lesson",id:"next-lesson",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["To crawl the whole ",(0,o.jsx)(n.a,{href:"https://warehouse-theme-metal.myshopify.com/collections",target:"_blank",rel:"noopener",children:"example Warehouse Store"})," and find all the data, you first need to visit all the pages with products - going through all categories available and also all the product detail pages."]}),"\n",(0,o.jsx)(n.h2,{id:"crawling-the-listing-pages",children:"Crawling the listing pages"}),"\n",(0,o.jsxs)(n.p,{children:["In previous lessons, you used the ",(0,o.jsx)(n.code,{children:"enqueueLinks()"})," function like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"await enqueueLinks();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["While useful in that scenario, you need something different now. Instead of finding all the ",(0,o.jsx)(n.code,{children:'<a href="..">'})," elements with links to the same hostname, you need to find only the specific ones that will take your crawler to the next page of results. Otherwise, the crawler will visit a lot of other pages that you're not interested in. Using the power of DevTools and yet another ",(0,o.jsx)(n.code,{children:"enqueueLinks()"})," parameter, this becomes fairly easy."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        console.log(`Processing: ${request.url}`);\n        // Wait for the category cards to render,\n        // otherwise enqueueLinks wouldn't enqueue anything.\n        await page.waitForSelector('.collection-block-item');\n\n        // Add links to the queue, but only from\n        // elements matching the provided selector.\n        await enqueueLinks({\n            selector: '.collection-block-item',\n            label: 'CATEGORY',\n        });\n    },\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The code should look pretty familiar to you. It's a very simple ",(0,o.jsx)(n.code,{children:"requestHandler"})," where we log the currently processed URL to the console and enqueue more links. But there are also a few new, interesting additions. Let's break it down."]}),"\n",(0,o.jsxs)(n.h3,{id:"the-selector-parameter-of-enqueuelinks",children:["The ",(0,o.jsx)(n.code,{children:"selector"})," parameter of ",(0,o.jsx)(n.code,{children:"enqueueLinks()"})]}),"\n",(0,o.jsxs)(n.p,{children:["When you previously used ",(0,o.jsx)(n.code,{children:"enqueueLinks()"}),", you were not providing any ",(0,o.jsx)(n.code,{children:"selector"})," parameter, and it was fine, because you wanted to use the default value, which is ",(0,o.jsx)(n.code,{children:"a"})," - finds all ",(0,o.jsx)(n.code,{children:"<a>"})," elements. But now, you need to be more specific. There are multiple ",(0,o.jsx)(n.code,{children:"<a>"})," links on the ",(0,o.jsx)(n.code,{children:"Categories"})," page, and you're only interested in those that will take your crawler to the available list of results. Using the DevTools, you'll find that you can select the links you need using the ",(0,o.jsx)(n.code,{children:".collection-block-item"})," selector, which selects all the elements that have the ",(0,o.jsx)(n.code,{children:"class=collection-block-item"})," attribute."]}),"\n",(0,o.jsxs)(n.h3,{id:"the-label-of-enqueuelinks",children:["The ",(0,o.jsx)(n.code,{children:"label"})," of ",(0,o.jsx)(n.code,{children:"enqueueLinks()"})]}),"\n",(0,o.jsxs)(n.p,{children:["You will see ",(0,o.jsx)(n.code,{children:"label"})," used often throughout Crawlee, as it's a convenient way of labelling a ",(0,o.jsx)(n.code,{children:"Request"})," instance for quick identification later. You can access it with ",(0,o.jsx)(n.code,{children:"request.label"})," and it's a ",(0,o.jsx)(n.code,{children:"string"}),". You can name your requests any way you want. Here, we used the label ",(0,o.jsx)(n.code,{children:"CATEGORY"})," to note that we're enqueueing pages that represent a category of products. The ",(0,o.jsx)(n.code,{children:"enqueueLinks()"})," function will add this label to all requests before enqueueing them to the ",(0,o.jsx)(n.code,{children:"RequestQueue"}),". Why this is useful will become obvious in a minute."]}),"\n",(0,o.jsx)(n.h2,{id:"crawling-the-detail-pages",children:"Crawling the detail pages"}),"\n",(0,o.jsx)(n.p,{children:"In a similar fashion, you need to collect all the URLs to the product detail pages, because only from there you can scrape all the data you need. The following code only repeats the concepts you already know for another set of links."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        console.log(`Processing: ${request.url}`);\n        if (request.label === 'DETAIL') {\n            // We're not doing anything with the details yet.\n        } else if (request.label === 'CATEGORY') {\n            // We are now on a category page. We can use this to paginate through and enqueue all products,\n            // as well as any subsequent pages we find\n\n            await page.waitForSelector('.product-item > a');\n            await enqueueLinks({\n                selector: '.product-item > a',\n                label: 'DETAIL', // <= note the different label\n            });\n\n            // Now we need to find the \"Next\" button and enqueue the next page of results (if it exists)\n            const nextButton = await page.$('a.pagination__next');\n            if (nextButton) {\n                await enqueueLinks({\n                    selector: 'a.pagination__next',\n                    label: 'CATEGORY', // <= note the same label\n                });\n            }\n        } else {\n            // This means we're on the start page, with no label.\n            // On this page, we just want to enqueue all the category pages.\n\n            await page.waitForSelector('.collection-block-item');\n            await enqueueLinks({\n                selector: '.collection-block-item',\n                label: 'CATEGORY',\n            });\n        }\n    },\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n"})}),"\n",(0,o.jsx)(n.p,{children:"The crawling code is now complete. When you run the code, you'll see the crawler visit all the listing URLs and all the detail URLs."}),"\n",(0,o.jsx)(n.h2,{id:"next-lesson",children:"Next lesson"}),"\n",(0,o.jsx)(n.p,{children:"This concludes the Crawling lesson, because you have taught the crawler to visit all the pages it needs. Let's continue with scraping data."})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(67294);const l={},i=o.createContext(l);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);