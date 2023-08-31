const postDao = require("../models/postsDao");

const getCategory = async ()=>{
    return await postDao.getCategory()
};

const getPostScrap = async (userId, postId)=>{
    return await postDao.getPostScrap(userId, postId);
};

const deletePostScrap = async (userId, postId)=>{
    return await postDao.deletePostScrap(userId, postId);
};

module.exports = { getCategory, getPostScrap, deletePostScrap }




