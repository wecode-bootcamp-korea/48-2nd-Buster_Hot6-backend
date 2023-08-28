const express = require("express");
const cartRouter = express.Router();

const cartController = require("../controllers/cart.controller");

cartRouter.post("/insertCart", cartController.insertCart);
cartRouter.delete("/deleteCart", cartController.deleteCart);

module.exports = { cartRouter };
