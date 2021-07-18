(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{26:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(18),r=n.n(a),i=(n(26),n(21)),o=n(6),l=n(8),u=n(9),j=n.n(u),d=n(19),b=n(3),h=n(20),m=n.n(h),O=n(0),f={sports:21,history:23,politics:24},p=s.a.createContext(),x=function(e){var t=e.children,n=Object(c.useState)(!0),s=Object(b.a)(n,2),a=s[0],r=s[1],i=Object(c.useState)(!1),u=Object(b.a)(i,2),h=u[0],x=u[1],v=Object(c.useState)([]),y=Object(b.a)(v,2),g=y[0],N=y[1],q=Object(c.useState)(0),w=Object(b.a)(q,2),S=w[0],C=w[1],k=Object(c.useState)(0),M=Object(b.a)(k,2),z=M[0],_=M[1],F=Object(c.useState)(!1),I=Object(b.a)(F,2),A=I[0],H=I[1],J=Object(c.useState)({amount:10,category:"sports",difficulty:"easy"}),L=Object(b.a)(J,2),Q=L[0],T=L[1],B=Object(c.useState)(!1),D=Object(b.a)(B,2),E=D[0],P=D[1],Y=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),r(!1),e.next=4,m()(t).catch((function(e){return console.log(e)}));case 4:(n=e.sent)?(c=n.data.results).length>0?(N(c),x(!1),r(!1),H(!1)):(r(!0),H(!0)):r(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){C((function(e){var t=e+1;return t>g.length-1?(K(),0):t}))},K=function(){P(!0)};return Object(O.jsx)(p.Provider,{value:{waiting:a,loading:h,questions:g,index:S,correct:z,error:A,isModalOpen:E,nextQuestion:G,checkAnswer:function(e){e&&_((function(e){return e+1})),G()},closeModal:function(){r(!0),_(0),P(!1)},quiz:Q,handleChange:function(e){var t=e.target.name,n=e.target.value;T(Object(l.a)(Object(l.a)({},Q),{},Object(o.a)({},t,n)))},handleSubmit:function(e){e.preventDefault();var t=Q.amount,n=Q.category,c=Q.difficulty,s="".concat("https://opentdb.com/api.php?","amount=").concat(t,"&difficulty=").concat(c,"&category=").concat(f[n],"&type=multiple");Y(s)}},children:t})},v=function(){return Object(c.useContext)(p)},y=function(){var e=v(),t=e.quiz,n=e.handleChange,c=e.handleSubmit,s=e.error;return Object(O.jsx)("main",{children:Object(O.jsx)("section",{className:"quiz quiz-small",children:Object(O.jsxs)("form",{className:"setup-form",children:[Object(O.jsx)("h2",{children:"setup quiz"}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{htmlFor:"amount",children:"number of questions"}),Object(O.jsx)("input",{type:"number",name:"amount",id:"amount",value:t.amount,onChange:n,className:"form-input",min:1,max:50})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{htmlFor:"category",children:"category"}),Object(O.jsxs)("select",{name:"category",id:"category",className:"form-input",value:t.category,onChange:n,children:[Object(O.jsx)("option",{value:"sports",children:"sports"}),Object(O.jsx)("option",{value:"history",children:"history"}),Object(O.jsx)("option",{value:"politics",children:"politics"})]})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{htmlFor:"difficulty",children:"select difficulty"}),Object(O.jsxs)("select",{name:"difficulty",id:"difficulty",className:"form-input",value:t.difficulty,onChange:n,children:[Object(O.jsx)("option",{value:"easy",children:"easy"}),Object(O.jsx)("option",{value:"medium",children:"medium"}),Object(O.jsx)("option",{value:"hard",children:"hard"})]})]}),s&&Object(O.jsx)("p",{className:"error",children:"can't generate questions, please try different options"}),Object(O.jsx)("button",{type:"submit",onClick:c,className:"submit-btn",children:"start"})]})})})},g=function(){return Object(O.jsx)("main",{children:Object(O.jsx)("div",{className:"loading"})})},N=function(){var e=v(),t=e.isModalOpen,n=e.closeModal,c=e.correct,s=e.questions;return Object(O.jsx)("div",{className:"".concat(t?"modal-container isOpen":"modal-container"),children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsx)("h2",{children:"congrats!"}),Object(O.jsxs)("p",{children:["You answered ",(c/s.length*100).toFixed(0),"% of questions correctly"]}),Object(O.jsx)("button",{className:"close-btn",onClick:n,children:"play again"})]})})};var q=function(){var e=v(),t=e.waiting,n=e.loading,c=e.questions,s=e.index,a=e.correct,r=e.nextQuestion,o=e.checkAnswer;if(t)return Object(O.jsx)(y,{});if(n)return Object(O.jsx)(g,{});var l=c[s],u=l.question,j=l.incorrect_answers,d=l.correct_answer,b=Object(i.a)(j),h=Math.floor(4*Math.random());return 3===h?b.push(d):(b.push(b[h]),b[h]=d),Object(O.jsxs)("main",{children:[Object(O.jsx)(N,{}),Object(O.jsxs)("section",{className:"quiz",children:[Object(O.jsxs)("p",{className:"correct-answers",children:["correct answers : ",a,"/",s]}),Object(O.jsxs)("article",{className:"container",children:[Object(O.jsx)("h2",{dangerouslySetInnerHTML:{__html:u}}),Object(O.jsx)("div",{className:"btn-container",children:b.map((function(e,t){return Object(O.jsx)("button",{className:"answer-btn",onClick:function(){return o(d===e)},dangerouslySetInnerHTML:{__html:e}},t)}))})]}),Object(O.jsx)("button",{className:"next-question",onClick:r,children:"next question"})]})]})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(x,{children:Object(O.jsx)(q,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.9767daad.chunk.js.map