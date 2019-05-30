var express = require('express');
var userRoutes = require ('./user.route.js');
var productRoutes = require ('./product.route.js');
var settingRoutes = require ('./setting.route.js');

const router = express.Router();


// mount data fetch routes /
router.use('/v1/auth/user', userRoutes);
router.use('/v1/auth/setting', settingRoutes);
router.use('/v1/public/product', productRoutes);

module.exports = router;