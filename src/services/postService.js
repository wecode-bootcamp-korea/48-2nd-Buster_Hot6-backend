const postsDao = require("../models/postsDao");

const getPostScrap = async (userId, postId) => {
  return await postsDao.getPostScrap(userId, postId);
};

const deletePostScrap = async (userId, postId) => {
  return await postsDao.deletePostScrap(userId, postId);
};

const getPostDetailById = async (postId) => {
  const postDetail = await postsDao.getPostDetailById(postId);
  return postDetail;
};

module.exports = { getPostScrap, deletePostScrap, getPostDetailById };
