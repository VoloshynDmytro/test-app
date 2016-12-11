import angular from 'angular';
import selectorComponent from './selector.component.js';

const selectorModule =
  angular.module('selector', [])
    .component('selector', selectorComponent)
    .name;

export default selectorModule;
