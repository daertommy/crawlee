"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95620],{75761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(85893),r=a(11151),s=a(93e3);a(14959);const o="import { Dataset } from 'crawlee';\n\n// Retrieve or generate two items to be pushed\nconst data = [\n    {\n        id: 123,\n        name: 'foo',\n    },\n    {\n        id: 456,\n        name: 'bar',\n    },\n];\n\n// Push the two items to the default dataset\nawait Dataset.pushData(data);\n\n// Export the entirety of the dataset to a single file in\n// a key-value store named \"my-data\" under the key \"OUTPUT\"\nawait Dataset.exportToCSV('OUTPUT', { toKVS: 'my-data' });\n",i={id:"export-entire-dataset",title:"Export entire dataset to one file"},p=void 0,d={id:"examples/export-entire-dataset",title:"Export entire dataset to one file",description:'This Dataset example uses the exportToValue function to export the entire default dataset to a single CSV file into a key-value store named "my-data".',source:"@site/versioned_docs/version-3.3/examples/export_entire_dataset.mdx",sourceDirName:"examples",slug:"/examples/export-entire-dataset",permalink:"/docs/3.3/examples/export-entire-dataset",draft:!1,unlisted:!1,tags:[],version:"3.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"export-entire-dataset",title:"Export entire dataset to one file"},sidebar:"docs",previous:{title:"Using puppeteer-extra and playwright-extra",permalink:"/docs/3.3/examples/crawler-plugins/"},next:{title:"Forms",permalink:"/docs/3.3/examples/forms"}},l={},c=[];function u(e){const t={code:"code",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This ",(0,n.jsx)(t.code,{children:"Dataset"})," example uses the ",(0,n.jsx)(t.code,{children:"exportToValue"}),' function to export the entire default dataset to a single CSV file into a key-value store named "my-data".']}),"\n",(0,n.jsx)(s.default,{className:"language-js",children:o})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},14959:(e,t,a)=>{a.d(t,{Z:()=>d});a(67294);var n=a(39960),r=a(74477),s=a(52263),o=a(85893),i=a(50643).version.split("."),p=[i[0],i[1]].join(".");const d=function(e){var t=e.to,a=e.children,i=(0,r.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===p?(0,o.jsx)(n.default,{to:"/api/"+t,children:a}):(0,o.jsx)(n.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t,children:a})}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var n=a(67294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);