const { AppDataSource } = require("./dataSource");

const getAllProducts = async (offset = 0, limit = 10) => {
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
            b.name as brand_name,
            pi.image_url
            FROM products p
            INNER JOIN products_categories pc ON p.products_category_id = pc.id
            INNER JOIN products_images pi ON p.id = pi.product_id
            LEFT JOIN brands b ON b.id = p.brand_id
            LIMIT ?, ?;
            `,
      [offset, limit]
    );
    return products;
  } catch (eroor) {
    const error = new Error("DataSource ERROR Products");
    error.statusCode = 401;
  }
};

const getProductsByCategoryId = async (categoryId, offset = 0, limit = 10) => {
  try {
    const products = await AppDataSource.query(
      `
        SELECT 
        p.id, 
        p.products_category_id, 
        p.name, 
        p.price, 
        p.discount_percentage,
        p.stock, 
        p.description, 
        p.created_at, 
        p.updated_at, 
        pc.name as category_name,
        b.name as bradn_name,
        pi.image_url
        FROM products p
        INNER JOIN products_categories pc ON p.products_category_id = pc.id
        INNER JOIN products_images pi ON p.id = pi.product_id
        LEFT JOIN brands b ON b.id = p.brand_id
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

const getProductDetailById = async (productId) => {
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
          WHERE p.id = ?;
          `,
      [productId]
    );
    return productDetail;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;
    throw error;
  }
};

const getProductScrapCountByProductId = async (productId) => {
  try {
    const result = await AppDataSource.query(
      `SELECT COUNT(*) AS scrap_count FROM products_scraps WHERE product_id = ?`,
      [productId]
    );

    if (result && result.length > 0) {
      const scrapCount = result[0].scrap_count;
      return scrapCount;
    } else {
      throw new Error("No data found for the given postId");
    }
  } catch (error) {
    throw error;
  }
};

const getProductScrap = async (userId, productId) => {
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
  } catch {
    const error = new Error("dataSource Error");
    error.ststusCode = 400;

    throw error;
  }
};

const deleteProductScrap = async (userId, productId) => {
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
  } catch {
    const error = new Error("dataSource Error");
    error.ststusCode = 400;

    throw error;
  }
};

module.exports = {
  getAllProducts,
  getProductsByCategoryId,
  getProductDetailById,
  getProductScrapCountByProductId,
  getProductScrap,
  deleteProductScrap,
};
