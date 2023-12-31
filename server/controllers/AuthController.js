require("dotenv").config();
const { validationResult } = require("express-validator");
const { User } = require("../models/User");
const { encrypt, comparePassword, decrypt } = require("../utils/crypto");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(500).json({ message: err.array() });
  }

  const pwdHash = encrypt(req.body.password);
  const check = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: pwdHash,
    role: "admin",
  });

  if (!check) {
    return res.status(500).json({ data: "Gagal Register" });
  } else {
    const payload = {
      username: req.body.username,
      role: "admin",
    };
    const token = jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: "7d",
    });
    return res.status(200).json({ data: "Successfully", token: token });
  }
};

exports.login = async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(500).json({ message: err.array() });
  }
  const check = await User.findOne({ username: req.body.username });
  if (check) {
    const checkPwd = comparePassword(req.body.password, check.password);
    if (checkPwd) {
      const payload = {
        username: req.body.username,
        role: "admin",
      };
      const token = jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "7d",
      });
      return res.status(200).json({ data: "Successfully", token: token });
    } else {
      return res.status(500).json({ data: "Username / password salah! 1" });
    }
  } else {
    return res.status(500).json({ data: "Username / password salah! 2" });
  }
};

exports.check = async (req, res, next) => {
  const cookie = req.headers.authorization.split("Bearer ")[1];
  if (cookie != "undefined") {
    const verify = jwt.verify(cookie, process.env.JWT_KEY);
    if (verify) {
      return res.status(200).json({ data: verify });
    }
    return res.status(403).json({ data: "Unauthorizied" });
  } else {
    return res.status(403).json({ data: "Unauthorizied" });
  }
};
