(function(e){function t(t){for(var o,r,a=t[0],l=t[1],c=t[2],p=0,d=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],o=!0,r=1;r<s.length;r++){var a=s[r];0!==n[a]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=s[0]))}return e}var o={},r={app:0},n={app:0},i=[];function a(e){return l.p+"js/"+({about:"about",project:"project",resume:"resume"}[e]||e)+"."+{about:"5dee11bd",project:"add53cf7",resume:"861af558"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(e){var t=[],s={about:1,project:1,resume:1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=new Promise((function(t,s){for(var o="css/"+({about:"about",project:"project",resume:"resume"}[e]||e)+"."+{about:"b4cb71da",project:"5dcedf06",resume:"0cdc90fb"}[e]+".css",n=l.p+o,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var c=i[a],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===o||p===n))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){c=d[a],p=c.getAttribute("data-href");if(p===o||p===n)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var o=t&&t.target&&t.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],u.parentNode.removeChild(u),s(i)},u.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(u)})).then((function(){r[e]=0})));var o=n[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,s){o=n[e]=[t,s]}));t.push(o[2]=i);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,l.nc&&p.setAttribute("nonce",l.nc),p.src=a(e);var d=new Error;c=function(t){p.onerror=p.onload=null,clearTimeout(u);var s=n[e];if(0!==s){if(s){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,s[1](d)}n[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:p})}),12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(s,o,function(t){return e[t]}.bind(null,o));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=p;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var o=s("85ec"),r=s.n(o);r.a},"4e93":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("b-navbar",{attrs:{id:"nav",fixed:"top",variant:"light",toggleable:"lg",type:"light"}},[s("b-navbar-brand",{attrs:{to:"/"}},[e._v("Christopher Ritter")]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item",{attrs:{to:"/",exact:"","exact-active-class":"active"}},[e._v("Work")]),s("b-nav-item",{attrs:{to:"/about",exact:"","exact-active-class":"active"}},[e._v("About")]),s("b-nav-item",{attrs:{to:"/resume",exact:"","exact-active-class":"active"}},[e._v("Resume")])],1)],1)],1),s("router-view"),s("b-container",{staticClass:"text-light bg-dark",attrs:{id:"footer",fluid:""}},[s("b-container",{staticClass:"download-resume"},[s("b-row",[s("b-col",{staticClass:"download-resume-header"},[s("h3",[e._v("Download a copy of my resume")])])],1),s("b-row",[s("b-col",{staticClass:"download-resume-text"},[e._v(" Download an updated copy of my resume in Adobe PDF or Microsoft Word format. ")])],1),s("b-row",[s("b-col",{staticClass:"download-resume-buttons"},[s("b-button",{attrs:{size:"lg",variant:"primary",href:"https://app.box.com/s/gws18gc1hna8g7tnri88ncjeev4vthtm",target:"_blank"}},[e._v("Adobe PDF")]),s("b-button",{attrs:{size:"lg",variant:"outline-light",href:"https://app.box.com/s/vighxx386p10zqthjs22yjyoitkfuhnq",target:"_blank"}},[e._v("Microsoft Word")])],1)],1)],1),s("hr"),s("b-container",{staticClass:"copyright-info"},[s("b-row",[s("b-col",[s("p",[e._v("© 2019 Christopher Ritter")])]),s("b-col",{staticClass:"text-right"},[s("b-link",{staticClass:"footer-icon-button",attrs:{href:"mailto:hello@christopherritter.com",target:"_blank"}},[s("b-img",{staticClass:"footer-icon",attrs:{src:"/img/email.svg",alt:"Email"}})],1),s("b-link",{staticClass:"footer-icon-button",attrs:{href:"http://www.twitter.com/geddon",target:"_blank"}},[s("b-img",{staticClass:"footer-icon",attrs:{src:"/img/twitter.svg",alt:"Twitter"}})],1),s("b-link",{staticClass:"footer-icon-button",attrs:{href:"http://www.github.com/christopherritter",target:"_blank"}},[s("b-img",{staticClass:"footer-icon",attrs:{src:"/img/github-face.svg",alt:"Github"}})],1),s("b-link",{staticClass:"footer-icon-button",attrs:{href:"http://www.linkedin.com/in/christopherritter",target:"_blank"}},[s("b-img",{staticClass:"footer-icon",attrs:{src:"/img/linkedin.svg",alt:"LinkedIn"}})],1)],1)],1)],1)],1)],1)},n=[],i={name:"app"},a=i,l=(s("034f"),s("2877")),c=Object(l["a"])(a,r,n,!1,null,null,null),p=c.exports,d=(s("d3b7"),s("8c4f")),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{staticClass:"work"},[s("h2",{staticClass:"about-me"},[e._v(" Hello! I'm Christopher Ritter — a designer focused on UX/UI design, prototyping, and design systems. ")]),s("JenzabarProjects")],1)},m=[],h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"jenzabar-projects"},e._l(e.projects,(function(t){return s("b-row",{key:t.id,staticClass:"project"},[s("b-col",[t.img?s("div",{staticClass:"project-image bg-light"},[s("b-link",{attrs:{to:"projects/"+t.path}},[s("b-img",{attrs:{src:t.img,fluid:"",alt:t.name}})],1)],1):e._e(),s("b-row",[s("b-col",{attrs:{lg:"3",md:"4",sm:"12"}},[s("h6",{staticClass:"project-name"},[e._v(e._s(t.name))])]),s("b-col",{attrs:{col:"",lg:"9",md:"8",sm:"12"}},[s("p",{staticClass:"project-description"},[e._v(e._s(t.description))]),s("b-link",{staticClass:"project-path",attrs:{to:"projects/"+t.path}},[e._v("More info")])],1)],1)],1)],1)})),1)},f=[],g=s("c0d6"),b={name:"JenzabarProjects",store:g["a"],data:function(){return{loading:!1,projects:[],error:null}},created:function(){this.fetchData()},methods:{fetchData:function(){for(var e=this.$store.getters.projects,t=0;t<e.length;t++)"Jenzabar, Inc."==e[t].employer&&this.projects.push(e[t])}}},v=b,y=(s("bd6d"),Object(l["a"])(v,h,f,!1,null,"7ca2961c",null)),k=y.exports,w={name:"work",components:{JenzabarProjects:k},created:function(){this.scrollToTop()},methods:{scrollToTop:function(){window.scrollTo(0,0)}}},j=w,C=(s("a06b"),Object(l["a"])(j,u,m,!1,null,"6fb79d10",null)),S=C.exports;o["default"].use(d["a"]);var x=[{path:"/",name:"work",component:S},{path:"/projects/:project_slug",name:"project",component:function(){return s.e("project").then(s.bind(null,"07bd"))}},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/resume",name:"resume",component:function(){return s.e("resume").then(s.bind(null,"1ba2"))}}],P=new d["a"]({mode:"history",base:"/",routes:x}),_=P,D=s("5f5b");s("f9e3"),s("2dd8");o["default"].use(D["a"]),o["default"].config.productionTip=!1,new o["default"]({router:_,store:g["a"],render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,s){},a06b:function(e,t,s){"use strict";var o=s("4e93"),r=s.n(o);r.a},a2f0:function(e,t,s){},bd6d:function(e,t,s){"use strict";var o=s("a2f0"),r=s.n(o);r.a},c0d6:function(e,t,s){"use strict";s("a4d3"),s("e01a"),s("c740"),s("b0c0");var o=s("2b0e"),r=s("2f62");o["default"].use(r["a"]),t["a"]=new r["a"].Store({state:{employers:[{id:0,title:"User Experience Designer",name:"Jenzabar, Inc.",startDate:2015,endDate:"Now",projects:[{id:0,name:"Find Your Calling",img:"/img/FYC.png",description:"Find Your Calling helps prospective students identify career paths that match their personal interests. The website provides detailed information about employment opportunities in each state, plus the ability to connect with local colleges and universities that offer relevant courses.",tasks:[{description:"Redesigned elements of Find Your Calling to focus on educational institutions.",skills:["UX","UI","Visual Design","Prototyping"],tools:["Adobe XD","VS Code"],tech:["Bootstrap","Sass","Handlebars"],deliverables:[{id:0,title:"The All-New Career Explorer",img:"/img/FYC_Career-Explorer.png",description:"The updates to Find Your Calling included an entirely new way to navigate career choices. This was called the Career Explorer given its ability to search and filter career choices."},{id:1,title:"The Improved Private Profile",img:"/img/FYC_Private-Profile.png",description:"The private profile was redesigned to focus on the educational choices for each of the career paths. This was part of a larger effort to connect prospective students to eductional institutions."},{id:2,title:"Additional School Filters",img:"/img/FYC_Schools-Filter.png",description:"Additional filters were added to the school listing for each of the career paths. These were designed for both desktop and mobile devices to align with the eductional instutitions below the filters."},{id:3,title:"Big Data School Headers",img:"/img/FYC_School-Header.png",description:"Visualized data for the schools was moved from the body of the original page into an interactive header. The header was designed to be used on both desktop and mobile devices."}]},{description:"Implemented Pattern Lab to deliver redesigned elements for Find Your Calling.",skills:["UI","Front-End","Design Systems"],tools:["Pattern Lab","VS Code"],tech:["NodeJS","Bootstrap","Sass","Handlebars"],deliverables:[{id:0,title:"FYC Design System",img:"/img/FYC_Pattern-Lab.png",description:"Pattern Lab was used to create a new design system for Find Your Calling which leveraged existing style sheets and templates. This enabled the design system to integrate seamlessly with the pre-existing technology stack."}]},{description:"Created Google Analytics reports to measure the effectiveness of redesigned elements.",skills:["UX","Reporting","Ideation"],tools:["Google Analytics"],deliverables:[{id:0,title:"Google Analytics Reporting",img:"/img/FYC_Google-Reports.png",description:"The inclusion of Google Analytics allowed for the creation of detailed reports which showed the conversion rates for our project targets. These reports helped rate the efficacy of the designs and guide future enhancements."}]}],path:"fyc"},{id:1,name:"Jenzabar ICS 9",img:"/img/JICS9.png",description:"The latest release of the Jenzabar Internet Campus Solution features a suite of online portlets which have been redesigned for use on mobile and deskotop browsers, plus an all-new theme to align with the company's new branding guidelines.",tasks:[{description:"Implemented responsive layouts for JICS9 portlets using Bootstrap and jQuery.",skills:["UX","UI","Prototyping","Front-End"],tools:["Adobe XD","VS Code"],tech:["ASCX","Bootstrap","Sass","jQuery"]},{description:"Designed new base theme to implement the new branding guidelines for Jenzabar products.",skills:["UX","UI","Prototyping","Front-End","Visual Design"],tools:["Adobe XD","VS Code"],tech:["ASCX","Bootstrap","Sass","jQuery"]},{description:"Created a design system for JICS9 portlets to standardize front-end components.",skills:["UX","UI","Prototyping","Front-End","Design Systems"],tools:["Adobe XD","VS Code"],tech:["ASCX","Bootstrap","Sass","jQuery"],deliverables:[{id:0,title:"Jenzabar ICS Design System",img:"/img/JICS-Design-System_Home.png",description:"A new design system was created for JICS9 to display the components in use by the CX portlets."},{id:1,title:"Design System Components",img:"/img/JICS-Design-System_Tables.png",description:"Code samples were provided alongside functional examples of the ASP.Net Web Controls."}]}],path:"jics9"},{id:2,name:"Jenzabar CX 10",img:"/img/CX10.png",description:"Jenzabar CX 10 is an all-new version of the classic Jenzbar CX suite of campus tools that transforms the old user interface from an 80-character terminal screen to a modern, desktop experience for both PCs and Macs.",tasks:[{description:"Designed the front-end for the new desktop version of Jenzabar CX 10.",skills:["UX","UI","Prototyping","Front-End","Research","Analysis","Reporting"],tools:["Adobe XD","VS Code","QT Creator"],tech:["QT","QSS"],deliverables:[{id:0,title:"CX 10 Home Screen",img:"/img/CX10-Home.png",description:"The home screen for CX 10 provides users with a searchable directory of their available applications. When the user launches an application it appears on a recently viewed list next to the directory."}]},{description:"Validated new concepts with users and reported findings to delivery team."},{description:"Created the base theme for CX 10 plus various other themes available through the settings."}],path:"cx10"},{id:3,name:"Jenzabar JX",img:"/img/JX.png",description:"Jenzabar JX provides online browser access to the classic Jenzabar CX suite of tools for colleges and universities. The new platform was built in Java and uses Smart GWT components to display the user interface.",tasks:[{description:"Provided design assistance to local, remote, and offshore development teams.",skills:["UX","Visual Design"],tools:["Adobe PhotoShop","Adobe Illustrator","Adobe InDesign"]},{description:"Prototyped SmartGWT components to demonstrate user interactions and responsive layouts.",skills:["UI","Prototyping","Front-End"],tools:["Visual Studio"],tech:["SmartGWT"]}],path:"jx"}]},{id:1,title:"Interface Design Consultant",name:"Crown Equipment",startDate:2015,endDate:2015,location:"New Bremen, Ohio",projects:[{id:0,name:"Crown.com",description:"Primary website for Crown, Inc.",tasks:[{description:"Contracted to provide front-end assistance for Crown Equipment to implement a responsive design for their corporate site managed by Adobe Experience Manager.",skills:["UX","UI"],tools:["Adobe Experience Manager"],tech:["Bootstrap","Sass","Grunt"],deliverables:[{id:0,title:"Crown Industries Rebranding",img:"/img/Crown-Website.png",description:"Adobe Experience Manager was used to rollout the new brand for Crown Industries. Bootstrap was used to display numerous components in a responsive layout, along with Sass to manage the CSS, which was compiled as part of the build process using Grunt."}]}],path:"crown"}]},{id:2,title:"User Experience Designer",name:"Trimble Navigation",startDate:2014,endDate:2015,location:"Huber Heights, Ohio",projects:[{id:0,name:"NextGen",description:"The next generation of machine control.",tasks:[{id:0,description:"Brainstormed concepts with machine operators using Gamestorming techniques to generate new ideas.",skills:["UX","Brainstorming"]},{id:1,description:"Developed HTML/Bootstrap prototypes for field testing with machine operators.",skills:["UX","UI","Research","Prototyping"],tech:["Bootstrap"]},{id:2,description:"Conducted field research of the construction industry across the US and Canada, providing top level reports of my findings to primary stakeholders.",skills:["UX","Research","Analysis","Reporting"]},{id:3,description:"Modeled an excavator and work site using Trimble SketchUp.",skills:["UI","3D Modeling"],tools:["SketchUp"]},{id:4,description:"Provided design assets for Android/Vuforia prototypes, and for production within an Agile environment, which included style guides and custom icons for Android applications.",skills:["UI","Android","Style Guide","Iconography","Prototyping"],tech:["Vuforia"]}],path:"nextgen"}]},{id:3,title:"Idea Designer",name:"LexisNexis",startDate:2010,endDate:2013,location:"Miamisburg, Ohio",projects:[{id:0,name:"Lexis Advance",description:"The next generation of legal documentation",tasks:[{id:0,description:"Created annotated wireframes to support the development of Lexis Advance.",skills:["UX"]},{id:1,description:"Conducted concept testing and usability research with legal professionals, and delivered top level reports of my discussions to primary stakeholders. ",skills:["UX","Testing","Research","Reporting"]},{id:2,description:"Lead brainstorming workshops with legal professionals using Gamestorming techniques to generate new ideas.",skills:["UX","Brainstorming"]},{id:3,description:"Founding member of the Customer Discovery & Innovation team which designed, prototyped, and tested the most popular concepts from our innovation pipeline.",skills:["UX","Research","Analysis","Reporting","Prototyping"]},{id:4,description:"Design Lead for several innovative products including Lexis Answers.",skills:["UX","Research","Analysis","Brainstorming","Reporting","Prototyping"]}],path:"lexisadvance"}]},{id:4,title:"Experience Planner",name:"Bridge Worldwide",startDate:2009,endDate:2010,location:"Cincinnati, Ohio",projects:[{id:0,name:"Pearle Vision",description:"Main website for Pearl Vision, inc.",tasks:[{id:0,description:"Planned the digital experience of social, mobile, and web applications for corporate clients that included P&G, Pearle Vision, and Red Bull.",skills:["UX","Social Media"]},{id:1,description:"Lead brainstorming sessions with creative, technical, and business leads to generate new ideas.",skills:["UX","Brainstorming"]},{id:2,description:"Illustrated user flows, site maps, and wireframes to assist the design and development teams.",skills:["UX"]},{id:3,description:"Documented features and functionality for project management, and provided competitive analysis of similar products on the market.",skills:["UX"]},{id:4,description:"Conducted usability testing with potential customers and reported insights back to the team.",skills:["UX","Research","Analysis","Reporting"]},{id:5,description:"Presented initial concepts, customer feedback, and other deliverables to the clients.",skills:["UX"]}],path:"pearlevision"}]}]},getters:{projects:function(e){for(var t=[],s=function(s){if(e.employers[s].projects)for(var o=function(o){var r={id:o,description:e.employers[s].projects[o].description,name:e.employers[s].projects[o].name,employer:e.employers[s].name,tasks:e.employers[s].projects[o].tasks,skills:[],tools:[],tech:[],deliverables:[],path:e.employers[s].projects[o].path};if(e.employers[s].projects[o].img&&(r.img=e.employers[s].projects[o].img),e.employers[s].projects[o].tasks){r.tasks=e.employers[s].projects[o].tasks;for(var n=function(t){if(e.employers[s].projects[o].tasks[t].skills)for(var n=function(n){var i={label:e.employers[s].projects[o].tasks[t].skills[n]},a=r.skills.findIndex((function(r){return r.label===e.employers[s].projects[o].tasks[t].skills[n]}));a>=0?r.skills[a].count++:(i.count=1,r.skills.push(i))},i=0;i<e.employers[s].projects[o].tasks[t].skills.length;i++)n(i);if(e.employers[s].projects[o].tasks[t].tools)for(var a=function(n){var i={label:e.employers[s].projects[o].tasks[t].tools[n]},a=r.tools.findIndex((function(r){return r.label===e.employers[s].projects[o].tasks[t].tools[n]}));a>=0?r.tools[a].count++:(i.count=1,r.tools.push(i))},l=0;l<e.employers[s].projects[o].tasks[t].tools.length;l++)a(l);if(e.employers[s].projects[o].tasks[t].tech)for(var c=function(n){var i={label:e.employers[s].projects[o].tasks[t].tech[n]},a=r.tech.findIndex((function(r){return r.label===e.employers[s].projects[o].tasks[t].tech[n]}));a>=0?r.tech[a].count++:(i.count=1,r.tech.push(i))},p=0;p<e.employers[s].projects[o].tasks[t].tech.length;p++)c(p);if(e.employers[s].projects[o].tasks[t].deliverables)for(var d=0;d<e.employers[s].projects[o].tasks[t].deliverables.length;d++)r.deliverables.push(e.employers[s].projects[o].tasks[t].deliverables[d])},i=0;i<e.employers[s].projects[o].tasks.length;i++)n(i)}t.push(r)},r=0;r<e.employers[s].projects.length;r++)o(r)},o=0;o<e.employers.length;o++)s(o);return t},tasks:function(e){for(var t=[],s=0;s<e.employers.length;s++)if(e.employers[s].projects)for(var o=0;o<e.employers[s].projects.length;o++)if(e.employers[s].projects[o].tasks)for(var r=0;r<e.employers[s].projects[o].tasks.length;r++){var n={id:r,description:e.employers[s].projects[o].tasks[r].description,deliverables:e.employers[s].projects[o].tasks[r].deliverables||[],project:e.employers[s].projects[o].name,employer:e.employers[s].name};t.push(n)}return t},skills:function(e){for(var t=[],s=function(s){if(e.employers[s].projects)for(var o=function(o){if(e.employers[s].projects[o].tasks)for(var r=function(r){if(e.employers[s].projects[o].tasks[r].skills)for(var n=function(n){var i={label:e.employers[s].projects[o].tasks[r].skills[n]},a=t.findIndex((function(t){return t.label===e.employers[s].projects[o].tasks[r].skills[n]}));a>=0?t[a].count++:(i.count=1,t.push(i))},i=0;i<e.employers[s].projects[o].tasks[r].skills.length;i++)n(i)},n=0;n<e.employers[s].projects[o].tasks.length;n++)r(n)},r=0;r<e.employers[s].projects.length;r++)o(r)},o=0;o<e.employers.length;o++)s(o);return t},tools:function(e){for(var t=[],s=function(s){if(e.employers[s].projects)for(var o=function(o){if(e.employers[s].projects[o].tasks)for(var r=function(r){if(e.employers[s].projects[o].tasks[r].tools)for(var n=function(n){var i={label:e.employers[s].projects[o].tasks[r].tools[n]},a=t.findIndex((function(t){return t.label===e.employers[s].projects[o].tasks[r].tools[n]}));a>=0?t[a].count++:(i.count=1,t.push(i))},i=0;i<e.employers[s].projects[o].tasks[r].tools.length;i++)n(i)},n=0;n<e.employers[s].projects[o].tasks.length;n++)r(n)},r=0;r<e.employers[s].projects.length;r++)o(r)},o=0;o<e.employers.length;o++)s(o);return t},tech:function(e){for(var t=[],s=function(s){if(e.employers[s].projects)for(var o=function(o){if(e.employers[s].projects[o].tasks)for(var r=function(r){if(e.employers[s].projects[o].tasks[r].tech)for(var n=function(n){var i={label:e.employers[s].projects[o].tasks[r].tech[n]},a=t.findIndex((function(t){return t.label===e.employers[s].projects[o].tasks[r].tech[n]}));a>=0?t[a].count++:(i.count=1,t.push(i))},i=0;i<e.employers[s].projects[o].tasks[r].tech.length;i++)n(i)},n=0;n<e.employers[s].projects[o].tasks.length;n++)r(n)},r=0;r<e.employers[s].projects.length;r++)o(r)},o=0;o<e.employers.length;o++)s(o);return t}}})}});
//# sourceMappingURL=app.db1f625e.js.map