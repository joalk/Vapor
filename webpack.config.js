const path = require('path');

module.exports = {
  mode: "development",
  entry: './Frontend/index',
  output: {
    path: path.join(__dirname, 'dist'),
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
        test: /\.ts(x)?$/,
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
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.scss',
      '.less',
      '.css',
      '.tsx',
      '.ts',
    ],
  },
};
