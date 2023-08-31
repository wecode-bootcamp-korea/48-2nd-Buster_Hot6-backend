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

const getProductScrapCountByProductId = async (productId) => {
  const count = await productsDao.getProductScrapCountByProductId(productId);
  return count;
};

const getProductScrap = async (userId, productId) => {
  return await productsDao.getProductScrap(userId, productId);
};

const deleteProductScrap = async (userId, productId) => {
  return await productsDao.deleteProductScrap(userId, productId);
};

module.exports = {
  getAllProducts,
  getProductsByCategoryId,
  getProductDetailById,
  getProductScrapCountByProductId,
  getProductScrap,
  deleteProductScrap,
};
