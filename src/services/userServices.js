const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userDao = require("../models/userDao");
const { validateEmailAndPassword } = require("../utils/validate");

const saltRounds = 10;

const hashPassword = async (plaintextPassword) => {
  return await bcrypt.hash(plaintextPassword, saltRounds);
};

const getUserById = async (id) => {
  return await userDao.getUserById(id);
};

const signUp = async (nickname, email, password) => {
  validateEmailAndPassword(email, password);

  const hashedPassword = await hashPassword(password);
  const createUser = await userDao.createUser(nickname, email, hashedPassword);
  return createUser;
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  if (!user) {
    const error = new Error("INVALID_USER user");
    error.statusCode = 401;

    throw error;
  }

  const isMatched = await bcrypt.compare(password, user.password);

  if (!isMatched) {
    const error = new Error("INVALID_USER");
    error.statusCode = 401;

    throw error;
  }
  const accessToken = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    algorithm: process.env.ALGORITHM,
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return accessToken;
};

module.exports = { signUp, signIn, getUserById };
