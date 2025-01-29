const User = require("../models/user");
const userService = require("../service/user");
exports.getUser = async (req, res) => {
  let user = await User.findAll();
  res.send(user);
};

exports.createUser = async (req, res) => {
  // let user = await User.create(req.body);
  // res.send(user);
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return res
      .status(404)
      .send({ message: "Please enter a valid email address and  password." });
  }
  try {
    let userDetails = await userService.register({ email, password, username });
    return res.send(userDetails);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(404)
      .send({ message: "Please enter a valid email address and  password." });
  }
  try {
    const userDetails = await userService.login({ email, password });
    return res.send(userDetails);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
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
