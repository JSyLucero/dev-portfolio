// webpack.config.js
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'bundle': [
      'babel-polyfill',
      './client/src/index.js',
    ],
    "bundle.min": [
      'babel-polyfill',
      './client/src/index.js',
    ]
  },
  output: {
    path: resolve(__dirname, './client/public/'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [{
      test: /.js(x)?$/,
      loader: "babel-loader",
      include: resolve(__dirname, './client'),
      exclude: /node_modules/,
      options: {
        presets: ['es2015', 'react', 'stage-1'],
        plugins: [
          ["module-resolver", {
            "root": ["./client/src/components"],
            "alias": {
              "assets": "./client/public/assets",
              "services": "./client/src/services",
              "models": "./client/src/models"
            }
          }],
          ["react-hot-loader/babel"]
        ]
      }
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  devServer: {
    hot: true,
    inline: true,
    overlay: true,
    contentBase: resolve(__dirname, './client/public/'), //serve your static files from here
    watchContentBase: true,
    proxy: [ // allows redirect of requests to webpack-dev-server to another destination
      {
        context: [ 
          '/api/**', 
        ],  // can have multiple
        target: 'http://localhost:8000', //server and port to redirect to
        secure: false //don't use https
      }
    ],
    port: 3030, // port webpack-dev-server listens to, defaults to 8080
    overlay: { // Shows a full-screen overlay in the browser when there are compiler errors or warnings
      warnings: false, // defaults to false
      errors: false, // defaults to false
    },
    historyApiFallback: {
      true: true,
      index: "index.html"
    },
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      title: "ArtXperience",
      template: "./client/public/index.html",
      inject: false,
      hash: true
    })
  ],
  devtool: 'cheap-module-source-map',
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min.js$/
    })]
  },
}