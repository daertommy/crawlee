"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22197],{46046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>w,frontMatter:()=>h,metadata:()=>u,toc:()=>g});var r=n(85893),a=n(11151),o=(n(14959),n(65488)),s=n(85162),i=n(93e3);const l="// Instead of CheerioCrawler let's use Playwright\n// to be able to render JavaScript.\nimport { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page }) => {\n        // Wait for the actor cards to render.\n        await page.waitForSelector('.collection-block-item');\n        // Execute a function in the browser which targets\n        // the actor card elements and allows their manipulation.\n        const categoryTexts = await page.$$eval('.collection-block-item', (els) => {\n            // Extract text content from the actor cards\n            return els.map((el) => el.textContent);\n        });\n        categoryTexts.forEach((text, i) => {\n            console.log(`CATEGORY_${i + 1}: ${text}\\n`);\n        });\n    },\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n",c="// Instead of CheerioCrawler let's use Playwright\n// to be able to render JavaScript.\nimport { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, parseWithCheerio }) => {\n        // Wait for the actor cards to render.\n        await page.waitForSelector('.collection-block-item');\n        // Extract the page's HTML from browser\n        // and parse it with Cheerio.\n        const $ = await parseWithCheerio();\n        // Use familiar Cheerio syntax to\n        // select all the actor cards.\n        $('.collection-block-item').each((i, el) => {\n            const text = $(el).text();\n            console.log(`CATEGORY_${i + 1}: ${text}\\n`);\n        });\n    },\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n",h={id:"real-world-project",title:"Getting some real-world data",sidebar_label:"Real-world project",description:"Your first steps into the world of scraping with Crawlee"},d=void 0,u={id:"introduction/real-world-project",title:"Getting some real-world data",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.4/introduction/04-real-world-project.mdx",sourceDirName:"introduction",slug:"/introduction/real-world-project",permalink:"/docs/3.4/introduction/real-world-project",draft:!1,unlisted:!1,tags:[],version:"3.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:4,frontMatter:{id:"real-world-project",title:"Getting some real-world data",sidebar_label:"Real-world project",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Adding more URLs",permalink:"/docs/3.4/introduction/adding-urls"},next:{title:"Crawling",permalink:"/docs/3.4/introduction/crawling"}},p={},g=[{value:"Making a production-grade crawler",id:"making-a-production-grade-crawler",level:2},{value:"Drawing a plan",id:"drawing-a-plan",level:2},{value:"Choosing the data you need",id:"choosing-the-data-you-need",level:2},{value:"The start URL(s)",id:"the-start-urls",level:3},{value:"Exploring the page",id:"exploring-the-page",level:2},{value:"Categories and sorting",id:"categories-and-sorting",level:3},{value:"Pagination",id:"pagination",level:3},{value:"The crawling strategy",id:"the-crawling-strategy",level:2},{value:"Sanity check",id:"sanity-check",level:2},{value:"DevTools - the scraper&#39;s toolbox",id:"devtools---the-scrapers-toolbox",level:2},{value:"Selecting elements",id:"selecting-elements",level:2},{value:"Next lesson",id:"next-lesson",level:2}];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Hey, guys, you know, it's cool that we can scrape the ",(0,r.jsx)(t.code,{children:"<title>"})," elements of web pages, but that's not very useful. Can we finally scrape some real data and save it somewhere in a machine-readable format? Because that's why I started reading this tutorial in the first place!"]})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"We hear you, young padawan! First, learn how to crawl, you must. Only then, walk through data, you can!"}),"\n",(0,r.jsx)(t.h2,{id:"making-a-production-grade-crawler",children:"Making a production-grade crawler"}),"\n",(0,r.jsxs)(t.p,{children:["Making a production-grade crawler is not difficult, but there are many pitfalls of scraping that can catch you off guard. So for the real world project you'll learn how to scrape an ",(0,r.jsx)(t.a,{href:"https://warehouse-theme-metal.myshopify.com/collections",target:"_blank",rel:"noopener",children:"example Warehouse Store"})," instead of the Crawlee website. It contains a list of products of different categories, and each product has its own detail page."]}),"\n",(0,r.jsx)(t.p,{children:"The website requires JavaScript rendering, which allows us to showcase more features of Crawlee. We've also added some helpful tips that prepare you for the real-world issues that you will surely encounter when scraping at scale."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you're not interested in crawling theory, feel free to ",(0,r.jsx)(t.a,{href:"./crawling",children:"skip to the next lesson"})," and get right back to coding."]})}),"\n",(0,r.jsx)(t.h2,{id:"drawing-a-plan",children:"Drawing a plan"}),"\n",(0,r.jsx)(t.p,{children:"Sometimes scraping is really straightforward, but most of the time, it really pays off to do a bit of research first and try to answer some of these questions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"How is the website structured?"}),"\n",(0,r.jsxs)(t.li,{children:['Can I scrape it only with HTTP requests (read "with ',(0,r.jsx)(t.code,{children:"CheerioCrawler"}),'")?']}),"\n",(0,r.jsx)(t.li,{children:"Do I need a headless browser for something?"}),"\n",(0,r.jsx)(t.li,{children:"Are there any anti-scraping protections in place?"}),"\n",(0,r.jsx)(t.li,{children:"Do I need to parse the HTML or can I get the data otherwise, such as directly from the website's API?"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For the purposes of this tutorial, let's assume that the website cannot be scraped with ",(0,r.jsx)(t.code,{children:"CheerioCrawler"}),". It actually can, but we would have to dive a bit deeper than this introductory guide allows. So for now we will make things easier for you, scrape it with ",(0,r.jsx)(t.code,{children:"PlaywrightCrawler"}),", and you'll learn about headless browsers in the process."]}),"\n",(0,r.jsx)(t.h2,{id:"choosing-the-data-you-need",children:"Choosing the data you need"}),"\n",(0,r.jsxs)(t.p,{children:["A good first step is to figure out what data you want to scrape and where to find it. For the time being, let's just agree that we want to scrape all products from all categories available on the ",(0,r.jsx)(t.a,{href:"https://warehouse-theme-metal.myshopify.com/collections",target:"_blank",rel:"noopener",children:"All collections page of the store"})," and for each product we want to get its:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"URL"}),"\n",(0,r.jsx)(t.li,{children:"Manufacturer"}),"\n",(0,r.jsx)(t.li,{children:"SKU"}),"\n",(0,r.jsx)(t.li,{children:"Title"}),"\n",(0,r.jsx)(t.li,{children:"Current price"}),"\n",(0,r.jsx)(t.li,{children:"Stock available"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"You will notice that some information is available directly on the list page, but for details such as \"SKU\" we'll also need to open the product's detail page."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"data to scrape",src:n(68991).Z+"",title:"Overview of data to be scraped.",width:"1798",height:"1165"})}),"\n",(0,r.jsx)(t.h3,{id:"the-start-urls",children:"The start URL(s)"}),"\n",(0,r.jsxs)(t.p,{children:["This is where you start your crawl. It's convenient to start as close to the data as possible. For example, it wouldn't make much sense to start at ",(0,r.jsx)(t.code,{children:"https://warehouse-theme-metal.myshopify.com/"})," and look for a ",(0,r.jsx)(t.code,{children:"collections"})," link there, when we already know that everything we want to extract can be found at the ",(0,r.jsx)(t.code,{children:"https://warehouse-theme-metal.myshopify.com/collections"})," page."]}),"\n",(0,r.jsx)(t.h2,{id:"exploring-the-page",children:"Exploring the page"}),"\n",(0,r.jsxs)(t.p,{children:["Let's take a look at the ",(0,r.jsx)(t.code,{children:"https://warehouse-theme-metal.myshopify.com/collections"})," page more carefully. There are some ",(0,r.jsx)(t.strong,{children:"categories"})," on the page, and each category has a list of ",(0,r.jsx)(t.strong,{children:"items"}),". On some category pages, at the bottom you will notice there are links to the next pages of results. This is usually called ",(0,r.jsx)(t.strong,{children:"the pagination"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"categories-and-sorting",children:"Categories and sorting"}),"\n",(0,r.jsxs)(t.p,{children:["When you click the categories, you'll see that they load a page of products filtered by that category. By going through a few categories and observing the behavior, we can also observe that we can sort by different conditions (such as ",(0,r.jsx)(t.code,{children:"Best selling"}),", or ",(0,r.jsx)(t.code,{children:"Price, low to high"}),"), but for this example, we will not be looking into those."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Be careful, because on some websites, like ",(0,r.jsx)(t.a,{href:"https://amazon.com",target:"_blank",rel:"noopener",children:"amazon.com"}),", this is not true and the sum of products in categories is actually larger than what's available without filters. Learn more in our ",(0,r.jsx)(t.a,{href:"https://docs.apify.com/tutorials/scrape-paginated-sites",target:"_blank",rel:"noopener",children:"tutorial on scraping websites with limited pagination"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"pagination",children:"Pagination"}),"\n",(0,r.jsx)(t.p,{children:"The pagination of the demo Warehouse Store is simple enough. When switching between pages, you will see that the URL changes to:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"https://warehouse-theme-metal.myshopify.com/collections/headphones?page=2\n"})}),"\n",(0,r.jsx)(t.p,{children:"Try clicking on the link to page 4. You'll see that the pagination links update and show more pages. But can you trust that this will include all pages and won't stop at some point?"}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"Similarly to the issue with filters explained above, the existence of pagination does not guarantee that you can simply paginate through all the results. Always test your assumptions about pagination. Otherwise, you might miss a chunk of results, and not even know about it."})}),"\n",(0,r.jsxs)(t.p,{children:["At the time of writing the ",(0,r.jsx)(t.code,{children:"Headphones"})," collection results counter showed 75 results - products. Quick count of products on one page of results makes 24. 6 rows times 4 products. This means that there are 4 pages of results."]}),"\n",(0,r.jsxs)(t.p,{children:["If you're not convinced, you can visit a page somewhere in the middle, like ",(0,r.jsx)(t.code,{children:"https://warehouse-theme-metal.myshopify.com/collections/headphones?page=2"})," and see how the pagination looks there."]}),"\n",(0,r.jsx)(t.h2,{id:"the-crawling-strategy",children:"The crawling strategy"}),"\n",(0,r.jsx)(t.p,{children:"Now that you know where to start and how to find all the Actor details, let's look at the crawling process."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Visit the store page containing the list of categories (our start URL)."}),"\n",(0,r.jsx)(t.li,{children:"Enqueue all links to all categories."}),"\n",(0,r.jsx)(t.li,{children:"Enqueue all product pages from the current page."}),"\n",(0,r.jsx)(t.li,{children:"Enqueue links to next pages of results."}),"\n",(0,r.jsxs)(t.li,{children:["Open the next page in queue.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"When it's a results list page, go to 2."}),"\n",(0,r.jsx)(t.li,{children:"When it's a product page, scrape the data."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Repeat until all results pages and all products have been processed."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"PlaywrightCrawler"})," will make sure to visit the pages for you, if you provide the correct requests, and you already know how to enqueue pages, so this should be fairly easy. Nevertheless, there are few more tricks that we'd like to showcase."]}),"\n",(0,r.jsx)(t.h2,{id:"sanity-check",children:"Sanity check"}),"\n",(0,r.jsx)(t.p,{children:"Let's check that everything is set up correctly before writing the scraping logic itself. You might realize that something in your previous analysis doesn't quite add up, or the website might not behave exactly as you expected."}),"\n",(0,r.jsxs)(t.p,{children:["The example below creates a new crawler that visits the start URL and prints the text content of all the categories on that page. When you run the code, you will see the ",(0,r.jsx)(t.em,{children:"very badly formatted"})," content of the individual category card."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"sanity-check",children:[(0,r.jsx)(s.Z,{value:"playwright",label:"Playwright",default:!0,children:(0,r.jsx)(i.default,{language:"js",title:"src/main.mjs",children:l})}),(0,r.jsx)(s.Z,{value:"playwright-with-cheerio",label:"Playwright with Cheerio",children:(0,r.jsx)(i.default,{language:"js",title:"src/main.mjs",children:c})})]}),"\n",(0,r.jsxs)(t.p,{children:["If you're wondering how to get that ",(0,r.jsx)(t.code,{children:".collection-block-item"})," selector. We'll explain it in the next chapter on DevTools."]}),"\n",(0,r.jsx)(t.h2,{id:"devtools---the-scrapers-toolbox",children:"DevTools - the scraper's toolbox"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"We'll use Chrome DevTools here, since it's the most common browser, but feel free to use any other, they're all very similar."})}),"\n",(0,r.jsxs)(t.p,{children:["Let's open DevTools by going to ",(0,r.jsx)(t.a,{href:"https://warehouse-theme-metal.myshopify.com/collections",target:"_blank",rel:"noopener",children:"https://warehouse-theme-metal.myshopify.com/collections"})," in Chrome and then right-clicking anywhere in the page and selecting ",(0,r.jsx)(t.strong,{children:"Inspect"}),", or by pressing ",(0,r.jsx)(t.strong,{children:"F12"})," or whatever your system prefers. With DevTools, you can inspect or manipulate any aspect of the currently open web page. You can learn more about DevTools in their ",(0,r.jsx)(t.a,{href:"https://developer.chrome.com/docs/devtools/",target:"_blank",rel:"noopener",children:"official documentation"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"selecting-elements",children:"Selecting elements"}),"\n",(0,r.jsxs)(t.p,{children:["In the DevTools, choose the ",(0,r.jsx)(t.strong,{children:"Select an element"})," tool and try hovering over one of the Actor cards."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"select an element",src:n(67321).Z+"",title:"Finding the select an element tool.",width:"1332",height:"600"})}),"\n",(0,r.jsx)(t.p,{children:"You'll see that you can select different elements inside the card. Instead, select the whole card, not just some of its contents, such as its title or description."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"selected element",src:n(45775).Z+"",title:"Selecting an element by hovering over it.",width:"4030",height:"752"})}),"\n",(0,r.jsxs)(t.p,{children:["Selecting an element will highlight it in the DevTools HTML inspector. When carefully look at the elements, you'll see that there are some ",(0,r.jsx)(t.strong,{children:"classes"})," attached to the different HTML elements. Those are called ",(0,r.jsx)(t.strong,{children:"CSS classes"}),", and we can make a use of them in scraping."]}),"\n",(0,r.jsxs)(t.p,{children:["Conversely, by hovering over elements in the HTML inspector, you will see them highlight on the page. Inspect the page's structure around the collection card. You'll see that all the card's data is displayed in an ",(0,r.jsx)(t.code,{children:"<a>"})," element with a ",(0,r.jsx)(t.code,{children:"class"})," attribute that includes ",(0,r.jsx)(t.strong,{children:"collection-block-item"}),". It should now make sense how we got that ",(0,r.jsx)(t.code,{children:".collection-block-item"})," selector. It's just a way to find all elements that are annotated with the ",(0,r.jsx)(t.code,{children:"collection-block-item"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["It's always a good idea to double-check that you're not getting any unwanted elements with this class. To do that, go into the ",(0,r.jsx)(t.strong,{children:"Console"})," tab of DevTools and run:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"document.querySelectorAll('.collection-block-item');\n"})}),"\n",(0,r.jsx)(t.p,{children:"You will see that only the 31 collection cards will be returned, and nothing else."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["CSS selectors and DevTools are quite a big topic. If you want to learn more, visit the ",(0,r.jsx)(t.a,{href:"https://developers.apify.com/academy/web-scraping-for-beginners",target:"_blank",rel:"noopener",children:"Web scraping for beginners course"})," in the Apify Academy. ",(0,r.jsx)(t.strong,{children:"It's free and open-source"})," \u2764\ufe0f."]})}),"\n",(0,r.jsx)(t.h2,{id:"next-lesson",children:"Next lesson"}),"\n",(0,r.jsx)(t.p,{children:"In the next lesson, we will crawl the whole store, including all the listing pages and all the product detail pages."})]})}function w(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(34334);const a={tabItem:"tabItem_Ymn6"};var o=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(67294),a=n(34334),o=n(12466),s=n(70989),i=n(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=n(85893);function h(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,h=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=h.indexOf(t),a=i[n].value;a!==r&&(d(t),s(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=h.indexOf(e.currentTarget)+1;n=null!=(r=h[a])?r:h[0];break;case"ArrowLeft":var o,s=h.indexOf(e.currentTarget)-1;n=null!=(o=h[s])?o:h[h.length-1]}null==(t=n)||t.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,c.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return h.push(e)},onKeyDown:p,onClick:u},o,{className:(0,a.Z)("tabs__item",l.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function d(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=o.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function u(e){var t=(0,s.Y)(e);return(0,c.jsxs)("div",{className:(0,a.Z)("tabs-container",l.tabList),children:[(0,c.jsx)(h,Object.assign({},e,t)),(0,c.jsx)(d,Object.assign({},e,t))]})}function p(e){var t=(0,i.Z)();return(0,c.jsx)(u,Object.assign({},e,{children:(0,s.h)(e.children)}),String(t))}},70989:(e,t,n)=>{n.d(t,{Y:()=>p,h:()=>c});var r=n(67294),a=n(16550),o=n(20469),s=n(91980),i=n(67392),l=n(50012);function c(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return c(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function u(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,i=(0,a.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:o});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function p(e){var t,n,a,s,i=e.defaultValue,c=e.queryString,p=void 0!==c&&c,g=e.groupId,m=h(e),w=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),f=w[0],y=w[1],x=u({queryString:p,groupId:g}),b=x[0],j=x[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:g}.groupId),n=(0,l.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=v[0],C=v[1],T=function(){var e=null!=b?b:k;return d({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){T&&y(T)}),[T]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);y(e),j(e),C(e)}),[j,C,m]),tabValues:m}}},14959:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var r=n(39960),a=n(74477),o=n(52263),s=n(85893),i=n(50643).version.split("."),l=[i[0],i[1]].join(".");const c=function(e){var t=e.to,n=e.children,i=(0,a.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?(0,s.jsx)(r.default,{to:"/api/"+t,children:n}):(0,s.jsx)(r.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t,children:n})}},68991:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scraping-practice-ed4e3a233c852ffa694b80371fed9d37.jpg"},67321:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/select-an-element-63e42331a0df1985c597ffc8ead02a0f.png"},45775:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/selected-element-652798a29828d5b1a4d893c2de7a0e75.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(67294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);