const { authJwt } = require("../middleware");
const articles = require('../controllers/article.controller');
const multer = require('../middleware/multer-config')

module.exports = app => {
    

    let router = require("express").Router();

    router.post("/", [authJwt.verifyToken],multer, articles.create);

    router.get("/", [authJwt.verifyToken], articles.findAll);

    router.get("/publication", [authJwt.verifyToken], articles.findAllContent);

    router.get("/:id", [authJwt.verifyToken], articles.findById);

    router.put("/:id", [authJwt.verifyToken],  [authJwt.authorized], multer, articles.update);

    router.delete("/:id", [authJwt.verifyToken], [authJwt.authorized], multer, articles.delete);

    router.delete('/', [authJwt.verifyToken] ,articles.deleteAll);

    app.use("/api/articles", router);
}