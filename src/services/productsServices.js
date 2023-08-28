const { getProductsByCategoryId } = require('../models/productsDao');

const categoryService = async (categoryId, offset, limit, minPrice, maxPrice, sortBy) => {

const ordering = async (sortBy) => {
    switch (sortBy) {
    case 'priceASC':
        return 'ORDER BY price ASC, id ASC';
    case 'priceDESC':
        return 'ORDER BY price DESC, id ASC';
    case 'nameASC':
        return 'ORDER BY name ASC, id ASC';
    case 'newest':
        return 'ORDER BY created_at DESC, id ASC';
    default:
        return 'ORDER BY id';
    }
};

    const priceRange = async (minPrice, maxPrice) => {
    if (!minPrice && !maxPrice) return ' AND price >= 0';
    if (minPrice === 0) return ` AND (price >= 0 AND price < ${maxPrice})`;
    return ` AND (price >= ${minPrice} AND price < ${maxPrice})`;
};

    const orderingQuery = await ordering(sortBy);
    const priceRangeQuery = await priceRange(minPrice, maxPrice);

    return await getProductsByCategoryId(categoryId, offset, limit, orderingQuery, priceRangeQuery);
};


module.exports = {
    categoryService,
};
