const passport = require("passport");
const User = require("../models/user");
const config = require("../../config");
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const localStrategy = require("passport-local");

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

const jwtLogin = new jwtStrategy(jwtOptions, function(payload, done) {
  const userId = payload.sub;
  User.findById(userId, function(err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

const localOptions = { usernameField: "email" };
const localLoginStrategy = new localStrategy(localOptions, function(
  email,
  pasword,
  done
) {
  User.findOne({ email }, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }
    user.isPasswordEqualTo(pasword, function(err, IsMatch) {
      if (err) {
        return done(err);
      }
      if (!IsMatch) {
        return done(null, false);
      }
      return done(null, user);
    });
  });
});

passport.use(jwtLogin);
passport.use(localLoginStrategy);
