const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');
// const moment = require('moment');

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



module.exports = router;
