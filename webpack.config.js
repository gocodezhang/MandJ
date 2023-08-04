const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist'),
  },
  devtool: 'source-map',
};