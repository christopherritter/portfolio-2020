(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["resume"],{"1ba2":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{staticClass:"resume"},[s("b-row",[s("b-col",[s("h1",{staticClass:"resume-name"},[e._v("Christopher Ritter")]),s("h4",{staticClass:"resume-title"},[e._v(" User Experience Designer / User Interface Developer ")])])],1),s("b-row",{staticClass:"resume-abilities"},[s("b-col",{staticClass:"resume-skills",attrs:{md:"6",sm:"12"}},[s("b-row",[s("b-col",{attrs:{sm:"6",xs:"12"}},[s("h6",{staticClass:"bullet-header"},[e._v("Skills")])])],1),s("b-row",e._l(e.skills.slice(0,10),(function(t){return s("b-col",{key:t.id,staticClass:"bullet-item",attrs:{sm:"6",xs:"12"}},[s("div",{staticClass:"bullet",style:"border-color: "+e.themes[e.currentTheme.id].border}),s("div",{staticClass:"bullet-text"},[e._v(e._s(t.label))])])})),1)],1),s("b-col",{staticClass:"resume-tools",attrs:{md:"3",sm:"6",xs:"12"}},[s("b-row",[s("b-col",[s("h6",{staticClass:"bullet-header"},[e._v("Tools")])])],1),s("b-row",[s("b-col",e._l(e.tools.slice(0,5),(function(t){return s("div",{key:t.id,staticClass:"bullet-item"},[s("div",{staticClass:"bullet",style:"border-color: "+e.themes[e.currentTheme.id].border}),s("div",{staticClass:"bullet-text"},[e._v(e._s(t.label))])])})),0)],1)],1),s("b-col",{staticClass:"resume-tech",attrs:{md:"3",sm:"6",xs:"12"}},[s("b-row",[s("b-col",[s("h6",{staticClass:"bullet-header"},[e._v("Tech")])])],1),s("b-row",[s("b-col",e._l(e.tech.slice(0,5),(function(t){return s("div",{key:t.id,staticClass:"bullet-item"},[s("div",{staticClass:"bullet",style:"border-color: "+e.themes[e.currentTheme.id].border}),s("div",{staticClass:"bullet-text"},[e._v(e._s(t.label))])])})),0)],1)],1)],1),s("b-row",{staticClass:"resume-section"},[s("b-col",[s("h5",[e._v("Experience")])])],1),e._l(this.$store.state.employers,(function(t){return s("div",{key:t.id,staticClass:"employers"},[s("b-row",{staticClass:"company-header"},[s("b-col",[s("h2",{staticClass:"company-name"},[e._v(e._s(t.name))]),s("span",{staticClass:"company-role"},[e._v(e._s(t.title)+", "+e._s(t.startDate)+" - "+e._s(t.endDate))])])],1),e._l(e.getTasksByEmployer(t.name),(function(t){return s("b-row",{key:t.id,staticClass:"company-task"},[s("b-col",[s("div",{staticClass:"bullet-item"},[s("div",{staticClass:"bullet",style:"border-color: "+e.themes[e.currentTheme.id].border}),s("div",{staticClass:"bullet-text"},[e._v(e._s(t.description))])])])],1)}))],2)}))],2)},l=[],o=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("2fa7")),a=s("2f62");function c(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?c(s,!0).forEach((function(t){Object(o["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var n={name:"resume",data:function(){return{loading:!1,project:null,error:null}},created:function(){this.scrollToTop()},computed:i({},Object(a["b"])(["currentTheme","themes","skills","tools","tech","getTasksByEmployer"])),methods:{scrollToTop:function(){window.scrollTo(0,0)}}},b=n,u=(s("bde3"),s("2877")),d=Object(u["a"])(b,r,l,!1,null,"e057f55e",null);t["default"]=d.exports},8116:function(e,t,s){},bde3:function(e,t,s){"use strict";var r=s("8116"),l=s.n(r);l.a}}]);
//# sourceMappingURL=resume.c9757ed1.js.map