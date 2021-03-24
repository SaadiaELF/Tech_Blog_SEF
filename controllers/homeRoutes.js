const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

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

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts, logged_in: req.session.logged_in });

  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.render('post', {post, logged_in: req.session.logged_in });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/dashboard', (req, res) => {
  res.render('dashboard', { logged_in: req.session.logged_in });
});
router.get('/newpost', (req, res) => {
  res.render('newpost', { logged_in: req.session.logged_in });
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
