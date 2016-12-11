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
      title: 'Dashboard',
      settings: {
        nav: 1,
        content: '<i class="icon-settings"></i> Dashboard'
      }
    });
})
  .component('dashboard', dashboardComponent)
  .name;

export default dashboardModule;
