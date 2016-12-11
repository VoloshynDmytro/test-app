import Joi from 'joi';

export default {
  // GET /api/users/:userId/albums
  albumsList: {
    params: {
      userId: Joi.number().integer().required()
    }
  },
  // GET /api/albums/:albumId/photos
  photoList: {
    params: {
      albumId: Joi.number().integer().required()
    }
  },
  // POST /api/albums/:albumId/photos
  createPhoto: {
    body: {
      title: Joi.string().required(),
    },
    params: {
      albumId: Joi.number().integer().required()
    }
  }
};
