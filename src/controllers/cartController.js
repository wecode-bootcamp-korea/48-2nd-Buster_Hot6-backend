const cartService = require("../services/cartService");
const { catchAsync } = require("../utils/error");

const insertCart = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const { productId, productCount} = req.body;
  await cartService.insertCart(userId, productId, productCount);
  res.status(201).end();
});

const deleteCart = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.body;

  await cartService.deleteCart(userId, productId);

  res.status(201).end();
});

const getCartList = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const cartList = await cartService.getCartList(userId);
  return res.json(cartList);
});

module.exports = { insertCart, deleteCart, getCartList };