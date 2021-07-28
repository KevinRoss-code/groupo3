<template>
  <div>
    <button class="btn btn-primary btn-lg" @click="profil">
      Voir le profil
    </button>
    <form class="border border-danger rounded" style="background-color:#f4898d" @submit="envoi">
      <p>Votre article ici : </p>
      <div class="class row">
        <div class="class col-5">
          <label for="title" id="champs_title">titre :</label><br />
          <label for="contenu" id="champs_contenu">contenu :</label>
        </div>
        <div class="class col-5">
          <input type="text" name="title" id="title" v-model="title" /><br />
          <input type="text" name="contenu" id="contenu" v-model="contenu"/><br />
          <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()" />
          <button class="btn btn-danger btn-lg">Poster</button>
        </div>
      </div>
    </form>

  
    <article class="articles" v-for="article in articles" :key="article">
      <Article
        :article="article"
        :commentaires="article.commentaires"
        :user="article.user"
      />
      
    </article>
  </div>
</template>

<script>
import axios from "axios";
import Article from "@/components/Article.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Article
  },
  mounted() {
    this.$store.dispatch("loadArticles");
  },
  computed: {
    ...mapState(["articles"]),
  },
  methods: {
    envoi(e) {
      e.preventDefault();
      let form = document.querySelector("form");
      let formData = new FormData(form);
      formData.append("image", this.file);
      console.log(this.file);
      
      console.log(formData);
      axios
        .post("http://localhost:3000/api/articles", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": localStorage.getItem("user"),
          },
        })
        .then((res) => {
          console.log("res data then", res.data);
          this.loadArticles();
        })
        .catch((err) => {
          console.log(err);
  
        });
    },
    onChangeFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file)
    },
    profil() {
      this.$router.push({ path: "Profil" });
    },
    ...mapActions(["loadArticles"]),
  },
};
</script>
<style>
form{
  padding: 2%;
  margin: 2%;
}
label{
  margin: 1%;
}
input{
  margin: 1%;
}

</style>