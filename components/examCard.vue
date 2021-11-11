<template>
  <v-card class="mx-auto" outlined shaped :color="examColor" :max-width="width">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{ getThemeNameFromId(exam.theme) }}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ exam.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ exam.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-spacer />
      <v-btn
        v-if="hasUserFinishedExam"
        outlined
        rounded
        text
        @click="showResults()"
      >
        Verificar resultados
      </v-btn>
      <v-btn outlined rounded text :disabled="disabled" @click="openDialog">
        {{ buttonMessage }}
      </v-btn>
    </v-card-actions>
    <v-dialog
      v-model="examResultDialog"
      max-width="1000px"
    >
      <exam-results :exam="exam" :user="user" />
    </v-dialog>

    <v-dialog
      v-model="showExamDialog"
      width="1000"
      persistent
    >
      <v-card>
        <v-card-title class="mt-4">
          {{ exam.name }}
        </v-card-title>
        <v-card-text>
          <v-container>
            <div
              v-for="question in userResponse.questions"
              :key="question.id"
              class="mb-5"
            >
              <h2>- {{ question.question.title }}</h2>
              <v-radio-group v-model="question.answer">
                <v-radio
                  v-for="(option, index) in question.question.options"
                  :key="option"
                  class="ml-4"
                  :label="option"
                  :value="index"
                />
              </v-radio-group>
            </div>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="sendUserResponse"
              >
                ENVIAR RESPOSTAS
              </v-btn>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { isBefore, isAfter } from 'date-fns'
import { propEq, clone, find } from 'ramda'

export default {
  components: {
    examResults: () => import('../components/examResults.vue')
  },
  props: {
    exam: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    width: {
      type: String,
      default: '100%',
    },
  },
  data() {
    return {
      examResultDialog: false,
      showExamDialog: false,
      userResponse: {
        userId: this.user.id,
        questions: [],
      },
    }
  },
  computed: {
    ...mapGetters({
      themes: 'themes/themes',
      questions: 'questions/questions',
      exams: 'exam/exams',
    }),
    hasUserFinishedExam() {
      return this.verifyIfUserHasFinishedExam()
    },
    disabled(exam) {
      if (
        isBefore(new Date(), new Date(`${exam.startDate} ${exam.startTime}`))
      ) {
        return true
      }
      if (isAfter(new Date(), new Date(`${exam.endDate} ${exam.endTime}`))) {
        return true
      }
      return this.hasUserFinishedExam
    },
    buttonMessage() {
      if (this.hasUserFinishedExam) {
        return 'Feito'
      }
      if (this.exam.status === 'closed') {
        return 'Fechado'
      }

      return 'Fazer'
    },
    examColor() {
      if (this.hasUserFinishedExam) {
        return 'green'
      }
      if (this.exam.status === 'closed') {
        return 'red'
      }

      return 'primary'
    },
  },
  methods: {
    ...mapActions({
      editExam: 'exam/editExam',
    }),
    showResults() {
      this.examResultDialog = true
    },
    verifyIfUserHasFinishedExam () {
      return this.exam.usersResponses.find(propEq('userId', this.user.id)) !== undefined
    },
    getThemeNameFromId(id) {
      return this.themes.find((theme) => theme.id === id).name
    },
    openDialog() {
      if (this.buttonMessage === 'Fazer') {
        this.createRandomExam()
        this.showExamDialog = true
      }
    },
    createRandomExam() {
      this.userResponse = {
        userId: this.user.id,
        questions: [],
      }

      const shuffledQuestions = clone(this.exam.questions).sort(
        () => 0.5 - Math.random()
      )

      const selectedQuestions = shuffledQuestions.slice(
        0,
        this.exam.numberOfQuestions
      )

      selectedQuestions.forEach((questionId) => {
        const question = {
          question: {},
          answer: null,
        }

        question.question = find(propEq('id', questionId))(this.questions)

        this.userResponse.questions.push(question)
      })
    },
    sendUserResponse() {
      const exam = clone(this.exam)
      exam.usersResponses.push(this.userResponse)
      this.editExam(exam)
      this.showExamDialog = false
    }
  },
}
</script>
