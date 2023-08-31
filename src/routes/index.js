const express = require("express");

const routes = express.Router();

const { userRouter } = require("./userRouter");
const { productRouter } = require("./productsRouter");
const { cartRouter } = require("./cartRouter");

routes.use("/users", userRouter);
routes.use("/products", productRouter);
routes.use("/cart", cartRouter);

module.exports = { routes };
