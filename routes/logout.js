const express = require('express');
const router = express.Router();

router.get(`/`, (req, res) => {
  req.session = null;
  res.redirect("/login");
  // temporary- remove when logout button is created
})
router.post(`/`, (req,res) => {
  req.session = null;
  res.redirect("/login");
  // for button
})

module.exports = router;
