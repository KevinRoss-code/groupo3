import axios from 'axios'
import Vuex from 'vuex'



export default new Vuex.Store({
  state: {
    articles: [],
  },
  getters: {
    articles: state => {
      return state.articles
    }
  },
  mutations: {
    SET_Articles (state, articles) {
      state.articles = articles
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
              commit('SET_Article', articles)
            })
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
