const express = require("express");

const routes = express.Router();

const { userRouter } = require("./userRouter");
const { productRouter } = require("./productsRouter");
const { cartRouter } = require("./cartRouter");
const { postsRouter } = require("./postsRouter");
const { postScrapRouter } = require("./postsRouter");

routes.use("/users", userRouter);
routes.use("/products", productRouter);
routes.use("/cart", cartRouter);
routes.use("/posts", postsRouter);
routes.use("/post", postsRouter);

module.exports = { routes };
