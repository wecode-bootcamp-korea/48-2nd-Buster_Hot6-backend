const productScrapDao = require("../models/productScrapsDao");

const getProductScrap = async (userId, productId)=>{
    return await productScrapDao.getProductScrapByUser(userId, productId);
};

const deleteProductScrap = async (userId, productId)=>{
    return await productScrapDao.deleteProductScrapByUser(userId, productId);
};

module.exports = { getProductScrap, deleteProductScrap }