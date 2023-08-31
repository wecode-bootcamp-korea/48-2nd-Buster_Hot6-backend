const express = require ("express");
const orderRouter = express.Router();

const {
    postOrder,
 } = require ("../controllers/orderController");

orderRouter.post("/delivery", postOrder);

module.exports = { orderRouter };