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
          users: loadUsers
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
  if ( $stateParams.userId )
    return UserService.getUser($stateParams.userId).then((user) => {
      console.log(user);
      return [user]
    });
  else
    return UserService.load().then((data) => {
      return data.users
    });
}

export default userModule;
