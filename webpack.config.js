module.exports = {
  mode: 'development',
  devtool: '(none)',
  entry: './src/main.js',
  output: {
    path: `${__dirname}/dist/`,
    filename: 'app.js',
  },
  watch: true
};
