const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
  name: String, 
  location: String,
  tagline: String, 
  description: String, 
  tags: String, 
  financing: String, 
  timing: String,
  // team: String, 
  picture: String,
  userId: {type: mongoose.Types.ObjectId, ref: "user"}, 
}, {
  timestamps: true
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;