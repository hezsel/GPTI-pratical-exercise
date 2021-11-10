<template>
  <v-data-table
    :headers="headers"
    :items="exams"
    sort-by="calories"
    class="elevation-1"
  >
    <template #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Provas</v-toolbar-title>
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
              Nova Prova
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
                    cols="12"
                    sm="12"
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
                    cols="9"
                    sm="9"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nome"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="3"
                    sm="3"
                  >
                    <v-select
                      v-model="editedItem.numberOfQuestions"
                      :items="numberOfQuestions"
                      label="N de Questões"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <date-picker
                      label="Data Inicial"
                      :start-value="editedItem.startDate"
                      @update-date="(val) => updateAttribute('startDate', val)"
                    />
                  </v-col>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <time-picker
                      label="Hora Inicial"
                      :start-value="editedItem.startTime"
                      @update-time="(val) => updateAttribute('startTime', val)"
                    />
                  </v-col>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <date-picker
                      label="Data Final"
                      :start-value="editedItem.endDate"
                      @update-date="(val) => updateAttribute('endDate', val)"
                    />
                  </v-col>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <time-picker
                      label="Hora Final"
                      :start-value="editedItem.endTime"
                      @update-time="(val) => updateAttribute('endTime', val)"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                  >
                    <v-select
                      v-model="editedItem.questions"
                      :items="questionsFromTheme"
                      item-text="title"
                      item-value="id"
                      multiple
                      label="Questões"
                    >
                    <template
                      slot="item"
                      slot-scope="{ item }"
                    >
                      ({{ item.weight }}) - {{ item.title }}
                    </template>
                    </v-select>
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
    <template #[`item.startDate`]="{ item }">
      {{ getLocaleString(`${item.startDate} ${item.startTime}`) }}
    </template>
    <template #[`item.endDate`]="{ item }">
      {{ getLocaleString(`${item.endDate} ${item.endTime}`) }}
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
          Sem temas cadastrados :(
        </v-alert>
      </v-flex>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    datePicker: () => import('../components/datePicker.vue'),
    timePicker: () => import('../components/timePicker.vue'),
  },
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
        text: 'Nome',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      { text: 'Data Inicio', value: 'startDate', sortable: true },
      { text: 'Data Fim', value: 'endDate', sortable: true },
      { text: 'Ações', value: 'actions', sortable: false },
    ],
    numberOfQuestions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    editedId: -1,
    editedItem: {
      theme: null,
      name: '',
      startDate: '',
      endDate: '',
      numberOfQuestions: 1,
      questions: [],
    },
    defaultItem: {
      theme: null,
      name: '',
      startDate: '',
      endDate: '',
      numberOfQuestions: 1,
      questions: [],
    },
  }),
  computed: {
    ...mapGetters({
      themes: 'themes/themes',
      questions: 'questions/questions',
      exams: 'exam/exams',
    }),
    formTitle () {
      return this.editedId === -1 ? 'Nova Prova' : 'Editar Prova'
    },
    questionsFromTheme() {
      return this.questions.filter(q => q.theme === this.editedItem.theme)
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
  },
  methods: {
    ...mapActions({
      addExam: 'exam/addExam',
      editExam: 'exam/editExam',
      deleteExam: 'exam/deleteExam',
    }),
    updateAttribute(key, val) {
      this.editedItem[key] = val
    },
    getThemeNameFromId (id) {
      return this.themes.find(theme => theme.id === id).name
    },
    getLocaleString(date) {
      return new Date(date).toLocaleString('pt-BR')
    },
    updateItems () {
      this.items.splice(0, this.items.length)
      this.items.push(...this.themes)
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
      this.deleteExam(this.editedId)
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
        this.editExam(this.editedItem)
      } else {
        this.addExam(this.editedItem)
      }
      this.updateItems()
      this.close()
    },
  },
}
</script>
