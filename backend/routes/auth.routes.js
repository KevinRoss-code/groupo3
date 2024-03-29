const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const multer = require("../middleware/multer-config");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup", [verifySignUp.userExisteDeja, verifySignUp.checkUser, verifySignUp.valid], multer, controller.signup);

  app.post("/api/auth/login", [verifySignUp.valid], controller.login);
};
