const { AppDataSource } = require("./dataSource");

const productScrapOnByUser = async (userId, productId) => {
  await AppDataSource.query(
    `
      INSERT INTO products_scraps (
      user_id,
      product_id
      ) VALUES (
        ?, ?
      );
      `,
    [userId, productId]
  );
};

const productScrapOffByUser = async (userId, productId) => {
  await AppDataSource.query(
    `
      DELETE FROM products_scraps
      WHERE user_id = ? AND
      product_id = ?
      ;
      `,
    [userId, productId]
  );
};

module.exports = { productScrapOnByUser, productScrapOffByUser };
