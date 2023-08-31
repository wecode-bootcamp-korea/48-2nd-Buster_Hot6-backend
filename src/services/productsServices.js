const productsDao = require("../models/productsDao");

const productScrapDao = require("../models/productScrapDao");

const getAllProducts = async (offset, limit) => {
  return await productsDao.getProductsByCategoryId(offset, limit);
};

const getProductsByCategoryId = async (categoryId, offset, limit) => {
  return await productsDao.getProductsByCategoryId(categoryId, offset, limit);
};

const getProductDetailById = async (productId) => {
  const productDetail = await productsDao.getProductDetailById(productId);
  return productDetail;
};

const getProductScrapCountByProductId = async (productId) => {
  const count = await productScrapDao.getProductScrapCountByProductId(
    productId
  );
  return count;
};

module.exports = {
  getAllProducts,
  getProductsByCategoryId,
  getProductDetailById,
  getProductScrapCountByProductId,
};
