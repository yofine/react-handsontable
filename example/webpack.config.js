var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'babel-polyfill',
      './app.js',
    ],
    vendor: [
      "handsontable/dist/handsontable.full.css"
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
    publicPath: '/assets/'
  },
  resolve:{
    extensions:['', '.js', '.json'],
    modulesDirectories: ['node_modules', './'],
  },
  resolveLoader: {
    root: path.resolve('node_modules')
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("css/[name].css"),
    new webpack.NoErrorsPlugin(),
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("package.json", ["main"]),
    ]),
  ],
  module: {
    loaders: [
      { test: /\.js?$/,
        loader: "babel-loader",
        include: [
          path.resolve(__dirname),
          path.resolve(__dirname, "../src")
        ]
      },
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  }
}
