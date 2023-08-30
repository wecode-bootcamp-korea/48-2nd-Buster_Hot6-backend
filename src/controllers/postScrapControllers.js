const { catchAsync } = require("../utils/error");
const postScrapService = require("../services/postScrapServices");

const postScrapCountByPostId = catchAsync(async (req, res) => {
  try {
    const { postId } = req.query;
    /*  console.log(req.query);
    console.log(postId); */
    const count = await postScrapService.getPostScrapCountByPostId(postId);
    res.status(200).json({ scrapCount: count });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
});

module.exports = { postScrapCountByPostId };
