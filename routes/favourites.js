const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');
const itemsHelper = require('../db/queries/items.js');

router.get('/', (req, res) => {
  const userId = req.session.userId;
  // console.log(req.session);
  // req.session.userId --> use this
  // console.log(req.session.userId)
  console.log("User ID", userId);
  itemsHelper.getFavourites(userId)
    .then((data) => {
      const templateVars = { data };
      return res.render("favourites", templateVars)
    });
});

module.exports = router;
