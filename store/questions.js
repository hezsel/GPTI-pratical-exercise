import { findIndex, propEq, reverse, clone } from 'ramda'
import cuid from 'cuid'

const defaultQuestions = [
  {
    id: '1',
    theme: '1',
    weight: 1,
    title: 'Com quantos paus se faz uma canoa',
    options: [
      'mais de 10',
      '2',
      '5.5',
      'depende do tamanho dos paus',
      'nenhum, você compra',
    ],
    answer: 3,
    observation: 'Realmente depende mesmo',
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

