const path = require('path');

module.exports = {
  mode: 'development',
  devtool: '(none)',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  watch: false,
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};
