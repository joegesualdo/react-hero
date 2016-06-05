export default {
  output: {
    // YOU NEED TO SET libraryTarget: 'commonjs2'
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0', // Gives use access to propety initializers
          ],
        },
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
        // If we want to use the style.className syntax:
          'css?modules&importLoaders=1&localIdentName=[name]__[local]&sourceMap',
          // 'css?&sourceMap',
          'postcss-loader',
        ],
      },
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  postcss: function (webpack) {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require('postcss-cssnext')(),
      require('precss')(),
      require("postcss-color-function"),
    ];
  },
  eslint: {
    configFile: './.eslintrc.json',
  },
  resolve: {
    // tell webpack which extensions to auto search when it resolves modules. With this,
    // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
    extensions: [
      '',
      '.js',
      '.jsx',
      '.scss',
      '.css',
    ],
    // by default, webpack will search in `web_modules` and `node_modules`. Because we're using
    // Bower, we want it to look in there too
    // modulesDirectories: [ 'node_modules', 'bower_components' ],
  }
};
