<template>
    <div>
        
        
        {{users.name}}
        {{users.surname}}
        {{users.email}}
        {{users.job}}
        <button v-on:click="showEditForm">Modifier</button>
    <form v-if="showForm === true" @submit="modifier">
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

      <input type="file" @change="onFileSelected"/>
        <button>Enregistrer</button>
        </form>
    <button v-on:click="supprimer">Supprimer</button>
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
    
     const image = new FormData();
      image.append('image', this.selectedFile, this.selectedFile.name)
      let data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        job: this.job,
      };
        console.log(data)
                let token = localStorage.getItem('user');
                console.log(token)
                let config = {
                    headers: {
                       "x-access-token": `${token}`,
                    },
                };
                let id = this.users.id;
                axios.put("http://localhost:3000/api/user/" + `${id}`,{data}, image, config  
                ).then((res) => {
                    console.log(res.data);
                     //this.$emit("get-all");
                })
                 .catch((err) => {
                     console.log(err)
                 })
            },
            supprimer() {
                let token = localStorage.getItem('user');
                console.log(token)
                let config = {
                    headers: {
                       "x-access-token": `${token}`,
                    },
                };
                let id = this.users.id;
                console.log(id);
                axios.delete("http://localhost:3000/api/user/" + `${id}`, config, {
                }).then((res) => {
                console.log(res);
                // this.$emit("get-all");
                }).catch((err) => {
                    console.log(err)
                })
            },

            onfileSelected(event){
              this.selectedFile =event.target.files[0]
            }
    },

}
</script>