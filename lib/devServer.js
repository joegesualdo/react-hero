'user strict'

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpackConfig.js")
var webpackCompiler = require("./webpackCompiler.js")
var webpackDevServerConfig = require("./webpackDevServerConfig.js")

class DevServer {
  constructor(entryFile, outputFile, host, port) {
    let config = webpackConfig(entryFile, outputFile)
    config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
    var compiler = webpackCompiler(config);
    var server = new WebpackDevServer(compiler, webpackDevServerConfig())
    return server;
  }
}

module.exports = DevServer;
