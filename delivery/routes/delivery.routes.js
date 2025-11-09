const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Delivery API is working' });
});

module.exports = router;
