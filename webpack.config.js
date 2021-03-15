const path = require('path');

module.exports = {
  mode: 'development',
  entry: './Frontend/App.jsx',
  output: {
    path: path.join(__dirname, './bundle'),
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
        test: /\.jsx?/,
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
};
