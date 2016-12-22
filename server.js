import express from 'express'
import graphqlHTTP from 'express-graphql'
import path from 'path'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import schema from './server/data/schema'

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
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        test: /\.jsx?$/
      },
      {
        test: /\.png$/,
        loader: 'url',
        include: path.join(__dirname, '/public')
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: '/',
    publicPath: '/'
  },
  resolve: {
    root: [__dirname],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

const compiler = webpack(webpackConfig)

const app = new WebpackDevServer(compiler, {
  contentBase: '/public',
  proxy: {'/graphql': `http://localhost:${GRAPHQL_PORT}`},
  publicPath: '/src',
  historyApiFallback: true,
  stats: {colors: true}
})

app.use('/', express.static(path.resolve(__dirname, 'public')))
app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`)
})
