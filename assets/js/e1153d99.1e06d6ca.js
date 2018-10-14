"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69784],{92200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(85893),s=t(11151),i=t(59637);t(14959);const a={id:"setting-up",title:"Setting up",description:"Your first steps into the world of scraping with Crawlee"},o=void 0,l={id:"introduction/setting-up",title:"Setting up",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.6/introduction/01-setting-up.mdx",sourceDirName:"introduction",slug:"/introduction/setting-up",permalink:"/docs/introduction/setting-up",draft:!1,unlisted:!1,tags:[],version:"3.6",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:1,frontMatter:{id:"setting-up",title:"Setting up",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/introduction/"},next:{title:"First crawler",permalink:"/docs/introduction/first-crawler"}},c={},d=[{value:"Creating a new project",id:"creating-a-new-project",level:2},{value:"Running headful browsers",id:"running-headful-browsers",level:3},{value:"Next lesson",id:"next-lesson",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"To run Crawlee on your own computer, you need to meet the following pre-requisites first:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Have ",(0,r.jsx)(n.strong,{children:"Node.js version 16.0"})," or higher installed.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Visit ",(0,r.jsx)(n.a,{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener",children:"Node.js website"})," to download or use ",(0,r.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener",children:"fnm"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Have ",(0,r.jsx)(n.strong,{children:"NPM"})," installed, or use other package manager of your choice.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NPM comes bundled with Node.js, so you should already have it. If not, reinstall Node.js."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If not certain, confirm the prerequisites by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node -v\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm -v\n"})}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-new-project",children:"Creating a new project"}),"\n",(0,r.jsxs)(n.p,{children:["The fastest and best way to create new projects with Crawlee is to use the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@crawlee/cli",target:"_blank",rel:"noopener",children:"Crawlee CLI"}),". You can use the ",(0,r.jsx)(n.code,{children:"npx"})," utility to download and run the CLI - it is embedded in the ",(0,r.jsx)(n.code,{children:"crawlee"})," package:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx crawlee create my-crawler\n"})}),"\n",(0,r.jsx)(n.p,{children:"A prompt will be shown, asking you to choose a template. Crawlee is written in TypeScript so if you're familiar with it, choosing a TypeScript template will give you better code completion and static type checking, but feel free to use JavaScript as well. Functionally they're identical."}),"\n",(0,r.jsxs)(n.p,{children:["Let's choose the first template called ",(0,r.jsx)(n.strong,{children:"Getting started example"}),". The command will create a new directory in your current working directory, called ",(0,r.jsx)(n.strong,{children:"my-crawler"}),", add a ",(0,r.jsx)(n.strong,{children:"package.json"})," to this folder and install all the necessary dependencies. It will also add example source code that you can immediately run."]}),"\n",(0,r.jsx)(n.p,{children:"Let's try that!"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd my-crawler\nnpm start\n"})}),"\n",(0,r.jsx)(n.p,{children:"You will see log messages in the terminal as Crawlee boots up and starts scraping the Crawlee website."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-log",children:"INFO  PlaywrightCrawler: Starting the crawl\nINFO  PlaywrightCrawler: Title of https://crawlee.dev/ is 'Crawlee \xb7 Build reliable crawlers. Fast. | Crawlee'\nINFO  PlaywrightCrawler: Title of https://crawlee.dev/docs/examples is 'Examples | Crawlee'\nINFO  PlaywrightCrawler: Title of https://crawlee.dev/api/core is '@crawlee/core | API | Crawlee'\nINFO  PlaywrightCrawler: Title of https://crawlee.dev/api/core/changelog is 'Changelog | API | Crawlee'\nINFO  PlaywrightCrawler: Title of https://crawlee.dev/docs/quick-start is 'Quick Start | Crawlee'\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can always terminate the crawl with a keypress in the terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"CTRL+C\n"})}),"\n",(0,r.jsx)(n.h3,{id:"running-headful-browsers",children:"Running headful browsers"}),"\n",(0,r.jsxs)(n.p,{children:["Browsers controlled by Playwright run headless (without a visible window). You can switch to headful by uncommenting the ",(0,r.jsx)(n.code,{children:"headless: false"})," option in the crawler's constructor. This is useful in the development phase when you want to see what's going on in the browser."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Uncomment this option to see the browser window.\nheadless: false\n"})}),"\n",(0,r.jsx)(n.p,{children:"When you run the example again, after a second a Chromium browser window will open. In the window, you'll see quickly changing pages as the crawler does its job."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"For the sake of this show off, we've slowed down the crawler, but rest assured, it's blazing fast in real world usage."})}),"\n",(0,r.jsx)(i.Z,{alt:"An image showing off Crawlee scraping the Crawlee website using Puppeteer/Playwright and Chromium",sources:{light:"/img/chrome-scrape-light.gif",dark:"/img/chrome-scrape-dark.gif"}}),"\n",(0,r.jsx)(n.h2,{id:"next-lesson",children:"Next lesson"}),"\n",(0,r.jsx)(n.p,{children:"The next lesson will teach you how to create a very simple crawler and explain Crawlee components while building it."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},14959:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var r=t(39960),s=t(74477),i=t(52263),a=t(85893),o=t(50643).version.split("."),l=[o[0],o[1]].join(".");const c=function(e){var n=e.to,t=e.children,o=(0,s.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===l?(0,a.jsx)(r.default,{to:"/api/"+n,children:t}):(0,a.jsx)(r.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+n,children:t})}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);