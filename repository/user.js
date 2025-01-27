const User = require("../models/user");

exports.createUser = async (data) => {
  let user = await User.create(data);
  return user;
};

exports.getUserByEmail = async (email) => {
  let user = await User.findAll({ where: { email: email } });
  return user;
};

exports.updateUser = async (id, data) => {
  let user = await User.findByPk(id);
  user.update(data);
  return user;
};
exports.deleteUser = async (id) => {
  // let user = await User.findByPk(id);
  let user = await this.getUserById(id);
  user.destroy();
  return user;
};

exports.getUserById = async (id) => {
  let user = await User.findByPk(id);
  return user;
};
