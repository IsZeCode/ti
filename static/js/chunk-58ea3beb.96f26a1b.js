(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58ea3beb","chunk-ba670f5c"],{"01e5":function(t,e,n){},2359:function(t,e,n){},"624e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mod-new-reg-bg"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"reg-form"},[n("RegForm",{ref:"reg",staticClass:"reg-form-content",attrs:{"show-submit-button":!1}}),t._v(" "),n("div",{staticClass:"reg-submit-button"},[n("div",[n("el-button",{staticStyle:{width:"12rem"},attrs:{type:"info",plain:""},on:{click:function(e){return t.next_step(-1)}}},[t._v("上一步")]),t._v(" "),n("el-button",{staticStyle:{width:"12rem","margin-left":"4rem"},attrs:{type:"info",plain:""},on:{click:function(e){return t.next_step(1)}}},[t._v("下一步")])],1),t._v(" "),n("el-button",{staticStyle:{width:"28.3rem","margin-top":"0.5rem"},attrs:{type:"primary",plain:""},on:{click:t.hdlReg}},[t._v("注册")])],1)],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mod-new-reg-text"},[n("span",{staticClass:"shadow-item"},[n("span",{staticClass:"text-title",staticStyle:{color:"#f33"}},[t._v("江")]),t._v(" "),n("span",{staticClass:"text-title",staticStyle:{color:"#0082ee"}},[t._v("河")])]),t._v(" "),n("p",[t._v("用科技")]),t._v(" "),n("p",[t._v("创造美好生活")])])}],r=n("ef69"),o={name:"RegisterPage",components:{RegForm:r["default"]},methods:{next_step:function(t){this.$refs.reg.next_step(t)},hdlReg:function(){this.$refs.reg.submitRegister(!0)}}},c=o,a=(n("70f2"),n("2877")),u=Object(a["a"])(c,i,s,!1,null,"81f746a4",null);e["default"]=u.exports},"70f2":function(t,e,n){"use strict";n("01e5")},d18c:function(t,e,n){"use strict";n("2359")},ef69:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.currentUser&&t.currentUser.id||!t.init_page_over?n("el-card",{staticStyle:{"max-width":"60rem"}},[t.is_register?n("div",{staticClass:"reg-header"},[n("h2",[t._v("欢迎注册")]),t._v(" "),n("p",[t._v("\n        已有账号\n        "),n("el-button",{attrs:{type:"text"},on:{click:t.switch_login}},[t._v("登录")])],1)]):t._e(),t._v(" "),n("RegFormItems",{ref:"reg",attrs:{loading:t.loading,user:t.current_select_id,"is-register":t.is_register,"select-is-invalid-account":t.selectIsInvalidAccount},on:{"update:loading":function(e){t.loading=e},"update:selectIsInvalidAccount":function(e){t.selectIsInvalidAccount=e},"update:select-is-invalid-account":function(e){t.selectIsInvalidAccount=e}},model:{value:t.registerForm,callback:function(e){t.registerForm=e},expression:"registerForm"}}),t._v(" "),t.is_register?t.showSubmitButton?n("el-button",{staticStyle:{width:"100%","margin-top":"1rem"},attrs:{type:"success",plain:"",loading:t.loading},on:{click:function(e){return t.submitRegister(!0)}}},[t._v("提交注册")]):t._e():n("el-card",{staticStyle:{"margin-top":"1rem"}},[n("el-form",[n("el-form-item",{attrs:{label:"认证状态"}},[n("el-tag",{attrs:{type:t.selectIsInvalidAccountType}},[t._v(t._s(t.selectIsInvalidAccountDescription))])],1),t._v(" "),n("el-form-item",{staticStyle:{"margin-top":"1rem"},attrs:{label:"账号操作"}},[n("el-button",{attrs:{type:"warning",plain:"",loading:t.loading},on:{click:function(e){return t.submitRegister(!1)}}},[t._v("修改信息")]),t._v(" "),n("el-button",{attrs:{type:"danger",plain:"",loading:t.loading},on:{click:t.removeAccount}},[t._v("删除账号")])],1),t._v(" "),"success"!==t.selectIsInvalidAccountType?n("el-form-item",{staticStyle:{"margin-top":"1rem"},attrs:{label:"账号认证"}},[n("el-button",{attrs:{disabled:0!==t.selectIsInvalidAccount,type:"success",plain:"",loading:t.loading},on:{click:function(e){return t.submitValidAccount(!0)}}},[t._v("注册信息合格")]),t._v(" "),n("el-button",{attrs:{disabled:0!==t.selectIsInvalidAccount,type:"danger",plain:"",loading:t.loading},on:{click:function(e){return t.submitValidAccount(!1)}}},[t._v("注册信息不合格")])],1):t._e()],1)],1)],1):t._e(),t._v(" "),n("el-dialog",{attrs:{visible:t.card_should_show,"append-to-body":""},on:{"update:visible":function(e){t.card_should_show=e}}},[n("NotLoginRegisterNotice")],1),t._v(" "),n("el-dialog",{attrs:{visible:t.remove_account.show,"append-to-body":""},on:{"update:visible":function(e){return t.$set(t.remove_account,"show",e)}}},[n("h2",{attrs:{slot:"title"},slot:"title"},[t._v("删除账号 - 敏感操作授权")]),t._v(" "),t.remove_account.show?n("div",[n("div",{staticStyle:{color:"#c00"}},[n("h3",[t._v("您确定要删除用户吗")]),t._v(" "),n("h3",[t._v(t._s(t.registerForm.Base.realName)+" ("+t._s(t.current_select_id)+")")])]),t._v(" "),n("el-input",{attrs:{rows:"6",type:"textarea",placeholder:"填写删除"+t.registerForm.Base.realName+"的原因"},model:{value:t.remove_account.reason,callback:function(e){t.$set(t.remove_account,"reason",e)},expression:"remove_account.reason"}}),t._v(" "),n("el-form",{staticStyle:{"margin-top":"1rem"}},[n("AuthCode",{attrs:{"select-name":"注册账户"},model:{value:t.remove_account.auth,callback:function(e){t.$set(t.remove_account,"auth",e)},expression:"remove_account.auth"}})],1)],1):t._e(),t._v(" "),n("template",{slot:"footer"},[n("el-button",{staticStyle:{color:"#d77"},attrs:{type:"text"},on:{click:t.remove_account_confirm}},[t._v("确认")]),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:function(e){t.remove_account.show=!1}}},[t._v("取消")])],1)],2)],1)},s=[],r=(n("96cf"),n("1da1")),o=(n("6b54"),n("5723")),c={name:"RegForm",components:{NotLoginRegisterNotice:function(){return n.e("chunk-72d41aea").then(n.bind(null,"e90a"))},RegFormItems:function(){return n.e("chunk-45a6dd4b").then(n.bind(null,"3bcf"))},AuthCode:function(){return n.e("chunk-2d21ee71").then(n.bind(null,"d818"))}},props:{showSubmitButton:{type:Boolean,default:!0},userInfo:{type:Object,default:null}},data:function(){return{loading:!1,selectIsInvalidAccount:!1,current_select_id:null,not_login_show:!1,init_page_over:!1,card_should_show:!1,remove_account:{auth:null,show:!1,reason:""},registerForm:null}},computed:{is_register:function(){return null===this.userInfo},currentUser:function(){return this.$store.state.user.data},is_login:function(){return this.currentUser&&this.currentUser.id},selectIsInvalidAccountType:function(){var t=this.selectIsInvalidAccount;return 0===t?"info":1===t?"success":"danger"},selectIsInvalidAccountDescription:function(){var t=this.selectIsInvalidAccount,e=t&&t.toString(),n="用户信息认证",i={"-1":"已驳回",0:"待审批",1:"已通过"};return"".concat(n," ").concat(i[e]||"未知状态")}},watch:{init_page_over:function(t){this.card_should_show=t&&!this.is_login},is_login:function(t){this.card_should_show=!t&&this.init_page_over},userInfo:{handler:function(t){t&&(this.current_select_id=t.id)},immediate:!0}},mounted:function(){var t=this;setTimeout((function(){t.init_page_over=!0}),5e3)},methods:{modifyUser:o["h"],regnew:o["j"],submitValidAccount:function(t){var e=this;if(""===this.current_select_id)return this.$message.error("未选中用户");var n=t?"认证":"退回",i="即将对用户".concat(this.registerForm.Base.realName,"(").concat(this.current_select_id,")的注册进行【").concat(n,"】操作");this.$confirm(i,"".concat(n,"提示"),{type:"warning"}).then((function(){var n=e.current_select_id;e.loading=!0,Object(o["b"])(n,t).then((function(){var n=t?"授权成功，可通知登录":"驳回成功，可通知重新注册";e.$message.success(n),e.$emit("requireUpdate")})).finally((function(){e.loading=!1}))}))},next_step:function(t){return this.$refs.reg.next_step(t)},submitRegister:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,i,s,r,c,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("确定要提交吗？");case 2:if(e||"success"===this.selectIsInvalidAccountType){t.next=6;break}return n="注意：当前用户状态为【待认证】，修改信息将使得其通过认证，认证人为信息修改者。是否继续？",t.next=6,this.$confirm(n);case 6:this.loading=!0,i=this.registerForm,s=i.Application,i.password=s.password,i.confirmPassword=s.confirmPassword,this.set_account_status(i),r={Data:i,verify:{code:"201700816"},Auth:i.Auth},c=e?o["j"]:o["h"],c(r).then((function(t){a.$message.success(e?"注册成功":"修改成功"),a.$emit("requireUpdate"),e&&a.$router.push("/")})).finally((function(){a.loading=!1}));case 15:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),removeAccount:function(){var t=this;this.$confirm("确定要删除此账号吗？","警告",{type:"error"}).then((function(){t.remove_account.show=!0}))},remove_account_confirm:function(){var t=this;this.loading=!0,Object(o["k"])({data:{id:this.current_select_id,reason:this.remove_account.reason},auth:this.remove_account.auth}).then((function(){t.$emit("requireUpdate"),t.$emit("requireHide"),t.$message.success("已删除账号")})).finally((function(){t.loading=!1,t.remove_account.show=!1}))},switch_login:function(){this.$store.dispatch("user/logout")}}},a=c,u=(n("d18c"),n("2877")),l=Object(u["a"])(a,i,s,!1,null,"24cb225a",null);e["default"]=l.exports}}]);