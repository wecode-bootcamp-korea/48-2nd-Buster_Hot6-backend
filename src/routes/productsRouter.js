const express = require("express");
const productRouter = express.Router();
const { loginRequired } = require("../utils/auth");

const {
  getAllProducts,
  getProductsByCategoryId,
  getProductDetail,
  getProductScrap,
  deleteProductScrap,
  productScrapCountByProductId,
} = require("../controllers/productsControllers");

productRouter.get("/all", getAllProducts);
productRouter.get("/category/:categoryId", getProductsByCategoryId);
productRouter.get("/detail/:productId", getProductDetail);
productRouter.post("/scrap", loginRequired, getProductScrap);
productRouter.delete("/scrap", loginRequired, deleteProductScrap);
productRouter.get("/product", productScrapCountByProductId);

module.exports = { productRouter };