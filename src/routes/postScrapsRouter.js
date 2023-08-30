const express = require ("express");

const postController = require("../controllers/postController");
const postScrapsRouter = express.Router();
const {loginRequired} = require('../utils/auth')

postScrapsRouter.post("/scrap", loginRequired, postController.getPostScrap);
postScrapsRouter.delete("/scrap", loginRequired, postController.deletePostScrap);

module.exports = { postScrapsRouter };