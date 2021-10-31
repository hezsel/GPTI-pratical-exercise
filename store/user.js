import {
  isEmpty,
  find,
  propEq,
  isNil,
} from 'ramda'
import ERRORS from '../enum/errors'

const defaultUsers = [
  {
    id: '1',
    username: 'estudante',
    password: 'password',
    type: 'normal',
    name: 'Estudante',
  },
  {
    id: '2',
    username: 'professor',
    password: 'password',
    type: 'admin',
    name: 'Professor',
  },
]

export const state = () => ({
  registeredUsers: defaultUsers,
  user: defaultUsers[1],
})

export const getters = {
  getUser: (state) => state.user,
  isLoggedIn: (state) => !isEmpty(state.user),
}

export const mutations = {
  setUser: (state, user) => {
    state.user = user
  },
}

export const actions = {
  logout: ({ commit }) => {
    commit('setUser', {})
  },
  login: ({ state, commit }, { username, password }) => {
    const user = find(propEq('username', username), state.registeredUsers)

    if (isNil(user)) {
      throw new Error (ERRORS.userNotFound.value)
    }

    if (user.password !== password) {
      throw new Error (ERRORS.wrongCredentials.value)
    }

    commit('setUser', user)
  },
}
