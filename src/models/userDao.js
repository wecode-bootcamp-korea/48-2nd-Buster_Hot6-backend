const { AppDataSource } = require('./dataSource');

const getProductsByCategoryId = async (categoryId, offset, limit, orderingQuery, priceRangeQuery) => {
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
    WHERE pc.name = ?  
    LIMIT ?, ?;
    `
    
    [categoryId, offset, limit]
    );
    
    return products;
};

const getAllProducts = async () => {
    const products = await AppDataSource.query(`SELECT p.*, pc.name as category_name, pi.image_url
    FROM products p
    INNER JOIN products_categories pc ON p.products_category_id = pc.id
    LEFT JOIN products_images pi ON p.id = pi.product_id`);
    return products;
};

module.exports = {
    getProductsByCategoryId,
    getAllProducts
};
