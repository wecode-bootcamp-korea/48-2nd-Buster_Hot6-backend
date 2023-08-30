const cartDao = require("../models/cartDao");

const insertCart = async (userId, productId, productCount) => {
  await cartDao.insertCart(userId, productId, productCount);
};

const deleteCart = async (userId, productId) => {
  await cartDao.deleteCart(userId, productId);
};

module.exports = { insertCart, deleteCart };
