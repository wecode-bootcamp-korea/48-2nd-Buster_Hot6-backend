const { AppDataSource } = require("./dataSource");

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
    const [result] = await AppDataSource.query(
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
  return result
} catch {
  const error = new Error('dataSource Error');
  error.statusCode = 400;

  throw error;
  }
}


const deletePostScrap = async (userId, postId) => {
  try{
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
  const error = new Error('dataSource Error');
  error.statusCode = 400;

  throw error;
}
};

module.exports = { getCategory, getPostScrap, deletePostScrap };
