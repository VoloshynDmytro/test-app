import template from './users.component.jade';
import controller from './users.controller';
import './user.styl';

const userListComponent = {
  bindings: {
    users: '<'
  },
  template: template(),
  controller
};

export default userListComponent;
