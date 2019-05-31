import express from 'express';
import userRoutes from './user.route.js';
import productRoutes from './product.route.js';
import settingRoutes from './setting.route.js';

const router = express.Router();

// mount data fetch routes /
router.use('/v1/user', userRoutes);
router.use('/v1/setting', settingRoutes);
router.use('/v1/product', productRoutes);

module.exports = router;