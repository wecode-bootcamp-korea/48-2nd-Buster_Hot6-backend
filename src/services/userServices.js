const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userDao  = require("../models/user.Dao");

const hashPassword = async (plaintextPassword) => {
  const saltRounds = 10;

  return await bcrypt.hash(plaintextPassword, saltRounds);
};

const getUserById = async (id) => {
  return await userDao.getUserById(id);
};

const signUp = async (nickname, email, password) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;


  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (!emailRegex.test(email)) {
    const error = new Error('INVALID_USER email');
    error.statusCode = 400;

    throw error;
  }

  if (!passwordRegex.test(password)) {
    const error = new Error('INVALID_USER password');
    error.statusCode = 400;

    throw error;
  }

  const hashedPassword = await hashPassword(password);
  const createUser = await userDao.createUser(
    nickname,
    email,
    hashedPassword
  );
  return createUser;
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);
  console.log("Fetched user: ", user);

  if (!user) {
    const error = new Error('INVALID_USER user');
    error.statusCode = 401;

    throw error;
  }
  
  const isMatched = await bcrypt.compare(password, user.password);

  if (!isMatched) {
    const error = new Error('INVALID_USER');
    error.statusCode = 401;

    throw error;
  }
  const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    algorithm: process.env.ALGORITHM,
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  
  return accessToken;
};


module.exports = { signUp,  signIn,  getUserById };
