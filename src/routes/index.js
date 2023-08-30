const express = require("express");

const { reviewsRouter } = require("./reviewsRouter")
const routes = express.Router();

routes.use("/reviews", reviewsRouter);

module.exports = { routes } ;