const express = require('express');
// const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../db/connection');

// router.use(cookieSession({
//   name: 'session',
//   keys: ["Keys[0]"],
// }))


router.get('/', (req, res) => {
  db.query('SELECT * FROM users WHERE users.id = $1', [req.session.userId])
  .then((result) => {
    const templateVars = {
      user: result.rows[0],
      userRegister: false,
      userLogin: true,
      loggedIn: false
    }
  res.render('registration', templateVars);
  })
});



router.post ('/', (req,res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;


  const hashPassword = bcrypt.hashSync(password, 10);
      db.query(`
      INSERT INTO admins (name, email, password)
      VALUES($1, $2, $3)
      RETURNING *;
      `, [name, email, password ])
      .then((result) => {
        console.log(result.rows[0])
        req.session.userId = result.rows[0].id
        res.redirect('/home');

    })
    .catch((err) => {
      console.log(err.message);
    })
});

module.exports = router;
