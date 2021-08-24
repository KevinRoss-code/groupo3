const { authJwt } = require("../middleware");
const commentaires = require('../controllers/commentaire.controller');

module.exports = app => {
    

    let router = require("express").Router();

    router.post("/", [authJwt.verifyToken], commentaires.create);

    router.get("/", [authJwt.verifyToken], commentaires.findAll);

    router.get("/", [authJwt.verifyToken], commentaires.findById);

    router.delete("/:id", [authJwt.verifyToken], [authJwt.authorized], commentaires.delete);

    router.put("/:id", [authJwt.verifyToken],[authJwt.authorized], commentaires.update);

    app.use("/api/commentaires", router);
}