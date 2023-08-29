const express = require("express");

const { userRouter } = require("./userRouter")
const { productScrapsRouter } = require("./productScrapsRouter")
const { postScrapsRouter } = require("./postScrapsRouter")
const { reviewsRouter } = require("./reviewsRouter")
const routes = express.Router();

routes.use("/users", userRouter);
routes.use("/productScrap", productScrapsRouter);
routes.use("/postScrap", postScrapsRouter);
routes.use("/reviews", reviewsRouter);

module.exports = { routes } ;