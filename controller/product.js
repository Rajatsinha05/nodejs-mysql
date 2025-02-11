const Product = require("../models/product");
const User = require("../models/user");

exports.create = async (req, res) => {
  let product = await Product.create(req.body);
  res.send(product);
};

exports.getAll = async (req, res) => {
  let products = await Product.findAll({
    include: User,
  });
  res.send(products);
};
