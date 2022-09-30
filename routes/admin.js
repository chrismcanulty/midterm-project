const express = require('express');
const router  = express.Router();
const itemsHelper = require('../db/queries/items.js');
const db = require('../db/connection');


router.get('/', (req, res) => {
  db.query('SELECT * FROM users WHERE users.id = $1', [req.session.userId])
  .then((result) => {
  itemsHelper.getItems()
    .then((data) => {
      console.log(data);
      const templateVars = { data,
        user: result.rows[0] };
      return res.render("admin", templateVars)
    });
  })
});

// below should be a get request - if possible come back and refactor to get request

router.post('/', (req, res) => {
  const minValue = req.body.text[0];
  const maxValue = req.body.text[1];
  const templateVars = { minValue, maxValue };
  itemsHelper.filterItemsByPrice(minValue, maxValue)
    .then((data) => {
      const templateVars = { data };
      return res.render("items", templateVars)
    })
});

module.exports = router;


module.exports = router;
