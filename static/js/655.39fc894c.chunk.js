"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[655],{7655:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var a=t(2606),r=t(3363),o=t(9434),i=function(n){return n.contacts.items},s=function(n){return n.contacts.isLoading},l=function(n){return n.filter},c="ContactForm_btn__xMrHz",u="ContactForm_info__NZcGr",d=t(184);function p(){var n=function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}((0,o.v9)(i),(0,o.v9)(l)),e=(0,o.I0)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)("ul",{children:n.map((function(n){var t=n.id,a=n.name,o=n.number;return(0,d.jsxs)("li",{className:u,children:[a," : ",o,(0,d.jsx)("div",{children:(0,d.jsx)("button",{className:c,type:"button",onClick:function(){var n;n=t,e((0,r._f)(n))},children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16",children:[(0,d.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),(0,d.jsx)("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})})]},t)}))})]})}var h,x,f,m,b,g,v=t(168),j=t(8789),w=j.ZP.form(h||(h=(0,v.Z)(["\n  margin-bottom: 30px;\n    margin-top: 30px;\n    "]))),Z=j.ZP.label(x||(x=(0,v.Z)(["\n            display: block;\n    font-size: 15px;\n    font-weight: 600;\n    margin-top: 10px;\n     "]))),C=j.ZP.input(f||(f=(0,v.Z)(["\n        display: block;\n    font-size: 15px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    padding: 10px;\n    width: 100%;\n "]))),z=j.ZP.button(m||(m=(0,v.Z)(["\n   background-color: blue;\n    border: none;\n    border-radius: 1em;\n    box-shadow: 0 11px 7px rgba(0,0,0,.15);\n    color: #fff;\n    cursor: pointer;\n    font-size: 20px;\n    font-weight: 600;\n    margin-top: 20px;\n    outline: none;\n    padding: 10px;\n    transition: all .4s ease;\n    &:hover{\n      background: green;\n    box-shadow: 0 11px 7px rgba(60,215,158,.15);\n    }\n "]))),y=j.ZP.input(b||(b=(0,v.Z)(["\n display: block;\n  padding: 10px;\n  width: 100%;\n  font-size: 15px;\n  margin-top: 15px;\n "]))),k=(j.ZP.label(g||(g=(0,v.Z)(["\n      display: block;\n  font-weight: 500;\n  font-size: 20px;\n "]))),t(772));function _(){var n=(0,o.I0)(),e=(0,o.v9)(l);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Z,{children:"Find contacts by name"}),(0,d.jsx)(y,{autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -] [a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"May contain only letters",value:e,onChange:function(e){n((0,k.kA)(e.target.value))},required:!0})]})}var F=t(9439),A=t(2791);function M(){var n=(0,o.I0)(),e=(0,A.useState)(""),t=(0,F.Z)(e,2),a=t[0],s=t[1],l=(0,A.useState)(""),c=(0,F.Z)(l,2),u=c[0],p=c[1],h=(0,o.v9)(i),x=function(n){var e=n.target,t=e.name,a=e.value;"name"===t?s(a):"number"===t&&p(a)},f=function(){s(""),p("")};return(0,d.jsxs)(w,{onSubmit:function(e){e.preventDefault();var t={name:a,number:u};if(0===h.length)return n((0,r.el)(t)),void f();-1===h.findIndex((function(n){return t.name===n.name}))?(n((0,r.el)(t)),f()):alert("".concat(t.name," is already in contacts."))},children:[(0,d.jsx)(Z,{children:"Name"}),(0,d.jsx)(C,{autoComplete:"off",type:"text",placeholder:"First Name Last Name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"May contain only letters",value:a,onChange:x,required:!0}),(0,d.jsx)("br",{}),(0,d.jsx)(Z,{children:"Number"}),(0,d.jsx)(C,{autoComplete:"off",placeholder:"111-11-11",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"May contain only number",value:u,onChange:x,required:!0}),(0,d.jsx)("br",{}),(0,d.jsx)(z,{type:"submit",children:"Add Contact"})]})}function N(n){var e=n.children;return(0,d.jsxs)("section",{children:[(0,d.jsx)("span",{children:"Phonebook"}),e]})}var V=t(9773),P=t(8402),L=function(){return(0,d.jsx)(P.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperClass:"progress-bar-wrapper",borderColor:"#F4442E",barColor:"#51E5FF"})},H=function(){var n=(0,o.I0)(),e=(0,o.v9)(i),t=(0,o.v9)(s);return(0,A.useEffect)((function(){n((0,r.K2)())}),[n]),(0,d.jsx)(a.W,{children:(0,d.jsxs)(N,{children:[(0,d.jsx)(M,{}),t===V.Q.loading||t===V.Q.idle?(0,d.jsx)(L,{}):"",0===e.length?"":(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(_,{}),(0,d.jsx)(p,{})]})]})})}}}]);
//# sourceMappingURL=655.39fc894c.chunk.js.map