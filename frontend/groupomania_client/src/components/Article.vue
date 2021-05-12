<template>
<div>
    <div id="article">
        <p>Titre : {{article.title}}</p>
    <p>Contenu : {{article.content}}</p> <br/>
    <p>Auteur: {{user.name}} {{article.updatedAt}}</p>
    <button @submit="modifier">Modifier</button>
    <button v-on:click="supprimer">Supprimer</button>
     
    </div>
    
    
    <div v-for="commentaire in commentaires" :key="commentaire" id="commentaire">
        <p>commentaire: {{commentaire.text}}</p>
    <p>nom : {{user.name}}</p>
    <p>{{commentaire.createdAt}}</p>
    </div>
    <form id="formCommentaire" @submit="envoiCom">
        <label for="text" id="champText">Ajouter un commentaire: </label>
        <input type="text" name="text" id="text" v-model="text"/>
        <input type="hidden" name="idArticle" :value="article.id">
        <button>Ajouter</button>
    </form>
</div>
   
    
</template>
<script>

import axios from "axios";

export default {

data() {
    return {};
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
    user : {
        type: Object,
        required: true,
    },
},
methods: {
    envoiCom(e) {
        e.preventDefault();
                let form = document.getElementById("formCommentaire");
                let formData = new FormData(form);
                let data = {
                    text: formData.get("text"),
                    articleId: formData.get("idArticle")
                };
                console.log(data);
                axios.post("http://localhost:3000/api/commentaires", data, {
                    headers: {
                    "Content-Type": "application/json",
                    'x-access-token' : localStorage.getItem('user')
                    },
                })
                .then((res) => {
                    console.log(res.data);
                    this.$emit("get-all");

                })
                .catch((err) => {
                    console.log(err)
                })
            },
            modifier() {
                let token = localStorage.getItem('user');
                console.log(token)
                let config = {
                    headers: {
                       "x-access-token": `${token}`,
                    },
                };
                let id = this.article.id;
                axios.put("http://localhost:3000/api/articles/" + `${id}`, config,  {
                    header: {
                    "Content-Type": "application/json",
                    'x-access-token' : localStorage.getItem('user')
                    },
                }).then((res) => {
                    console.log(res.data);
                })
                 .catch((err) => {
                     console.log(err)
                 })
            },
            supprimer() {
                let token = localStorage.getItem('user');
                console.log(token)
                let config = {
                    headers: {
                       "x-access-token": `${token}`,
                    },
                };
                let id = this.article.id;
                console.log(id);
                axios.delete("http://localhost:3000/api/articles/" + `${id}`, config, {
                }).then((res) => {
                console.log(res);
                this.$emit("get-all");
                }).catch((err) => {
                    console.log(err)
                })
            }
            
    },
}
    

</script>
<style scoped>
#article{
    border: 1px solid black;
}
#commentaire{
    border: 1px solid black;
}
</style>