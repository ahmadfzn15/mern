require("dotenv").config();
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const { decrypt } = require("./crypto");

exports.authentication = (req, res, next) => {
  const tokens = cookie.parse(req.headers.cookie || "");
  const tokenJwt = tokens.jwt;
  let token;
  if (tokenJwt) {
    token = decrypt(tokenJwt);
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    req.user = user;
    next();
  });
};
