<template>
  <div>
    <v-list>
      <v-list-item
        v-for="student in students"
        :key="student.id"
      >
        <v-list-content>
          <v-list-item-title v-text="student.name"></v-list-item-title>
        </v-list-content>

        <v-spacer></v-spacer>

        <v-list-item-action>
          <v-dialog
            v-model="showDialog"
            width="500"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click="setSelectedThemes(student)"
                >
                  <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 primary darken">
                {{ student.name }}
              </v-card-title>

              <v-chip-group
                v-model="selectedThemes"
                active-class="primary--text"
                multiple
                column
                class="mx-2"
              >
                <v-chip
                  v-for="theme in themes"
                  :key="theme.id"
                >
                  {{ theme.name }}
                </v-chip>
              </v-chip-group>
              <v-card-action>
                <v-btn
                  block
                  @click="setUserThemes(student)"
                >
                  SALVAR
                </v-btn>
              </v-card-action>
            </v-card>
          </v-dialog>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-dialog>

    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      selectedThemes: [],
      showDialog: false,
    }
  },
  computed: {
    ...mapGetters({
      themes: 'themes/themes',
      students: 'user/students',
    }),
  },
  methods: {
    ...mapActions({
      updateUser: 'user/updateUser',
    }),
    setSelectedThemes(user) {
      this.selectedThemes = user.registeredThemes
    },
    setUserThemes(userData) {
      this.updateUser({
        ...userData,
        registeredThemes: this.selectedThemes,
      })
      this.showDialog = false
    },
  },
}
</script>
