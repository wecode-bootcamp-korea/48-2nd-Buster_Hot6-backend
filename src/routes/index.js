const express = require("express");

const { cartRouter } = require("./cart.router");

const { userRouter } = require("./userRouter");

const router = express.Router();
router.use("/cart", cartRouter);

router.use("/users", userRouter);

module.exports = { router };
