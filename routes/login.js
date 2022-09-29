const express = require('express');
// const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');
const { getUserByEmail } = require('../views/helper')
const router = express.Router();
const db = require('../db/connection');



// router.use(cookieSession({
//   name: 'session',
//   keys: ["Keys[0]"],
// }))

const users = {
};


router.get('/', (req, res) => {
  db.query('SELECT * FROM users')
  .then((result) => {
    console.log(result);
  })
  const templateVars = {
    user: users[req.session.userId],
    userLogin: true
  }
  res.render("login", templateVars);
  console.log("Render Working")
});


router.post('/', (req, res) => {
  const { email, password } = req.body
  db.query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then((result) => {
      if (result.rows.length > 0) {
        console.log('\n post login \n', result.rows[0]);
        if(password === result.rows[0].password){
          req.session.userId = result.rows[0].id
          console.log("password matched")
          res.redirect('/home');
        }
      } else {
        return null;
      }
    })
});

module.exports = router;
