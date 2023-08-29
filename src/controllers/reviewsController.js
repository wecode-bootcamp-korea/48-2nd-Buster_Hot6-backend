const reviewsService = require ("../services/reviewsService");

const reviewSet = async (req, res)=> {
    try{
        const userId = req.user.id;
        const reviewSetId = await reviewsService.reviewSet(userId);
    
        res.status(200).json({reviewSetId});
    } catch (err) {
        res.status(err.statusCode || 400).json({ message: err.message });
    }
};

const reviewCreate = async (req,res) => {
    try {
        const userId = req.user.id;
        const { content, rating } = req.body;
        
        await reviewsService.reviewCreate(userId, content, rating);

        res.status(201).end();
    } catch (err) {
        res.status(err.statusCode || 400).json({ message: err.message });
    }
};

const reviewModify = async (req, res) => {
    try {
        const { content, rating, reviewId } = req.body;

        await reviewsService.reviewModify( content, rating, reviewId);

        res.status(201).end();
    } catch (err) {
        res.status(err.statusCode || 400).json({ message: err.message });
    }
};

const reviewDelete = async (req, res) =>{
    try{
        const { reviewId } = req.body;
        
        const result = await reviewsService.reviewDelete(reviewId);
        console.log("DELETE", result)
        res.status(201).json({ message: "success Delete"});
    } catch (err) {
        res.sgtatus(err.statusCode || 400).json({ message: err.message});
    }
};

module.exports = {
    reviewSet,
    reviewCreate,
    reviewModify,
    reviewDelete
};