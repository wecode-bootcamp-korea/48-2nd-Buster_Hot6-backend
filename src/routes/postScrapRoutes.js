const express = require("express");

const postScrapRouter = express.Router();

const postScrapController = require("../controllers/postScrapControllers");

postScrapRouter.get("/post", postScrapController.postScrapCountByPostId);

module.exports = { postScrapRouter };
