<template>
  <div>
    <h1>Connexion</h1>
    <form id="connexion" @submit="login">
      
        <label for="name" id="champ_name">Nom :</label>
        <input id="name" v-model="name" type="text" name="name" />
      

    
        <label for="email" id="champ_email">Email :</label>
        <input id="email" v-model="email" type="text" name="email" />
      
      
        <label for="password" id="champ_mdp">Mot de passe :</label>
        <input id="password" v-model="password" type="text" name="password" />
      

      <button>Connexion</button>
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
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      };
      console.log(data);
      axios
        .post("http://localhost:3000/api/auth/signin", data, {
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
      //this.$router.push({ path: "MurAppli" });
    },
  },
};
</script>

<style scoped>
#table {
  text-align: justify;
  margin-left: 40%;
}
input {
  margin-left: 10%;
  align-items: flex-start;
   margin-bottom: 10%;
}
#connexion{
    display: grid;
    grid-template-columns: 50% 20%;
    grid-template-rows: auto;
}
#champ_name {
  grid-column-start: 1;
  grid-row-start: 1;
}
#name {
  grid-column-start: 2;
  grid-row-start: 1;
}
#champ_email {
  grid-column-start: 1;
  grid-row-start: 2;
}
#email {
  grid-column-start: 2;
  grid-row-start: 2;
}
#champ_mdp {
  grid-column-start: 1;
  grid-row-start: 3;
}
#password {
  grid-column-start: 2;
  grid-row-start: 3;
}
button {
  grid-column-start: 2;
  grid-row-start: 4;
}
</style>
