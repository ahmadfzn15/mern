const { rateLimit } = require("express-rate-limit");

exports.limiter = (max) => {
  return rateLimit({
    windowMs: 60 * 1000,
    max: max,
    message: "Terlalu banyak permintaan dari ip anda,silahkan coba lagi nanti",
  });
};
