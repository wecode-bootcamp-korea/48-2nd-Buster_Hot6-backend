const { catchAsync } = require("../utils/error");
const productScrapService = require("../services/productScrapServices");

const productScrapCountByProductId = catchAsync(async (req, res) => {
  try {
    const { productId } = req.query;
    /*     console.log(req.query); */
    if (!productId) {
      throw new Error("productId is required."); // 예상되는 에러에 대한 메시지 추가
    }

    const count = await productScrapService.getProductScrapCountByProductId(
      productId
    );
    res.status(200).json({ scrapCount: count });
  } catch (err) {
    console.error(err); // 에러를 콘솔에 기록
    res.status(500).json({ message: "Internal Server Error" }); // 클라이언트에 더 유용한 에러 메시지를 제공
  }
});

module.exports = { productScrapCountByProductId };
