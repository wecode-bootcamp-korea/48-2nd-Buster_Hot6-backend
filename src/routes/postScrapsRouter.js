const express = require ("express");

const postScrapsController = require("../controllers/postScrapsController");
const postScrapsRouter = express.Router();
const {loginRequired} = require('../utils/auth')

postScrapsRouter.post("/scrap", loginRequired, postScrapsController.getPostScrap);
postScrapsRouter.delete("/scrap", loginRequired, postScrapsController.deletePostScrap);

module.exports = { postScrapsRouter };