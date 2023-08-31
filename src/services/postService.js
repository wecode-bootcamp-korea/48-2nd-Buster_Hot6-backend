const postScrapDao = require("../models/postsDao");

const getCategory = async ()=>{
    return await postScrapDao.getCategory()
};

const getPostScrap = async (userId, postId)=>{
    return await postScrapDao.getPostScrap(userId, postId);
};

const deletePostScrap = async (userId, postId)=>{
    return await postScrapDao.deletePostScrap(userId, postId);
};

module.exports = { getCategory, getPostScrap, deletePostScrap }




