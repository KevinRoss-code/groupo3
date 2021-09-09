<template>
  <div>
      <CommentaireForm :articleId="article"/> 
    <div v-for="commentaire in commentaires" :key="commentaire">
      <div class="row border border-danger rounded" id="com">
        <div class="col-12">
          {{commentaire.user.name}} {{commentaire.user.surname}}<br/>
      {{ commentaire.text }}<br />
        </div>
      
      
      
        <button v-on:click="(event) => showEditForm(event.target)" :data-id="commentaire.id" class="modif btn btn-primary btn-lg" v-show="showButtomComEdit(commentaire.user.id)">Modifier</button>
        <form v-if="(showForm === true) && (idComment == commentaire.id)" @submit="(e) => modifierCom(e, commentaire.id)">
          <div class="class row">
            <div class="class col-2"><label for="text" id="champs_text">text :</label></div>
            <div class="class col-5"><input type="text" name="text" id="text" v-model="text" /></div>
            <div class="class col-3"><button class="btn btn-success" id="boutonEnregistrer">Enregistrer</button></div>
          </div>
        </form>
       <button v-on:click="supprimerCom(commentaire.id)" class="btn btn-danger btn-lg" v-show="showButtomComEdit(commentaire.user.id)">Supprimer</button>
      </div>
    </div>
    
      
      
    
   </div> 
</template>
<script>
import axios from "axios";
 import CommentaireForm from "./CommentaireForm.vue"
import { mapActions, mapState } from 'vuex';
 export default { 
  components: {
    CommentaireForm
  },
  computed: {
    ...mapState(['userId', "isAdmin"])
  },
  data() {
    return {
      articles: [],
      commentaire: [null],
      showForm: false,
      showBouton: true,
      idComment: 0
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
    console.log("yo")
      this.showBouton = this.showButtomComEdit();
    },
  methods: {
    showEditForm(target) {

       this.showForm = true;
       this.idComment = target.dataset.id;
       console.log(target.dataset.id)
    },
    showButtomComEdit(id){
                let userId = this.userId;
                let isAdmin = this.isAdmin
                // console.log(userId);
                // console.log(id)
                console.log("isUserPost", userId === id);
                if((userId === id) || isAdmin){
                  return this.showBouton = true;
                 }else{
                  return this.showBouton = false;
                }
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
    modifierCom(e, id) {
      e.preventDefault();
      let data = {
        text: this.text,
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
#boutonEnregistrer{
  margin-left: 150%;
}
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