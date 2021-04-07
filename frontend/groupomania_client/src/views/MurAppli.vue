<template>
    <div class="appli">
       <!--<img alt="Vue logo" src="../assets/icon-above-font.png">-->
       <Article/> 
    </div>
</template>

<script>
import Article from '@/components/Article.vue'

export default {
    name: 'MurAppli',
    components: {
        Article
    }
}
</script>
<style scoped>
img{
  width: 30%;
}
</style>