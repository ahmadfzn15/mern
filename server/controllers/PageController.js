const { Employee } = require("../models/Employee");

exports.information = async (req, res, next) => {
  const data = await Employee.find();
  res.json({ data }).status(200);
};
