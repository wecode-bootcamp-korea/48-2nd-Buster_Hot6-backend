const jwt = require("jsonwebtoken");

const cartDao = require("../models/product.dao");

const selectProductDetail = async (productId) => {
  const productDetail = await cartDao.selectProductDetail(productId);
  return productDetail;
};

module.exports = { selectProductDetail };
