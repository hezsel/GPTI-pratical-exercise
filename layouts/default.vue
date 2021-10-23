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
          v-for="(item, i) in items"
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
        @click="logout()"
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

export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          to: '/'
        },
        {
          icon: 'mdi-ballot',
          title: 'Provas',
          to: '/provas'
        },
        {
          icon: 'mdi-cog',
          title: 'Configurações',
          to: '/configuracoes'
        }
      ],
      miniVariant: false,
      title: 'Avalia Virtual'
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn',
    }),
  },
  methods: {
    ...mapActions({
      logout: 'user/logout',
    })
  },
}
</script>
