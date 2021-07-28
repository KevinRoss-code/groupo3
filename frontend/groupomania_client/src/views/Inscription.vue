<template>
  <div class="inscription">
    <div class="bordereau">
      
        <p>Bienvenu sur votre réseau</p>
    
      <img alt="Vue logo" src="../assets/icon-above-font.png">
    
    </div>
    
    
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
.inscription{
  background-color: #f4898d;
}
.bordereau{
  border: double #32a1ce;
  margin-left: 20%;
  margin-right: 20%;
  padding: 2%;
  background-color: white;
}
p{
  font-size: 2rem;
  text-align: center;
}
form{
  margin-left: 10%;
  font-size: 1.5rem;
  margin-bottom: 5%;
  padding-bottom: 5%;
}
img {
  width: 40%;
  margin-left: 30%;
}
</style>
