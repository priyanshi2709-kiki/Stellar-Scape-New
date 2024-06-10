const { Schema, model } = require("../connection");

const userSchema = new Schema({
  githubId: String,
  username: String,
  displayName: String,
  created_at: Date,
  avatar: {type:String, default: "avatar_placeholder.png"},
  
});


module.exports = model("user", userSchema);