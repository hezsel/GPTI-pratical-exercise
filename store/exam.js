import { findIndex, propEq, reverse, clone } from 'ramda'
import cuid from 'cuid'

const defaultExams = [
  {
    id: '1',
    name: 'P1 - Entidade Relacionamento',
    description: 'Conteúdo sobre Modelo Entidade Relacionamento (MER)',
    status: 'closed',
    theme: '1',
    startDate: '2021-01-01',
    startTime: '07:00',
    endDate: '2021-01-01',
    endTime: '12:00',
    numberOfQuestions: 1,
    questions: [],
    usersResponses: [],
  },
  {
    id: '2',
    name: 'P2 - Algoritimos de estrutura de dados',
    description: 'Conteúdo sobre algoritimos de estrutura de dados',
    status: 'open',
    theme: '1',
    startDate: '2021-11-01',
    startTime: '10:00',
    endDate: '2021-11-20',
    endTime: '22:00',
    numberOfQuestions: 3,
    questions: ['1', '2', '3'],
    usersResponses: [],
  },
]

export const state = () => ({
  exams: defaultExams,
})

export const getters = {
  exams: (state) => reverse(state.exams),
}

export const mutations = {
  addExam(state, exam) {
    state.exams.push(exam)
  },
  deleteExam(state, examId) {
    state.exams.splice(findIndex(propEq('id', examId)), 1)
    const items = clone(state.exams)
    state.exams = items
  },
  editExam(state, exam) {
    const indexOfExam = findIndex(propEq('id', exam.id), state.exams)
    const items = clone(state.exams)
    items[indexOfExam] = exam
    state.exams = items
  },
}

export const actions = {
  addExam({ commit }, exam) {
    commit('addExam', {
      ...exam,
      usersResponses: [],
      id: cuid(),
    })
  },
  deleteExam({ commit }, { id }) {
    commit('deleteExam', id)
  },
  editExam({ commit }, exam) {
    commit('editExam', exam)
  },
}

