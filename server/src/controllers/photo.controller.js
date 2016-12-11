import request from 'request';
import config from '../../config/env';

function create(req, res, next) {
  let data = {
    albumId: req.params.albumId,
    title: req.body.title
  };

  request({
    url: `${config.apiUrl}/photos`,
    method: 'POST',
    json: data
  }, (error, response, photo) => {
    if (error) next(error);
    console.log(response.statusCode);

    if (response.statusCode == 201)
      res.json({photo: photo});
  });
}

function list(req, res, next) {
  let albumId = req.params.albumId;

  request(`${config.apiUrl}/albums/${albumId}/photos`, (error, response, photos) => {
    if (error) next(error);

    if (response.statusCode == 200)
      res.json({photos: JSON.parse(photos)})
  });
}

export default { create, list };
