/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const itemsHelper = require('../db/queries/items.js');

router.get('/', (req, res) => {
  itemsHelper.getItems()
    .then((data) => {
      console.log(data);
      const templateVars = { data };
      return res.render("items", templateVars)
    });
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

// router.post('/items/:id/edit', (req, res) => {
//   const newItem = req.params.id;
//   if (!req.session.user_id) {
//     return res.redirect('/adminLogin');
//   }

// })

module.exports = router;
