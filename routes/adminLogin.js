const express = require('express');
const bcrypt = require('bcryptjs');
const { getUserByEmail } = require('../views/helper')
const router = express.Router();
const db = require('../db/connection');




const users = {
};


router.get('/', (req, res) => {
  db.query('SELECT * FROM admins')
  .then((result) => {
    console.log(result);
  })
  const templateVars = {
    user: users[req.session.userId],
    userLogin: false
  }
  res.render("login", templateVars);
});


router.post('/', (req, res) => {
  const { email, password } = req.body
  db.query(`SELECT * FROM admins WHERE email = $1;`, [email])
    .then((result) => {
      if (result.rows.length > 0) {
        console.log(result.rows[0]);
        if(password === result.rows[0].password){
          console.log("password matched")
          res.redirect('/items');
        }
      } else {
        return null;
      }
    })
});

module.exports = router;
