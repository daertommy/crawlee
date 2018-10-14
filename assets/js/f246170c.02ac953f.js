"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59921],{13497:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(85893),n=r(11151),i=r(15316),c=r(14959);const s={code:"import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.url}: ${title}`);\n\n        await enqueueLinks({\n            globs: ['http?(s)://www.iana.org/**'],\n        });\n    },\n    maxRequestsPerCrawl: 10,\n});\n\nawait crawler.addRequests(['https://www.iana.org/']);\n\nawait crawler.run();\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IFB1cHBldGVlckNyYXdsZXIgfSBmcm9tICdjcmF3bGVlJztcXG5cXG5jb25zdCBjcmF3bGVyID0gbmV3IFB1cHBldGVlckNyYXdsZXIoe1xcbiAgICBhc3luYyByZXF1ZXN0SGFuZGxlcih7IHJlcXVlc3QsIHBhZ2UsIGVucXVldWVMaW5rcywgbG9nIH0pIHtcXG4gICAgICAgIGNvbnN0IHRpdGxlID0gYXdhaXQgcGFnZS50aXRsZSgpO1xcbiAgICAgICAgbG9nLmluZm8oYFRpdGxlIG9mICR7cmVxdWVzdC51cmx9OiAke3RpdGxlfWApO1xcblxcbiAgICAgICAgYXdhaXQgZW5xdWV1ZUxpbmtzKHtcXG4gICAgICAgICAgICBnbG9iczogWydodHRwPyhzKTovL3d3dy5pYW5hLm9yZy8qKiddLFxcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuICAgIG1heFJlcXVlc3RzUGVyQ3Jhd2w6IDEwLFxcbn0pO1xcblxcbmF3YWl0IGNyYXdsZXIuYWRkUmVxdWVzdHMoWydodHRwczovL3d3dy5pYW5hLm9yZy8nXSk7XFxuXFxuYXdhaXQgY3Jhd2xlci5ydW4oKTtcXG5cIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5Ijo0MDk2LCJ0aW1lb3V0IjoxODB9fQ.WX9qygDqmffD0uvnNe4zaDatAVvSiCm1XcrSGPwvh6g"},l={id:"puppeteer-recursive-crawl",title:"Puppeteer recursive crawl"},o=void 0,p={id:"examples/puppeteer-recursive-crawl",title:"Puppeteer recursive crawl",description:"Run the following example to perform a recursive crawl of a website using PuppeteerCrawler.",source:"@site/../docs/examples/puppeteer_recursive_crawl.mdx",sourceDirName:"examples",slug:"/examples/puppeteer-recursive-crawl",permalink:"/docs/next/examples/puppeteer-recursive-crawl",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"puppeteer-recursive-crawl",title:"Puppeteer recursive crawl"},sidebar:"docs",previous:{title:"Puppeteer crawler",permalink:"/docs/next/examples/puppeteer-crawler"},next:{title:"Skipping navigations for certain requests",permalink:"/docs/next/examples/skip-navigation"}},d={},u=[];function h(e){const t={admonition:"admonition",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Run the following example to perform a recursive crawl of a website using ",(0,a.jsx)(c.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",children:(0,a.jsx)(t.code,{children:"PuppeteerCrawler"})}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["To run this example on the Apify Platform, select the ",(0,a.jsx)(t.code,{children:"apify/actor-node-puppeteer-chrome"})," image for your Dockerfile."]})}),"\n",(0,a.jsx)(i.Z,{className:"language-js",type:"puppeteer",children:s})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},14959:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var a=r(39960),n=r(74477),i=r(52263),c=r(85893),s=r(50643).version.split("."),l=[s[0],s[1]].join(".");const o=function(e){var t=e.to,r=e.children,s=(0,n.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===l?(0,c.jsx)(a.default,{to:"/api/"+t,children:r}):(0,c.jsx)(a.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t,children:r})}},15316:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(63366),n=(r(67294),r(90512)),i=r(93e3),c=r(39960);const s={button:"button_YBBj",container:"container_TGAW"};var l=r(85893),o=["children","actor","hash","type"],p={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const d=function(e){var t,r=e.children,d=e.actor,u=e.hash,h=e.type,m=(0,a.Z)(e,o);if(u=null!=(t=u)?t:r.hash,!r.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!u)return(0,l.jsx)(i.default,Object.assign({},m,{children:r.code}));var w="https://console.apify.com/actors/"+(null!=d?d:p[null!=h?h:"playwright"])+"?runConfig="+u+"&asrc=run_on_apify";return(0,l.jsxs)("div",{className:(0,n.Z)(s.container,"runnable-code-block"),children:[(0,l.jsxs)(c.default,{href:w,className:s.button,rel:"follow",children:["Run on",(0,l.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,l.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,l.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,l.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,l.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,l.jsx)(i.default,Object.assign({},m,{className:(0,n.Z)(s.codeBlock,"code-block",null!=m.title?"has-title":"no-title"),children:r.code}))]})}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>c});var a=r(67294);const n={},i=a.createContext(n);function c(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(i.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);