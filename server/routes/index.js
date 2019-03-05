const express = require('express');
const Store = require('../controllers/Store')

const router = express.Router();

router.all('/api/v1', (req, res) => res.json({ message: 'Welcome to the venten test API' }));
router.get('/api/v1/products', Store.getProducts);
router.get('/api/v1/products/:id', Store.getProduct);
router.post('/api/v1/products', Store.addProduct);

module.exports = router;