let webpack = require('webpack');
var webpackConfig = require("./webpackConfig.js")

function webpackConfigProduction(entryFile, outputFile) {
  let config = webpackConfig(entryFile, outputFile);
  // config.plugins.push(new webpack.optimize.CommonsChunkPlugin('common.js'));
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
  return config
}

module.exports = webpackConfigProduction;
