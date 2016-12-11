class UserService {
  constructor($http, domain) {
    "ngInject";

    this.domain = domain;
    this.$http = $http;
  }

  getUser(id) {
    let userMatchesParam = (user) => {
      return user.id == id;
    };

    return this.load().then((data) => {
      return data.users.find(userMatchesParam)
    });
  }

  load() {
    return this.$http.get(this.domain.api('users'), { cache: true }).then((resp) => {
      return resp.data
    });
  }
}

export default UserService;
