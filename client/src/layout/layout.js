import angular from 'angular';
import sidebar from './sidebar/sidebar';
import header from './header/header';

let layoutModule =
  angular.module('app.layout', [header, sidebar])
    .name;

export default layoutModule;
