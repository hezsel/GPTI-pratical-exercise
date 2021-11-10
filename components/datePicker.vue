<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="label"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
        @change="updateDate(date)"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="menu = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu.save(date)"
      >
        OK
      </v-btn>
    </v-date-picker>
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
      date: null,
      menu: false,
    }
  },
  watch: {
    date(val) {
      this.$emit('update-date', val)
    },
  },
  mounted() {
    this.date = this.startValue
  },
}
</script>
