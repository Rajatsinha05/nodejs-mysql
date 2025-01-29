const userRepository = require("../repository/user");
const { hashPassword, generateToken, compare } = require("../utils/helper");

exports.register = async ({ email, password, username }) => {
  let user = await userRepository.getUserByEmail(email);
  if (user) {
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

exports.login = async ({ email, password }) => {
  let user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new Error("user has not been registered");
  }
  const isMatch = await compare(user.password, password);
  if (!isMatch) {
    throw new Error("not matching password");
  }
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
