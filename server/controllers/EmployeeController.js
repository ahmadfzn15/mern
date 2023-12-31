const { validationResult } = require("express-validator");
const { Employee } = require("../models/Employee");
const multer = require("multer");

exports.getKaryawan = (req, res, next) => {
  res.json({ data: "Hello From Employee" }).status(200);
};

exports.addKaryawan = async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(500).json({ message: err.array() });
  }

  await Employee.create({
    profile_picture: req.body.profile_picture.originalname,
    ...req.body,
  });
  return res.status(200).json({ data: "Data baru berhasil ditambahkan" });
};
