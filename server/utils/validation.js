const { body } = require("express-validator");
const { Employee } = require("../models/Employee");
const { User } = require("../models/User");

const registrationValidation = [
  body("username")
    .isLength({ min: 4 })
    .withMessage("Username minimal 4 digit")
    .notEmpty()
    .withMessage("Username tidak boleh kosong")
    .custom(async (value, { req }) => {
      const duplikat = await User.findOne({ username: value });
      if (duplikat) {
        throw new Error("Username sudah terdaftar,masukan username yang lain!");
      }
      return true;
    }),
  body("email")
    .isEmail()
    .withMessage("Masukkan format email yang valid!")
    .notEmpty()
    .withMessage("Email tidak boleh kosong")
    .custom(async (value, { req }) => {
      const duplikat = await Employee.findOne({ email: value });
      if (duplikat) {
        throw new Error("Email sudah terdaftar,masukan email yang lain!");
      }
      return true;
    }),
  body("password")
    .notEmpty()
    .withMessage("Username tidak boleh kosong")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    )
    .withMessage(
      "Password harus terdiri dari setidaknya satu huruf besar,huruf kecil,angka,dan karakter"
    )
    .isLength({ min: 6 })
    .withMessage("Password harus memiliki minimal 6 karakter"),
];

const loginValidation = [
  body("username").notEmpty().withMessage("Username tidak boleh kosong"),
  body("password").notEmpty().withMessage("Password tidak boleh kosong"),
];

const employeeValidation = [
  body("name")
    .notEmpty()
    .withMessage("Title tidak boleh kosong")
    .isString()
    .withMessage("Nama harus berupa string"),
  body("email")
    .notEmpty()
    .withMessage("Email tidak boleh kosong")
    .isEmail()
    .withMessage("Masukan email yang valid")
    .isString()
    .withMessage("Email harus berupa string")
    .custom(async (value, { req }) => {
      const duplikat = await Employee.findOne({ email: value });
      if (duplikat) {
        throw new Error("Email sudah terdaftar,masukan email yang lain!");
      }
      return true;
    }),
];

module.exports = {
  registrationValidation,
  loginValidation,
  employeeValidation,
};
