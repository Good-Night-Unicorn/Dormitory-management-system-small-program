(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-baoxiuxinxi-add-or-update"],{"0882":function(e,r,t){"use strict";var i,o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("报修设备")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.baoxiushebei,placeholder:"报修设备"},model:{value:e.ruleForm.baoxiushebei,callback:function(r){e.$set(e.ruleForm,"baoxiushebei",r)},expression:"ruleForm.baoxiushebei"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("类型")]),t("v-uni-picker",{attrs:{value:e.leixingIndex,range:e.leixingOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.leixingChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.leixing?e.ruleForm.leixing:"请选择类型"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.tupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(1, 1, 1, 1)",textAlign:"left"}},[e._v("图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.tupian?t("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:e.ruleForm.tupian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("报修日期")]),t("v-uni-picker",{attrs:{mode:"date",value:e.ruleForm.baoxiuriqi},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.baoxiuriqiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.baoxiuriqi?e.ruleForm.baoxiuriqi:"请选择报修日期"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("学号")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.xuehao,placeholder:"学号"},model:{value:e.ruleForm.xuehao,callback:function(r){e.$set(e.ruleForm,"xuehao",r)},expression:"ruleForm.xuehao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("学生姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.xueshengxingming,placeholder:"学生姓名"},model:{value:e.ruleForm.xueshengxingming,callback:function(r){e.$set(e.ruleForm,"xueshengxingming",r)},expression:"ruleForm.xueshengxingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("班级")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.banji,placeholder:"班级"},model:{value:e.ruleForm.banji,callback:function(r){e.$set(e.ruleForm,"banji",r)},expression:"ruleForm.banji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("宿舍号")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.sushehao,placeholder:"宿舍号"},model:{value:e.ruleForm.sushehao,callback:function(r){e.$set(e.ruleForm,"sushehao",r)},expression:"ruleForm.sushehao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("手机")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.shouji,placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(r){e.$set(e.ruleForm,"shouji",r)},expression:"ruleForm.shouji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("报修内容")]),t("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"200rpx"},attrs:{placeholder:"报修内容"},model:{value:e.ruleForm.baoxiuneirong,callback:function(r){e.$set(e.ruleForm,"baoxiuneirong",r)},expression:"ruleForm.baoxiuneirong"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(242, 199, 68, 1)",borderColor:"rgba(57, 78, 99, 1)",borderRadius:"40rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"0",width:"40%",fontSize:"28rpx",borderStyle:"solid",height:"76rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},a=[];t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))},"15fe":function(e,r,t){"use strict";t.r(r);var i=t("0882"),o=t("8e1b");for(var a in o)"default"!==a&&function(e){t.d(r,e,(function(){return o[e]}))}(a);t("1af4");var n,s=t("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"a3256350",null,!1,i["a"],n);r["default"]=u.exports},"1af4":function(e,r,t){"use strict";var i=t("dffb"),o=t.n(i);o.a},"682b":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-a3256350]{padding:%?20?%}.content[data-v-a3256350]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-a3256350]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-a3256350]{width:%?180?%}.avator[data-v-a3256350]{width:%?150?%;height:%?60?%}.right-input[data-v-a3256350]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-a3256350]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-a3256350]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-a3256350]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-a3256350]{border:0}.cu-form-group uni-input[data-v-a3256350]{padding:0 %?30?%}.uni-input[data-v-a3256350]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-a3256350]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-a3256350]::after{line-height:%?88?%}.select .uni-input[data-v-a3256350]{line-height:%?88?%}.input .right-input[data-v-a3256350]{line-height:%?60?%}',""]),e.exports=r},"8e1b":function(e,r,t){"use strict";t.r(r);var i=t("f927"),o=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=o.a},dffb:function(e,r,t){var i=t("682b");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("4f06").default;o("78c96e96",i,!0,{sourceMap:!1,shadowMode:!1})},f927:function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("28a5"),t("96cf");var o=i(t("3b8d")),a=i(t("e2b1")),n={data:function(){return{ruleForm:{baoxiushebei:"",leixing:"",tupian:"",baoxiuneirong:"",baoxiuriqi:"",xuehao:"",xueshengxingming:"",banji:"",sushehao:"",shouji:"",sfsh:"",shhf:"",userid:""},leixingOptions:[],leixingIndex:0,user:{},ro:{baoxiushebei:!1,leixing:!1,tupian:!1,baoxiuneirong:!1,baoxiuriqi:!1,xuehao:!1,xueshengxingming:!1,banji:!1,sushehao:!1,shouji:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(r){var t,i,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.baoxiuriqi=this.$utils.getCurDate(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:if(i=e.sent,this.user=i.data,this.ruleForm.xuehao=this.user.xuehao,this.ruleForm.xueshengxingming=this.user.xueshengxingming,this.ruleForm.banji=this.user.banji,this.ruleForm.sushehao=this.user.sushehao,this.ruleForm.shouji=this.user.shouji,this.leixingOptions="水工,电工,木工".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=20;break}return this.ruleForm.id=r.id,e.next=18,this.$api.info("baoxiuxinxi",this.ruleForm.id);case 18:i=e.sent,this.ruleForm=i.data;case 20:if(!r.cross){e.next=71;break}o=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(o);case 23:if((e.t1=e.t0()).done){e.next=71;break}if(a=e.t1.value,"baoxiushebei"!=a){e.next=29;break}return this.ruleForm.baoxiushebei=o[a],this.ro.baoxiushebei=!0,e.abrupt("continue",23);case 29:if("leixing"!=a){e.next=33;break}return this.ruleForm.leixing=o[a],this.ro.leixing=!0,e.abrupt("continue",23);case 33:if("tupian"!=a){e.next=37;break}return this.ruleForm.tupian=o[a],this.ro.tupian=!0,e.abrupt("continue",23);case 37:if("baoxiuneirong"!=a){e.next=41;break}return this.ruleForm.baoxiuneirong=o[a],this.ro.baoxiuneirong=!0,e.abrupt("continue",23);case 41:if("baoxiuriqi"!=a){e.next=45;break}return this.ruleForm.baoxiuriqi=o[a],this.ro.baoxiuriqi=!0,e.abrupt("continue",23);case 45:if("xuehao"!=a){e.next=49;break}return this.ruleForm.xuehao=o[a],this.ro.xuehao=!0,e.abrupt("continue",23);case 49:if("xueshengxingming"!=a){e.next=53;break}return this.ruleForm.xueshengxingming=o[a],this.ro.xueshengxingming=!0,e.abrupt("continue",23);case 53:if("banji"!=a){e.next=57;break}return this.ruleForm.banji=o[a],this.ro.banji=!0,e.abrupt("continue",23);case 57:if("sushehao"!=a){e.next=61;break}return this.ruleForm.sushehao=o[a],this.ro.sushehao=!0,e.abrupt("continue",23);case 61:if("shouji"!=a){e.next=65;break}return this.ruleForm.shouji=o[a],this.ro.shouji=!0,e.abrupt("continue",23);case 65:if("userid"!=a){e.next=69;break}return this.ruleForm.userid=o[a],this.ro.userid=!0,e.abrupt("continue",23);case 69:e.next=23;break;case 71:this.styleChange();case 72:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},baoxiuriqiChange:function(e){this.ruleForm.baoxiuriqi=e.target.value,this.$forceUpdate()},leixingChange:function(e){this.leixingIndex=e.target.value,this.ruleForm.leixing=this.leixingOptions[this.leixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.tupian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.baoxiushebei){e.next=3;break}return this.$utils.msg("报修设备不能为空"),e.abrupt("return");case 3:if(this.ruleForm.leixing){e.next=6;break}return this.$utils.msg("类型不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("baoxiuxinxi",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("baoxiuxinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,o=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,o=o>9?o:"0"+o,"".concat(t,"-").concat(i,"-").concat(o)},toggleTab:function(e){this.$refs[e].show()}}};r.default=n}}]);