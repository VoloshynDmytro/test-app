const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../index');

module.exports = function(options) {
  const env = require('../env/' + options.env);
  return {
    entry: {},
    cache: true,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: [/app\/lib/, /node_modules/],
          loader: 'ng-annotate!babel'
        },
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus?resolve url&paths[]=node_modules&paths[]=client/src/assets')
        },
        {
          test: /\.jade$/,
          loader: 'jade'
        },
        {
          test: /\.html$/,
          loader: 'html'
        },
        {
          test: /\.(jpg|jpeg|gif|png)$/,
          exclude: /node_modules/,
          loader:'url-loader?limit=1024&name=images/[name].[hash].[ext]'
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=1024&name=fonts/[name].[hash].[ext]'
        },
        {
          test: /jquery\.js$/, loader: 'expose?jQuery!expose?$'
        }
      ],
      noParse: /angular\/angular.js/
    },
    postcss: function () {
      return [autoprefixer];
    },
    plugins: [
      new ExtractTextPlugin('styles/[name].[chunkhash].css', {
        allChunks: true
      }),
      // Automatically move all modules defined outside of application directory to vendor bundle.
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module, count) {
          return module.resource && module.resource.indexOf(config.clientAppRoot) === -1;
        }
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: config.templates.index,
        favicon: '',
        inject: 'body',
        hash: true,
        chunksSortMode: 'dependency',
        coreURL: env.coreUrl,
        env: options.env
      })
    ]
  };
};
