const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) =>post.get({ plain: true })  );

    res.render('homepage', { posts, logged_in: req.session.logged_in });

  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { logged_in: req.session.logged_in});
});
router.get('/newpost', (req, res) => {
  res.render('newpost', { logged_in: req.session.logged_in});
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
