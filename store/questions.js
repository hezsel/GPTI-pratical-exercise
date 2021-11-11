import { findIndex, propEq, reverse, clone } from 'ramda'
import cuid from 'cuid'

const defaultQuestions = [
  {
    id: '1',
    theme: '1',
    weight: 1,
    title: 'O que é um banco de dados?',
    options: [
      'Um lugar para sentar',
      'Uma ferramenta para reforma de sistemas',
      'Um armazenamento de informações',
      'todas as anteriores',
      'nenhuma das anterioes',
    ],
    answer: 2,
    observation: 'O banco de dados é a organização e armazenagem de informações sobre um domínio específico. De forma mais simples, é o agrupamento de dados que tratam do mesmo assunto, e que precisam ser armazenados para segurança ou conferência futura.',
  },
  {
    id: '2',
    theme: '1',
    weight: 1,
    title: 'O que é uma tabela?',
    options: [
      'Um conjunto de dados dispostos em colunas e linhas',
      'Uma cesta de basquete',
      'Uma jogada de futebol',
      'todas as anteriores',
      'nenhuma das anterioes',
    ],
    answer: 0,
    observation: 'Nos modelos de bases de dados relacionais, a tabela é um conjunto de dados dispostos em número infinito de colunas e número ilimitado de linhas (ou tuplas).',
  },
  {
    id: '3',
    theme: '1',
    weight: 1,
    title: 'O que é uma tupla?',
    options: [
      'Uma flor',
      'Uma linha da tabela',
      'Uma dor de cabeça',
      'todas as anteriores',
      'nenhuma das anterioes',
    ],
    answer: 1,
    observation: 'Tupla é uma vasilha (tradução literal) onde coloca uma porção de coisas. A grosso modo referimos ela como sendo a linha da tabela, ou o registro, como também é conhecido o conceito. Mas vamos ser mais específicos.',
  },
]

export const state = () => ({
  questions: defaultQuestions,
})

export const getters = {
  questions: (state) => reverse(state.questions),
}

export const mutations = {
  addQuestion(state, question) {
    state.questions.push(question)
  },
  deleteQuestion(state, questionId) {
    state.questions.splice(findIndex(propEq('id', questionId)), 1)
    const items = clone(state.questions)
    state.questions = items
  },
  editQuestion(state, question) {
    const indexOfQuestion = findIndex(propEq('id', question.id), state.questions)
    const items = clone(state.questions)
    items[indexOfQuestion] = question
    state.questions = items
  },
}

export const actions = {
  addQuestion({ commit }, theme) {
    commit('addQuestion', {
      ...theme,
      id: cuid(),
    })
  },
  deleteQuestion({ commit }, { id }) {
    commit('deleteQuestion', id)
  },
  editQuestion({ commit }, question) {
    commit('editQuestion', question)
  }
}

