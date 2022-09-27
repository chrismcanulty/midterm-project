const express = require('express');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');
const { getUserByEmail } = require('../views/helper')
const router = express.Router();
const db = require('../db/connection');



router.use(cookieSession({
  name: 'session',
  keys: ["Keys[0]"],
}))

const users = {
};


router.get('/', (req, res) => {
  db.query('SELECT * FROM users')
  .then((result) => {
    console.log(result);
  })
  const templateVars = {
    user: users[req.session.userId]
  }
  res.render("login", templateVars);
  console.log("Render Working")
});


router.post('/', (req, res) => {
  const { email, password } = req.body
  db.query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then((result) => {
      if (result.rows.length > 0) {
        console.log(result.rows[0]);
        if(password === result.rows[0].password){
          console.log("password matched")
          res.redirect('/home');
        }
      } else {
        return null;
      }
    })

    // if (email === "" || password === "") {
    //   const templateVars = { errorMessage: "Email or Password not valid" };
    //   res.status(400);
    //   return res.render("error", templateVars)
    // };

    // const userObject = getUserByEmail(email, users);

    // if (!userObject) {
    //   const templateVars = {
    //     errorMessage: "Email not registered in our Database! Please try again. "
    //   }
    //   res.status(403);
    //   return res.render("error", templateVars)
    // }
    // if (!bcrypt.compareSync(password, userObject.password)) {
    //   const templateVars = { errorMessage: "Incorrect password, please try again" }
    //   res.status(403);
    //   return res.render("error", templateVars);
    // }
    // console.log("userObject:", userObject);
    // req.session.userId = userObject.id;
    // res.redirect('/home');
});

module.exports = router;
