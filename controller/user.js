const User = require("../models/user");

exports.getUser = async (req, res) => {
  let user = await User.findAll();
  res.send(user);
};
