const { AppDataSource } = require("../models/dataSource");

const getPostScrapCountByPostId = async (postId) => {
  try {
    const result = await AppDataSource.query(
      `SELECT 
      COUNT(*) AS scrap_count 
      FROM posts_scraps p  
      WHERE p.post_id = ?`,
      [postId]
    );

    if (result && result.length > 0) {
      const scrapCount = result[0].scrap_count;
      return scrapCount;
    } else {
      throw new Error("No data found for the given postId");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { getPostScrapCountByPostId };
