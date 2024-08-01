const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolveTsAliases } = require('./bin/resolveTsAliases')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { ANALYZE = false, PORT = 3000 } = process.env

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    alias: resolveTsAliases(),
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(jsx|js|tsx|ts)$/,
        include: path.resolve(__dirname),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'src', 'index.ejs'),
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      include: /dir/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
    ...(ANALYZE ? [new BundleAnalyzerPlugin()] : []),
  ],
  devServer: {
    hot: true,
    port: PORT,
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from the 'public' folder
    },
    historyApiFallback: true,
    host: '0.0.0.0',
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }

      const port = devServer.server.address().port
      console.log('App started on port:', port)
    },
  },
}
