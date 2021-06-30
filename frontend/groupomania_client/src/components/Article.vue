<template>
  <div>
    <div id="article">
      <p>Titre : {{ article.title }}</p>
      <p>Contenu : {{ article.content }}</p>
      <br />
      <!-- <p>Auteur: {{ article.user.name}} {{ article.updatedAt }}</p> -->
      <button v-on:click="showEditForm">Modifier</button>
      <form v-if="showForm === true" @submit="modifier">
        <label for="title" id="champs_title">titre :</label>
        <input type="text" name="title" id="title" v-model="title" /><br />
        <label for="contenu" id="champs_contenu">contenu :</label>
        <input type="text" name="contenu" id="contenu" v-model="contenu"/><br />
        <button>Enregistrer</button>
      </form>
      <button v-on:click="supprimer">Supprimer</button>
    </div>

   
      
    
    
  </div>
</template>
<script>
import axios from "axios";


export default {
  data() {
    return {
      articles: [],
      showForm: false,
    };
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
    commentaires: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showEditForm() {
      this.showForm = true;
    },
    modifier(e) {
      e.preventDefault();

      let data = {
        title: this.title,
        contenu: this.contenu,
      };
      console.log(data);
      let token = localStorage.getItem("user");
      console.log(token);
      let config = {
        headers: {
          "x-access-token": `${token}`,
        },
      };
      let id = this.article.id;
      axios
        .put("http://localhost:3000/api/articles/" + `${id}`, { data }, config)
        .then((res) => {
          console.log(res.data);
          this.$emit("get-all");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    supprimer() {
      let token = localStorage.getItem("user");
      console.log(token);
      let config = {
        headers: {
          "x-access-token": `${token}`,
        },
      };
      let id = this.article.id;
      console.log(id);
      axios
        .delete("http://localhost:3000/api/articles/" + `${id}`, config, {})
        .then((res) => {
          console.log(res);
          this.$emit("get-all");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
  },
};
</script>
<style scoped>
#article {
  border: 1px solid black;
}
#commentaire {
  border: 1px solid black;
}
</style>