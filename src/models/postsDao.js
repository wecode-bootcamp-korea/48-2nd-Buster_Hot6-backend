const  { AppDataSource }  = require("./dataSource");

const getCategory = async () => {
  try{
    const result = await AppDataSource.query(
    `
      SELECT
      p.id,
      p.post_categories_id AS postCategoriesId,
      p.title,
      p.content,
      p.user_id AS userId, 
      p.image
      FROM posts p
      `,
    []
  );
  return result
} catch {
  const error = new Error('dataSource Error');
  error.statusCode = 400;

  throw error;
  }
};


const getPostScrap = async (userId, postId) => {
  try{
    const result = await AppDataSource.query(
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
    const result = await AppDataSource.query(
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

const getPostDetailById = async (postId) => {
  try {
    const postDetail = await AppDataSource.query(
      `
          SELECT 
          p.id as post_id, 
          p.title as title, 
          p.content as content,
          c.name as category_name,
          u.nickname as user_name,
          date_format(p.created_at, '%y-%m-%d') as created_at, 
          date_format(p.updated_at, '%y-%m-%d') as updated_at
          FROM posts p
          JOIN post_categories c ON p.post_categories_id = c.id
          JOIN users u ON p.user_id = u.id
          WHERE p.id = ?;
          `,
      [postId]
    );
    return postDetail;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;
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

module.exports = {
  getCategory,
  getPostScrap,
  deletePostScrap,
  getPostDetailById,
  getPostScrapCountByPostId,
};
