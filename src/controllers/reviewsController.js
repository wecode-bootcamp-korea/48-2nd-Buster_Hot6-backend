const reviewsService = require ("../services/reviewsService");
const { catchAsync } = require('../utils/error')

    const reviewSet = catchAsync(async(req, res) => {
    const userId = req.user.id;
    const reviewSetId = await reviewsService.reviewSet(userId);
    
    res.status(200).json({reviewSetId});
});

const reviewCreate =  catchAsync(async(req, res) => {
    const userId = req.user.id;
    const { productId, content, rating } = req.body;
    const posts = await reviewsService.reviewCreate(productId, userId, content, rating);

    res.status(200).json({ data: posts });  
});

const reviewModify = catchAsync(async(req, res) => {
    const { content, rating, reviewId } = req.body;
    const posts = await reviewsService.reviewModify( content, rating, reviewId);

    res.status(200).json({ data: posts }); 
});

const reviewDelete = catchAsync(async(req, res) => {
    const { reviewId } = req.body;
    const posts = await reviewsService.reviewDelete(reviewId);
    
    res.status(200).json({ data: posts });  
});

module.exports = {
    reviewSet,
    reviewCreate,
    reviewModify,
    reviewDelete
};