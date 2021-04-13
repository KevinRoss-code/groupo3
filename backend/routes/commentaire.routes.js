const { authJwt } = require("../middleware");
const commentaires = require('../controllers/commentaire.controller');

module.exports = app => {
    

    let router = require("express").Router();

    router.post("/", [authJwt.verifyToken], commentaires.create);

    router.get("/", [authJwt.verifyToken], commentaires.findById);

    app.use("/api/commentaires", router);
}