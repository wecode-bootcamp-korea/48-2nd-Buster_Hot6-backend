const express = require("express");

const routes = express.Router();
const { userRouter } = require("./userRouter");
const productsRoutes = require("./productsRoutes");
const { cartRouter } = require("./cartRouter");

routes.use("/users", userRouter);
routes.use("/products", productsRoutes);
routes.use("/cart", cartRouter);

module.exports = { routes, productsRoutes };
