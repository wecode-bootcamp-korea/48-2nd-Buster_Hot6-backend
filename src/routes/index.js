const express = require("express");

const routes = express.Router();
const { userRouter } = require("./userRouter")
const productsRoutes = require("./productsRoutes")

routes.use("/users", userRouter);
routes.use("/products", productsRoutes);

module.exports = {routes } ;

