const express = require("express");
const cartRouter = express.Router();

const cartController = require("../controllers/cartController");
const { loginRequired } = require("../utils/auth");

cartRouter.post("/cart", loginRequired, cartController.insertCart);
cartRouter.delete("/cart", loginRequired ,cartController.deleteCart);
cartRouter.get("/getCartList", loginRequired, cartController.getCartList);

module.exports = { cartRouter };