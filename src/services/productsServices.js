const { getProductsByCategoryId } = require('../models/productsDao');

const productService = async (categoryId, offset, limit) => {
  return await getProductsByCategoryId(categoryId, offset, limit);
};

module.exports = { productService };
