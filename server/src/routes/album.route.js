import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import albumCtrl from '../controllers/album.controller';
import photoRouter from './photo.route';

const router = express.Router({mergeParams: true}); // eslint-disable-line new-cap

router.use('/:albumId/photos', photoRouter);

router.route('/')

/** GET /api/users/:userId/albums - Get list of user albums */
  .get(validate(paramValidation.albumsList), albumCtrl.list);

export default router;
