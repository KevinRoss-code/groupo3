// import axios from 'axios';
import Vuex from 'vuex'



export default new Vuex.Store({
  state: {
    id: 114,
    title: "test2",
    content: "test2",
    createdAt: "2021-05-31T09:29:09.000Z",
    updatedAt: "2021-05-31T09:29:09.000Z",
    userId: 3,
    commentaires: [
      {
          id: 119,
          text: "Oui",
          createdAt: "2021-06-29T08:53:14.000Z",
          updatedAt: "2021-06-29T08:53:14.000Z",
          articleId: 114,
          userId: 3
      },
      
  ],
    user: {
        id: 3,
        name: "miura",
        surname: "kentaro",
        email: "dr@email.fr",
        password: "$2a$08$LwEmpa6H0fySjayzaCzQ4eyf0J0d/amqU.5BOdKAOxC4mPnJryvXm",
        job: "mangaka",
        createdAt: "2021-05-26T08:55:37.000Z",
        updatedAt: "2021-06-17T13:37:31.000Z",
        
    },
  },
  getters: {
    commentaires: state => {
      return state;
    }
  },
  mutations: {
    ADD_COMMENTAIRES (state, newCommentaires) {
      state.commentaires += newCommentaires
    }
  },

  actions: {
    updateCommentaire ({commit}, newCommentaires) {
      commit('ADD_COMMENTAIRES', newCommentaires)
    }
    // loadCommentaires ({commit}) {
    //   axios.get("http://localhost:3000/api/commentaires", {
    //     headers: {
    //       "Content-type": "application/json",
    //       "x-access-token": localStorage.getItem("user"),
    //     },
    //   }).then(res => res.data)
    //   .then(commentaires => {
    //     console.log(commentaires);
    //     commit('SET_Commentaires', commentaires)
    //   })
    // }
  },
  modules: {
  }
})
