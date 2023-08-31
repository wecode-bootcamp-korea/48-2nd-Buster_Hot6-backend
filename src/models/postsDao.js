const { AppDataSource } = require("./dataSource");

const getPostScrap = async (userId, postId) => {
  try {
    const [result] = await DataSource.query(
      `
      INSERT INTO posts_scraps (
      user_id,
      post_id
      ) VALUES (
        ?, ?
      );
      `,
      [userId, postId]
    );
    return result;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

const deletePostScrap = async (userId, postId) => {
  try {
    const [result] = await AppDataSource.query(
      `
      DELETE FROM posts_scraps
      WHERE user_id = ? AND
      post_id = ?
      ;
      `,
      [userId, postId]
    );
    return result;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

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

module.exports = { getPostScrap, deletePostScrap, getPostScrapCountByPostId };
