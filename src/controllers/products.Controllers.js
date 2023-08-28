const {productService} = require('../services/productsServices');
const { getAllProducts } = require('../models/productsDao');
const {catchAsync}  = require('../utils/error');

const getProductsByCategoryId = catchAsync(async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const { offset, limit, minPrice, maxPrice, sortBy } = req.query;
        
        const products = await productService(categoryId, offset, limit, minPrice, maxPrice, sortBy);
        res.status(200).json({ products });
    } catch (error){
        console.log(error)
        res.status(500).json({ message: "data Error"});
    }
});

const getProducts = catchAsync(async (req, res, next) => {
    try {
        const products = await getAllProducts();  
        res.status(200).json({products});
    } catch(error){
        console.log(error)
        res.status(500).json({ message: "Server Error"});
    }
});

module.exports = {getProductsByCategoryId, getProducts};