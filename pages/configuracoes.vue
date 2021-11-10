<template>
  <div class="d-flex">
    <v-btn 
      class="ma-2"
      max-width="344"
      @click="$router.push('cadastro')"
    >
      Cadastro de usuários
    </v-btn>
    <v-btn  
      class="ma-2"
      max-width="344"
      @click="$router.push('alunos')"
    >
      Listagem de alunos
    </v-btn >
  </div>
</template>

<script>
export default {

}
</script>
