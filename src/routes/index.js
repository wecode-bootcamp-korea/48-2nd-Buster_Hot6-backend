const express = require("express");

const { productScrapsRouter } = require("./productScrapsRouter")
const { postScrapsRouter } = require("./postScrapsRouter")
const { postMainRouter } = require ("./postsMainRouter")
const routes = express.Router();
const { userRouter } = require("./userRouter")
const productsRoutes = require("./productsRoutes")

routes.use("/users", userRouter);
routes.use("/product-scrap", productScrapsRouter);
routes.use("/post-scrap", postScrapsRouter);
routes.use("/products", productsRoutes);
routes.use("/get-posts", postMainRouter)

module.exports = {routes,productsRoutes} ;