const express = require("express");
const cartRouter = express.Router();

const cartController = require("../controllers/cart.controller");
const { loginRequired } = require("../utils/auth");

cartRouter.post("/insertCart", loginRequired, cartController.insertCart);
cartRouter.delete("/deleteCart", loginRequired, cartController.deleteCart);

module.exports = { cartRouter };
