<template>
  <div id="sign">
    <h1 id="title">Première connexion ? Inscrivez vous :</h1>
    <form id="form_sign" @submit="inscription">
      <div class="row">
        <div class="col-4">
          <label for="name" id="champ_name_connexion">Nom :</label><br/>
          <label for="surname" id="champ_surname_connexion">Prénom :</label><br/>
          <label for="email" id="champ_email_connexion">Email :</label><br/>
          <label for="password" id="champ_mdp_connexion">Mot de passe :</label><br/>
          <label for="job" id="champ_job_connexion">Job :</label>
        </div>
        <div class="col-6">
           <input id="name_connexion" v-model="name" type="text" name="name" /><br/>
          <input id="surname_connexion" v-model="surname" type="text" name="surname" /><br/>
        <input id="email_connexion" v-model="email" type="text" name="email" /><br/>
      <input id="password_connexion" v-model="password" type="text" name="password" /><br/>
      <input id="job_connexion" v-model="job" type="text" name="job" />
        </div>
      </div>
        <button id="push_connexion" class="btn btn-danger btn-lg">Inscription</button>
    </form>
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: "InscriptionCompo",
  props: {
    msg: String,
  },
  methods: {
    inscription(e) {
      e.preventDefault();
      let form = document.querySelector("form");
      let formData = new FormData(form);
      let data = {
        name: formData.get("name"),
        surname: formData.get("surname"),
        email: formData.get("email"),
        password: formData.get("password"),
        job: formData.get("job"),
      };
      console.log(data);
      axios
        .post("http://localhost:3000/api/auth/signup", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push({ path: "MurAppli" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  color: rgb(29, 3, 3);
}
button{
  margin-left: 44%;
  margin-top: 2%;
}
</style>
