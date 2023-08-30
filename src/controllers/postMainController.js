const postMainService = require('../controllers/postMainService')
const { catchAsync } = require('../utils/error')

const getposts = catchAsync catchAsync(async (req, res) => {
    const postCartegoriesId = req.
    const getPosts = await postMainService.getPosts(postsId)


    const reviewSet = catchAsync(async(req, res) => {
        const userId = req.user.id;
        const reviewSetId = await reviewsService.reviewSet(userId);
        
        res.status(200).json({reviewSetId});
    });