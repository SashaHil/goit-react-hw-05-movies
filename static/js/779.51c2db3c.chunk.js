"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{9779:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r,a,u=t(5861),c=t(9439),s=t(7757),i=t.n(s),o=t(966),p=t(2791),f=t(7689),d=t(2690),l=t(168),h=t(6444),v=h.ZP.ul(r||(r=(0,l.Z)(["\n  padding: 0;\n  list-style: none;\n"]))),x=h.ZP.p(a||(a=(0,l.Z)(["\n  max-width: 1600px;\n"]))),g=t(184),w=function(){var e=(0,p.useState)([]),n=(0,c.Z)(e,2),t=n[0],r=n[1],a=(0,p.useState)("idle"),s=(0,c.Z)(a,2),l=s[0],h=s[1],w=(0,f.UO)().movieId;return(0,p.useEffect)((function(){var e=function(){var e=(0,u.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h("pending"),e.next=4,(0,d.Hx)(w);case 4:n=e.sent,r(n),h("responded"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h("rejected");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e(w)}),[w]),(0,g.jsxs)(g.Fragment,{children:["responded"===l&&0===t.length?(0,g.jsx)("h2",{children:"There are no reviews"}):(0,g.jsx)(v,{children:t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,g.jsxs)("li",{children:[(0,g.jsxs)("h3",{children:["Author: ",t]}),(0,g.jsx)(x,{children:r})]},n)}))}),"pending"===l&&(0,g.jsx)(o.a,{}),"rejected"===l&&(0,g.jsx)("h2",{children:"Something went wrong..."})]})}},2690:function(e,n,t){t.d(n,{FE:function(){return p},Hx:function(){return x},Y5:function(){return d},wr:function(){return i},xc:function(){return h}});var r=t(5861),a=t(7757),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="352708f90836dd2b75b209ae082e91df";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US&external_source=imdb_id"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=779.51c2db3c.chunk.js.map