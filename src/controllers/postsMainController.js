const postMainService = require ('../services/postsMainService')
const { catchAsync } = require ('../utils/error')

const getCategory = catchAsync(async (req, res) => {
    const getPosts = await postMainService.getPosts();

res.status(200).json({ getPosts });
});

module.exports = { getCategory };