<template>
  <div>
    <form id="article" @submit="pushArticle">
      <label id='champTitle' for="title">Titre:</label>
      <input type="text" v-model="title" name="title" id="title"><br/>
      <textarea v-model="contenu" name="contenu">Vous pouvez écrire votre article ici</textarea><br/>
      <button type="submit" @click="envoyer">Poster</button>
    </form>
  </div>
 
  <div v-for="article in articles" :key="article">
    <p>Titre: {{article.title}}</p>
    <p>contenu: </p>
    <form id="commentaire" @submit="pushCommentaire">
      <textarea v-model="text" name="text">Vous pouvez écrire votre commentaire ici</textarea><br/>
      <input type="hidden" name="articleId" :value=article.id>
      <button type="submit" @click="post">Poster</button>
    </form>
  </div>
  <div v-for="commentaire in commentaires" :key="commentaire">
      
        <p>commentaires: {{commentaire.text}}</p>
    </div>
  <div>
    
  </div>
  <div v-for="user in users" :key="user">
     
    <p> {{user}}</p>
  </div>
     
</template>

<script>
import axios from "axios";
export default {
  name: "Application",
  data(){
    return {
      articles: [{title: "", contenu: ""}],
      commentaires: [{text: ""}],
      users: [{}]
    };
  },
  methods: {
    envoyer(e) {
      e.preventDefault();
      let form = document.getElementById('article');
      let formData = new FormData(form);
      let data = {
        title: formData.get('title'),
        contenu: formData.get('contenu')
      };
      console.log(data);
      axios.post("http://localhost:3000/api/articles", data, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token" : localStorage.getItem("user")
    
          },
        })
        .then((res) => {
          console.log(res.data);
          this.articles.push(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    affichage(){
    axios.get("http://localhost:3000/api/articles", {
      headers: {
            "Content-Type": "application/json",
            "x-access-token" : localStorage.getItem("user")
        },
    }).then(res => (this.articles = res.data)
    )
  },
  post(e) {
      e.preventDefault();
      let form = document.getElementById('commentaire');
      let formData = new FormData(form);
      let data = {
        text: formData.get('text'),
        articleId: formData.get('articleId')
      };
      console.log(data);
      axios.post("http://localhost:3000/api/commentaires", data, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token" : localStorage.getItem("user")
    
          },
        })
        .then((res) => {
          console.log(res.data);
          this.commentaires.push(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    affichageCom(){
    axios.get("http://localhost:3000/api/commentaires", {
      headers: {
            "Content-Type": "application/json",
            "x-access-token" : localStorage.getItem("user")
        },
    }).then(res => (this.commentaires = res.data))
  },
  affichageUser(){
    axios.get("http://localhost:3000/api/user/", {
      headers: {
            "Content-Type": "application/json",
            "x-access-token" : localStorage.getItem("user")
        },
    }).then(res => ( this.users = res.data))
  },

  }
  
}

/*import axios from "axios";
export default {
  name: "Application",
  data() {
    return {
      articles: [{title: "", contenu: "" }],
      user: [{ name: '', surname: '', job: ""}]
    };
  },
  methods: {
    envoie(e) {
      e.preventDefault();
      let form = document.querySelector("form");
      let formData = new FormData(form);
      let data = {
        contenu: formData.get("contenu"),
        
      };
      console.log(data);
      axios
        .post("http://localhost:3000/api/articles", data, {
          headers: {
            "Content-Type": "application/json",
    
          },
        })
        .then((res) => {
          console.log(res.data);
          this.articles.push(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    affichage() {
      axios
        .get("http://localhost:3000/api/articles")
        .then((res) => {
          this.articles = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  profil(){
      axios.get("http://localhost:3000/api/user")
      .then((res) => {
          this.user = res.data;
      })
      .catch((err) => {
          console.log(err)
      });
  },
  mounted() {
    this.affichage();
    this.profil();
  },
};*/
</script>
<style>

</style>