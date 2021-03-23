const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage', { logged_in: req.session.logged_in, });
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { logged_in: req.session.logged_in, });
});
router.get('/newpost', (req, res) => {
  res.render('newpost');
});
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


router.get('/signup', (req, res) => {
  res.render('signup');
});



module.exports = router;
