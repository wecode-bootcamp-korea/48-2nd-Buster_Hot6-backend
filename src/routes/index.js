const express = require("express");

const { userRouter } = require("./userRouter")
const { productScrapsRouter } = require("./productScrapsRouter")
const { postScrapsRouter } = require("./postScrapsRouter")
const routes = express.Router();

routes.use("/users", userRouter);
routes.use("/productScrap", productScrapsRouter);
routes.use("/postScrap", postScrapsRouter);


module.exports = { routes } ;

