class PhotoService {
  constructor($http, domain) {
    "ngInject";

    this.domain = domain;
    this.$http = $http;
  }

  load(albumId) {
    return this.$http.get(this.domain.api(`albums/${albumId}/photos`), { cache: true }).then((resp) => {
      return resp.data
    });
  }

  create(photo) {
    return this.$http.post(this.domain.api(`albums/${photo.albumId}/photos`), photo).then((resp) => {
      return resp.data
    });
  }

}

export default PhotoService;
