webpackJsonp([15],{"3UHx":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l("oFuF"),a=l("2CGT"),r={name:"AddOrUpdateClient",data:function(){return{dialogFormVisible:!1,formLabelWidth:"130px",form:{id:null,clientNumber:null,identification:"个人",teamStatus:null,startDate:null,endDate:null,followup:null,origin:null,unitName:null,importance:null,address:null,representative:null,mobile:null,creditCode:null,backup:null}}},methods:{submitForm:function(){var e=this;null===this.formData?Object(a.f)(this.form).then(function(t){Object(o.commonToast)(e,null,t.message)}):Object(o.commonToast)(e,"error","功能暂未实现")},closeMyDialog:function(){this.$emit("closeDialog")}},mounted:function(){this.dialogFormVisible=!0,this.form=this.formData},props:["dialogTitle","closeDialog","formData"]},i={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.closeMyDialog}},[l("div",{staticClass:"el-dialog-div"},[l("el-form",{attrs:{model:e.form}},[l("h4",[e._v("客户基本信息")]),e._v(" "),l("el-form-item",{attrs:{label:"客户编号:","label-width":e.formLabelWidth,prop:"name"}},[l("el-input",{attrs:{placeholder:"请填写客户编号",autocomplete:"off"},model:{value:e.form.clientNumber,callback:function(t){e.$set(e.form,"clientNumber",t)},expression:"form.clientNumber"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"客户标识:","label-width":e.formLabelWidth,prop:"name"}},[l("el-radio",{attrs:{label:"个人"},model:{value:e.form.identification,callback:function(t){e.$set(e.form,"identification",t)},expression:"form.identification"}},[e._v("个人")]),e._v(" "),l("el-radio",{attrs:{label:"单位"},model:{value:e.form.identification,callback:function(t){e.$set(e.form,"identification",t)},expression:"form.identification"}},[e._v("单位")])],1),e._v(" "),l("el-form-item",{attrs:{label:"合作状态:","label-width":e.formLabelWidth,prop:"type"}},[l("el-select",{attrs:{placeholder:"请选择合作状态"},model:{value:e.form.teamStatus,callback:function(t){e.$set(e.form,"teamStatus",t)},expression:"form.teamStatus"}},[l("el-option",{attrs:{label:"签约",value:"签约"}}),e._v(" "),l("el-option",{attrs:{label:"意向",value:"意向"}}),e._v(" "),l("el-option",{attrs:{label:"潜在",value:"潜在"}}),e._v(" "),l("el-option",{attrs:{label:"终止",value:"终止"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"合同起止时间:","label-width":e.formLabelWidth,prop:"entrust"}},[l("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.startDate,callback:function(t){e.$set(e.form,"startDate",t)},expression:"form.startDate"}}),e._v(" "),l("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.endDate,callback:function(t){e.$set(e.form,"endDate",t)},expression:"form.endDate"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"跟进人:","label-width":e.formLabelWidth,prop:"name"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.followup,callback:function(t){e.$set(e.form,"followup",t)},expression:"form.followup"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"客户来源:","label-width":e.formLabelWidth,prop:"name"}},[l("el-select",{attrs:{placeholder:"请选择客户来源"},model:{value:e.form.origin,callback:function(t){e.$set(e.form,"origin",t)},expression:"form.origin"}},[l("el-option",{attrs:{label:"业务开发",value:"业务开发"}}),e._v(" "),l("el-option",{attrs:{label:"客户介绍",value:"客户介绍"}}),e._v(" "),l("el-option",{attrs:{label:"客户主动联系",value:"客户主动联系"}}),e._v(" "),l("el-option",{attrs:{label:"朋友介绍",value:"朋友介绍"}}),e._v(" "),l("el-option",{attrs:{label:"宣传推广",value:"宣传推广"}}),e._v(" "),l("el-option",{attrs:{label:"网上获取",value:"网上获取"}}),e._v(" "),l("el-option",{attrs:{label:"法律援助",value:"法律援助"}}),e._v(" "),l("el-option",{attrs:{label:"其他",value:"其他"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"单位名称:","label-width":e.formLabelWidth,prop:"name"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.unitName,callback:function(t){e.$set(e.form,"unitName",t)},expression:"form.unitName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"客户重要性:","label-width":e.formLabelWidth,prop:"name"}},[l("el-select",{attrs:{placeholder:"请选择客户重要性"},model:{value:e.form.importance,callback:function(t){e.$set(e.form,"importance",t)},expression:"form.importance"}},[l("el-option",{attrs:{label:"核心",value:"核心"}}),e._v(" "),l("el-option",{attrs:{label:"重要",value:"重要"}}),e._v(" "),l("el-option",{attrs:{label:"一般",value:"一般"}}),e._v(" "),l("el-option",{attrs:{label:"次要",value:"次要"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"单位地址:","label-width":e.formLabelWidth,prop:"name"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"法定代表人:","label-width":e.formLabelWidth,prop:"name"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.representative,callback:function(t){e.$set(e.form,"representative",t)},expression:"form.representative"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"联系电话:","label-width":e.formLabelWidth,prop:"name"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"统一社会信用代码:","label-width":e.formLabelWidth,prop:"name"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.creditCode,callback:function(t){e.$set(e.form,"creditCode",t)},expression:"form.creditCode"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"备注:","label-width":e.formLabelWidth,prop:"name"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.form.backup,callback:function(t){e.$set(e.form,"backup",t)},expression:"form.backup"}})],1)],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("立即创建")]),e._v(" "),l("el-button",{on:{click:e.closeMyDialog}},[e._v("关闭")])],1)],1)])],1)},staticRenderFns:[]};var n=l("VU/8")(r,i,!1,function(e){l("iehR")},"data-v-1deed068",null);t.default=n.exports},iehR:function(e,t){}});
//# sourceMappingURL=15.7582c66ef56587d399e0.js.map