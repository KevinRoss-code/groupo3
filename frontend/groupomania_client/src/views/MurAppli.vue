<template>
    <div class="appli">
       
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