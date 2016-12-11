import request from 'request';
import config from '../../config/env';

function list(req, res, next) {

  request(`${config.apiUrl}/users`, (error, response, users) => {
    if (error) next(error);

    if ( response.statusCode == 200 )
      res.json({ users: JSON.parse(users) })
  });
}

export default { list };
