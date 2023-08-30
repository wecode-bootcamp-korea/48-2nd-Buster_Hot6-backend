const { getProductsByCategoryId } = require("../models/productsDao");

const productService = async (categoryId, offset, limit) => {
  return await getProductsByCategoryId(categoryId, offset, limit);
};
const selectProductDetail = async (productId) => {
  const productDetail = await productsDao.selectProductDetail(productId);
  return productDetail;
};
module.exports = { productService, selectProductDetail };
