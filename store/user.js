import {
  isEmpty,
  find,
  propEq,
  isNil,
} from 'ramda'
import ERRORS from '../enum/errors'

export const state = () => ({
  user: {
    name: 'teste'
  },
  registeredUsers: [
    {
      username: 'estudante',
      password: 'password',
      type: 'normal',
      name: 'Estudante',
    },
    {
      username: 'professor',
      password: 'password',
      type: 'admin',
      name: 'Professor',
    },
  ],
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

