const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
// const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    job: req.body.job
  })
  // const imageObjet = JSON.parse(req.body.image);
  // delete imageObjet._id;
  // const image = new Image({
  //   ...imageObjet,
  //   imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  // });
  // image.save()
  // .then(() => res.status(201).json({message: 'Objet enregistré'}))
    .then(user => {
      if(!user){
          return res.status(403).send({
              message: "element manquant"
          });
      }else{
          return res.status(200).send({
              message: "utilisateur crée"
          });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

//probleme au niveau de la sauvegarde de mon utilisateur (ne s'enregistre pas et pas de réponse sur postman)
exports.login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        })
        
      }
      

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      
      res.status(200).send({
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        accessToken: token
      });
})
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};