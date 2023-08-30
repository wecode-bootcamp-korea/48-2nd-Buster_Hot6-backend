const postScrapDao = require("../models/postScrapDao");

const getPostScrapCountByPostId = async (postId) => {
  const count = await postScrapDao.getPostScrapCountByPostId(postId);
  return count;
};

module.exports = { getPostScrapCountByPostId };
