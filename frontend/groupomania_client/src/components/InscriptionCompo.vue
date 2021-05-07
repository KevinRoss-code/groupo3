<template>
  <div id="sign">
    <h1 id="title">Inscription</h1>
    <form id="form_sign" @submit="inscription">
      <label for="name" id="champ_name_connexion">Nom :</label>
      <input id="name_connexion" v-model="name" type="text" name="name" />

      <label for="surname" id="champ_surname_connexion">Prénom :</label>
      <input id="surname_connexion" v-model="surname" type="text" name="surname" />

      <label for="email" id="champ_email_connexion">Email :</label>
      <input id="email_connexion" v-model="email" type="text" name="email" />

      <label for="password" id="champ_mdp_connexion">Mot de passe :</label>
      <input id="password_connexion" v-model="password" type="text" name="password" />

      <label for="job" id="champ_job_connexion">Job :</label>
      <input id="job_connexion" v-model="job" type="text" name="job" />

      <button id="push_connexion">Inscription</button>
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
input {
  margin-left: 2%;
  margin-bottom: 2%;
}
#form_sign{
  display: grid;
  grid-template-columns: 30% 20% 30% 20%;
  grid-template-rows: auto;
  margin-left: 30%;
}
#champ_name_connexion{
   grid-column-start: 1;
  grid-row-start: 2;
}
#name_connexion{
   grid-column-start: 2;
  grid-row-start: 2;
}
#champ_surname_connexion{
   grid-column-start: 1;
  grid-row-start: 3;
}
#surname_connexion{
   grid-column-start: 2;
  grid-row-start: 3;
}
#champ_email_connexion{
   grid-column-start: 1;
  grid-row-start: 4;
}
#email_connexion{
   grid-column-start: 2;
  grid-row-start: 4;
}
#champ_mdp_connexion{
   grid-column-start: 1;
  grid-row-start: 5;
}
#password_connexion{
   grid-column-start: 2;
  grid-row-start: 5;
}
#champ_job_connexion{
   grid-column-start: 1;
  grid-row-start: 6;
}
#job_connexion{
   grid-column-start: 2;
  grid-row-start: 6;
}
#push_connexion{
  grid-row-start: 7;
  width: 40%;
  margin-left: 70%;

}
h1{
  text-align: center;
  padding-bottom: 2%;
}
</style>
