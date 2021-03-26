const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Prefix all routes defined in `homeRoutes.js` with `/
router.use('/', homeRoutes);

// Prefix all routes defined in `api` folder with `/api
router.use('/api', apiRoutes);

module.exports = router;
