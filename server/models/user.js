const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Céation de model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
