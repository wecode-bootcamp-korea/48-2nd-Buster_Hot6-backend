const { catchAsync } = require("../utils/error");

const productService = require("../services/productsServices");

const getAllProducts = catchAsync(async (req, res) => {
  const { offset = 0, limit = 10 } = req.query;

  const products = await productService.getAllProducts();

  res.status(200).json({ products, offset, limit });
});

const getProductsByCategoryId = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const { offset = 0, limit = 10 } = req.query;

  const products = await productService.getProductsByCategoryId(
    categoryId,
    parseInt(offset),
    parseInt(limit)
  );

  res.status(200).json({ products });
});

const getProductDetail = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const productDetail = await productService.getProductDetailById(productId);
  return res.status(201).json(productDetail);
});

module.exports = {
  getAllProducts,
  getProductsByCategoryId,
  getProductDetail,
};
