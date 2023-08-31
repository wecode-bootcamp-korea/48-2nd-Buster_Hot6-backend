const express = require ("express");
const postsRouter = express.Router();
const { loginRequired } = require("../utils/auth");

const {
  getPostScrap,
  deletePostScrap,
  getCategory,
  postScrapCountByPostId,
  getPostDetail,
} = require("../controllers/postController");

postsRouter.post("/scrap", loginRequired, getPostScrap);
postsRouter.delete("/scrap", loginRequired, deletePostScrap);
postsRouter.get('/category', getCategory);
postsRouter.get("/scrap", postScrapCountByPostId);
postsRouter.get("/detail/:postId", getPostDetail);

module.exports = { postsRouter };