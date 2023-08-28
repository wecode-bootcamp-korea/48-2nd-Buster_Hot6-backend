const { AppDataSource } = require("./dataSource");

const postScrapOnByUser = async (userId, postId) => {
  await AppDataSource.query(
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
};

const postScrapOffByUser = async (userId, postId) => {
  await AppDataSource.query(
    `
      DELETE FROM posts_scraps
      WHERE user_id = ? AND
      post_id = ?
      ;
      `,
    [userId, postId]
  );
};

module.exports = { postScrapOnByUser, postScrapOffByUser };
