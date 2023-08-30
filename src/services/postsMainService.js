const postMainDao = require("../models/postMainDao");

const getPosts = async (postId)=>{
return await postMainDao.getPosts(userId, postId);
};

module.exports = { getPosts }