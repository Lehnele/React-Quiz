(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{19:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__OLoE2",open:"MenuToggle_open__14SWd"}},20:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__2BlOY",close:"Drawer_close__1Cl1X",active:"Drawer_active__35KPu"}},21:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK",close:"Backdrop_close__1glC4"}},23:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__18Rwf",QuizWrapper:"Quiz_QuizWrapper__c8INT"}},24:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__Dpsgu",Question:"ActiveQuiz_Question__18iOr"}},25:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3PJVi",success:"AnswerItem_success__30eEE",error:"AnswerItem_error___hrWf"}},26:function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__D-CkC",success:"FinishedQuiz_success__jBBc5",error:"FinishedQuiz_error__KSdom"}},27:function(e,t,n){e.exports={Button:"Button_Button__3gFiX",error:"Button_error__2nDvg",success:"Button_success__cnhtV",primary:"Button_primary__28VL_"}},28:function(e,t,n){e.exports={Loader:"Loader_Loader__ANdA0","lds-ring":"Loader_lds-ring__2NevF",center:"Loader_center__Iyafz"}},29:function(e,t,n){e.exports={Auth:"Auth_Auth__1Zul_",AuthForm:"Auth_AuthForm__3wyhV"}},30:function(e,t,n){e.exports={Input:"input_Input__3BPgK",alert_warning:"input_alert_warning__1yfZQ"}},40:function(e,t,n){e.exports={Layout:"Layout_Layout__2BpO9"}},42:function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__EwYQd"}},43:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__a5VQi"}},45:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__3jBmX"}},46:function(e,t,n){e.exports={Select:"Select_Select__2qylT"}},49:function(e,t,n){e.exports=n(78)},54:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(17),i=n.n(u),c=(n(54),n(1)),o=n(7),l=n(40),s=n.n(l),m=n(19),d=n.n(m),f=function(e){var t=[d.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(d.a.open)):t.push("fa-bars"),r.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},p=n(20),E=n.n(p),v=n(8),h=n(21),_=n.n(h),b=function(e){var t=[_.a.Backdrop];return e.isOpen&&t.push(_.a.close),r.a.createElement("div",{className:t.join(" "),onClick:e.onClick})},g=function(e){var t=[E.a.Drawer];e.isOpen||t.push(E.a.close);var n=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a"}];return e.isAuthenticated?(n.push({to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"}),n.push({to:"/logout",label:"\u0412\u044b\u0439\u0442\u0438"})):n.push({to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:t.join(" ")},r.a.createElement("ul",null,function(t){return t.map((function(t,n){return r.a.createElement("li",{key:n},r.a.createElement(v.c,{to:t.to,onClick:e.onClose},t.label))}))}(n))),r.a.createElement(b,{onClick:e.onClose,isOpen:e.isOpen}))},z=n(3);var O=Object(z.b)((function(e){return{isAuthenticated:!!e.auth.token}}))((function(e){var t=Object(a.useState)({menu:!1}),n=Object(o.a)(t,2),u=n[0],i=n[1];return r.a.createElement("div",{className:s.a.Layout},r.a.createElement(g,{isOpen:u.menu,onClose:function(){i((function(e){return Object(c.a)(Object(c.a)({},e),{},{menu:!1})}))},isAuthenticated:e.isAuthenticated}),r.a.createElement(f,{onToggle:function(){i((function(e){return Object(c.a)(Object(c.a)({},e),{},{menu:!e.menu})}))},isOpen:u.menu}),r.a.createElement("main",null,e.children))})),w=n(2),j=n(23),C=n.n(j),y=n(24),Q=n.n(y),S=n(42),I=n.n(S),T=n(25),q=n.n(T),k=function(e){var t=[q.a.AnswerItem];return e.state&&t.push(q.a[e.state]),r.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},A=function(e){return r.a.createElement("ul",{className:I.a.AnswersList},e.answers.map((function(t,n){return r.a.createElement(k,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},x=function(e){return r.a.createElement("div",{className:Q.a.ActiveQuiz},r.a.createElement("p",{className:Q.a.Question},r.a.createElement("span",null,r.a.createElement("strong",null,e.answerNumber,". "),e.question),r.a.createElement("small",null,e.answerNumber," \u0438\u0437 ",e.quizLength)),r.a.createElement(A,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},F=n(26),N=n.n(F),U=n(27),L=n.n(U),Z=function(e){var t=[L.a.Button,L.a[e.type]];return r.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},R=function(e){var t=Object.keys(e.result).reduce((function(t,n){return"success"===e.result[n]&&t++,t}),0);return r.a.createElement("div",{className:N.a.FinishedQuiz},r.a.createElement("ul",null,e.quiz.map((function(t,n){var a=["fa","error"===e.result[t.id]?"fa-times":"fa-check",N.a[e.result[t.id]]];return r.a.createElement("li",{key:n},r.a.createElement("strong",null,n+1,". "),t.question,r.a.createElement("i",{className:a.join(" ")}))}))),r.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length),r.a.createElement("div",null,r.a.createElement(Z,{onClick:e.onRetry,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u043c?"),r.a.createElement(v.b,{to:"/"},r.a.createElement(Z,{type:"success"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432?"))))},D=n(28),M=n.n(D),B=function(e){return r.a.createElement("div",{className:M.a.center},r.a.createElement("div",{className:M.a.Loader},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},H=n(13),V=n(9),P=n.n(V),X=n(10),W=n(18),J=n.n(W),K=J.a.create({baseURL:"https://react-quiz-a6112-default-rtdb.europe-west1.firebasedatabase.app/"});function Y(e){return{type:"FETCH_QUIZ_SUCCESS",quiz:e}}function G(e){return{type:"FETCH_QUIZZES_SUCCESS",quizzes:e}}function $(e){return{type:"FETCH_QUIZZES_ERROR",error:e}}function ee(e,t){return{type:"QUIZ_SET_STATE",answerState:e,results:t}}function te(e){return{type:"QUIZ_NEXT_QUESTION",number:e}}function ne(e){return e.activeQuestion+1===e.quiz.length}var ae=Object(z.b)((function(e){return{results:e.quiz.results,isFinished:e.quiz.isFinished,activeQuestion:e.quiz.activeQuestion,answerState:e.quiz.answerState,quiz:e.quiz.quiz,loading:e.quiz.loading}}),(function(e){return{fetchQuizById:function(t){return e((n=t,function(){var e=Object(X.a)(P.a.mark((function e(t){var a,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_QUIZZES_START"}),e.prev=1,e.next=4,K.get("/quizzes/".concat(n,".json"));case 4:a=e.sent,r=a.data,t(Y(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t($(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()));var n},quizAnswerClick:function(t){return e(function(e){return function(t,n){var a=n().quiz;if(a.answerState){var r=Object.keys(a.answerState)[0];a.answerState[r]}else{var u=a.quiz[a.activeQuestion],i=a.results;if(u.rightAnswerId===e){i[u.id]||(i[u.id]="success"),t(ee(Object(H.a)({},e,"success"),i));var c=window.setTimeout((function(){ne(a)?t({type:"FINISH_QUIZ"}):t(te(a.activeQuestion+1)),window.clearTimeout(c)}),1e3)}else{i[u.id]="error",t(ee(Object(H.a)({},e,"error"),i));var o=window.setTimeout((function(){ne(a)?t({type:"FINISH_QUIZ"}):t(te(a.activeQuestion+1)),window.clearTimeout(o)}),1e3)}}}}(t))},retryQuiz:function(){return e({type:"QUIZ_RETRY"})}}}))((function(e){var t=Object(w.h)().id;return Object(a.useEffect)((function(){return e.fetchQuizById(t),function(){e.retryQuiz()}}),[]),r.a.createElement("div",{className:C.a.Quiz},r.a.createElement("div",{className:C.a.QuizWrapper},r.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b:"),e.loading||!e.quiz?r.a.createElement(B,null):e.isFinished?r.a.createElement(R,{result:e.results,quiz:e.quiz,onRetry:e.retryQuiz}):r.a.createElement(x,{answers:e.quiz[e.activeQuestion].answers,question:e.quiz[e.activeQuestion].question,onAnswerClick:e.quizAnswerClick,quizLength:e.quiz.length,answerNumber:e.activeQuestion+1,state:e.answerState})))})),re=n(43),ue=n.n(re);var ie=Object(z.b)((function(e){return{quizzes:e.quiz.quizzes,loading:e.quiz.loading}}),(function(e){return{fetchQuizzes:function(){return e(function(){var e=Object(X.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_QUIZZES_START"}),e.prev=1,e.next=4,K.get("/quizzes.json");case 4:n=e.sent,a=[],Object.keys(n.data).forEach((function(e,t){a.push({id:e,name:"\u0422\u0435\u0441\u0442 \u2116".concat(t+1)})})),t(G(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t($());case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){return Object(a.useEffect)((function(){e.fetchQuizzes()}),[]),r.a.createElement("div",{className:ue.a.QuizList},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"),e.loading&&0!==e.quizzes.length?r.a.createElement(B,null):r.a.createElement("ul",null,e.quizzes.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(v.b,{to:"/quizzes/".concat(e.id)},e.name))})))))})),ce=n(29),oe=n.n(ce),le=n(30),se=n.n(le);var me=function(e){var t=e.type||"text",n=[se.a.Input],a="".concat(t,"-").concat(Math.random());return r.a.createElement("div",{className:n.join(" ")},r.a.createElement("label",{htmlFor:a},e.label),r.a.createElement("div",null,r.a.createElement("i",{className:e.icon}),r.a.createElement("input",{type:t,id:a,placeholder:e.placeholder,value:e.value,onChange:e.onChange}),function(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&n&&a}(e)?r.a.createElement("div",{className:se.a.alert_warning},r.a.createElement("span",null,e.errorMessage||"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"),"\xa0",r.a.createElement("i",{className:"fas fa-exclamation-circle"})):null))},de=n(44),fe=n.n(de);function pe(){return localStorage.removeItem("token"),localStorage.removeItem("userID"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}}function Ee(e){return function(t){setTimeout((function(){t(pe())}),1e3*e)}}function ve(e){return{type:"AUTH_SUCCESS",token:e}}var he=Object(z.b)((function(e){return{authError:e.auth.authError}}),(function(e){return{auth:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(X.a)(P.a.mark((function a(r){var u,i,c,o,l;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDf-9OEcpP32LMHmZMdj2zy-hPJjxlyyTw",n&&(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDf-9OEcpP32LMHmZMdj2zy-hPJjxlyyTw"),a.prev=3,a.next=6,J.a.post(i,u);case 6:c=a.sent,o=c.data,l=new Date((new Date).getTime()+1e3*o.expiresIn),localStorage.setItem("token",o.idToken),localStorage.setItem("userID",o.localId),localStorage.setItem("expirationDate",l),r(ve(o.idToken)),r(Ee(o.expiresIn)),a.next=19;break;case 16:a.prev=16,a.t0=a.catch(3),r({type:"AUTH_ERROR"});case 19:case"end":return a.stop()}}),a,null,[[3,16]])})));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}}))((function(e){var t=Object(a.useState)({isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",icon:"fal fa-user-alt",placeholder:"Type your email",errorMessage:"@mail.ru, @gmail.com \u0438 \u0442.\u0434... ",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",icon:"fal fa-lock",placeholder:"Type your password",errorMessage:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",valid:!1,touched:!1,validation:{password:!0,minLength:6}}}}),n=Object(o.a)(t,2),u=n[0],i=n[1];var l=function(e,t){var n=Object(c.a)({},u.formControls),a=Object(c.a)({},n[t]);a.value=e.target.value,a.touched=!0,a.valid=function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=fe.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}(a.value,a.validation),n[t]=a;var r=!0;Object.keys(n).forEach((function(e){r=n[e].valid&&r})),i((function(e){return Object(c.a)(Object(c.a)({},e),{},{isFormValid:r,formControls:n})}))};return r.a.createElement("div",{className:oe.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault()},className:oe.a.AuthForm},e.authError?r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-exclamation-triangle"}),"\u041e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430."):null,Object.keys(u.formControls).map((function(e,t){var n=u.formControls[e];return r.a.createElement(me,{key:e+t,type:n.type,value:n.value,valid:n.valid,touched:n.touched,label:n.label,icon:n.icon,placeholder:n.placeholder,shouldValidate:!!n.validation,errorMessage:n.errorMessage,onChange:function(t){return l(t,e)}})})),r.a.createElement(Z,{type:"success",onClick:function(){e.auth(u.formControls.email.value,u.formControls.password.value,!0)},disabled:!u.isFormValid},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(Z,{type:"primary",onClick:function(){e.auth(u.formControls.email.value,u.formControls.password.value,!1)},disabled:!u.isFormValid},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))})),_e=n(45),be=n.n(_e),ge=n(46),ze=n.n(ge),Oe=function(e){var t="".concat(e.label,"-").concat(Math.random());return r.a.createElement("div",{className:ze.a.Select},r.a.createElement("label",{htmlFor:t},e.label),r.a.createElement("select",{id:t,value:e.value,onChange:e.onChange},e.options.map((function(e,t){return r.a.createElement("option",{value:e.value,key:e.value+t},e.text)}))))};function we(e,t){return Object(c.a)(Object(c.a)({},e),{},{validation:t,valid:!t,touched:!1,value:""})}function je(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}function Ce(e){return we({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})}function ye(){return{question:we({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:Ce(1),option2:Ce(2),option3:Ce(3),option4:Ce(4)}}var Qe=Object(z.b)((function(e){return{quiz:e.create.quiz}}),(function(e){return{createQuizQuestion:function(t){return e(function(e){return{type:"CREATE_QUIZ_QUESTION",item:e}}(t))},finishCreateQuiz:function(){return e(function(){var e=Object(X.a)(P.a.mark((function e(t,n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("/quizzes.json",n().create.quiz);case 2:t({type:"RESET_QUIZ_CREATION"});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))((function(e){var t=Object(a.useState)({isFormValid:!1,rightAnswerId:1,formControls:ye()}),n=Object(o.a)(t,2),u=n[0],i=n[1];var l=r.a.createElement(Oe,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:u.rightAnswerId,onChange:function(e){i((function(t){return Object(c.a)(Object(c.a)({},t),{},{rightAnswerId:+e.target.value})}))},options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return r.a.createElement("div",{className:be.a.QuizCreator},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},Object.keys(u.formControls).map((function(e,t){var n=u.formControls[e];return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{index:e+t,label:n.label,value:n.value,valid:n.valid,shouldValidate:!!n.validation,touched:n.touched,errorMessage:n.errorMessage,onChange:function(t){return function(e,t){var n=Object(c.a)({},u.formControls),a=Object(c.a)({},n[t]);a.touched=!0,a.value=e,a.valid=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}(a.value,a.validation),n[t]=a,i((function(e){return Object(c.a)(Object(c.a)({},e),{},{formControls:n,isFormValid:je(n)})}))}(t.target.value,e)}}))})),l,r.a.createElement(Z,{type:"primary",onClick:function(t){t.preventDefault();var n=u.formControls,a=n.question,r=n.option1,o=n.option2,l=n.option3,s=n.option4,m={question:a.value,id:e.quiz.length+1,rightAnswerId:u.rightAnswerId,answers:[{text:r.value,id:r.id},{text:o.value,id:o.id},{text:l.value,id:l.id},{text:s.value,id:s.id}]};e.createQuizQuestion(m),i((function(e){return Object(c.a)(Object(c.a)({},e),{},{isFormValid:!1,rightAnswerId:1,formControls:ye()})}))},disabled:!u.isFormValid},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"),r.a.createElement(Z,{type:"success",onClick:function(t){t.preventDefault(),i((function(e){return{isFormValid:!1,rightAnswerId:1,formControls:ye()}})),e.finishCreateQuiz()},disabled:0===e.quiz.length},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))))}));var Se=Object(z.b)(null,(function(e){return{logout:function(){return e(pe())}}}))((function(e){return Object(a.useEffect)((function(){e.logout()})),r.a.createElement(w.d,null,r.a.createElement(w.b,{path:"*",element:r.a.createElement(w.a,{replace:!0,to:"/auth"})}))}));var Ie=Object(z.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(pe()):(e(ve(t)),e(Ee((n.getTime()-(new Date).getTime())/1e3)))}else e(pe())}))}}}))((function(e){Object(a.useEffect)((function(){e.autoLogin()}));var t=r.a.createElement(w.d,null,r.a.createElement(w.b,{path:"/auth",element:r.a.createElement(he,null)}),r.a.createElement(w.b,{path:"/quizzes/:id",element:r.a.createElement(ae,null)}),r.a.createElement(w.b,{path:"/",element:r.a.createElement(ie,null)}),r.a.createElement(w.b,{path:"*",element:r.a.createElement(w.a,{replace:!0,to:"/"})}));return e.isAuthenticated&&(t=r.a.createElement(w.d,null,r.a.createElement(w.b,{path:"/quiz-creator",element:r.a.createElement(Qe,null)}),r.a.createElement(w.b,{path:"/quizzes/:id",element:r.a.createElement(ae,null)}),r.a.createElement(w.b,{path:"/logout/*",element:r.a.createElement(Se,null)}),r.a.createElement(w.b,{path:"/",element:r.a.createElement(ie,null)}),r.a.createElement(w.b,{path:"*",element:r.a.createElement(w.a,{replace:!0,to:"/"})}))),r.a.createElement(O,null,t)})),Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,u=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),u(e),i(e)}))},qe=n(12),ke={quizzes:[],loading:!1,error:null,results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:null};var Ae=n(48),xe={quiz:[]};var Fe={token:null,authError:!1};var Ne=Object(qe.b)({quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUIZZES_START":return Object(c.a)(Object(c.a)({},e),{},{loading:!0});case"FETCH_QUIZZES_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{loading:!1,quizzes:t.quizzes});case"FETCH_QUIZZES_ERROR":return Object(c.a)(Object(c.a)({},e),{},{loading:!1,error:t.error});case"FETCH_QUIZ_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{loading:!1,quiz:t.quiz});case"QUIZ_SET_STATE":return Object(c.a)(Object(c.a)({},e),{},{answerState:t.answerState,results:t.results});case"FINISH_QUIZ":return Object(c.a)(Object(c.a)({},e),{},{isFinished:!0});case"QUIZ_NEXT_QUESTION":return Object(c.a)(Object(c.a)({},e),{},{activeQuestion:t.number,answerState:null});case"QUIZ_RETRY":return Object(c.a)(Object(c.a)({},e),{},{activeQuestion:0,answerState:null,isFinished:!1,results:{}});default:return e}},create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_QUIZ_QUESTION":return Object(c.a)(Object(c.a)({},e),{},{quiz:[].concat(Object(Ae.a)(e.quiz),[t.item])});case"RESET_QUIZ_CREATION":return Object(c.a)(Object(c.a)({},e),{},{quiz:[]});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{token:t.token,authError:!1});case"AUTH_LOGOUT":return Object(c.a)(Object(c.a)({},e),{},{token:null,authError:!1});case"AUTH_ERROR":return Object(c.a)(Object(c.a)({},e),{},{authError:!0});default:return e}}}),Ue=n(47),Le="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):qe.c,Ze=Object(qe.d)(Ne,Le(Object(qe.a)(Ue.a)));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z.a,{store:Ze},r.a.createElement(v.a,null,r.a.createElement(Ie,null)))),document.getElementById("root")),Te()}},[[49,1,2]]]);
//# sourceMappingURL=main.ed04a2fc.chunk.js.map