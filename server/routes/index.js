const express = require('express');
const Store = require('../controllers/Store')

const router = express.Router();

router.all('/', (req, res) => res.json({
  message: 'Welcome people from venten',
  endpoints: [
    { Welcome: 'localhost:8080/api/v1/products'},
    { products: 'localhost:8080/api/v1/products'},
    { SingleProducts: 'localhost:8080/api/v1/products/1'}
  ]
}))
router.all('/api/v1', (req, res) => res.json({ message: 'Welcome to the venten test API' }));
router.get('/api/v1/products', Store.getProducts)
router.get('/api/v1/products/:id', Store.getProduct)

module.exports = router;