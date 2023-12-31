require("dotenv").config();

const express = require("express");
const router = express.Router();
const { limiter } = require("../utils/throttle");
const { getKaryawan } = require("../controllers/EmployeeController");
const { addKaryawan } = require("../controllers/EmployeeController");
const {
  employeeValidation,
  loginValidation,
  registrationValidation,
} = require("../utils/validation");
const { login, register, check } = require("../controllers/AuthController");

router.get("/employee", limiter(60), getKaryawan);
router.post("/employee", employeeValidation, limiter(20), addKaryawan);

router.post("/register", registrationValidation, limiter(20), register);
router.post("/login", loginValidation, limiter(20), login);
router.get("/check-auth", limiter(60), check);

module.exports = router;
