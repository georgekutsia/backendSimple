const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const generateSign = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_KEY, { expiresIn: "60h" });
};

const verifySign = (token) => {
  return jwt.verify(token, process.env.JWT_KEY);
};

module.exports = { generateSign, verifySign };
