import request from 'request';
import config from '../../config/env';

function list(req, res, next) {
  let userId = req.params.userId;

  request(`${config.apiUrl}/users/${userId}/albums`, (error, response, albums) => {
    if (error) next(error);

    if ( response.statusCode == 200 )
      res.json({ albums: JSON.parse(albums) })
  });
}

export default { list };
