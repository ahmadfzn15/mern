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
const checkToken = require("../utils/checkToken");
const { information } = require("../controllers/PageController");

router.get("/information", limiter(60), checkToken, information);
router.get("/employee", limiter(60), getKaryawan);
router.post("/employee", employeeValidation, limiter(20), addKaryawan);

router.post("/register", registrationValidation, limiter(20), register);
router.post("/login", loginValidation, limiter(20), login);
router.get("/verify", limiter(60), checkToken, check);

module.exports = router;
