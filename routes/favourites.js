const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');
const itemsHelper = require('../db/queries/items.js');

router.get('/', (req, res) => {
  const user = req.session.userId;
  itemsHelper.getFavourites(user)
    .then((data) => {
      const templateVars = { data, user };
      return res.render("favourites", templateVars)
    });
});

module.exports = router;
