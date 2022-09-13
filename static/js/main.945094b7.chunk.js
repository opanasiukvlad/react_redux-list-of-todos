(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c.n(n),a=c(2),r=c(14),o=c(6),l=c(12),i=c(13),d=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4),h=function(e){return{type:"filter/SET_QUERY",payload:e}},O=function(e){return{type:"filter/SET_FILTER",payload:e}},f={query:"",status:"All"},m=function(e){return{type:"todos/SET",payload:e}},x=function(e){return{type:"todos/TODOS_ARE_LOADING",payload:e}},p={todos:[],isLoading:!1},v=Object(o.combineReducers)({currentTodo:u,filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filter/SET_FILTER":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todos/SET":return Object(b.a)(Object(b.a)({},e),{},{todos:t.payload});case"todos/TODOS_ARE_LOADING":return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.payload});default:return e}}}),y=Object(o.createStore)(v,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(i.a))),N=c(0),g=(c(25),c(26),c(1)),T=function(e){var t=e.todos,c=d,n=Object(a.b)(),s=Object(a.c)((function(e){return e.currentTodo}));return Object(g.jsxs)(g.Fragment,{children:[t.length<1&&Object(g.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(g.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:Object(g.jsx)("span",{className:"icon",children:Object(g.jsx)("i",{className:"fas fa-check"})})}),Object(g.jsx)("th",{children:"Title"}),Object(g.jsx)("th",{children:" "})]})}),Object(g.jsx)("tbody",{children:t.map((function(e){return Object(g.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(g.jsx)("td",{className:"is-vcentered",children:e.id}),Object(g.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(g.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(g.jsx)("i",{className:"fas fa-check"})})}),Object(g.jsx)("td",{className:"is-vcentered is-expanded",children:Object(g.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(g.jsx)("td",{className:"has-text-right is-vcentered",children:Object(g.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){n(c(e))},children:Object(g.jsx)("span",{className:"icon",children:Object(g.jsx)("i",{className:(null===s||void 0===s?void 0:s.id)!==e.id?"far fa-eye":"far fa-eye-slash"})})})})]},e.id)}))})]})]})},E=function(){var e=Object(a.b)(),t=h,c=O,n=Object(a.c)((function(e){return e.filter.status})),s=Object(a.c)((function(e){return e.filter.query}));return Object(g.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(g.jsx)("p",{className:"control",children:Object(g.jsx)("span",{className:"select",children:Object(g.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){return e(c(t.target.value))},value:n,children:[Object(g.jsx)("option",{value:"all",children:"All"}),Object(g.jsx)("option",{value:"active",children:"Active"}),Object(g.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(g.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(g.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(c){return e(t(c.target.value))}}),Object(g.jsx)("span",{className:"icon is-left",children:Object(g.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(g.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(g.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(t("")),e(c("All"))}})})]})]})},w=c(5),S=(c(28),function(){return Object(g.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(g.jsx)("div",{className:"Loader__content"})})});function _(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var k=function(){var e=Object(N.useState)(null),t=Object(w.a)(e,2),c=t[0],n=t[1],s=j,r=Object(a.b)(),o=Object(a.c)((function(e){return e.currentTodo}));return Object(N.useEffect)((function(){var e;o&&(e=o.userId,_("/users/".concat(e))).then(n)}),[]),Object(g.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(g.jsx)("div",{className:"modal-background"}),c?Object(g.jsxs)("div",{className:"modal-card",children:[Object(g.jsxs)("header",{className:"modal-card-head",children:[Object(g.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===o||void 0===o?void 0:o.id]}),Object(g.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){r(s())}})]}),Object(g.jsxs)("div",{className:"modal-card-body",children:[Object(g.jsx)("p",{className:"block","data-cy":"modal-title",children:null===o||void 0===o?void 0:o.title}),Object(g.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==o&&void 0!==o&&o.completed?Object(g.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(g.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(g.jsx)("a",{href:c.email,children:c.name})]})]})]}):Object(g.jsx)(S,{})]})},L=function(){var e=m,t=x,c=Object(a.b)(),n=Object(a.c)((function(e){return e.todos.isLoading})),s=Object(a.c)((function(e){return e.currentTodo})),r=Object(a.c)((function(e){return e.filter.status})),o=Object(a.c)((function(e){return e.filter.query})),l=Object(a.c)((function(e){var t=e.todos.todos.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())}));switch(r){case"all":default:return t;case"active":return t.filter((function(e){return!e.completed}));case"completed":return t.filter((function(e){return e.completed}))}}));return Object(N.useEffect)((function(){t(!0),_("/todos").then((function(t){return c(e(t))})).catch((function(e){throw new Error(e)})).finally((function(){return t(!1)}))}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"section",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"box",children:[Object(g.jsx)("h1",{className:"title",children:"Todos:"}),Object(g.jsx)("div",{className:"block",children:Object(g.jsx)(E,{})}),Object(g.jsx)("div",{className:"block",children:n?Object(g.jsx)(S,{}):Object(g.jsx)(T,{todos:l})})]})})}),s&&Object(g.jsx)(k,{})]})},C=function(){return Object(g.jsx)(a.a,{store:y,children:Object(g.jsx)(r.a,{children:Object(g.jsx)(L,{})})})};s.a.render(Object(g.jsx)(C,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.945094b7.chunk.js.map