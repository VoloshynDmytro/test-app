import angular from 'angular';
import sidebarComponent from './sidebar.component';

let sidebarModule =
  angular.module('app.sidebar', [])
    .component('sidebar', sidebarComponent)
    .name;

export default sidebarModule;
