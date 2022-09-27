/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

router.get('/items', (req, res) => {
  itemsHelper.getItems()
    .then((data) => {
      console.log(data);
      const templateVars = { data };
      return res.render("items", templateVars)
    });
});

module.exports = router;
