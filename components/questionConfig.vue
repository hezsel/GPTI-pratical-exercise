<template>
  <v-data-table
    :headers="headers"
    :items="questions"
    sort-by="calories"
    class="elevation-1"
  >
    <template #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Questões</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nova Questão
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="9"
                    sm="9"
                  >
                    <v-select
                      v-model="editedItem.theme"
                      :items="themes"
                      item-text="name"
                      item-value="id"
                      label="Tema"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="3"
                    sm="3"
                  >
                    <v-select
                      v-model="editedItem.weight"
                      :items="weights"
                      label="Peso"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                  >
                    <v-text-field
                      v-model="editedItem.title"
                      label="Questão"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="10"
                    sm="10"
                  >
                    <v-text-field
                      v-model="newOption"
                      label="Adicionar opção de resposta"
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="2"
                    sm="2"
                  >
                    <v-btn
                      fab
                      dark
                      small
                      color="primary"
                      @click="addNewOption()"
                    >
                      <v-icon dark>
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                  >
                    <v-radio-group v-model="editedItem.answer">
                      <v-radio
                        v-for="(option, index) in editedItem.options"
                        :key="index"
                        :label="option"
                        :value="index"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                  >
                    <v-textarea
                      v-model="editedItem.observation"
                      multi-line
                      label="Observações (sobre a resposta correta)"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Você tem certeza que deseja deletar esse item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template #[`item.theme`]="{ item }">
      {{ getThemeNameFromId(item.theme) }}
    </template>
    <template #[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template #no-data>
      <v-flex mt-4>
        <v-alert
          color="error"
          dark
        >
          Sem questões cadastradas :(
        </v-alert>
      </v-flex>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { isEmpty, isNil } from 'ramda'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    items: [],
    headers: [
      {
        text: 'Tema',
        align: 'start',
        sortable: true,
        value: 'theme',
      },
      {
        text: 'Peso',
        align: 'start',
        sortable: true,
        value: 'weight',
      },
      {
        text: 'Questão',
        align: 'start',
        sortable: true,
        value: 'title',
      },
      { text: 'Ações', value: 'actions', sortable: false },
    ],
    weights: [1, 2, 3, 4, 5],
    editedId: -1,
    editedItem: {
      theme: null,
      weight: 1,
      title: '',
      options: [],
      answer: 0,
      observation: '',
    },
    newOption: '',
    defaultItem: {
      theme: null,
      weight: 1,
      title: '',
      options: [],
      answer: 0,
      observation: '',
    },
  }),
  computed: {
    ...mapGetters({
      themes: 'themes/themes',
      questions: 'questions/questions',
    }),
    formTitle () {
      return this.editedId === -1 ? 'Nova Questão' : 'Editar Questão'
    },
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  created() {
    this.updateItems()
  },
  methods: {
    ...mapActions({
      addQuestion: 'questions/addQuestion',
      editQuestion: 'questions/editQuestion',
      deleteQuestion: 'questions/deleteQuestion',
    }),
    getThemeNameFromId (id) {
      return this.themes.find(theme => theme.id === id).name
    },
    addNewOption () {
      if (isNil(this.newOption) || isEmpty(this.newOption)) {
        return
      }
      this.editedItem.options.push(this.newOption)
      this.newOption = ''
    },
    updateItems () {
      this.items.splice(0, this.items.length)
      this.items.push(...this.questions)
    },
    editItem (item) {
      this.editedId = item.id
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      this.editedId = item.id
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.deleteQuestion(this.editedId)
      this.updateItems()
      this.closeDelete()
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedId = -1
      })
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedId = -1
      })
    },
    save () {
      if (this.editedId !== -1) {
        this.editQuestion(this.editedItem)
      } else {
        this.addQuestion(this.editedItem)
      }
      this.updateItems()
      this.close()
    },
  },
}
</script>
