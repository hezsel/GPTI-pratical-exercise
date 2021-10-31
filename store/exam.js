import { findIndex, propEq, reverse } from 'ramda'
const defaultExams = [
  {
    id: '1',
    name: 'Prova 1',
    description: 'Prova 1 de alguma coisa',
    status: 'closed',
    theme: 'GPTI',
    questions: [],
    usersResponses: [],
  },
  {
    id: '2',
    name: 'Prova 2',
    description: 'Prova 2 de alguma coisa',
    status: 'open',
    theme: 'GPTI',
    questions: [],
    usersResponses: [{ userId: '1', response: [] }],
  },
  {
    id: '3',
    name: 'Prova 3',
    description: 'Prova 3 de alguma coisa',
    status: 'open',
    theme: 'GPTI',
    questions: [],
    usersResponses: [],
  },
]

export const state = () => ({
  exams: defaultExams,
})

export const getters = {
  exams: (state) => reverse(state.exams),
  hasUserFinishedExam: (state, { examId, userId }) => {
    const exam = state.exams.find(propEq('id', examId))
    return exam.usersResponses.find(propEq('userId', userId))
  },
}

export const mutations = {
  addExam(state, exam) {
    state.exams.push(exam)
  },
  deleteExam(state, examId) {
    state.exams.splice(findIndex(propEq('id', examId)), 1)
  },
  editExam(state, exam) {
    state.exams[findIndex(propEq('id', exam.id))] = exam
  },
}

export const actions = {
  addExam({ commit }, exam) {
    commit('addExam', exam)
  },
  deleteExam({ commit }, { id }) {
    commit('deleteExam', id)
  },
  editExam({ commit }, exam) {
    commit('editExam', exam)
  }
}

