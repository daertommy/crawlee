"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75626],{96076:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(85893),o=t(11151);const i={id:"gcp-browsers",title:"Browsers in GCP Cloud Run"},s=void 0,a={id:"deployment/gcp-browsers",title:"Browsers in GCP Cloud Run",description:"Running full-size browsers on GCP Cloud Functions is actually a bit different from doing so on AWS Lambda - apparently, the latest runtime versions miss dependencies required to run Chromium.",source:"@site/versioned_docs/version-3.6/deployment/gcp-browsers.md",sourceDirName:"deployment",slug:"/deployment/gcp-browsers",permalink:"/docs/deployment/gcp-browsers",draft:!1,unlisted:!1,tags:[],version:"3.6",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"gcp-browsers",title:"Browsers in GCP Cloud Run"},sidebar:"docs",previous:{title:"Cheerio on GCP Cloud Functions",permalink:"/docs/deployment/gcp-cheerio"},next:{title:"Examples",permalink:"/docs/examples"}},l={},c=[{value:"Preparing the project",id:"preparing-the-project",level:2},{value:"Deploying to GCP",id:"deploying-to-gcp",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Running full-size browsers on GCP Cloud Functions is actually a bit different from doing so on AWS Lambda - ",(0,r.jsx)(n.a,{href:"https://pptr.dev/troubleshooting#running-puppeteer-on-google-cloud-functions",target:"_blank",rel:"noopener",children:"apparently"}),", the latest runtime versions miss dependencies required to run Chromium."]}),"\n",(0,r.jsxs)(n.p,{children:["If we want to run browser-enabled Crawlee crawlers on GCP, we\u2019ll need to turn towards ",(0,r.jsx)(n.strong,{children:"Cloud Run."})," Cloud Run is GCP\u2019s platform for running Docker containers - other than that, (almost) everything is the same as with Cloud Functions / AWS Lambdas."]}),"\n",(0,r.jsx)(n.p,{children:"GCP can spin up your containers on demand, so you\u2019re only billed for the time it takes your container to return an HTTP response to the requesting client. In a way, it also provides a slightly better developer experience (than regular FaaS), as you can debug your Docker containers locally and be sure you\u2019re getting the same setup in the cloud."}),"\n",(0,r.jsx)(n.h2,{id:"preparing-the-project",children:"Preparing the project"}),"\n",(0,r.jsxs)(n.p,{children:["As always, we first pass a new ",(0,r.jsx)(n.code,{children:"Configuration"})," instance to the crawler constructor:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="src/main.js"',children:"import { Configuration, PlaywrightCrawler } from 'crawlee';\nimport { router } from './routes.js';\n\nconst startUrls = ['https://crawlee.dev'];\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: router,\n// highlight-start\n}, new Configuration({\n    persistStorage: false,\n}));\n// highlight-end\n\nawait crawler.run(startUrls);\n"})}),"\n",(0,r.jsx)(n.p,{children:"All we now need to do is wrap our crawler with an Express HTTP server handler, so it can communicate with the client via HTTP. Because the Cloud Run platform sees only an opaque Docker container, we have to take care of this bit ourselves."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["GCP passes you an environment variable called ",(0,r.jsx)(n.code,{children:"PORT"})," - your HTTP server is expected to be listening on this port (GCP exposes this one to the outer world)."]})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"main.js"})," script should be looking like this in the end:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="src/main.js"',children:"import { Configuration, PlaywrightCrawler } from 'crawlee';\nimport { router } from './routes.js';\n// highlight-start\nimport express from 'express';\nconst app = express();\n// highlight-end\n\nconst startUrls = ['https://crawlee.dev'];\n\n\n// highlight-next-line\napp.get('/', async (req, res) => {\n    const crawler = new PlaywrightCrawler({\n        requestHandler: router,\n    }, new Configuration({\n        persistStorage: false,\n    }));\n    \n    await crawler.run(startUrls);    \n\n    // highlight-next-line\n    return res.send(await crawler.getData());\n// highlight-next-line\n});\n\n// highlight-next-line\napp.listen(parseInt(process.env.PORT) || 3000);\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Always make sure to keep all the logic in the request handler - as with other FaaS services, your request handlers have to be ",(0,r.jsx)(n.strong,{children:"stateless."})]})}),"\n",(0,r.jsx)(n.h2,{id:"deploying-to-gcp",children:"Deploying to GCP"}),"\n",(0,r.jsxs)(n.p,{children:["Now, we\u2019re ready to deploy! If you have initialized your project using ",(0,r.jsx)(n.code,{children:"npx crawlee create"}),", the initialization script has prepared a Dockerfile for you."]}),"\n",(0,r.jsxs)(n.p,{children:["All you have to do now is run ",(0,r.jsx)(n.code,{children:"gcloud run deploy"})," in your project folder (the one with your Dockerfile in it). The gcloud CLI application will ask you a few questions, such as what region you want to deploy your application in, or whether you want to make your application public or private."]}),"\n",(0,r.jsx)(n.p,{children:"After answering those questions, you should be able to see your application in the GCP dashboard and run it using the link you find there."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"In case your first execution of your newly created Cloud Run fails, try editing the Run configuration - mainly setting the available memory to 1GiB or more and updating the request timeout according to the size of the website you are scraping."})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(67294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);