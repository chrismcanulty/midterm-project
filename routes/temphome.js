const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  const templateVars = {
    userId: 67,
    userChatId: "visitor_67",
    sellerChatId: "seller_32"
  }
  console.log('get home', req.session);
  res.render('temphome', templateVars);
});

module.exports = router;
