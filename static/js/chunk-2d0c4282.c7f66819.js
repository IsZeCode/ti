(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4282"],{"3a42":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Viewer",{ref:"Viewer",attrs:{"initial-value":e.fileName?e.value:e.content}})},a=[],i=(n("f513"),n("e459")),o=n("0e9a"),u={name:"MarkdownViewer",components:{Viewer:i["b"]},props:{fileName:{type:String,default:null},path:{type:String,default:null},content:{type:String,default:null}},data:function(){return{value:"> 加载中..."}},computed:{filePath:function(){return this.path||"client-sfvue"}},watch:{fileName:{handler:function(e){this.refreshDoc()}},path:{handler:function(e){this.refreshDoc()}},content:{handler:function(e){this.$refs.Viewer.editor.setMarkdown(e)}}},mounted:function(){var e=this.$route&&this.$route.query,t=e&&e.filename,n=e&&e.path;this.refreshDoc({targetFile:t,targetPath:n})},methods:{refreshDoc:function(e){var t=this,n=e.targetPath,r=e.targetFile;r=r||this.fileName,n=n||this.filePath,r&&Object(o["d"])(n,r).then((function(e){t.$refs.Viewer.editor.setMarkdown(e)})).catch((function(e){t.$message.error(e)}))}}},c=u,l=n("2877"),s=Object(l["a"])(c,r,a,!1,null,"05660aa4",null);t["default"]=s.exports}}]);