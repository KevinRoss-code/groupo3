<template>
<div id="aa">
    {{articles}}
</div>
</template>

<script>

import axios from 'axios'

export default {
    
    data () {
        return {
            
            articles : null
            
        }
    },
    
    methods: {
        
        mouted () {
        axios.get("http://localhost:3000/api/articles", {
            headers: {
                "Content-type" : "application/json",
                'x-access-token' : localStorage.getItem('user')
            }
        }).then((responce) => {
            this.articles = responce.data
            
            })
    },
    beforeMouted(){
        this.mouted()
    }
    
    }
    

    
}
</script>
