import template from './users.component.jade';
import controller from './users.controller';
import './user.styl';

const userListComponent = {
  bindings: {
    data: '<'
  },
  template: template(),
  controller
};

export default userListComponent;
