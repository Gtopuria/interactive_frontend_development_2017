var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  devServer: {
    port: 8088
  },
  output: {
    filename: 'dist/bundle.js',
    path: path.join(__dirname, '/'),
  }
};

