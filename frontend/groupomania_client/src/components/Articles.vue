<template>
<form id="formulaireArticle" @submit="envoi">
<label for="title" id="champs_title">titre :</label>
<input type="text" name="title" id="title" v-model="title"/><br/>
<label for="contenu" id="champs_contenu">contenu :</label>
<input type="text" name="contenu" id="contenu" v-model="contenu"/>
<button>Poster</button>
</form>
<div v-for="article in articles" :key="article">
   <Article :commentaires="article.commentaires" :article="article" :user="article.user"/>
</div>

</template>

<script>

import axios from 'axios'
import Article from '@/components/Article.vue'

export default {
    components : {
        Article
    },
    data () {
        return {
            
            articles : []
            
        }
    },
    
        created() {
            axios.get("http://localhost:3000/api/articles", {
            headers: {
                "Content-type" : "application/json",
                'x-access-token' : localStorage.getItem('user')
            }
        }).then((response) => {
            this.articles = response.data
            console.log(response.data);
            })
        },

        methods: {
            envoi(e) {
                e.preventDefault();
                let form = document.querySelector('form');
                let formData = new FormData(form);
                let data = {
                    title: formData.get("title"),
                    contenu: formData.get('contenu')
                }
                console.log(data);
                axios.post("http://localhost:3000/api/articles", data, {
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
