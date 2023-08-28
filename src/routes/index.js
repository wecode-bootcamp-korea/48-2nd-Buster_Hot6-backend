const express = require("express");

const { cartRouter } = require("./cart.router");
const { productsRouter } = require("./products.router");
const { userRouter } = require("./userRouter");

const router = express.Router();
router.use("/cart", cartRouter);
router.use("/products", productsRouter);

routes.use("/users", userRouter);

module.exports = { router };
