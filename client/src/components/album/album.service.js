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

  getAlbum(userId, albumId) {
    let albumMatchesParam = (album) => {
      return album.id == albumId;
    };

    return this.load(userId).then((data) => {
      return data.albums.find(albumMatchesParam)
    });
  }

}

export default AlbumService;
