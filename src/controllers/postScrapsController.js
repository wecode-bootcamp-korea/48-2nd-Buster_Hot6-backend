const postScrapsService = require("../services/postScrapsService");

const postScrapOn = async ( req, res ) =>{
    try{
        const  { postId }  = req.body;
        const userId = req.user.id;
     await postScrapsService.postScrapButtonOn(userId, postId);

     res.status(201).end();
    }
        catch (err) {
        res.status(err.statusCode || 400).json({message: err.message});
    }
};


const postScrapOff = async ( req, res ) =>{
    try{
        const { postId } = req.body;
        const userId = req.user.id;

        await postScrapsService.postScrapButtonOff(userId, postId );

        res.status(201).end();
    }
        catch (err) {
        res.status(err.statusCode || 400).json({message: err.message});
        }
};
module.exports = { postScrapOn, postScrapOff };