const express = require("express");

const { userRouter } = require("./userRouter");
const { cartRouter } = require("./cart.router");
const { productsRoutes } = require("./productsRoutes");

const routes = express.Router();
routes.use("/users", userRouter);
routes.use("/cart", cartRouter);
routes.use("/products", productsRoutes);

module.exports = { routes };
