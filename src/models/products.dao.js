const { json } = require("express");
const { AppDataSource } = require("./data-source");

const selectProductDetail = async (id) => {
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
    p.created_at, 
    p.updated_at,
    b.name brand_name,
    c.name product_category_name
    FROM products p
    JOIN brands b ON p.brand_id = b.id 
    JOIN products_categories c ON p.products_category_id = c.id
    WHERE p.id = ?;
    `,
    [id]
  );
  return productDetail;
};

module.exports = { selectProductDetail };
