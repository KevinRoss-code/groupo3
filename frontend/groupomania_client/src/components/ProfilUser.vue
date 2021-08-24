<template>
    <div>
        <div class="row">
          <div class="col-6"><p>{{users.name}}</p></div>
          <div class="col-6"><p>{{users.surname}}</p></div>
        </div>
        <div class="row">
          <div class="col-6"><p>{{users.email}}</p></div>
          <div class="col-6"><p>{{users.job}}</p></div>
        </div>
      
        
        
        <button v-on:click="showEditForm" class="btn btn-primary btn-lg">Modifier</button>
    <form v-if="showForm === true" @submit="modifier">
      <div class="row">
        <div class="class col-2"><label for="name" id="champ_name_connexion">Nom :</label></div>
        <div class="class col-4"><input id="name_connexion" v-model="name" type="text" name="name" /></div>
        <div class="class col-2"><label for="surname" id="champ_surname_connexion">Prénom :</label></div>
        <div class="class col-4"><input id="surname_connexion" v-model="surname" type="text" name="surname" /></div>
      </div>
      <div class="class row">
        <div class="class col-2"> <label for="email" id="champ_email_connexion">Email :</label></div>
        <div class="class col-4"><input id="email_connexion" v-model="email" type="text" name="email" /></div>
        <div class="class col-2"><label for="password" id="champ_mdp_connexion">Mot de passe :</label></div>
        <div class="class col-4"><input id="password_connexion" v-model="password" type="text" name="password" /></div>
      </div>
      <div class="class row">
        <div class="class col-2"><label for="job" id="champ_job_connexion">Job :</label></div>
        <div class="class col-4"><input id="job_connexion" v-model="job" type="text" name="job" /></div>
        <div class="class col-3"><button class="btn btn-success btn-lg">Enregistrer</button></div>
      </div>
    </form>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
          users: [],
          showForm : false,
          selectedFile: null
        }
    },
    created() {
          axios.get("http://localhost:3000/api/user", {
            headers: {
              "Content-type": "application/json",
              "x-access-token": localStorage.getItem("user"),
            },
          }).then(response => {
            this.users = response.data;
            console.log(response.data);
          })
        },
    methods: {

      showEditForm(){
           this.showForm = true;
       },

        modifier(e) {
                e.preventDefault();
    let form = document.querySelector("form");
     const formData = new FormData(form);
      console.log(formData);
                let token = localStorage.getItem('user');
                console.log(token)
                let config = {
                    headers: {
                      "Content-Type": "multipart/form-data",
                       "x-access-token": `${token}`,
                    },
                };
                let id = this.users.id;
                axios.put("http://localhost:3000/api/user/" + `${id}`,formData, config  
                ).then((res) => {
                    console.log(res.data);
                })
                 .catch((err) => {
                     console.log(err)
                 })
            },
    },

}
</script>
<style>
button{
  margin-left: 50%;
}
</style>