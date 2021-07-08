<template>
    <div>
         <form id="formCommentaire" @submit="envoiCom">
      <label for="text" id="champText">Ajouter un commentaire: </label>
      <input type="text" name="text" id="text" v-model="text" />
      <input type="hidden" name="idArticle" :value="articleId" />
      <button>Ajouter</button>
    </form>
  <!-- <form id="formCommentaire" >
      <label for="text" id="champText">Ajouter un commentaire: </label>
      <input type="text" name="text" id="text" v-model="text" />
      <input type="hidden" name="idArticle" :value="articleId" />
      <button @click="updateCommentaire">Ajouter</button>
  </form> -->
    </div>
</template>
<script>
import {mapActions} from 'vuex';
import axios from "axios";

export default {
    data() {
    return {
      articles: [],
    };
  },
  props: {
    articleId: {
      type: Number,
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
    // ...mapActions(["updateCommentaire"])
    envoiCom(e) {
      e.preventDefault();
      let form = e.target;
      console.log(form);
      let formData = new FormData(form);
      let data = {
        text: formData.get("text"),
        articleId: formData.get("idArticle"),
      };
      console.log(data);
      axios
        .post("http://localhost:3000/api/commentaires", data, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("user"),
          },
        })
        .then((res) => {
          console.log(res.data);
           this.addCommentaire(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
     ...mapActions(['addCommentaire'])
   }
}
</script>