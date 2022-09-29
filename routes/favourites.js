const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');
const itemsHelper = require('../db/queries/items.js');

router.get('/', (req, res) => {
  itemsHelper.getFavourites()
    .then((data) => {
      console.log(data);
      const templateVars = { data };
      return res.render("favourites", templateVars)
    });
});

module.exports = router;
