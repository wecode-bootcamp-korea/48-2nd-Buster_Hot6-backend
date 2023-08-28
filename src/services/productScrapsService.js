const productScrapDao = require("../models/productScrapsDao");

const productScrapButtonOn = async (userId, productId)=>{
    return await productScrapDao.productScrapOnByUser(userId, productId);
};

const productScrapButtonOff = async (userId, productId)=>{
    return await productScrapDao.productScrapOffByUser(userId, productId);
};

module.exports = { productScrapButtonOn, productScrapButtonOff }