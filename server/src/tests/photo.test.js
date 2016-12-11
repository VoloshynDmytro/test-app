import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## Photo APIs', () => {
  let photo = {
    albumId: 11,
    title: 'NEW PHOTO'
  };

  describe('# POST /api/albums/:albumId/photos', () => {
    it('should create a new photo in album (send post to album)', (done) => {
      request(app)
        .post(`/api/albums/${photo.albumId}/photos`)
        .send(photo)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.photo.title).to.equal(photo.title);
          expect(res.body.photo.albumId).to.equal(photo.albumId);
          photo = res.body.photo;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/albums/:albumId/photos', () => {
    it('should get all photos in album', (done) => {
      request(app)
        .get(`/api/albums/${photo.albumId}/photos`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('object');
          done();
        })
        .catch(done);
    });
  });

});
