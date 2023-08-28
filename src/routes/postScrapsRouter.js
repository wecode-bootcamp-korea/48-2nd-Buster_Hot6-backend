const express = require ("express");

const postScrapsController = require("../controllers/postScrapsController");
const postScrapsRouter = express.Router();
const {loginRequired} = require('../utils/auth')

postScrapsRouter.post("/scrapOn", loginRequired, postScrapsController.postScrapOn);
postScrapsRouter.delete("/scrapOff", loginRequired, postScrapsController.postScrapOff);

module.exports = { postScrapsRouter };