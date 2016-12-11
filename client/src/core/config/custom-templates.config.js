let customTemplatesConfig = ($templateCache) => {
  "ngInject";
  $templateCache.put('error-messages', require('../templates/validation.jade')());
};

export default customTemplatesConfig;
