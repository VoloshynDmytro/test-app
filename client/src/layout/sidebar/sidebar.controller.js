class SidebarController {
  constructor($state) {
    "ngInject";
    this.$state = $state;
    this.states = this.$state.get();
    this.getNavRoutes();
  }

  getNavRoutes() {
    this.navRoutes = this.states.filter(function(r) {
      return r.settings && r.settings.nav;
    }).sort(function(r1, r2) {
      return r1.settings.nav - r2.settings.nav;
    });
  }

  isCurrent(route) {
    if (!route.title || !this.$state.current || !this.$state.current.title) {
      return '';
    }
    let menuName = route.title;
    return this.$state.current.title.substr(0, menuName.length) === menuName ? 'active' : '';
  }
}

export default SidebarController;
