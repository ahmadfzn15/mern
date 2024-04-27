const jwt = require("jsonwebtoken");

const checkToken = async (req, res, next) => {
  const cookie = await req.headers.authorization?.split("Bearer ")[1];
  if (cookie != "undefined" || cookie != null) {
    try {
      const verify = jwt.verify(cookie, process.env.JWT_KEY);
      if (verify) {
        return res.status(200).json({ data: verify });
      }
      return res.status(403).json({ data: "Unauthorizied" });
    } catch (error) {
      return res.status(403).json({ data: "Unauthorizied" });
    }
  } else {
    return res.status(403).json({ data: "Unauthorizied" });
  }
};

module.exports = checkToken;
