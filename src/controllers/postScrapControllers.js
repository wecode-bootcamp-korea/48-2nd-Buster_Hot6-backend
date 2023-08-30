const { catchAsync } = require("../utils/error");
const postScrapService = require("../services/postScrapServices");

const postScrapCountByPostId = catchAsync(async (req, res) => {
  const { postId } = req.query;
  const count = await postScrapService.getPostScrapCountByPostId(postId);
  res.status(200).json({ scrapCount: count });
});

module.exports = { postScrapCountByPostId };
