const express = require('express');
const productService = require('./services/productService');

const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productService.getProductById(id);
    if (!product) {
      res.status(404).json({ message: `Product with id ${id} not found` });
    } else {
      res.json(product);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching product by id' });
  }
});

module.exports = router;