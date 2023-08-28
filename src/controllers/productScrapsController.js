const productScrapsService = require("../services/productScrapsService");

const productScrapon = async ( req, res ) =>{
    try{
        const { productId } = req.body;
        const userId = req.user.id;

     await productScrapsService.productScrapButtonOn(userId, productId);

     res.status(201).end();
    }
        catch (err) {
        res.status(err.statusCode || 400).json({message: err.message});
    }
};


const productScrapoff = async ( req, res ) =>{
    try{
        const { productId } = req.body;
        const userId = req.user.id;

        await productScrapsService.productScrapButtonOff(userId, productId );

        res.status(201).end();
    }
        catch (err) {
        res.status(err.statusCode || 400).json({message: err.message});
        }
};
module.exports = { productScrapon, productScrapoff };