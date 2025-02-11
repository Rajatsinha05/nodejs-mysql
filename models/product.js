const { STRING, INTEGER } = require("sequelize");
const db = require("../config/db");
const { ulid } = require("ulid");
const User = require("./user");
const Product = db.define("Product", {
  id: { type: STRING, primaryKey: true, defaultValue: () => ulid() },
  price: { type: INTEGER },
  title: { type: STRING },
  img: { type: STRING },
});
User.hasMany(Product);
Product.belongsTo(User);
module.exports = Product;
