<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in filteredItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        v-if="isLoggedIn"
        icon
        @click="logoutUser()"
      >
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex'
import {
  filter
} from 'ramda'

export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Início',
          to: '/',
          type: '',
        },
        {
          icon: 'mdi-ballot',
          title: 'Provas',
          to: '/provas',
          type: '',
        },
        {
          icon: 'mdi-cog',
          title: 'Configurações',
          to: '/configuracoes',
          type: 'admin',
        }
      ],
      miniVariant: false,
      title: 'Avalia Virtual'
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn',
      user: 'user/getUser',
    }),
    filteredItems() {
      const isAdmin = this.user?.type === 'admin'

      if (!this.isLoggedIn) {
        return [this.items[0]]
      }
      if (isAdmin) {
        return this.items
      }

      const filteredItems = filter((item) => item.type !== 'admin', this.items)
      return filteredItems
    },
  },
  methods: {
    ...mapActions({
      logout: 'user/logout',
    }),
    logoutUser() {
      this.logout()
      this.$router.push('/')
    },
  },
}
</script>
