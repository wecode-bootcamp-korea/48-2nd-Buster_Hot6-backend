const cartDao = require("../models/cartDao");

const insertCart = async (userId, productId, productCount) => {
  await cartDao.insertCart(userId, productId, productCount);
};

const deleteCart = async (userId, productId) => {
  await cartDao.deleteCart(userId, productId);
};

const getCartList = async (userId) => {
  return await cartDao.getCartList(userId);
};

module.exports = { insertCart, deleteCart, getCartList };
