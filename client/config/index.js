const path = require('path');

const root = process.cwd();
const clientAppRoot = path.join(root, 'client');
const publicRoot = path.join(root, 'www');

module.exports = {
  root: root,
  clientAppRoot: clientAppRoot,
  publicRoot: publicRoot,
  deployPath: path.join(root, 'www/**'),
  webpack: {
    entries: {
      app: path.join(clientAppRoot, 'src/app.js')
    },
    common: path.join(clientAppRoot, 'config', 'webpack', 'webpack.common.config.js'),
    production: path.join(clientAppRoot, 'config', 'webpack', 'webpack.production.config.js'),
    development: path.join(clientAppRoot, 'config', 'webpack', 'webpack.development.config.js'),
    resolveAssets: path.resolve(clientAppRoot, 'src/assets')
  },
  icons: {
    iconsPath: path.join(clientAppRoot, 'src/assets/icons/**/*.svg'),
    fontCssPath: path.join(clientAppRoot, 'src/assets/icons/icons.styl'),
    iconsCss: '../styles/icons.styl',
    fontsPath: '../fonts/',
    fontsDest: path.join(clientAppRoot, 'src/assets/fonts/')
  },
  templates: {
    index: path.join(clientAppRoot, 'src', 'index.jade')
  }

};
