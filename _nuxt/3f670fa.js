(window.webpackJsonp=window.webpackJsonp||[]).push([[8,16],{405:function(e,t,n){"use strict";var o=n(205);t.a=o.a},527:function(e,t,n){"use strict";n.r(t);n(8),n(5),n(6),n(12),n(7),n(13);var o=n(95),r=n(2),l=(n(26),n(127),n(93),n(74)),d=n(418),c=n(420);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={data:function(){return{dialog:!1,dialogDelete:!1,items:[],headers:[{text:"Tema",align:"start",sortable:!0,value:"theme"},{text:"Peso",align:"start",sortable:!0,value:"weight"},{text:"Questão",align:"start",sortable:!0,value:"title"},{text:"Ações",value:"actions",sortable:!1}],weights:[1,2,3,4,5],editedId:-1,editedItem:{theme:null,weight:1,title:"",options:[],answer:0,observation:""},newOption:"",defaultItem:{theme:null,weight:1,title:"",options:[],answer:0,observation:""}}},computed:m(m({},Object(l.c)({themes:"themes/themes",questions:"questions/questions"})),{},{formTitle:function(){return-1===this.editedId?"Nova Questão":"Editar Questão"}}),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.updateItems()},methods:m(m({},Object(l.b)({addQuestion:"questions/addQuestion",editQuestion:"questions/editQuestion",deleteQuestion:"questions/deleteQuestion"})),{},{getThemeNameFromId:function(e){return this.themes.find((function(t){return t.id===e})).name},addNewOption:function(){Object(d.a)(this.newOption)||Object(c.a)(this.newOption)||(this.editedItem.options.push(this.newOption),this.newOption="")},updateItems:function(){var e;this.items.splice(0,this.items.length),(e=this.items).push.apply(e,Object(o.a)(this.questions))},editItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.deleteQuestion(this.editedId),this.updateItems(),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedId=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedId=-1}))},save:function(){-1!==this.editedId?this.editQuestion(this.editedItem):this.addQuestion(this.editedItem),this.updateItems(),this.close()}})},f=n(94),I=n(128),_=n.n(I),w=n(544),O=n(205),x=n(423),k=n(422),j=n(531),y=n(414),V=n(538),D=n(535),C=n(460),T=n(457),Q=n(195),P=n(542),S=n(536),$=n(532),N=n(465),A=n(417),E=n(466),F=n(537),R=n(53),J=n(204),component=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.questions,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("Questões")]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),o),[e._v("\n            Nova Questão\n          ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"9",sm:"9"}},[n("v-select",{attrs:{items:e.themes,"item-text":"name","item-value":"id",label:"Tema"},model:{value:e.editedItem.theme,callback:function(t){e.$set(e.editedItem,"theme",t)},expression:"editedItem.theme"}})],1),e._v(" "),n("v-col",{attrs:{cols:"3",sm:"3"}},[n("v-select",{attrs:{items:e.weights,label:"Peso"},model:{value:e.editedItem.weight,callback:function(t){e.$set(e.editedItem,"weight",t)},expression:"editedItem.weight"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:"Questão"},model:{value:e.editedItem.title,callback:function(t){e.$set(e.editedItem,"title",t)},expression:"editedItem.title"}})],1),e._v(" "),n("v-col",{attrs:{cols:"10",sm:"10"}},[n("v-text-field",{attrs:{label:"Adicionar opção de resposta","hide-details":""},model:{value:e.newOption,callback:function(t){e.newOption=t},expression:"newOption"}})],1),e._v(" "),n("v-col",{attrs:{cols:"2",sm:"2"}},[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(t){return e.addNewOption()}}},[n("v-icon",{attrs:{dark:""}},[e._v("\n                      mdi-plus\n                    ")])],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-radio-group",{model:{value:e.editedItem.answer,callback:function(t){e.$set(e.editedItem,"answer",t)},expression:"editedItem.answer"}},e._l(e.editedItem.options,(function(option,e){return n("v-radio",{key:e,attrs:{label:option,value:e}})})),1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-textarea",{attrs:{"multi-line":"",label:"Observações (sobre a resposta correta)"},model:{value:e.editedItem.observation,callback:function(t){e.$set(e.editedItem,"observation",t)},expression:"editedItem.observation"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.close}},[e._v("\n              Cancelar\n            ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n              Salvar\n            ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Você tem certeza que deseja deletar esse item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.theme",fn:function(t){var n=t.item;return[e._v("\n    "+e._s(e.getThemeNameFromId(n.theme))+"\n  ")]}},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n      mdi-pencil\n    ")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n      mdi-delete\n    ")])]}},{key:"no-data",fn:function(){return[n("v-flex",{attrs:{"mt-4":""}},[n("v-alert",{attrs:{color:"error",dark:""}},[e._v("\n        Sem questões cadastradas :(\n      ")])],1)]},proxy:!0}],null,!0)})}),[],!1,null,null,null);t.default=component.exports;_()(component,{VAlert:w.a,VBtn:O.a,VCard:x.a,VCardActions:k.a,VCardText:k.b,VCardTitle:k.c,VCol:j.a,VContainer:y.a,VDataTable:V.a,VDialog:D.a,VDivider:C.a,VFlex:T.a,VIcon:Q.a,VRadio:P.a,VRadioGroup:S.a,VRow:$.a,VSelect:N.a,VSpacer:A.a,VTextField:E.a,VTextarea:F.a,VToolbar:R.a,VToolbarTitle:J.a})}}]);