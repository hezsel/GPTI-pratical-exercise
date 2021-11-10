<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="time"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="time"
        :label="label"
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker
      v-if="menu"
      v-model="time"
      full-width
      format="24hr"
      @click:minute="$refs.menu.save(time)"
    ></v-time-picker>
  </v-menu>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    startValue: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '100%',
    },
  },
  data() {
    return {
      time: null,
      menu: false,
    }
  },
  watch: {
    time(val) {
      this.$emit('update-time', val)
    },
    startValue(val) {
      this.time = val
    },
  },
  created() {
    this.time = this.startValue
  },
}
</script>
