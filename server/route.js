const AuthentificationController = require("./controllers/authentification");
module.exports = expressServer => {
  expressServer.post("/signup", AuthentificationController.signup);
};
