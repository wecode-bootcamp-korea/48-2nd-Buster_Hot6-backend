const productsDao = require("../models/productsDao");

const getAllProducts = async (offset, limit) => {
  return await productsDao.getAllProducts(offset, limit);
};

const getProductsByCategoryId = async (categoryId, offset, limit) => {
  return await productsDao.getProductsByCategoryId(categoryId, offset, limit);
};

const getProductDetailById = async (productId) => {
  const productDetail = await productsDao.getProductDetailById(productId);
  return productDetail;
};

module.exports = {
  getAllProducts,
  getProductsByCategoryId,
  getProductDetailById,
};
