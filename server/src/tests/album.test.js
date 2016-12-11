import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## Album APIs', () => {
  let user = {
    id: 1,
  };

  describe('# GET /api/users/:usedId/album', () => {
    it('should get all albums for specified user', (done) => {
      request(app)
        .get(`/api/users/${user.id}/albums`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('object');
          done();
        })
        .catch(done);
    });
  });

});
