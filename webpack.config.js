const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './build/index',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/bundle',
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader"
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  devtool: "source-map",
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts',
    ],
  },
};
