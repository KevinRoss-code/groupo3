<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Inscription />
  </div>
</template>

<script>
// @ is an alias to /src
import Inscription from '@/components/Inscription.vue'

export default {
  name: 'Home',
  components: {
    Inscription
  }
}
</script>
