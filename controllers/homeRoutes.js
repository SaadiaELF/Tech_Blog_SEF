const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: [
        'id',
        'title',
        'content',
        'date'
      ],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['comment_text','time'],
          include: {
            model: User,
            attributes: ['username']
          },
        }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts, logged_in: req.session.logged_in });
    console.log(posts)
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: [
        'id',
        'title',
        'content',
        'date'
      ],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['username']
          },
        }],
    });

    const post = postData.get({ plain: true });
    res.render('post', { post, logged_in: req.session.logged_in });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        author_id: req.session.author_id
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { posts, logged_in: req.session.logged_in });

  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/edit-post/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'content',
      ],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('edit-post', { post, logged_in: req.session.logged_in });

  } catch (error) {
    res.status(500).json(error);
  }
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
