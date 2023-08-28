const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.Controllers");
const { getProductsByCategoryName } = require("../models/productsDao");

router.get("/", async (req, res) => {
  const { categoryName, categoryId, offset = 0, limit = 10 } = req.query;

  if (categoryName) {
    try {
      const products = await getProductsByCategoryName(categoryName, parseInt(offset), parseInt(limit));
      return res.json(products);
    } catch (error) {
      console.log(error)
      return res.status(500).send(error);
    }
  }

  if (categoryId) {
    try {
      req.params.categoryId = categoryId; // productsController.getProductsByCategoryId가 params를 사용하므로
      productsController.getProductsByCategoryId(req, res);
    } catch (error) {
      console.log(error)
      return res.status(500).send(error);
    }
  }

  if (!categoryName && !categoryId) {
    try {
      productsController.getProducts(req, res);
    } catch (error) {
      console.log(error)
      return res.status(500).send(error);
    }
  }
});

module.exports = router;
