(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wanguidengji-add-or-update"],{"41b8":function(e,r,t){"use strict";t.r(r);var i=t("d781"),a=t("94cb");for(var n in a)"default"!==n&&function(e){t.d(r,e,(function(){return a[e]}))}(n);t("6911");var o,u=t("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"e156a61e",null,!1,i["a"],o);r["default"]=s.exports},6911:function(e,r,t){"use strict";var i=t("ad4c"),a=t.n(i);a.a},"94cb":function(e,r,t){"use strict";t.r(r);var i=t("9a25"),a=t.n(i);for(var n in i)"default"!==n&&function(e){t.d(r,e,(function(){return i[e]}))}(n);r["default"]=a.a},"9a25":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var a=i(t("3b8d")),n=i(t("e2b1")),o={data:function(){return{ruleForm:{xuehao:"",xueshengxingming:"",touxiang:"",banji:"",sushehao:"",wanguiyuanyin:"",wanguishijian:"",beizhu:"",userid:""},user:{},ro:{xuehao:!1,xueshengxingming:!1,touxiang:!1,banji:!1,sushehao:!1,wanguiyuanyin:!1,wanguishijian:!1,beizhu:!1,userid:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(r){var t,i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.wanguishijian=this.$utils.getCurDateTime(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:if(i=e.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=14;break}return this.ruleForm.id=r.id,e.next=12,this.$api.info("wanguidengji",this.ruleForm.id);case 12:i=e.sent,this.ruleForm=i.data;case 14:if(!r.cross){e.next=57;break}a=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(a);case 17:if((e.t1=e.t0()).done){e.next=57;break}if(n=e.t1.value,"xuehao"!=n){e.next=23;break}return this.ruleForm.xuehao=a[n],this.ro.xuehao=!0,e.abrupt("continue",17);case 23:if("xueshengxingming"!=n){e.next=27;break}return this.ruleForm.xueshengxingming=a[n],this.ro.xueshengxingming=!0,e.abrupt("continue",17);case 27:if("touxiang"!=n){e.next=31;break}return this.ruleForm.touxiang=a[n],this.ro.touxiang=!0,e.abrupt("continue",17);case 31:if("banji"!=n){e.next=35;break}return this.ruleForm.banji=a[n],this.ro.banji=!0,e.abrupt("continue",17);case 35:if("sushehao"!=n){e.next=39;break}return this.ruleForm.sushehao=a[n],this.ro.sushehao=!0,e.abrupt("continue",17);case 39:if("wanguiyuanyin"!=n){e.next=43;break}return this.ruleForm.wanguiyuanyin=a[n],this.ro.wanguiyuanyin=!0,e.abrupt("continue",17);case 43:if("wanguishijian"!=n){e.next=47;break}return this.ruleForm.wanguishijian=a[n],this.ro.wanguishijian=!0,e.abrupt("continue",17);case 47:if("beizhu"!=n){e.next=51;break}return this.ruleForm.beizhu=a[n],this.ro.beizhu=!0,e.abrupt("continue",17);case 51:if("userid"!=n){e.next=55;break}return this.ruleForm.userid=a[n],this.ro.userid=!0,e.abrupt("continue",17);case 55:e.next=17;break;case 57:this.styleChange();case 58:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},wanguishijianConfirm:function(e){console.log(e),this.ruleForm.wanguishijian=e.result,this.$forceUpdate()},touxiangTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.touxiang=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.id){e.next=5;break}return e.next=3,this.$api.update("wanguidengji",this.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,this.$api.add("wanguidengji",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,a=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},a27f:function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-e156a61e]{padding:%?20?%}.content[data-v-e156a61e]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-e156a61e]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-e156a61e]{width:%?180?%}.avator[data-v-e156a61e]{width:%?150?%;height:%?60?%}.right-input[data-v-e156a61e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-e156a61e]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-e156a61e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-e156a61e]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-e156a61e]{border:0}.cu-form-group uni-input[data-v-e156a61e]{padding:0 %?30?%}.uni-input[data-v-e156a61e]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-e156a61e]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-e156a61e]::after{line-height:%?88?%}.select .uni-input[data-v-e156a61e]{line-height:%?88?%}.input .right-input[data-v-e156a61e]{line-height:%?60?%}',""]),e.exports=r},ad4c:function(e,r,t){var i=t("a27f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("95e1ff28",i,!0,{sourceMap:!1,shadowMode:!1})},d781:function(e,r,t){"use strict";var i={"w-picker":t("e2b1").default},a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("学号")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.xuehao,placeholder:"学号"},model:{value:e.ruleForm.xuehao,callback:function(r){e.$set(e.ruleForm,"xuehao",r)},expression:"ruleForm.xuehao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("学生姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.xueshengxingming,placeholder:"学生姓名"},model:{value:e.ruleForm.xueshengxingming,callback:function(r){e.$set(e.ruleForm,"xueshengxingming",r)},expression:"ruleForm.xueshengxingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.touxiangTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(1, 1, 1, 1)",textAlign:"left"}},[e._v("头像")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.touxiang?t("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:e.ruleForm.touxiang,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("班级")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.banji,placeholder:"班级"},model:{value:e.ruleForm.banji,callback:function(r){e.$set(e.ruleForm,"banji",r)},expression:"ruleForm.banji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("宿舍号")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.sushehao,placeholder:"宿舍号"},model:{value:e.ruleForm.sushehao,callback:function(r){e.$set(e.ruleForm,"sushehao",r)},expression:"ruleForm.sushehao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("晚归原因")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.wanguiyuanyin,placeholder:"晚归原因"},model:{value:e.ruleForm.wanguiyuanyin,callback:function(r){e.$set(e.ruleForm,"wanguiyuanyin",r)},expression:"ruleForm.wanguiyuanyin"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("晚归时间")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{placeholder:"晚归时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("wanguishijian")}},model:{value:e.ruleForm.wanguishijian,callback:function(r){e.$set(e.ruleForm,"wanguishijian",r)},expression:"ruleForm.wanguishijian"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("备注")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.beizhu,placeholder:"备注"},model:{value:e.ruleForm.beizhu,callback:function(r){e.$set(e.ruleForm,"beizhu",r)},expression:"ruleForm.beizhu"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(242, 199, 68, 1)",borderColor:"rgba(57, 78, 99, 1)",borderRadius:"40rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"0",width:"40%",fontSize:"28rpx",borderStyle:"solid",height:"76rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"wanguishijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.wanguishijianConfirm.apply(void 0,arguments)}}})],1)},n=[];t.d(r,"b",(function(){return a})),t.d(r,"c",(function(){return n})),t.d(r,"a",(function(){return i}))}}]);