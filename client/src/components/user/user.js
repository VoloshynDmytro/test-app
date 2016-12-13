import angular from 'angular';
import uiRouter from 'angular-ui-router';
import usersComponent from './users.component';
import UserService from './user.service';

const userModule = angular.module('user', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('user', {
        url: '/users',
        component: 'users',
        title: 'Users',
        resolve: {
          data: loadUsers,
        },
        settings: {
          nav: 2,
          content: '<i class="icon-user"></i> Users'
        }
      });
  })
  .service('UserService', UserService)
  .component('users', usersComponent)
  .name;


function loadUsers(UserService, $stateParams) {
  "ngInject";
  let data = {};

  return UserService.load().then((responseData) => {
    data.users = responseData.users;
    if ( $stateParams.userId )
      data.selectedUser = data.users.find(user => user.id == $stateParams.userId)

    return data;
  });

}

export default userModule;
