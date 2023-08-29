const express = require("express");

const { cartRouter } = require("./cart.router");

const { userRouter } = require("./user.router");

const router = express.Router();
router.use("/cart", cartRouter);

router.use("/users", userRouter);

module.exports = { router };
