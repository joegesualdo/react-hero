var webpack = require("webpack");

function webpackCompiler(webpackConfig) {
  var compiler = webpack(webpackConfig);
  return compiler;
}

module.exports = webpackCompiler;
