const express = require("express");

const routes = express.Router();

const { userRouter } = require("./userRouter");
const { productRouter } = require("./productsRouter");
const { cartRouter } = require("./cartRouter");
const { postsRouter } = require("./postsRouter");
const { reviewsRouter } = require("./reviewsRouter");
const { orderRouter } = require("./orderRouter");

routes.use("/users", userRouter);
routes.use("/products", productRouter);
routes.use("/cart", cartRouter);
routes.use("/posts", postsRouter);
routes.use("/reviews", reviewsRouter);
routes.use("/order", orderRouter);

module.exports = { routes };
