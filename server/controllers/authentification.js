const User = require("../models/user");
const lodash = require("lodash");

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(422).send({ error: "Email utilisé" });
    }
    if (lodash.isEmpty(email) || lodash.isEmpty(password)) {
      return res.status(422).send({ error: "Email ou mot de passe vide" });
    } else {
      const user = new User({
        email: email,
        password: password
      });
      user.save(err => {
        if (err) {
          return next(err);
        }
        res.json(user);
      });
    }
  });
};
