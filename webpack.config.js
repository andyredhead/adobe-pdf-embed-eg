const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  entry: {
    index: './src/index.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/index.html',
      title: 'Home page',
      filename: 'index.html',
      inject: true,
      chunks: ['index']
    }),
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './static'),
    clean: true,
  },
};