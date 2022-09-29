const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  db.query('SELECT * FROM users WHERE users.id = $1', [req.session.userId])
  .then((result) => {
    const templateVars = {
      user: result.rows[0],
      userLogin: true,
      loggedIn: false,
      userId: 67,
      loggedIn: true,
      userChatId: "visitor_67",
      sellerChatId: "seller_32"
    }
    res.render('temphome', templateVars);
  });
    console.log('get home', req.session);
});

module.exports = router;
