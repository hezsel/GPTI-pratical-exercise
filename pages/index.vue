<template>
  <v-row justify="center" align="center">
    <v-col
      v-if="isLoggedIn"
      cols="12"
      md="6"
      sm="8"
    >
      <v-card>
        <v-card-title class="headline">
          Bem vindo, {{ user.name }}!
        </v-card-title>
        <v-card-text>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/provas"
          >
            Ver Provas
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col
      v-else
      cols="12"
      md="4"
      sm="10"
    >
      <v-card>
        <v-card-title class="headline">
          Entrar no sistema
        </v-card-title>
        <v-card-text>
          <v-flex mb-2 mt-2>
            <v-text-field
              v-model="credentials.username"
              label="Usuário"
              outlined
              hide-details
              @keyup.enter="loginUser(credentials)"
            ></v-text-field>
          </v-flex>
          <v-flex mb-2>
            <v-text-field
              v-model="credentials.password"
              label="Senha"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-1"
              outlined
              hide-details
              @click:append="showPassword = !showPassword"
              @keyup.enter="loginUser(credentials)"
            ></v-text-field>
          </v-flex>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            @click="loginUser(credentials)"
          >
            Entrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex'

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
      showPassword: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
      isLoggedIn: 'user/isLoggedIn',
    }),
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      login: 'user/login',
    }),
    cleanFields() {
      this.credentials = {
        username: '',
        password: '',
      }
    },
    async loginUser(credentials) {
      try {
        await this.login(credentials)
        this.cleanFields()
      } catch (err) {
        alert(err.message)
      }
    },
  },
}
</script>
