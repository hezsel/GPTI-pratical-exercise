(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{261:function(e,t,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("46098fb2",content,!0,{sourceMap:!1})},285:function(e,t,r){"use strict";r(7),r(5),r(6),r(11),r(8),r(12);var n=r(2),o=r(74),filter=r(284);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){return{clipped:!0,drawer:!1,fixed:!1,items:[{icon:"mdi-home",title:"Início",to:"/",type:""},{icon:"mdi-ballot",title:"Provas",to:"/provas",type:""},{icon:"mdi-cog",title:"Configurações",to:"/configuracoes",type:"admin"}],miniVariant:!1,title:"Avalia Virtual"}},computed:d(d({},Object(o.c)({isLoggedIn:"user/isLoggedIn",user:"user/getUser"})),{},{filteredItems:function(){var e,t="admin"===(null===(e=this.user)||void 0===e?void 0:e.type);if(!this.isLoggedIn)return[this.items[0]];if(t)return this.items;var r=Object(filter.a)((function(e){return"admin"!==e.type}),this.items);return r}}),methods:d({},Object(o.b)({logout:"user/logout"}))},f=r(94),l=r(135),O=r.n(l),v=r(415),j=r(422),h=r(416),y=r(208),w=r(417),P=r(197),x=r(198),E=r(129),_=r(199),D=r(84),U=r(418),V=r(419),C=r(420),T=r(206),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{"mini-variant":e.miniVariant,clipped:e.clipped,fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",e._l(e.filteredItems,(function(t,i){return r("v-list-item",{key:i,attrs:{to:t.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],1),e._v(" "),r("v-app-bar",{attrs:{"clipped-left":e.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.miniVariant=!e.miniVariant}}},[r("v-icon",[e._v("mdi-"+e._s("chevron-"+(e.miniVariant?"right":"left")))])],1),e._v(" "),r("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),e._v(" "),r("v-spacer"),e._v(" "),e.isLoggedIn?r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.logout()}}},[r("v-icon",[e._v("mdi-exit-to-app")])],1):e._e()],1),e._v(" "),r("v-main",[r("v-container",[r("Nuxt")],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;O()(component,{VApp:v.a,VAppBar:j.a,VAppBarNavIcon:h.a,VBtn:y.a,VContainer:w.a,VIcon:P.a,VList:x.a,VListItem:E.a,VListItemAction:_.a,VListItemContent:D.a,VListItemTitle:D.c,VMain:U.a,VNavigationDrawer:V.a,VSpacer:C.a,VToolbarTitle:T.a})},296:function(e,t,r){r(297),e.exports=r(298)},326:function(e,t,r){"use strict";r(261)},327:function(e,t,r){var n=r(23)(!1);n.push([e.i,"h1[data-v-2a2b3c2e]{font-size:20px}",""]),e.exports=n},384:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return h})),r.d(t,"getters",(function(){return y})),r.d(t,"mutations",(function(){return w})),r.d(t,"actions",(function(){return P}));var n=r(2),o=(r(136),r(96),r(7),r(5),r(6),r(11),r(8),r(12),r(204)),c=r(83),d=r(114),m=r(113),f=r(80),l=r.n(f);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j=[{id:"1",name:"Prova 1",description:"Prova 1 de alguma coisa",status:"closed",theme:"1",startDate:"2021-11-11",startTime:"07:00",endDate:"2021-11-11",endTime:"12:00",questions:[],usersResponses:[]},{id:"2",name:"Prova 2",description:"Prova 2 de alguma coisa",status:"open",theme:"1",startDate:"2021-11-15",startTime:"10:00",endDate:"2021-11-15",endTime:"22:00",questions:[],usersResponses:[{userId:"1",response:[]}]},{id:"3",name:"Prova 3",description:"Prova 3 de alguma coisa",status:"open",theme:"1",startDate:"2021-11-20",startTime:"07:00",endDate:"2021-11-20",endTime:"19:00",questions:[],usersResponses:[]}],h=function(){return{exams:j}},y={exams:function(e){return Object(o.a)(e.exams)},hasUserFinishedExam:function(e,t){var r=t.examId,n=t.userId;return e.exams.find(Object(c.a)("id",r)).usersResponses.find(Object(c.a)("userId",n))}},w={addExam:function(e,t){e.exams.push(t)},deleteExam:function(e,t){e.exams.splice(Object(d.a)(Object(c.a)("id",t)),1);var r=Object(m.a)(e.exams);e.exams=r},editExam:function(e,t){var r=Object(d.a)(Object(c.a)("id",t.id),e.exams),n=Object(m.a)(e.exams);n[r]=t,e.exams=n}},P={addExam:function(e,t){(0,e.commit)("addExam",v(v({},t),{},{usersResponses:[],id:l()()}))},deleteExam:function(e,t){(0,e.commit)("deleteExam",t.id)},editExam:function(e,t){(0,e.commit)("editExam",t)}}},387:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return h})),r.d(t,"getters",(function(){return y})),r.d(t,"mutations",(function(){return w})),r.d(t,"actions",(function(){return P}));r(7),r(5),r(6),r(11),r(8),r(12);var n=r(2),o=(r(96),r(204)),c=r(114),d=r(83),m=r(113),f=r(80),l=r.n(f);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j=[{id:"1",theme:"1",weight:1,title:"Com quantos paus se faz uma canoa",options:["mais de 10","2","5.5","depende do tamanho dos paus","nenhum, você compra"],answer:3,observation:"Realmente depende mesmo"}],h=function(){return{questions:j}},y={questions:function(e){return Object(o.a)(e.questions)}},w={addQuestion:function(e,t){e.questions.push(t)},deleteQuestion:function(e,t){e.questions.splice(Object(c.a)(Object(d.a)("id",t)),1);var r=Object(m.a)(e.questions);e.questions=r},editQuestion:function(e,t){var r=Object(c.a)(Object(d.a)("id",t.id),e.questions),n=Object(m.a)(e.questions);n[r]=t,e.questions=n}},P={addQuestion:function(e,t){(0,e.commit)("addQuestion",v(v({},t),{},{id:l()()}))},deleteQuestion:function(e,t){(0,e.commit)("deleteQuestion",t.id)},editQuestion:function(e,t){(0,e.commit)("editQuestion",t)}}},388:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return h})),r.d(t,"getters",(function(){return y})),r.d(t,"mutations",(function(){return w})),r.d(t,"actions",(function(){return P}));r(7),r(5),r(6),r(11),r(8),r(12);var n=r(2),o=(r(96),r(204)),c=r(114),d=r(83),m=r(113),f=r(80),l=r.n(f);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j=[{id:"1",name:"Banco de dados",description:"tema para provas"},{id:"2",name:"Organização de computadores digitais",description:"tema para provas"},{id:"3",name:"Gestão de projetos",description:"tema para provas"}],h=function(){return{themes:j}},y={themes:function(e){return Object(o.a)(e.themes)}},w={addTheme:function(e,t){e.themes.push(t)},deleteTheme:function(e,t){e.themes.splice(Object(c.a)(Object(d.a)("id",t)),1);var r=Object(m.a)(e.themes);e.themes=r},editTheme:function(e,t){var r=Object(c.a)(Object(d.a)("id",t.id),e.themes),n=Object(m.a)(e.themes);n[r]=t,e.themes=n}},P={addTheme:function(e,t){(0,e.commit)("addTheme",v(v({},t),{},{id:l()()}))},deleteTheme:function(e,t){(0,e.commit)("deleteTheme",t.id)},editTheme:function(e,t){(0,e.commit)("editTheme",t)}}},407:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return _})),r.d(t,"getters",(function(){return D})),r.d(t,"mutations",(function(){return U})),r.d(t,"actions",(function(){return V}));r(25);var n=r(424),filter=r(284),o=r(425),c=r(110),d=r(114),m=r(83),f=r(113),l=r(426),O=r(421),v=r(423),j=r(80),h=r.n(j),y={label:"Usuário não encontrado.",value:"userNotFound"},w={label:"Credenciais inválidas.",value:"wrongCredentials"},P={label:"Username já está sendo utilizado",value:"usernameAlreadyExists"},x={label:"Código de professor inválido",value:"professorCodeNotExist"},E=[{id:"1",username:"user",password:"user",type:"normal",name:"Gabriel Hoffman",registeredThemes:[]},{id:"2",username:"admin",password:"admin",type:"admin",name:"Digimon"}],_=function(){return{registeredUsers:E,user:E[1],professorsCode:["pro1","pro2","pro3","pro4"]}},D={getUser:function(e){return e.user},isLoggedIn:function(e){return!Object(n.a)(e.user)},students:function(e){return Object(filter.a)((function(e){return"normal"===e.type}),e.registeredUsers)}},U={setUser:function(e,t){e.user=t},createUser:function(e,t){e.registeredUsers.push(t),e.user=t},dropProfessorCode:function(e,t){e.professorsCode=Object(o.a)(Object(c.a)(t),e.professorsCode)},updateUser:function(e,t){var r=Object(d.a)(Object(m.a)("id",t.id))(e.registeredUsers);e.registeredUsers[r]=t;var n=Object(f.a)(e.registeredUsers);e.registeredUsers=n}},V={logout:function(e){(0,e.commit)("setUser",{})},login:function(e,t){var r=e.state,n=e.commit,o=t.username,c=t.password,d=Object(l.a)(Object(m.a)("username",o),r.registeredUsers);if(Object(O.a)(d))throw new Error(y.label);if(d.password!==c)throw new Error(w.label);n("setUser",d)},createUser:function(e,t){var r=e.state,n=e.commit,o=Object(l.a)(Object(m.a)("username",t.username),r.registeredUsers),c=Object(v.a)(t.professorCode,r.professorsCode);if(!Object(O.a)(o))throw new Error(P.label);if(t.isProfessor&&!c)throw new Error(x.label);t.isProfessor&&n("dropProfessorCode",t.professorCode),n("createUser",{id:h()(),name:t.name,username:t.username,password:t.password,type:t.isProfessor?"admin":"normal"})},updateUser:function(e,t){(0,e.commit)("updateUser",t)}}},81:function(e,t,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Não encontrado",otherError:"Ocorreu um erro"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(326),r(94)),c=r(135),d=r.n(c),m=r(415),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{dark:""}},[404===e.error.statusCode?r("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):r("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),r("NuxtLink",{attrs:{to:"/"}},[e._v("\n    Pagina inicial\n  ")])],1)}),[],!1,null,"2a2b3c2e",null);t.a=component.exports;d()(component,{VApp:m.a})}},[[296,19,6,20]]]);