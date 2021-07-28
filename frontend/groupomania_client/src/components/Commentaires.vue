<template>
  <div>
      <CommentaireForm :articleId="article"/> 
    <div v-for="commentaire in commentaires" :key="commentaire">
      <div class="row border border-danger rounded" id="com">
        <div class="col-12">
          {{commentaire.user.name}} {{commentaire.user.surname}}<br/>
      {{ commentaire.text }}<br />
      {{ commentaire.updatedAt }}
        </div>
      
      
      
        <button v-on:click="showEditForm" class="modif btn btn-primary btn-lg">Modifier</button>
        <button v-on:click="supprimerCom(commentaire.id)" class="btn btn-danger btn-lg">Supprimer</button>
        <form v-if="showForm === true" @submit="modifierCom(commentaire.id)">
          <div class="class row">
            <div class="class col-2"><label for="text" id="champs_text">text :</label></div>
            <div class="class col-5"><input type="text" name="text" id="text" v-model="text" /></div>
            <div class="class col-3"><button class="btn btn-success btn-lg">Enregistrer</button></div>
          </div>
        </form>
       
      </div>
    </div>
    
      
      
    
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
      commentaire: [null],
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
          this.loadArticles();
        })
        .catch((err) => {
          console.log(err);
           this.loadArticles();
        });
    },
    modifierCom(id) {
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
          this.loadArticles();
        })
        .catch((err) => {
          console.log(err); 
          this.loadArticles();
         
        });
    },
  ...mapActions(["loadArticles"])
  },
};
</script>
<style scoped>
#com{
  font-size: 1.5rem;
  text-align: center;
  width: 70%;
  margin: 1%;
  margin-left: 15%;
  background-color: #f6b1b4;
}
button{
  margin: 1%;
}
.modif{
margin-left: 34%;
}
#text{
  padding-right: 20%;
}
</style>