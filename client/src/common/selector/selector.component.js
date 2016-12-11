import template from './selector.jade';
import './selector.styl';

const selectorComponent = {
  bindings: {
    selected: '=',
    options: '=',
    onSelect: '&'
  },
  template: template()
};

export default selectorComponent;
