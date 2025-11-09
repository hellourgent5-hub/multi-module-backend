const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Store API is working' });
});

module.exports = router;
