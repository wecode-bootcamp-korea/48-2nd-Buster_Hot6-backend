const reviewsDao = require ("../models/reviewsDao");

const reviewSet = async (userId) =>{
    return await reviewsDao.setReview(userId);
};

const reviewCreate = async (productId, userId, content, rating) =>{
    await reviewsDao.createReview(productId, userId, content, rating);
};

const reviewModify = async (content, rating, reviewId ) =>{
    await reviewsDao.modifyReview(content, rating, reviewId );
};

const reviewDelete = async (reviewId)=>{
    await reviewsDao.deleteReview(reviewId);
};

module.exports = { reviewSet, reviewCreate, reviewModify, reviewDelete}