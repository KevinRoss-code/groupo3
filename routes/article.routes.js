module.exports = app => {
    const articles = require('../controllers/article.controller');

    let router = require("express").Router();

    router.post("/", articles.create);

    router.get("/", articles.findAll);

    router.get("/publication", articles.findAllContent);

    router.get("/:id", articles.findById);

    router.put("/:id", articles.update);

    router.delete("/:id", articles.delete);

    router.delete('/', articles.deleteAll);

    app.use("/api/articles", router);
}