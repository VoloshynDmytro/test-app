const _state = new WeakMap();
const _rootScope = new WeakMap();

class HeaderController {
  constructor($rootScope, $state) {
    "ngInject";
    _state.set(this, $state);
    _rootScope.set(this, $rootScope);
  }

}

export default HeaderController;
