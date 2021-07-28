<template>
    <div>
       <div class="bordereau">
      
        <p>Bienvenu sur votre réseau</p>
    
      <img alt="Vue logo" src="../assets/icon-above-font.png">
    
    </div>
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
.bordereau{
  border: double #ce323a;
  margin-left: 20%;
  margin-right: 20%;
  padding: 2%;
  background-color: white;
}
</style>