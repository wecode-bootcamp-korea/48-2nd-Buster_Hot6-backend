const express = require("express");

const { userRouter } = require("./userRouter")
const { productScrapsRouter } = require("./productScrapsRouter")
const { postScrapsRouter } = require("./postScrapsRouter")
const routes = express.Router();

routes.use("/users", userRouter);
routes.use("/product-scrap", productScrapsRouter);
routes.use("/post-scrap", postScrapsRouter);


module.exports = { routes } ;

