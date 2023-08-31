const express = require ('express');
const reviewsRouter = express.Router();
const reviewsController = require ("../controllers/reviewsController")
const { loginRequired } = require('../utils/auth')

reviewsRouter.get(
    "/reviews",
    loginRequired,
    reviewsController.reviewSet
);
reviewsRouter.post( 
    "/reviews",
    loginRequired, 
    reviewsController.reviewCreate
);
reviewsRouter.put(
    "/reviews",
    loginRequired,
    reviewsController.reviewModify
);
reviewsRouter.delete(
    "/reviews",
    loginRequired,
    reviewsController.reviewDelete
);

module.exports = { reviewsRouter }