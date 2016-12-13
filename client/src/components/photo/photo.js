import angular from 'angular';
import uiRouter from 'angular-ui-router';
import photosComponent from './photos.component';
import photoCreateComponent from './photo-create.component';
import PhotoService from './photo.service';

const photoModule = angular.module('photo', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('user.albums.photos', {
        url: '/{albumId}/photos',
        component: 'photos',
        resolve: {
          photos: loadPhotos
        }
      });
  })
  .service('PhotoService', PhotoService)
  .component('photos', photosComponent)
  .component('photoCreate', photoCreateComponent)
  .name;


function loadPhotos(PhotoService, $stateParams) {
  "ngInject";
  return PhotoService.load($stateParams.albumId).then((data) => {
    return data.photos
  });
}

export default photoModule;
