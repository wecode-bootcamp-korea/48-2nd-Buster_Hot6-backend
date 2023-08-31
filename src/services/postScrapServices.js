const postScrapDao = require("../models/postScrapDao");

const getPostScrapCountByPostId = async (postId) => {
  const count = await postScrapDao.getPostScrapCountByPostId(postId);
  console.log(count);
  return count;
};

module.exports = { getPostScrapCountByPostId };
