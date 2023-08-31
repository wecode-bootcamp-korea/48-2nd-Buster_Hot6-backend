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
    throw error;
  }
};

module.exports = { getPostScrap, deletePostScrap, getPostDetailById };
