var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    index: [
      'babel-polyfill',
      './src/index',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
  },
  resolve:{
    extensions:['', '.js', '.json'],
    modulesDirectories: ['node_modules', './'],
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("package.json", ["main"]),
    ]),
  ],
  module: {
    loaders: [
      { test: /\.js?$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader:  'style!css'
      }
    ]
  }
}
