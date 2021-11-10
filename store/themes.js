import { findIndex, propEq, reverse, clone } from 'ramda'
import cuid from 'cuid'

const defaultThemes = [
  {
    id: '1',
    name: 'Banco de dados',
    description: 'tema para provas',
  },
  {
    id: '2',
    name: 'Organização de computadores digitais',
    description: 'tema para provas',
  },
  {
    id: '3',
    name: 'Gestão de projetos',
    description: 'tema para provas',
  },
]

export const state = () => ({
  themes: defaultThemes,
})

export const getters = {
  themes: (state) => reverse(state.themes),
}

export const mutations = {
  addTheme(state, theme) {
    state.themes.push(theme)
  },
  deleteTheme(state, themeId) {
    state.themes.splice(findIndex(propEq('id', themeId)), 1)
    const items = clone(state.themes)
    state.themes = items
  },
  editTheme(state, theme) {
    const indexOfTheme = findIndex(propEq('id', theme.id), state.themes)
    const items = clone(state.themes)
    items[indexOfTheme] = theme
    state.themes = items
  },
}

export const actions = {
  addTheme({ commit }, theme) {
    commit('addTheme', {
      ...theme,
      id: cuid(),
    })
  },
  deleteTheme({ commit }, { id }) {
    commit('deleteTheme', id)
  },
  editTheme({ commit }, theme) {
    commit('editTheme', theme)
  }
}

