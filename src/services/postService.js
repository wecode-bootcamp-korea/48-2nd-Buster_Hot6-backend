const postDao = require("../models/postsDao");


const getPostScrap = async (userId, postId)=>{
    return await postDao.getPostScrap(userId, postId);
};

const deletePostScrap = async (userId, postId)=>{
    return await postDao.deletePostScrap(userId, postId);
};

const getPostScrapCountByPostId = async (postId) => {
    const count = await postScrapDao.getPostScrapCountByPostId(postId);
    console.log(count);
    return count;
  };
module.exports = { getPostScrap, deletePostScrap, getPostScrapCountByPostId }