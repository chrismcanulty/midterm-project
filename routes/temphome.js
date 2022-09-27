const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Temporary Home page')
});

module.exports = router;
