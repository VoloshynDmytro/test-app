import angular from 'angular';
import switcher from './switcher.component';

const switcherModule =
  angular.module('app.switcher', [])
    .directive('switcher', switcher)
    .name;

export default switcherModule;
