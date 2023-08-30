const { catchAsync } = require("../utils/error");
const { getProductsByCategoryName, getAllProducts } = require("../models/productsDao");
const { productService } = require("../services/productsServices");

const getProductsByCategoryId = catchAsync(async (req, res) => {
    const { categoryId } = req.query; 
    console.log(categoryId)
    const { offset = 0, limit = 10} = req.query; 

    const products = await productService(categoryId, parseInt(offset), parseInt(limit));
    
    res.status(200).json({ products });
});

const getProducts = catchAsync(async (req, res) => {
    
    const products = await getAllProducts();  

    res.status(200).json({ products });
});

const handleGetProductsByCategory = catchAsync(async (req, res) => {
    const { categoryName, categoryId, offset = 0, limit = 10 } = req.query;
    
    if (categoryName) {
    const products = await getProductsByCategoryName(categoryName, parseInt(offset), parseInt(limit));
    return res.json(products);
    }

    if (categoryId) {
    req.query.categoryId = categoryId;
    return getProductsByCategoryId(req, res);
    }

    if (!categoryName && !categoryId) {
    return getProducts(req, res);
    }
});

module.exports = {
    getProductsByCategoryId, 
    getProducts, 
    handleGetProductsByCategory
};