const postScrapDao = require("../models/postScrapsDao");

const getPostScrap = async (userId, postId)=>{
    return await postScrapDao.getPostScrapByUser(userId, postId);
};

const deletePostScrap = async (userId, postId)=>{
    return await postScrapDao.deletePostScrapByUser(userId, postId);
};

module.exports = { getPostScrap, deletePostScrap }