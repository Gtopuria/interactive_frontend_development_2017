const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: path.join(PATHS.app, 'main.js'),
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        loader: 'eslint-loader',
        test: /\.js$/,
        include: PATHS.app
      }
    ],
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Speed Typer',
      template: path.join(PATHS.app, 'index.tpl.html'),
      filename: 'index.html'
    })
  ],
  devtool: 'eval-source-map'
};
