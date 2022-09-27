const express = require('express');
const cookieSession = require('cookie-session');
const bcypt = require('bcryptjs');
const router = express.Router();

router.use(cookieSession({
  name: 'session',
  keys: ["Keys[0]"],
}))

const users = {

};

router.get ('/', (req,res) => {
  res.render('registration')
  // res.render('registration');
});

module.exports = router;
