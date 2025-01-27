const userRepository = require("../repository/user");
const { hashPassword, generateToken } = require("../utils/helper");

exports.register = async ({ email, password, username }) => {
  let user = await userRepository.getUserByEmail(email);
  if (user.length > 0) {
    throw new Error("user has already been registered");
  }

  let hash = await hashPassword(password);
  user = await userRepository.createUser({
    email: email,
    password: hash,
    username: username,
  });

  let token = await generateToken({
    id: user.id,
    email: email,
    username: username,
  });
  return {
    token: token,
    user: user,
  };
};
