class UsersController {

  constructor($state, $stateParams) {
    "ngInject";
    this.$state = $state;
    _.extend(this, this.data);
  }

  $onInit() {
    this.originalUsers = this.users;
    if ( this.selectedUser )
      this.users = this.users.filter(user => user.id == this.selectedUser.id);
    this.search = '';
    this.filter = {};
    this.columns = ['name', 'username', 'email', 'phone'];
    this.sorting = {
      order: 'name',
      descending: true
    };
    this.pagination = {
      page: 1,
      size: 5,
      sizeChoices: [5, 10, 30, 50, 100, Infinity]
    };
  }

  chooseSize(selected){
    this.pagination.size = selected;
  }

  isSelected(user) {
    return this.selectedUser && this.selectedUser.id == user.id
  }

  selectUser(selectedUser) {
    if ( selectedUser != this.selectedUser) {
      this.users = this.users.filter(user => user.id == selectedUser.id);
      this.selectedUser = selectedUser;
      this.$state.go('user.albums', { userId: selectedUser.id });
    } else {
      this.users = this.originalUsers;
      this.selectedUser = null;
    }
  }

  uiOnParamsChanged(newParams) {
  }

}
export default UsersController;
