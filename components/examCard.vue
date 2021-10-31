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
          {{ exam.theme }}
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
import { propEq, isNil } from 'ramda'

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
    hasUserFinishedExam() {
      return !isNil(this.exam.usersResponses.find(propEq('userId', this.user.id)))
    },
    disabled() {
      return this.exam.status !== 'open' || this.hasUserFinishedExam
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
}
</script>
