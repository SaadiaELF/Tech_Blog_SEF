const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// The `/api/comments` endpoint

router.post('/', withAuth, async (req, res) => {
  // create a new comment
  try {
    const newComment = await Comment.create({
      comment_text: req.body.content,
      author_id: req.session.author_id,
      post_id : req.body.post_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
      console.log(err)
    res.status(400).json(err);
  }

});

module.exports = router;
