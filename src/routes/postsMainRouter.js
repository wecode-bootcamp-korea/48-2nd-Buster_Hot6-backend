const express = require('express');
const { postsMainController } = requir ('../controllers/postMainController');

const routes = express.Router();

routes.get('/category', postsMainController.getCategory);
routes.get('/all', postsMainController.getAllCategory)

module.exports = { userRouter };