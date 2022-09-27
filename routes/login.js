const express = require('express');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');
const { getUserByEmail } = require('../views/helper')
const router = express.Router();



router.use(cookieSession({
  name: 'session',
  keys: ["Keys[0]"],
}))

const users = {
};


router.get('/', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/home');
    // this needs to direct to the homepage
  }
  const templateVars = {
    user: users[req.session.userId]
  }
  res.render("login", templateVars);
  console.log("Render Working")
});


router.post('/', (req, res) => {
  const { email, password } = req.body

    if (email === "" || password === "") {
      const templateVars = { errorMessage: "Email or Password not valid" };
      res.status(400);
      return res.render("error", templateVars)
    };

    const userObject = getUserByEmail(email, users);

    if (!userObject) {
      const templateVars = {
        errorMessage: "Email not registered in our Database! Please try again. "
      }
      res.status(403);
      return res.render("error", templateVars)
    }
    if (!bcrypt.compareSync(password, userObject.password)) {
      const templateVars = { errorMessage: "Incorrect password, please try again" }
      res.status(403);
      return res.render("error", templateVars);
    }
    console.log("userObject:", userObject);
    req.session.userId = userObject.id;
    res.redirect('/home');
});

module.exports = router;
