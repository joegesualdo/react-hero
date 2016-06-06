const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const postcssCssnext = require('postcss-cssnext');
const StyleLintPlugin = require('stylelint-webpack-plugin');

function webpackConfig(entryFile, outputFile) {
  let config = {
    // the base path which will be used to resolve entry points
    context: __dirname,
    // the main entry point for our application's frontend JS
    entry: {
      app: [
        process.cwd() + "/" + entryFile,
      ]
    },
    output: {
      // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
      path: process.cwd(),
      // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
      filename: outputFile || 'bundle.js',
      // if the webpack code-splitting feature is enabled, this is the path it'll
      //   use to download bundles
      // publicPath: '/assets',
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
            'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap',
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
        {
          test: /\.css$/,
          loader: 'stylelint'
        }
      ],
    },
    postcss: function (webpack) {
      return [
        require("postcss-import")({ addDependencyTo: webpack }),
        require("postcss-url")(),
        require('postcss-cssnext')(),
        require('precss')(),
        require("postcss-color-function"),
        // precss,
        // postcssCssnext
      ];
    },
    eslint: {
      configFile: __dirname + '/eslintrc.json',
      formatter: require('eslint-formatter-pretty'),
    },
    stylelint: {
      configFile: path.join(__dirname, './stylelintrc'),
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
    },
    plugins: [
      // https://github.com/vieron/stylelint-webpack-plugin
      // new StyleLintPlugin({
      //   configFile: '.stylelintrc',
      //   files: './src/stylesheets#<{(||)}>#*.css',
      // }),
      new webpack.HotModuleReplacementPlugin(),
      // This will perform minification
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //     warnings: false
      //   }
      // })
    ],
  };
  return config;
}

module.exports = webpackConfig;
