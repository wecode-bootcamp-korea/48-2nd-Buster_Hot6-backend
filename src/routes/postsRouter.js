const express = require ("express");
const postsRouter = express.Router();
const {loginRequired} = require('../utils/auth')

const {
  getPostScrap,
  deletePostScrap,
  getCategory,
} = require("../controllers/postController");

postsRouter.post("/scrap", loginRequired, getPostScrap);
postsRouter.delete("/scrap", loginRequired, deletePostScrap);
postsRouter.get('/category', getCategory);

module.exports = { postsRouter };