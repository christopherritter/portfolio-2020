(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["project"],{"07bd":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"project"},[s("h2",{staticClass:"project-name"},[t._v(t._s(t.project.name))]),s("p",{staticClass:"project-description"},[t._v(t._s(t.project.description))]),t.project.img?s("div",{staticClass:"project-image",style:"background-color: "+t.themes[t.currentTheme.id].overlay},[s("b-img",{attrs:{src:t.project.img,fluid:"",alt:t.project.name}})],1):t._e(),s("div",{staticClass:"project-tasks"},[s("h6",{staticClass:"bullet-header"},[t._v("My role")]),t._l(t.project.tasks,(function(e){return s("b-row",{key:e.id,staticClass:"tasks"},[s("b-col",[s("div",{staticClass:"bullet-item"},[s("div",{staticClass:"bullet",style:"border-color: "+t.themes[t.currentTheme.id].border}),s("div",{staticClass:"bullet-text"},[t._v(t._s(e.description))])])])],1)}))],2),s("hr"),s("b-row",{staticClass:"project-abilities"},[t.project.skills.length>0?s("b-col",{staticClass:"project-skills",attrs:{md:"6",sm:"12"}},[s("b-row",[s("b-col",{attrs:{sm:"6",xs:"12"}},[s("h6",{staticClass:"bullet-header"},[t._v("Skills")])])],1),s("b-row",t._l(t.project.skills,(function(e){return s("b-col",{key:e.id,staticClass:"bullet-item",attrs:{sm:"6",xs:"12"}},[s("div",{staticClass:"bullet",style:"border-color: "+t.themes[t.currentTheme.id].border}),s("div",{staticClass:"bullet-text"},[t._v(t._s(e.label))])])})),1)],1):t._e(),t.project.tools.length>0?s("b-col",{staticClass:"project-tools",attrs:{md:"3",sm:"6",xs:"12"}},[s("b-row",[s("b-col",[s("h6",{staticClass:"bullet-header"},[t._v("Tools")])])],1),s("b-row",[s("b-col",t._l(t.project.tools,(function(e){return s("div",{key:e.id,staticClass:"bullet-item"},[s("div",{staticClass:"bullet",style:"border-color: "+t.themes[t.currentTheme.id].border}),s("div",{staticClass:"bullet-text"},[t._v(t._s(e.label))])])})),0)],1)],1):t._e(),t.project.tech.length>0?s("b-col",{staticClass:"project-tech",attrs:{md:"3",sm:"6",xs:"12"}},[s("b-row",[s("b-col",[s("h6",{staticClass:"bullet-header"},[t._v("Tech")])])],1),s("b-row",[s("b-col",t._l(t.project.tech,(function(e){return s("div",{key:e.id,staticClass:"bullet-item"},[s("div",{staticClass:"bullet",style:"border-color: "+t.themes[t.currentTheme.id].border}),s("div",{staticClass:"bullet-text"},[t._v(t._s(e.label))])])})),0)],1)],1):t._e()],1),t.project.deliverables.length>0?s("div",{staticClass:"project-deliverables"},t._l(t.project.deliverables,(function(e){return s("b-row",{key:e.id,staticClass:"deliverable"},[s("b-col",[s("hr"),s("h4",[t._v(t._s(e.title))]),e.img?s("div",{staticClass:"deliverable-image",style:"background-color: "+t.themes[t.currentTheme.id].overlay},[s("b-img",{attrs:{src:e.img,fluid:"",alt:e.title}})],1):t._e(),s("p",[t._v(t._s(e.description))])])],1)})),1):t._e()],1)},l=[],c=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("2fa7")),o=s("c0d6"),a=s("2f62");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(s,!0).forEach((function(e){Object(c["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var b={name:"project",store:o["a"],data:function(){return{loading:!1,project:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},computed:n({},Object(a["b"])(["currentTheme","themes"])),methods:{fetchData:function(){for(var t=this.$route.params.project_slug,e=this.$store.getters.projects,s=0;s<e.length;s++)e[s].path==t.toLowerCase()&&(this.project=e[s]);window.scrollTo(0,0)}}},d=b,u=(s("76d6"),s("2877")),p=Object(u["a"])(d,r,l,!1,null,"9ddf4cf6",null);e["default"]=p.exports},"76d6":function(t,e,s){"use strict";var r=s("a2bd"),l=s.n(r);l.a},a2bd:function(t,e,s){}}]);
//# sourceMappingURL=project.40d7aa9c.js.map