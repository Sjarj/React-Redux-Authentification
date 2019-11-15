const AuthentificationController = require("./controllers/authentification");
const passport = require("passport");

module.exports = function(expressServer) {
  expressServer.post("/signup", AuthentificationController.signup);
};
