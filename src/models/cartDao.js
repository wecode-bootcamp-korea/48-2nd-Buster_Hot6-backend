const { AppDataSource } = require("./dataSource");

const insertCart = async (userId, productId, productCount) => {
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
      [userId, productId, productCount]
    );
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;
    throw error;
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
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;
    throw error;
  }
};

const getCartList = async (user_id) => {
  try {
    const cartList = await AppDataSource.query(
      `
    SELECT 
      c.product_id, 
      i.image_url as image, 
      p.name as product_name, 
      p.price, 
      b.name as brand_name
    FROM carts c
    JOIN users u ON c.user_id = u.id
    JOIN products p ON c.product_id = p.id
    JOIN products_images i ON i.product_id = p.id
    JOIN brands b ON b.id = p.brand_id
    WHERE c.user_id = ?
    `,
      [user_id]
    );
    return cartList;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = { insertCart, deleteCart, getCartList };