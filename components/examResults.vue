<template>
  <v-card>
    <v-card-title>
      Resultados - {{ exam.name }}
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-flex mb-5>
          <h2>Nota: {{ grade }}</h2>
        </v-flex>
        <v-flex mb-5>
          <h1>Questões</h1>
        </v-flex>
        <v-row>
          <v-col
            v-for="({ question }, index) in userAnswers.questions"
            :key="index"
            cols="12"
            sm="12"
          >
            <h2> - {{ question.title }} </h2>
            <v-container pl-4>
              <v-radio-group v-model="answers[question.id]">
                <v-radio
                  v-for="(option, oIndex) in question.options"
                  :key="oIndex"
                  :label="option"
                  :value="oIndex"
                  disabled
                ></v-radio>
              </v-radio-group>
            </v-container>
            <v-alert
              :color="getResponseColor(question, answers[question.id])"
              dark
            >
              <div v-html="getResponseText(question, answers[question.id])" />
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { propEq } from 'ramda'

export default {
  props: {
    exam: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      answers: {},
    }
  },
  computed: {
    grade() {
      let weights = 0
      let points = 0
      for (const { question, answer } of this.userAnswers.questions) {
        weights += question.weight
        if (question.answer === answer) {
          points += question.weight
        }
      }
      return Number((points / weights) * 10).toFixed(2)
    },
    userAnswers() {
      return this.exam.usersResponses.find(propEq('userId', this.user.id))
    },
  },
  watch: {
    exam() {
      this.updateAnswers()
    },
  },
  created() {
    this.updateAnswers()
  },
  methods: {
    getResponseColor({ answer }, userAnswer) {
      if (answer === userAnswer) {
        return 'green'
      }
      return 'error'
    },
    getResponseText({ options, answer, observation }, userAnswer) {
      const observationText = observation ? `<br><br>Observação do Professor: <br> ${observation}` : ''
      if (answer === userAnswer) {
        return `Correto ${observationText}`
      }
      return `Errado, resposta correta: <b>${options[answer]}</b> ${observationText}`
    },
    updateAnswers() {
      for (const { question, answer } of this.userAnswers.questions) {
        this.answers[question.id] = answer
      }
    },
  },
}
</script>
