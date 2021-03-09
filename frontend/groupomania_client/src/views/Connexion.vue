<template>
  <div class="connexion">
    <!--<img alt="Vue logo" src="../assets/icon-above-font.png">-->
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
img{
  width: 30%;
}
</style>