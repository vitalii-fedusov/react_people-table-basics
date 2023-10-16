(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(23),a=(c(32),c(33),c(6)),s=c(2),r=c(11),j=c.n(r),i=(c(22),c(3)),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},b=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.b,{className:l,to:"/",children:"Home"}),Object(i.jsx)(a.b,{to:"/people",className:l,children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(s.b,{})})})]})},o=c(4),d=c(0);function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(35);var O=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})};function x(e,t){return t.find((function(t){return t.name===e}))}var u=function(e){var t=e.peoples,c=Object(s.r)().personSlug;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var n=e.name,s=e.slug,r=e.sex,l=e.born,b=e.died,o=e.motherName,d=e.fatherName,h=x(o,t),O=x(d,t);return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===s}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{to:s,className:j()({"has-text-danger":"f"===r}),children:n})}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:b}),o?Object(i.jsx)("td",{children:h?Object(i.jsx)(a.b,{className:"has-text-danger",to:"".concat(h.slug),children:o}):o}):Object(i.jsx)("td",{children:"-"}),d?Object(i.jsx)("td",{children:O?Object(i.jsx)(a.b,{to:"".concat(O.slug),children:d}):d}):Object(i.jsx)("td",{children:"-"})]},s)}))})]})},p=function(){var e=Object(d.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)(!0),s=Object(o.a)(a,2),r=s[0],j=s[1],l=Object(d.useState)(""),b=Object(o.a)(l,2),x=b[0],p=b[1];return Object(d.useEffect)((function(){h().then((function(e){return n(e)})).catch((function(){return p("Something went wrong")})).finally((function(){return j(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[r&&Object(i.jsx)(O,{}),x&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:x}),!r&&0===c.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!r&&Object(i.jsx)(u,{peoples:c})]})})]})},m=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},f=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},g=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(s.e,{children:Object(i.jsxs)(s.c,{path:"/",element:Object(i.jsx)(b,{}),children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(s.c,{path:"home",element:Object(i.jsx)(s.a,{replace:!0,to:"/"})}),Object(i.jsx)(s.c,{path:"people",element:Object(i.jsx)(p,{}),children:Object(i.jsx)(s.c,{path:":personSlug?",element:Object(i.jsx)(p,{})})}),Object(i.jsx)(s.c,{path:"*",element:Object(i.jsx)(m,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(g,{}))}},[[36,1,2]]]);
//# sourceMappingURL=main.c5daaf36.chunk.js.map