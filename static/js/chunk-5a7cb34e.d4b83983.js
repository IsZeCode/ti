(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a7cb34e"],{"3b3c":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.currentUser&&e.currentUser.id?n("div",[n("el-card",[n("el-card",[n("el-form",[n("el-form-item",{attrs:{label:"选择成员"}},[n("UserSelector",{staticStyle:{display:"inline",margin:"0 1rem 0 0"},attrs:{code:e.nowSelectRealName,"default-info":"未选择"},on:{"update:code":function(t){e.nowSelectRealName=t},change:e.handleCurrentChange}})],1),e._v(" "),n("el-form-item",{attrs:{label:"选择单位"}},[n("CompanySelector",{staticStyle:{width:"40%"},attrs:{placeholder:"选择需要检查的单位"},model:{value:e.nowSelectCompany,callback:function(t){e.nowSelectCompany=t},expression:"nowSelectCompany"}})],1),e._v(" "),n("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.requireLoadWaitToAuthRegisterUsers}},[e._v("刷新")]),e._v(" "),n("CompanyTypeSelector",{model:{value:e.MembersQuery.userCompanyType,callback:function(t){e.$set(e.MembersQuery,"userCompanyType",t)},expression:"MembersQuery.userCompanyType"}})],1)],1),e._v(" "),e.currentFocusUsers.length?n("BatchOperation",{ref:"BatchOperation",staticClass:"right-hover-panel flashing-layout-right",on:{requireUpdate:e.requireLoadWaitToAuthRegisterUsers},model:{value:e.currentFocusUsers,callback:function(t){e.currentFocusUsers=t},expression:"currentFocusUsers"}}):e._e(),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.waitToAuthRegisterUsers,"highlight-current-row":""},on:{"row-dblclick":e.handleCurrentChange,"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{label:"姓名",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{placement:"right-start",trigger:"hover"},on:{show:function(e){t.row.userHasShow=!0}}},[n("User",{attrs:{data:t.row,"can-load-avatar":t.row.userHasShow}}),e._v(" "),n("span",{attrs:{slot:"reference"},slot:"reference"},[e._v(e._s(t.row.realName))])],1)]}}],null,!1,2464504763)}),e._v(" "),n("el-table-column",{attrs:{prop:"dutiesName",label:"职务",width:"150"}}),e._v(" "),n("el-table-column",{attrs:{prop:"accountAuthStatus",label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:1==t.row.accountAuthStatus?"success":0==t.row.accountAuthStatus?"info":"danger"}},[e._v("\n              "+e._s(1==t.row.accountAuthStatus?"已认证":0==t.row.accountAuthStatus?"待认证":"已退回"))])]}}],null,!1,4202994780)})],1),e._v(" "),n("Pagination",{attrs:{pagesetting:e.MembersQuery.page,"total-count":e.MembersQueryTotalCount},on:{"update:pagesetting":function(t){return e.$set(e.MembersQuery,"page",t)}}})],1)],1):n("Login"),e._v(" "),n("el-dialog",{attrs:{visible:e.approve_show},on:{"update:visible":function(t){e.approve_show=t}}},[n("el-tabs",{model:{value:e.detail_pane,callback:function(t){e.detail_pane=t},expression:"detail_pane"}},[n("el-tab-pane",{attrs:{label:"基本信息"}},["0"==e.detail_pane?n("Register",{attrs:{"user-info":e.current_select_id},on:{requireUpdate:e.requireLoadWaitToAuthRegisterUsers,requireHide:function(t){e.approve_show=!1}}}):e._e()],1),e._v(" "),n("el-tab-pane",{attrs:{label:"权限管理"}},["1"==e.detail_pane?n("UserPermission",{attrs:{"user-id":e.current_select_id&&e.current_select_id.id}}):e._e()],1),e._v(" "),n("el-tab-pane",{attrs:{label:"操作日志"}},["2"==e.detail_pane?n("div",[n("Loading")],1):e._e()])],1)],1)],1)},a=[],o=n("3835"),u=(n("ac6a"),n("5df3"),n("96cf"),n("1da1")),i=n("fcac"),s=n("211b"),c=n("61f7"),l=n("ed08"),d=n("cf93"),p={name:"Approve",components:{UserSelector:function(){return n.e("chunk-0d10889b").then(n.bind(null,"2cfb"))},CompanySelector:function(){return n.e("chunk-172cd786").then(n.bind(null,"3036"))},Pagination:function(){return n.e("chunk-2d0b95e7").then(n.bind(null,"333d"))},Login:function(){return n.e("chunk-cd4b7b7e").then(n.bind(null,"9ed6"))},User:function(){return Promise.resolve().then(n.bind(null,"345a"))},Register:function(){return n.e("chunk-ba670f5c").then(n.bind(null,"ef69"))},UserPermission:function(){return n.e("chunk-ee524da2").then(n.bind(null,"4cb5"))},Loading:function(){return n.e("chunk-ea016e34").then(n.bind(null,"b3f2"))},BatchOperation:function(){return n.e("chunk-2d0ddd83").then(n.bind(null,"82b5"))},CompanyTypeSelector:function(){return n.e("chunk-2d0d0b28").then(n.bind(null,"68a1"))}},data:function(){return{MembersQuery:{userCompanyType:0,page:{pageIndex:0,pageSize:10}},companyTypes:d["a"],nowSelectRealName:"",MembersQueryTotalCount:0,waitToAuthRegisterUsers:[],current_select_id:null,nowSelectCompany:null,loading:!1,detail_pane:"",currentFocusUsers:[]}},computed:{currentUser:function(){return this.$store.state.user.data},currentCmp:function(){return this.$store.state.user.companyid},requireLoadWaitToAuthRegisterUsers:function(){var e=this;return Object(l["b"])((function(){e.loadWaitToAuthRegisterUsers()}),500)},approve_show:{get:function(){return null!==this.current_select_id},set:function(e){e||(this.current_select_id=null)}}},watch:{currentCmp:{handler:function(e){this.nowSelectCompany={code:e},this.not_login_show=!e},immediate:!0},nowSelectCompany:{handler:function(e){e&&(this.MembersQuery.page.pageIndex=0,this.requireLoadWaitToAuthRegisterUsers())},immediate:!0},MembersQuery:{handler:function(e){e&&this.requireLoadWaitToAuthRegisterUsers()},deep:!0}},methods:{handleSelectionChange:function(e){this.currentFocusUsers=e},handleCurrentChange:function(e){e&&(this.current_select_id=e)},loadSingleUser:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t=[],n=function(e){t.push(new Promise((function(t,n){var r=a.waitToAuthRegisterUsers[e];return Promise.all([Object(s["b"])(r.id)]).then((function(e){var n=Object(o["a"])(e,1),a=n[0];r.avatar=a.url,t()})).catch((function(e){return n(e)}))})))},r=0;r<this.waitToAuthRegisterUsers.length;r++)n(r);return e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadUserList:function(e){var t=e.map((function(e){var t={userHasShow:!1,avatar:"",accountAuthStatus:Object(c["a"])(e.inviteBy)};return Object.assign(e,t)}));return t},loadWaitToAuthRegisterUsers:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.loading=!0,t=this.nowSelectCompany.code,n=this.MembersQuery,r=n.page,a=Object.assign({code:t},this.MembersQuery),a=Object.assign(a,r),Object(i["f"])(a).then(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.MembersQueryTotalCount=t.totalCount,o.waitToAuthRegisterUsers=o.loadUserList(t.list),e.next=4,o.loadSingleUser();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){o.loading=!1}));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},h=p,f=(n("df1f"),n("2877")),g=Object(f["a"])(h,r,a,!1,null,"54095c37",null);t["default"]=g.exports},cf93:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=["汉族","壮族","满族","回族","苗族","维吾尔族","土家族","彝族","蒙古族","藏族","布依族","侗族","瑶族","朝鲜族","白族","哈尼族","哈萨克族","黎族","傣族","畲族","僳僳族","仡佬族","东乡族","拉祜族","水族","佤族","纳西族","羌族","土族","仫佬族","锡伯族","柯尔克孜族","达斡尔族","景颇族","毛南族","撒拉族","布朗族","塔吉克族","阿昌族","普米族","鄂温克族","怒族","京族","基诺族","德昂族","保安族","俄罗斯族","裕固族","乌孜别克族","门巴族","鄂伦春族","独龙族","塔塔尔族","赫哲族","高山族","珞巴族"],a=["无","小学","初中","中专","高中","专科","本科","硕研","博研","博研后"],o=[[0,"按管理单位"],[1,"按编制单位"],[2,"按休假审批单位"],[4,"按请假审批单位"]]},df1f:function(e,t,n){"use strict";n("f0d3")},f0d3:function(e,t,n){},fcac:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return p}));var r=n("b775"),a=n("6b43"),o="company";function u(e){return r["a"].get("".concat(o,"/companyChild"),{params:{id:e}})}var i="".concat(o,"/detail");function s(e){return Object(a["a"])("".concat(i,"/").concat(e),(function(){return r["a"].get(i,{params:{id:e}})}))}"".concat(o,"/companiesManagers");function c(e){var t=e.code,n=e.userCompanyType,a=e.pageIndex,o=e.pageSize;return r["a"].get("/company/members",{params:{code:t,userCompanyType:n,page:a,pageSize:o}})}function l(e,t,n){n=n||{pageSize:50,pageIndex:0};var a=n,o=a.pageSize,u=a.pageIndex;return Object(r["a"])({url:"/company/dutiesQuery",method:"get",params:{name:e,tag:t,pageSize:o,pageIndex:u}})}function d(e){return Object(r["a"])({url:"company/dutiesTag",method:"get",params:{tag:e}})}function p(e,t,n){n=n||{pageSize:20,pageIndex:0};var a=n,o=a.pageSize,u=a.pageIndex;return Object(r["a"])({url:"/company/titleQuery",method:"get",params:{name:e,tag:t,pageSize:o,pageIndex:u}})}}}]);