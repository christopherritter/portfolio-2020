(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["resume"],{"1ba2":function(t,s,e){"use strict";e.r(s);var l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-container",{staticClass:"about"},[e("b-row",[e("b-col",[e("h1",{staticClass:"resume-name"},[t._v("Christopher Ritter")]),e("h4",{staticClass:"resume-title"},[t._v(" User Experience Designer / Front-End Developer ")])])],1),e("b-row",{staticClass:"resume-abilities"},[e("b-col",{attrs:{md:"6"}},[e("b-row",[e("b-col",[e("h6",{staticClass:"bullet-header"},[t._v("Skills")])])],1),e("b-row",t._l(t.skillList.slice(0,10),(function(s){return e("b-col",{key:s.id,staticClass:"bullet-item",attrs:{cols:"6"}},[e("div",{staticClass:"bullet"}),e("div",{staticClass:"bullet-text"},[t._v(t._s(s.label))])])})),1)],1),e("b-col",{attrs:{cols:"3"}},[e("b-row",[e("b-col",[e("h6",{staticClass:"bullet-header"},[t._v("Tools")])])],1),e("b-row",[e("b-col",t._l(t.toolList.slice(0,5),(function(s){return e("div",{key:s.id,staticClass:"bullet-item"},[e("div",{staticClass:"bullet"}),e("div",{staticClass:"bullet-text"},[t._v(t._s(s.label))])])})),0)],1)],1),e("b-col",{attrs:{cols:"3"}},[e("b-row",[e("b-col",[e("h6",{staticClass:"bullet-header"},[t._v("Tech")])])],1),e("b-row",[e("b-col",t._l(t.techList.slice(0,5),(function(s){return e("div",{key:s.id,staticClass:"bullet-item"},[e("div",{staticClass:"bullet"}),e("div",{staticClass:"bullet-text"},[t._v(t._s(s.label))])])})),0)],1)],1)],1),e("b-row",{staticClass:"resume-section"},[e("b-col",[e("h5",[t._v("Experience")])])],1),t._l(this.$store.state.employers,(function(s){return e("div",{key:s.id,staticClass:"employers"},[e("b-row",{staticClass:"company-header"},[e("b-col",[e("h2",{staticClass:"company-name"},[t._v(t._s(s.name))]),e("span",{staticClass:"company-role"},[t._v(t._s(s.title)+", "+t._s(s.startDate)+" - "+t._s(s.endDate))])])],1),t._l(t.taskList,(function(l){return e("div",{key:l.id,staticClass:"company-tasks"},[s.name==l.employer?e("b-row",{staticClass:"tasks"},[e("b-col",[e("div",{staticClass:"bullet-item"},[e("div",{staticClass:"bullet"}),e("div",{staticClass:"bullet-text"},[t._v(t._s(l.description))])])])],1):t._e()],1)}))],2)}))],2)},i=[],a=e("c0d6"),o={name:"resume",store:a["a"],data:function(){return{loading:!1,project:null,error:null}},created:function(){this.scrollToTop()},computed:{taskList:function(){return this.$store.getters.tasks},skillList:function(){return this.$store.getters.skills},toolList:function(){return this.$store.getters.tools},techList:function(){return this.$store.getters.tech}},methods:{scrollToTop:function(){window.scrollTo(0,0)}}},c=o,r=(e("8a4a"),e("2877")),n=Object(r["a"])(c,l,i,!1,null,"65e6d43e",null);s["default"]=n.exports},"73c9":function(t,s,e){},"8a4a":function(t,s,e){"use strict";var l=e("73c9"),i=e.n(l);i.a}}]);
//# sourceMappingURL=resume.861af558.js.map