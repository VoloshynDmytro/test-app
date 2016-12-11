import angular from 'angular';
import uiRouter from 'angular-ui-router';
import albumsComponent from './albums.component';
import AlbumService from './album.service';

const albumModule = angular.module('album', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('user.albums', {
        url: '/{userId}/albums',
        component: 'albums',
        resolve: {
          albums: loadAlbums
        }
      });
  })
  .service('AlbumService', AlbumService)
  .component('albums', albumsComponent)
  .name;


function loadAlbums(AlbumService, $stateParams) {
  "ngInject";
  return AlbumService.load($stateParams.userId).then((data) => {
    return data.albums
  });
}

export default albumModule;
