
export function configure(
  $logProvider,
  paginationTemplateProvider,
  ngDialogProvider,
  ngProgressLiteProvider,
  notificationsConfigProvider) {
    "ngInject";

    if ($logProvider.debugEnabled) {
        $logProvider.debugEnabled(true);
    }

    paginationTemplateProvider.setString(require('../templates/pagination.jade')());

    ngDialogProvider.setDefaults({
      className: 'ngdialog-theme-plain',
      plain: true,
      showClose: true,
      closeByDocument: true,
      closeByEscape: true
  });
  ngProgressLiteProvider.settings.speed = 500;

  notificationsConfigProvider.setAutoHide(true);
  notificationsConfigProvider.setHideDelay(2000);
  notificationsConfigProvider.setAcceptHTML(true);
  notificationsConfigProvider.setAutoHideAnimationDelay(1200);
}
