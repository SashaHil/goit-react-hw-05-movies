"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r,a,c=t(5861),u=t(9439),s=t(7757),i=t.n(s),p=t(966),o=t(2791),f=t(7689),l=t(2690),d=t(168),h=t(6444),x=h.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n\n  list-style: none;\n"]))),g=h.ZP.p(a||(a=(0,d.Z)(["\n  width: 200px;\n"]))),m=t(184),v=function(){var e=(0,o.useState)(null),n=(0,u.Z)(e,2),t=n[0],r=n[1],a=(0,o.useState)("idle"),s=(0,u.Z)(a,2),d=s[0],h=s[1],v=(0,f.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,c.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h("pending"),e.next=4,(0,l.xc)(v);case 4:n=e.sent,r(n),h("responded"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h("rejected");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e(v)}),[v]),(0,m.jsxs)(m.Fragment,{children:["responded"===d&&(0,m.jsx)(x,{children:t.map((function(e){var n=e.cast_id,t=e.name,r=e.character,a=e.profile_path,c=e.original_name;return(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w200".concat(a):"https://sd.keepcalms.com/i-w200/keep-calm-poster-not-found.jpg",alt:t}),(0,m.jsx)("p",{children:t||c}),(0,m.jsxs)(g,{children:["Character: ",r]})]},n)}))}),"pending"===d&&(0,m.jsx)(p.a,{}),"rejected"===d&&(0,m.jsx)("h2",{children:"Something went wrong..."})]})}},2690:function(e,n,t){t.d(n,{FE:function(){return o},Hx:function(){return g},Y5:function(){return l},wr:function(){return i},xc:function(){return h}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="352708f90836dd2b75b209ae082e91df";function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/all/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US&external_source=imdb_id"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.bbad198e.chunk.js.map