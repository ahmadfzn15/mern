const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  profile_picture: String,
  name: String,
  email: String,
  telephone_number: String,
  gender: String,
  job: String,
  place_of_birth: String,
  date_of_birth: String,
  address: String,
  religion: String,
  password: String,
});

exports.Employee = mongoose.model("Employee", schema, "employee");
