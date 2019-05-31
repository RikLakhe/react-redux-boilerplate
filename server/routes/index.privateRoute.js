import express from 'express';

import authRoutes from './auth.route';

const router = express.Router();

// mount auth routes at /auth
router.use('/v1', authRoutes);

module.exports = router;