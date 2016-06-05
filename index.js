const DevServer = require('./lib/dev-server.js');
const webpackConfigProduction = require('./lib/webpackConfigProduction.js');
const webpackCompiler = require('./lib/webpackCompiler.js');

class ReactHero {
  static createServer(entryFile, outputFile, host = 'localhost', port = 8080) {
    const server = new DevServer(entryFile, outputFile, host, port);
    server.listen(port);
  }

  static createDistribution(entryFile, outputFile) {
    const config = webpackConfigProduction(entryFile, outputFile);
    const compiler = webpackCompiler(config);

    compiler.run(function(err, stats) {
      if (err) {
        console.log('There was an error');
        return;
      }

      const jsonStats = stats.toJson();
      if (jsonStats.errors.length > 0) {
        console.log('There were some errors');
        // console.log(jsonStats.errors);
      }
      if (jsonStats.warnings.length > 0) {
        console.log('There were some warnings');
        // console.log(jsonStats.warnings);
      }
      console.log('DONE');
      // successfullyCompiled();
    });
  }

}

module.exports = ReactHero;

