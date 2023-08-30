const express = require("express");
const cartRouter = express.Router();

const cartController = require("../controllers/cartController");

cartRouter.post("/cart", cartController.insertCart);
cartRouter.delete("/cart", cartController.deleteCart);
cartRouter.post("/getCartList", cartController.getCartList);

module.exports = { cartRouter };
