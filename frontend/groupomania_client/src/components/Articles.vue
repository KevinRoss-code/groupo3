<template>
  <div>
    <div id="formulaireArticle">
      <form id="formulaireArticle" @submit="envoi">
        <label for="title" id="champs_title">titre :</label>
        <input type="text" name="title" id="title" v-model="title" /><br />
        <label for="contenu" id="champs_contenu">contenu :</label>
        <input type="text" name="contenu" id="contenu" v-model="contenu" /><br/>
        <button>Poster</button>
      </form>
    </div>

    <div v-for="article in articles" :key="article" id="articles">
      <Article
        :commentaires="article.commentaires"
        :article="article"
        :user="article.user"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Article from "@/components/Article.vue";

export default {
  components: {
    Article,
  },
  data() {
    return {
      articles: [],
    };
  },

  created() {
    axios
      .get("http://localhost:3000/api/articles", {
        headers: {
          "Content-type": "application/json",
          "x-access-token": localStorage.getItem("user"),
        },
      })
      .then((response) => {
        this.articles = response.data;
        console.log(response.data);
      });
  },

  methods: {
    envoi(e) {
      e.preventDefault();
      let form = document.querySelector("form");
      let formData = new FormData(form);
      let data = {
        title: formData.get("title"),
        contenu: formData.get("contenu"),
      };
      console.log(data);
      axios
        .post("http://localhost:3000/api/articles", data, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("user"),
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // envoiCom(e, form) {
    //     e.preventDefault();
    //             console.log
    //             let formData = new FormData(form);
    //             let data = {
    //                 text: formData.get("text"),
    //                 articleId: formData.get("idArticle")
    //             };
    //             console.log(data);
    //             axios.post("http://localhost:3000/api/commentaires", data, {
    //                 headers: {
    //                 "Content-Type": "application/json",
    //                 'x-access-token' : localStorage.getItem('user')
    //                 },
    //             })
    //             .then((res) => {
    //                 console.log(res.data);
    //                 //mettreà jour le state

    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //         },
  },
};
</script>
<style>
#formulaireArticle {
    text-align: center;
}
#title {
    margin-left: 5%;
}
#contenu {
    margin-left: 3.3%;
    margin-top: 2%;
    margin-bottom: 2%;
}
#articles {
    text-align: center;
    border: 1px solid black;
    width: 30%;
    margin: 2%;
    margin-left: 35%;
}
</style>