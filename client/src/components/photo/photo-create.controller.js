var _modal = new WeakMap();
var _photo = new WeakMap();
var _notify = new WeakMap();

class PhotoCreateController {
  constructor(PhotoService, ngDialog, notifications) {
    "ngInject";

    _.extend(this, this.ngDialogData);
    _modal.set(this, ngDialog);
    _photo.set(this, PhotoService);
    _notify.set(this, notifications);
  }

  $onInit() {
    this.photo = {};
  }

  submitPhoto(photo, form){
    this.photo.albumId = this.album.id;
    _photo.get(this).create(photo)
      .then((res)=> {
        console.log('Created photo', res);
        _modal.get(this).close();
        _notify.get(this).showSuccess({message: 'Your photo (post) was successfully sent to an album!!'});
      })
      .catch((response) => {
        console.warn(response);
      });
  }

}

export default PhotoCreateController;
