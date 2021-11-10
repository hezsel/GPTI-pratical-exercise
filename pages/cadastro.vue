<template>
  <v-card>
        <v-card-title class="headline">
          Entrar no sistema
        </v-card-title>
        <v-card-text>
          <v-flex mb-2 mt-2>
            <v-text-field
              v-model="userData.username"
              label="Usuário"
              outlined
              hide-details
            ></v-text-field>
          </v-flex>
          <v-flex mb-2 mt-2>
            <v-text-field
            v-model="userData.name"
              label="Nome"
              outlined
              hide-details
            ></v-text-field>
          </v-flex>
          <v-flex mb-2 mt-2>
            <v-checkbox
              v-model="userData.isProfessor"
              label="Professor"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex v-if="userData.isProfessor" mb-2 mt-2>
            <v-text-field
              v-model="userData.professorCode"
              label="Código de professor"
              outlined
              hide-details
            ></v-text-field>
          </v-flex>
          <v-flex mb-2>
            <v-text-field
              v-model="userData.password"
              label="Senha"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-1"
              outlined
              hide-details
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-flex>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            @click="createUser()"
          >
            Cadastrar
          </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
import {
  mapActions,
} from 'vuex'

export default {
  data(){
    return {
      showPassword: false,
      userData: {
        name: '',
        password: '',
        username: '',
        isProfessor: false,
        professorCode: '',
      }
    }
  },
  methods: {
    ...mapActions({
      createUserAction: 'user/createUser',
    }),
    async createUser() {
      try {
        await this.createUserAction(this.userData)
        this.$router.push('/')
      } catch ({ message }) {
        alert(message)
      }
    }
  },
}
</script>
