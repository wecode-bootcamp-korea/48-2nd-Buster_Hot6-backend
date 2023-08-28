const { categoryService } = require('../services/productsServices');
const { getAllProducts } = require('../models/productsDao');

const getProductsByCategoryId = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const { offset, limit, minPrice, maxPrice, sortBy } = req.query;
        
        const products = await categoryService(categoryId, offset, limit, minPrice, maxPrice, sortBy);

        res.status(200).json({ products });
    } catch (error) {
        next(error);
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();  
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error'});
    }
};

module.exports = {getProductsByCategoryId, getProducts};