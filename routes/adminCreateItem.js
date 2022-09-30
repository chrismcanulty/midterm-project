const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get(`/`, (req, res) => {
  db.query('SELECT * FROM users WHERE users.id = $1', [req.session.userId])
  .then((result) => {
    const templateVars = {
      user: result.rows[0],
      userLogin: true,
      loggedIn: false
    }
    res.render(`adminCreateItem`, templateVars);
  });
})

router.post(`/`, (req, res) => {
  const { title, description, thumbnail, coverPhoto, price, dateListed } = req.body
  db.query(`
  INSERT INTO items (title, description, thumbnail_photo_url, cover_photo_url, price, date_listed)
  VALUES($1, $2, $3, $4, $5, $6)
  RETURNING *;
  `, [title, description, thumbnail, coverPhoto, price, dateListed])
  .then((result) => {
    console.log(result.rows[0])
    res.redirect(`/items`);
  })
  .catch((err) => {
    console.log(err.message);
  })
;})

module.exports = router;
