const router = require('express').Router();
const characterRoutes = require('./characters');
const userRoutes = require('./users');

router.use('/user', userRoutes);
router.use('/character', characterRoutes);

module.exports = router;
