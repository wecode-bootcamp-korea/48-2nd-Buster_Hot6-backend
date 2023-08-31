const postService = require("../services/postService");
const { catchAsync } = require("../utils/error");

const getPostScrap = catchAsync(async (req, res) => {
  const { postId } = req.body;
  const userId = req.user.id;
  const posts = await postService.getPostScrap(userId, postId);

  res.status(200).json({ data: posts });
});

const deletePostScrap = catchAsync(async (req, res) => {
  const { postId } = req.body;
  const userId = req.user.id;
  const posts = await postService.deletePostScrap(userId, postId);

  res.status(200).json({ data: posts });
});

const postScrapCountByPostId = catchAsync(async (req, res) => {
  const { postId } = req.query;
  const count = await postService.getPostScrapCountByPostId(postId);
  res.status(200).json({ scrapCount: count });
});

const getPostDetail = catchAsync(async (req, res) => {
  const postId = req.params.postId;
  const postDetail = await postService.getPostDetailById(postId);
  return res.status(201).json(postDetail);
});

module.exports = { getPostScrap, deletePostScrap, postScrapCountByPostId };
