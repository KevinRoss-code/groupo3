<template>
    <div class="appli">
       <!--<img alt="Vue logo" src="../assets/icon-above-font.png">-->
       <Articles/> 
       
    </div>
</template>

<script>
import Articles from '@/components/Articles.vue'


export default {
    name: 'MurAppli',
    components: {
        Articles,
    }
}
</script>
<style scoped>
img{
  width: 30%;
}
</style>