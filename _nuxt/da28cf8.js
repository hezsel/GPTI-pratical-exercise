(window.webpackJsonp=window.webpackJsonp||[]).push([[9,17],{405:function(e,t,n){"use strict";var r=n(205);t.a=r.a},528:function(e,t,n){"use strict";n.r(t);n(8),n(5),n(6),n(12),n(7),n(13);var r=n(95),o=n(2),l=(n(93),n(74));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){return{dialog:!1,dialogDelete:!1,items:[],headers:[{text:"Nome",align:"start",sortable:!0,value:"name"},{text:"Descrição",value:"description",sortable:!1},{text:"Ações",value:"actions",sortable:!1}],editedId:-1,editedItem:{text:"",value:""},defaultItem:{text:"",value:""}}},computed:d(d({},Object(l.c)({themes:"themes/themes"})),{},{formTitle:function(){return-1===this.editedId?"Novo Tema":"Editar Tema"}}),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.updateItems()},methods:d(d({},Object(l.b)({addTheme:"themes/addTheme",editTheme:"themes/editTheme",deleteTheme:"themes/deleteTheme"})),{},{updateItems:function(){var e;this.items.splice(0,this.items.length),(e=this.items).push.apply(e,Object(r.a)(this.themes))},editItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.deleteTheme(this.editedId),this.updateItems(),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedId=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedId=-1}))},save:function(){-1!==this.editedId?this.editTheme(this.editedItem):this.addTheme(this.editedItem),this.updateItems(),this.close()}})},v=n(94),h=n(128),f=n.n(h),I=n(544),_=n(205),x=n(423),O=n(422),k=n(531),T=n(414),j=n(538),y=n(535),D=n(460),V=n(457),w=n(195),C=n(532),P=n(417),S=n(466),$=n(53),E=n(204),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.themes,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("Temas")]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),r),[e._v("\n            Novo Tema\n          ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:"Nome"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:"Descrição"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.close}},[e._v("\n              Cancelar\n            ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n              Salvar\n            ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Você tem certeza que deseja deletar esse item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var r=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("\n      mdi-pencil\n    ")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v("\n      mdi-delete\n    ")])]}},{key:"no-data",fn:function(){return[n("v-flex",{attrs:{"mt-4":""}},[n("v-alert",{attrs:{color:"error",dark:""}},[e._v("\n        Sem temas cadastrados :(\n      ")])],1)]},proxy:!0}],null,!0)})}),[],!1,null,null,null);t.default=component.exports;f()(component,{VAlert:I.a,VBtn:_.a,VCard:x.a,VCardActions:O.a,VCardText:O.b,VCardTitle:O.c,VCol:k.a,VContainer:T.a,VDataTable:j.a,VDialog:y.a,VDivider:D.a,VFlex:V.a,VIcon:w.a,VRow:C.a,VSpacer:P.a,VTextField:S.a,VToolbar:$.a,VToolbarTitle:E.a})}}]);