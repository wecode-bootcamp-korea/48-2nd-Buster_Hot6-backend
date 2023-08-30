const { AppDataSource } = require("./dataSource");

const getProductsByCategoryId = async (
  categoryId,
  offset,
  limit,
  orderingQuery,
  priceRangeQuery
) => {
  try {
    const products = await AppDataSource.query(
      `
        SELECT 
        p.id, 
        p.products_category_id, 
        p.name, 
        p.price, 
        p.discount_percentage, 
        p.brand_id, 
        p.stock, 
        p.description, 
        p.created_at, 
        p.updated_at, 
        pc.name as category_name,
        pi.image_url
        FROM products p
        INNER JOIN products_categories pc ON p.products_category_id = pc.id
        LEFT JOIN products_images pi ON p.id = pi.product_id
        WHERE pc.id = ?  
        LIMIT ?, ?;
        `,
      [categoryId, offset, limit]
    );
    return products;
  } catch (eroor) {
    const error = new Error("DataSource ERROR CategoryId");
    error.statusCode = 401;
  }
};

const getAllProducts = async () => {
  try {
    const products = await AppDataSource.query(`
            SELECT 
            p.id, 
            p.products_category_id, 
            p.name, 
            p.price, 
            p.discount_percentage, 
            p.brand_id, 
            p.stock, 
            p.description, 
            p.created_at, 
            p.updated_at, 
            pc.name as category_name, 
            pi.image_url
            FROM products p
            INNER JOIN products_categories pc ON p.products_category_id = pc.id
            LEFT JOIN products_images pi ON p.id = pi.product_id
            `);
    return products;
  } catch (eroor) {
    const error = new Error("DataSource ERROR Products");
    error.statusCode = 401;
  }
};

const getProductsByCategoryName = async (categoryName, offset, limit) => {
  try {
    const products = await AppDataSource.query(
      `
            SELECT 
            p.id, 
            p.products_category_id, 
            p.name, 
            p.price, 
            p.discount_percentage, 
            p.brand_id, 
            p.stock, 
            p.description, 
            p.created_at, 
            p.updated_at, 
            pc.name as category_name,
            pi.image_url
            FROM products p
            INNER JOIN products_categories pc ON p.products_category_id = pc.id
            LEFT JOIN products_images pi ON p.id = pi.product_id
            WHERE pc.name = ? 
            LIMIT ?, ?;
            `,
      [categoryName, offset, limit]
    );
    return products;
  } catch (eroor) {
    const error = new Error("DataSource ERROR CategoryName");
    error.statusCode = 401;
  }
};

const selectProductDetailDao = async (id) => {
  try {
    const productDetail = await AppDataSource.query(
      `
          SELECT 
          p.name, 
          p.price, 
          p.discount_percentage,
          p.brand_id,
          p.products_category_id,
          p.stock, 
          p.description, 
          date_format(r.created_at, '%y-%m-%d') as created_at, 
          date_format(r.updated_at, '%y-%m-%d') as updated_at,
          b.name brand_name,
          c.name product_category_name,
          i.image_url,
          r.user_id as review_user_id,
          r.content as review_content,
          r.rating as review_rating,
          date_format(r.created_at, '%y-%m-%d') as review_created_at,
          date_format(r.updated_at, '%y-%m-%d') as review_updated_at
          FROM products p
          JOIN brands b ON p.brand_id = b.id 
          JOIN products_categories c ON p.products_category_id = c.id
          JOIN products_images i ON i.product_id = p.id
          LEFT JOIN reviews r ON r.product_id = p.id
          WHERE p.id = 1;
          `,
      [id]
    );
    return productDetail;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  getProductsByCategoryId,
  getAllProducts,
  getProductsByCategoryName,
  selectProductDetailDao,
};
