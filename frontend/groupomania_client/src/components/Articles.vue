<template>
  <div>
    <button @click="profil">
      Voir le profil
    </button>

      <div id="formulaireArticle">
      
        <form id="formulaireArticle" @submit="envoi">
        <label for="title" id="champs_title">titre :</label>
        <input type="text" name="title" id="title" v-model="title" /><br />
        <label for="contenu" id="champs_contenu">contenu :</label>
        <input type="text" name="contenu" id="contenu" v-model="contenu" /><br/>
        <button>Poster</button>
      </form>
   </div>
  {{title}}<br/>
  {{content}}<br/>
  {{createdAt}}<br/>
  {{updatedAt}}<br/>
  {{user.name}}<br/>
  {{user.surname}}
  <Commentaires/>
    <!-- <article class="articles" v-for="article in articles" :key="article">
      <Article
        :article="article"
        :commentaires="article.commentaires"
        :user="article.user"
        @get-all="getAll"
      />
        <Commentaires
    :article="article.id"
    :commentaires="article.commentaires"
    />   
     </article> -->
     
  </div>
</template>

<script>
import axios from "axios";
// import Article from "@/components/Article.vue";
 import Commentaires from "@/components/Commentaires.vue";
 import { mapState } from 'vuex';




export default {
   components: {
    //  Article,
     Commentaires
   },
  data() {
 
      return {
      articles: [],
    };
  },
  computed: {
    ...mapState(["title", "content", "createdAt", "updatedAt", "user"])
  },
  // created() {
  //   axios
  //     .get("http://localhost:3000/api/articles", {
  //       headers: {
  //         "Content-type": "application/json",
  //         "x-access-token": localStorage.getItem("user"),
  //       },
  //     })
  //     .then((response) => {
  //       this.articles = response.data;
  //       console.log(response.data);
        
  //     });
  // },

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
          this.getAll();
        })
        .catch((err) => {
          console.log(err);
        });
    },
      
   getAll(){
     console.log("hello")
    axios
      .get("http://localhost:3000/api/articles/", {
        headers: {
          "Content-type": "application/json",
          "x-access-token": localStorage.getItem("user"),
        },
      })
      .then((response) => {
        this.articles = response.data;
        console.log(response.data);
        // this.$emit("supprimer", "envoiCom");
      });
   },
   profil(){
      this.$router.push({ path: "Profil" });
   },
     
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
.articles {
    text-align: center;
    border: 1px solid black;
    width: 30%;
    margin: 2%;
    margin-left: 35%;
}
</style>