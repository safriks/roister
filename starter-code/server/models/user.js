const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  firstname: String, 
  lastname: String,
  email: String, 
  picture: String,
  location: String,
  jobposition: String, 
  skills: String,
  aboutme: String, 
}, {
  timestamps: true
});

userSchema.index({skills:'text'});
const User = mongoose.model("User", userSchema);

module.exports = User;