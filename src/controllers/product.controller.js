const cartService = require("../services/product.service");

const selectProductDetail = catchAsync(async (req, res) => {
  const { productId } = req.body;
  const productDetail = await cartService.selectProductDetail(productId);
  res.status(201).json(productDetail);
});

module.exports = { selectProductDetail };
