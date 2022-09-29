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
      // TODO: need to modify templateVars so it passes in user object
      const templateVars = {
        data,
        user: true,
      };
      return res.render("items", templateVars)
    });
});

// below should be a get request - if possible come back and refactor to get request

router.get('/filtered', (req, res) => {
  const minValue = req.query.textMin;
  const maxValue = req.query.textMax;
  // TODO: need to modify templateVars so it passes in user object
  itemsHelper.filterItemsByPrice(minValue, maxValue)
    .then((data) => {
      const templateVars = { data, user: true };
      return res.render("items", templateVars)
    })
});

// add route to add item to favourites database - post request
// res.redirect at the end of the post request



module.exports = router;
