(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddd83"],{"82b5":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[n("h2",[e._v("批量操作")])]},proxy:!0}])},[e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showMoveTo=!0}}},[e._v("移动到...")])],1),e._v(" "),n("el-dialog",{attrs:{visible:e.showMoveTo,"append-to-body":""},on:{"update:visible":function(t){e.showMoveTo=t}}},[n("el-form",{attrs:{"label-width":"6rem"}},[n("el-form-item",{attrs:{label:"待调整人员"}},[n("UserBatchSelector",{attrs:{users:e.currentFocusUsers,"selected-users":e.data.ids,"btn-edit-label":null},on:{"update:selectedUsers":function(t){return e.$set(e.data,"ids",t)},"update:selected-users":function(t){return e.$set(e.data,"ids",t)},requireEdit:e.handleEdit}})],1),e._v(" "),n("el-form-item",{attrs:{label:"单位类型",error:e.validator.companyType}},[n("CompanyTypeSelector",{model:{value:e.data.companyType,callback:function(t){e.$set(e.data,"companyType",t)},expression:"data.companyType"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"目标单位",error:e.validator.modifyTo}},[n("CompanySelector",{attrs:{code:e.data.modifyTo},on:{"update:code":function(t){return e.$set(e.data,"modifyTo",t)}}})],1),e._v(" "),n("el-form-item",{attrs:{label:"操作授权"}},[n("AuthCode",{attrs:{form:e.auth,"select-name":"UserBatchOperation"},on:{"update:form":function(t){e.auth=t}}})],1),e._v(" "),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"success"},on:{click:e.handleEdit}},[e._v("提交")]),e._v(" "),n("el-button",{attrs:{type:"info"},on:{click:function(t){e.showMoveTo=!1}}},[e._v("取消")])],1)],1)],1)},r=[],o=(n("96cf"),n("1da1")),i=(n("ac6a"),n("8615"),n("20d6"),n("cf93")),u=n("211b"),s={name:"BatchOperation",components:{CompanyTypeSelector:function(){return n.e("chunk-2d0d0b28").then(n.bind(null,"68a1"))},CompanySelector:function(){return n.e("chunk-172cd786").then(n.bind(null,"3036"))},UserBatchSelector:function(){return n.e("chunk-492a8300").then(n.bind(null,"32f9"))},AuthCode:function(){return n.e("chunk-2d21ee71").then(n.bind(null,"d818"))}},model:{event:"change",prop:"currentFocusUsers"},props:{currentFocusUsers:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,showMoveTo:!1,companyTypes:i["a"],data:{companyType:null,modifyTo:null,ids:[]},hasTriedSubmit:!1,auth:null}},computed:{validator:function(){if(!this.hasTriedSubmit)return{};var e=this.data,t={modifyTo:e.modifyTo?null:"未填写",companyType:null!==e.companyType?null:"未填写"},n=!(Object.values(t).findIndex((function(e){return e}))>-1);return Object.assign({v:n},t)}},watch:{currentFocusUsers:{handler:function(e){this.data.ids=e.map((function(e){return e.id||e}))},immediate:!0}},methods:{handleEdit:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.hasTriedSubmit){e.next=3;break}return this.hasTriedSubmit=!0,e.abrupt("return",this.$nextTick((function(){r.handleEdit()})));case 3:if(t=this.auth,n=this.data,a=n.ids.map((function(e){return{companyType:n.companyType,modifyTo:n.modifyTo,id:e}})),this.validator.v){e.next=7;break}return e.abrupt("return",this.$message.warning("信息有误，请检查填写项"));case 7:return e.next=9,this.$confirm("即将批量更改".concat(a.length,"名人员的信息，确定吗？"),"确定更改");case 9:this.loading=!0,Object(u["k"])(a,t).then((function(e){})).finally((function(){r.$message.success("已批量更改完成"),r.$emit("requireUpdate"),r.loading=!1}));case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},c=s,d=n("2877"),l=Object(d["a"])(c,a,r,!1,null,null,null);t["default"]=l.exports}}]);