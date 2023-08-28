const express = require("express");
const productsRouter = express.Router();

const productsController = require("../controllers/products.controller");

productsRouter.post(
  "/selectProductDetail",
  productsController.selectProductDetail
);

module.exports = { productsRouter };
