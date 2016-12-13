import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';

const dashboardModule = angular.module('dashboard', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      url: '/',
      component: 'dashboard',
      resolve: {
        data: loadData
      },
      title: 'Dashboard',
      settings: {
        nav: 1,
        content: '<i class="icon-settings"></i> Dashboard'
      }
    });
})
  .component('dashboard', dashboardComponent)
  .name;

function loadData(UserService, AlbumService, PhotoService, $q) {
  "ngInject";
  let data = {};
  let requests = [];

  return UserService.load().then(usersResponse => {
    usersResponse.users.forEach(user => {
      let albumsDeferred = $q.defer();
      requests.push(albumsDeferred.promise);

      AlbumService.load(user.id).then((albumsResponse) => {
        user.albumsCount = albumsResponse.total;

        albumsResponse.albums.forEach(album => {
          let photosDeferred = $q.defer();
          requests.push(photosDeferred.promise);

          PhotoService.load(album.id).then((photosResponse) => {
            user.photosCount = photosResponse.total;
            albumsDeferred.resolve();
            photosDeferred.resolve()
          });
        });

        user.albumsCount = albumsResponse.total;
      });
    });

    return $q.all(requests).then(() => {
      data.users = usersResponse.users;
      return data;
    });
  });
}

export default dashboardModule;
