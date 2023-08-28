const jwt = require("jsonwebtoken");

const cartDao = require("../models/products.dao");

const selectProductDetail = async (productId, brandId, productsCategoryId) => {
  const productDetail = await cartDao.selectProductDetail(productId);

  return productDetail;
};

module.exports = { selectProductDetail };
