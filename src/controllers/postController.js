const postService = require("../services/postService");
const { catchAsync } = require('../utils/error')

const getPostScrap = catchAsync(async (req, res) =>{
    const  { postId }  = req.body;
    const userId = req.user.id;
    const posts = await postService.getPostScrap(userId, postId);

    res.status(200).json({ data: posts });
});

const deletePostScrap = catchAsync (async(req, res) =>{
    const { postId } = req.body;
    const userId = req.user.id;
    const posts = await postService.deletePostScrap(userId, postId);

    res.status(200).json({ data: posts });
});

module.exports = { getPostScrap, deletePostScrap };