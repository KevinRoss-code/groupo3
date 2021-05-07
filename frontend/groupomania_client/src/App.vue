<template>
  <div id="nav">
    <router-link to="/">Inscription</router-link> |
    <router-link to="/connexion">Connexion</router-link> 
  </div>
  <router-view/>
</template>

<style>
 

#nav {
  padding-left: 42.5%;
  padding-top: 2%;
  padding-bottom: 2%;
  font-size: 1.5rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fc1212;
}
</style>
