const express = require ('express');
const orderRouter = express.Router();
const orderController = require ("../controllers/orderController")
const {loginRequired} = require("../utils/auth");

orderRouter.post("/delivery", orderController.postOrder);
orderRouter.post('/pay', loginRequired, orderController.postPayment);
module.exports = { orderRouter };
