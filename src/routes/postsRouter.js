const express = require("express");

const postController = require("../controllers/postController");
const postsRouter = express.Router();
const { loginRequired } = require("../utils/auth");

postsRouter.post("/scrap", loginRequired, postController.getPostScrap);
postsRouter.delete("/scrap", loginRequired, postController.deletePostScrap);
postsRouter.get("", postController.postScrapCountByPostId);

module.exports = { postsRouter };