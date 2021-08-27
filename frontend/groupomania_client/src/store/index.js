import axios from 'axios'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    articles: [],
    userId: 0,
    isAdmin: false
  },
  getters: {
    articles: state => {
      return state.articles
    }, 
    userId: state => {
      return state.userId
    },
    isAdmin: state => {
      return state.isAdmin
    }
  },
  mutations: {
    SET_Articles (state, articles) {
      state.articles = articles
    },
    SET_User_Id (state, userId) {
      state.userId = userId
    },
    SET_Is_Admin (state, isAdmin) {
      state.isAdmin = isAdmin
    }
  },
  actions: {
    loadArticles ({commit}) {
            axios.get("http://localhost:3000/api/articles", {
              headers: {
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem("user"),
              },
            }).then(res => res.data)
            .then(articles => {
              console.log(articles);
              commit('SET_Articles', articles)
            })
          },
          userId ({commit}) {
            commit('SET_User_Id')
          },
          isAdmin ({commit}) {
            commit('SET_Is_Admin')
          }
  }
})
