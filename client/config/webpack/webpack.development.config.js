const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const commonConfig = require('./webpack.common.config');
const config = require('../index');
const env = require('../env/development');

module.exports = webpackMerge(
    commonConfig({env: 'development'}),
    {
      devtool: 'cheap-source-map',
      entry: {
        app: [config.webpack.entries.app]
      },
      output: {
        filename: 'js/[name].js',
        publicPath: '/',
        path: path.join(config.clientAppRoot, 'src')
      },
      devServer: {
        quiet: true,
        port: env.devServer.port,
        host: env.devServer.host,
        historyApiFallback:{
          disableDotRule: true
        },
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
        }
      },
      plugins: [
        new DashboardPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('development'),
            'CORE_URL': JSON.stringify(env.coreUrl),
          }
        }),
        // Adds webpack HMR support. It act's like livereload,
        // reloading page after webpack rebuilt modules.
        // It also updates stylesheets and inline assets without page reloading.
        new webpack.HotModuleReplacementPlugin()
      ]
  }
);
