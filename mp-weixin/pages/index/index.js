(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{4485:function(n,t,e){},"4c2f":function(n,t,e){"use strict";var i=e("4485"),a=e.n(i);a.a},"4e41":function(n,t,e){"use strict";e.r(t);var i=e("675b"),a=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=a.a},"675b":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,i,a,r,o){try{var u=n[r](o),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(i,a)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var o=n.apply(t,e);function u(n){r(o,i,a,u,c,"next",n)}function c(n){r(o,i,a,u,c,"throw",n)}u(void 0)}))}}e("c7b4");var u=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("6063"))}.bind(null,e)).catch(e.oe)},c={components:{uniIcons:u},data:function(){return{autoplaySwiper:!0,intervalSwiper:3e3,swiperList:[],homegonggaoxinxilist:[],news:[]}},onShow:function(){var n=o(i.default.mark((function n(){var t,e,a,r,o,u,c,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=[],n.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(e=n.sent,a=!0,r=!1,o=void 0,n.prev=7,u=e.data.list[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)s=c.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&t.push({img:s.value});n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](7),r=!0,o=n.t0;case 15:n.prev=15,n.prev=16,a||null==u.return||u.return();case 18:if(n.prev=18,!r){n.next=21;break}throw o;case 21:return n.finish(18);case 22:return n.finish(15);case 23:return t&&(this.swiperList=t),n.next=26,this.$api.list("gonggaoxinxi",{page:1,sort:"faburiqi",order:"desc",limit:4});case 26:e=n.sent,this.homegonggaoxinxilist=e.data.list;case 28:case"end":return n.stop()}}),n,this,[[7,11,15,23],[16,,18,22]])})));function t(){return n.apply(this,arguments)}return t}(),methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=c}).call(this,e("543d")["default"])},ac89:function(n,t,e){"use strict";e.r(t);var i=e("f9ac"),a=e("4e41");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("4c2f");var o,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=c.exports},c4c1:function(n,t,e){"use strict";(function(n){e("ffa3"),e("921b");i(e("66fd"));var t=i(e("ac89"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},f9ac:function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.homegonggaoxinxilist,(function(t,e){var i=t.tupian.split(",");return{$orig:n.__get_orig(t),g0:i}}))),i=n.__map(n.homegonggaoxinxilist,(function(t,e){var i=t.tupian.split(",");return{$orig:n.__get_orig(t),g1:i}}));n.$mp.data=Object.assign({},{$root:{l0:e,l1:i}})},r=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}))}},[["c4c1","common/runtime","common/vendor"]]]);