//import libs
import angular from 'angular';
import jquery from 'jquery';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngMessage from 'angular-messages';
import ngNotifications from 'ng-notifications-bar';
import ngDialog from 'ng-dialog';
import ngPagination from 'angular-utils-pagination';

//import configs
import { configure } from './config/main.config';
import { domainConfig } from './config/domain.config';
import customTemplatesConfig from './config/custom-templates.config';
import helpers from './../helpers/helpers.module';

let coreModule = angular.module('app.core', [
  ngAnimate,
  ngSanitize,
  ngMessage,
  ngPagination,
  ngDialog,
  'ngNotificationsBar',
  helpers
])
  .constant('domain', domainConfig)
  .config(configure)
  .run(customTemplatesConfig)
  .name;

export default coreModule;
