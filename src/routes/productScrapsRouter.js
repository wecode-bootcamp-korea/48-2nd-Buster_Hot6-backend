const express = require("express");

const productScrapsController = require("../controllers/productScrapsController");
const productScrapsRouter = express.Router();
const {loginRequired} = require('../utils/auth')

productScrapsRouter.post("/scrapOn", loginRequired, productScrapsController.scrapon);
productScrapsRouter.delete("/scrapOff", loginRequired, productScrapsController.scrapoff);

module.exports = { productScrapsRouter };