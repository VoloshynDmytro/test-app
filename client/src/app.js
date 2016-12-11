import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lodash from 'lodash';
import Core from './core/core.module';
import Layout from './layout/layout';
import Common from './common/common';
import Components from './components/components';

import AppComponent from './app.component';
import './assets/styles/app.styl';

angular.module('app', [
    uiRouter,
    Core,
    Layout,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // $locationProvider.html5Mode(true)
  })
  .component('app', AppComponent);
