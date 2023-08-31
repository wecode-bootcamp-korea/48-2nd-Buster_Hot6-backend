const postService = require("../services/postService");
const { catchAsync } = require('../utils/error')

const getCategory = catchAsync(async (req, res) => {
    const getPosts = await postService.getCategory();

res.status(200).json({ getPosts });
});

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

module.exports = { getCategory, getPostScrap, deletePostScrap };