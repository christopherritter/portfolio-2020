(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["project"],{"07bd":function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"project"},[s("h2",{staticClass:"project-name"},[t._v(t._s(t.project.name))]),s("p",{staticClass:"project-description"},[t._v(t._s(t.project.description))]),t.project.img?s("div",{staticClass:"project-image bg-light"},[s("b-img",{attrs:{src:t.project.img,fluid:"",alt:t.project.name}})],1):t._e(),s("div",{staticClass:"project-tasks"},[s("h6",{staticClass:"bullet-header"},[t._v("My role")]),t._l(t.project.tasks,(function(e){return s("b-row",{key:e.id,staticClass:"tasks"},[s("b-col",[s("div",{staticClass:"bullet-item"},[s("div",{staticClass:"bullet"}),s("div",{staticClass:"bullet-text"},[t._v(t._s(e.description))])])])],1)}))],2),s("hr"),s("b-row",{staticClass:"project-abilities"},[t.project.skills.length>0?s("b-col",{attrs:{md:"6"}},[s("b-row",[s("b-col",[s("h6",{staticClass:"bullet-header"},[t._v("Skills")])])],1),s("b-row",t._l(t.project.skills,(function(e){return s("b-col",{key:e.id,staticClass:"bullet-item",attrs:{cols:"6"}},[s("div",{staticClass:"bullet"}),s("div",{staticClass:"bullet-text"},[t._v(t._s(e.label))])])})),1)],1):t._e(),t.project.tools.length>0?s("b-col",{attrs:{cols:"3"}},[s("b-row",[s("b-col",[s("h6",{staticClass:"bullet-header"},[t._v("Tools")])])],1),s("b-row",[s("b-col",t._l(t.project.tools,(function(e){return s("div",{key:e.id,staticClass:"bullet-item"},[s("div",{staticClass:"bullet"}),s("div",{staticClass:"bullet-text"},[t._v(t._s(e.label))])])})),0)],1)],1):t._e(),t.project.tech.length>0?s("b-col",{attrs:{cols:"3"}},[s("b-row",[s("b-col",[s("h6",{staticClass:"bullet-header"},[t._v("Tech")])])],1),s("b-row",[s("b-col",t._l(t.project.tech,(function(e){return s("div",{key:e.id,staticClass:"bullet-item"},[s("div",{staticClass:"bullet"}),s("div",{staticClass:"bullet-text"},[t._v(t._s(e.label))])])})),0)],1)],1):t._e()],1),t.project.deliverables.length>0?s("div",{staticClass:"project-deliverables"},t._l(t.project.deliverables,(function(e){return s("b-row",{key:e.id,staticClass:"deliverable"},[s("b-col",[s("hr"),s("h4",[t._v(t._s(e.title))]),e.img?s("div",{staticClass:"deliverable-image bg-light"},[s("b-img",{attrs:{src:e.img,fluid:"",alt:e.title}})],1):t._e(),s("p",[t._v(t._s(e.description))])])],1)})),1):t._e()],1)},a=[],i=s("c0d6"),c={name:"project",store:i["a"],data:function(){return{loading:!1,project:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){for(var t=this.$route.params.project_slug,e=this.$store.getters.projects,s=0;s<e.length;s++)e[s].path==t.toLowerCase()&&(this.project=e[s]);window.scrollTo(0,0)}}},r=c,o=(s("a9ee"),s("2877")),n=Object(o["a"])(r,l,a,!1,null,"244e8b48",null);e["default"]=n.exports},"376f":function(t,e,s){},a9ee:function(t,e,s){"use strict";var l=s("376f"),a=s.n(l);a.a}}]);
//# sourceMappingURL=project.add53cf7.js.map