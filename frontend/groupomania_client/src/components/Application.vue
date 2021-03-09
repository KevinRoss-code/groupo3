<template>
  <div>
      <div id="profil">
          <p v-for="profil in user" :key="profil.name">
              {{profil.name}}
             {{ profil.surname}}
              {{profil.job}}
          </p>
      </div>
    <div id="nav">
      <li v-for="article in articles" :key="article.contenu">
        {{ article.contenu }}
      </li>
    </div>
    <div>
      <form id="publication" @submit="envoie">
        <textarea v-model="contenu" name="contenu"></textarea>
        <button type="submit" @click="sendAffiche">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Application",
  data() {
    return {
      articles: [{ contenu: "" }],
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
    /*this.profil();*/
  },
};
</script>
<style>
textarea {
  margin-bottom: 5%;
  margin-left: 21%;
  margin-right: 20%;
}
button {
  margin-left: 30%;
  margin-right: 30%;
}
</style>