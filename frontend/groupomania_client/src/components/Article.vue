<template>


<button @click="affichage">go</button>
<div class="ui articles">
    {{articles}}
</div>
  <div>Les articles</div>  
</template>

<script>

import axios from 'axios'

export default {
    data () {
        return {
            
            articles : []
            
        }
    },
    props: {
        id: Number,
        model: String
    },
    methods: {
        affichage () {
        axios.get("http://localhost:3000/api/articles").then((responce) => {
            this.articles = responce.data
            })
    }
    }
    
}
</script>
