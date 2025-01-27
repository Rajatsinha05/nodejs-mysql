const { STRING, INTEGER } = require("sequelize");
const db = require("../config/db");

const User = db.define("User", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: STRING },
  email: { type: STRING, unique: true, allowNull: false },
  password: { type: STRING, allowNull: false },
});

module.exports = User;