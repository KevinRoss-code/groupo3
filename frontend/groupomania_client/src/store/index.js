
import Vuex from 'vuex'



export default new Vuex.Store({
  state: {
    id : "",
    title : "",
    contenu : ""
  },
  getters: {
    formatArticle: state => {
      return `${state.title} : ${state.content}`
    }
  },
  mutations: {
    INCREASE_ID(state) {
      state.id += 1
    }
  },

  actions: {
  },
  modules: {
  }
})
