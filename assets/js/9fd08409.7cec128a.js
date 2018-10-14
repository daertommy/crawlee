"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22259],{10602:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>p,metadata:()=>f,toc:()=>w});var t=n(85893),a=n(11151),l=n(65488),i=n(85162),s=n(93e3),o=n(14959);const u="import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",c="import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",d="import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",p={id:"crawl-all-links",title:"Crawl all links on a website"},h=void 0,f={id:"examples/crawl-all-links",title:"Crawl all links on a website",description:"This example uses the enqueueLinks() method to add new links to the RequestQueue",source:"@site/versioned_docs/version-3.2/examples/crawl_all_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-all-links",permalink:"/docs/3.2/examples/crawl-all-links",draft:!1,unlisted:!1,tags:[],version:"3.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"crawl-all-links",title:"Crawl all links on a website"},sidebar:"docs",previous:{title:"Cheerio crawler",permalink:"/docs/3.2/examples/cheerio-crawler"},next:{title:"Crawl multiple URLs",permalink:"/docs/3.2/examples/crawl-multiple-urls"}},m={},w=[];function v(e){const r={a:"a",admonition:"admonition",code:"code",p:"p",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["This example uses the ",(0,t.jsx)(r.code,{children:"enqueueLinks()"})," method to add new links to the ",(0,t.jsx)(r.code,{children:"RequestQueue"}),"\nas the crawler navigates from page to page."]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["If no options are given, by default the method will only add links that are under the same subdomain. This behavior can be controlled with the ",(0,t.jsx)(o.Z,{to:"core/interface/EnqueueLinksOptions#strategy",children:(0,t.jsx)(r.code,{children:"strategy"})}),"\noption. You can find more info about this option in the ",(0,t.jsx)(r.a,{href:"./crawl-relative-links",children:(0,t.jsx)(r.code,{children:"Crawl relative links"})})," examples."]})}),"\n",(0,t.jsxs)(l.Z,{groupId:"crawler-type",children:[(0,t.jsx)(i.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,children:(0,t.jsx)(s.default,{className:"language-js",children:u})}),(0,t.jsxs)(i.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",children:[(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["To run this example on the Apify Platform, select the ",(0,t.jsx)(r.code,{children:"apify/actor-node-puppeteer-chrome"})," image for your Dockerfile."]})}),(0,t.jsx)(s.default,{className:"language-js",children:c})]}),(0,t.jsxs)(i.Z,{value:"playwright_crawler",label:"Playwright Crawler",children:[(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["To run this example on the Apify Platform, select the ",(0,t.jsx)(r.code,{children:"apify/actor-node-playwright-chrome"})," image for your Dockerfile."]})}),(0,t.jsx)(s.default,{className:"language-js",children:d})]})]})]})}function b(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>i});n(67294);var t=n(34334);const a={tabItem:"tabItem_Ymn6"};var l=n(85893);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:n,children:r})}},65488:(e,r,n)=>{n.d(r,{Z:()=>h});var t=n(67294),a=n(34334),l=n(12466),i=n(70989),s=n(72389);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var u=n(85893);function c(e){var r=e.className,n=e.block,t=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var r=e.currentTarget,n=c.indexOf(r),a=s[n].value;a!==t&&(d(r),i(a))},h=function(e){var r,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var t,a=c.indexOf(e.currentTarget)+1;n=null!=(t=c[a])?t:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;n=null!=(l=c[i])?l:c[c.length-1]}null==(r=n)||r.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:s.map((function(e){var r=e.value,n=e.label,l=e.attributes;return(0,u.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return c.push(e)},onKeyDown:h,onClick:p},l,{className:(0,a.Z)("tabs__item",o.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function d(e){var r=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=l.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:l.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function p(e){var r=(0,i.Y)(e);return(0,u.jsxs)("div",{className:(0,a.Z)("tabs-container",o.tabList),children:[(0,u.jsx)(c,Object.assign({},e,r)),(0,u.jsx)(d,Object.assign({},e,r))]})}function h(e){var r=(0,s.Z)();return(0,u.jsx)(p,Object.assign({},e,{children:(0,i.h)(e.children)}),String(r))}},70989:(e,r,n)=>{n.d(r,{Y:()=>h,h:()=>u});var t=n(67294),a=n(16550),l=n(20469),i=n(91980),s=n(67392),o=n(50012);function u(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function c(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return u(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,s.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function d(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function p(e){var r=e.queryString,n=void 0!==r&&r,l=e.groupId,s=(0,a.k6)(),o=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:l});return[(0,i._X)(o),(0,t.useCallback)((function(e){if(o){var r=new URLSearchParams(s.location.search);r.set(o,e),s.replace(Object.assign({},s.location,{search:r.toString()}))}}),[o,s])]}function h(e){var r,n,a,i,s=e.defaultValue,u=e.queryString,h=void 0!==u&&u,f=e.groupId,m=c(e),w=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),v=w[0],b=w[1],g=p({queryString:h,groupId:f}),y=g[0],x=g[1],j=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),n=(0,o.Nk)(r),a=n[0],i=n[1],[a,(0,t.useCallback)((function(e){r&&i.set(e)}),[r,i])]),k=j[0],q=j[1],C=function(){var e=null!=y?y:k;return d({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){C&&b(C)}),[C]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),q(e)}),[x,q,m]),tabValues:m}}},14959:(e,r,n)=>{n.d(r,{Z:()=>u});n(67294);var t=n(39960),a=n(74477),l=n(52263),i=n(85893),s=n(50643).version.split("."),o=[s[0],s[1]].join(".");const u=function(e){var r=e.to,n=e.children,s=(0,a.E)();return(0,l.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===o?(0,i.jsx)(t.default,{to:"/api/"+r,children:n}):(0,i.jsx)(t.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+r,children:n})}},11151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>i});var t=n(67294);const a={},l=t.createContext(a);function i(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:r},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);