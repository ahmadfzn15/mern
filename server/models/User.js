const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  created_at: Date,
});

exports.User = mongoose.model("User", schema, "users");
