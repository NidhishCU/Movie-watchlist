(this["webpackJsonpmovie-watchlist"]=this["webpackJsonpmovie-watchlist"]||[]).push([[0],{27:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c(14),a=c.n(s),n=(c(27),c(11)),r=c(3),j=c(9),d=c(1);var l=e=>{let{movie:t}=e;return Object(d.jsxs)("div",{className:"movie-item",children:[Object(d.jsx)("h2",{children:t.title}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Genre:"})," ",t.genre]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Release Year:"})," ",t.releaseYear]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Status:"})," ",t.watched?"Watched":"Unwatched"]}),Object(d.jsx)(n.b,{to:"/details/".concat(t.id),children:"View Details"})]})};var o=e=>{let{movies:t}=e;return Object(d.jsx)("div",{className:"movie-list",children:t.map((e=>Object(d.jsx)(l,{movie:e},e.id)))})},b=c(16);const h=Object(b.b)({name:"movies",initialState:{movies:[]},reducers:{setMovies:(e,t)=>{e.movies=t.payload},addMovie:(e,t)=>{e.movies.push(t.payload)},editMovie:(e,t)=>{const c=e.movies.findIndex((e=>e.id===t.payload.id));-1!==c&&(e.movies[c]=t.payload)},deleteMovie:(e,t)=>{e.movies=e.movies.filter((e=>e.id!==t.payload))},toggleWatchStatus:(e,t)=>{const c=e.movies.find((e=>e.id===t.payload));c&&(c.watched=!c.watched)},rateMovie:(e,t)=>{const{id:c,rating:i}=t.payload,s=e.movies.find((e=>e.id===c));s&&(s.rating=i)},reviewMovie:(e,t)=>{const{id:c,review:i}=t.payload,s=e.movies.find((e=>e.id===c));s&&(s.review=i)}}}),{setMovies:v,addMovie:O,editMovie:x,deleteMovie:u,toggleWatchStatus:m,rateMovie:p,reviewMovie:g}=h.actions;var w=h.reducer;var f=()=>{const e=Object(j.b)(),t=Object(j.c)((e=>e.movies.movies));return Object(i.useEffect)((()=>{fetch("http://localhost:5000/movies").then((e=>e.json())).then((t=>e(v(t))))}),[e]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:"My Movie Watchlist"}),Object(d.jsx)(n.b,{to:"/add",children:"Add New Movie"})]}),Object(d.jsx)(o,{movies:t})]})};var M=()=>{const[e,t]=Object(i.useState)(""),[c,s]=Object(i.useState)(""),[a,n]=Object(i.useState)(""),[l,o]=Object(i.useState)(""),b=Object(j.c)((e=>e.movies.movies)),h=Object(j.b)(),v=Object(r.f)(),{id:u}=Object(r.g)();Object(i.useEffect)((()=>{if(u){const e=b.find((e=>e.id===u));e&&(t(e.title),s(e.description),n(e.releaseYear),o(e.genre))}}),[u,b]);return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:u?"Edit Movie":"Add Movie"}),Object(d.jsxs)("form",{onSubmit:t=>{t.preventDefault();const i={id:u||Date.now().toString(),title:e,description:c,releaseYear:a,genre:l};h(u?x(i):O(i)),v.push("/")},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Title"}),Object(d.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Description"}),Object(d.jsx)("textarea",{value:c,onChange:e=>s(e.target.value)})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Release Year"}),Object(d.jsx)("input",{type:"number",value:a,onChange:e=>n(e.target.value)})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Genre"}),Object(d.jsx)("input",{type:"text",value:l,onChange:e=>o(e.target.value)})]}),Object(d.jsx)("button",{type:"submit",children:"Save"}),Object(d.jsx)("button",{type:"button",className:"cancel-button",onClick:()=>v.push("/"),children:"Cancel"})]})]})};var y=()=>{const{id:e}=Object(r.g)(),t=Object(j.c)((t=>t.movies.movies.find((t=>t.id===e)))),c=Object(j.b)(),s=Object(r.f)();return Object(i.useEffect)((()=>{t||s.push("/")}),[t,s]),t?Object(d.jsxs)("div",{className:"container details-page",children:[Object(d.jsx)("h1",{children:t.title}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Description:"})," ",t.description]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Release Year:"})," ",t.releaseYear]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Genre:"})," ",t.genre]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Status:"})," ",t.watched?"Watched":"Unwatched"]}),Object(d.jsx)("button",{onClick:()=>{c(m(e))},children:t.watched?"Mark as Unwatched":"Mark as Watched"}),Object(d.jsx)("button",{onClick:()=>s.push("/edit/".concat(e)),children:"Edit"}),Object(d.jsx)("button",{onClick:()=>{c(u(e)),s.push("/")},className:"cancel-button",children:"Delete"}),Object(d.jsxs)("div",{className:"rating",children:[Object(d.jsx)("h2",{children:"Rate this movie"}),Object(d.jsx)("select",{value:t.rating,onChange:t=>{return i=Number(t.target.value),void c(p({id:e,rating:i}));var i},children:[1,2,3,4,5].map((e=>Object(d.jsxs)("option",{value:e,children:[e," Star",e>1&&"s"]},e)))})]}),Object(d.jsxs)("div",{className:"review",children:[Object(d.jsx)("h2",{children:"Review this movie"}),Object(d.jsx)("textarea",{value:t.review,onChange:t=>{return i=t.target.value,void c(g({id:e,review:i}));var i}})]})]}):null};var S=()=>Object(d.jsx)(n.a,{children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",exact:!0,component:f}),Object(d.jsx)(r.a,{path:"/add",component:M}),Object(d.jsx)(r.a,{path:"/edit/:id",component:M}),Object(d.jsx)(r.a,{path:"/details/:id",component:y})]})}),C=Object(b.a)({reducer:{movies:w}});a.a.render(Object(d.jsx)(j.a,{store:C,children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.8e95effb.chunk.js.map