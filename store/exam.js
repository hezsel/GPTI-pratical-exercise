import { findIndex, propEq, reverse, clone } from 'ramda'
import cuid from 'cuid'

const defaultExams = [
  {
    id: '1',
    name: 'Prova 1',
    description: 'Prova 1 de alguma coisa',
    status: 'closed',
    theme: '1',
    startDate: '2021-11-11',
    startTime: '07:00',
    endDate: '2021-11-11',
    endTime: '12:00',
    numberOfQuestions: 1,
    questions: [],
    usersResponses: [],
  },
  {
    id: '2',
    name: 'Prova 2',
    description: 'Prova 2 de alguma coisa',
    status: 'open',
    theme: '1',
    startDate: '2021-11-15',
    startTime: '10:00',
    endDate: '2021-11-15',
    endTime: '22:00',
    numberOfQuestions: 1,
    questions: [],
    usersResponses: [{ userId: '1', questions: [{ question: { id: '', title: '' }, answer: 1}]}],
  },
  {
    id: '3',
    name: 'Prova 3',
    description: 'Prova 3 de alguma coisa',
    status: 'open',
    theme: '1',
    startDate: '2021-11-20',
    startTime: '07:00',
    endDate: '2021-11-20',
    endTime: '19:00',
    numberOfQuestions: 1,
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
  }
}

