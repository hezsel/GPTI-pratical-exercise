(window.webpackJsonp=window.webpackJsonp||[]).push([[13,10,12,30],{408:function(e,t,r){"use strict";var n=r(205);t.a=n.a},434:function(e,t,r){var content=r(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("cd082abe",content,!0,{sourceMap:!1})},451:function(e,t,r){"use strict";r(434)},452:function(e,t,r){var n=r(23)(!1);n.push([e.i,".bold[data-v-5255fe4f]{font-weight:700}",""]),e.exports=n},461:function(e,t,r){"use strict";r.r(t);r(175),r(31),r(41),r(20),r(25),r(54),r(47),r(5),r(55),r(62),r(48);var n=r(114);function o(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){d=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var l={props:{exam:{type:Object,required:!0},user:{type:Object,required:!0}},data:function(){return{answers:{}}},computed:{grade:function(){var e,t=0,r=0,n=o(this.userAnswers.questions);try{for(n.s();!(e=n.n()).done;){var c=e.value,l=c.question,d=c.answer;t+=l.weight,l.answer===d&&(r+=l.weight)}}catch(e){n.e(e)}finally{n.f()}return r/t*10},userAnswers:function(){return this.exam.usersResponses.find(Object(n.a)("userId",this.user.id))}},watch:{exam:function(){this.updateAnswers()}},created:function(){this.updateAnswers()},methods:{getResponseColor:function(e,t){return e.answer===t?"green":"error"},getResponseText:function(e,t){var r=e.options,n=e.answer,o=e.observation,c=o?"<br><br>Observação do Professor: <br> ".concat(o):"";return n===t?"Correto ".concat(c):"Errado, resposta correta: <b>".concat(r[n],"</b> ").concat(c)},updateAnswers:function(){var e,t=o(this.userAnswers.questions);try{for(t.s();!(e=t.n()).done;){var r=e.value,n=r.question,c=r.answer;this.answers[n.id]=c}}catch(e){t.e(e)}finally{t.f()}}}},d=(r(451),r(93)),f=r(135),m=r.n(f),v=r(586),h=r(431),x=r(427),w=r(592),y=r(417),O=r(494),_=r(535),j=r(536),E=r(593),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v("\n    Resultados - "+e._s(e.exam.name)+"\n  ")]),e._v(" "),r("v-card-text",[r("v-container",[r("v-flex",{attrs:{"mb-5":""}},[r("h2",[e._v("Nota: "+e._s(e.grade))])]),e._v(" "),r("v-flex",{attrs:{"mb-5":""}},[r("h1",[e._v("Questões")])]),e._v(" "),r("v-row",e._l(e.userAnswers.questions,(function(t,n){var o=t.question;return r("v-col",{key:n,attrs:{cols:"12",sm:"12"}},[r("h2",[e._v(" - "+e._s(o.title)+" ")]),e._v(" "),r("v-container",{attrs:{"pl-4":""}},[r("v-radio-group",{model:{value:e.answers[o.id],callback:function(t){e.$set(e.answers,o.id,t)},expression:"answers[question.id]"}},e._l(o.options,(function(option,e){return r("v-radio",{key:e,attrs:{label:option,value:e,disabled:""}})})),1)],1),e._v(" "),r("v-alert",{attrs:{color:e.getResponseColor(o,e.answers[o.id]),dark:""}},[r("div",{domProps:{innerHTML:e._s(e.getResponseText(o,e.answers[o.id]))}})])],1)})),1)],1)],1)],1)}),[],!1,null,"5255fe4f",null);t.default=component.exports;m()(component,{VAlert:v.a,VCard:h.a,VCardText:x.b,VCardTitle:x.c,VCol:w.a,VContainer:y.a,VFlex:O.a,VRadio:_.a,VRadioGroup:j.a,VRow:E.a})},478:function(e,t,r){"use strict";r.r(t);r(7),r(5),r(6),r(11),r(8),r(12);var n=r(2),o=(r(20),r(47),r(48),r(31),r(175),r(25),r(74)),c=r(595),l=r(596),d=r(114);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={components:{examResults:function(){return Promise.resolve().then(r.bind(null,461))}},props:{exam:{type:Object,required:!0},user:{type:Object,required:!0},width:{type:String,default:"100%"}},data:function(){return{examResultDialog:!1}},computed:m(m({},Object(o.c)({themes:"themes/themes"})),{},{hasUserFinishedExam:function(){return this.verifyIfUserHasFinishedExam()},disabled:function(e){return!!Object(c.a)(new Date,new Date("".concat(e.startDate," ").concat(e.startTime)))||(!!Object(l.a)(new Date,new Date("".concat(e.endDate," ").concat(e.endTime)))||this.hasUserFinishedExam)},buttonMessage:function(){return this.hasUserFinishedExam?"Feito":"closed"===this.exam.status?"Fechado":"Fazer"},examColor:function(){return this.hasUserFinishedExam?"green":"closed"===this.exam.status?"error":"primary"}}),methods:{showResults:function(){this.examResultDialog=!0},verifyIfUserHasFinishedExam:function(){return void 0!==this.exam.usersResponses.find(Object(d.a)("userId",this.user.id))},getThemeNameFromId:function(e){return this.themes.find((function(t){return t.id===e})).name}}},h=r(93),x=r(135),w=r.n(x),y=r(205),O=r(431),_=r(427),j=r(531),E=r(129),V=r(83),P=r(420),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto",attrs:{outlined:"",shaped:"",color:e.examColor,"max-width":e.width}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"text-overline mb-4"},[e._v("\n        "+e._s(e.getThemeNameFromId(e.exam.theme))+"\n      ")]),e._v(" "),r("v-list-item-title",{staticClass:"text-h5 mb-1"},[e._v("\n        "+e._s(e.exam.name)+"\n      ")]),e._v(" "),r("v-list-item-subtitle",[e._v(e._s(e.exam.description))])],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),e.hasUserFinishedExam?r("v-btn",{attrs:{outlined:"",rounded:"",text:""},on:{click:function(t){return e.showResults()}}},[e._v("\n      Verificar resultados\n    ")]):e._e(),e._v(" "),r("v-btn",{attrs:{outlined:"",rounded:"",text:"",disabled:e.disabled}},[e._v("\n      "+e._s(e.buttonMessage)+"\n    ")])],1),e._v(" "),r("v-dialog",{attrs:{"max-width":"1000px"},model:{value:e.examResultDialog,callback:function(t){e.examResultDialog=t},expression:"examResultDialog"}},[r("exam-results",{attrs:{exam:e.exam,user:e.user}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{ExamResults:r(461).default}),w()(component,{VBtn:y.a,VCard:O.a,VCardActions:_.a,VDialog:j.a,VListItem:E.a,VListItemContent:V.a,VListItemSubtitle:V.b,VListItemTitle:V.c,VSpacer:P.a})},582:function(e,t,r){"use strict";r.r(t);var n=r(2),o=(r(20),r(47),r(48),r(7),r(5),r(6),r(11),r(8),r(12),r(74));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={components:{examCard:function(){return Promise.resolve().then(r.bind(null,478))}},data:function(){return{}},computed:l({},Object(o.c)({exams:"exam/exams",user:"user/getUser"})),created:function(){},mounted:function(){},methods:l(l({},Object(o.b)({addExam:"exam/addExam",deleteExam:"exam/deleteExam",editExam:"exam/editExam"})),{},{addExam:function(e){this.addExam(e)},editExam:function(e){this.editExam(e)},deleteExam:function(e){this.deleteExam(e)}})},f=r(93),m=r(135),v=r.n(m),h=r(417),x=r(494),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("h1",[e._v("Provas")]),e._v(" "),e._l(e.exams,(function(t){return r("v-flex",{key:t.id},[r("v-flex",{attrs:{"my-5":""}},[r("exam-card",{attrs:{exam:t,user:e.user,width:"1200"}})],1)],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;v()(component,{ExamCard:r(478).default}),v()(component,{VContainer:h.a,VFlex:x.a})}}]);