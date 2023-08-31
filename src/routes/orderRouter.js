  const express = require ("express");
  const orderRouter = express.Router();

  const { postOrder, handlePayment } = require ("../controllers/orderController");

  orderRouter.post("/delivery", postOrder);
  orderRouter.post("/payment", handlePayment);

  module.exports = { orderRouter };