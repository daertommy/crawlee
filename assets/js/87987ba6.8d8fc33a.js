"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80155],{48001:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>w,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var s=a(85893),n=a(11151),r=a(93e3),o=a(14959);const i="import { Dataset, CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, body }) {\n        // Save data to default dataset\n        await Dataset.pushData({\n            url: request.url,\n            html: body,\n        });\n    },\n});\n\nawait crawler.addRequests([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n\n// Run the crawler\nawait crawler.run();\n",d={id:"add-data-to-dataset",title:"Add data to dataset"},c=void 0,l={id:"examples/add-data-to-dataset",title:"Add data to dataset",description:"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.",source:"@site/versioned_docs/version-3.4/examples/add_data_to_dataset.mdx",sourceDirName:"examples",slug:"/examples/add-data-to-dataset",permalink:"/docs/3.4/examples/add-data-to-dataset",draft:!1,unlisted:!1,tags:[],version:"3.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"add-data-to-dataset",title:"Add data to dataset"},sidebar:"docs",previous:{title:"Accept user input",permalink:"/docs/3.4/examples/accept-user-input"},next:{title:"Basic crawler",permalink:"/docs/3.4/examples/basic-crawler"}},p={},u=[];function m(e){const t={code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This example saves data to the default dataset. If the dataset doesn't exist, it will be created.\nYou can save data to custom datasets by using ",(0,s.jsx)(o.Z,{to:"core/class/Dataset#open",children:(0,s.jsx)(t.code,{children:"Dataset.open()"})})]}),"\n",(0,s.jsx)(r.default,{className:"language-js",children:i}),"\n",(0,s.jsx)(t.p,{children:"Each item in this dataset will be saved to its own file in the following directory:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"{PROJECT_FOLDER}/storage/datasets/default/\n"})})]})}function w(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},14959:(e,t,a)=>{a.d(t,{Z:()=>c});a(67294);var s=a(39960),n=a(74477),r=a(52263),o=a(85893),i=a(50643).version.split("."),d=[i[0],i[1]].join(".");const c=function(e){var t=e.to,a=e.children,i=(0,n.E)();return(0,r.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===d?(0,o.jsx)(s.default,{to:"/api/"+t,children:a}):(0,o.jsx)(s.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t,children:a})}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var s=a(67294);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);