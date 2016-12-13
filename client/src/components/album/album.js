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
          data: loadAlbums
        }
      });
  })
  .service('AlbumService', AlbumService)
  .component('albums', albumsComponent)
  .name;


function loadAlbums(AlbumService, $stateParams) {
  "ngInject";
  let data = {};
  return AlbumService.load($stateParams.userId).then((responseData) => {
    data.albums = responseData.albums;
    if ( $stateParams.albumId )
      data.selectedAlbum = data.albums.find(album => album.id == $stateParams.albumId);

    return data
  });
}

export default albumModule;
