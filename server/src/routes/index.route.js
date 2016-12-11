import express from 'express';
import userRoutes from './user.route';
import albumRoutes from './album.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);
router.use('/albums', albumRoutes);

export default router;
