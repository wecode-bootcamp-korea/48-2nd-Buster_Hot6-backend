const postScrapDao = require("../models/postsDao");

const getPostScrap = async (userId, postId)=>{
    return await postScrapDao.getPostScrap(userId, postId);
};

const deletePostScrap = async (userId, postId)=>{
    return await postScrapDao.deletePostScrap(userId, postId);
};

module.exports = { getPostScrap, deletePostScrap }