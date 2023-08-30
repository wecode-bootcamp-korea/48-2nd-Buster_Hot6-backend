const express = require("express");

const { userRouter } = require("./userRouter")
const { reviewsRouter } = require("./reviewsRouter")
const routes = express.Router();

routes.use("/users", userRouter);
routes.use("/reviews", reviewsRouter);

module.exports = { routes } ;