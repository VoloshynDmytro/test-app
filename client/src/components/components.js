import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import User from './user/user';
import Album from './album/album';

const componentsModule = angular.module('app.components', [
  Dashboard,
  User,
  Album
]).name;

export default componentsModule;
