import {
  isEmpty,
  find,
  propEq,
  isNil,
  includes,
  reject,
  equals,
  filter,
  findIndex,
  clone,
} from 'ramda'
import cuid from 'cuid'
import ERRORS from '../enum/errors'

const defaultUsers = [
  {
    id: '1',
    username: 'user',
    password: 'user',
    type: 'normal',
    name: 'Gabriel Hoffman',
    registeredThemes: []
  },
  {
    id: '2',
    username: 'admin',
    password: 'admin',
    type: 'admin',
    name: 'Digimon',
  },
]

export const state = () => ({
  registeredUsers: defaultUsers,
  user: {},
  professorsCode: [
    'pro1',
    'pro2',
    'pro3',
    'pro4',
  ],
})

export const getters = {
  getUser: (state) => state.user,
  isLoggedIn: (state) => !isEmpty(state.user),
  students: (state) => filter((user) => user.type === 'normal', state.registeredUsers),
}

export const mutations = {
  setUser: (state, user) => {
    state.user = user
  },
  createUser: (state, userData) => {
    state.registeredUsers.push(userData)
    state.user = userData
  },
  dropProfessorCode: (state, professorCode) => {
    state.professorsCode = reject(equals(professorCode), state.professorsCode)
  },
  updateUser: (state, user) => {
    const userIndex = findIndex(propEq('id', user.id))(state.registeredUsers)
    state.registeredUsers[userIndex] = user
    const registeredUsers = clone(state.registeredUsers)
    state.registeredUsers = registeredUsers
  }
}

export const actions = {
  logout: ({ commit }) => {
    commit('setUser', {})
  },
  login: ({ state, commit }, { username, password }) => {
    const user = find(
      propEq('username', username), 
      state.registeredUsers
    )

    if (isNil(user)) {
      throw new Error (ERRORS.userNotFound.label)
    }

    if (user.password !== password) {
      throw new Error (ERRORS.wrongCredentials.label)
    }

    commit('setUser', user)
  },
  createUser: ({ state, commit }, userData) => {
    const user = find(
      propEq('username', userData.username), 
      state.registeredUsers
    )
    const isValidProfessorCode = includes(
      userData.professorCode, 
      state.professorsCode
    )

    if (!isNil(user)) {
      throw new Error (ERRORS.usernameInvalid.label)
    }

    if (userData.isProfessor && !isValidProfessorCode) {
      throw new Error (ERRORS.professorCodeInvalid.label)
    }

    if (userData.isProfessor) {
      commit('dropProfessorCode', userData.professorCode)
    }

    commit('createUser', {
      id: cuid(),
      name: userData.name,
      username: userData.username,
      password: userData.password,
      type: userData.isProfessor ? 'admin' : 'normal',
    })
  },
  updateUser: ({ commit }, userData) => {
    commit('updateUser', userData)
  },
}
