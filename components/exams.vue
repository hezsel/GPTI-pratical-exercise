<template>
  <v-container>
    <h1>Provas</h1>
    <v-flex
      v-for="exam in exams"
      :key="exam.id"
    >
      <v-flex my-5>
        <exam-card
          :exam="exam"
          :user="user"
          :width="'1200'"
        />
      </v-flex>
    </v-flex>
  </v-container>
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex'

export default {
  components: {
    examCard: () => import('../components/examCard.vue')
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      exams: 'exam/exams',
      user: 'user/getUser',
    }),
  },
  created() {
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      addExam: 'exam/addExam',
      deleteExam: 'exam/deleteExam',
      editExam: 'exam/editExam',
    }),
    addExam(exam) {
      this.addExam(exam)
    },
    editExam(exam) {
      this.editExam(exam)
    },
    deleteExam(exam) {
      this.deleteExam(exam)
    },
  },
}
</script>
