const express = require('express');
const router = express.Router();

// GET: Admin home
router.get('/', (req, res) => {
  res.send({ message: 'Admin API is working' });
});

// GET: List users
router.get('/users', (req, res) => {
  res.send({
    users: [
      { id: 1, name: 'Alice', role: 'customer' },
      { id: 2, name: 'Bob', role: 'store' }
    ]
  });
});

// GET: List stores
router.get('/stores', (req, res) => {
  res.send({
    stores: [
      { id: 1, name: 'Pizza Place', location: 'Downtown' },
      { id: 2, name: 'Burger Hub', location: 'Uptown' }
    ]
  });
});

// GET: List orders
router.get('/orders', (req, res) => {
  res.send({
    orders: [
      { id: 1, product: 'Pizza', quantity: 2, status: 'pending' },
      { id: 2, product: 'Burger', quantity: 1, status: 'completed' }
    ]
  });
});

module.exports = router;
