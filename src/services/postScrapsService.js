const postScrapDao = require("../models/postScrapsDao");

const postScrapButtonOn = async (userId, postId)=>{
    return await postScrapDao.postScrapOnByUser(userId, postId);
};

const postScrapButtonOff = async (userId, postId)=>{
    return await postScrapDao.postScrapOffByUser(userId, postId);
};

module.exports = { postScrapButtonOn, postScrapButtonOff }