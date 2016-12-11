const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const config = require('../index');
const env = require('../env/production');

module.exports = webpackMerge(
  commonConfig({env: 'production'}),
  {
    devtool: 'cheap-source-map',
    entry: config.webpack.entries,
    output: {
      filename: 'js/[name].[hash].js',
      publicPath: '/',
      path: config.publicRoot
    },
    plugins: [
      // Reduces bundles total size
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        },

        mangle: {
         keep_fnames: true,
          // You can specify all variables that should not be mangled.
          // For example if your vendor dependency doesn't use modules
          // and relies on global variables. Most of angular modules relies on
          // angular global variable, so we should keep it unchanged
         except: ['$super', '$', 'exports', 'require', 'angular', '']
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
          'CORE_URL': JSON.stringify(env.coreUrl),
        }
      })
    ]
  }
);
