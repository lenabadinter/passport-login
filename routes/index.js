const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page login/register
router.get('/', (req, res) => {
    res.render('welcome');
});

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    name: req.user.name
  })
);

// app.get('/', function(req, res) {
//     res.render('the-view', { layout: 'specific-layout' });
// );
router.get('/controlpanel', ensureAuthenticated, (req, res) =>
    res.render('controlpanel', { layout: 'controlpanel-layout' })
);

module.exports = router;