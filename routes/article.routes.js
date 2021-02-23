const { authJwt } = require("../middleware");
const articles = require('../controllers/article.controller');

module.exports = app => {
    

    let router = require("express").Router();

    router.post("/", [authJwt.verifyToken], articles.create);

    router.get("/", [authJwt.verifyToken], articles.findAll);

    router.get("/publication", [authJwt.verifyToken], articles.findAllContent);

    router.get("/:id", [authJwt.verifyToken], articles.findById);

    router.put("/:id", [authJwt.verifyToken], articles.update);

    router.delete("/:id", [authJwt.verifyToken], articles.delete);

    router.delete('/', [authJwt.verifyToken] ,articles.deleteAll);

    app.use("/api/articles", router);
}