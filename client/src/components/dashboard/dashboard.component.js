import template from './dashboard.jade';
import controller from './dashboard.controller';
import './dashboard.styl';

const dashboardComponent = {
  bindings: {
    data: '<'
  },
  template: template(),
  controller
};

export default dashboardComponent;
