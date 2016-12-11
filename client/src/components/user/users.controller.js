class UsersController {

  constructor($state, $stateParams) {
    "ngInject";
    this.$state = $state;
    if ( $stateParams.userId )
      this.selectedUser = this.users[0];
  }

  $onInit() {
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
    this.users = this.users.filter(user => user.id == selectedUser.id);
    this.selectedUser = selectedUser;
    this.$state.go('user.albums', { userId: selectedUser.id });
  }

}
export default UsersController;
