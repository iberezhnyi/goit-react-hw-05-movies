"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[281],{627:function(n,e,t){t.d(e,{Z:function(){return p}});var r=t(861),i=t(757),a=t.n(i),o=t(294).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzdlODZlMzdkODU4ZTMyMzQ4NzFmNmY5ZjA1ZDcwNiIsInN1YiI6IjY1OTNiYjk0ZTY0MGQ2N2Y0MGQ2OTZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._7mJ2kp5OrC3s16OXvB-SxM-uab1Y1UFJSFYt7tRN9g"}}),c=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("trending/movie/day");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,n.next=3,o("search/movie",{params:{query:e,page:t}});case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:"credits",n.next=3,o("movie/".concat(e),{params:{append_to_response:"".concat(t)}});case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p={fetchPopularMovies:c,fetchQueryMovies:u,fetchMovieDetail:s}},624:function(n,e,t){t.d(e,{O:function(){return a}});var r,i=t(168),a=t(924).ZP.button(r||(r=(0,i.Z)(["\n  right: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 15px;\n  padding: 10px 10px 10px 10px;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.88;\n  letter-spacing: 0.06em;\n  color: #ffffff;\n  fill: #ffffff;\n  background-color: grey;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border: 0;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n\n  &:hover,\n  &:focus {\n    background-color: #616161;\n  }\n"])))},672:function(n,e,t){t.d(e,{Z:function(){return v}});var r,i,a,o,c=t(689),u=t(168),s=t(924),p=t(87),f=s.ZP.ul(r||(r=(0,u.Z)(["\n  padding: 20px 40px;\n  list-style: none;\n  line-height: 1.4;\n"]))),l=s.ZP.li(i||(i=(0,u.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  &::before {\n    content: '';\n    width: 8px;\n    height: 8px;\n    margin-right: 14px;\n    border-radius: 999px;\n    background-color: #000000;\n  }\n"]))),d=s.ZP.p(a||(a=(0,u.Z)(["\n  font-size: 16px;\n  color: black;\n  &:hover,\n  &:focus {\n    text-decoration: underline #000000;\n  }\n"]))),h=(0,s.ZP)(p.rU)(o||(o=(0,u.Z)(["\n  text-decoration: none;\n"]))),x=t(184),v=function(n){var e=n.movies,t=n.path,r=void 0===t?"":t,i=(0,c.TH)();return(0,x.jsx)(f,{children:null===e||void 0===e?void 0:e.map((function(n){var e=n.id,t=n.title;return(0,x.jsx)(l,{children:(0,x.jsx)(h,{to:"".concat(r+e),state:{from:i},children:(0,x.jsx)(d,{children:t})})},e)}))})}},281:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,i,a,o,c=t(861),u=t(439),s=t(757),p=t.n(s),f=t(791),l=t(87),d=t(174),h=t(627),x=t(624),v=t(168),g=t(924),m=g.ZP.div(r||(r=(0,v.Z)(["\n  display: flex;\n  justify-content: start;\n\n  height: 64px;\n  padding-right: 40px;\n  padding-left: 40px;\n\n  color: #fff;\n"]))),Z=g.ZP.form(i||(i=(0,v.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0;\n  margin-right: auto;\n  width: 450px;\n"]))),b=g.ZP.input(a||(a=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  padding-left: 16px;\n  padding-right: 48px;\n  font-size: 16px;\n  line-height: 1.25;\n  letter-spacing: 0.03em;\n  color: #212121;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));\n  border-radius: 3px;\n  background-color: #ffffff;\n"]))),y=t(184),j=function(){var n=(0,f.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,l.lr)(),a=(0,u.Z)(i,2),o=a[0],c=a[1];return(0,f.useEffect)((function(){var n,e=null!==(n=o.get("query"))&&void 0!==n?n:"";!t&&r(e)}),[t,o]),(0,y.jsx)(m,{children:(0,y.jsxs)(Z,{onSubmit:function(n){n.preventDefault();var e=n.target.query.value.trim();""!==e?c({query:e}):d.Am.warn("Please enter valid movie name")},children:[(0,y.jsx)(x.O,{type:"submit",children:"Search"}),(0,y.jsx)(b,{type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Movie name",onChange:function(n){var e=n.target.value;r(e)},value:t})]})})},k=t(672),w=g.ZP.main(o||(o=(0,v.Z)(["\n  display: block;\n"]))),z=h.Z.fetchQueryMovies,J=function(){var n=(0,f.useState)(null),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,l.lr)(),a=(0,u.Z)(i,1)[0],o=(0,f.useCallback)(function(){var n=(0,c.Z)(p().mark((function n(e){var t,i;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,z(e);case 3:t=n.sent,i=t.results,r(i),n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),d.Am.error("Something went wrong. ".concat(n.t0.message)),n.abrupt("return");case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),[]);return(0,f.useEffect)((function(){var n=a.get("query");o(n)}),[o,a]),(0,y.jsxs)(w,{children:[(0,y.jsx)(j,{}),t&&(0,y.jsx)(k.Z,{movies:t})]})}}}]);
//# sourceMappingURL=281.bb530a26.chunk.js.map