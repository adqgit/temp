(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{137:function(e,t,n){},138:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var c=n(6),s=n(0),a=n.n(s),r=n(21),i=n.n(r),o=(n(137),n(55)),j=n(76),l=n(25),h=(n(138),n(200)),b=n(201),u=n(203),d=n(59),x=n(101),O=n(202),p=n(204),f=n(205),g=n(206),m=h.a.Text,w=b.a.Option,y=["EUR","PLN","GBP","SEK","AUD","HUF","RUB","NOK","CZK","DKK","CHF","JPY"],k=[],S=0,v=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)("EUR"),i=Object(o.a)(r,2),j=i[0],l=i[1],h=Object(s.useState)("PLN"),p=Object(o.a)(h,2),v=p[0],C=p[1],z=Object(s.useState)(""),P=Object(o.a)(z,2),F=P[0],H=P[1],N=y.map((function(e){return Object(c.jsx)(w,{disabled:e===v,value:e,children:e},e)})),_=y.map((function(e){return Object(c.jsx)(w,{disabled:e===j,value:e,children:e},e)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.a,{placeholder:"Podaj kwot\u0119",style:{width:"25%"},onChange:function(e){var t=e.target.value;t.match(/(?=.)^\$?(([1-9][0-9]{0,20}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/)?a(t):console.log("babol")},value:n}),Object(c.jsx)(b.a,{disabled:""===n,defaultValue:"EUR",style:{width:120},onChange:function(e){l(e);var t="https://api.ratesapi.io/api/latest?base=".concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e.rates[v]),H(e.rates[v].toFixed(2))}))},children:N}),Object(c.jsx)(m,{strong:!0,children:" Przelicz na: "}),Object(c.jsx)(b.a,{disabled:""===n,defaultValue:"PLN",style:{width:120},onChange:function(e){C(e);var t="https://api.ratesapi.io/api/latest?base=".concat(j);fetch(t).then((function(e){return e.json()})).then((function(t){H(t.rates[e].toFixed(2))}))},children:_}),Object(c.jsxs)(d.a,{disabled:""===n,onClick:function(){return function(){var e="https://api.ratesapi.io/api/latest?base=".concat(j);fetch(e).then((function(e){return e.json()})).then((function(e){H(e.rates[v].toFixed(2))}))}()},children:["Przelicz ",Object(c.jsx)(f.a,{twoToneColor:"#52c41a"})]}),F?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("section",{children:[Object(c.jsxs)("p",{children:["Wybrana kwota: ",Object(c.jsxs)("strong",{children:[n," ",j]})," "]}),Object(c.jsxs)("p",{children:["Aktualny kurs: ",Object(c.jsxs)("strong",{children:[j," / ",v]})," to",Object(c.jsxs)("strong",{children:[" ",F]})]}),Object(c.jsxs)("p",{children:["Po przeliczeniu otrzymasz: ",Object(c.jsxs)("strong",{children:[(n*F).toFixed(2)," ",v]})]}),Object(c.jsx)(x.a,{title:"zapisz...",children:Object(c.jsx)(d.a,{icon:Object(c.jsx)(g.a,{}),onClick:function(){var e=(n*F).toFixed(2),t={id:S,amount:n,firstCurrency:j,rate:F,result:e,secondCurrency:v};S++,k.push(t),O.a.success({content:"Zapisano: ".concat(n," ").concat(j," * ").concat(F," kwota: ").concat((n*F).toFixed(2)," ").concat(v)})},children:"Zapisz"})}),Object(c.jsxs)("p",{className:"footer",children:[" ",Object(c.jsx)("a",{href:"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",rel:"noreferrer",target:"_blank",children:"European Central Bank"})]})]})}):Object(c.jsx)("section",{children:Object(c.jsx)("p",{children:"Prosz\u0119 poda\u0107 kwot\u0119 oraz waluty."})})]})},C=function(){return Object(c.jsx)("div",{className:"history",children:Object(c.jsx)("ul",{children:k.map((function(e){return Object(c.jsxs)("li",{children:["Kwota: ",Object(c.jsxs)("strong",{children:[" ",e.amount," ",e.firstCurrency," "]})," * ",Object(c.jsxs)("strong",{children:[" ",e.rate]})," Otrzymana kwota:",Object(c.jsxs)("strong",{children:[" ",e.result," ",e.secondCurrency]}),"  "]},e.id)}))})})},z=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("section",{children:Object(c.jsxs)("label",{children:["Poka\u017c / ukryj histori\u0119: ",Object(c.jsx)(p.a,{checked:e.showHistory,onChange:function(){return e.setShowHistory((function(e){return!e}))}})]})}),Object(c.jsx)("section",{children:Object(c.jsxs)("label",{children:["Poka\u017c / ukryj Main Page: ",Object(c.jsx)(p.a,{checked:e.showHome,onChange:function(){return e.setShowHome((function(e){return!e}))}})]})}),Object(c.jsx)("section",{children:Object(c.jsxs)("label",{children:["Poka\u017c / ukryj Settings: ",Object(c.jsx)(p.a,{checked:e.showSettings,onChange:function(){return e.setShowSettings((function(e){return!e}))}})]})})]})};var P=function(){var e=Object(s.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(!0),i=Object(o.a)(r,2),h=i[0],b=i[1],u=Object(s.useState)(!0),d=Object(o.a)(u,2),x=d[0],O=d[1];return Object(c.jsx)(j.a,{basename:"/temp",children:Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("header",{children:Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"ulFlex",children:[n?Object(c.jsx)("li",{className:"flex",children:Object(c.jsx)(j.b,{exact:!0,to:"/",children:"Main page"})}):null,h?Object(c.jsx)("li",{className:"flex",children:Object(c.jsx)(j.b,{to:"/history",children:"History"})}):null,x?Object(c.jsx)("li",{className:"flex",children:Object(c.jsx)(j.b,{to:"/settings",children:"Settings"})}):null]})})}),!1===n&&!1===x?Object(c.jsx)("section",{children:"This exactly how Reflex works..."}):Object(c.jsxs)("section",{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:v}),Object(c.jsx)(l.a,{path:"/History",component:C}),Object(c.jsx)(l.a,{path:"/Settings",render:function(){return Object(c.jsx)(z,{showHome:n,setShowHome:a,showHistory:h,setShowHistory:b,showSettings:x,setShowSettings:O})}})]})]})})};n(195);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(P,{})}),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.97743895.chunk.js.map