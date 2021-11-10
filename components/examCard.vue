<template>
  <v-card
    class="mx-auto"
    outlined
    shaped
    :color="examColor"
    :max-width="width"
  >
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
      >
        Verificar resultados
      </v-btn>
      <v-btn
        outlined
        rounded
        text
        :disabled="disabled"
      >
        {{ buttonMessage }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { isBefore, isAfter } from 'date-fns'
import { propEq } from 'ramda'

export default {
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
    }
  },
  computed: {
    ...mapGetters({
      themes: 'themes/themes',
    }),
    hasUserFinishedExam() {
      return this.verifyIfUserHasFinishedExam()
    },
    disabled(exam) {
      if (isBefore(new Date(), new Date(`${exam.startDate} ${exam.startTime}`))) {
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
        return 'error'
      }

      return 'primary'
    },
  },
  methods: {
    verifyIfUserHasFinishedExam () {
      return this.exam.usersResponses.find(propEq('userId', this.user.id))
    },
    getThemeNameFromId (id) {
      return this.themes.find(theme => theme.id === id).name
    },
  },
}
</script>
