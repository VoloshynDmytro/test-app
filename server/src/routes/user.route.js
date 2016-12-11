import express from 'express';
import userCtrl from '../controllers/user.controller';
import albumRouter from './album.route';

const router = express.Router(); // eslint-disable-line new-cap

router.use('/:userId/albums', albumRouter);

router.route('/')
  /** GET /api/users - Get list of users */
  .get(userCtrl.list);

export default router;
