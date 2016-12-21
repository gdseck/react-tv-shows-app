const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/src'),
        loader: 'babel-loader'
      },
      {
        test: /\.png$/,
        loader: 'url',
        include: path.join(__dirname, '/public')
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [HtmlWebpackPluginConfig],
  resolve: {
    root: [__dirname],
    extensions: ['', '.js', '.jsx']
  }
}
