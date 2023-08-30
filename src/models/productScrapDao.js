const { AppDataSource } = require("./dataSource");

const getProductScrapCountByProductId = async (productId) => {
  try {
    const result = await AppDataSource.query(
      `SELECT COUNT(*) AS scrap_count FROM products_scraps WHERE product_id = ?`,
      [productId]
    );

    if (result && result.length > 0) {
      const scrapCount = result[0].scrap_count; // 수정: scrap_count로 변경
      console.log(scrapCount);
      return scrapCount;
    } else {
      throw new Error("No data found for the given postId");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { getProductScrapCountByProductId };
