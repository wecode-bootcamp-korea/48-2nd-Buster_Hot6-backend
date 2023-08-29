const express = require ('express');
const reviewsRouter = express.Router();
const reviewsController = require ("../controllers/reviewsController")
const { loginRequired } = require('../utils/auth')

reviewsRouter.get(
    "/set",
    loginRequired,
    reviewsController.reviewSet
  );

reviewsRouter.post( 
    "/contentup",
    loginRequired, 
    reviewsController.reviewCreate
);

reviewsRouter.put(
    "/modify",
    loginRequired,
    reviewsController.reviewModify
);

reviewsRouter.delete(
    "/delete",
    loginRequired,
    reviewsController.reviewDelete
);

module.exports = { reviewsRouter }