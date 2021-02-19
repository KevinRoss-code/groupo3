const db = require("../models");
const User = db.users;
const Article = db.articles;


exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };

  exports.findById = (req, res) => {
    const id = req.params.id;

    User.findByPk(id, {
      include: [{
        model: Article,
        as: "articles"
      }]
    }).then((user) => {
      res.send(user);
    }).catch((err) => {
      console.log(">>Erreur pas d'utilisateur trouvé", err);
    });
  };

  exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
      where: {
        id: id
      }
    }).then((num) => {
      if(num ==1){
        res.send({
          message: "Utilisateur bien modifié"
        });
      }else {
        res.send({
          message: "Impossible de modifié l'utilisateur"
        })
      }
      }).catch(err => {
        res.status(500).send({
          message: `Erreur lors de la modification de l'utilisateur ${id}`
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
      where: {
        id: id
      }
    }).then(num =>{
      if(num == 1) {
        res.send({
          message: "Utilisateur bien supprimé"
        });
      }else{
        res.send({
          message: `Impossible de supprimé l'utilisateur ${id}`
        });
      }
    }).catch(err => {
      res.status(500).send({
        message: `Erreur ${err.message}`
      });
    });
  };