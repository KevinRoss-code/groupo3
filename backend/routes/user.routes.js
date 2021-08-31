const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");


module.exports = app => {

  let router = require("express").Router();

   router.get("/",[authJwt.verifyToken], controller.findById);

  router.put("/:id", [authJwt.verifyToken], controller.update);

  router.delete("/:id", [authJwt.verifyToken],controller.delete);

  app.use("/api/user", router);

}

