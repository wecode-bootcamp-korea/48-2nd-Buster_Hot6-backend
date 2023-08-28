const cartService = require("../services/cart.service");

const insertCart = async (req, res) => {
  try {
    const { userId, productId, productCount } = req.body;

    await cartService.insertCart(userId, productId, productCount);
    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { productId, userId } = req.body;

    await cartService.deleteCart(userId, productId);

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { insertCart, deleteCart };
