const express = require("express");
const productsRoutes = express.Router();
const {
  getProductsByCategoryId,
  getProducts,
  handleGetProductsByCategory,
  selectProductDetail,
} = require("../controllers/productsControllers");

productsRoutes.get("/products/byCategory", getProductsByCategoryId);
productsRoutes.get("/products/all", getProducts);
productsRoutes.get("/products/:productId", handleGetProductsByCategory);
productsRoutes.get("/selectProductDetail", selectProductDetail);

module.exports = { productsRoutes };
