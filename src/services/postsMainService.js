const postMainDao = require("../models/postMainDao");

const getPosts = async ()=>{
return await postMainDao.getPosts()
};

module.exports = { getPosts }