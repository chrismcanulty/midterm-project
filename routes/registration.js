const express = require('express');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../db/connection');

router.use(cookieSession({
  name: 'session',
  keys: ["Keys[0]"],
}))


router.get('/', (req, res) => {
  res.render('registration');
});



router.post ('/', (req,res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  const hashPassword = bcrypt.hashSync(password, 10);
  // add new user to database below
      db.query(`
      INSERT INTO users (name, email, password)
      VALUES($1, $2, $3)
      RETURNING *;
      `, [name, email, password ])
      .then((result) => {
        console.log(result.rows[0])
        return result.rows[0];

    })
    .catch((err) => {
      console.log(err.message);
    })
  req.session.userId = userId;
  res.redirect('/login');
});

module.exports = router;
