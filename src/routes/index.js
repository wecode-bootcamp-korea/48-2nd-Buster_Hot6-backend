const express = require("express");

const routes = express.Router();
const { userRouter } = require("./userRouter");
const productsRoutes = require("./productsRoutes");
const productScrapRouter = require("./productScrapRoutes");
const { postScrapRouter } = require("./postScrapRoutes");

routes.use("/users", userRouter);
routes.use("/products", productsRoutes);
routes.use("/productScrap", productScrapRouter);
routes.use("/postScrap", postScrapRouter);

module.exports = { routes, productsRoutes, productScrapRouter };
