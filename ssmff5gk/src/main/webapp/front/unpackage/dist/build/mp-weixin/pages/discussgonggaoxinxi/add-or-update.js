(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discussgonggaoxinxi/add-or-update"],{"24f1":function(e,n,t){},"4d7a":function(e,n,t){"use strict";t.r(n);var r=t("548d"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},"548d":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,i){try{var o=e[a](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,u)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var i=e.apply(n,t);function o(e){a(i,r,u,o,c,"next",e)}function c(e){a(i,r,u,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("7265"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{refid:"",userid:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return i(r.default.mark((function u(){var a,i,o,c;return r.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return a=e.getStorageSync("nowTable"),u.next=3,t.$api.session(a);case 3:if(i=u.sent,t.user=i.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){u.next=13;break}return t.ruleForm.id=n.id,u.next=11,t.$api.info("discussgonggaoxinxi",t.ruleForm.id);case 11:i=u.sent,t.ruleForm=i.data;case 13:if(!n.cross){u.next=40;break}o=e.getStorageSync("crossObj"),u.t0=r.default.keys(o);case 16:if((u.t1=u.t0()).done){u.next=40;break}if(c=u.t1.value,"refid"!=c){u.next=22;break}return t.ruleForm.refid=o[c],t.ro.refid=!0,u.abrupt("continue",16);case 22:if("userid"!=c){u.next=26;break}return t.ruleForm.userid=o[c],t.ro.userid=!0,u.abrupt("continue",16);case 26:if("nickname"!=c){u.next=30;break}return t.ruleForm.nickname=o[c],t.ro.nickname=!0,u.abrupt("continue",16);case 30:if("content"!=c){u.next=34;break}return t.ruleForm.content=o[c],t.ro.content=!0,u.abrupt("continue",16);case 34:if("reply"!=c){u.next=38;break}return t.ruleForm.reply=o[c],t.ro.reply=!0,u.abrupt("continue",16);case 38:u.next=16;break;case 40:t.styleChange();case 41:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.refid){n.next=3;break}return e.$utils.msg("关联表id不能为空"),n.abrupt("return");case 3:if(e.ruleForm.userid){n.next=6;break}return e.$utils.msg("用户id不能为空"),n.abrupt("return");case 6:if(e.ruleForm.content){n.next=9;break}return e.$utils.msg("评论内容不能为空"),n.abrupt("return");case 9:if(!e.ruleForm.id){n.next=14;break}return n.next=12,e.$api.update("discussgonggaoxinxi",e.ruleForm);case 12:n.next=16;break;case 14:return n.next=16,e.$api.add("discussgonggaoxinxi",e.ruleForm);case 16:e.$utils.msgBack("提交成功");case 17:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,u=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(t,"-").concat(r,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"689f":function(e,n,t){"use strict";(function(e){t("91e4");r(t("66fd"));var n=r(t("ed1d"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"72c0":function(e,n,t){"use strict";var r=t("24f1"),u=t.n(r);u.a},b03e:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},ed1d:function(e,n,t){"use strict";t.r(n);var r=t("b03e"),u=t("4d7a");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("72c0");var i,o=t("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"3d7f1c0e",null,!1,r["a"],i);n["default"]=c.exports}},[["689f","common/runtime","common/vendor"]]]);