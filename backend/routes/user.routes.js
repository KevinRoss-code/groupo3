const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const multer = require('../middleware/multer-config');

module.exports = app => {

  let router = require("express").Router();

   router.get("/",[authJwt.verifyToken], controller.findById);

 // router.get("/",[authJwt.verifyToken],(req, res, next) => {return res.send('hello')});

  router.put("/:id", [authJwt.verifyToken], multer, controller.update);

  router.delete("/:id", [authJwt.verifyToken],controller.delete);

  app.use("/api/user", router);

}

