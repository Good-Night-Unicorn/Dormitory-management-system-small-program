(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-gonggaoxinxi-add-or-update"],{2914:function(t,e,r){"use strict";var i=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("ac6a"),r("96cf");var n=i(r("3b8d")),a=i(r("e2b1")),o={data:function(){return{ruleForm:{gonggaobiaoti:"",leixing:"",tupian:"",neirong:"",faburiqi:""},user:{},ro:{gonggaobiaoti:!1,leixing:!1,tupian:!1,neirong:!1,faburiqi:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var r,i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ruleForm.faburiqi=this.$utils.getCurDate(),r=uni.getStorageSync("nowTable"),t.next=4,this.$api.session(r);case 4:if(i=t.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){t.next=14;break}return this.ruleForm.id=e.id,t.next=12,this.$api.info("gonggaoxinxi",this.ruleForm.id);case 12:i=t.sent,this.ruleForm=i.data;case 14:if(!e.cross){t.next=41;break}n=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(n);case 17:if((t.t1=t.t0()).done){t.next=41;break}if(a=t.t1.value,"gonggaobiaoti"!=a){t.next=23;break}return this.ruleForm.gonggaobiaoti=n[a],this.ro.gonggaobiaoti=!0,t.abrupt("continue",17);case 23:if("leixing"!=a){t.next=27;break}return this.ruleForm.leixing=n[a],this.ro.leixing=!0,t.abrupt("continue",17);case 27:if("tupian"!=a){t.next=31;break}return this.ruleForm.tupian=n[a],this.ro.tupian=!0,t.abrupt("continue",17);case 31:if("neirong"!=a){t.next=35;break}return this.ruleForm.neirong=n[a],this.ro.neirong=!0,t.abrupt("continue",17);case 35:if("faburiqi"!=a){t.next=39;break}return this.ruleForm.faburiqi=n[a],this.ro.faburiqi=!0,t.abrupt("continue",17);case 39:t.next=17;break;case 41:this.styleChange();case 42:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(t){this.ruleForm.faburiqi=t.target.value,this.$forceUpdate()},tupianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.tupian=t.$base.url+"upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.gonggaobiaoti){t.next=3;break}return this.$utils.msg("公告标题不能为空"),t.abrupt("return");case 3:if(this.ruleForm.leixing){t.next=6;break}return this.$utils.msg("类型不能为空"),t.abrupt("return");case 6:if(!this.ruleForm.id){t.next=11;break}return t.next=9,this.$api.update("gonggaoxinxi",this.ruleForm);case 9:t.next=13;break;case 11:return t.next=13,this.$api.add("gonggaoxinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,r=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===t?r-=60:"end"===t&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(t){this.$refs[t].show()}}};e.default=o},"331f":function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-56e69c28]{padding:%?20?%}.content[data-v-56e69c28]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-56e69c28]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-56e69c28]{width:%?180?%}.avator[data-v-56e69c28]{width:%?150?%;height:%?60?%}.right-input[data-v-56e69c28]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-56e69c28]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-56e69c28]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-56e69c28]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-56e69c28]{border:0}.cu-form-group uni-input[data-v-56e69c28]{padding:0 %?30?%}.uni-input[data-v-56e69c28]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-56e69c28]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-56e69c28]::after{line-height:%?88?%}.select .uni-input[data-v-56e69c28]{line-height:%?88?%}.input .right-input[data-v-56e69c28]{line-height:%?60?%}',""]),t.exports=e},"5c94":function(t,e,r){"use strict";r.r(e);var i=r("2914"),n=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},"5d9e":function(t,e,r){"use strict";var i,n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[t._v("公告标题")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:t.ro.gonggaobiaoti,placeholder:"公告标题"},model:{value:t.ruleForm.gonggaobiaoti,callback:function(e){t.$set(t.ruleForm,"gonggaobiaoti",e)},expression:"ruleForm.gonggaobiaoti"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[t._v("类型")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:t.ro.leixing,placeholder:"类型"},model:{value:t.ruleForm.leixing,callback:function(e){t.$set(t.ruleForm,"leixing",e)},expression:"ruleForm.leixing"}})],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==t.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tupianTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(1, 1, 1, 1)",textAlign:"left"}},[t._v("图片")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[t.ruleForm.tupian?r("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:t.ruleForm.tupian,mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[t._v("发布日期")]),r("v-uni-picker",{attrs:{mode:"date",value:t.ruleForm.faburiqi},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.faburiqiChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[t._v(t._s(t.ruleForm.faburiqi?t.ruleForm.faburiqi:"请选择发布日期"))])],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[t._v("内容")]),r("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"200rpx"},attrs:{placeholder:"内容"},model:{value:t.ruleForm.neirong,callback:function(e){t.$set(t.ruleForm,"neirong",e)},expression:"ruleForm.neirong"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(242, 199, 68, 1)",borderColor:"rgba(57, 78, 99, 1)",borderRadius:"40rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"0",width:"40%",fontSize:"28rpx",borderStyle:"solid",height:"76rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmitTap.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},a=[];r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return i}))},8162:function(t,e,r){var i=r("331f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=r("4f06").default;n("6f16c80a",i,!0,{sourceMap:!1,shadowMode:!1})},c57f:function(t,e,r){"use strict";r.r(e);var i=r("5d9e"),n=r("5c94");for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);r("cc3a");var o,u=r("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"56e69c28",null,!1,i["a"],o);e["default"]=s.exports},cc3a:function(t,e,r){"use strict";var i=r("8162"),n=r.n(i);n.a}}]);