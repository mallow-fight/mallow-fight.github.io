webpackJsonp([1],{Gjee:function(t,s){},ysIS:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={name:"LayoutWrap",data:function(){return{navConfig:{navTitle:"Layout 布局",navExplain:"协助进行页面级整体布局。",when2useExplain:["使得页面变得整洁有序。"],exampleBody:[{title:"上-中-下，布局",code:'\n<Layouter>\n    <div slot="top" class="top">\n        this is top.\n    </div>\n    <div slot="main" class="main">\n        this is main.\n    </div>\n    <div slot="down" class="down">\n        this is down.\n    </div>\n</Layouter>\n'},{title:"上-中-侧-下，布局",code:'\n<Layouter type="topMainSideDown">\n    <div slot="top" class="top">\n        this is top.\n    </div>\n    <div slot="main" class="main">\n        this is main.\n    </div>\n    <div slot="side" class="side">\n        this is side.\n    </div>\n    <div slot="down" class="down">\n        this is down.\n    </div>\n</Layouter>\n'},{title:"上-侧-中-下，布局",code:'\n<Layouter type="topSideMainDown">\n    <div slot="top" class="top">\n        this is top.\n    </div>\n    <div slot="side" class="side">\n        this is side.\n    </div>\n    <div slot="main" class="main">\n        this is main.\n    </div>\n    <div slot="down" class="down">\n        this is down.\n    </div>\n</Layouter>\n'},{title:"侧-上-中-下，布局",code:'\n<Layouter type="sideTopMainDown">\n    <div slot="side" class="side">\n        this is side.\n    </div>\n    <div slot="top" class="top">\n        this is top.\n    </div>\n    <div slot="main" class="main">\n        this is main.\n    </div>\n    <div slot="down" class="down">\n        this is down.\n    </div>\n</Layouter>\n'}],api:[["type","布局类型","string","topMainDown"]]}}}},o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("nav-wrap",{attrs:{navConfig:t.navConfig}},[i("div",{attrs:{slot:t.navConfig.exampleBody[0].title},slot:t.navConfig.exampleBody[0].title},[i("Layouter",{attrs:{type:"topMainDown"}},[i("div",{staticClass:"top",attrs:{slot:"top"},slot:"top"},[t._v("\n              this is top.\n          ")]),i("div",{staticClass:"main",attrs:{slot:"main"},slot:"main"},[t._v("\n              this is main.\n          ")]),i("div",{staticClass:"down",attrs:{slot:"down"},slot:"down"},[t._v("\n              this is down.\n          ")])])],1),i("div",{attrs:{slot:t.navConfig.exampleBody[1].title},slot:t.navConfig.exampleBody[1].title},[i("Layouter",{attrs:{type:"topMainSideDown"}},[i("div",{staticClass:"top",attrs:{slot:"top"},slot:"top"},[t._v("\n              this is top.\n          ")]),i("div",{staticClass:"main",attrs:{slot:"main"},slot:"main"},[t._v("\n              this is main.\n          ")]),i("div",{staticClass:"side",attrs:{slot:"side"},slot:"side"},[t._v("\n              this is side.\n          ")]),i("div",{staticClass:"down",attrs:{slot:"down"},slot:"down"},[t._v("\n              this is down.\n          ")])])],1),i("div",{attrs:{slot:t.navConfig.exampleBody[2].title},slot:t.navConfig.exampleBody[2].title},[i("Layouter",{attrs:{type:"topSideMainDown"}},[i("div",{staticClass:"top",attrs:{slot:"top"},slot:"top"},[t._v("\n              this is top.\n          ")]),i("div",{staticClass:"side",attrs:{slot:"side"},slot:"side"},[t._v("\n              this is side.\n          ")]),i("div",{staticClass:"main",attrs:{slot:"main"},slot:"main"},[t._v("\n              this is main.\n          ")]),i("div",{staticClass:"down",attrs:{slot:"down"},slot:"down"},[t._v("\n              this is down.\n          ")])])],1),i("div",{attrs:{slot:t.navConfig.exampleBody[3].title},slot:t.navConfig.exampleBody[3].title},[i("Layouter",{attrs:{type:"sideTopMainDown"}},[i("div",{staticClass:"side-large",attrs:{slot:"side"},slot:"side"},[t._v("\n              this is side.\n          ")]),i("div",{staticClass:"top",attrs:{slot:"top"},slot:"top"},[t._v("\n              this is top.\n          ")]),i("div",{staticClass:"main",attrs:{slot:"main"},slot:"main"},[t._v("\n              this is main.\n          ")]),i("div",{staticClass:"down",attrs:{slot:"down"},slot:"down"},[t._v("\n              this is down.\n          ")])])],1)])},a=[],d=i("XyMi");function l(t){i("Gjee")}var e=!1,v=l,p="data-v-eb303008",r=null,c=Object(d["a"])(n,o,a,e,v,p,r);s["default"]=c.exports}});
//# sourceMappingURL=1.155ec12a.js.map