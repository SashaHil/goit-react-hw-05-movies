"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[774],{4126:function(n,e,r){r.d(e,{e:function(){return c}});var t=r(7689),a=r(3225),u=r(184),c=function(n){var e=n.products,r=(0,t.TH)();return(0,u.jsx)(a.aV,{children:e.map((function(n){var e=n.id,t=n.title,c=n.name;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:r},children:(0,u.jsx)("p",{children:t||c})})},e)}))})}},3225:function(n,e,r){r.d(e,{aV:function(){return s},rU:function(){return p}});var t,a,u,c=r(168),o=r(6444),i=r(1087),s=o.ZP.ul(t||(t=(0,c.Z)(["\n  list-style: none;\n"]))),p=(0,o.ZP)(i.OL)(a||(a=(0,c.Z)(["\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: orangered;\n  }\n"])));o.ZP.p(u||(u=(0,c.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"])))},8774:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t,a,u,c=r(5861),o=r(9439),i=r(7757),s=r.n(i),p=r(966),f=r(4126),d=r(2791),l=r(168),x=r(6444),h=x.ZP.form(t||(t=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),m=x.ZP.input(a||(a=(0,l.Z)(["\n  padding: 4px 32px 4px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),v=x.ZP.button(u||(u=(0,l.Z)(["\n  margin-left: 1px;\n  color: white;\n  background-color: grey;\n  border: 0;\n  border-radius: 4px;\n  padding: 8px 8px 8px 8px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: orangered;\n  }\n"]))),g=r(7596),b=r(184),Z=function(n){var e=n.onSubmit,r=(0,d.useState)(""),t=(0,o.Z)(r,2),a=t[0],u=t[1];return(0,b.jsxs)(h,{onSubmit:function(n){if(n.preventDefault(),""===a.trim())return g.Am.error("Type something!");e(a),u("")},children:[(0,b.jsx)(m,{type:"text",name:"query",placeholder:"Search movies",onChange:function(n){u(n.currentTarget.value)}}),(0,b.jsx)(v,{type:"submit",children:"Search"})]})},y=r(1087),k=r(2690),w=function(){var n=(0,d.useState)(null),e=(0,o.Z)(n,2),r=e[0],t=e[1],a=(0,d.useState)("idle"),u=(0,o.Z)(a,2),i=u[0],l=u[1],x=(0,y.lr)({}),h=(0,o.Z)(x,2),m=h[0],v=h[1];(0,d.useEffect)((function(){var n,e=null!==(n=m.get("query"))&&void 0!==n?n:"";""!==e&&g(e)}),[m]);var g=function(){var n=(0,c.Z)(s().mark((function n(e){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l("pending"),n.next=4,(0,k.FE)(e);case 4:if(0!==(r=n.sent).length){n.next=8;break}return l("rejected"),n.abrupt("return");case 8:t(r),l("responded"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),l("rejected");case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}();return(0,b.jsxs)("main",{children:[(0,b.jsx)(Z,{onSubmit:function(n){v({query:n})}}),"responded"===i&&(0,b.jsx)(f.e,{products:r}),"pending"===i&&(0,b.jsx)(p.a,{}),"rejected"===i&&(0,b.jsx)("h2",{children:"Something went wrong..."})]})}},2690:function(n,e,r){r.d(e,{FE:function(){return p},Hx:function(){return m},Y5:function(){return d},wr:function(){return i},xc:function(){return x}});var t=r(5861),a=r(7757),u=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="352708f90836dd2b75b209ae082e91df";function i(){return s.apply(this,arguments)}function s(){return(s=(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US&external_source=imdb_id"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=774.49373bb8.chunk.js.map