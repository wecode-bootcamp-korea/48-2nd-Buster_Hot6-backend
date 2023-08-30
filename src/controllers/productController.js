const productScrapsService = require("../services/productService");
const { catchAsync } = require('../utils/error')

const getProductScrap = catchAsync(async(req, res) =>{
    const { productId } = req.body;
    const userId = req.user.id;
    const posts = await productScrapsService.getProductScrap(userId, productId);

    res.status(200).json({ data: posts });
});


const deletproductScrap = catchAsync(async( req, res ) => {
    const { productId } = req.body;
    const userId = req.user.id;
    const posts = await productScrapsService.deletproductScrap(userId, productId );

    res.status(200).json({ data: posts });
});
module.exports = { getProductScrap, deletproductScrap };