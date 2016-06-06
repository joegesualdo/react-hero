let webpackConfig = require('./webpackConfig.js')

function webpackDevServerConfig() {
  return {
    hot: true,
    inline: true
  }
}

module.exports = webpackDevServerConfig;
