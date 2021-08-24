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
// import axios from 'axios';
// import Vuex from 'vuex'



// export default new Vuex.Store({
//   state: {
//     articles: []
//   },
//   getters: {
//     commentaires: state => {
//       return state;
//     }
//   },
//   mutations: {
//     ADD_COMMENTAIRES(state, newCommentaires) {
//       console.log(newCommentaires);
//       let article = state.articles.find(elt => elt.id == newCommentaires.articleId);
//       if(!article.commentaires){
//         article.commentaires = [newCommentaires];
//       }else{
//         article.commentaires.push(newCommentaires);
//       }
      
      
//     },
//     ADD_ARTICLE(state, newArticle) {
//       state.articles.push(newArticle);
//     }
//   },

//   actions: {
//     addCommentaire ({commit}, newCommentaires) {
      
//       commit('ADD_COMMENTAIRES', newCommentaires)
//     },
//     addArticle({commit}, newArticle){
//       commit('ADD_ARTICLE', newArticle);
//     }

//     loadCommentaires ({commit}) {
//       axios.get("http://localhost:3000/api/commentaires", {
//         headers: {
//           "Content-type": "application/json",
//           "x-access-token": localStorage.getItem("user"),
//         },
//       }).then(res => res.data)
//       .then(commentaires => {
//         console.log(commentaires);
//         commit('SET_Commentaires', commentaires)
//       })
//     }
//   },
//   modules: {
//   }
// })
