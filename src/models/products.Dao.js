const { AppDataSource} = require('./dataSource'); 

const getProductsByCategoryId = async (categoryId, offset, limit, orderingQuery, priceRangeQuery) => {
    const query = `
    p.id AS productId,
    p.name AS productName,
    p.price AS productPrice,
    p.discount_percentage AS productDiscountPercentage,
    p.brand_id AS productBrandId,
    p.stock AS productStock,
    p.description AS productDescription,
    p.created_at AS productCreatedAt
    FROM products pw
    WHERE p.products_category_id=?
    ${priceRangeQuery}
    ${orderingQuery}
LIMIT ?, ?`;
    
    const products = await AppDataSource.query(query, [categoryId, offset, limit]);
    return products;
};

const ordering = async (sortBy) => {

    return sortBy === 'asc' ? 'ORDER BY p.created_at ASC' : 'ORDER BY p.created_at DESC';
};

const priceRange = async (minPrice, maxPrice) => {

    if (minPrice && maxPrice) {
        return `AND o.price BETWEEN ${minPrice} AND ${maxPrice}`;
    }
    return '';
};

module.exports = {
    getProductsByCategoryId,
    ordering,
    priceRange
};
