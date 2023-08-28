const cartService = require("../services/products.service");

const selectProductDetail = async (req, res) => {
  try {
    const { productId } = req.body;

    const productDetail = await cartService.selectProductDetail(productId);
    res.status(201).json(productDetail);
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { selectProductDetail };
