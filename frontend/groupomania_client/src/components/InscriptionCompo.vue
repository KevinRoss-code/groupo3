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
      <input id="password_connexion" v-model="password" type="password" name="password" /><br/>
      <input id="job_connexion" v-model="job" type="text" name="job" />
        </div>
      </div>
        <button id="push_connexion" class="btn btn-danger btn-lg">Inscription</button>
        <div id="error">

        </div>
    </form>
  </div>
</template>



<script>
import axios from "axios";
import {mapMutations} from "vuex";
export default {
  name: "InscriptionCompo",
  props: {
    msg: String,
  },
  methods: {
     ...mapMutations(['SET_User_Id', "SET_Is_Admin"]),

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
          localStorage.setItem("user", res.data.accessToken);
          this.SET_User_Id(res.data.id);
          this.SET_Is_Admin(res.data.isAdmin);
          this.$router.push({ path: "MurAppli" });
        })
        .catch(error => {
          if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      document.querySelector("#error").textContent = error.response.data.error;
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);

        });
     
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
