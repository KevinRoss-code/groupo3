<template>
    <div class="appli">
       <!--<img alt="Vue logo" src="../assets/icon-above-font.png">-->
       <Application/> 
    </div>
</template>

<script>
import Application from '@/components/Application.vue'

export default {
    name: 'MurAppli',
    components: {
        Application
    }
}
</script>
<style scoped>
img{
  width: 30%;
}
</style>