<template>
<div>
    <!-- <div>{{articleContent.title}}</div>
    <div>{{articleContent.content}}</div>
    <div>{{}}</div>-->
    <!-- <div>{{article[0]}}</div> -->
    <p>Titre : {{article.title}}</p>
    <p>Contenu : {{article.content}} <br/>
        {{article.updatedAt}}
    </p>
    <div v-for="commentaire in commentaires" :key="commentaire"><p>commentaire: {{commentaire.text}}</p>
    <p>nom : {{user.name}}</p>
    <p>{{commentaire.createdAt}}</p>
    </div>
    <form id="formCommentaire" @submit="envoiCom">
        <label for="text" id="champText">Ajouter un commentaire: </label>
        <input type="text" name="text" id="text" v-model="text"/>
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
    }
},
methods: {
    envoiCom(e) {
        e.preventDefault();
                let form = document.querySelector('form');
                let formData = new FormData(form);
                let data = {
                    text: formData.get("text")
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
                })
                .catch((err) => {
                    console.log(err)
                })
            }
    }
}
    

</script>