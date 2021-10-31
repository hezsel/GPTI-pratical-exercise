<template>
  <v-row justify="center" align="center">
    <v-tabs
        v-model="tab"
        align-with-title
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
          v-for="item in allowedItems"
          :key="item.name"
        >
          {{ item.label }}
        </v-tab>
      </v-tabs>
      <v-row justify="center" align="center" mt-2>
        <v-col
          v-if="isLoggedIn"
          cols="12"
          md="10"
          sm="12"
        >
          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="item in allowedItems"
              :key="item.name"
            >
              <v-card flat>
                <component
                  :is="item.componentName"
                />
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
  </v-row>
</template>

<script>
import {
  mapGetters,
} from 'vuex'

export default {
  components: {
    exams: () => import('../components/exams.vue'),
    themeConfig: () => import('../components/themeConfig.vue'),
  },
  data() {
    return {
      tab: null,
      items: [
        {
          name: 'exams',
          label: 'Provas',
          admin: false,
          componentName: 'exams',
        },
        {
          name: 'theme-config',
          label: 'Configuração de Temas',
          admin: true,
          componentName: 'themeConfig',
        },
        {
          name: 'question-config',
          label: 'Configuração de Questões',
          admin: true,
          componentName: 'exams',
        },
        {
          name: 'exam-config',
          label: 'Configuração de Provas',
          admin: true,
          componentName: 'exams',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
      isLoggedIn: 'user/isLoggedIn',
    }),
    isUserAdmin() {
      return this.user.type === 'admin'
    },
    allowedItems() {
      return this.items.filter(item => {
        return item.admin === this.isUserAdmin
      })
    },
  },
  created() {
    if (!this.isLoggedIn) {
      this.$router.push('/')
    }
  },
}
</script>
