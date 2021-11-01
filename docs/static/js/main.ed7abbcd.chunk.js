(this["webpackJsonpdecision-maker"]=this["webpackJsonpdecision-maker"]||[]).push([[0],{30:function(t,e,n){},34:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var s=n(1),i=n.n(s),o=n(23),a=n.n(o),c=(n(30),n(14)),r=n(9),l=n(10),p=n(8),u=n(13),h=n(11),d=n.p+"static/media/logo.6ce24c58.svg",j=n(0),b=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(j.jsx)("h1",{children:"Decision Maker"})]})}}]),n}(s.Component),x=n(37),m=n(39),O=n(24),f=n(38),g=n(40),y=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).state={question:"",options:[{option:"Yes",picked:!1},{option:"No",picked:!1},{option:"Kinda",picked:!1}],optionValue:"",error:""},s.handleQuestion=s.handleQuestionChange.bind(Object(p.a)(s)),s.handleOption=s.handleOptionChange.bind(Object(p.a)(s)),s.saveOnEnter=s.handleKeyDown.bind(Object(p.a)(s)),s.setAnswer=s.setAnswer.bind(Object(p.a)(s)),s}return Object(l.a)(n,[{key:"handleQuestionChange",value:function(t){t.preventDefault(),this.setState({error:""}),this.setState({question:t.target.value})}},{key:"handleOptionChange",value:function(t){t.preventDefault(),this.setState({optionValue:t.target.value})}},{key:"handleKeyDown",value:function(t){"Enter"===t.key&&(this.setState((function(t){return{options:[].concat(Object(c.a)(t.options),[{option:t.optionValue,picked:!1}])}})),this.setState({optionValue:""}))}},{key:"setAnswer",value:function(){if(this.state.question){var t={question:this.state.question,options:this.state.options};this.props.updateDecision(t),this.setState({question:" ",options:[{option:"Yes",picked:!1},{option:"No",picked:!1},{option:"Kinda",picked:!1}]})}else this.setState({error:"Ask a question"})}},{key:"render",value:function(){var t=this.state,e=t.options,n=t.optionValue,s=t.question;return Object(j.jsx)(x.a,{fluid:"sm",className:"mt-4",children:Object(j.jsxs)(m.a,{direction:"vertical",gap:3,children:[Object(j.jsx)("p",{className:"text-secondary text-md p-2 text-justify",style:{fontSize:"20px",fontWeight:"600"},children:"Ask away your question and I will pick an option for you."}),this.state.error&&Object(j.jsxs)("p",{className:"text-danger",children:[" ",this.state.error," "]}),Object(j.jsx)(O.a,{controlId:"floatingTextarea2",label:"Question",children:Object(j.jsx)(f.a.Control,{as:"textarea",placeholder:"Type your question",style:{height:"100px",resize:"none"},value:s,onChange:this.handleQuestion})}),Object(j.jsx)(m.a,{direction:"horizontal",gap:2,className:"flex-wrap",children:e.map((function(t,e){var n=t.option;return Object(j.jsx)("p",{className:"bg-secondary text-light text-left te py-1 px-4",children:n},e)}))}),Object(j.jsx)(O.a,{controlId:"floatingInput",label:"Add Option. Type and press Enter",className:"mb-3",children:Object(j.jsx)(f.a.Control,{type:"text",placeholder:"add option",value:n,onChange:this.handleOption,onKeyDown:this.saveOnEnter})}),Object(j.jsx)(g.a,{className:"primary",onClick:this.setAnswer,children:"Get Answer"})]})})}}]),n}(s.Component),k=(n(34),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.report,n=t.reset,s=t.questionPop;return Object(j.jsxs)(x.a,{className:"mt-4",children:[Object(j.jsx)("p",{className:"p-2 m-2 m-auto text-primary",style:{fontWeight:"700",fontSize:"20px"},children:"Decided!!"}),Object(j.jsxs)(m.a,{className:"mt-2 text-left border-danger",children:[Object(j.jsxs)("p",{className:"text-dark p-1 my-1",style:{width:"100%",textAlign:"left"},children:[Object(j.jsx)("span",{style:{fontWeight:"700"},children:" Question: "})," ",e.question]}),null===e||void 0===e?void 0:e.options.map((function(t,e){var n=t.option,s=t.picked;return Object(j.jsx)("p",{style:{width:"40%",textAlign:"left",fontWeight:"600"},className:"p-1 my-1 ml-4 ".concat(s?"checked text-light bg-info":""),children:n},e)}))]}),Object(j.jsx)(g.a,{style:{marginTop:"10px",marginBottom:"10px"},onClick:n,children:"Ask another Question"}),Object(j.jsxs)(x.a,{style:{height:"400px",overflowY:"auto",marginTop:"10px"},children:[Object(j.jsxs)(m.a,{gap:2,direction:"horizontal",className:"justify-content-between mt-4",children:[Object(j.jsx)("p",{className:"p-1 m-1 text-md font-md text-primary text-center",style:{fontWeight:"700"},children:"Questions"}),Object(j.jsx)("p",{className:"p-1 m-1 text-md font-md text-primary text-center",style:{fontWeight:"700"},children:"Popularity"})]}),s.map((function(t,e){var n=t.question,s=t.count;return Object(j.jsxs)(m.a,{gap:2,direction:"horizontal",className:"justify-content-between mb-1",children:[Object(j.jsx)("p",{className:"p-1 m-1 text-md font-md text-secondary text-center",children:n}),Object(j.jsx)("p",{className:"p-1 m-1 text-md font-md text-secondary text-center",children:s})]},e)}))]})]})}}]),n}(s.Component)),v=n(25),q=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).state={questionBank:[],decision:{},showReport:!1,processing:!1},s.updateDecision=s.updateDecision.bind(Object(p.a)(s)),s.reset=s.resetHandler.bind(Object(p.a)(s)),s}return Object(l.a)(n,[{key:"addToQuestionBank",value:function(t){var e=this.state.questionBank.find((function(e){return e.question===t.question}));if(e){var n=this.state.questionBank;return n[this.state.questionBank.indexOf(e)].count++,void this.setState({questionBank:n})}this.setState((function(e){return{questionBank:[].concat(Object(c.a)(e.questionBank),[t])}}))}},{key:"updateDecision",value:function(t){var e=Math.floor(Math.random()*t.options.length);t.options[e].picked=!0,this.setState({decision:t}),this.addToQuestionBank({question:t.question,count:1}),this.setState({processing:!0})}},{key:"resetHandler",value:function(){this.setState({decision:{},processing:!1,showReport:!1})}},{key:"render",value:function(){var t=this;return this.state.processing&&setTimeout((function(){t.setState({processing:!1,showReport:!0})}),1e3),console.log("rendr"),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)(v.a,{lg:"5",className:"m-auto",children:Object(j.jsxs)(x.a,{children:[!this.state.showReport&&!this.state.processing&&Object(j.jsx)(y,{updateDecision:this.updateDecision}),this.state.processing&&Object(j.jsx)("p",{className:"bg-light text-primary mx-auto p-3",style:{height:"100%",marginTop:"60px"},children:"Process..."}),this.state.showReport&&!this.state.processing&&Object(j.jsx)(k,{report:this.state.decision,reset:this.reset,questionPop:this.state.questionBank})]})})]})}}]),n}(s.Component),N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),s(t),i(t),o(t),a(t)}))};n(35);a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),N()}},[[36,1,2]]]);
//# sourceMappingURL=main.ed7abbcd.chunk.js.map