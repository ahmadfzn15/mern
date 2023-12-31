const CryptoJS = require("crypto-js");
require("dotenv").config();

const encrypt = (passwordFromUser) => {
  const data = CryptoJS.AES.encrypt(
    passwordFromUser,
    process.env.SECRET_KEY
  ).toString();
  return data;
};

const decrypt = (passwordFromDB) => {
  const data = CryptoJS.AES.decrypt(
    passwordFromDB,
    process.env.SECRET_KEY
  ).toString(CryptoJS.enc.Utf8);
  return data;
};

const comparePassword = (passwordFromUser, passwordFromDB) => {
  const pwd = decrypt(passwordFromDB);
  const result = passwordFromUser === pwd;
  return result;
};

module.exports = { encrypt, decrypt, comparePassword };
