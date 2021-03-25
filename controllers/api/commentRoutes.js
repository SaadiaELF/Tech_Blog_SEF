const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

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

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.destroy({
//       where: {
//         id: req.params.id,
//         author_id: req.session.author_id,
//       },
//     });

//     if (!postData) {
//       res.status(404).json({ message: 'No post found with this id!' });
//       return;
//     }

//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.update({
//       title: req.body.title,
//       content: req.body.content
//     },
//       {
//         where: {
//           id: req.params.id,
//         },
//       });

//     if (!postData) {
//       res.status(404).json({ message: 'No post found with this id!' });
//       return;
//     }

//     res.status(200).json(postData);
//   } catch (err) {
//     console.log(err)
//     res.status(500).json(err);
//   }
// });

module.exports = router;
