import template from './switcher.jade';
import './switcher.styl';

const switcher = () => {
  return {
    restrict: 'E',
    scope: {
      model: '=',
      label: '@',
      onSwitch: '&?'
    },
    template,
    link: link
  };

  function link(scope, element, attributes){
    scope.switch = function() {
      scope.model = !scope.model;
    }
  }
};

export default switcher;
