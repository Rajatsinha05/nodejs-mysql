const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const hashPassword = async (password) => {
  let passwordHash = await bcrypt.hash(password, 10);
  return passwordHash;
};

const compare = async (hash, password) => {
  return await bcrypt.compare(hash, password);
};
const generateToken = async (data) => {
  let token = await jwt.sign(data, process.env.PRIVATE_KEY);
  return token;
};

module.exports = { hashPassword, generateToken, compare };
