const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );
  
  let router = require("express").Router();
  
  app.get("/:id",
  [authJwt.verifyToken],
  controller.findById
  )

  app.put("/:id",
  [authJwt.verifyToken],
  controller.update
  )

  app.delete("/:id",
  [authJwt.verifyToken],
  controller.delete
  )
  app.use("/api/user", router);
};
