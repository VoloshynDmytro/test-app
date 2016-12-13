import template from './photos.component.jade';
import controller from './photos.controller';
import './photo.styl';

const photosComponent = {
  bindings: {
    photos: '<'
  },
  template: template(),
  controller
};

export default photosComponent;
