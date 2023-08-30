const express = require("express");
const productRoutes = express.Router();
const {
  getProductsByCategoryId,
  getProducts,
  handleGetProductsByCategory,
} = require("../controllers/productsControllers");

productRoutes.get("/products/byCategory", getProductsByCategoryId);
productRoutes.get("/products/all", getProducts);
productRoutes.get("/products/:productId", handleGetProductsByCategory);

module.exports = productRoutes;
