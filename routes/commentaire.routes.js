const { authJwt } = require("../middleware");
const commentaires = require('../controllers/commentaire.controller');

module.exports = app => {
    

    let router = require("express").Router();

    router.post("/", [authJwt.verifyToken], commentaires.create);

    app.use("/api/commentaires", router);
}