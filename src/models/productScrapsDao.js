const { AppDataSource } = require("./dataSource");

const getProductScrapByUser = async (userId, productId) => {
  try {
  const result = await AppDataSource.query(
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
return result;
  }catch{
   const error = new Error ('dataSource Error');
   error.ststusCode = 400;

   throw error;
  }
}; 

const deleteProductScrapByUser = async (userId, productId) => {
  try {
    const result = await AppDataSource.query(
    `
      DELETE FROM products_scraps
      WHERE user_id = ? AND
      product_id = ?
      ;
      `,
    [userId, productId]
    );
return result;
  }catch{
   const error = new Error ('dataSource Error');
   error.ststusCode = 400;

   throw error;
  }
}; 

module.exports = { getProductScrapByUser, deleteProductScrapByUser };
