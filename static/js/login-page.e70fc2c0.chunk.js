(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{103:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(31),l=a(32),c=a(34),i=a(33),r=a(0),o=a(8),b=a(19),h=(a(103),a(1)),m=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,s=a.name,l=a.value;e.setState(Object(n.a)({},s,l))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.reset()},e.reset=function(){e.setState({email:"",password:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"form-wrapper",children:Object(h.jsx)("div",{className:"form-view",children:Object(h.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:"form-label",children:[Object(h.jsx)("span",{className:"form-label-title",children:"E-mail"}),Object(h.jsx)("input",{className:"input",type:"email",value:this.state.email,onChange:this.handleChange,name:"email"})]}),Object(h.jsxs)("label",{className:"form-label",children:[Object(h.jsx)("span",{className:"form-label-title",children:"Password"}),Object(h.jsx)("input",{className:"input",type:"password",value:this.state.password,name:"password",onChange:this.handleChange}),Object(h.jsx)("button",{className:"button button-center",type:"submit",children:"Login"})]})]})})})}}]),a}(r.Component),u={onLogin:b.a.login};t.default=Object(o.b)(null,u)(m)}}]);
//# sourceMappingURL=login-page.e70fc2c0.chunk.js.map