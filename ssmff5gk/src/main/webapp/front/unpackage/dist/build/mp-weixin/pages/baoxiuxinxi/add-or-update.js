(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/baoxiuxinxi/add-or-update"],{"10ea":function(e,n,r){"use strict";(function(e){r("91e4");i(r("66fd"));var n=i(r("1d58"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"1d58":function(e,n,r){"use strict";r.r(n);var i=r("41e5"),t=r("ead1");for(var u in t)"default"!==u&&function(e){r.d(n,e,(function(){return t[e]}))}(u);r("faa6");var a,o=r("f0c5"),s=Object(o["a"])(t["default"],i["b"],i["c"],!1,null,"c946137e",null,!1,i["a"],a);n["default"]=s.exports},"41e5":function(e,n,r){"use strict";var i;r.d(n,"b",(function(){return t})),r.d(n,"c",(function(){return u})),r.d(n,"a",(function(){return i}));var t=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"765e":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(r("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function u(e,n,r,i,t,u,a){try{var o=e[u](a),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(i,t)}function a(e){return function(){var n=this,r=arguments;return new Promise((function(i,t){var a=e.apply(n,r);function o(e){u(a,i,t,o,s,"next",e)}function s(e){u(a,i,t,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("7265"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{ruleForm:{baoxiushebei:"",leixing:"",tupian:"",baoxiuneirong:"",baoxiuriqi:"",xuehao:"",xueshengxingming:"",banji:"",sushehao:"",shouji:"",sfsh:"",shhf:"",userid:""},leixingOptions:[],leixingIndex:0,user:{},ro:{baoxiushebei:!1,leixing:!1,tupian:!1,baoxiuneirong:!1,baoxiuriqi:!1,xuehao:!1,xueshengxingming:!1,banji:!1,sushehao:!1,shouji:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var r=this;return a(i.default.mark((function t(){var u,a,o,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.ruleForm.baoxiuriqi=r.$utils.getCurDate(),u=e.getStorageSync("nowTable"),t.next=4,r.$api.session(u);case 4:if(a=t.sent,r.user=a.data,r.ruleForm.xuehao=r.user.xuehao,r.ruleForm.xueshengxingming=r.user.xueshengxingming,r.ruleForm.banji=r.user.banji,r.ruleForm.sushehao=r.user.sushehao,r.ruleForm.shouji=r.user.shouji,r.leixingOptions="水工,电工,木工".split(","),r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=20;break}return r.ruleForm.id=n.id,t.next=18,r.$api.info("baoxiuxinxi",r.ruleForm.id);case 18:a=t.sent,r.ruleForm=a.data;case 20:if(!n.cross){t.next=71;break}o=e.getStorageSync("crossObj"),t.t0=i.default.keys(o);case 23:if((t.t1=t.t0()).done){t.next=71;break}if(s=t.t1.value,"baoxiushebei"!=s){t.next=29;break}return r.ruleForm.baoxiushebei=o[s],r.ro.baoxiushebei=!0,t.abrupt("continue",23);case 29:if("leixing"!=s){t.next=33;break}return r.ruleForm.leixing=o[s],r.ro.leixing=!0,t.abrupt("continue",23);case 33:if("tupian"!=s){t.next=37;break}return r.ruleForm.tupian=o[s],r.ro.tupian=!0,t.abrupt("continue",23);case 37:if("baoxiuneirong"!=s){t.next=41;break}return r.ruleForm.baoxiuneirong=o[s],r.ro.baoxiuneirong=!0,t.abrupt("continue",23);case 41:if("baoxiuriqi"!=s){t.next=45;break}return r.ruleForm.baoxiuriqi=o[s],r.ro.baoxiuriqi=!0,t.abrupt("continue",23);case 45:if("xuehao"!=s){t.next=49;break}return r.ruleForm.xuehao=o[s],r.ro.xuehao=!0,t.abrupt("continue",23);case 49:if("xueshengxingming"!=s){t.next=53;break}return r.ruleForm.xueshengxingming=o[s],r.ro.xueshengxingming=!0,t.abrupt("continue",23);case 53:if("banji"!=s){t.next=57;break}return r.ruleForm.banji=o[s],r.ro.banji=!0,t.abrupt("continue",23);case 57:if("sushehao"!=s){t.next=61;break}return r.ruleForm.sushehao=o[s],r.ro.sushehao=!0,t.abrupt("continue",23);case 61:if("shouji"!=s){t.next=65;break}return r.ruleForm.shouji=o[s],r.ro.shouji=!0,t.abrupt("continue",23);case 65:if("userid"!=s){t.next=69;break}return r.ruleForm.userid=o[s],r.ro.userid=!0,t.abrupt("continue",23);case 69:t.next=23;break;case 71:r.styleChange();case 72:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},baoxiuriqiChange:function(e){this.ruleForm.baoxiuriqi=e.target.value,this.$forceUpdate()},leixingChange:function(e){this.leixingIndex=e.target.value,this.ruleForm.leixing=this.leixingOptions[this.leixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return a(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.baoxiushebei){n.next=3;break}return e.$utils.msg("报修设备不能为空"),n.abrupt("return");case 3:if(e.ruleForm.leixing){n.next=6;break}return e.$utils.msg("类型不能为空"),n.abrupt("return");case 6:if(!e.ruleForm.id){n.next=11;break}return n.next=9,e.$api.update("baoxiuxinxi",e.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,e.$api.add("baoxiuxinxi",e.ruleForm);case 13:e.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),i=n.getMonth()+1,t=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(r,"-").concat(i,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])},"822c":function(e,n,r){},ead1:function(e,n,r){"use strict";r.r(n);var i=r("765e"),t=r.n(i);for(var u in i)"default"!==u&&function(e){r.d(n,e,(function(){return i[e]}))}(u);n["default"]=t.a},faa6:function(e,n,r){"use strict";var i=r("822c"),t=r.n(i);t.a}},[["10ea","common/runtime","common/vendor"]]]);