import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import User from './user/user';
import Album from './album/album';
import Photo from './photo/photo';

const componentsModule = angular.module('app.components', [
  Dashboard,
  User,
  Album,
  Photo
]).name;

export default componentsModule;
