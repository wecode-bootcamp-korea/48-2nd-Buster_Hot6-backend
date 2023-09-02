const { catchAsync } = require("../utils/error");

const productService = require("../services/productsService");

const getAllProducts = catchAsync(async (req, res) => {

  const { offset = 0, limit = 40 } = req.query;

  const products = await productService.getAllProducts(parseInt(offset), parseInt(limit));

  res.status(200).json({ products });
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
  const productId = req.params.productId;
  const productDetail = await productService.getProductDetailById(productId);
  return res.status(201).json(productDetail);
});

const productScrapCountByProductId = catchAsync(async (req, res) => {
  const { productId } = req.query;
  if (!productId) {
    throw new Error("productId is required.");
  }
  const count = await productService.getProductScrapCountByProductId(productId);
  res.status(200).json({ scrapCount: count });
});

const getProductScrap = catchAsync(async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;
  const posts = await productService.getProductScrap(userId, productId);

  res.status(200).json({ data: posts });
});

const deleteProductScrap = catchAsync(async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;
  const posts = await productService.deleteProductScrap(userId, productId);

  res.status(200).json({ data: posts });
});

module.exports = {
  getAllProducts,
  getProductsByCategoryId,
  getProductDetail,
  productScrapCountByProductId,
  getProductScrap,
  deleteProductScrap,
};
