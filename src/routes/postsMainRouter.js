const express = require('express');
const postsMainController  = require ('../controllers/postsMainController');
const postMainRouter = express.Router();

postMainRouter.get('/category', postsMainController.getCategory);

module.exports = { postMainRouter };