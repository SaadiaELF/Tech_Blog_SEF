const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Prefix all routes defined in `usersRoutes.js` with `/users
router.use('/users', userRoutes);

// Prefix all routes defined in `postsRoutes.js` with `/posts
router.use('/posts', postRoutes);

// Prefix all routes defined in `commentRoutes.js` with `/comments
router.use('/comments', commentRoutes);

module.exports = router;
