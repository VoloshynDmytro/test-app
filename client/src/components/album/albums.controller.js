import createPhotoController from '../photo/photo-create.controller';
import createPhotoTemplate from '../photo/photo-create.component.jade';

var _modal = new WeakMap();
var _notify = new WeakMap();

class AlbumsController {

  constructor(ngDialog, notifications, $state, $stateParams) {
    "ngInject";
    _modal.set(this, ngDialog);
    _notify.set(this, notifications);

    this.$state = $state;
    this.selectedUser = $stateParams.userId;

    _.extend(this, this.data);
  }

  $onInit() {
    this.originalAlbums = this.albums;
    if ( this.selectedAlbum )
      this.albums = this.albums.filter(album => album.id == this.selectedAlbum.id);
    this.search = '';
  }

  selectAlbum(selectedAlbum) {
    if ( selectedAlbum != this.selectedAlbum) {
      this.albums = this.albums.filter(album => album.id == selectedAlbum.id);
      this.selectedAlbum = selectedAlbum;
      this.$state.go('user.albums.photos', {
        userId: this.selectedUser,
        albumId: this.selectedAlbum.id
      });
    } else {
      this.albums = this.originalAlbums;
      this.selectedAlbum = null;
    }
  }

  createPhoto(album){
    _modal.get(this).open({
      template: createPhotoTemplate(),
      appendClassName: 'modal_create-photo',
      controller: createPhotoController,
      controllerAs: 'vm',
      bindToController: true,
      data: {
        album: album
      }
    })
  }

}

export default AlbumsController;
