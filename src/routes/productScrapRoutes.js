const express = require("express");

const productScrapRouter = express.Router();

const productScrapController = require("../controllers/productScrapControllers");

productScrapRouter.get(
  "/product",
  productScrapController.productScrapCountByProductId
);

module.exports = productScrapRouter;
