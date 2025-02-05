const { STRING, INTEGER } = require("sequelize");
const db = require("../config/db");
const { ulid } = require("ulid");

const User = db.define("User", {
  id: { type: STRING, primaryKey: true, defaultValue: () => ulid() },
  username: { type: STRING },
  email: { type: STRING, unique: true, allowNull: false },
  password: { type: STRING, allowNull: false },
});

module.exports = User;

// console.log(ulid());
