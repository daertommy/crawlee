"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15104],{93997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(85893),a=t(11151);const i={id:"aws-browsers",title:"Browsers on AWS Lambda"},s=void 0,o={id:"deployment/aws-browsers",title:"Browsers on AWS Lambda",description:"Running browser-enabled Crawlee crawlers in AWS Lambda is a bit complicated - but not too much. The main problem is that we have to upload not only our code and the dependencies, but also the browser binaries.",source:"@site/versioned_docs/version-3.1/deployment/aws-browsers.md",sourceDirName:"deployment",slug:"/deployment/aws-browsers",permalink:"/docs/3.1/deployment/aws-browsers",draft:!1,unlisted:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"aws-browsers",title:"Browsers on AWS Lambda"},sidebar:"docs",previous:{title:"Cheerio on AWS Lambda",permalink:"/docs/3.1/deployment/aws-cheerio"},next:{title:"Cheerio on GCP Cloud Functions",permalink:"/docs/3.1/deployment/gcp-cheerio"}},l={},c=[{value:"Managing browser binaries",id:"managing-browser-binaries",level:2},{value:"Updating the code",id:"updating-the-code",level:2},{value:"Deploying the code",id:"deploying-the-code",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Running browser-enabled Crawlee crawlers in AWS Lambda is a bit complicated - but not too much. The main problem is that we have to upload not only our code and the dependencies, but also the ",(0,r.jsx)(n.strong,{children:"browser binaries"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"managing-browser-binaries",children:"Managing browser binaries"}),"\n",(0,r.jsx)(n.p,{children:"Fortunately, there are already some NPM packages that can help us with managing the browser binaries installation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@sparticuz/chromium",target:"_blank",rel:"noopener",children:"@sparticuz/chromium"})," is an NPM package containing brotli-compressed chromium binaries. When run in the Lambda environment, the package unzips the binaries under the ",(0,r.jsx)(n.code,{children:"/tmp/"})," path and returns the path to the executable."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["We just add this package to the project dependencies and zip the ",(0,r.jsx)(n.code,{children:"node_modules"})," folder."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Install the package\nnpm i -S @sparticuz/chromium\n\n# Zip the dependencies\nzip -r dependencies.zip ./node_modules\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We will now upload the ",(0,r.jsx)(n.code,{children:"dependencies.zip"})," as a Lambda Layer to AWS. Unfortunately, we cannot do this directly - there is a 50MB limit on direct uploads (and the compressed Chromium build is around that size itself). Instead, we'll upload it as an object into an S3 storage and provide the link to that object during the layer creation."]}),"\n",(0,r.jsx)(n.h2,{id:"updating-the-code",children:"Updating the code"}),"\n",(0,r.jsx)(n.p,{children:"We also have to slightly update the Crawlee code:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["First, we pass a new ",(0,r.jsx)(n.code,{children:"Configuration"})," instance to the Crawler. This way, every crawler instance we create will have its own storage and won\u2019t interfere with other crawler instances running in your Lambda environment."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="src/main.js"',children:"// For more information, see https://crawlee.dev/\nimport { Configuration, PlaywrightCrawler } from 'crawlee';\nimport { router } from './routes.js';\n\nconst startUrls = ['https://crawlee.dev'];\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: router,\n// highlight-start\n}, new Configuration({\n    persistStorage: false,\n}));\n// highlight-end\n\nawait crawler.run(startUrls);\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Now, we actually have to supply the code with the Chromium path from the ",(0,r.jsx)(n.code,{children:"@sparticuz/chromium"})," package. AWS Lambda execution also lacks some hardware support for GPU acceleration etc. - you can tell Chrome about this by passing the ",(0,r.jsx)(n.code,{children:"aws_chromium.args"})," to the ",(0,r.jsx)(n.code,{children:"args"})," parameter."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="src/main.js"',children:"// For more information, see https://crawlee.dev/\nimport { Configuration, PlaywrightCrawler } from 'crawlee';\nimport { router } from './routes.js';\n// highlight-next-line\nimport aws_chromium from '@sparticuz/chromium';\n\nconst startUrls = ['https://crawlee.dev'];\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: router,\n    // highlight-start\n    launchContext: {\n        launchOptions: {\n             executablePath: await aws_chromium.executablePath(),\n             args: aws_chromium.args,\n             headless: true\n        }\n    }\n    // highlight-end\n}, new Configuration({\n    persistStorage: false,\n}));\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Last but not least, we have to wrap the code in the exported ",(0,r.jsx)(n.code,{children:"handler"})," function - this will become the Lambda AWS will be executing."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="src/main.js"',children:"import { Configuration, PlaywrightCrawler } from 'crawlee';\nimport { router } from './routes.js';\nimport aws_chromium from '@sparticuz/chromium';\n\nconst startUrls = ['https://crawlee.dev'];\n\n// highlight-next-line\nexport const handler = async (event, context) => {\n    const crawler = new PlaywrightCrawler({\n        requestHandler: router,\n        launchContext: {\n            launchOptions: {\n                executablePath: await aws_chromium.executablePath(),\n                args: aws_chromium.args,\n                headless: true\n            }\n        }\n    }, new Configuration({\n        persistStorage: false,\n    }));\n\n    await crawler.run(startUrls);\n\n    // highlight-start\n    return {\n        statusCode: 200,\n        body: await crawler.getData(),\n    };\n}\n// highlight-end\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"deploying-the-code",children:"Deploying the code"}),"\n",(0,r.jsxs)(n.p,{children:["Now we can simply pack the code into a zip archive (minus the ",(0,r.jsx)(n.code,{children:"node_modules"})," folder, we have put that in the Lambda Layer, remember?). We upload the code archive to AWS as the Lambda body, set up the Lambda so it uses the dependencies Layer, and test our newly created Lambda."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Memory settings",type:"tip",children:[(0,r.jsxs)(n.p,{children:["Since we\u2019re using full-size browsers here, we have to update the Lambda configurations a bit. Most importantly, make sure to set the memory setting to ",(0,r.jsx)(n.strong,{children:"1024 MB or more"})," and update the ",(0,r.jsx)(n.strong,{children:"Lambda timeout"}),"."]}),(0,r.jsx)(n.p,{children:"The target timeout value depends on how long your crawler will be running. Try measuring the execution time when running your crawler locally and set the timeout accordingly."})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);