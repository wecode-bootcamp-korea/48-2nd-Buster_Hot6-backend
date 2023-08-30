const express = require("express");

const { userRouter } = require("./userRouter");
const { cartRouter } = require("./cart.router");
const { productRouter } = require("./product.router");
const productsRoutes = require("./productsRoutes");

const router = express.Router();
router.use("/users", userRouter);
router.use("/cart", cartRouter);
router.use("/product", productRouter);
routes.use("/products", productsRoutes);

module.exports = { router, productsRoutes };
