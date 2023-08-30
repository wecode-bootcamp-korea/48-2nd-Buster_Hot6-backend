const express = require("express");

const productScrapsController = require("../controllers/productController");
const productScrapsRouter = express.Router();
const { loginRequired } = require('../utils/auth')

productScrapsRouter.post("/scrap", loginRequired, productScrapsController.getProductScrap);
productScrapsRouter.delete("/scrap", loginRequired, productScrapsController.getProductScrap);

module.exports = { productScrapsRouter };