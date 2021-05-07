<template>
  <div class="inscription">
    <img alt="Vue logo" src="../assets/icon-above-font.png">
    <InscriptionCompo />
  </div>
</template>

<script>
// @ is an alias to /src
import InscriptionCompo from '@/components/InscriptionCompo.vue'

export default {
  name: 'Inscription',
  components: {
    InscriptionCompo
  }
}
</script>

<style>
img {
  width: 30%;
  padding-left: 35%;
}
</style>
