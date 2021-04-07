<template>
  <!--<div>
    <form id="article" @submit="pushArticle">
      <label id='champTitle' for="title">Titre:</label>
      <input type="text" v-model="title" name="title" id="title"><br/>
      <input v-model="contenu" name="contenu"><br/>
      <button type="submit" @click="envoyer">Poster</button>
    </form>
  </div>-->
  
  
    <article >
    <p>{{$store.getters.formatArticle}}</p>
      
    
  </article>
  

  
 
  
 
     
</template>

<script>
import axios from "axios";

export default {
  name: "Application",
  
  data(){
    return {
      
        title: "", contenu: ""
      
      
      
    };
  },
  methods: {
    /*envoyer(e) {
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
          //this.articles.push(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
        
    },*/

    affichage(){
    axios.get("http://localhost:3000/api/articles", {
      headers: {
            "Content-Type": "application/json",
            "x-access-token" : localStorage.getItem("user")
        },
    }).then(res => (this.articles = res.data)
    )
  },
  /*post(e) {
      e.preventDefault();
      //recuperer le bon formulaire faire plusieurs compoment article et sur commentaire
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
  },*/

  },
  
  
}

</script>
<style>

</style><!--<form @submit="post">
      <textarea v-model="text" name="text"></textarea><br/>
      <input type="hidden" name="articleId" :value=article.id>
      <button type="submit">Poster</button>
    </form>
    <div v-for="commentaire in commentaires" :key="commentaire">
      
        <p>commentaires: {{commentaire.text}}</p>
    </div>
    </div>-->