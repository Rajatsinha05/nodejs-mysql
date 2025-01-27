const User = require("../models/user");

exports.getUser = async (req, res) => {
  let user = await User.findAll();
  res.send(user);
};

exports.createUser = async (req, res) => {
  let user = await User.create(req.body);
  res.send(user);
};

exports.getUserById = async (req, res) => {
  const { userId } = req.params;
  let user = await User.findByPk(userId);
  res.send(user);
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  let user = await User.findByPk(userId);
  await user.destroy();
  res.send({ user: user, msg: "User deleted" });
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  let user = await User.findByPk(userId);
  await user.update(req.body);
  // user.save();
  res.send({ user: user, msg: "User updated" });
};
