import template from './photo-create.component.jade';
import controller from './photo-create.controller';

const photoCreateComponent = {
  bindings: {
    photos: '<'
  },
  template: template(),
  controller
};

export default photoCreateComponent;
