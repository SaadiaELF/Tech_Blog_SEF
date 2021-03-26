const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// The `/api/posts` endpoint

router.post('/', withAuth, async (req, res) => {
  // create a new post
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      author_id: req.session.author_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.delete('/:id', withAuth, async (req, res) => {
   // delete post by id
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        author_id: req.session.author_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  // update post by id
  try {
    const postData = await Post.update({
      title: req.body.title,
      content: req.body.content
    },
      {
        where: {
          id: req.params.id,
        },
      });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
