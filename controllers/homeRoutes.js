const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Render homepage
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
          attributes: ['id', 'username'],
        },
        {
          model: Comment,
          attributes: ['comment_text', 'time'],
          include: {
            model: User,
            attributes: ['id', 'username']
          },
        }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts, logged_in: req.session.logged_in });
  } catch (error) {
    res.status(500).json("Error: Cannot render the page");
  }
});

// Render post page
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: [
        'id',
        'title',
        'content',
        'date',
        'author_id'
      ],
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['id', 'username']
          },
        }],
    });

    const post = postData.get({ plain: true });
    res.render('post', { post, logged_in: req.session.logged_in });

  } catch (err) {
    res.status(500).json("Error: Cannot render the page");
  }
});

// Render add-comment page if the user logged in
router.get('/post/:id/add-comment', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: [
        'id',
        'title',
        'content',
        'date',
        'author_id'
      ],
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['id', 'username']
          },
        }],
    });

    const post = postData.get({ plain: true });
    res.render('add-comment', { post, logged_in: req.session.logged_in });

  } catch (err) {
    console.log(err);
    res.status(500).json("Error: Cannot render the page");
  }
});

// Render dashboard if the user logged in
router.get('/dashboard', withAuth, async (req, res) => {
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
    res.status(500).json("Error: Cannot render the page");
  }
});

// Render edit-post page if the user logged in
router.get('/edit-post/:id', withAuth, async (req, res) => {
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
    res.status(500).json("Error: Cannot render the page");
  }
});

// Render newpost form if the user logged in
router.get('/newpost', withAuth, (req, res) => {
  try {
    res.render('newpost', { logged_in: req.session.logged_in });
  } catch (error) {
    res.status(500).json("Error: Cannot render the page");
  }
});

// Render homepage if the user logged in else render login page
router.get('/login', (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');

  } catch (error) {
    res.status(500).json("Error: Cannot render the page");
  }
});

// Render signup page
router.get('/signup', (req, res) => {
  try {
    res.render('signup');
  } catch (error) {
    res.status(500).json("Error: Cannot render the page");
  }
});



module.exports = router;
