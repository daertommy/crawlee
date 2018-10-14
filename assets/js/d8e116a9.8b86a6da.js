"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73484],{29960:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>Z,contentTitle:()=>k,default:()=>q,frontMatter:()=>I,metadata:()=>S,toc:()=>U});var o=n(85893),a=n(11151),t=n(14959),i=n(65488),s=n(85162),l=n(93e3);const c="import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new HttpCrawler({\n    proxyConfiguration,\n    // ...\n});\n",u="import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new JSDOMCrawler({\n    proxyConfiguration,\n    // ...\n});\n",p="import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    // ...\n});\n",d="import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new PlaywrightCrawler({\n    proxyConfiguration,\n    // ...\n});\n",x="import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new PuppeteerCrawler({\n    proxyConfiguration,\n    // ...\n});\n",h="import { ProxyConfiguration, SessionPool } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst sessionPool = await SessionPool.open({ /* opts */ });\n\nconst session = await sessionPool.getSession();\n\nconst proxyUrl = await proxyConfiguration.newUrl(session.id);\n",f="import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new HttpCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n",g="import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new JSDOMCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n",w="import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new CheerioCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n",y="import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PlaywrightCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n",m="import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PuppeteerCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n",C="import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new HttpCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n",j="import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new JSDOMCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n",v="import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n",b="import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PlaywrightCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n",P="import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PuppeteerCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n",I={id:"proxy-management",title:"Proxy Management",description:"Using proxies to get around those annoying IP-blocks"},k=void 0,S={id:"guides/proxy-management",title:"Proxy Management",description:"Using proxies to get around those annoying IP-blocks",source:"@site/versioned_docs/version-3.2/guides/proxy_management.mdx",sourceDirName:"guides",slug:"/guides/proxy-management",permalink:"/docs/3.2/guides/proxy-management",draft:!1,unlisted:!1,tags:[],version:"3.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701110403,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{id:"proxy-management",title:"Proxy Management",description:"Using proxies to get around those annoying IP-blocks"},sidebar:"docs",previous:{title:"JavaScript rendering",permalink:"/docs/3.2/guides/javascript-rendering"},next:{title:"Session Management",permalink:"/docs/3.2/guides/session-management"}},Z={},U=[{value:"Quick start",id:"quick-start",level:2},{value:"Proxy Configuration",id:"proxy-configuration",level:2},{value:"Crawler integration",id:"crawler-integration",level:3},{value:"IP Rotation and session management",id:"ip-rotation-and-session-management",level:3},{value:"Inspecting current proxy in Crawlers",id:"inspecting-current-proxy-in-crawlers",level:2}];function O(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/IP_address_blocking",target:"_blank",rel:"noopener",children:"IP address blocking"})," is one of the oldest\nand most effective ways of preventing access to a website. It is therefore paramount for\na good web scraping library to provide easy to use but powerful tools which can work around\nIP blocking. The most powerful weapon in our anti IP blocking arsenal is a\n",(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Proxy_server",target:"_blank",rel:"noopener",children:"proxy server"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"With Crawlee we can use our own proxy servers or proxy servers acquired from\nthird-party providers."}),"\n",(0,o.jsx)(r.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,o.jsx)(r.p,{children:"If we already have proxy URLs of our own, we can start using\nthem immediately in only a few lines of code."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-javascript",children:"import { ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ]\n});\nconst proxyUrl = await proxyConfiguration.newUrl();\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Examples of how to use our proxy URLs with crawlers are shown below in ",(0,o.jsx)(r.a,{href:"#crawler-integration",children:"Crawler integration"})," section."]}),"\n",(0,o.jsx)(r.h2,{id:"proxy-configuration",children:"Proxy Configuration"}),"\n",(0,o.jsxs)(r.p,{children:["All our proxy needs are managed by the ",(0,o.jsx)(t.Z,{to:"core/class/ProxyConfiguration",children:(0,o.jsx)(r.code,{children:"ProxyConfiguration"})})," class. We create an instance using the ",(0,o.jsx)(r.code,{children:"ProxyConfiguration"})," ",(0,o.jsx)(t.Z,{to:"core/class/ProxyConfiguration#constructor",children:(0,o.jsx)(r.code,{children:"constructor"})})," function based on the provided options. See the ",(0,o.jsx)(t.Z,{to:"core/interface/ProxyConfigurationOptions",children:(0,o.jsx)(r.code,{children:"ProxyConfigurationOptions"})})," for all the possible constructor options."]}),"\n",(0,o.jsx)(r.h3,{id:"crawler-integration",children:"Crawler integration"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"ProxyConfiguration"})," integrates seamlessly into ",(0,o.jsx)(t.Z,{to:"http-crawler/class/HttpCrawler",children:(0,o.jsx)(r.code,{children:"HttpCrawler"})}),", ",(0,o.jsx)(t.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,o.jsx)(r.code,{children:"CheerioCrawler"})}),", ",(0,o.jsx)(t.Z,{to:"jsdom-crawler/class/JSDOMCrawler",children:(0,o.jsx)(r.code,{children:"JSDOMCrawler"})}),", ",(0,o.jsx)(t.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,o.jsx)(r.code,{children:"PlaywrightCrawler"})})," and ",(0,o.jsx)(t.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",children:(0,o.jsx)(r.code,{children:"PuppeteerCrawler"})}),"."]}),"\n",(0,o.jsxs)(i.Z,{groupId:"proxy_session_management",children:[(0,o.jsx)(s.Z,{value:"http",label:"HttpCrawler",children:(0,o.jsx)(l.default,{language:"js",children:c})}),(0,o.jsx)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,children:(0,o.jsx)(l.default,{language:"js",children:p})}),(0,o.jsx)(s.Z,{value:"jsdom",label:"JSDOMCrawler",children:(0,o.jsx)(l.default,{language:"js",children:u})}),(0,o.jsx)(s.Z,{value:"playwright",label:"PlaywrightCrawler",children:(0,o.jsx)(l.default,{language:"js",children:d})}),(0,o.jsx)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:(0,o.jsx)(l.default,{language:"js",children:x})})]}),"\n",(0,o.jsx)(r.p,{children:"Our crawlers will now use the selected proxies for all connections."}),"\n",(0,o.jsx)(r.h3,{id:"ip-rotation-and-session-management",children:"IP Rotation and session management"}),"\n",(0,o.jsxs)(r.p,{children:["\u200b",(0,o.jsx)(t.Z,{to:"core/class/ProxyConfiguration#newUrl",children:(0,o.jsx)(r.code,{children:"proxyConfiguration.newUrl()"})})," allows us to pass a ",(0,o.jsx)(r.code,{children:"sessionId"})," parameter. It will then be used to create a ",(0,o.jsx)(r.code,{children:"sessionId"}),"-",(0,o.jsx)(r.code,{children:"proxyUrl"})," pair, and subsequent ",(0,o.jsx)(r.code,{children:"newUrl()"})," calls with the same ",(0,o.jsx)(r.code,{children:"sessionId"})," will always return the same ",(0,o.jsx)(r.code,{children:"proxyUrl"}),". This is extremely useful in scraping, because we want to create the impression of a real user. See the ",(0,o.jsx)(r.a,{href:"../guides/session-management",children:"session management guide"})," and ",(0,o.jsx)(t.Z,{to:"core/class/SessionPool",children:(0,o.jsx)(r.code,{children:"SessionPool"})})," class for more information on how keeping a real session helps us avoid blocking."]}),"\n",(0,o.jsxs)(r.p,{children:["When no ",(0,o.jsx)(r.code,{children:"sessionId"})," is provided, our proxy URLs are rotated round-robin."]}),"\n",(0,o.jsxs)(i.Z,{groupId:"proxy_session_management",children:[(0,o.jsx)(s.Z,{value:"http",label:"HttpCrawler",children:(0,o.jsx)(l.default,{language:"js",children:f})}),(0,o.jsx)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,children:(0,o.jsx)(l.default,{language:"js",children:w})}),(0,o.jsx)(s.Z,{value:"jsdom",label:"JSDOMCrawler",children:(0,o.jsx)(l.default,{language:"js",children:g})}),(0,o.jsx)(s.Z,{value:"playwright",label:"PlaywrightCrawler",children:(0,o.jsx)(l.default,{language:"js",children:y})}),(0,o.jsx)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:(0,o.jsx)(l.default,{language:"js",children:m})}),(0,o.jsx)(s.Z,{value:"standalone",label:"Standalone",children:(0,o.jsx)(l.default,{language:"js",children:h})})]}),"\n",(0,o.jsx)(r.h2,{id:"inspecting-current-proxy-in-crawlers",children:"Inspecting current proxy in Crawlers"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"HttpCrawler"}),", ",(0,o.jsx)(r.code,{children:"CheerioCrawler"}),", ",(0,o.jsx)(r.code,{children:"JSDOMCrawler"}),", ",(0,o.jsx)(r.code,{children:"PlaywrightCrawler"})," and ",(0,o.jsx)(r.code,{children:"PuppeteerCrawler"})," grant access to information about the currently used proxy\nin their ",(0,o.jsx)(r.code,{children:"requestHandler"})," using a ",(0,o.jsx)(t.Z,{to:"core/interface/ProxyInfo",children:(0,o.jsx)(r.code,{children:"proxyInfo"})})," object.\nWith the ",(0,o.jsx)(r.code,{children:"proxyInfo"})," object, we can easily access the proxy URL."]}),"\n",(0,o.jsxs)(i.Z,{groupId:"proxy_session_management",children:[(0,o.jsx)(s.Z,{value:"http",label:"HttpCrawler",children:(0,o.jsx)(l.default,{language:"js",children:C})}),(0,o.jsx)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,children:(0,o.jsx)(l.default,{language:"js",children:v})}),(0,o.jsx)(s.Z,{value:"jsdom",label:"JSDOMCrawler",children:(0,o.jsx)(l.default,{language:"js",children:j})}),(0,o.jsx)(s.Z,{value:"playwright",label:"PlaywrightCrawler",children:(0,o.jsx)(l.default,{language:"js",children:b})}),(0,o.jsx)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:(0,o.jsx)(l.default,{language:"js",children:P})})]})]})}function q(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(O,{...e})}):O(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>i});n(67294);var o=n(34334);const a={tabItem:"tabItem_Ymn6"};var t=n(85893);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:n,children:r})}},65488:(e,r,n)=>{n.d(r,{Z:()=>x});var o=n(67294),a=n(34334),t=n(12466),i=n(70989),s=n(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=n(85893);function u(e){var r=e.className,n=e.block,o=e.selectedValue,i=e.selectValue,s=e.tabValues,u=[],p=(0,t.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var r=e.currentTarget,n=u.indexOf(r),a=s[n].value;a!==o&&(p(r),i(a))},x=function(e){var r,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var o,a=u.indexOf(e.currentTarget)+1;n=null!=(o=u[a])?o:u[0];break;case"ArrowLeft":var t,i=u.indexOf(e.currentTarget)-1;n=null!=(t=u[i])?t:u[u.length-1]}null==(r=n)||r.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:s.map((function(e){var r=e.value,n=e.label,t=e.attributes;return(0,c.jsx)("li",Object.assign({role:"tab",tabIndex:o===r?0:-1,"aria-selected":o===r,ref:function(e){return u.push(e)},onKeyDown:x,onClick:d},t,{className:(0,a.Z)("tabs__item",l.tabItem,null==t?void 0:t.className,{"tabs__item--active":o===r}),children:null!=n?n:r}),r)}))})}function p(e){var r=e.lazy,n=e.children,a=e.selectedValue,t=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=t.find((function(e){return e.props.value===a}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:t.map((function(e,r){return(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function d(e){var r=(0,i.Y)(e);return(0,c.jsxs)("div",{className:(0,a.Z)("tabs-container",l.tabList),children:[(0,c.jsx)(u,Object.assign({},e,r)),(0,c.jsx)(p,Object.assign({},e,r))]})}function x(e){var r=(0,s.Z)();return(0,c.jsx)(d,Object.assign({},e,{children:(0,i.h)(e.children)}),String(r))}},70989:(e,r,n)=>{n.d(r,{Y:()=>x,h:()=>c});var o=n(67294),a=n(16550),t=n(20469),i=n(91980),s=n(67392),l=n(50012);function c(e){var r,n;return null!=(r=null==(n=o.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,o.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function u(e){var r=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=r?r:function(e){return c(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,s.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function d(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId,s=(0,a.k6)(),l=function(e){var r=e.queryString,n=void 0!==r&&r,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,o.useCallback)((function(e){if(l){var r=new URLSearchParams(s.location.search);r.set(l,e),s.replace(Object.assign({},s.location,{search:r.toString()}))}}),[l,s])]}function x(e){var r,n,a,i,s=e.defaultValue,c=e.queryString,x=void 0!==c&&c,h=e.groupId,f=u(e),g=(0,o.useState)((function(){return function(e){var r,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=o.find((function(e){return e.default})))?r:o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),w=g[0],y=g[1],m=d({queryString:x,groupId:h}),C=m[0],j=m[1],v=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,l.Nk)(r),a=n[0],i=n[1],[a,(0,o.useCallback)((function(e){r&&i.set(e)}),[r,i])]),b=v[0],P=v[1],I=function(){var e=null!=C?C:b;return p({value:e,tabValues:f})?e:null}();return(0,t.Z)((function(){I&&y(I)}),[I]),{selectedValue:w,selectValue:(0,o.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);y(e),j(e),P(e)}),[j,P,f]),tabValues:f}}},14959:(e,r,n)=>{n.d(r,{Z:()=>c});n(67294);var o=n(39960),a=n(74477),t=n(52263),i=n(85893),s=n(50643).version.split("."),l=[s[0],s[1]].join(".");const c=function(e){var r=e.to,n=e.children,s=(0,a.E)();return(0,t.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===l?(0,i.jsx)(o.default,{to:"/api/"+r,children:n}):(0,i.jsx)(o.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+r,children:n})}},11151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>i});var o=n(67294);const a={},t=o.createContext(a);function i(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(t.Provider,{value:r},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.6.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.6.2","@crawlee/browser":"3.6.2","@crawlee/browser-pool":"3.6.2","@crawlee/cheerio":"3.6.2","@crawlee/cli":"3.6.2","@crawlee/core":"3.6.2","@crawlee/http":"3.6.2","@crawlee/jsdom":"3.6.2","@crawlee/linkedom":"3.6.2","@crawlee/playwright":"3.6.2","@crawlee/puppeteer":"3.6.2","@crawlee/utils":"3.6.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);