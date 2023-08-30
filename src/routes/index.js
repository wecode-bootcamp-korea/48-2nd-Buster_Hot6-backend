const express = require("express");

const { userRouter } = require("./user.router");
const { cartRouter } = require("./cart.router");
const { productRouter } = require("./product.router");

const router = express.Router();
router.use("/users", userRouter);
router.use("/cart", cartRouter);
router.use("/product", productRouter);

module.exports = { router };
