const express = require("express");

const { cartRouter } = require("./cartRouter");

const router = express.Router();
router.use("/cart", cartRouter);

module.exports = { router };
