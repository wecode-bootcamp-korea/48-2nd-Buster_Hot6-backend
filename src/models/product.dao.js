const { json } = require("express");
const { AppDataSource } = require("./dataSource");

const selectProductDetail = async (id) => {
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

module.exports = { selectProductDetail };
