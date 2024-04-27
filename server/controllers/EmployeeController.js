const { validationResult } = require("express-validator");
const { Employee } = require("../models/Employee");
const { encrypt } = require("../utils/crypto");

exports.getKaryawan = async (req, res, next) => {
  const data = await Employee.find();
  return res.json(data).status(200);
};

exports.addKaryawan = async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(500).json({ message: err.array() });
  }

  const passwordHash = encrypt(req.body.password);
  await Employee.create({
    profile_picture: req.body.profile_picture?.originalname ?? "",
    ...req.body,
    password: passwordHash,
  })
    .then((result) => {
      return res.status(200).json({ data: "Data baru berhasil ditambahkan" });
    })
    .catch((err) => {
      return res.status(500).json({ data: err });
    });
};

exports.editKaryawan = async (req, res, next) => {
  await Employee.updateMany(req.body)
    .then((result) => {
      return res.status(200).json({ data: "Data berhasil di update." });
    })
    .catch((err) => {
      return res.status(500).json({ data: err });
    });
};

exports.deleteKaryawan = async (req, res, next) => {
  const id = req.body.id;
  await Employee.deleteOne({ id });
};
