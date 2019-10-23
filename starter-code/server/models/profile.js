const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const profileSchema = new Schema({
  firstname: String, 
  lastname: String, 
  username: String,
  location: String,
  degree: String, 
  skills: [String],
  financing: ?, 
  timing: ?,
  summary: String, 
  picture: String, 
  portfolio: {
      education: String, 
      experience: String, 
      accomplishments: String,
      samples: String, 
      reference: String,
  }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;