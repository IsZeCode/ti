(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f17136de"],{"27d3":function(t,e,i){"use strict";i("9f7f")},"9f7f":function(t,e,i){},d2c5:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"input",on:{mousedown:function(e){return t.userClick(!0)},mouseup:function(e){return t.userClick(!1)},mouseenter:function(e){return t.focusOn(!0)},mouseleave:function(e){return t.focusOn(!1)}}},[i("div",{style:{filter:t.hideDetail?"blur(1px)":""}},t._l(6,(function(e){return i("div",{key:e,staticClass:"single",style:{width:t.size,height:t.size,"box-shadow":t.singleActiveShadow}},[i("div",{staticClass:"pswChr",style:{"background-color":t.pswChrBackColor(e),width:t.pswChrSize(e),height:t.pswChrSize(e),top:t.pswChrPos(e),left:t.pswChrPos(e)}})])})),0),t._v(" "),i("div",{staticClass:"mask",style:{filter:t.hideDetail?"":"blur(30px)",color:"rgb("+t.rgb+")"}},[t._v(t._s(t.showText))])])},s=[],o=(i("20d6"),i("2909")),r={name:"CodeInput",props:{size:{type:String,default:"3em"},checkCodeMethod:{type:Function,required:!0},listenUserInput:{type:Boolean,default:!1}},data:function(){return{rgb:"0,0,0",showText:"",normalSize:80,lastUpdate:new Date,loading:!1,userClickActive:!1,userClickActiveDate:new Date,innerCode:"",isActive:!1,status:0,singleActiveShadow:"",pswChrActiveBackColor:""}},computed:{hideDetail:function(){return!this.isActive}},watch:{isActive:{handler:function(t){var e=this;this.$nextTick((function(){e.update()}))},immediate:!0},status:{handler:function(t){var e=this;this.$nextTick((function(){e.update()}))},immediate:!0},userClickActive:{handler:function(t){var e=this;this.$nextTick((function(){e.update()}))},immediate:!0}},mounted:function(){var t=this;this.update(),document.onpaste=function(e){var i=e.clipboardData||window.clipboardData,n=i.getData("Text"),s=n.substr(0,6);if(s){var r=Object(o["a"])(s),c=r.findIndex((function(t,e){var i=s.charCodeAt(e);return i<48||i>57}));-1===c&&t.$nextTick((function(){t.userInput(s)}))}},document.onkeydown=function(e){var i=e.keyCode;i>=96&&i<=105&&(i-=48);var n=t.innerCode;if(8===i&&t.innerCode.length>0)n=t.innerCode.substr(0,t.innerCode.length-1);else{if(!(i>=48&&i<=57))return;if(t.innerCode.length<6){var s=i-48;n+=s}else n=""}t.$nextTick((function(){t.userInput(n)}))}},methods:{update:function(){var t=.18;switch(this.status){case-1:this.rgb="255,15,100";break;case 0:this.rgb="0,100,255";break;case 1:this.rgb="0,255,100";break}this.isActive?(this.pswChrActiveBackColor="#999",t=this.userClickActive?1:.5):this.pswChrActiveBackColor="#ccc",this.singleActiveShadow="0 1px 7px rgba(".concat(this.rgb,", ").concat(t,")")},userClick:function(t){var e=this;if(t)this.userClickActive=t;else{var i=new Date;this.userClickActiveDate=i,setTimeout((function(){i===e.userClickActiveDate&&(e.userClickActive=t)}),300)}},focusOn:function(t){this.isActive=t,this.$emit("update:listenUserInput",t)},reset:function(){this.showText="",this.status=0,this.innerCode||(this.innerCode="")},submit:function(t){var e=this;this.loading=!0,+new Date-new Date(this.lastUpdate)<3e3?setTimeout((function(){e.loading=!1,e.userInput(t)}),3e3):(this.lastUpdate=new Date,setTimeout((function(){e.checkCodeMethod(t).then((function(){e.status=1,e.showText=""})).catch((function(t){e.status=-1,e.innerCode="",e.showText=t.message})).finally((function(){e.loading=!1}))}),500))},userInput:function(t){var e=this;!this.loading&&this.listenUserInput&&(this.$nextTick((function(){e.innerCode=t,e.reset()})),this.$emit("update:code",t),6===t.length&&this.submit(t))},pswChrBackColor:function(t){return this.innerCode.length<t?"#fff0":this.pswChrActiveBackColor},pswChrSize:function(t){return this.innerCode.length<t?0:"".concat(this.normalSize,"%")},pswChrPos:function(t){return this.innerCode.length<t?"50%":"".concat((100-this.normalSize)/2,"%")}}},c=r,a=(i("27d3"),i("2877")),u=Object(a["a"])(c,n,s,!1,null,"4c29d049",null);e["default"]=u.exports}}]);