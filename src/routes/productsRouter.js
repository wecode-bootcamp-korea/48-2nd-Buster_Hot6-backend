const express = require("express");
const productRouter = express.Router();

const {
  getAllProducts,
  getProductsByCategoryId,
  getProductDetail,
} = require("../controllers/productsControllers");

productRouter.get("/all", getAllProducts);
productRouter.get("/category/:categoryId", getProductsByCategoryId);
productRouter.get("/detail/:productId", getProductDetail);

module.exports = { productRouter };
