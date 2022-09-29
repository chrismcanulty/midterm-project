const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');
const itemsHelper = require('../db/queries/items.js');

router.get('/', (req, res) => {
  const userId = 1;
  console.log("User ID", userId);
  itemsHelper.getFavourites(userId)
    .then((data) => {
      const templateVars = { data };
      return res.render("favourites", templateVars)
    });
});

module.exports = router;
