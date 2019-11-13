exports.signup = (req, res, next) => {
  const email = req.body.email;
  const pasword = req.body.password;
  console.log("email et password", email, pasword);
};
