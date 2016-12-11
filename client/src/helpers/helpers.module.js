import angular from 'angular';
import stringFilters from './filters/string-filters';
import commonFilters from './filters/common-filters';

let helpersModule =
  angular.module('helpers', [stringFilters, commonFilters])
  .name;

export default helpersModule;
