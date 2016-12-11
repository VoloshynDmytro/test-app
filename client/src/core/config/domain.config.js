const coreUrl = process.env.CORE_URL;

export const domainConfig = {
  root: coreUrl,
  api(path) {
    return [this.root, 'api', path].join('/');
  }
};
