"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[774],{4126:function(n,e,t){t.d(e,{e:function(){return c}});var r=t(7689),a=t(3225),u=t(184),c=function(n){var e=n.products,t=(0,r.TH)();return(0,u.jsx)(a.aV,{children:e.map((function(n){var e=n.id,r=n.title,c=n.name,o=n.poster_path;return(0,u.jsx)("li",{children:(0,u.jsxs)(a.rU,{to:"/movies/".concat(e),state:{from:t},children:[(0,u.jsx)(a.Ee,{src:o?"https://image.tmdb.org/t/p/w300".concat(o):"https://sd.keepcalms.com/i-w300/keep-calm-poster-not-found.jpg",alt:r}),(0,u.jsx)(a.hj,{children:r||c})]})},e)}))})}},3225:function(n,e,t){t.d(e,{Dx:function(){return d},Ee:function(){return x},aV:function(){return f},hj:function(){return h},rU:function(){return l}});var r,a,u,c,o,i=t(168),s=t(6444),p=t(1087),f=s.ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n\n  margin: 0;\n  padding: 0;\n"]))),l=(0,s.ZP)(p.OL)(a||(a=(0,i.Z)(["\n  color: black;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: orangered;\n  }\n"]))),d=s.ZP.h2(u||(u=(0,i.Z)(["\n  text-align: center;\n"]))),h=s.ZP.p(c||(c=(0,i.Z)(["\n  width: 300px;\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  text-align: center;\n"]))),x=s.ZP.img(o||(o=(0,i.Z)(["\n  display: block;\n  width: 345px;\n  height: 524px;\n  transition: transform 0.3s linear;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n"])))},8774:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,u,c=t(5861),o=t(9439),i=t(7757),s=t.n(i),p=t(966),f=t(4126),l=t(2791),d=t(168),h=t(6444),x=h.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),g=h.ZP.input(a||(a=(0,d.Z)(["\n  padding: 4px 32px 4px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),m=h.ZP.button(u||(u=(0,d.Z)(["\n  margin-left: 1px;\n  color: white;\n  background-color: grey;\n  border: 0;\n  border-radius: 4px;\n  padding: 8px 8px 8px 8px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: orangered;\n  }\n"]))),v=t(7596),Z=t(184),y=function(n){var e=n.onSubmit,t=(0,l.useState)(""),r=(0,o.Z)(t,2),a=r[0],u=r[1];return(0,Z.jsxs)(x,{onSubmit:function(n){if(n.preventDefault(),""===a.trim())return v.Am.error("Type something!");e(a),u("")},children:[(0,Z.jsx)(g,{type:"text",name:"query",placeholder:"Search movies",onChange:function(n){u(n.currentTarget.value)}}),(0,Z.jsx)(m,{type:"submit",children:"Search"})]})},b=t(1087),w=t(2690),k=function(){var n=(0,l.useState)(null),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)("idle"),u=(0,o.Z)(a,2),i=u[0],d=u[1],h=(0,b.lr)({}),x=(0,o.Z)(h,2),g=x[0],m=x[1];(0,l.useEffect)((function(){var n,e=null!==(n=g.get("query"))&&void 0!==n?n:"";""!==e&&v(e)}),[g]);var v=function(){var n=(0,c.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d("pending"),n.next=4,(0,w.FE)(e);case 4:if(0!==(t=n.sent).length){n.next=8;break}return d("rejected"),n.abrupt("return");case 8:r(t),d("responded"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),d("rejected");case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}();return(0,Z.jsxs)("main",{children:[(0,Z.jsx)(y,{onSubmit:function(n){m({query:n})}}),"responded"===i&&(0,Z.jsx)(f.e,{products:t}),"pending"===i&&(0,Z.jsx)(p.a,{}),"rejected"===i&&(0,Z.jsx)("h2",{children:"Oops, something went wrong..."})]})}},2690:function(n,e,t){t.d(e,{FE:function(){return p},Hx:function(){return g},Y5:function(){return l},wr:function(){return i},xc:function(){return h}});var r=t(5861),a=t(7757),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="352708f90836dd2b75b209ae082e91df";function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US&external_source=imdb_id"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=774.f5c7ce7f.chunk.js.map