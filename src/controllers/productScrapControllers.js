const { catchAsync } = require("../utils/error");
const productScrapService = require("../services/productScrapServices");

const productScrapCountByProductId = catchAsync(async (req, res) => {
  const { productId } = req.query;
  if (!productId) {
    throw new Error("productId is required.");
  }

  const count = await productScrapService.getProductScrapCountByProductId(
    productId
  );
  res.status(200).json({ scrapCount: count });
});

module.exports = { productScrapCountByProductId };
