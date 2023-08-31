const express = require("express");
const productRouter = express.Router();
const productScrapRouter = express.Router();

const {
  getAllProducts,
  getProductsByCategoryId,
  getProductDetail,
} = require("../controllers/productsControllers");

const productScrapController = require("../controllers/productScrapControllers");

productRouter.get("/all", getAllProducts);
productRouter.get("/category/:categoryId", getProductsByCategoryId);
productRouter.get("/detail/:productId", getProductDetail);
productScrapRouter.get(
  "/product",
  productScrapController.productScrapCountByProductId
);
module.exports = { productRouter, productScrapRouter };
