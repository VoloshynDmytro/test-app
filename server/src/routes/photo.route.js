import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import photoCtrl from '../controllers/photo.controller';

const router = express.Router({mergeParams: true}); // eslint-disable-line new-cap

router.route('/')
/** GET /api/albums/:albumId/photos - Get list of album photos */
  .get(validate(paramValidation.photoList), photoCtrl.list)

  /** POST /api/albums/:albumId/photos - Create new photo (post to an album) */
  .post(validate(paramValidation.createPhoto), photoCtrl.create);

export default router;
