export const state = () => ({
  todos: []
})
export const mutations = {
  setItem (state, text) {
    console.log('mutations/setItem', text);
    state.todos.push(text);
  }
}
export const getters = {
  todoList(state) {
    return state.todos;
  },
}
export const actions = {
  add({ commit }, text) {
    console.log('actions/add', text);
    commit('setItem', text);
  },
}
