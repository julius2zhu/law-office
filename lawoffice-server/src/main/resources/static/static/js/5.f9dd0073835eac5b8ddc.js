webpackJsonp([5],{ExED:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{itemName:"我的工作台",testCase:[{title:"南京市六合区人民检察院对南京亚伟金属制品有限公司、周正宏等提起民事公益诉讼"},{title:"江苏省南京市浦口区人民检察院对王东提起民事公益诉讼的"},{title:"泰州市高港区人民检察院对张双燕、胡义秀提起民事公益诉讼"}],testProject:[{title:"测试项目1"},{title:"测试项目2"},{title:"测试项目3"},{title:"测试项目4"}],testTask:[{title:"测试任务1"},{title:"测试任务2"},{title:"测试任务3"},{title:"测试任务4"}],testDynamic:[{title:"julius创建了项目:aaaaa",createTime:"50分钟前"},{title:"julius创建了项目:aaaaa",createTime:"20分钟前"},{title:"julius创建了项目:aaaaa",createTime:"10分钟前"},{title:"julius创建了项目:aaaaa",createTime:"3分钟前"}],testNotice:[{title:"我院定于2021-01-15 08:40:00在金华市中级人民法院开庭审理原告中国黄金集团黄金珠宝股份有限公司诉被告浦江县龙飞凤珠宝店侵害商标权纠纷一案\n"},{title:"我院定于2021-01-14 08:40:00在金华市中级人民法院开庭审理原告泉州市如果家居工艺有限公司诉被告浦江蒲韩工艺品有限公司著作权权属、侵权纠纷一案\n"},{title:"我院定于2021-01-14 14:00:00在嘉善县人民法院开庭审理原告嘉兴鑫铭行房地产经纪有限公司诉被告昆山淀山湖庄园房地产发展"},{title:"我院定于2021-01-13 14:00:00在德清县人民法院开庭审理原告费海峰诉被告徐洪兵民间借贷纠纷一案"},{title:"我院定于2021-01-13 14:30:00在绍兴市越城区人民法院开庭审理原告陶阿任,沈萍诉被告沈爱文,沈伟康,沈伟民继承纠纷一案"}],activeIndex:"1"}},methods:{atOpen:function(){console.log("open")},handleSelect:function(t){this.activeIndex=t}},components:{MainNavTop:function(){return i.e(11).then(i.bind(null,"GWzf"))}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-work-bench"},[i("MainNavTop",{attrs:{itemName:t.itemName}}),t._v(" "),i("div",{staticClass:"tips"},[i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticStyle:{"font-weight":"bold"}},[t._v("\n          “ 冰雪正在消融，希望就在眼前。”\n        ")])]),t._v(" "),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"on-case"},[i("el-link",{attrs:{underline:!1}},[t._v("\n            在办案件/项目  3(件)\n          ")])],1)]),t._v(" "),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"save-case"},[i("el-link",{attrs:{underline:!1}},[t._v("\n            归档案件/项目  3(件)\n          ")])],1)]),t._v(" "),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"save-times"},[i("el-link",{attrs:{underline:!1}},[t._v("\n            已记录工时  10(时)\n          ")])],1)])],1)],1),t._v(" "),i("el-divider"),t._v(" "),i("el-container",[i("el-aside",{attrs:{width:"70%"}},[i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"1"}},[t._v("我的在办案件")]),t._v(" "),i("el-menu-item",{attrs:{index:"2"}},[t._v("我的在办项目")]),t._v(" "),i("el-menu-item",{attrs:{index:"3"}},[t._v("我的待办任务")])],1),t._v(" "),"1"===t.activeIndex?i("div",t._l(t.testCase,function(e,n){return i("el-card",{key:n,attrs:{shadow:"hover"}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),1):"2"===t.activeIndex?i("div",t._l(t.testProject,function(e,n){return i("el-card",{key:n,attrs:{shadow:"hover"}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),1):"3"===t.activeIndex?i("div",t._l(t.testTask,function(e,n){return i("el-card",{key:n,attrs:{shadow:"hover"}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),1):t._e(),t._v(" "),i("el-divider"),t._v(" "),i("div",{staticClass:"side-notice"},[i("i",{staticClass:"iconfont icongonggao-copy"}),t._v("法院业务公告\n        "),i("el-divider"),t._v(" "),t._l(t.testNotice,function(e,n){return i("el-card",{key:n,attrs:{shadow:"hover"}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),t._v(" "),i("el-link",{staticClass:"el-link-more",attrs:{underline:!1}},[t._v("查看更多"),i("i",{staticClass:"iconfont iconmore"})])],2)],1),t._v(" "),i("el-main",{staticClass:"dynamic-main"},[t._v("\n      动态\n      "),i("p",[t._l(t.testDynamic,function(e,n){return i("el-card",{key:n,attrs:{shadow:"hover"}},[t._v("\n          "+t._s(e.title)+" "+t._s(e.createTime)+"\n        ")])}),t._v(" "),i("el-link",{staticClass:"el-link-more",attrs:{underline:!1}},[t._v("查看更多"),i("i",{staticClass:"iconfont iconmore"})])],2)])],1)],1)},staticRenderFns:[]};var s=i("VU/8")(n,a,!1,function(t){i("RYnA")},"data-v-7d730bd7",null);e.default=s.exports},RYnA:function(t,e){}});
//# sourceMappingURL=5.f9dd0073835eac5b8ddc.js.map