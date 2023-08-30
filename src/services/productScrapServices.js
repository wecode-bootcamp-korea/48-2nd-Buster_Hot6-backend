const productScrapDao = require("../models/productScrapDao");

const getProductScrapCountByProductId = async (productId) => {
  const count = await productScrapDao.getProductScrapCountByProductId(
    productId
  );
  return count;
};

module.exports = { getProductScrapCountByProductId };
