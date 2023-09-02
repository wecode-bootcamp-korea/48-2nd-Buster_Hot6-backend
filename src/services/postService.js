const postDao = require("../models/postsDao");

const getCategory = async ()=>{
    return await postDao.getCategory()
};

const getPostScrap = async (userId, postId) => {
  return await postDao.getPostScrap(userId, postId);
};

const deletePostScrap = async (userId, postId)=>{
    return await postDao.deletePostScrap(userId, postId);
};

const getPostDetailById = async (postId) => {
    const postDetail = await postDao.getPostDetailById(postId);
    return postDetail;
};

const getPostScrapCountByPostId = async (postId) => {
    const count = await postDao.getPostScrapCountByPostId(postId);
    return count;
};
module.exports = { getPostDetailById, getCategory, getPostScrap, deletePostScrap, getPostScrapCountByPostId }




