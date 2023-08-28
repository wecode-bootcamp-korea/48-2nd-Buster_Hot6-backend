const { AppDataSource } = require("./data-source");

const insertCart = async (user_id, product_id, product_count) => {
  await AppDataSource.query(
    `
    INSERT INTO carts (
      user_id,
      product_id,
      product_count
    ) VALUES (
      ?,
      ?,
      ?
    );
    `,
    [user_id, product_id, product_count]
  );
};

const deleteCart = async (user_id, product_id) => {
  await AppDataSource.query(
    `
    DELETE FROM carts
    WHERE user_id  = ? AND product_id = ?
    `,
    [user_id, product_id]
  );
};

module.exports = { insertCart, deleteCart };
