const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

const port = 3000;
const host = 'localhost';

const server = new WebpackDevServer(webpack(config), {
  contentBase: config.output.path,
  historyApiFallback: true
});

const start = () => {
  server.listen(port, host, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Listening at ${host}:${port}`);
    }
  });
};

module.exports = { port, host, start };
