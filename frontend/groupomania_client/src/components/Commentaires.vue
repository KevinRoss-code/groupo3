<template>
  <div>

    <div v-for="commentaire in commentaires" :key="commentaire">
      text: {{ commentaire.text }}<br />
      {{ commentaire.updatedAt }}
      <div> 
        <button v-on:click="showEditForm">Modifier</button>
        <form v-if="showForm === true" @submit="modifierCom(commentaire.id)">
          <label for="text" id="champs_text">text :</label>
          <input type="text" name="text" id="text" v-model="text" /><br />
          <button>Enregistrer</button>
        </form>
        <button v-on:click="supprimerCom(commentaire.id)">Supprimer</button>
      </div>
    </div>
    <CommentaireForm :articleId="article"/> 
    <!-- <CommentaireForm
    :articleId="article"
    />
    <div v-for="commentaire in commentaires" :key="commentaire">
      text: {{ commentaire.text }}<br />
      {{commentaire.user.name}}
      {{ commentaire.updatedAt }}
       <auteur: {{ commentaire.user.name }} {{ commentaire.updatedAt }} 
      -->
      
      
      
    
   </div> 
</template>
<script>
import axios from "axios";
 import CommentaireForm from "./CommentaireForm.vue"
import { mapActions } from 'vuex';
 export default { 
   computed: {
     
   },
  components: {
    CommentaireForm
  },
  data() {
    return {
      articles: [],
      commentaire: [null]
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
    
    
    supprimerCom(id) {
      let token = localStorage.getItem("user");
      console.log(token);
      let config = {
        headers: {
          "x-access-token": `${token}`,
        },
      };
      console.log(id);
      axios
        .delete("http://localhost:3000/api/commentaires/" + `${id}`, config, {})
        .then((res) => {
          console.log(res);
          this.$emit("get-all");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    modifierCom(id) {
      // e.preventDefault();
      let data = {
        text: this.text,
        articleId: '1',
      };
      console.log(data);
      let token = localStorage.getItem("user");
      console.log(token);
      let config = {
        headers: {
          "x-access-token": `${token}`,
        },
      };
      axios
        .put(
          "http://localhost:3000/api/commentaires/" + `${id}`,
          { data },
          config
        )
        .then((res) => {
          console.log(res.data);
          //this.$emit("get-all");
          //this.addCommentaire(res.data);
        })
        .catch((err) => {
          console.log(err);
         
        });
    },
  ...mapActions(["addCommentaire"])
  },
};
</script>
<style scoped>
</style>