class AlbumService {
  constructor($http, domain) {
    "ngInject";

    this.domain = domain;
    this.$http = $http;
  }

  load(userId) {
    return this.$http.get(this.domain.api(`users/${userId}/albums`), { cache: true }).then((resp) => {
      return resp.data
    });
  }

}

export default AlbumService;
