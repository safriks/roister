const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const profileSchema = new Schema({
  
  firstname: String, 
  lastname: String, 
  username: String,
  password: String,
  location: String,
  jobposition: String, 
  skills: [String],
  aboutme: String, 
  // user: {type: moongose.Types.ObjectId, ref: "user"}

});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;