<template>
  <div id="article">
   <div class="border border-danger rounded">
<img :src="article.imageUrl" alt="" class="rounded">
      <p>Titre : {{ article.title }}</p>
      <p>Contenu : {{ article.content }}</p>
      <p>auteur : {{article.user.name}} {{article.user.surname}}</p>
      
      <button v-on:click="showEditForm" class="modif btn btn-primary btn-lg">Modifier</button>
      <form v-if="showForm === true" @submit="modifier">
        <div class="row">
          <div class='col-2'>
            <label for="title" id="champs_title">titre :</label>
          </div>
          <div class='col-4'>
            <input type="text" name="title" id="title" v-model="title" />
          </div>
          <div class="col-2">
            <label for="contenu" id="champs_contenu">contenu :</label>
          </div>
          <div class="col-4">
            <input type="text" name="contenu" id="contenu" v-model="contenu"/>
          </div>
          <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()" />
        </div>
        <button class="btn btn-primary btn-lg">Enregistrer</button>
      </form>
      <button v-on:click="supprimer" class="btn btn-danger btn-lg">Supprimer</button>
      <Commentaires
        :article="article.id"
        :commentaires="article.commentaires"
      />
</div>
</div>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";
import Commentaires from "@/components/Commentaires.vue";

export default {
  components: {
    Commentaires,
  },
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
      let form = document.querySelector("form");
      let formData = new FormData(form);
      formData.append("image", this.file);
      let token = localStorage.getItem("user");
      console.log(token);
      let config = {
        headers: {
          "x-access-token": `${token}`,
        },
      };
      let id = this.article.id;
      axios
        .put("http://localhost:3000/api/articles/" + `${id}`, formData, config)
        .then((res) => {
          console.log(res.data);
          this.loadArticles();
        })
        .catch((err) => {
          console.log(err);
          this.loadArticles();
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
          this.loadArticles();
        })
        .catch((err) => {
          console.log(err);
          this.loadArticles();
        });
    },
    onChangeFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file)
      },
    ...mapActions(["loadArticles"])
  },
};
</script>
<style scoped>
img{
  width: 30%;
  margin-top: 1%;
  margin-left: 35%;
}
button{
  margin: 1%;
}
.modif{
  margin-left: 39%;
}
#article{
  padding: 2%;
}
.border{
 background-color: #f28185;
}
</style>