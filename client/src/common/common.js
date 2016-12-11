import angular from 'angular';
import selector from './selector/selector';
import switcher from './switcher/switcher';

const commonModule =
  angular.module('app.common', [
    selector,
    switcher
  ]).name;

export default commonModule;
