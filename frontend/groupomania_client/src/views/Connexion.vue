<template>
  <div class="connexion">
    <div class="bordereau">
      
        <p>Bienvenu sur votre réseau</p>
    
      <img alt="Vue logo" src="../assets/icon-above-font.png">
    
    </div>
    <ConnexionCompo />
  </div>
</template>
<script>
// @ is an alias to /src
import ConnexionCompo from '@/components/ConnexionCompo.vue'

export default {
  name: 'Connexion',
  components: {
    ConnexionCompo
  }
}
</script>
<style scoped>

.bordereau{
  border: double #ce323a;
  margin-left: 20%;
  margin-right: 20%;
  padding: 2%;
}
</style>