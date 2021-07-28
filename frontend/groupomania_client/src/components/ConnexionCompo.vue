<template>
  <div>
    <h1>De retour :</h1>
    <form id="connexion" @submit="login">
      <div class="row">
        <div class="col-6">
          <label for="email" id="champ_email">Email :</label><br />
          <label for="password" id="champ_mdp">Mot de passe :</label>
        </div>
        <div class="col-6">
          <input id="email" v-model="email" type="text" name="email" />
          <input id="password" v-model="password" type="text" name="password" />
        </div>
      </div>
        <button class="btn btn-danger btn-lg">Connexion</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ConnexionCompo",

  methods: {
    login(e) {
      e.preventDefault();
      let form = document.querySelector("form");
      let formData = new FormData(form);
      let data = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      console.log(data);
      axios
        .post("http://localhost:3000/api/auth/login", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("user", res.data.accessToken);
          this.$router.push({ path: "MurAppli" });
        })
        .catch((err) => {
          console.log(err);
        });
      //this.$router.push({ path: "MurAppli" });
    },
  },
};
</script>

<style scoped>
label{
  margin: 2%;
}
input{
  margin: 1%;
}
h1{
  text-align: center;
  padding-bottom: 2%;
  color: red;
}
button{
  margin-left: 61%;
  margin-top: 2%;
}
</style>
