const express = require("express");
const productRouter = express.Router();

const productController = require("../controllers/product.controller");

productRouter.post(
  "/selectProductDetail",
  productController.selectProductDetail
);

module.exports = { productRouter };
