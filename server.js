import express from 'express'
import graphqlHTTP from 'express-graphql'
import path from 'path'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import mongoose from 'mongoose'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import schema from './server/data/graphql/schema'

const APP_PORT = 3000
const GRAPHQL_PORT = 4000

const graphQLServer = express()

graphQLServer.use('/', graphqlHTTP({
  schema,
  pretty: true,
  graphiql: true
}))

graphQLServer.listen(GRAPHQL_PORT, () => () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
))

const webpackConfig = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src', 'index.js')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?publicPath=/assets/'
        // include: path.join(__dirname, '/public')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: '/assets/',
    publicPath: '/assets/'
  },
  resolve: {
    root: [__dirname],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css')
  ]
}

const compiler = webpack(webpackConfig)

const app = new WebpackDevServer(compiler, {
  contentBase: '/public',
  proxy: {'/graphql': `http://localhost:${GRAPHQL_PORT}`},
  publicPath: '/assets',
  historyApiFallback: true,
  stats: {colors: true, chunks: false}
})

app.use('/', express.static(path.resolve(__dirname, 'public')))
app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`)
  mongoose.connect('mongodb://localhost/seriesapp')
})
