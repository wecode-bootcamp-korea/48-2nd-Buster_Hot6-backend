const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.Controllers");
const { getProductsByCategoryName } = require("../models/productsDao");


router.get('/byName/:categoryName', async (req, res) => {
  const { categoryName } = req.params;
  const { offset = 0, limit = 10 } = req.query;
  try {
    const products = await getProductsByCategoryName(categoryName, parseInt(offset), parseInt(limit));
    res.json(products);
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});
router.get('/:categoryId', productsController.getProductsByCategoryId);
router.get('/', productsController.getProducts);


module.exports = router;