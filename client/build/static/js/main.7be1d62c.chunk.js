(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"adminID":["5f744cf32cd19606f80ad7a6","5f67f94cdaace374d602d764"],"secretRoute":"PG3LKITaLqqnlpb9kEsS"}')},44:function(e,t,a){e.exports=a.p+"static/media/student-chart-image.d96fa6c0.PNG"},45:function(e,t,a){e.exports=a.p+"static/media/todos-layout-image.1486f995.PNG"},46:function(e,t,a){e.exports=a.p+"static/media/student-buttons-image.ffcb59a8.PNG"},48:function(e,t,a){e.exports=a(87)},74:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),s=a(18),c=a.n(s),i=a(20),d=a(4),u=a(5),m=a(7),h=a(6),p=a(9),g=a(19),E=a(8),f=a.n(E),v=a(2),b=a(3),w=(a(74),a(11)),N=a(44),S=a.n(N),O=a(45),C=a.n(O),y=a(46),I=a.n(y),k=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"images-container"},r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"image-heading"},"Very organized way for you to add a data collection of students"),r.a.createElement("img",{className:"home-image",src:S.a})),r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"image-heading"},"Easy simple todo list incase you need to remember something"),r.a.createElement("img",{className:"home-image",src:C.a})),r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"image-heading"},"Buttons"),r.a.createElement("div",{className:"legend-container"},r.a.createElement("div",null,r.a.createElement(v.a,{color:"green",icon:b.f})," = Add new student to chart"),r.a.createElement("div",null,r.a.createElement(v.a,{color:"purple",icon:b.e})," = View all student data in that row"),r.a.createElement("div",null,r.a.createElement(v.a,{color:"#F0810F",icon:b.d})," = Edit the Student data in that row"),r.a.createElement("div",null,r.a.createElement(v.a,{color:"red",icon:b.h})," = delete student/todo")),r.a.createElement("img",{className:"button-image",src:I.a}))))}}]),a}(n.Component),j=a(15),M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).homeReload=function(){e.props.history.push("/"),window.location.reload({forcedReload:!1})},e.handleClick=Object(i.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return setTimeout((function(){e.setState({problems:null})}),4e3),t.next=3,f.a.get("/api/".concat(w.secretRoute)).then((function(t){"true"===localStorage.getItem("loggedInStatus")&&(localStorage.clear(),e.homeReload()),t.data.forEach((function(t){t.username===e.state.username?t.password===e.state.password?(localStorage.setItem("loggedInStatus",!0),localStorage.setItem("id",t._id),localStorage.setItem("userInfo",JSON.stringify(t)),e.setState({userInfo:t}),e.homeReload()):e.setState({problems:"Incorrect password"}):e.setState({problems:"Incorrect username"})}))})).catch((function(e){console.log("axios Error",e)}));case 3:case"end":return t.stop()}}),t)}))),e.changeHandler=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(j.a)({},a,n))},e.createAccount=Object(i.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(setTimeout((function(){e.setState({problems:null})}),4e3),e.state.newUsername){t.next=3;break}return t.abrupt("return",e.setState({problems:"Please fill in username"}));case 3:if(e.state.newPassword){t.next=5;break}return t.abrupt("return",e.setState({problems:"Please fill in passwords"}));case 5:if(e.state.newPassword===e.state.confirmPassword){t.next=7;break}return t.abrupt("return",e.setState({problems:"Passwords do not match"}));case 7:return a=!1,t.next=10,f.a.get("/api/".concat(w.secretRoute)).then((function(t){t.data.find((function(t){return t.username===e.state.newUsername}))&&(a=!0,e.setState({problems:"Username is already taken"}))}));case 10:if(!a){t.next=12;break}return t.abrupt("return");case 12:f.a.post("/api/newUser",{username:e.state.newUsername,password:e.state.newPassword}).then((function(e){})),e.homeReload();case 14:case"end":return t.stop()}}),t)}))),e.state={problems:null},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"log-in-form"},r.a.createElement("form",null,r.a.createElement("h1",null,"Log In Here"),r.a.createElement("label",null,"username: "),r.a.createElement("input",{name:"username",placeholder:"Username",type:"username",onChange:this.changeHandler}),r.a.createElement("label",null,"password: "),r.a.createElement("input",{autoComplete:"new-password",name:"password",placeholder:"Password",type:"password",onChange:this.changeHandler})),r.a.createElement("button",{onClick:this.handleClick},"true"===localStorage.getItem("loggedInStatus")?"Log Out":"Log In")),r.a.createElement("div",{className:"create-account-form"},r.a.createElement("form",null,r.a.createElement("h1",null,"Create Account Here"),r.a.createElement("label",null,"username: "),r.a.createElement("input",{name:"newUsername",placeholder:"New Username",type:"username",onChange:this.changeHandler}),r.a.createElement("label",null,"password: "),r.a.createElement("input",{autoComplete:"new-password",name:"newPassword",placeholder:"New Password",type:"password",onChange:this.changeHandler}),r.a.createElement("label",null,"confirm password: "),r.a.createElement("input",{autoComplete:"new-password",name:"confirmPassword",placeholder:"Confirm Password",type:"password",onChange:this.changeHandler})),r.a.createElement("button",{onClick:this.createAccount},"Create Account")),r.a.createElement("div",{className:"problems"},r.a.createElement("div",null,"problems:"),r.a.createElement("div",{className:"problem"},this.state.problems?this.state.problems:null)))}}]),a}(n.Component),x=function(){return r.a.createElement("div",{className:"no-match"},r.a.createElement("h2",null,"Couldnt find that page"),r.a.createElement(g.b,{className:"return-home",to:"/"},"Return Home"))},H=a(16),D=a.n(H),A=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).getMonths=function(){return["January","Feburary","March","April","May","June","July","August","September","October","November","December"].map((function(e,t){return r.a.createElement("option",{value:t+1},e)}))},e.getDays=function(){for(var e=[],t=1;t<=31;t++)e.push(r.a.createElement("option",{value:t},t));return e},e.getYears=function(){for(var e=(new Date).getFullYear(),t=[],a=1900;a<=e;a++)t.push(r.a.createElement("option",{value:a},a));return t},e.state={},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("select",{onChange:this.props.dateHandler,name:"month"},this.getMonths()),r.a.createElement("select",{onChange:this.props.dateHandler,name:"day"},this.getDays()),r.a.createElement("select",{onChange:this.props.dateHandler,name:"year"},this.getYears()))}}]),a}(n.Component);D.a.setAppElement("#root");var J=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){f.a.get("/api/".concat(w.secretRoute)).then((function(e){var t=e.data.find((function(e){return e._id===JSON.parse(localStorage.getItem("userInfo"))._id}));n.setState({students:t.students})}))},n.changeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(j.a)({},t,a))},n.addStudent=function(){var e=JSON.parse(localStorage.getItem("userInfo"));f.a.post("/api/addStudent",{userInfo:e,students:n.state.students,info:{first:n.state.firstName||"",middle:n.state.middleName||"",last:n.state.lastName||"",gender:n.state.gender||"",dob:n.state.dob||"",address:n.state.address||"",contact:n.state.contact||"",notes:n.state.notes||""}})},n.dateHandler=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.name,r=parseInt(t.target.value),e.next=4,n.setState(Object(j.a)({},a,r));case 4:return e.next=6,n.setState({dob:"".concat(n.state.month,"/").concat(n.state.day,"/").concat(n.state.year)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={month:1,day:1,year:1900},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(D.a,{on:!0,style:{content:{backgroundColor:"#063852",top:this.props.dim.width>700?"25%":"10%",left:this.props.dim.width>700?"25%":"0%",bottom:this.props.dim.width>700?"25%":"10%",right:this.props.dim.width>700?"25%":"0%",borderRadius:"5px"}},isOpen:!0},r.a.createElement("button",{className:"student-form-close",onClick:this.props.toggleModal},"close"),r.a.createElement("form",{className:"student-form"},r.a.createElement("label",null,"first Name"),r.a.createElement("input",{type:"text",name:"firstName",placeholder:"First Name",onChange:this.changeHandler}),r.a.createElement("label",null,"Middle Name"),r.a.createElement("input",{type:"text",name:"middleName",placeholder:"Middle Name",onChange:this.changeHandler}),r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",name:"lastName",placeholder:"Last Name",onChange:this.changeHandler}),r.a.createElement("label",null,"gender"),r.a.createElement("input",{type:"text",name:"gender",placeholder:"Gender",onChange:this.changeHandler}),r.a.createElement("label",null,"Date of Birth"),r.a.createElement(A,{dateHandler:this.dateHandler}),r.a.createElement("label",null,"Address"),r.a.createElement("input",{type:"text",name:"address",placeholder:"Address",onChange:this.changeHandler}),r.a.createElement("label",null,"Contact"),r.a.createElement("input",{type:"text",name:"contact",placeholder:"Contact",onChange:this.changeHandler}),r.a.createElement("label",null,"Notes"),r.a.createElement("textarea",{type:"text",name:"notes",placeholder:"Notes",onChange:this.changeHandler}),r.a.createElement("button",{onClick:this.addStudent},"Save")))}}]),a}(n.Component),T=a(29),U=a.n(T);D.a.setAppElement("#root");var P=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.student,t=this.props.dim.width;return r.a.createElement(D.a,{isOpen:!0,on:!0,style:{content:{backgroundColor:"#063852",top:t>700?"25%":"10%",left:t>700?"25%":"0%",bottom:t>700?"25%":"10%",right:t>700?"25%":"0%",borderRadius:"5px"}}},r.a.createElement("button",{className:"student-form-close",onClick:this.props.toggleModal},"close"),r.a.createElement("div",{className:"student-container"},r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Full Name:"),r.a.createElement("div",null,e.first),r.a.createElement("div",null,e.middle),r.a.createElement("div",null,e.last)),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Gender:"),r.a.createElement("div",null,e.gender)),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Date Of Birth:"),r.a.createElement("div",null,e.dob)),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Age:"),r.a.createElement("div",null,isNaN(U()().diff(e.dob,"years"))?null:r.a.createElement("div",null,U()().diff(e.dob,"years")))),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Address:"),r.a.createElement("div",null,e.address)),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"data-title"},"Contact:"),r.a.createElement("div",null,e.contact)),r.a.createElement("div",{className:"data-title"},"Notes:"),r.a.createElement("textarea",{className:"student-modal-notes",readOnly:!0,value:e.notes})))}}]),a}(n.Component);D.a.setAppElement("#root");var R=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.setState({first:n.props.student.first,middle:n.props.student.middle,last:n.props.student.last,gender:n.props.student.gender,dob:n.props.student.dob,address:n.props.student.address,contact:n.props.student.contact,notes:n.props.student.notes})},n.changeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(j.a)({},t,a))},n.editStudent=function(){var e=n.props.index,t=JSON.parse(localStorage.getItem("userInfo")).students;t.splice(e,1,n.state),f.a.post("/api/editStudent",{userInfo:JSON.parse(localStorage.getItem("userInfo")),oldList:t}).catch((function(e){console.log("axios err",e)})),window.location.reload({forcedReload:!1})},n.state={},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(D.a,{isOpen:!0,on:!0,style:{content:{backgroundColor:"#063852",top:this.props.dim.width>700?"20%":"10%",left:this.props.dim.width>700?"25%":"0%",bottom:this.props.dim.width>700?"20%":"10%",right:this.props.dim.width>700?"25%":"0%",borderRadius:"5px"}}},r.a.createElement("button",{className:"student-form-close",onClick:this.props.toggleModal},"close"),r.a.createElement("form",{className:"student-form"},r.a.createElement("label",null,"first Name"),r.a.createElement("input",{value:this.state.first||"",type:"text",name:"first",placeholder:"First Name",onChange:this.changeHandler}),r.a.createElement("label",null,"Middle Name"),r.a.createElement("input",{value:this.state.middle||"",type:"text",name:"middle",placeholder:"Middle Name",onChange:this.changeHandler}),r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{value:this.state.last||"",type:"text",name:"last",placeholder:"Last Name",onChange:this.changeHandler}),r.a.createElement("label",null,"Gender"),r.a.createElement("input",{value:this.state.gender||"",type:"text",name:"gender",placeholder:"Gender",onChange:this.changeHandler}),r.a.createElement("label",null,"Date of Birth"),r.a.createElement("input",{value:this.state.dob||"",type:"text",name:"dob",placeholder:"MM-DD-YYY",onChange:this.changeHandler}),r.a.createElement("label",null,"Address"),r.a.createElement("input",{value:this.state.address||"",type:"text",name:"address",placeholder:"Address",onChange:this.changeHandler}),r.a.createElement("label",null,"Contact"),r.a.createElement("input",{value:this.state.contact||"",type:"text",name:"contact",placeholder:"Contact",onChange:this.changeHandler}),r.a.createElement("label",null,"Notes"),r.a.createElement("textarea",{value:this.state.notes||"",type:"text",name:"notes",placeholder:"Notes",onChange:this.changeHandler}),r.a.createElement("button",{onClick:this.editStudent},"Save"),"  "))}}]),a}(n.Component),L=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("table",{className:"student-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"10"},"Student Chart")),r.a.createElement("tr",{className:"heading"},r.a.createElement("th",null,"#"),r.a.createElement("th",null,"First"),r.a.createElement("th",null,"Middle"),r.a.createElement("th",null,"Last"),r.a.createElement("th",null,"Gender"),r.a.createElement("th",null,"Date of Birth"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Contact"),r.a.createElement("th",null,"Notes"),r.a.createElement("th",null,r.a.createElement("button",{className:"plus",onClick:function(){return e.props.toggleModal("showModal")}},r.a.createElement(v.a,{icon:b.f})))),this.props.renderStudents()))}}]),a}(n.Component),_=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).renderSmallerData=function(){return e.props.renderStudents().map((function(e){var t=e.props.children.filter((function(e,t){return t<4||t>8}));return r.a.createElement("tr",null,t)}))},e.state={},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("table",{className:"student-table"},r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"5"},"Student Chart")),r.a.createElement("tr",{className:"heading"},r.a.createElement("th",null,"#"),r.a.createElement("th",null,"First"),r.a.createElement("th",null,"Middle"),r.a.createElement("th",null,"Last"),r.a.createElement("th",null,r.a.createElement("button",{className:"plus",onClick:function(){return e.props.toggleModal("showModal")}},r.a.createElement(v.a,{icon:b.f})))),this.renderSmallerData())}}]),a}(n.Component),W=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.updateWindowDimensions(),window.addEventListener("resize",n.updateWindowDimensions),f.a.get("/api/".concat(w.secretRoute)).then((function(e){var t=e.data.find((function(e){return e._id===JSON.parse(localStorage.getItem("userInfo"))._id}));n.setState({students:t.students.length>0?t.students:[{first:"No",middle:"Students",last:"Availabe",gender:"N/A",dob:"N/A",address:"N/A",contact:"N/A",notes:"N/A"}]})}))},n.updateWindowDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.deleteStudent=function(e){var t=n.state.students;t.splice(e,1);var a=JSON.parse(localStorage.getItem("userInfo"));f.a.post("/api/deleteStudent",{userInfo:a,newList:t}).then((function(e){})),window.location.reload({forcedReload:!1})},n.renderStudents=function(){return n.state.students.map((function(e,t){var a=10*Math.random(),l=e.first,o=e.middle,s=e.last,c=e.gender,i=e.dob,d=e.address,u=e.contact,m=e.notes;return r.a.createElement("tr",{key:a},r.a.createElement("th",null,t+1),r.a.createElement("th",null,l.length>20?r.a.createElement("div",null,"".concat(l.slice(0,20)," "),r.a.createElement(v.a,{icon:b.c})):l),r.a.createElement("th",null,o.length>20?r.a.createElement("div",null,"".concat(o.slice(0,20)," "),r.a.createElement(v.a,{icon:b.c})):o),r.a.createElement("th",null,s.length>20?r.a.createElement("div",null,"".concat(s.slice(0,20)," "),r.a.createElement(v.a,{icon:b.c})):s),r.a.createElement("th",null,s.gender>20?r.a.createElement("div",null,"".concat(s.slice(0,20)," "),r.a.createElement(v.a,{icon:b.c})):c),r.a.createElement("th",null,i.length>20?r.a.createElement("div",null,"".concat(i.slice(0,20)," "),r.a.createElement(v.a,{icon:b.c})):i),r.a.createElement("th",null,d.length>20?r.a.createElement("div",null,"".concat(d.slice(0,20)," "),r.a.createElement(v.a,{icon:b.c})):d),r.a.createElement("th",null,u.length>20?r.a.createElement("div",null,"".concat(u.slice(0,20)," "),r.a.createElement(v.a,{icon:b.c})):u),r.a.createElement("th",null,m.length>20?r.a.createElement("div",null,"".concat(m.slice(0,20)," "),r.a.createElement(v.a,{icon:b.c})):m),r.a.createElement("th",null,r.a.createElement("button",{className:"view",onClick:function(){return n.toggleModal("showStudentModal",e)}},r.a.createElement(v.a,{icon:b.e})),r.a.createElement("button",{className:"edit",onClick:function(){return n.toggleModal("showEditStudentModal",e,t)}},r.a.createElement(v.a,{icon:b.d})),r.a.createElement("button",{className:"delete",student:"test",onClick:function(){return n.deleteStudent(t)}},r.a.createElement(v.a,{icon:b.h}))))}))},n.toggleModal=function(e,t,a){!1===n.state[e]&&(n.setState(Object(j.a)({},e,!0)),t&&n.setState({student:t,index:a})),!0===n.state[e]&&(n.setState(Object(j.a)({},e,!1)),t&&n.setState({student:void 0}))},n.state={students:[],showModal:!1,showStudentModal:!1,showEditStudentModal:!1,first:"",middle:"",last:"",gender:"",dob:"",address:"",contact:"",notes:"",width:0,height:0},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"data-body"},r.a.createElement("div",{className:"student-chart"},this.state.width>800?r.a.createElement(L,{toggleModal:this.toggleModal,renderStudents:this.renderStudents}):r.a.createElement(_,{toggleModal:this.toggleModal,renderStudents:this.renderStudents}),this.state.showModal?r.a.createElement(J,{dim:{width:this.state.width,height:this.state.height},toggleModal:function(){return e.toggleModal("showModal")}}):null,this.state.showStudentModal?r.a.createElement(P,{dim:{width:this.state.width,height:this.state.height},student:this.state.student,toggleModal:function(){return e.toggleModal("showStudentModal")}}):null,this.state.showEditStudentModal?r.a.createElement(R,{dim:{width:this.state.width,height:this.state.height},index:this.state.index,student:this.state.student,toggleModal:function(){return e.toggleModal("showEditStudentModal")}}):null))}}]),a}(n.Component),F=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).componentDidMount=function(){var t=JSON.parse(localStorage.getItem("userInfo")).todos;e.setState({todos:t})},e.addTodo=function(t,a){var n=JSON.parse(localStorage.getItem("userInfo"));if(!e.state.newTodo)return e.setState({todoProblem:"Please type a todo!"}),void setTimeout((function(){e.setState({todoProblem:null})}),4e3);a={name:a,done:!1,createdAt:new Date},t.push(a),f.a.post("/api/addTodo",{userInfo:n,todos:t}).then((function(e){})).catch((function(e){})),e.setState({todos:t,newTodo:""}),n.todos=t,localStorage.setItem("userInfo",JSON.stringify(n))},e.changeHandler=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(j.a)({},a,n))},e.toggleTodo=function(t,a){var n=JSON.parse(localStorage.getItem("userInfo")),r=e.state.todos;t.done?(t.done=!1,r.splice(a,1,t),f.a.post("/api/toggleTodo",{userInfo:n,todos:r}),e.setState({todos:r}),n.todos=r,localStorage.setItem("userInfo",JSON.stringify(n))):(t.done=!0,r.splice(a,1,t),f.a.post("/api/toggleTodo",{userInfo:n,todos:r}),e.setState({todos:r}),n.todos=r,localStorage.setItem("userInfo",JSON.stringify(n)))},e.deleteTodo=function(t){var a=JSON.parse(localStorage.getItem("userInfo")),n=e.state.todos;n.splice(t,1),f.a.post("/api/deleteTodo",{userInfo:a,todos:n}),e.setState({todos:n}),a.todos=n,localStorage.setItem("userInfo",JSON.stringify(a))},e.state={todos:[],todoProblem:null},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"todos-container"},r.a.createElement("div",{className:"incomplete todos "},r.a.createElement("h3",null,"Todos"),r.a.createElement("div",{className:"todo-list"},this.state.todos.map((function(t,a){var n=10*Math.random();if(!t.done)return r.a.createElement("div",{className:"todo-container",key:n},r.a.createElement("div",{className:"todo-buttons"},r.a.createElement("button",{className:"check",onClick:function(){return e.toggleTodo(t,a)}},r.a.createElement(v.a,{icon:b.b})),r.a.createElement("button",{className:"delete",onClick:function(){return e.deleteTodo(a)}},r.a.createElement(v.a,{icon:b.h}))),r.a.createElement("div",null,t.name))}))),r.a.createElement("form",null,r.a.createElement("input",{value:this.state.newTodo,placeholder:"Add New Todo",name:"newTodo",onChange:this.changeHandler})),r.a.createElement("div",{className:"todo-problem"},this.state.todoProblem),r.a.createElement("button",{onClick:function(){return e.addTodo(e.state.todos,e.state.newTodo)}},"Add Todo")),r.a.createElement("div",{className:"complete todos"},r.a.createElement("h3",null,"Completed"),r.a.createElement("div",{className:"todo-list"},this.state.todos.map((function(t,a){var n=10*Math.random();if(t.done)return r.a.createElement("div",{className:"todo-container",key:n},r.a.createElement("div",{className:"todo-buttons"},r.a.createElement("button",{className:"check",onClick:function(){return e.toggleTodo(t,a)}},r.a.createElement(v.a,{icon:b.a})),r.a.createElement("button",{className:"delete",onClick:function(){return e.deleteTodo(a)}},r.a.createElement(v.a,{icon:b.h}))),r.a.createElement("div",null,t.name))}))))))}}]),a}(n.Component);D.a.setAppElement("#root");var G=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(D.a,{isOpen:!0,on:!0,style:{content:{backgroundColor:"#063852",top:this.props.dim.width>700?"25%":"10%",left:this.props.dim.width>700?"25%":"0%",bottom:this.props.dim.width>700?"25%":"10%",right:this.props.dim.width>700?"25%":"0%",borderRadius:"5px"}}},r.a.createElement("button",{className:"student-form-close",onClick:this.props.toggleUserModal},"close"),r.a.createElement("textarea",{className:"user-text-area",value:JSON.stringify(this.props.user,null,4),readOnly:!0}))}}]),a}(n.Component),B=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).updateWindowDimensions=function(){e.setState({width:window.innerWidth,height:window.innerHeight})},e.componentDidMount=function(){e.updateWindowDimensions(),window.addEventListener("resize",e.updateWindowDimensions),f.a.get("/api/".concat(w.secretRoute)).then((function(t){var a=JSON.parse(localStorage.getItem("userInfo")),n=t.data.filter((function(e){return e._id!==a._id&&!w.adminID.includes(e._id)}));e.setState({allUsers:n})}))},e.toggleUserModal=function(t){e.state.userModal?e.setState({userModal:!1}):e.setState({user:t,userModal:!0})},e.deleteUser=function(t){var a=e.state.allUsers.filter((function(e){return e._id!==t})),n=e.state.allUsers.find((function(e){return e._id===t}));e.setState({allUsers:a}),f.a.post("/api/deleteUser",{findUser:n}).then((function(e){})).catch((function(e){console.log("axios err",e)}))},e.renderCards=function(){return e.state.allUsers.map((function(t){return r.a.createElement("div",{className:"user-card"},r.a.createElement("div",null,r.a.createElement("div",null,"Username:"),r.a.createElement("div",null,t.username)),r.a.createElement("div",null,r.a.createElement("div",null,"User ID:"),r.a.createElement("div",null,t._id)),r.a.createElement("div",{className:"user-button"},r.a.createElement("button",{onClick:function(){return e.toggleUserModal(t)}},"view"),r.a.createElement("button",{onClick:function(){return e.deleteUser(t._id)}},"delete")))}))},e.state={allUsers:[],userModal:!1},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"user-cards"},this.renderCards(),this.state.userModal?r.a.createElement(G,{dim:{width:this.state.width,height:this.state.height},user:this.state.user,toggleUserModal:this.toggleUserModal}):null))}}]),a}(n.Component),Y=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).componentDidMount=function(){e.updateWindowDimensions(),window.addEventListener("resize",e.updateWindowDimensions),f.a.get("/api/".concat(w.secretRoute)).then(function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.data.forEach((function(t){if(localStorage.getItem("userInfo")){var a=JSON.parse(localStorage.getItem("userInfo")),n=JSON.parse(localStorage.getItem("userInfo"))._id;t._id===n&&(e.setState({loggedInStatus:!0}),a.students=t.students,a.todos=t.todos,localStorage.setItem("userInfo",JSON.stringify(a)))}}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},e.updateWindowDimensions=function(){e.setState({width:window.innerWidth,height:window.innerHeight})},e.loggedInPages=function(){return[r.a.createElement(p.a,{key:"1",exact:!0,component:W,path:"/data"}),r.a.createElement(p.a,{key:"2",exact:!0,component:F,path:"/todos"})]},e.loggedInButtons=function(){return[r.a.createElement(g.c,{key:"1",to:"/data",activeClassName:"active-link"},"Data"),r.a.createElement(g.c,{key:"2",to:"/todos",activeClassName:"active-link"},"Todos")]},e.logOut=function(){"true"===localStorage.getItem("loggedInStatus")&&(localStorage.clear(),window.location.reload({forcedReload:!1}))},e.adminContent=function(){return{buttons:[r.a.createElement(g.c,{key:"1",exact:!0,to:"/users",activeClassName:"active-link"},"Users")],routes:[r.a.createElement(p.a,{key:"1",exact:!0,component:B,path:"/users"})]}},e.state={username:null,password:null,width:0,height:0},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(g.a,null,r.a.createElement("div",{className:"body-container"},r.a.createElement("div",{className:"nav-heading"},r.a.createElement(g.c,{exact:!0,to:"/",className:"heading"},"Teacher Tools"),r.a.createElement("div",{className:"nav-bar"},r.a.createElement(g.c,{exact:!0,to:"/",activeClassName:"active-link"},"Home"),!0===this.state.loggedInStatus?this.loggedInButtons():null,w.adminID.includes(localStorage.getItem("id"))?this.adminContent().buttons:null,r.a.createElement(g.c,{to:"/auth",activeClassName:"active-link"},"true"===localStorage.getItem("loggedInStatus")?r.a.createElement("div",{onClick:this.logOut},r.a.createElement(v.a,{icon:b.g})," ",JSON.parse(localStorage.getItem("userInfo")).username):"Log in"))),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,component:k,path:"/"}),r.a.createElement(p.a,{exact:!0,component:M,path:"/auth"}),!0===this.state.loggedInStatus?this.loggedInPages():null,w.adminID.includes(localStorage.getItem("id"))?this.adminContent().routes:null,r.a.createElement(p.a,{component:x})))))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.7be1d62c.chunk.js.map