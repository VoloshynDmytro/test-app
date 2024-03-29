import template from './albums.component.jade';
import controller from './albums.controller';
import './album.styl';

const albumsComponent = {
  bindings: {
    data: '<'
  },
  template: template(),
  controller
};

export default albumsComponent;
