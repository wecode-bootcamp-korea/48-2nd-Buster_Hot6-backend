const express = require("express");

const { cartRouter } = require("./cart.router");
const { productsRouter } = require("./products.router");

const router = express.Router();
router.use("/cart", cartRouter);
router.use("/products", productsRouter);

module.exports = { router };
