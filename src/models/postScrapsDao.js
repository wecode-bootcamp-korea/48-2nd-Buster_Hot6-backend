const { AppDataSource } = require("./dataSource");

const getPostScrapByUser = async (userId, postId) => {
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


const deletePostScrapByUser = async (userId, postId) => {
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

module.exports = { getPostScrapByUser, deletePostScrapByUser };
