const path = require('path');

module.exports = {
  entry: './src/Bar.js',
  output: {
    filename: 'Bar.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets" : ["es2015", "react"]
          }
        }
      }
    ]
  }
};