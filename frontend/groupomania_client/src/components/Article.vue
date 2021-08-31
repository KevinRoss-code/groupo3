<template>
  <div>
    <div class="border border-danger rounded" id="article">
      <img :src="article.imageUrl" alt="" class="rounded" />
      <p>Titre : {{ article.title }}</p>
      <p>Contenu : {{ article.content }}</p>
      <p>
        auteur : {{ article.user.name }} {{ article.user.surname }}
      </p>

      <button button v-on:click="showEditForm" class="modif btn btn-primary btn-lg" v-show="showBouton">
        Modifier
      </button>
      <form v-if="showForm === true" @submit="modifier">
        <div class="row">
          <div class="col-2">
            <label for="title" id="champs_title">titre :</label>
          </div>
          <div class="col-4">
            <input type="text" name="title" id="title" v-model="title" />
          </div>
          <div class="col-2">
            <label for="contenu" id="champs_contenu">contenu :</label>
          </div>
          <div class="col-4">
            <input type="text" name="contenu" id="contenu" v-model="contenu" />
          </div>
          <input
            type="file"
            id="file"
            ref="file"
            v-on:change="onChangeFileUpload()"
          />
        </div>
        <button class="btn btn-primary btn-lg">Enregistrer</button>
      </form>
      <button v-on:click="supprimer" class="btn btn-danger btn-lg" v-show="showBouton">
        Supprimer
      </button>
      <Commentaires
        :article="article.id"
        :commentaires="article.commentaires"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
import Commentaires from "@/components/Commentaires.vue";

export default {
  components: {
    Commentaires,
  },
  computed: {
    ...mapState(["userId", "isAdmin"]),
  },
  data() {
    return {
      articles: [],
      showForm: false,
      showBouton: true,
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
  beforeMount() {
    this.showBouton = this.showButtomEdit();
  },
  methods: {
    showEditForm() {
      this.showForm = true;
    },
    showButtomEdit() {
      let userId = this.userId;
      let isAdmin = this.isAdmin;
      let article = this.article.user.id;
      if (userId === article || isAdmin) {
        return (this.showBouton = true);
      } else {
        return (this.showBouton = false);
      }
    },
    modifier(e) {
      e.preventDefault();
      let form = e.target;
      console.log(form);
      let formData = new FormData(form);
      formData.append("image", this.file);
      console.log(this.file);

      console.log(formData.get("image"));
      let token = localStorage.getItem("user");
      console.log(token);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": `${token}`,
        },
      };
      let id = this.article.id;
      axios
        .put(`http://localhost:3000/api/articles/${id}`, formData, config)
        .then((res) => {
          console.log(res.data);
          this.loadArticles();
        })
        .catch((err) => {
          console.log(err);
          this.loadArticles();
        });
    },
    onChangeFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
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
    ...mapActions(["loadArticles"]),
  },
};
</script>
<style scoped>
img {
  width: 30%;
  margin-top: 1%;
  margin-left: 35%;
}
button {
  margin: 1%;
}
.modif {
  margin-left: 39%;
}
#article {
  padding: 2%;
  margin: 2%;
}
.border {
  background-color: #f28185;
}
</style>