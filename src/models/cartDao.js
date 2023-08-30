const { AppDataSource } = require("./dataSource");

const insertCart = async (user_id, product_id, product_count) => {
  try {
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
  } catch (eroor) {
    const error = new Error("DataSource ERROR");
    error.statusCode = 401;
  }
};

const deleteCart = async (user_id, product_id) => {
  try {
    await AppDataSource.query(
      `
    DELETE FROM carts
    WHERE user_id  = ? AND product_id = ?
    `,
      [user_id, product_id]
    );
  } catch (eroor) {
    const error = new Error("DataSource ERROR");
    error.statusCode = 401;
  }
};

const getCartList = async (user_id) => {
  try {
    await AppDataSource.query(
      `
    SELECT c.id, c.user_id, c.product_id, c.product_count
    FROM carts c
    JOIN users u ON c.user_id = u.id
    WHERE c.user_id = ?
    `,
      [user_id]
    );
  } catch (eroor) {
    const error = new Error("DataSource ERROR");
    error.statusCode = 401;
  }
};

module.exports = { insertCart, deleteCart, getCartList };
