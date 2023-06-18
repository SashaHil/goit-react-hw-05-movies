"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[580],{3225:function(n,e,t){t.d(e,{Dx:function(){return f},Ee:function(){return x},aV:function(){return l},hj:function(){return h},rU:function(){return d}});var r,a,c,i,s,o=t(168),u=t(6444),p=t(1087),l=u.ZP.ul(r||(r=(0,o.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n\n  margin: 0;\n  padding: 0;\n"]))),d=(0,u.ZP)(p.OL)(a||(a=(0,o.Z)(["\n  color: black;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: orangered;\n  }\n"]))),f=u.ZP.h2(c||(c=(0,o.Z)(["\n  text-align: center;\n"]))),h=u.ZP.p(i||(i=(0,o.Z)(["\n  width: 300px;\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  text-align: center;\n"]))),x=u.ZP.img(s||(s=(0,o.Z)(["\n  display: block;\n  width: 345px;\n  height: 524px;\n  transition: transform 0.3s linear;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n"])))},580:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,a,c,i=t(5861),s=t(9439),o=t(7757),u=t.n(o),p=t(168),l=t(6444),d=l.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),f=l.ZP.p(a||(a=(0,p.Z)(["\n  width: 640px;\n"]))),h=t(184),x=function(n){var e=n.product,t=e.title,r=e.genres,a=e.original_title,c=e.overview,i=e.poster_path,s=e.vote_average,o="https://image.tmdb.org/t/p/w300".concat(i);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(d,{children:[(0,h.jsx)("img",{src:i?o:"https://sd.keepcalms.com/i-w300/keep-calm-poster-not-found.jpg",alt:t}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:t||a}),(0,h.jsxs)("p",{children:["Use Score: ",s]}),(0,h.jsx)("b",{children:"Overview"}),(0,h.jsx)(f,{children:c}),(0,h.jsx)("b",{children:"Genres:"}),(0,h.jsx)("p",{children:r.map((function(n){return n.name})).join(", ")})]})]})})},g=t(2791),v=t(7689),m=t(3225),j=t(2690),w=t(966),Z=t(9128),k=t(1087),y=(0,l.ZP)(k.rU)(c||(c=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),b=function(){var n,e,t=(0,g.useState)({}),r=(0,s.Z)(t,2),a=r[0],c=r[1],o=(0,g.useState)("idle"),p=(0,s.Z)(o,2),l=p[0],d=p[1],f=(0,v.UO)().movieId;(0,g.useEffect)((function(){k(f)}),[f]);var k=function(){var n=(0,i.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d("pending"),n.next=4,(0,j.Y5)(e);case 4:t=n.sent,c(t),d("responded"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),d("rejected");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),b=(0,v.TH)(),_=(0,g.useRef)(null!==(n=null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,h.jsxs)("main",{children:[(0,h.jsxs)(y,{to:_.current,children:[(0,h.jsx)(Z.jTe,{size:"24"}),"Go back"]}),"responded"===l&&(0,h.jsx)(x,{product:a}),(0,h.jsx)(m.Dx,{children:"Additional information"}),(0,h.jsxs)(m.aV,{children:[(0,h.jsx)("li",{children:(0,h.jsx)(m.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(m.rU,{to:"reviews",children:"Reviews"})})]}),"pending"===l&&(0,h.jsx)(w.a,{}),"rejected"===l&&(0,h.jsx)("h2",{children:"Oops, something went wrong..."}),(0,h.jsx)(g.Suspense,{fallback:(0,h.jsx)(w.a,{}),children:(0,h.jsx)(v.j3,{})})]})}},2690:function(n,e,t){t.d(e,{FE:function(){return p},Hx:function(){return g},Y5:function(){return d},wr:function(){return o},xc:function(){return h}});var r=t(5861),a=t(7757),c=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="352708f90836dd2b75b209ae082e91df";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US&external_source=imdb_id"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=580.42a12415.chunk.js.map